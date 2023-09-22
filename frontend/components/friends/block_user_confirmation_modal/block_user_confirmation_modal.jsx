import React from "react";
import { useEffect, useRef } from "react";
import { fetchUser } from "../../../utils/session_api_util";
import REACT_PORTAL from '../../../utils/ReactPortal_api_util';


const BlockUserConfirmationModal = (props) => {
    const popupRef = useRef();

    useEffect(() => {
        window.addEventListener('keyup', handleESC, false);
        return function cleanUp () {
            window.removeEventListener('keyup', handleESC, false);
            props.removeFriendshipErrors();

        }
    }, [])

    const handleBlockUser = (e) => {
        e.preventDefault();
        //inorder to prevent a fail to block error fetch the user first then  check if said user is blockable
        // if so block else abort 

        let validBlockStatuses = [-2, 0];

        fetchUser(props.friend.id)
            .then((result) => {
                if (validBlockStatuses.includes(result.friend_request_status) === true) {
                    props.blockUser({ user_id: props.currentUser.id, friend_id: props.friend.id }).then(() => {
                        App.StrifeCore.perform('parse_block_request', { user_id: props.currentUser.id, friend_id: props.friend.id });
                        handleCloseOnOuterClick(e);
                    });
                }
                else {
                    handleCloseOnOuterClick(e);
                }
            })
    }


    const handleESC = (e) => {
        const keys = {
            27: () => {
                e.preventDefault();
                handleCloseOnOuterClick(e);
                window.removeEventListener('keyup', handleESC, false);
            },
        };
        if (keys[e.keyCode]) {
            keys[e.keyCode]();
        }
    }

    const handleCloseOnOuterClick = (e) => {
        e.preventDefault();
        let modalToClose = document.getElementById("delete-friend-modal-root");
        if (modalToClose) {
            modalToClose.classList.add("transition-out");
            Promise.all(modalToClose.getAnimations().map((animation) => animation.finished),)
                .then(() => {
                    props.setShowBlockUserPopup(false);
                    window.removeEventListener('keyup', handleESC, false);
                }, () => {
                    props.setShowBlockUserPopup(false);
                    window.removeEventListener('keyup', handleESC, false);
                });
        }
        else {
            props.setShowBlockUserPopup(false);
            window.removeEventListener('keyup', handleESC, false);
        }
    }

    return (

        <REACT_PORTAL wrapperId={'sub-modal-2'} classNameId={'subModal'} onClick={(e) => e.stopPropagation()}>
            <div className="delete-friend-wrapper" onClick={(e) => handleCloseOnOuterClick(e)}>
                <div className="delete-friend-backdrop"></div>
                <div className="delete-friend-layer">
                    <div id="delete-friend-focus-lock" className="delete-friend-focus-lock" onClick={(e) => e.stopPropagation()} ref={popupRef}>
                        <div className="delete-friend-modal-root" id="delete-friend-modal-root">
                            <div className="delete-friend-flex" >
                                <h1 className="delete-friend-modal-header">
                                    Block {`${props.friend.username}`} ?
                                </h1>
                            </div>
                            <div className="delete-friend-modal-content-scroll-base global-scroller-base global-scroll-thin-raw-attributes" style={{ overflow: "hidden scroll", paddingRight: `8px` }}>
                                <div className="delete-friend-modal-text">
                                    Are you sure you want to block{` `}
                                    <strong>{`${props.friend.username}`}</strong>
                                    ? Blocking this user will also remove them from your friends list.
                                </div>
                                <div className="delete-friend-modal-sep"></div>
                            </div>
                            <form onSubmit={handleBlockUser} className="delete-friend-modal-button-flex-wrapper">
                                <button type="submit" className="delete-friend-modal-submit-button">
                                    <div className="delete-friend-modal-button-contents">Block</div>
                                </button>
                                <button type="button" onClick={(e) => handleCloseOnOuterClick(e)} className="delete-friend-modal-cancel-button">
                                    <div className="delete-friend-modal-button-contents">Cancel</div>
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </REACT_PORTAL >

    )

}

export default BlockUserConfirmationModal;