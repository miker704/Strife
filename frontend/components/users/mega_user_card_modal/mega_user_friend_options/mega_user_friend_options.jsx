import React from 'react';
import { useRef, useEffect, useState } from "react";
import REACT_PORTAL from '../../../../utils/ReactPortal_api_util';
import { closeOnEsc } from "../../../../utils/close_hook_modals_api_utils";
import { fetchUser } from '../../../../utils/session_api_util';
import { deleteFriendship } from '../../../../utils/friendship_api_util';
import { CopyIDIcon } from '../../../front_end_svgs/Strife_svgs';


const MegaUPCUserFriendshipOptionsModal = (props) => {

    const dmMembersArray = (a, b) => a.length === b.length && a.every((val, idx) => val === b[idx]);

    const popUpRef = useRef(null);
    closeOnEsc(props.setShowPopup);

    useEffect(() => {

        if (props.member.id === props.currentUser.id) {
            props.setShowPopup(false);
        }
        else {
            fetchUser(props.member.id).then((result) => {
                props.setMemberData(result);
                props.setMemberStatus(result);
            }, (error) => {
                props.setShowPopup(false);
            })
        }

        return function cleanUp () {
            if (props.errors.length > 0) {
                props.removeFriendshipErrors();
            }
            if (props.dmServerErrors.length > 0) {
                props.removeDmServerErrors();
            }
            if (props.sessionErrors.length > 0) {
                props.removeSessionErrors();
            }
        }

    }, []);



    const handleSubModalCloseOnOutsideClick = (e) => {
        e.preventDefault();
        props.setShowPopup(false);
    }

    const handleDeleteFriendShip = (e) => {
        e.preventDefault();
        fetchUser(props.member.id)
            .then((result) => {
                if (result.friend_request_status === 3) {
                    props.deleteFriendship({ user_id: props.currentUser.id, friend_id: props.member.id }).then(() => {
                        App.StrifeCore.perform('parse_delete_friend_request', { user_id: props.currentUser.id, friend_id: props.member.id });
                        props.setShowPopup(false);
                    });
                }
                else {
                    props.setShowPopup(false);
                }
            }, (error) => { props.setShowPopup(false); })
        return;
    }



    const handleBlockUser = (e) => {
        e.preventDefault();
        let validBlockStatuses = [-2, 0];
        fetchUser(props.member.id)
            .then((result) => {
                if (validBlockStatuses.includes(result.friend_request_status) === true) {
                    props.blockUser({ user_id: props.currentUser.id, friend_id: props.member.id }).then(() => {
                        App.StrifeCore.perform('parse_block_request', { user_id: props.currentUser.id, friend_id: props.member.id });
                        props.setShowPopup(false);
                    }, (error) => { props.setShowPopup(false); });
                }
                else {
                    props.setShowPopup(false);
                }
            }, (error) => {
                props.setShowPopup(false);
            });
        return;
    }



    const deleteRelationShipThenBlockUser = (e) => {
        e.preventDefault();
        let valid_ids = [1, 2, 3];
        //so the way relationships work blocks cant be implemented until the prior relationship 
        // any relation with statuses > 0 is deleted first so we do that then block.
        fetchUser(props.member.id)
            .then((result) => {

                if (valid_ids.includes(result.friend_request_status) === true) {
                    // not using props dispatch as we dont want the buttons on the mega upc modal to rapidly switch from 
                    // (prior state) to send friend request to no buttons at all 
                    deleteFriendship({ user_id: props.currentUser.id, friend_id: props.member.id })
                        .then(() => {
                            props.blockUser({ user_id: props.currentUser.id, friend_id: props.member.id })
                                .then(() => {

                                    App.StrifeCore.perform('parse_block_request', { user_id: props.currentUser.id, friend_id: props.member.id });
                                    props.setShowPopup(false);

                                }, (error) => {
                                    props.setShowPopup(false);
                                });

                        }, (error) => {
                            props.setShowPopup(false);
                        });
                }
                else { props.setShowPopup(false); }
            }, (error) => {
                props.setShowPopup(false);
            })
        return;

    }


    const handleUnBlockUser = (e) => {
        e.preventDefault();
        fetchUser(props.member.id)
            .then((result) => {
                if (result.friend_request_status === -1) {
                    props.unBlockUser({ friend_id: props.member.id, user_id: props.currentUser.id }).then(() => {
                        App.StrifeCore.perform('parse_unblock_request', { user_id: props.currentUser.id, friend_id: props.member.id });
                        props.setShowPopup(false);
                    });
                }
                else {
                    props.setShowPopup(false);
                }
            }, (error) => {
                props.setShowPopup(false);
            })
        return;
    }


    const handleBlockingOfUser = (e) => {
        e.preventDefault();
        let validBlockStatuses = [-2, 0];
        let valid_ids = [1, 2, 3];

        fetchUser(props.member.id).then((result) => {
            if (valid_ids.includes(result.friend_request_status) === true) {
                deleteRelationShipThenBlockUser(e);
            }
            else if (validBlockStatuses.includes(result.friend_request_status) === true) {
                handleBlockUser(e);
            }
            else {
                props.setShowPopup(false);
            }
        }, (error) => { props.setShowPopup(false); });
        return;
    }




    const handleDmVerification = (e) => {
        e.preventDefault();
        e.stopPropagation();
        let blockIds = [-2, -1];
        fetchUser(props.member.id).then((result) => {
            if (blockIds.includes(result.friend_request_status)) {
                props.setShowPopup(false);
                return;
            }
            else {
                handleDm(e);
            }

        }, (error) => { props.setShowPopup(false); })

    }


    const handleDm = (e) => {
        e.preventDefault();
        e.stopPropagation();
        const memberIds = [props.currentUser.id, parseInt(props.member.id)].sort((a, b) => a - b);
        for (let dmServer of props.dmServers) {
            if (dmMembersArray(Object.values(dmServer.members).map((member) => member.id).sort((a, b) => a - b), memberIds)) {
                if (props.history.location.pathname !== `/$/channels/@me/${dmServer.id}`) {
                    props.history.push(`/$/channels/@me/${dmServer.id}`);
                }
                props.setShowPopup(false);
                props.setShowMegaPopUp(false);
                return;
            }
        }

        let submissionState = {
            owner_id: props.currentUser.id,
            dm_member_ids: memberIds
        }
        let newDmServer;
        props.createDmServer(submissionState).then((action) => {
            newDmServer = action.dmserver;
            App.StrifeCore.perform('parse_New_Invited_DM_Member', { dm_member_id: props.member.id, dm_server_id: newDmServer.id });
            props.reSyncCurrentUser(props.currentUser.id).then(() => {
                props.history.push(`/$/channels/@me/${newDmServer.id}`);
                props.setShowPopup(false);
                props.setShowMegaPopUp(false);
            });
        });
        return;
    }

    return (
        <REACT_PORTAL wrapperId={'sub-modal'} classNameId={'subModal'} onClick={(e) => e.stopPropagation()}>
            <div className="mfom-layer" onClick={(e) => handleSubModalCloseOnOutsideClick(e)}>
                <div className='mfom-inner-layer' style={{ top: `${props.top}px`, left: `${props.left}px` }} >
                    <div className='mfom-menu' onClick={(e) => e.stopPropagation()} ref={popUpRef}>
                        <div className='mini-menu-scroller global-scroll-thin-raw-attributes global-scroller-base' style={{ overflow: `hidden scroll`, paddingRight: `0px` }}>

                            <div role='group'>

                                {
                                    props.memberStatus.friend_request_status === 3 ? (
                                        <div className="mfom-item red" onClick={(e) => handleDeleteFriendShip(e)}>
                                            <div className="mfom-item-label">Remove Friend</div>
                                        </div>
                                    ) : ("")
                                }

                                {
                                    props.memberStatus.friend_request_status !== -1 ? (
                                        <div className="mfom-item red" onClick={(e) => handleBlockingOfUser(e)}>
                                            <div className="mfom-item-label">Block</div>
                                        </div>
                                    ) : ("")
                                }

                                {
                                    props.memberStatus.friend_request_status !== -1 ? (
                                        <div className="mfom-item red" onClick={(e) => props.setShowPopup(false)}>
                                            <div className="mfom-item-label">Report User Profile</div>
                                        </div>
                                    ) : ("")
                                }
                                {
                                    props.memberStatus.friend_request_status === -1 ? (
                                        <div className="mfom-item" onClick={(e) => handleUnBlockUser(e)}>
                                            <div className="mfom-item-label">Unblock</div>
                                        </div>
                                    ) : ("")
                                }

                                {
                                    props.memberStatus.friend_request_status >= 0 ? (
                                        <div className="mfom-item" onClick={(e) => handleDmVerification(e)}>
                                            <div className="mfom-item-label">Message</div>
                                        </div>
                                    ) : ("")
                                }

                            </div>

                            <div className='mfom-content-seperator'></div>
                            <div role='group'>
                                <div className="mfom-item" onClick={(e) => {
                                    navigator.clipboard.writeText(props.member.id).then(() => { props.setShowPopup(false); })
                                }}>
                                    <div className="mfom-item-label">Copy User ID</div>
                                    <div className='mfom-icon-container'><CopyIDIcon className="mfom-id-icon" /></div>
                                </div>
                            </div>
                            <div className='mfom-bottom-div'></div>
                        </div>
                    </div>
                </div>
            </div>
        </REACT_PORTAL >
    )


}

export default MegaUPCUserFriendshipOptionsModal;