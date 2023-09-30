import React from "react";
import { useEffect, useState, useRef } from "react";
import { closeOnEsc, closeHookModalOnOutsideClick } from "../../../utils/close_hook_modals_api_utils";
import DefaultPFPSVG3 from "../../../../app/assets/images/defaultPFPSVG3.svg";
import DmMessageSettingsContainer from "../dm_message_settings/dm_message_settings_container";
import { useFormatTimeStampMessageBody, useToolTipFullTimeStamp } from "../../../utils/useTimeStamp_api_utils";

const DMMessages = (props) => {

    const [showDmEdit, setShowDmEdit] = useState(false);
    const [value, setValue] = useState(props.dmMessage.body);
    const editDMRef = useRef(null);
    const editDMFormRef = useRef(null);
    const popUpRef = useRef(null);
    const [_SHIFT, setShift] = useState(false);
    const [expand, setExpand] = useState(false);
    const buttonRef = useRef(null);
    const [selectedDmMsg, setSelectedDmMsg] = useState({});

    useEffect(() => {
        if (props.msgUpc === true) {
            $(`#dmMessage-id-${selectedDmMsg?.id}`).addClass("selected");
        }
        if (props.msgUpc === false) {
            $(`#dmMessage-id-${selectedDmMsg?.id}`).removeClass("selected");
            setSelectedDmMsg({})
        }
    }, [props.msgUpc])

    const openEdit = () => {
        setShowDmEdit(true);
    }

    useEffect(() => {
        if (showDmEdit) {
            editDMFormRef.current.scrollIntoView(true);
            editDMRef.current.focus();
        }
    })

    const handleEdit = (e) => {
        e.preventDefault();
        e.stopPropagation();

        if (value.length === 0 || value.replace(/\s/g, '').length === 0) {
            //reset back the value to dmMessage body just incase user aborts deletion
            // if a user sends a blank message or a message containing only spaces ask if the user
            //wants to delete their message instead.
            setValue(props.dmMessage.body);
            props.openModalWithProps({
                dmMessage: props.dmMessage,
                dmServerId: props.dmServerId,
                dmMessageAuthor: props.dmMessageAuthor

            });
            props.setRenderDeleteDM(true);
        }

        else if (value !== props.dmMessage.body) {

            let editedDmMessage = {
                id: props.dmMessage.id,
                body: value.trim(),
                dm_server_id: parseInt(props.dmServerId),
                sender_id: props.currentUser.id
            }

            props.updateDmMessage(editedDmMessage);
        }
        setShowDmEdit(false);
    };

    const closeEdit = (bool) => {
        setShowDmEdit(bool);
        setValue(props.dmMessage.body);
    }

    closeOnEsc(closeEdit);
    closeHookModalOnOutsideClick(popUpRef, closeEdit)
    const editInput = (
        <div>
            <form className="message-form-edit" onSubmit={handleEdit}>
                <div className="chat-input-text-area-scroller chat-input-tsa-webkit-scroll" ref={editDMFormRef}>
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
                                    ref={editDMRef}
                                    onKeyDown={(e) => {
                                        if (e.code === 'Enter' && !e.shiftKey) {
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
        if (props.currentUser.id === props.dmMessage.sender_id) {
            return (
                <>
                    {showDmEdit ? editInput :
                        (<div className="chat-message"> {props.dmMessage.body} </div>)
                    }
                </>
            )
        }
        else {
            return (
                <>
                    <div className="chat-message"> {props.dmMessage.body} </div>
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


    let dmMessageAuthorName = props.dmMessage.sender_id !== props.dmMessageAuthor.id ? props.dmMessage.authorName : props.dmMessageAuthor.username;

    return (
        <>
            {
                props.dmMsgIdx === 0 || props.dmMessage.seconds - props.DmMessages[props.dmMsgIdx - 1].seconds >= 300 || props.dmMessage.sender_id !== props.DmMessages[props.dmMsgIdx - 1].sender_id ?
                    (
                        <>
                            {
                                props.dmMsgIdx === 0 || props.dmMessage.date !== props.DmMessages[props.dmMsgIdx - 1].date ? (
                                    <div className="chat-divider">
                                        <span className="chat-divider-content">{`${props.dmMessage.date}`}</span>
                                    </div>
                                ) : (null)
                            }
                            <li id={`dmMessage-id-${props.dmMessage.id}`} className={`chat-message-item ${showDmEdit === true ? `selected` : ``}`} key={props.dmMessage.id} ref={popUpRef} tabIndex={-1}
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
                                            props.dmMessageAuthor.photo === undefined ? (
                                                <img className={`chat-member-avatar-img color-${props.dmMessageAuthor.color_tag}`} src={DefaultPFPSVG3} alt=" "
                                                    onClick={(e) => {
                                                        setSelectedDmMsg(props.dmMessage)
                                                        props.handleOpenSUOMM(e, props.dmMessageAuthor);
                                                    }}
                                                />
                                            ) : (
                                                <img className="chat-member-avatar-img" src={props.dmMessageAuthor.photo} alt=" "
                                                    onClick={(e) => {
                                                        setSelectedDmMsg(props.dmMessage)
                                                        props.handleOpenSUOMM(e, props.dmMessageAuthor);
                                                    }} />
                                            )
                                        }

                                        <h3 className="chat-member-username-header">
                                            <span className="chat-member-username-wrap">
                                                <span role="button" tabIndex={0} className="chat-member-username"
                                                    onClick={(e) => {
                                                        setSelectedDmMsg(props.dmMessage)
                                                        props.handleOpenSUOMM(e, props.dmMessageAuthor, "userNameClicked");
                                                    }}
                                                >
                                                    {dmMessageAuthorName}
                                                </span>
                                            </span>
                                            <span className="chat-message-timestamp" data-tooltip-id="dmsgsTimeStamp-thread-tip" data-tooltip-place="top"
                                                data-tooltip-content={`${useToolTipFullTimeStamp(props.dmMessage.created_at)}`}>
                                                <time dateTime={`${props.dmMessage.created_at}`}>
                                                    <i className="chat-message-timestamp-i"> — </i>
                                                    {useFormatTimeStampMessageBody(props.dmMessage.created_at)}
                                                </time>
                                            </span>
                                        </h3>
                                        {messageBody()}
                                    </div>
                                    <div className="message-accessories"></div>
                                    <DmMessageSettingsContainer
                                        openEdit={openEdit}
                                        showDmEdit={showDmEdit}
                                        dmMessageAuthor={props.dmMessageAuthor}
                                        dmMembers={props.dmMembers}
                                        dmMessage={props.dmMessage}
                                        dmServerId={props.dmServerId}
                                        key={`dm-message-controller-${props.dmMessage.id}`}
                                        strifeBot={props.strifeBot}
                                        setRenderDeleteDM={props.setRenderDeleteDM}
                                        is_header={true}
                                        setMsgCtrlTTHover={props.setMsgCtrlTTHover}
                                        setMsgCtrlSRTTHover={props.setMsgCtrlSRTTHover}
                                        _SHIFT={_SHIFT}
                                    />
                                </div>
                            </li>
                        </>
                    )
                    : (
                        <li id={`dmMessage-id-${props.dmMessage.id}`} className={`chat-message-item ${showDmEdit === true ? `selected` : ``}`} key={props.dmMessage.id} ref={popUpRef} tabIndex={-1}
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
                                    <span className="chat-message-hover-timestamp" data-tooltip-id="dmsgsTimeStamp-thread-tip"
                                        data-tooltip-place="top" data-tooltip-position-strategy="fixed"
                                        data-tooltip-content={`${useToolTipFullTimeStamp(props.dmMessage.created_at)}`}>
                                        <time dateTime={`${props.dmMessage.created_at}`}>
                                            <i className="chat-message-timestamp-i"> [ </i>
                                            {`${props.dmMessage.time}`}
                                            <i className="chat-message-timestamp-i"> ] </i>
                                        </time>
                                    </span>
                                    {messageBody()}
                                </div>
                                <div className="message-accessories"></div>
                                <DmMessageSettingsContainer
                                    openEdit={openEdit}
                                    showDmEdit={showDmEdit}
                                    dmMessageAuthor={props.dmMessageAuthor}
                                    dmMembers={props.dmMembers}
                                    dmMessage={props.dmMessage}
                                    dmServerId={props.dmServerId}
                                    key={`dm-message-controller-${props.dmMessage.id}`}
                                    strifeBot={props.strifeBot}
                                    setRenderDeleteDM={props.setRenderDeleteDM}
                                    is_header={false}
                                    setMsgCtrlTTHover={props.setMsgCtrlTTHover}
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
export default DMMessages;