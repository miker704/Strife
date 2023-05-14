import React from "react";
import { useEffect, useRef } from "react";
// import { closeOnEsc, closeHookModalOnOutsideClick } from "../../../utils/close_hook_modals_api_utils";
import user_Default_PFP from '../../../../app/assets/images/discord_PFP.svg';


const DeleteServerChannelMessageModal = (props) => {
    const popupRef = useRef();

    useEffect(() => {
        window.addEventListener('keyup', handleESC, false);
        // window.addEventListener('keyup', props.handleESC, false);

        return function cleanUp () {
            window.removeEventListener('keyup', handleESC, false);
            // window.removeEventListener('keyup', props.handleESC, false);

        }
    }, [])


    const handleESC = (e) => {

        const keys = {
            27: () => {
                e.preventDefault();
                document.getElementById("delete-message-modal").classList.add("transition-out");
                setTimeout(() => {
                    props.closeModal();
                    window.removeEventListener('keyup', handleESC, false);
                }, 300);
            },
        };
        if (keys[e.keyCode]) {
            keys[e.keyCode]();
        }
    }

    const handleModalClose = (e) => {
        e.preventDefault();
        document.getElementById("delete-message-modal").classList.add("transition-out");
        setTimeout(() => {
            props.closeModal();
            window.removeEventListener('keyup', handleESC, false);
        }, 300);
    }

    const handleDelete = () => {
        props.deleteMessage(props.message.id).then(() => {
            document.getElementById("delete-message-modal").classList.add("transition-out");
            setTimeout(() => {
                props.closeModal();
            }, 300);
        })
    }
    const render_User_PFP = user_Default_PFP;


    return (
        <div className="delete-message-modal-layer" onClick={(e) => handleModalClose(e)}>
            <div className="delete-message-modal-backdrop"></div>
            <div className="delete-message-modal-inner-layer">
                <div className="delete-message-modal-focus-lock" onClick={(e) => e.stopPropagation()} ref={popupRef}>
                    <div id="delete-message-modal" className="delete-message-modal-root">
                        <div className="delete-message-modal-inner-flex">
                            <h1 className="delete-msg-h2">Delete Message</h1>
                        </div>
                        <div className="delete-this-message-wrapper">
                            <div className="dtm-subtext">Are you sure you want to delete this message?</div>
                            <div className="delete-this-message-container">
                                <div className="delete-msg-box">
                                    <div className="deleted-message-container">
                                        <div className="deleted-message-inners">
                                            <div className={`${props.messageAuthor.photo === undefined ?
                                                `chat-user-pfp-svg-render color-${props.messageAuthor.color_tag}` :
                                                `delete-message-member-avatar-img`}`}>
                                                <img src={`${props.messageAuthor.photo === undefined
                                                    ? render_User_PFP : props.messageAuthor.photo}`} alt="SMPFP" />
                                            </div>
                                            <h2 className="deleted-message-owner">
                                                <span className="deleted-message-username-wrapper">
                                                    <div className="deleted-message-username">
                                                        {props.message.authorName}
                                                    </div>
                                                </span>
                                                <span className="deleted-message-time-stamp">
                                                    {props.formatTime(props.message.created_at)}
                                                </span>
                                            </h2>
                                            <div className="deleted-message-content">
                                                {props.message.body}
                                            </div>
                                        </div>
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
                            <button type="submit" onClick={() => handleDelete()} className="delete-server-msg-submit-button">Delete</button>
                            <button type="button" onClick={(e) => handleModalClose(e)} className="delete-server-msg-cancel-button">Cancel</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )

}

export default DeleteServerChannelMessageModal;

