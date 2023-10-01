import React from "react";
import { useEffect, useState, useRef } from "react";
import { closeOnEsc, closeHookModalOnOutsideClick } from "../../../utils/close_hook_modals_api_utils";
import DefaultPFPSVG3 from "../../../../app/assets/images/defaultPFPSVG3.svg";
import ServerMessageControlContainer from "../server_message_control/server_message_control_container";
import { StrifeBotTagIcon } from "../../front_end_svgs/Strife_svgs";
import { useToolTipFullTimeStamp, useFormatTimeStampMessageBody } from "../../../utils/useTimeStamp_api_utils";

const ServerMessages = (props) => {

    const [showMsgEdit, setShowMsgEdit] = useState(false);
    const [value, setValue] = useState(props.message.body);
    const [enableExpand, setEnableExpand] = useState(false);
    const [_SHIFT, setShift] = useState(false);
    const editMsgRef = useRef(null);
    const editMsgFormRef = useRef(null);
    const popUpRef = useRef(null);
    const buttonRef = useRef(null);
    const [selectedMsg, setSelectedMsg] = useState({});


    useEffect(() => {
        if (props.msgUpc === true) {
            $(`#message-id-${selectedMsg?.id}`).addClass("selected");
        }
        if (props.msgUpc === false) {
            $(`#message-id-${selectedMsg?.id}`).removeClass("selected");
            setSelectedMsg({})
        }
    }, [props.msgUpc])

    const openEdit = () => {
        setShowMsgEdit(true);
    }

    useEffect(() => {
        if (showMsgEdit) {
            editMsgFormRef.current.scrollIntoView(true);
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
            setValue(props.message.body);
            props.openModalWithProps({
                message: props.message,
                serverId: props.serverId,
                channelId: props.channelId,
                messageAuthor: props.messageAuthor,
                server: props.server,
            });
            props.setRenderDeleteChannelMessage(true);

        }

        else if (value !== props.message.body) {

            let editedMessage = {
                id: props.message.id,
                body: value.trim(),
                channel_id: parseInt(props.channelId),
                author_id: props.currentUser.id
            }
            props.updateMessage(editedMessage);
        }

        setShowMsgEdit(false);
    };

    const closeEdit = (bool) => {
        setShowMsgEdit(bool);
        setValue(props.message.body);
    }

    closeOnEsc(closeEdit);
    closeHookModalOnOutsideClick(popUpRef, closeEdit);
    const editInput = (
        <div>
            <form className="message-form-edit" onSubmit={handleEdit}>
                <div className="chat-input-text-area-scroller chat-input-tsa-webkit-scroll" ref={editMsgFormRef}>
                    <div className="edit-msg-input-inner-flex">
                        <div className="inner-scroller-text-area">
                            <div>
                                <textarea
                                    onFocus={(e) => e.currentTarget.setSelectionRange(e.currentTarget.value.length, e.currentTarget.value.length)}
                                    value={value}
                                    onChange={(e) => setValue(e.currentTarget.value)}
                                    className="server-message-chat-box-area edit-msg-ta-chat-box"
                                    rows={value.split('\n').length}
                                    minLength={1}
                                    maxLength={2000}
                                    spellCheck={false}
                                    autoFocus={true}
                                    ref={editMsgRef}
                                    onKeyDown={(e) => {
                                        if (e.key === 'Enter' && !e.shiftKey) {
                                            handleEdit(e);
                                        }
                                    }} />
                            </div>
                        </div>
                    </div>
                </div>
            </form>
            <div className="message-form-operations">
                escape to <a onClick={() => closeEdit(false)}>cancel</a> &#8226;
                enter to {` `}
                <a onClick={handleEdit}>save</a>
            </div>
        </div>
    )

    const messageBody = () => {
        if (props.currentUser.id === props.message.author_id) {
            return (
                <>
                    {showMsgEdit ? editInput :
                        (<div className="chat-message">{props.message.body}</div>)
                    }
                </>
            )
        }
        else {
            return (
                <>
                    <div className="chat-message">
                        {props.message.body}
                    </div>
                </>
            )
        }
    }


    const expandButtonList = (e) => {
        e.stopPropagation();
        if (e.shiftKey) {
            setShift(true);
        }
        else {
            setShift(false);
        }
    }
    const compressButtonList = (e) => {
        // e.stopPropagation();
        if (!e.shiftKey) {
            setShift(false);
        }
    }

    const Strife_Bot_IDs = [1, 2, 3, 4];
    let if_Bot_tag = (
        <span className="server-message-bot-tag">
            <StrifeBotTagIcon className="server-message-bot-tag-check-mark" data-tooltip-id="msgbs-thread-tip" data-tooltip-place="top" data-tooltip-content={`${props.message.author_id === 1 ? `$y$t3m M3$$@g3` : `Verified $TR!F3 B0T`}`} />
            <span className="server-message-bot-tag-text ">{`${props.message.author_id === 1 ? `$Y$T3M` : `$TR!F3 B0T`}`}</span>
        </span>
    );
    let renderBotTag = Strife_Bot_IDs.includes(props.message.author_id) ? (if_Bot_tag) : ("");
    let messageAuthorName = props.message.author_id !== props.messageAuthor.id ? props.message.authorName : props.messageAuthor.username;

    return (

        <>
            {
                props.msgIdx === 0 || props.message.seconds - props.channelMessages[props.msgIdx - 1].seconds >= 300 || props.message.author_id !== props.channelMessages[props.msgIdx - 1].author_id ?
                    (
                        <>
                            {
                                props.msgIdx === 0 || props.message.date !== props.channelMessages[props.msgIdx - 1].date ? (
                                    <div className="chat-divider">
                                        <span className="chat-divider-content">{`${props.message.date}`}</span>
                                    </div>
                                ) : (null)
                            }


                            <li className={`chat-message-item ${showMsgEdit === true ? `selected` : ``}`} id={`message-id-${props.message.id}`} key={props.message.id} ref={popUpRef} tabIndex={-1}
                                // onMouseEnter={(e) => { e.preventDefault(); popUpRef.current.focus({ preventScroll: true, focusVisible: false }); }}
                                // onMouseLeave={(e) => { popUpRef.current.blur(); setShift(false); }}
                                // onKeyUp={(e) => { if (popUpRef?.current.focus && !e.shiftKey) { setShift(false); } }}
                                // onKeyDown={(e) => { if (popUpRef?.current.focus && e.shiftKey) { setShift(true); } }}
                                onMouseEnter={(e) => {
                                    document.addEventListener("keydown", expandButtonList);
                                    document.addEventListener('keyup', compressButtonList);
                                }}
                                onMouseLeave={(e) => {
                                    document.removeEventListener("keydown", expandButtonList);
                                    document.removeEventListener('keyup', compressButtonList);
                                }}
                            >
                                <div className="message-wrapper" ref={buttonRef} tabIndex={-1}>
                                    <div className="message-wrapper-contents">
                                        {
                                            props.messageAuthor.photo === undefined ? (
                                                <img className={`chat-member-avatar-img color-${props.messageAuthor.color_tag}`} src={DefaultPFPSVG3} alt=" "
                                                    onClick={(e) => {
                                                        setSelectedMsg(props.message)
                                                        props.handleOpenSUOMM(e, props.messageAuthor);
                                                    }} />
                                            ) : (
                                                <img className="chat-member-avatar-img" src={props.messageAuthor.photo} alt=" " onClick={(e) => {
                                                    setSelectedMsg(props.message)
                                                    props.handleOpenSUOMM(e, props.messageAuthor);
                                                }} />
                                            )
                                        }

                                        <h3 className="chat-member-username-header">
                                            <span className="chat-member-username-wrap">
                                                <span role="button" tabIndex={0} className="chat-member-username" onClick={(e) => {
                                                    setSelectedMsg(props.message)
                                                    props.handleOpenSUOMM(e, props.messageAuthor, "userNameClicked");
                                                }}>
                                                    {messageAuthorName}
                                                </span>
                                                {renderBotTag}
                                            </span>
                                            <span className="chat-message-timestamp" data-tooltip-id="scmsgsTimeStamp-thread-tip" data-tooltip-place="top"
                                                data-tooltip-content={`${useToolTipFullTimeStamp(props.message.created_at)}`}>
                                                <time dateTime={`${props.message.created_at}`}>
                                                    <i className="chat-message-timestamp-i"> — </i>
                                                    {useFormatTimeStampMessageBody(props.message.created_at)}
                                                </time>
                                            </span>
                                        </h3>
                                        {messageBody()}
                                    </div>
                                    <div className="message-accessories"></div>
                                    <ServerMessageControlContainer
                                        showMsgEdit={showMsgEdit} openEdit={openEdit} strifeBot={props.strifeBot}
                                        setRenderDeleteChannelMessage={props.setRenderDeleteChannelMessage}
                                        key={`server-channel-msg-Controller-${props.message.id}`}
                                        message={props.message} messageAuthor={props.messageAuthor}
                                        server={props.server} channelId={props.match.params.channelId}
                                        serverId={props.match.params.serverId}
                                        is_header={true} setMsgCtrlTTHover={props.setMsgCtrlTTHover}
                                        setMsgCtrlSRTTHover={props.setMsgCtrlSRTTHover}
                                        _SHIFT={_SHIFT}
                                    />
                                </div>
                            </li>
                        </>

                    ) : (
                        <li className={`chat-message-item ${showMsgEdit === true ? `selected` : ``}`} id={`message-id-${props.message.id}`} key={props.message.id} ref={popUpRef} tabIndex={-1}
                            // onMouseEnter={(e) => { e.preventDefault(); popUpRef.current.focus({ preventScroll: true, focusVisible: false }); }}
                            // onMouseLeave={(e) => { popUpRef.current.blur(); setShift(false); }}
                            // onKeyUp={(e) => { if (popUpRef?.current.focus && !e.shiftKey) { setShift(false); } }}
                            // onKeyDown={(e) => { if (popUpRef?.current.focus && e.shiftKey) { setShift(true); } }}
                            onMouseEnter={(e) => {
                                document.addEventListener("keydown", expandButtonList);
                                document.addEventListener('keyup', compressButtonList);
                            }}
                            onMouseLeave={(e) => {
                                document.removeEventListener("keydown", expandButtonList);
                                document.removeEventListener('keyup', compressButtonList);
                            }}
                        >
                            <div className="message-wrapper follow-up-msg" ref={buttonRef} tabIndex={-1}>
                                <div className="message-wrapper-contents">
                                    <span className="chat-message-hover-timestamp" data-tooltip-id="scmsgsTimeStamp-thread-tip"
                                        data-tooltip-place="top" data-tooltip-position-strategy="fixed"
                                        data-tooltip-content={`${useToolTipFullTimeStamp(props.message.created_at)}`}>
                                        <time dateTime={`${props.message.created_at}`}>
                                            <i className="chat-message-timestamp-i"> [ </i>
                                            {`${props.message.time}`}
                                            <i className="chat-message-timestamp-i"> ] </i>
                                        </time>
                                    </span>
                                    {messageBody()}
                                </div>
                                <div className="message-accessories"></div>
                                <ServerMessageControlContainer
                                    showMsgEdit={showMsgEdit} openEdit={openEdit} strifeBot={props.strifeBot}
                                    setRenderDeleteChannelMessage={props.setRenderDeleteChannelMessage}
                                    key={`server-channel-msg-Controller-${props.message.id}`}
                                    message={props.message} messageAuthor={props.messageAuthor}
                                    server={props.server} channelId={props.match.params.channelId}
                                    serverId={props.match.params.serverId}
                                    is_header={false} setMsgCtrlTTHover={props.setMsgCtrlTTHover}
                                    setMsgCtrlSRTTHover={props.setMsgCtrlSRTTHover}
                                    _SHIFT={_SHIFT}
                                />
                            </div>
                        </li>
                    )
            }
        </>
    )

}
export default ServerMessages;