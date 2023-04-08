import React from "react";
import { useEffect, useState, useRef } from "react";
import ReactTooltip from "react-tooltip";
import user_Default_PFP from '../../../../app/assets/images/discord_PFP.svg';
import { closeOnEsc, closeHookModalOnOutsideClick } from "../../../utils/close_hook_modals_api_utils";

const ServerMessages = ({

    currentUserId,
    message,
    serverMembers,
    messageAuthor,
    formatTime,
    serverId,
    channelId,
    updateMessage,
    deleteMessage,
    openModal,
    openModalWithProps,
    strifeBot,
    channelName,
    channel,
    server,

}) => {

    const [showMsgEdit, setShowMsgEdit] = useState(false);
    const [value, setValue] = useState(message.body);
    const editMsgRef = useRef(null);
    const popUpRef = useRef();

    const openEdit = () => {
        setShowMsgEdit(true);

    }

    useEffect(() => {
        if (showMsgEdit) {
            editMsgRef.current.focus();
        }
    })

    const handleEdit = (e) => {
        e.preventDefault();
        e.stopPropagation();


        if (value.length === 0 || value.replace(/\s/g, '').length === 0) {
            //reset back the value to dmMessage body just incase user aborts deletion
            // if a user sends a blank message or a message containing only spaces ask if the user
            //wants to delete their message instead.
            setValue(message.body);
            openModalWithProps({
                currentUserId: currentUserId,
                message: message,
                formatTime: formatTime,
                serverId: serverId,
                channelId: channelId,
                messageAuthor: messageAuthor

            });
            openModal('DeleteServerChannelMessage');
        }

        else if (value !== message.body) {

            let editedMessage = {
                id: message.id,
                body: value,
                channel_id: parseInt(channelId),
                author_id: currentUserId
            }
            updateMessage(editedMessage);
        }

        setShowMsgEdit(false);
    };

    const closeEdit = (bool) => {
        setShowMsgEdit(bool);
        setValue(message.body);
    }

    closeOnEsc(closeEdit);
    closeHookModalOnOutsideClick(popUpRef, closeEdit)
    const editInput = (
        <form onSubmit={handleEdit} className="message-form-edit" >
            <textarea
                onFocus={(e)=>e.currentTarget.setSelectionRange(e.currentTarget.value.length,e.currentTarget.value.length)}
                value={value}
                onChange={(e) => setValue(e.currentTarget.value)}
                className="server-message-chat-box-area"
                rows={value.split('\n').length}
                minLength={1}
                maxLength={2000}
                placeholder={`${message.body}`}
                spellCheck={false}
                ref={editMsgRef}
                onKeyDown={(e) => {
                    if (e.code === 'Enter' && !e.shiftKey) {
                        handleEdit(e);
                    }
                }} />
            <div>
                escape to <span onClick={() => closeEdit(false)}>cancel</span> &#8226;
                enter to {` `}
                <span onClick={handleEdit}>save</span>
            </div>
        </form>
    )


    const messageBody = () => {
        if (currentUserId === message.author_id) {
            return (
                <>
                    {showMsgEdit ? editInput : message.body}
                </>
            )
        }
        else {
            return (
                <>
                    {message.body}
                </>
            )
        }
    }


    const render_User_PFP = user_Default_PFP;
    let messageAuthorName = message.author_id !== messageAuthor.id ? message.authorName : messageAuthor.username;

    return (
        <li className="chat-message-item" key={message.id} ref={popUpRef}>

            <div className="message-wrapper-contents">
                <div className="message-wrapper1">

                    <div className={`${messageAuthor.photo === undefined ?
                        `chat-user-pfp-svg-render color-${messageAuthor.color_tag}` :
                        `chat-member-avatar-img`}`}>
                        <img src={`${messageAuthor.photo === undefined
                            ? render_User_PFP : messageAuthor.photo}`} alt="SMPFP" />
                    </div>

                    <h2 className="chat-member-username-header">
                        <span className="chat-member-username-wrap">
                            {/* <span className="chat-member-username">{message.authorName}</span> */}
                            <span className="chat-member-username">{messageAuthorName}</span>

                        </span>
                        <span className="chat-message-timestamp-wrap">
                            <p className="chat-message-timestamp">
                                {formatTime(message.created_at)}
                            </p>
                        </span>
                    </h2>
                    <div className="chat-message">
                        {messageBody()}
                    </div>
                </div>
                <div className={`message-accessories-button-wrapper ${currentUserId === message.author_id ? `` : `is-hidden`}`}>
                    <div className="message-accessories-button" data-tip data-for="edit-message" onClick={() => openEdit()}>
                        <svg className="pen-icon" aria-hidden="true" role="img" width="16" height="16" viewBox="0 0 24 24">
                            <path fillRule="evenodd" clipRule="evenodd" d="M19.2929 9.8299L19.9409 9.18278C21.353 7.77064 
                                     21.353 5.47197 19.9409 4.05892C18.5287 2.64678 16.2292 2.64678 14.817 4.05892L14.1699 4.70694L19.2929 
                                     9.8299ZM12.8962 5.97688L5.18469 13.6906L10.3085 18.813L18.0201 11.0992L12.8962 5.97688ZM4.11851 
                                     20.9704L8.75906 19.8112L4.18692 15.239L3.02678 19.8796C2.95028 20.1856 3.04028 20.5105 3.26349 
                                     20.7337C3.48669 20.9569 3.8116 21.046 4.11851 20.9704Z" fill="currentColor">
                            </path>
                        </svg>

                    </div>
                    <div className="message-accessories-button" data-tip data-for="delete-message"
                        onClick={() => {
                            openModalWithProps({
                                currentUserId: currentUserId,
                                message: message,
                                formatTime: formatTime,
                                serverId: serverId,
                                channelId: channelId,
                                messageAuthor: messageAuthor

                            });
                            openModal('DeleteServerChannelMessage');

                        }}>
                        <svg className="trash-message-icon" aria-hidden="true" role="img" width="24" height="24" viewBox="0 0 24 24">
                            <path fill="currentColor" d="M15 3.999V2H9V3.999H3V5.999H21V3.999H15Z">
                            </path>
                            <path fill="currentColor" d="M5 6.99902V18.999C5 20.101 5.897 20.999 7 20.999H17C18.103 20.999
                                    19 20.101 19 18.999V6.99902H5ZM11 17H9V11H11V17ZM15 17H13V11H15V17Z">
                            </path>
                        </svg>

                    </div>
                </div>
            </div>
            <ReactTooltip
                className="thread-tool-tip"
                textColor="#B9BBBE"
                backgroundColor="#191919"
                id="edit-message"
                place="top"
                effect="solid">
                Edit
            </ReactTooltip>

            <ReactTooltip
                className="thread-tool-tip"
                textColor="#B9BBBE"
                backgroundColor="#191919"
                id="delete-message"
                place="top"
                effect="solid">
                Delete
            </ReactTooltip>
        </li>

    )


}
export default ServerMessages;