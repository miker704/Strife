import React from "react";
import { useEffect, useRef } from "react";
import REACT_PORTAL from "../../../utils/ReactPortal_api_util";
import { useToolTipFullTimeStamp, useFormatTimeStampMessageBody } from "../../../utils/useTimeStamp_api_utils";
import { Tooltip } from "react-tooltip";

const DeleteServerChannelMessageModal = (props) => {
    const popupRef = useRef();

    useEffect(() => {
        window.addEventListener('keyup', handleESC, false);
        return function cleanUp () {
            window.removeEventListener('keyup', handleESC, false);
        }
    }, [])


    const handleESC = (e) => {

        const keys = {
            27: () => {
                e.preventDefault();
                handleModalClose(e);
                window.removeEventListener('keyup', handleESC, false);
            },
        };
        if (keys[e.keyCode]) {
            keys[e.keyCode]();
        }
    }

    const handleModalClose = (e) => {
        e.preventDefault();
        let modalToClose = document.getElementById("delete-message-modal");
        if (modalToClose) {
            modalToClose.classList.add("transition-out");
            Promise.all(modalToClose.getAnimations().map((animation) => animation.finished),)
                .then(() => {
                    props.setRenderDeleteChannelMessage(false);
                    window.removeEventListener('keyup', handleESC, false);
                }, () => {
                    props.setRenderDeleteChannelMessage(false);
                    window.removeEventListener('keyup', handleESC, false);
                });
        }
        else {
            props.setRenderDeleteChannelMessage(false);
            window.removeEventListener('keyup', handleESC, false);
        }
    }

    const handleDelete = (e) => {
        e.preventDefault();
        if (props.currentUser.id === props.message.author_id) {
            props.deleteMessage(props.message.id);
        }
        handleModalClose(e);
    }

    let deleteMessageButton = props.currentUser.id === props.message.author_id ? (
        <button type="submit" onClick={(e) => handleDelete(e)} className="delete-server-msg-submit-button">
            <div className="delete-server-msg-button-contents">Delete</div>
        </button>

    ) : (
        <div className="fake-delete-message-submit-button">
            <div className="delete-server-msg-button-contents">Delete</div>
        </div>
    );

    return (

        <REACT_PORTAL wrapperId={'sub-modal'} classNameId={'subModal'} onClick={(e) => e.stopPropagation()}>
            <div className="delete-message-modal-layer" onClick={(e) => handleModalClose(e)}>
                <div className="delete-message-modal-backdrop"></div>
                <div className="delete-message-modal-inner-layer">
                    <div className="delete-message-modal-focus-lock" onClick={(e) => e.stopPropagation()} ref={popupRef}>
                        <div id="delete-message-modal" className="delete-message-modal-root">
                            <div className="delete-message-modal-inner-flex">
                                <h1 className="delete-msg-h2">Delete Message</h1>
                            </div>
                            <div className="delete-this-message-wrapper global-scroller-base global-scroll-thin-raw-attributes" style={{ overflow: "hidden scroll", paddingRight: `8px` }}>
                                <div className="dtm-subtext">Are you sure you want to delete this message?</div>
                                <div className="delete-this-message-container">
                                    <div className="delete-msg-box">
                                        <div className="deleted-message-container">
                                            <div className="deleted-message-inners">
                                                {
                                                    props.messageAuthor.photo === undefined ? (
                                                        <img className={`delete-message-member-avatar-img icon-colors-${props.messageAuthor.color_tag}`} alt=" " />
                                                    ) : (
                                                        <img className={"delete-message-member-avatar-img"} src={props.messageAuthor.photo} alt=" " />
                                                    )
                                                }

                                                <h2 className="deleted-message-owner">
                                                    <span className="deleted-message-username-wrapper">
                                                        <div className="deleted-message-username">
                                                            {props.message.authorName}
                                                        </div>
                                                    </span>
                                                    <span className="deleted-message-time-stamp" data-tooltip-id="delSCMsgTimeStamp-thread-tip"
                                                        data-tooltip-place="top" data-tooltip-content={`${useToolTipFullTimeStamp(props.message.created_at)}`}>
                                                        <time dateTime={props.message.created_at}>
                                                            <i className="deleted-msg-i-tag-sep">{` `}—{` `}</i>
                                                            {useFormatTimeStampMessageBody(props.message.created_at)}
                                                        </time>
                                                    </span>
                                                </h2>
                                                <div className="deleted-message-content">
                                                    {props.message.body}
                                                </div>
                                            </div>
                                            <div className="deleted-message-content-accessories"></div>
                                        </div>
                                    </div>
                                </div>

                                <div className="deleted-message-pro-tips-container">
                                    <div className="deleted-message-pro-tips-header">
                                        PROTIP:
                                    </div>
                                    <div className="deleted-message-pro-tips-subtext">
                                        You can hold down shift when clicking{`${" "}`}
                                        <strong>delete message</strong>{`${" "}`}
                                        to bypass this confirmation entirely.
                                    </div>
                                </div>
                                <div className="delete-server-msg-sep"></div>
                            </div>
                            <div className="delete-server-msg-button-sec">
                                {deleteMessageButton}
                                <button type="button" onClick={(e) => handleModalClose(e)} className="delete-server-msg-cancel-button">
                                    <div className="delete-server-msg-button-contents">Cancel</div>
                                </button>
                            </div>
                        </div>
                        <Tooltip className="msg-time-stamp-tool-tip" id="delSCMsgTimeStamp-thread-tip" place="top" closeOnResize={true} closeOnScroll={true} delayShow={750} offset={5} />
                    </div>
                </div>
            </div>
        </REACT_PORTAL >

    )

}

export default DeleteServerChannelMessageModal;

