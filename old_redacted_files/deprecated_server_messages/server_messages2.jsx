// import React from "react";
// import { useEffect, useState, useRef } from "react";
// import { closeOnEsc, closeHookModalOnOutsideClick } from "../../../utils/close_hook_modals_api_utils";
// import DefaultPFPSVG3 from "../../../../app/assets/images/defaultPFPSVG3.svg";
// import ServerMessageControlContainer from "../server_message_control/server_message_control_container";

// const ServerMessages = (props) => {

//     const [showMsgEdit, setShowMsgEdit] = useState(false);
//     const [value, setValue] = useState(props.message.body);
//     const [enableExpand, setEnableExpand] = useState(false);
//     const [_SHIFT, setShift] = useState(false);
//     const editMsgRef = useRef(null);
//     const popUpRef = useRef(null);
//     const buttonRef = useRef(null);

//     const openEdit = () => {
//         setShowMsgEdit(true);
//     }

//     useEffect(() => {
//         if (showMsgEdit) {
//             editMsgRef.current.focus();
//             buttonRef.current.blur();
//         }
//         // else {
//         //     if (buttonRef?.current.blur) {
//         //         props.chatInputRef?.current.focus();
//         //     }
//         // }
//     })

//     const handleEdit = (e) => {
//         e.preventDefault();
//         e.stopPropagation();


//         if (value.length === 0 || value.replace(/\s/g, '').length === 0) {
//             //reset back the value to dmMessage body just incase user aborts deletion
//             // if a user sends a blank message or a message containing only spaces ask if the user
//             //wants to delete their message instead.
//             setValue(props.message.body);
//             props.openModalWithProps({
//                 currentUserId: props.currentUserId,
//                 message: props.message,
//                 formatTime: props.formatTime,
//                 serverId: props.serverId,
//                 channelId: props.channelId,
//                 messageAuthor: props.messageAuthor

//             });
//             props.setRenderDeleteChannelMessage(true);

//         }

//         else if (value !== props.message.body) {

//             let editedMessage = {
//                 id: props.message.id,
//                 body: value.trim(),
//                 channel_id: parseInt(props.channelId),
//                 author_id: props.currentUserId
//             }
//             props.updateMessage(editedMessage);
//         }

//         setShowMsgEdit(false);
//     };

//     const closeEdit = (bool) => {
//         setShowMsgEdit(bool);
//         setValue(props.message.body);
//     }

//     closeOnEsc(closeEdit);
//     closeHookModalOnOutsideClick(popUpRef, closeEdit);
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
//                 placeholder={`${props.message.body}`}
//                 spellCheck={false}
//                 autoFocus={true}
//                 ref={editMsgRef}
//                 onKeyDown={(e) => {
//                     if (e.code === 'Enter' && !e.shiftKey) {
//                         handleEdit(e);
//                     }
//                 }} />
//             <div>
//                 escape to <span onClick={() => closeEdit(false)}>cancel</span> &#8226;
//                 enter to{` `}
//                 <span onClick={handleEdit}>save</span>
//             </div>
//         </form>
//     )


//     const messageBody = () => {
//         if (props.currentUserId === props.message.author_id) {
//             return (
//                 <>
//                     {showMsgEdit ? editInput : props.message.body}
//                 </>
//             )
//         }
//         else {
//             return (
//                 <>
//                     {props.message.body}
//                 </>
//             )
//         }
//     }

//     let messageAuthorName = props.message.author_id !== props.messageAuthor.id ? props.message.authorName : props.messageAuthor.username;
//     return (
//         <li className={`chat-message-item ${showMsgEdit === true ? `selected` : ``}`}
//             key={props.message.id}
//             ref={popUpRef}
//             onMouseEnter={(e) => {
//                 buttonRef.current.focus();
//                 setEnableExpand(true);
//             }}
//             onMouseLeave={(e) => {
//                 buttonRef.current.blur();
//                 setShift(false);
//                 setEnableExpand(false);
//             }}
//         >

//             <div className="message-wrapper1"
//                 id={`message-id-${props.message.id}`}
//                 ref={buttonRef}
//                 onKeyDown={(e) => {
//                     // if (e.shiftKey) {
//                     //     console.log('currently holding shift')
//                     //     setShift(true)
//                     // }
//                     if (buttonRef?.current.focus && e.shiftKey) {
//                         console.log('currently holding shift')
//                         setShift(true)
//                     }
//                 }
//                 }
//                 onKeyUp={(e) => {
//                     if (buttonRef?.current.focus && !e.shiftKey) {
//                         setShift(false);
//                     }
//                 }}
//                 tabIndex={0}
//             >
//                 <div className="message-wrapper-contents">

//                     {
//                         props.messageAuthor.photo === undefined ? (
//                             <img className={`chat-member-avatar-img color-${props.messageAuthor.color_tag}`} src={DefaultPFPSVG3} alt=" "
//                                 onClick={(e) => {
//                                     props.handleSelected(props.messageAuthor);
//                                     props.handlePopupShow(e);
//                                 }} />
//                             // <img className={`chat-member-avatar-img icon-colors-${props.messageAuthor.color_tag}`} alt=" " />
//                         ) : (
//                             <img className="chat-member-avatar-img" src={props.messageAuthor.photo} alt=" " onClick={(e) => {
//                                 props.handleSelected(props.messageAuthor);
//                                 props.handlePopupShow(e);
//                             }} />
//                         )
//                     }

//                     <h3 className="chat-member-username-header">
//                         <span className="chat-member-username-wrap">
//                             {/* <span className="chat-member-username">{props.message.authorName}</span> */}
//                             <span role="button" tabIndex={0} className="chat-member-username" onClick={(e) => {
//                                 props.handleSelected(props.messageAuthor);
//                                 props.handlePopupShow(e);
//                             }}>
//                                 {messageAuthorName}
//                             </span>
//                         </span>
//                         <span className="chat-message-timestamp">
//                             <time dateTime={`${props.message.created_at}`}>
//                                 <i className="chat-message-timestamp-i"> — </i>
//                                 {props.formatTime(props.message.created_at)}
//                             </time>
//                         </span>
//                     </h3>
//                     <div className="chat-message">
//                         {messageBody()}
//                     </div>
//                 </div>

//                 <ServerMessageControlContainer
//                     showMsgEdit={showMsgEdit}
//                     buttonRef={buttonRef}
//                     enableExpand={enableExpand}
//                     currentUser={props.currentUser}
//                     setRenderDeleteChannelMessage={props.setRenderDeleteChannelMessage}
//                     key={props.message.id}
//                     strifeBot={props.strifeBot}
//                     currentUserId={props.currentUserId}
//                     message={props.message}
//                     messageAuthor={props.messageAuthor}
//                     serverMembers={props.serverMembers}
//                     formatTime={props.formatTime}
//                     channelId={props.match.params.channelId}
//                     serverId={props.match.params.serverId}
//                     server={props.server}
//                     openEdit={openEdit}
//                     channel={props.channel}
//                     channelName={props.channelName}
//                     _SHIFT={_SHIFT}
//                 />
//             </div>
//         </li>

//     )


// }
// export default ServerMessages;