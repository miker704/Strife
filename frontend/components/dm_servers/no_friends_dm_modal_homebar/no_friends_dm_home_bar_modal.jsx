import React from "react";
import { useRef, useEffect } from "react";

const NoFriendsDMHomeBarModal = (props) => {
    const popupRef = useRef();

    //set up handler and exit
    useEffect(() => {

        window.addEventListener('keyup', handleESC, false);
        return function cleanup () {
            window.removeEventListener('keyup', handleESC, false);
            if (props.errors.length > 0) {
                props.removeFriendshipErrors();
            }
            if (props.dmServerErrors.length > 0) {
                props.removeDmServerErrors();
            }
        }
    }, []);

    const handleESC = (e) => {
        const keys = {
            27: () => {
                e.preventDefault();
                props.closeModal();
                window.removeEventListener('keyup', handleESC, false);
            },
        };
        if (keys[e.keyCode]) {
            keys[e.keyCode]();
        }
    }
    const path = `/$/channels/@me/`;


    return (
        <div className={`clear-modal-wrapper homeBar`} onClick={(e) => props.closeModal()}>
            <div className="create-dm-modal-popup" onClick={e => e.stopPropagation()} ref={popupRef} >
                <div className="create-dm-modal-focus-lock">
                    <div className="create-dm-modal">
                        <div className="create-dm-header-sec">
                            <h1 className="create-dm-header-h2">Select Friends</h1>
                        </div>
                        <div className="create-dm-no-friends-error-state-flex-wrapper">
                            <div className="create-dm-no-friends"></div>
                            <div>You don't have any friends to add!</div>
                            <button type="button" className="create-dm-no-friends-button"
                                onClick={() => {
                                    props.history.push({ pathname: `${path}`, state: { toggleValue: true } })
                                    props.closeModal();
                                }}>
                                <div className="create-dm-button-text">Add Friend</div>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default NoFriendsDMHomeBarModal;