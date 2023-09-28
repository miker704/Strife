import React from "react";
import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import defaultStrifeSpiderQuad from '../../../../app/assets/images/strife_spider_quad.png';
import { fetchMutualServers, fetchUser } from '../../../utils/session_api_util';
import { deleteFriendship } from '../../../utils/friendship_api_util';
import MegaUPCModalContainer from "../../users/mega_user_card_modal/mega_user_card_modal_container";

const O2ODMChatFirstMessage = (props) => {

    useEffect(() => {


        setDmServer(props.dmServer);
        setMutualServersLoaded(false);

        props.fetchUser(props.memberId).then((action) => {
            const newfriend = action.user
            setMemberData(newfriend);
            setMemberStatus(newfriend);
            // props.renderBlockedUserSnackBarContainer(blockedIds.includes(newfriend.friend_request_status));
        })

        return function cleanUp () {
            if (props.errors.length > 0) {
                props.removeSessionErrors();
            }
            if (props.dmServerErrors.length > 0) {
                props.removeDmServerErrors();
            }
            if (props.friendshipErrors.length > 0) {
                props.removeFriendshipErrors();
            }
        }

    }, [props.dmServer?.id]);


    useEffect(() => {

        if (props.dmServer?.one_to_one_dm) {
            fetchMutualServers({ userId: props.currentUser.id, other_user_id: props.memberId }).then((result) => {
                let finalResult = Object.values(result);
                setMutualServers(finalResult);
                setMutualServersLoaded(true);
            }, (error) => {
                setMutualServers([]);
                setMutualServersLoaded(true)
            })
        }
    }, [props.dmServer?.id]);

    useEffect(() => {
        let friendDataReSync = props.users.find((user) => user.id === member.id);
        if (friendDataReSync) {
            setMemberData(friendDataReSync);
            setMemberStatus(friendDataReSync);
            // props.renderBlockedUserSnackBarContainer(blockedIds.includes(friendDataReSync.friend_request_status));
        }
        // else {
        //     if (member?.id && friendDataReSync === undefined) {
        //         props.fetchUser(member.id).then((action) => {
        //             const newfriend = action.user
        //             setMemberData(newfriend);
        //             setMemberStatus(newfriend);
        //         });
        //     }
        // }
    }, [props.users])

    const params = useParams();
    const [dmServer, setDmServer] = React.useState({});
    const [memberStatus, setMemberStatus] = useState({});
    const [member, setMemberData] = useState({});
    const [mutualServers, setMutualServers] = useState([]);
    const [mutualServersLoaded, setMutualServersLoaded] = useState(false);
    const [showMegaPopUp, setShowMegaPopUp] = useState(false);
    const blockedIds = [-2, -1];

    const renderMegaUpcModal = () => {
        if (showMegaPopUp === true) {
            return (
                <MegaUPCModalContainer setShowMegaPopUp={setShowMegaPopUp} member={member} memberId={member?.id} o2oStartUp={true} />
            )
        }
    }

    const disableTextArea = () => {
        let chatInputArea = document.querySelector(".server-message-chat-box-area");
        let blockedIds = [-1, -2];
        if (blockedIds.includes(member.friend_request_status)) {
            if (chatInputArea) { chatInputArea.disabled = true; chatInputArea.readOnly = true; }
        }
    }
    const enableTextArea = () => {
        let chatInputArea = document.querySelector(".server-message-chat-box-area");
        if (chatInputArea) { chatInputArea.disabled = false; chatInputArea.readOnly = false; }
    }

    const handleSendFriendRequest = (e) => {
        e.preventDefault();
        fetchUser(member.id).then((result) => {
            if (result.friend_request_status === 0) {
                props.createFriendship({ user_id: props.currentUser.id, friend_id: member.id }).then((action) => {
                    let new_friend_request = action.friendship;
                    App.StrifeCore.perform('parse_add_friend_request', { new_friend_request });
                })
            }
            else { return; }
        });
        return;
    }

    const handleAcceptFriendRequest = (e) => {
        e.preventDefault();
        fetchUser(member.id).then((result) => {
            if (result.friend_request_status === 2) {
                props.updateFriendship({ user_id: props.currentUser.id, friend_id: member.id }).then(() => {
                    App.StrifeCore.perform('parse_update_friend_request', { user_id: props.currentUser.id, friend_id: member.id });
                });
            }
            else { return; }
        });
        return;
    }

    const handleIgnoreFriendRequest = (e) => {
        e.preventDefault();
        fetchUser(member.id).then((result) => {
            if (result.friend_request_status === 2) {
                props.deleteFriendship({ user_id: props.currentUser.id, friend_id: member.id }).then(() => {
                    App.StrifeCore.perform('parse_delete_friend_request', { user_id: props.currentUser.id, friend_id: member.id });
                });
            }
            else { return; }
        });
        return;
    }

    const handleDeleteFriendShip = (e) => {
        e.preventDefault();
        fetchUser(member.id)
            .then((result) => {
                if (result.friend_request_status === 3) {
                    props.deleteFriendship({ user_id: props.currentUser.id, friend_id: member.id }).then(() => {
                        App.StrifeCore.perform('parse_delete_friend_request', { user_id: props.currentUser.id, friend_id: member.id });
                    });
                }
            }, (error) => {
                console.info(`%c[Error Occured]: %c[Friend Deletion Failed ... Try Again Later]`, "color:#00FD61;", "color:#8442f4;");
            })
        return;
    }

    const handleBlockUser = (e) => {
        e.preventDefault();
        let validBlockStatuses = [-2, 0];
        fetchUser(member.id)
            .then((result) => {
                if (validBlockStatuses.includes(result.friend_request_status) === true) {
                    props.blockUser({ user_id: props.currentUser.id, friend_id: member.id }).then(() => {
                        App.StrifeCore.perform('parse_block_request', { user_id: props.currentUser.id, friend_id: member.id });
                    }, (error) => {
                        console.info(`%c[Error Occured]: %c[User Could Not Be Blocked ... Try Again Later]`, "color:#00FD61;", "color:#8442f4;");
                    });
                }
            }, (error) => {
                console.info(`%c[Error Occured]: %c[User Data Could not be Fetched Proceeded Actions Failed ... Try Again Later]`, "color:#00FD61;", "color:#8442f4;");
            });
        return;
    }

    const deleteRelationShipThenBlockUser = (e) => {
        e.preventDefault();
        let valid_ids = [1, 2, 3];
        //so the way relationships work blocks cant be implemented until the prior relationship 
        // any relation with statuses > 0 is deleted first so we do that then block.
        fetchUser(member.id)
            .then((result) => {

                if (valid_ids.includes(result.friend_request_status) === true) {
                    // not using props dispatch as we dont want the buttons on the mega upc modal to rapidly switch from 
                    // (prior state) to send friend request to no buttons at all 
                    deleteFriendship({ user_id: props.currentUser.id, friend_id: member.id })
                        .then(() => {
                            props.blockUser({ user_id: props.currentUser.id, friend_id: member.id })
                                .then(() => {
                                    App.StrifeCore.perform('parse_block_request', { user_id: props.currentUser.id, friend_id: member.id });
                                }, (error) => {
                                    console.info(`%c[Error Occured]: %c[User Could Not Be Blocked ... Try Again Later]`, "color:#00FD61;", "color:#8442f4;");
                                });

                        }, (error) => {
                            console.info(`%c[Error Occured]: %c[Friend Deletion Failed ... Try Again Later]`, "color:#00FD61;", "color:#8442f4;");
                        });
                }
            }, (error) => {
                console.info(`%c[Error Occured]: %c[User Data Could not be Fetched Proceed Actions Failed ... Try Again Later]`, "color:#00FD61;", "color:#8442f4;");
            })
        return;
    }


    const handleUnBlockUser = (e) => {
        e.preventDefault();
        fetchUser(member.id)
            .then((result) => {
                if (result.friend_request_status === -1) {
                    props.unBlockUser({ friend_id: member.id, user_id: props.currentUser.id }).then(() => {
                        App.StrifeCore.perform('parse_unblock_request', { user_id: props.currentUser.id, friend_id: member.id });
                    });
                }
            }, (error) => {
                console.info(`%c[Error Occured]: %c[User Could Not Be UnBlocked ... Try Again Later]`, "color:#00FD61;", "color:#8442f4;");
            })
        return;
    }


    const handleBlockingOfUser = (e) => {
        e.preventDefault();
        let validBlockStatuses = [-2, 0];
        let valid_ids = [1, 2, 3];

        fetchUser(member.id).then((result) => {
            if (valid_ids.includes(result.friend_request_status) === true) {
                deleteRelationShipThenBlockUser(e);
            }
            else if (validBlockStatuses.includes(result.friend_request_status) === true) {
                handleBlockUser(e);
            }
        }, (error) => {
            console.info(`%c[Error Occured]: %c[User Data Could not be Fetched Proceed Actions Failed ... Try Again Later]`, "color:#00FD61;", "color:#8442f4;");
        });
        return;
    }


    let memberPhoto = (
        <div className="chat-room-avatar-wrapper" role="img">
            <svg width="80" height="80" viewBox="0 0 80 80" className="chat-room-avatar-svg-wrapper" aria-hidden="true">
                <foreignObject x="0" y="0" width="80" height="80" mask="url(#svg-mask-avatar-default)">
                    <div className="chat-room-avatar-image-stack">
                        {
                            member.photo === undefined ? (
                                <img alt=" " className={`chat-room-avatar-image icon-colors-${member.color_tag}`} aria-hidden="true" />
                            ) : (
                                <img alt=" " src={member.photo} className="chat-room-avatar-image" aria-hidden="true" />
                            )
                        }
                    </div>
                </foreignObject>
            </svg>
        </div>
    )


    let firstHeader = (
        <h3 className="chat-room-header-first-msg">{`${member.username}`}</h3>
    )
    let userNameAndTag = (
        <h3 className="chat-room-header-first-msg-inner-content-header">{`${member.username}`}#{`${member.strife_id_tag}`}</h3>
    )

    let mutalServersButton = mutualServers.length > 0 ? (
        <div role="button" tabIndex={0} onClick={(e) => setShowMegaPopUp(true)}>
            <div className="chat-room-o2o-mutual-servers-text">{`${mutualServers.length === 1 ? `1 Mutual Server` : `${mutualServers.length} Mutual Servers`}`}</div>
        </div>
    ) : (
        <div role="button" tabIndex={0}>
            <div className="chat-room-o2o-mutual-servers-text">No servers in common</div>
        </div>
    )


    const generateMutualServersAvatarContainer = () => {
        let mutualServersAvatar = "";
        if (mutualServers.length === 0) {
            return null;
        }
        else {
            if (mutualServers.length === 1) {
                mutualServersAvatar = (
                    <div className="chat-room-o2o-mutual-servers-container">
                        {
                            mutualServers[0]?.server_Icon === undefined ? (
                                <img src={defaultStrifeSpiderQuad} alt="" className="chat-room-mutual-servers-avatar" />
                            ) : (
                                <img src={mutualServers[0]?.server_Icon} alt="" className="chat-room-mutual-servers-avatar" />
                            )
                        }
                    </div>
                )
            }
            else if (mutualServers.length === 2) {
                mutualServersAvatar = (
                    <div className="chat-room-o2o-mutual-servers-container">
                        <svg width="24" height="24" className="chat-room-mutual-servers-avatar-1-2 chat-room-mutual-servers-avatar-mask" viewBox="0 0 24 24">
                            <foreignObject x="0" y="0" width="24" height="24" overflow="visible" mask="url(#svg-mask-voice-user-summary-item)">
                                {
                                    mutualServers[0]?.server_Icon === undefined ? (
                                        <img src={defaultStrifeSpiderQuad} alt="" className="chat-room-mutual-servers-avatar" />
                                    ) : (
                                        <img src={mutualServers[0]?.server_Icon} alt="" className="chat-room-mutual-servers-avatar" />
                                    )
                                }
                            </foreignObject>
                        </svg>
                        <svg width="24" height="24" className="chat-room-mutual-servers-avatar-1-2 chat-room-mutual-servers-avatar-mask" viewBox="0 0 24 24">
                            <foreignObject x="0" y="0" width="24" height="24" overflow="visible" mask="url(#svg-mask-voice-user-summary-item)">
                                {
                                    mutualServers[2]?.server_Icon === undefined ? (
                                        <img src={defaultStrifeSpiderQuad} alt="" className="chat-room-mutual-servers-avatar" />
                                    ) : (
                                        <img src={mutualServers[2]?.server_Icon} alt="" className="chat-room-mutual-servers-avatar" />
                                    )
                                }
                            </foreignObject>
                        </svg>
                    </div>
                )
            }
            else if (mutualServers.length >= 3) {
                mutualServersAvatar = (
                    <div className="chat-room-o2o-mutual-servers-container">
                        <svg width="24" height="24" className="chat-room-mutual-servers-avatar-1-2 chat-room-mutual-servers-avatar-mask" viewBox="0 0 24 24">
                            <foreignObject x="0" y="0" width="24" height="24" overflow="visible" mask="url(#svg-mask-voice-user-summary-item)">
                                {
                                    mutualServers[0]?.server_Icon === undefined ? (
                                        <img src={defaultStrifeSpiderQuad} alt="" className="chat-room-mutual-servers-avatar" />
                                    ) : (
                                        <img src={mutualServers[0]?.server_Icon} alt="" className="chat-room-mutual-servers-avatar" />
                                    )
                                }
                            </foreignObject>
                        </svg>
                        <svg width="24" height="24" className="chat-room-mutual-servers-avatar-1-2 chat-room-mutual-servers-avatar-mask" viewBox="0 0 24 24">
                            <foreignObject x="0" y="0" width="24" height="24" overflow="visible" mask="url(#svg-mask-voice-user-summary-item)">
                                {
                                    mutualServers[2]?.server_Icon === undefined ? (
                                        <img src={defaultStrifeSpiderQuad} alt="" className="chat-room-mutual-servers-avatar" />
                                    ) : (
                                        <img src={mutualServers[2]?.server_Icon} alt="" className="chat-room-mutual-servers-avatar" />
                                    )
                                }
                            </foreignObject>
                        </svg>
                        {
                            mutualServers[3]?.server_Icon === undefined ? (
                                <img src={defaultStrifeSpiderQuad} alt="" className="chat-room-mutual-servers-avatar" />
                            ) : (
                                <img src={mutualServers[3]?.server_Icon} alt="" className="chat-room-mutual-servers-avatar" />
                            )
                        }
                    </div>
                )
            }
            return mutualServersAvatar;
        }
    }

    let mutalServerPFP = mutualServers.length === 0 ? (null) : (generateMutualServersAvatarContainer())
    let fullContainerRender = ""
    switch (memberStatus.friend_request_status) {

        case -2:

            fullContainerRender = (
                <>
                    {memberPhoto}
                    {firstHeader}
                    <div className="chat-room-header-first-msg-inner-content">
                        {userNameAndTag}
                        This is the beginning of your direct message history with {`${` `}`}
                        <strong>{`${member.username}`}</strong>{`${` `}`}
                        .
                        <div className="chat-room-o2o-dm-relationship-action-container">
                            {mutalServerPFP}
                            {mutalServersButton}
                            <div className="chat-room-o2o-divider"></div>
                            <button type="button" className="chat-room-o2o-action-button gray" onClick={(e) => handleBlockingOfUser(e)}>
                                <div className="look-filled-button-contents global-button-contents">Block</div>
                            </button>
                            <button type="button" className="chat-room-o2o-action-button red">
                                <div className="look-filled-button-contents global-button-contents">Report Spam</div>
                            </button>
                        </div>
                    </div>
                </>
            )
            break;

        case -1:
            fullContainerRender = (
                <>
                    {memberPhoto}
                    {firstHeader}
                    <div className="chat-room-header-first-msg-inner-content">
                        {userNameAndTag}
                        This is the beginning of your direct message history with {`${` `}`}
                        <strong>{`${member.username}`}</strong>{`${` `}`}
                        .
                        <div className="chat-room-o2o-dm-relationship-action-container">
                            {mutalServerPFP}
                            {mutalServersButton}
                            <div className="chat-room-o2o-divider"></div>
                            <button type="button" className="chat-room-o2o-action-button gray" onClick={(e) => handleUnBlockUser(e)}>
                                <div className="look-filled-button-contents global-button-contents">Unblock</div>
                            </button>
                            <button type="button" className="chat-room-o2o-action-button red">
                                <div className="look-filled-button-contents global-button-contents">Report Spam</div>
                            </button>
                        </div>
                    </div>
                </>
            )
            break;

        case 0:

            fullContainerRender = (
                <>
                    {memberPhoto}
                    {firstHeader}
                    <div className="chat-room-header-first-msg-inner-content">
                        {userNameAndTag}
                        This is the beginning of your direct message history with {`${` `}`}
                        <strong>{`${member.username}`}</strong>{`${` `}`}
                        .
                        <div className="chat-room-o2o-dm-relationship-action-container">
                            {mutalServerPFP}
                            {mutalServersButton}
                            <div className="chat-room-o2o-divider"></div>
                            <button type="button" className="chat-room-o2o-action-button blue" onClick={(e) => handleSendFriendRequest(e)}>
                                <div className="look-filled-button-contents global-button-contents">Add Friend</div>
                            </button>
                            <button type="button" className="chat-room-o2o-action-button gray" onClick={(e) => handleBlockingOfUser(e)}>
                                <div className="look-filled-button-contents global-button-contents">Block</div>
                            </button>
                            <button type="button" className="chat-room-o2o-action-button red">
                                <div className="look-filled-button-contents global-button-contents">Report Spam</div>
                            </button>
                        </div>
                    </div>
                </>
            )
            break;

        case 1:
            fullContainerRender = (
                <>
                    {memberPhoto}
                    {firstHeader}
                    <div className="chat-room-header-first-msg-inner-content">
                        {userNameAndTag}
                        This is the beginning of your direct message history with {`${` `}`}
                        <strong>{`${member.username}`}</strong>{`${` `}`}
                        .
                        <div className="chat-room-o2o-dm-relationship-action-container">
                            {mutalServerPFP}
                            {mutalServersButton}
                            <div className="chat-room-o2o-divider"></div>
                            <button type="button" className="chat-room-o2o-action-button blue disabled" disabled>
                                <div className="look-filled-button-contents global-button-contents">Friend Request Sent</div>
                            </button>
                            <button type="button" className="chat-room-o2o-action-button gray" onClick={(e) => handleBlockingOfUser(e)}>
                                <div className="look-filled-button-contents global-button-contents">Block</div>
                            </button>
                        </div>
                    </div>
                </>
            )
            break;

        case 2:
            fullContainerRender = (
                <>
                    {memberPhoto}
                    {firstHeader}
                    <div className="chat-room-header-first-msg-inner-content">
                        {userNameAndTag}
                        This is the beginning of your direct message history with {`${` `}`}
                        <strong>{`${member.username}`}</strong>{`${` `}`}
                        .
                        <div className="chat-room-o2o-dm-relationship-action-container">
                            {mutalServerPFP}
                            {mutalServersButton}
                            <div className="chat-room-o2o-divider"></div>
                            <div className="chat-room-o2o-action-text">Sent You a friend request:</div>
                            <button type="button" className="chat-room-o2o-action-button blue" onClick={(e) => handleAcceptFriendRequest(e)}>
                                <div className="look-filled-button-contents global-button-contents">Accept</div>
                            </button>
                            <button type="button" className="chat-room-o2o-action-button gray" onClick={(e) => handleIgnoreFriendRequest(e)}>
                                <div className="look-filled-button-contents global-button-contents">Ignore</div>
                            </button>
                            <button type="button" className="chat-room-o2o-action-button gray" onClick={(e) => handleBlockingOfUser(e)}>
                                <div className="look-filled-button-contents global-button-contents">Block</div>
                            </button>
                            <button type="button" className="chat-room-o2o-action-button red">
                                <div className="look-filled-button-contents global-button-contents">Report Spam</div>
                            </button>
                        </div>
                    </div>
                </>
            )
            break;
        case 3:
            fullContainerRender = (
                <>
                    {memberPhoto}
                    {firstHeader}
                    <div className="chat-room-header-first-msg-inner-content">
                        {userNameAndTag}
                        This is the beginning of your direct message history with {`${` `}`}
                        <strong>{`${member.username}`}</strong>{`${` `}`}
                        .
                        <div className="chat-room-o2o-dm-relationship-action-container">
                            {mutalServerPFP}
                            {mutalServersButton}
                            <div className="chat-room-o2o-divider"></div>
                            <button type="button" className="chat-room-o2o-action-button gray" onClick={(e) => handleDeleteFriendShip(e)}>
                                <div className="look-filled-button-contents global-button-contents">Remove Friend</div>
                            </button>
                            <button type="button" className="chat-room-o2o-action-button gray" onClick={(e) => handleBlockingOfUser(e)}>
                                <div className="look-filled-button-contents global-button-contents">Block</div>
                            </button>
                        </div>
                    </div>
                </>
            )
            break;
        default:
            fullContainerRender = ("");
    }

    // if (dmServer?.one_to_one_dm && mutualServersLoaded === true) {
    if (props.dmServer?.one_to_one_dm && mutualServersLoaded === true) {

        return (
            <>
                <div className="chat-room-first-message-container">
                    {renderMegaUpcModal()}
                    {fullContainerRender}
                </div>
            </>
        )
    }
    else {
        return null;
    }

}
export default O2ODMChatFirstMessage;