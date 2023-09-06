// import React from "react";
// import { useEffect, useState, useRef } from "react";
// import { closeOnEsc, closeHookModalOnOutsideClick } from "../../../utils/close_hook_modals_api_utils";
// import DefaultPFPSVG3 from "../../../../app/assets/images/defaultPFPSVG3.svg";
// import DmMessageSettingsContainer from "../dm_message_settings/dm_message_settings_container";

// const DMMessageEdit = (props) => {

//     const [showDmEdit, setShowDmEdit] = useState(false);
//     const [value, setValue] = useState(props.dmMessage.body);
//     const editDMRef = useRef(null);
//     const popUpRef = useRef(null);
//     const [_SHIFT, setShift] = useState(false);
//     const [expand, setExpand] = useState(false);
//     const buttonRef = useRef(null);
//     const [selectDmMsg, setSelectedDmMsg] = useState({});

//     useEffect(() => {
//         if (props.msgUpc === true) {
//             $(`#dmMessage-id-${selectDmMsg?.id}`).addClass("selected");
//         }
//         if (props.msgUpc === false) {
//             $(`#dmMessage-id-${selectDmMsg?.id}`).removeClass("selected");
//             setSelectedDmMsg({})
//         }
//     }, [props.msgUpc])


//     const openEdit = () => {
//         setShowDmEdit(true);
//     }

//     useEffect(() => {
//         if (showDmEdit) {
//             editDMRef.current.focus();
//         }
//     })

//     const handleEdit = (e) => {
//         e.preventDefault();
//         e.stopPropagation();

//         if (value.length === 0 || value.replace(/\s/g, '').length === 0) {
//             //reset back the value to dmMessage body just incase user aborts deletion
//             // if a user sends a blank message or a message containing only spaces ask if the user
//             //wants to delete their message instead.
//             setValue(props.dmMessage.body);
//             props.openModalWithProps({
//                 currentUserId: props.currentUserId,
//                 currentUser: props.currentUser,
//                 dmMessage: props.dmMessage,
//                 renderGroupChatFirstMessage: props.renderGroupChatFirstMessage,
//                 oneToOneChatFirstMessage: props.oneToOneChatFirstMessage,
//                 formatTime: props.formatTime,
//                 dmServerId: props.dmServerId,
//                 dmMessageAuthor: props.dmMessageAuthor

//             });
//             props.setRenderDeleteDM(true);
//         }

//         else if (value !== props.dmMessage.body) {

//             let editedDmMessage = {
//                 id: props.dmMessage.id,
//                 body: value.trim(),
//                 dm_server_id: parseInt(props.dmServerId),
//                 sender_id: props.currentUserId
//             }

//             props.updateDmMessage(editedDmMessage);
//         }
//         setShowDmEdit(false);
//     };

//     const closeEdit = (bool) => {
//         setShowDmEdit(bool);
//         setValue(props.dmMessage.body);
//     }

//     closeOnEsc(closeEdit);
//     closeHookModalOnOutsideClick(popUpRef, closeEdit)
//     const editInput = (
//         <form onSubmit={handleEdit} className="message-form-edit" >
//             <textarea
//                 onFocus={(e) => e.currentTarget.setSelectionRange(e.currentTarget.value.length, e.currentTarget.value.length)}
//                 value={value}
//                 onChange={(e) => setValue(e.currentTarget.value)}
//                 className="server-message-chat-box-area"
//                 rows={value.split('\n').length}
//                 minLength={1}
//                 maxLength={2000}
//                 placeholder={`${props.dmMessage.body}`}
//                 spellCheck={false}
//                 autoFocus
//                 ref={editDMRef}
//                 onKeyDown={(e) => {
//                     if (e.code === 'Enter' && !e.shiftKey) {
//                         handleEdit(e);
//                     }
//                 }} />
//             <div>
//                 escape to <span onClick={() => closeEdit(false)}>cancel</span> &#8226;
//                 enter to {` `}
//                 <span onClick={handleEdit}>save</span>
//             </div>
//         </form>
//     )


//     const messageBody = () => {
//         if (props.currentUserId === props.dmMessage.sender_id) {
//             return (
//                 <>
//                     {showDmEdit ? editInput : props.dmMessage.body}
//                 </>
//             )
//         }
//         else {
//             return (
//                 <>
//                     {props.dmMessage.body}
//                 </>
//             )
//         }
//     }


//     const expandButtonList = (e) => {
//         e.stopPropagation();
//         if (e.shiftKey) {
//             setShift(true);
//         }
//         else {
//             setShift(false);
//         }
//     }
//     const compressButtonList = (e) => {
//         // e.stopPropagation();
//         if (!e.shiftKey) {
//             setShift(false);
//         }
//     }




//     const botMessage = props.dmMessage.sender_id === 1 &&
//         props.dmMessage.body === 'This is the beginning of your direct message history with' ?
//         props.oneToOneChatFirstMessage() : props.dmMessage.sender_id === 1 &&
//             props.dmMessage.body === 'Welcome to the beginning of your Group Chat' ?
//             props.renderGroupChatFirstMessage() : ('');
//     let dmMessageAuthorName = props.dmMessage.sender_id !== props.dmMessageAuthor.id ? props.dmMessage.authorName : props.dmMessageAuthor.username;

//     return (

//         <li id={`dmMessage-id-${props.dmMessage.id}`} className={`chat-message-item ${showDmEdit === true ? `selected` : ``}`} key={props.dmMessage.id} ref={popUpRef} tabIndex={-1}
//             // onMouseEnter={(e) => { buttonRef.current.focus(); }}
//             // onMouseLeave={(e) => { buttonRef.current.blur(); setShift(false); }}
//             onMouseEnter={(e) => { e.preventDefault(); popUpRef.current.focus({ preventScroll: true, focusVisible: false }); }}
//             onMouseLeave={(e) => { popUpRef.current.blur(); setShift(false); }}
//             onKeyUp={(e) => { if (popUpRef?.current.focus && !e.shiftKey) { setShift(false); } }}
//             onKeyDown={(e) => { if (popUpRef?.current.focus && e.shiftKey) { setShift(true); } }}
//             // onMouseEnter={(e) => {
//             //     e.stopPropagation();
//             //     document.addEventListener("keydown", expandButtonList, false);
//             //     document.addEventListener('keyup', compressButtonList, false);
//             // }}
//             // onMouseLeave={(e) => {
//             //     // e.stopPropagation();
//             //     document.removeEventListener("keydown", expandButtonList, false);
//             //     document.removeEventListener('keyup', compressButtonList, false);
//             // }}

//             // onMouseEnter={(e) => {
//             //     // document.addEventListener("keydown", expandButtonList, false);
//             //     // document.addEventListener('keyup', compressButtonList, false);
//             //     document.addEventListener("keydown", expandButtonList);
//             //     document.addEventListener('keyup', compressButtonList);
//             // }}
//             // onMouseLeave={(e) => {
//             //     document.removeEventListener("keydown", expandButtonList);
//             //     document.removeEventListener('keyup', compressButtonList);
//             //     // document.removeEventListener("keydown", expandButtonList, false);
//             //     // document.removeEventListener('keyup', compressButtonList, false);
//             // }}

//         >

//             <div className="message-wrapper1" ref={buttonRef} tabIndex={-1}
//             >
//                 <div className="message-wrapper-contents">
//                     {
//                         props.dmMessageAuthor.photo === undefined ? (
//                             <img className={`chat-member-avatar-img color-${props.dmMessageAuthor.color_tag}`} src={DefaultPFPSVG3} alt=" "
//                                 onClick={(e) => {
//                                     setSelectedDmMsg(props.dmMessage)
//                                     props.handleOpenSUOMM(e, props.dmMessageAuthor);
//                                 }}
//                             />
//                         ) : (
//                             <img className="chat-member-avatar-img" src={props.dmMessageAuthor.photo} alt=" "
//                                 onClick={(e) => {
//                                     setSelectedDmMsg(props.dmMessage)
//                                     props.handleOpenSUOMM(e, props.dmMessageAuthor);
//                                 }} />
//                         )
//                     }

//                     <h3 className="chat-member-username-header">
//                         <span className="chat-member-username-wrap">
//                             <span role="button" tabIndex={0} className="chat-member-username"
//                                 onClick={(e) => {
//                                     setSelectedDmMsg(props.dmMessage)
//                                     props.handleOpenSUOMM(e, props.dmMessageAuthor, "userNameClicked");
//                                 }}
//                             >
//                                 {dmMessageAuthorName}
//                             </span>
//                         </span>
//                         <span className="chat-message-timestamp">
//                             <time dateTime={`${props.dmMessage.created_at}`}>
//                                 <i className="chat-message-timestamp-i"> — </i>
//                                 {props.formatTime(props.dmMessage.created_at)}
//                             </time>
//                         </span>
//                     </h3>
//                     <div className="chat-message">
//                         {messageBody()}
//                         {botMessage}
//                         {/* <span className="mention-wrapper">{dmMessage.body}</span> */}
//                     </div>
//                 </div>

//                 <DmMessageSettingsContainer
//                     openEdit={openEdit}
//                     showDmEdit={showDmEdit}
//                     dmMessageAuthor={props.dmMessageAuthor}
//                     dmMembers={props.dmMembers}
//                     currentUserId={props.currentUserId}
//                     currentUser={props.currentUser}
//                     dmMessage={props.dmMessage}
//                     renderGroupChatFirstMessage={props.renderGroupChatFirstMessage}
//                     oneToOneChatFirstMessage={props.oneToOneChatFirstMessage}
//                     formatTime={props.formatTime}
//                     dmServerId={props.dmServerId}
//                     key={props.dmMessage.id}
//                     strifeBot={props.strifeBot}
//                     setRenderDeleteDM={props.setRenderDeleteDM}
//                     _SHIFT={_SHIFT}
//                 />
//             </div>
//         </li>

//     )


// }
// export default DMMessageEdit;