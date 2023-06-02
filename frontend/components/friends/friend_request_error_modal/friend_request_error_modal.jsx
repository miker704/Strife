import React from "react";
import { useEffect, useRef } from "react";

const FriendRequestErrorModal = (props) => {

    const popupRef = useRef();

    useEffect(() => {

        window.addEventListener('keyup', handleESCCloseModal, false);

        return function cleanUp () {
            props.removeSessionErrors();
            window.removeEventListener('keyup', handleESCCloseModal, false);
        }

    }, []);

    const handleESCCloseModal = (e) => {
        const keys = {
            27: () => {
                e.preventDefault();
                document.getElementById("frfm").classList.add("transition-out");
                setTimeout(() => {
                    window.removeEventListener('keyup', handleESCCloseModal, false);
                    props.closeModal();
                }, 300);

            },
        };
        if (keys[e.keyCode]) {
            keys[e.keyCode]();
        }
    }


    const handleExitOnOutSideClick = (e) => {
        e.preventDefault();
        let modalToClose = document.getElementById("frfm");
        modalToClose.classList.add("transition-out");
        setTimeout(() => {
            props.closeModal();
        }, 250);
    }

    return (
        <div className="ffrm-layer-container">
            <div className="frfm-backdrop" onClick={(e) => handleExitOnOutSideClick(e)}></div>
            <div className="frfm-wrapper">
                <div className="frfm" id="frfm" onClick={e => e.stopPropagation()} ref={popupRef}>
                    <div className="frfm-inner">
                        <div className="form-class-200">
                            <div className="form-content-1">
                                <div className="form-content-1-inner">
                                    <h2 className="form-content-1-header">
                                        Friend Request Failed
                                    </h2>
                                    <div className="form-content-1-subtext">
                                        Hm, didn’t work. Double check that the username is correct.
                                    </div>
                                </div>
                                <div className="frfm-div-sep"></div>
                            </div>
                            <div className="frfm-button-sec">
                                <button type="button" onClick={(e) => { handleExitOnOutSideClick(e) }} className="frfm-button">Okay</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default FriendRequestErrorModal;