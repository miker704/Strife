import React from "react";
import { useEffect, useState, useRef } from "react";
import { closeHookModalOnOutsideClick, closeOnEsc } from "../../../utils/close_hook_modals_api_utils";
import ReactTooltip from "react-tooltip";

const ActionButtonPopUp = (props) => {

    const popupRef = useRef();
    closeHookModalOnOutsideClick(popupRef, props.setShowPopUp);
    closeOnEsc(props.setShowPopUp);

    return (
        <div className="action-button-pop-up-layer" >
            <div className="action-button-pop-up" onClick={(e) => e.stopPropagation()} ref={popupRef}>
                <div className="action-button-pop-up-menu">
                    <div className="action-button-scroller">
                        <div role={"group"}>
                            <div className="action-button-pop-up-item" data-tip data-for="copy-strife-server-link">
                                <div className="action-button-strife-server-link"
                                    onClick={() => {
                                        navigator.clipboard.writeText(props.serverLink).then(() => { props.setShowPopUp(false) })
                                    }}>
                                    Copy Server ID
                                </div>
                                <div className="action-button-pop-up-icon-wrapper">
                                    <svg className="action-button-pop-up-icon" aria-hidden="true" role="img" width="24" height="24" viewBox="0 0 24 24">
                                        <path fill="currentColor" fillRule="evenodd" clipRule="evenodd"
                                            d="M5 2C3.34315 2 2 3.34315 2 5V19C2 20.6569 3.34315 22 5 22H19C20.6569 22 22 20.6569 22 
                                                                        19V5C22 3.34315 20.6569 2 19 2H5ZM8.79741 7.72V16H6.74541V7.72H8.79741ZM13.2097 7.72C16.0897
                                                                        7.72 17.5897 9.388 17.5897 11.848C17.5897 14.308 16.0537 16 13.2577 16H10.3537V7.72H13.2097ZM13.1497
                                                                        14.404C14.6137 14.404 15.5257 13.636 15.5257 11.86C15.5257 10.12 14.5537 9.316 13.1497 
                                                                        9.316H12.4057V14.404H13.1497Z">
                                        </path>
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <ReactTooltip
                            className="copy-server-link-tool-tip"
                            textColor="#B9BBBE"
                            backgroundColor="#191919"
                            id="copy-strife-server-link"
                            place="top"
                            effect="solid">
                            Click to Copy Server Invite Link
                        </ReactTooltip>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default ActionButtonPopUp;



