import React from 'react';
import { useRef, useEffect, useState } from "react";
import REACT_PORTAL from '../../../utils/ReactPortal_api_util';
import { closeHookModalOnOutsideClick, closeOnEsc } from "../../../utils/close_hook_modals_api_utils";


const EditFriendshipModal = (props) => {

    if (props.friend.id === props.currentUser.id) {
        return null;
    }

    const popUpRef = useRef(null);
    closeOnEsc(props.setShowPopup);

    useEffect(() => {
        return function cleanUp () {
            if (props.errors.length > 0) {
                props.removeFriendshipErrors();
            }
        }
    }, []);



    const handleSubModalCloseOnOutsideClick = (e) => {
        e.preventDefault();
        props.setShowPopup(false);
        window.removeEventListener('keyup', handleESC, false);
    }


    const handleESC = (e) => {
        const keys = {
            27: () => {
                e.preventDefault();
                props.setShowPopup(false);
                window.removeEventListener('keyup', handleESC, false);
            },
        };
        if (keys[e.keyCode]) {
            keys[e.keyCode]();
        }
    }



    const handleDeleteFriendShip = () => {

        // props.deleteFriendship({ user_id: props.currentUser.id, friend_id: props.friend.id }).then(() => {
        //     App.StrifeCore.perform('parse_delete_friend_request', { user_id: props.currentUser.id, friend_id: props.friend.id });
        //     props.setShowPopup(false);
        // });

        props.setShowDeletePopup(true);
        props.setShowPopup(false);
        return;
    }

    const handleupdateFriendShip = () => {

        props.updateFriendship({ user_id: props.currentUser.id, friend_id: props.friend.id }).then(() => {
            props.setShowPopup(false);
        });
        return;
    }

    const handleBlockUser = () => {

        props.blockUser({ user_id: props.currentUser.id, friend_id: props.friend.id }).then(() => {
            props.setShowPopup(false);
        });
        return;
    }

    let lastOption = props.friend.friend_request_status === 3 ? (

        <div className="mfom-item red" onClick={() => handleDeleteFriendShip()}>
            <div className="mfom-item-label">Block User</div>
        </div>
    ) : ("");


    return (
        <REACT_PORTAL wrapperId={'sub-modal'} classNameId={'subModal'} onClick={(e) => e.stopPropagation()}>
            <div className="mfom-layer" onClick={(e) => handleSubModalCloseOnOutsideClick(e)}>
                <div className='mfom-inner-layer' style={{ top: `${props.top}px`, left: `${props.left}px` }} >
                    <div className='mfom-menu' onClick={(e) => e.stopPropagation()} ref={popUpRef}>
                        <div className='mini-menu-scroller global-scroll-thin-raw-attributes global-scroller-base' style={{ overflow: `hidden scroll`, paddingRight: `0px` }}>
                            <div className="mfom-item">
                                <div className="mfom-item-label">Start Video Call</div>
                            </div>
                            <div className="mfom-item">
                                <div className="mfom-item-label">Start Voice Call</div>
                            </div>
                            <div className="mfom-item red" onClick={(e) => handleDeleteFriendShip(e)}>
                                <div className="mfom-item-label">Remove Friend</div>
                            </div>
                            <div className='mfom-bottom-div'></div>
                        </div>
                    </div>
                </div>
            </div>
        </REACT_PORTAL >
    )


}

export default EditFriendshipModal;