// import React from "react";
// import { useEffect, useState, useRef } from "react";
// import { closeOnEsc, closeHookModalOnOutsideClick } from "../../../utils/close_hook_modals_api_utils";
// import DefaultPFPSVG3 from "../../../../app/assets/images/defaultPFPSVG3.svg";
// import { AddReactionIcon, AddSuperReactionIcon, ChainLinkIcon, CopyIDIcon, MarkUnReadIcon, OverFlowEllipsisIcon, PenEditIcon, PinnedIcon, ReplyArrowIcon, ThreadsIcon, TrashCanIcon } from "../../front_end_svgs/Strife_svgs";


// const DMMessageEdit = (props) => {

//     const [showDmEdit, setShowDmEdit] = useState(false);
//     const [value, setValue] = useState(props.dmMessage.body);
//     const editDMRef = useRef(null);
//     const popUpRef = useRef();

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




//     const botMessage = props.dmMessage.sender_id === 1 &&
//         props.dmMessage.body === 'This is the beginning of your direct message history with' ?
//         props.oneToOneChatFirstMessage() : props.dmMessage.sender_id === 1 &&
//             props.dmMessage.body === 'Welcome to the beginning of your Group Chat' ?
//             props.renderGroupChatFirstMessage() : ('');
//     let dmMessageAuthorName = props.dmMessage.sender_id !== props.dmMessageAuthor.id ? props.dmMessage.authorName : props.dmMessageAuthor.username;

//     return (

//         <li className={`chat-message-item ${showDmEdit === true ? `selected` : ``}`} key={props.dmMessage.id} ref={popUpRef}>

//             <div className="message-wrapper1" id={`dmMessage-id-${props.dmMessage.id}`}>
//                 <div className="message-wrapper-contents">

//                     {
//                         props.dmMessageAuthor.photo === undefined ? (
//                             // <img className={`chat-member-avatar-img icon-colors-${props.dmMessageAuthor.color_tag}`} alt=" " />
//                             <img className={`chat-member-avatar-img color-${props.dmMessageAuthor.color_tag}`} src={DefaultPFPSVG3} alt=" " />
//                         ) : (
//                             <img className="chat-member-avatar-img" src={props.dmMessageAuthor.photo} alt=" " />
//                         )
//                     }

//                     <h3 className="chat-member-username-header">
//                         <span className="chat-member-username-wrap">
//                             <span className="chat-member-username">{dmMessageAuthorName}</span>
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



//                 {
//                     props.currentUserId === props.dmMessage.sender_id ?  
//                         (
//                             <>

//                                 <div className="message-accessories"></div>
//                                 <div className="message-accessories-button-container">
//                                     <div className="message-accessories-button-layer">
//                                         <div className={`message-accessories-button-wrapper1`} >

//                                             <div className="message-accessories-button" data-tooltip-id="thread-tip" data-tooltip-place="top" data-tooltip-content="Copy Message ID">
//                                                 <CopyIDIcon className="copy-msg-id-icon" width={24} height={24} />
//                                             </div>

//                                             <div className="message-accessories-button" data-tooltip-id="thread-tip" data-tooltip-place="top" data-tooltip-content="Copy Link">
//                                                 <ChainLinkIcon className="copy-msg-link-icon" width={24} height={24} />
//                                             </div>

//                                             <div className="message-accessories-button" data-tooltip-id="thread-tip" data-tooltip-place="top" data-tooltip-content="Mark Unread">
//                                                 <MarkUnReadIcon className="mark-msg-unread-icon" width={24} height={24} />
//                                             </div>
//                                             <div className="message-accessories-button" data-tooltip-id="thread-tip" data-tooltip-place="top" data-tooltip-content={'Pin Message'}>
//                                                 <PinnedIcon className="pinned-msg-icon" width={24} height={24} />
//                                             </div>

//                                             <div className="message-accessories-button" data-tooltip-id="thread-tip" data-tooltip-place="top" data-tooltip-content="Reply">
//                                                 <ReplyArrowIcon className="reply-to-msg-icon" width={24} height={24} />
//                                             </div>

//                                             <div className="message-accessories-button" data-tooltip-id="thread-tip" data-tooltip-place="top" data-tooltip-content="Add Reaction">
//                                                 <AddReactionIcon className="add-reaction-icon" width={18} height={18} />
//                                             </div>

//                                             <div className="message-accessories-button" data-tooltip-id="thread-tip-super-reaction" data-tooltip-place="top" data-tooltip-content="Add Super Reaction">
//                                                 <AddSuperReactionIcon className="add-super-reaction-icon" width={18} height={18} />
//                                             </div>

//                                             <div className="message-accessories-button" data-tooltip-id="thread-tip" data-tooltip-place="top" data-tooltip-content="Edit" onClick={() => openEdit()}>
//                                                 <PenEditIcon className="pen-icon" width={16} height={16} />
//                                             </div>

//                                             <div className="message-accessories-button" data-tooltip-id="thread-tip" data-tooltip-place="top" data-tooltip-content="Create Thread">
//                                                 <ThreadsIcon className="edit-msg-create-thread-icon" width={24} height={24} />
//                                             </div>

//                                             <div className="message-accessories-button" data-tooltip-id="thread-tip" data-tooltip-place="top" data-tooltip-content="Delete"
//                                                 onClick={() => {
//                                                     props.openModalWithProps({
//                                                         currentUserId: props.currentUserId,
//                                                         currentUser: props.currentUser,
//                                                         dmMessage: props.dmMessage,
//                                                         renderGroupChatFirstMessage: props.renderGroupChatFirstMessage,
//                                                         oneToOneChatFirstMessage: props.oneToOneChatFirstMessage,
//                                                         formatTime: props.formatTime,
//                                                         dmServerId: props.dmServerId,
//                                                         dmMessageAuthor: props.dmMessageAuthor
                
//                                                     });
//                                                     props.setRenderDeleteDM(true);
//                                                 }}>
//                                                 <TrashCanIcon className="delete-msg-icon danger-warning-del-msg" width={24} height={24} />
//                                             </div>

//                                             <div className="message-accessories-button" data-tooltip-id="thread-tip" data-tooltip-place="top" data-tooltip-content="More">
//                                                 <OverFlowEllipsisIcon className="edit-msg-more-options-icon" width={24} height={24} />
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </>
//                         )
//                         : (
//                             <>
//                                 <div className="message-accessories"></div>
//                                 <div className="message-accessories-button-container">
//                                     <div className="message-accessories-button-layer">
//                                         <div className={`message-accessories-button-wrapper1`} >

//                                             <div className="message-accessories-button" data-tooltip-id="thread-tip" data-tooltip-place="top" data-tooltip-content="Copy Message ID">
//                                                 <CopyIDIcon className="copy-msg-id-icon" width={24} height={24} />
//                                             </div>

//                                             <div className="message-accessories-button" data-tooltip-id="thread-tip" data-tooltip-place="top" data-tooltip-content="Copy Link">
//                                                 <ChainLinkIcon className="copy-msg-link-icon" width={24} height={24} />
//                                             </div>

//                                             <div className="message-accessories-button" data-tooltip-id="thread-tip" data-tooltip-place="top" data-tooltip-content="Mark Unread">
//                                                 <MarkUnReadIcon className="mark-msg-unread-icon" width={24} height={24} />
//                                             </div>
//                                             <div className="message-accessories-button" data-tooltip-id="thread-tip" data-tooltip-place="top" data-tooltip-content={'Pin Message'}>
//                                                 <PinnedIcon className="pinned-msg-icon" width={24} height={24} />
//                                             </div>

//                                             <div className="message-accessories-button" data-tooltip-id="thread-tip" data-tooltip-place="top" data-tooltip-content="Add Reaction">
//                                                 <AddReactionIcon className="add-reaction-icon" width={18} height={18} />
//                                             </div>

//                                             <div className="message-accessories-button" data-tooltip-id="thread-tip-super-reaction" data-tooltip-place="top" data-tooltip-content="Add Super Reaction">
//                                                 <AddSuperReactionIcon className="add-super-reaction-icon" width={18} height={18} />
//                                             </div>

//                                             <div className="message-accessories-button" data-tooltip-id="thread-tip" data-tooltip-place="top" data-tooltip-content="Reply">
//                                                 <ReplyArrowIcon className="reply-to-msg-icon" width={24} height={24} />
//                                             </div>

//                                             <div className="message-accessories-button" data-tooltip-id="thread-tip" data-tooltip-place="top" data-tooltip-content="More">
//                                                 <OverFlowEllipsisIcon className="edit-msg-more-options-icon" width={24} height={24} />
//                                             </div>

//                                         </div>
//                                     </div>
//                                 </div>
//                             </>
//                         )
//                 }








//                 {/* {
//                     props.currentUserId === props.dmMessage.sender_id ? (
//                         <div className={`message-accessories-button-wrapper`}>
//                             <div className="message-accessories-button" data-tooltip-id="thread-tip" data-tooltip-place="top" data-tooltip-content="Edit" onClick={() => openEdit()}>
//                                 <svg className="pen-icon" aria-hidden="true" role="img" width="16" height="16" viewBox="0 0 24 24">
//                                     <path fillRule="evenodd" clipRule="evenodd" d="M19.2929 9.8299L19.9409 9.18278C21.353 7.77064 
//                                  21.353 5.47197 19.9409 4.05892C18.5287 2.64678 16.2292 2.64678 14.817 4.05892L14.1699 4.70694L19.2929 
//                                  9.8299ZM12.8962 5.97688L5.18469 13.6906L10.3085 18.813L18.0201 11.0992L12.8962 5.97688ZM4.11851 
//                                  20.9704L8.75906 19.8112L4.18692 15.239L3.02678 19.8796C2.95028 20.1856 3.04028 20.5105 3.26349 
//                                  20.7337C3.48669 20.9569 3.8116 21.046 4.11851 20.9704Z" fill="currentColor">
//                                     </path>
//                                 </svg>

//                             </div>
//                             <div className="message-accessories-button" data-tooltip-id="thread-tip" data-tooltip-place="top" data-tooltip-content="Delete"
//                                 onClick={() => {
//                                     props.openModalWithProps({
//                                         currentUserId: props.currentUserId,
//                                         currentUser: props.currentUser,
//                                         dmMessage: props.dmMessage,
//                                         renderGroupChatFirstMessage: props.renderGroupChatFirstMessage,
//                                         oneToOneChatFirstMessage: props.oneToOneChatFirstMessage,
//                                         formatTime: props.formatTime,
//                                         dmServerId: props.dmServerId,
//                                         dmMessageAuthor: props.dmMessageAuthor

//                                     });
//                                     props.setRenderDeleteDM(true);

//                                 }}>
//                                 <svg className="trash-message-icon" aria-hidden="true" role="img" width="24" height="24" viewBox="0 0 24 24">
//                                     <path fill="currentColor" d="M15 3.999V2H9V3.999H3V5.999H21V3.999H15Z">
//                                     </path>
//                                     <path fill="currentColor" d="M5 6.99902V18.999C5 20.101 5.897 20.999 7 20.999H17C18.103 20.999
//                                         19 20.101 19 18.999V6.99902H5ZM11 17H9V11H11V17ZM15 17H13V11H15V17Z">
//                                     </path>
//                                 </svg>

//                             </div>
//                         </div>
//                     ) : ("")
//                 } */}

//             </div>
//         </li>

//     )


// }
// export default DMMessageEdit;