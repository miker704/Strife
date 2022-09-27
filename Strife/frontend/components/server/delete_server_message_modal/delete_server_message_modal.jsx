import React from "react";
import { useEffect, useRef, useState } from "react";
import { closeOnEsc, closeHookModalOnOutsideClick } from "../../../utils/close_hook_modals_api_utils";
import user_Default_PFP from '../../../../app/assets/images/discord_PFP.svg';


const DeleteServerChannelMessageModal = (props) => {

    useEffect(() => {
        window.addEventListener('keyup', props.handleESC, false);
        return function cleanUp () {
        window.removeEventListener('keyup', props.handleESC, false);
        }
    }, [])


    const handleDelete = () => {
        props.deleteMessage(props.message.id).then(() => {
            props.closeModal();
        })
    }
    const render_User_PFP = user_Default_PFP;


    return (
        <div className="delete-message-modal-layer" onClick={() => props.closeModal()}>
            <div className="delete-message-modal-backdrop"></div>
            <div className="delete-message-modal-inner-layer">
                <div className="delete-message-modal-focus-lock" onClick={(e) => e.stopPropagation()}>
                    <div className="delete-message-modal-root">
                        <div className="delete-message-modal-inner-flex">
                            <h2 className="delete-msg-h2">Delete Message</h2>
                        </div>
                        <div className="delete-this-message-wrapper">
                            <div className="dtm-subtext">Are you sure you want to delete this message?</div>
                            <div className="delete-this-message-container">
                                <div className="delete-msg-box">
                                    <div className="chat-message-item" >

                                        <div className="message-wrapper-contents">
                                            <div className="message-wrapper1">
                                                <div className={`${props.messageAuthor.photo === undefined ?
                                                    `chat-user-pfp-svg-render color-${props.messageAuthor.color_tag}` :
                                                    `chat-member-avatar-img`}`}>
                                                    <img src={`${props.messageAuthor.photo === undefined
                                                        ? render_User_PFP : props.messageAuthor.photo}`} alt="SMPFP" />
                                                </div>

                                                <h2 className="chat-member-username-header">
                                                    <span className="chat-member-username-wrap">
                                                        <span className="chat-member-username">{props.message.authorName}</span>
                                                    </span>
                                                    <span className="chat-message-timestamp-wrap">
                                                        <p className="chat-message-timestamp">
                                                            {props.formatTime(props.message.created_at)}
                                                        </p>
                                                    </span>
                                                </h2>
                                                <div className="chat-message">
                                                    {props.message.body}
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div className="delete-server-sep"></div>
                        </div>
                        <div className="delete-server-button-sec">
                            <button type="submit" onClick={() => handleDelete()} className="delete-server-submit-button">Delete</button>
                            <button type="button" onClick={() => props.closeModal()} className="delete-server-cancel-button">Cancel</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )

}

export default DeleteServerChannelMessageModal;

