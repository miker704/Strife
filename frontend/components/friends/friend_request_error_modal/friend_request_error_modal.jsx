import React from "react";
import { useEffect, useRef } from "react";
import REACT_PORTAL from "../../../utils/ReactPortal_api_util";

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
                handleExitOnOutSideClick(e);
            },
        };
        if (keys[e.keyCode]) {
            keys[e.keyCode]();
        }
    }


    const handleExitOnOutSideClick = (e) => {
        e.preventDefault();
        let modalToClose = document.getElementById("frfm");
        if (modalToClose) {
            modalToClose.classList.add("transition-out");
            Promise.all(modalToClose.getAnimations().map((animation) => animation.finished),)
                .then(() => {
                    props.setRenderFFEModal(false);
                    window.removeEventListener('keyup', handleESCCloseModal, false);

                }, () => {
                    props.setRenderFFEModal(false);
                    window.removeEventListener('keyup', handleESCCloseModal, false);
                });
        }
        else {
            props.setRenderFFEModal(false);
            window.removeEventListener('keyup', handleESCCloseModal, false);
        }
    }

    return (
        <REACT_PORTAL wrapperId={'sub-modal-2'} classNameId={'subModal'} onClick={(e) => e.stopPropagation()}>
            <div className="ffrm-layer-container">
                <div className="frfm-backdrop" onClick={(e) => handleExitOnOutSideClick(e)}></div>
                <div className="frfm-wrapper">
                    <div className="frfm" id="frfm" onClick={e => e.stopPropagation()} ref={popupRef}>
                        <div className="frfm-inner">
                            <div className="form-class-200">
                                <div className="form-content-1 global-scroll-thin-raw-attributes global-scroller-base" style={{ overflow: `hidden scroll`, paddingRight: `8px` }}>
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
        </REACT_PORTAL >

    );
}


export default FriendRequestErrorModal;