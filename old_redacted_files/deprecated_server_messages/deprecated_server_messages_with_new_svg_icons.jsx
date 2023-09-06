// import React from "react";
// import { useEffect, useState, useRef } from "react";
// import { closeOnEsc, closeHookModalOnOutsideClick } from "../../../utils/close_hook_modals_api_utils";
// import DefaultPFPSVG3 from "../../../../app/assets/images/defaultPFPSVG3.svg";
// import { AddReactionIcon, AddSuperReactionIcon, ChainLinkIcon, CopyIDIcon, OverFlowEllipsisIcon, PenEditIcon, PinnedIcon, ReplyArrowIcon, MarkUnReadIcon, ThreadsIcon, TrashCanIcon, StrifeNitroBadgeIcon } from "../../front_end_svgs/Strife_svgs";
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
//             // buttonRef.current.blur();
//             editMsgRef.current.focus();
//         }
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
//                 autoFocus
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
//             onMouseOver={(e) => {
//                 // buttonRef.current.focus();
//                 // console.log(`mousing over element with id of ${props.message.id}`);
//                 // setEnableExpand(true);
//             }}
//             onMouseLeave={(e) => {
//                 // buttonRef.current.blur();
//                 // console.log("mouse leave enable");
//                 // setShift(false);
//                 // setEnableExpand(false);
//             }}
//         >

//             <div className="message-wrapper1"
//                 id={`message-id-${props.message.id}`}
//                 ref={buttonRef}
//                 tabIndex={0}
//             >
//                 <div className="message-wrapper-contents">

//                     {
//                         props.messageAuthor.photo === undefined ? (
//                             <img className={`chat-member-avatar-img color-${props.messageAuthor.color_tag}`} src={DefaultPFPSVG3} alt=" " />
//                             // <img className={`chat-member-avatar-img icon-colors-${props.messageAuthor.color_tag}`} alt=" " />
//                         ) : (
//                             <img className="chat-member-avatar-img" src={props.messageAuthor.photo} alt=" " />
//                         )
//                     }

//                     <h3 className="chat-member-username-header">
//                         <span className="chat-member-username-wrap">
//                             {/* <span className="chat-member-username">{props.message.authorName}</span> */}
//                             <span className="chat-member-username">{messageAuthorName}</span>
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


//                 {
//                     props.currentUserId === props.message.author_id ?
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
//                                                         message: props.message,
//                                                         formatTime: props.formatTime,
//                                                         serverId: props.serverId,
//                                                         channelId: props.channelId,
//                                                         messageAuthor: props.messageAuthor,
//                                                         shiftKeyPress: _SHIFT
//                                                     });
//                                                     props.setRenderDeleteChannelMessage(true);
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

//             </div>
//         </li>

//     )


// }
// export default ServerMessages;













//                 {/* <div className={`message-accessories-button-wrapper ${props.currentUserId === props.message.author_id ? `` : `is-hidden`}`}>


//                     <div className="message-accessories-button" data-tip data-for="copyMsgID">
//                         <svg className="copy-msg-id-icon" aria-hidden="true" role="img" width="24" height="24" viewBox="0 0 24 24">
//                             <path fill="currentColor" fillRule="evenodd" clipRule="evenodd" d="M3.37868 2.87868C3.94129 2.31607 4.70435 
//                                 2 5.5 2H19.5C20.2956 2 21.0587 2.31607 21.6213 2.87868C22.1839 3.44129 22.5 4.20435 22.5 5V19C22.5 19.7956 
//                                 22.1839 20.5587 21.6213 21.1213C21.0587 21.6839 20.2956 22 19.5 22H5.5C4.70435 22 3.94129 21.6839 3.37868 21.1213C2.81607 
//                                 20.5587 2.5 19.7956 2.5 19V5C2.5 4.20435 2.81607 3.44129 3.37868 2.87868ZM7.65332 16.3125H9.47832V7.6875H7.65332V16.3125ZM11.23 
//                                 7.6875V16.3125H14.2925C15.6008 16.3125 16.6091 15.9417 17.3175 15.2C18.0341 14.4583 18.3925 13.3917 18.3925 12C18.3925 10.6083 
//                                 18.0341 9.54167 17.3175 8.8C16.6091 8.05833 15.6008 7.6875 14.2925 7.6875H11.23ZM15.955 14.0625C15.5466 14.4625 14.9925 14.6625 
//                                 14.2925 14.6625H13.055V9.3375H14.2925C14.9925 9.3375 15.5466 9.5375 15.955 9.9375C16.3633 10.3375 16.5675 11.025 16.5675 12C16.5675
//                                  12.975 16.3633 13.6625 15.955 14.0625Z">
//                             </path>
//                         </svg>
//                     </div>

//                     <div className="message-accessories-button" data-tip data-for="copyMsgLink">
//                         <svg className="copy-msg-link-icon" aria-hidden="true" role="img" width="24" height="24" viewBox="0 0 24 24">
//                             <g fill="none" fillRule="evenodd">
//                                 <path fill="currentColor" d="M10.59 13.41c.41.39.41 1.03 0 1.42-.39.39-1.03.39-1.42 0a5.003 5.003 0 0 1 
//                                          0-7.07l3.54-3.54a5.003 5.003 0 0 1
//                                          7.07 0 5.003 5.003 0 0 1 0 7.07l-1.49 1.49c.01-.82-.12-1.64-.4-2.42l.47-.48a2.982 2.982 0 0 0 
//                                          0-4.24 2.982 2.982 0 0 0-4.24 0l-3.53 
//                                          3.53a2.982 2.982 0 0 0 0 4.24zm2.82-4.24c.39-.39 1.03-.39 1.42 0a5.003 5.003 0 0 1 0 7.07l-3.54 
//                                          3.54a5.003 5.003 0 0 1-7.07 0 5.003
//                                           5.003 0 0 1 0-7.07l1.49-1.49c-.01.82.12 1.64.4 2.43l-.47.47a2.982 2.982 0 0 0 0 4.24 2.982 2.982 
//                                           0 0 0 4.24 0l3.53-3.53a2.982 2.982 
//                                           0 0 0 0-4.24.973.973 0 0 1 0-1.42z">
//                                 </path>
//                                 <rect width="24" height="24">
//                                 </rect>
//                             </g>
//                         </svg>
//                     </div>

//                     <div className="message-accessories-button" data-tip data-for="msgMarkUnread">
//                         <svg className="mark-msg-unread-icon" aria-hidden="true" role="img" width="24" height="24" viewBox="0 0 24 24">
//                             <path fill="currentColor" d="M14 3H20C21 3 22.0001 4 22.0001 5V19.0003C22.0001 20 21 21 20 21H14C13 21 6 13 6 13H2V11H6C6 11 13 3 14 3Z">
//                             </path>
//                         </svg>
//                     </div>
//                     <div className="message-accessories-button" data-tip data-for="reply-msg">
//                         <svg className="reply-to-msg-icon" width="24" height="24" viewBox="0 0 24 24">
//                             <path d="M10 8.26667V4L3 11.4667L10 18.9333V14.56C15 14.56 18.5 16.2667 21 20C20 14.6667 17 9.33333 10 8.26667Z" fill="currentColor">
//                             </path>
//                         </svg>
//                     </div>


//                     <div className="message-accessories-button" data-tip data-for="add-reaction">
//                         <svg className="add-reaction-icon" aria-hidden="true" role="img" width="18" height="18" viewBox="0 0 24 24">
//                             <path fillRule="evenodd" clipRule="evenodd" d="M12.1151 2.00065C12.0768 2.00022 12.0384 2 12 2C6.477 2 2 6.477 
//                              2 12C2 17.522 6.477 22 12 22C17.523 22 22 17.522 22 12C22 11.9616 21.9998 11.9232 21.9993 11.8849C21.1882 12.1737
//                              20.3146 12.3309 19.4043 12.3309C15.1323 12.3309 11.6691 8.86771 11.6691 4.59565C11.6691 3.68536 11.8263 2.8118
//                              12.1151 2.00065ZM7.92105 11.8023C7.92105 12.7107 7.18468 13.4471 6.27631 13.4471C5.36795 13.4471 4.63158 12.7107
//                              4.63158 11.8023C4.63158 10.894 5.36795 10.1576 6.27631 10.1576C7.18467 10.1576 7.92105 10.894 7.92105 11.8023ZM10.5217
//                              14.5171C10.3859 13.9893 9.84786 13.6716 9.32005 13.8074C8.79223 13.9433 8.47448 14.4813 8.61033 15.0091C9.01196 
//                              16.5695 10.4273 17.7236 12.1147 17.7236C13.8021 17.7236 15.2174 16.5695 15.6191 15.0091C15.7549 14.4813 15.4372 
//                              13.9433 14.9093 13.8074C14.3815 13.6716 13.8435 13.9893 13.7077 14.5171C13.525 15.2267 12.8797 15.7499 12.1147 
//                              15.7499C11.3497 15.7499 10.7044 15.2267 10.5217 14.5171Z" fill="currentColor">
//                             </path>
//                             <path d="M18.5 2C17.9477 2 17.5 2.44772 17.5 3V4.5H16C15.4477 4.5 15 4.94771 15 5.5C15 6.05228 15.4477 6.5 16 6.5H17.5V8C17.5 
//                               8.55228 17.9477 9 18.5 9C19.0523 9 19.5 8.55229 19.5 8V6.5H21C21.5523 6.5 22 6.05229 22 5.5C22 4.94772 21.5523 4.5 21 4.5H19.5V3C19.5
//                               2.44772 19.0523 2 18.5 2Z" fill="currentColor">
//                             </path>
//                         </svg>
//                     </div>

//                     <div className="message-accessories-button" data-tip data-for="add-super-reaction">
//                         <svg className="add-super-reaction-icon" aria-hidden="true" role="img" width="18" height="18" viewBox="0 0 24 24">
//                             <path fillRule="evenodd" clipRule="evenodd" d="M20.3397 14.2379C21.2318 14.4731 22.1292 14.5474 23 14.4789C22.9906 14.5151 22.9809 
//                             14.5514 22.9711 14.5876C21.5194 19.9201 15.9496 23.086 10.5309 21.6569C10.3451 21.6079 10.1619 21.5542 9.98145 21.4958C7.94618 20.8378
//                              5.90941 20 3.77041 20H3.5C2.67157 20 2 19.3284 2 18.5C2 17.6716 2.67157 17 3.5 17C4.75918 17 3.9661 15.8584 3.47514 14.7655C3.28101 
//                              14.3334 2.86615 14 2.39244 14H1.5C0.671573 14 0 13.3284 0 12.5C0 11.6716 0.671573 11 1.5 11V11C2.38174 11 3.10559 10.3274 3.33171
//                               9.47516C3.33726 9.45427 3.34287 9.43338 3.34856 9.41249V9.41249C3.53406 8.7311 2.9812 8.0187 2.44976 7.55366C2.17543 7.31362 2 6.96872
//                                2 6.5C2 5.67157 2.67157 5 3.5 5V5C5.03983 5 6.4765 4.31861 7.78941 3.51404C10.0926 2.10261 12.9612 1.59744 15.7887 2.34316C15.827 2.35324
//                                 15.8651 2.36352 15.9031 2.374C15.4064 3.08271 15.0224 3.88574 14.7831 4.76493C13.6598 8.89108 16.1476 13.1323 20.3397 14.2379ZM9.26206
//                                  8.71607C8.70747 8.56981 8.13976 8.79579 7.83448 9.23964C7.62045 9.55083 7.19184 9.86027 6.69655 9.72964C6.24033 9.60932 5.88292 9.10507
//                                   6.13732 8.60064C6.78216 7.32202 8.27206 6.62396 9.72714 7.00771C11.1822 7.39146 12.1179 8.72923 12.0268 10.1539C11.9909 10.7159 11.4252
//                                    10.9767 10.969 10.8564C10.4737 10.7258 10.2597 10.2469 10.2324 9.87205C10.1935 9.33743 9.81666 8.86234 9.26206 8.71607ZM16.3671 
//                                    14.9268C16.17 14.5422 15.7892 14.2404 15.3308 14.1195L10.6411 12.8827C10.1826 12.7618 9.69947 12.8357 9.33352 13.0718C8.95878 
//                                    13.3135 8.70829 13.7284 8.7613 14.2422C8.93054 15.8827 10.1055 17.3278 11.821 17.7802C13.5365 18.2326 15.2881 17.5594 16.2681 
//                                    16.222C16.575 15.8031 16.5688 15.3205 16.3671 14.9268Z" fill="currentColor">
//                             </path>
//                             <path d="M20.5 4C19.9477 4 19.5 4.44772 19.5 5V6.5H18C17.4477 6.5 17 6.94771 17 7.5C17 8.05228 17.4477 8.5 18 8.5H19.5V10C19.5 
//                                     10.5523 19.9477 11 20.5 11C21.0523 11 21.5 10.5523 21.5 10V8.5H23C23.5523 8.5 24 8.05229 24 7.5C24 6.94772 23.5523 6.5 23 6.5H21.5V5C21.5
//                                     4.44772 21.0523 4 20.5 4Z" fill="currentColor">
//                             </path>
//                         </svg>
//                     </div>

//                     <div className="message-accessories-button" data-tip data-for="edit-message" onClick={() => openEdit()}>
//                         <svg className="pen-icon" aria-hidden="true" role="img" width="16" height="16" viewBox="0 0 24 24">
//                             <path fillRule="evenodd" clipRule="evenodd" d="M19.2929 9.8299L19.9409 9.18278C21.353 7.77064 21.353 5.47197 19.9409 
//                             4.05892C18.5287 2.64678 16.2292 2.64678 14.817 4.05892L14.1699 4.70694L19.2929 9.8299ZM12.8962 5.97688L5.18469 13.6906L10.3085
//                              18.813L18.0201 11.0992L12.8962 5.97688ZM4.11851 20.9704L8.75906 19.8112L4.18692 15.239L3.02678 19.8796C2.95028 20.1856 3.04028 
//                              20.5105 3.26349 20.7337C3.48669 20.9569 3.8116 21.046 4.11851 20.9704Z" fill="currentColor">
//                             </path>
//                         </svg>
//                     </div>



//                     <div className="message-accessories-button" data-tip data-for="edit-msg-create-thread">
//                         <svg className="edit-msg-create-thread-icon" aria-hidden="true" role="img" width="24" height="24" viewBox="0 0 24 24" fill="none">
//                             <path fill="currentColor" d="M5.43309 21C5.35842 21 5.30189 20.9325 5.31494 20.859L5.99991 17H2.14274C2.06819 17 2.01168 16.9327
//                              2.02453 16.8593L2.33253 15.0993C2.34258 15.0419 2.39244 15 2.45074 15H6.34991L7.40991 9H3.55274C3.47819 9 3.42168 8.93274 3.43453
//                               8.85931L3.74253 7.09931C3.75258 7.04189 3.80244 7 3.86074 7H7.75991L8.45234 3.09903C8.46251 3.04174 8.51231 3 8.57049 
//                               3H10.3267C10.4014 3 10.4579 3.06746 10.4449 3.14097L9.75991 7H15.7599L16.4523 3.09903C16.4625 3.04174 16.5123 3 16.5705 
//                               3H18.3267C18.4014 3 18.4579 3.06746 18.4449 3.14097L17.7599 7H21.6171C21.6916 7 21.7481 7.06725 21.7353 7.14069L21.4273 8.90069C21.4172 
//                               8.95811 21.3674 9 21.3091 9H17.4099L17.0495 11.04H15.05L15.4104 9H9.41035L8.35035 15H10.5599V17H7.99991L7.30749 20.901C7.29732 20.9583 
//                               7.24752 21 7.18934 21H5.43309Z">
//                             </path>
//                             <path fill="currentColor" d="M13.4399 12.96C12.9097 12.96 12.4799 13.3898 12.4799 13.92V20.2213C12.4799 20.7515 12.9097 21.1813
//                                  13.4399 21.1813H14.3999C14.5325 21.1813 14.6399 21.2887 14.6399 21.4213V23.4597C14.6399 23.6677 14.8865 23.7773 15.0408 23.6378L17.4858
//                                   21.4289C17.6622 21.2695 17.8916 21.1813 18.1294 21.1813H22.5599C23.0901 21.1813 23.5199 20.7515 23.5199 20.2213V13.92C23.5199 13.3898 
//                                   23.0901 12.96 22.5599 12.96H13.4399Z">
//                             </path>
//                         </svg>
//                     </div>
//                     <div className="message-accessories-button" data-tip data-for="edit-msg-more-options">
//                         <svg className="edit-msg-more-options-icon" aria-hidden="true" role="img" width="24" height="24" viewBox="0 0 24 24">
//                             <path fill="currentColor" fillRule="evenodd" clipRule="evenodd" d="M7 12.001C7 10.8964 6.10457 10.001 5 10.001C3.89543 
//                             10.001 3 10.8964 3 12.001C3 13.1055 3.89543 14.001 5 14.001C6.10457 14.001 7 13.1055 7 12.001ZM14 12.001C14 10.8964 
//                             13.1046 10.001 12 10.001C10.8954 10.001 10 10.8964 10 12.001C10 13.1055 10.8954 14.001 12 14.001C13.1046 14.001 14 
//                             13.1055 14 12.001ZM19 10.001C20.1046 10.001 21 10.8964 21 12.001C21 13.1055 20.1046 14.001 19 14.001C17.8954 14.001 
//                             17 13.1055 17 12.001C17 10.8964 17.8954 10.001 19 10.001Z">
//                             </path>
//                         </svg>
//                     </div>

//                     <div className="message-accessories-button" data-tip data-for="delete-message"
//                         onClick={() => {
//                             props.openModalWithProps({
//                                 currentUserId: props.currentUserId,
//                                 message: props.message,
//                                 formatTime: props.formatTime,
//                                 serverId: props.serverId,
//                                 channelId: props.channelId,
//                                 messageAuthor: props.messageAuthor

//                             });
//                             // props.setRenderDeleteChannelMessage(true);

//                         }}>
//                         <svg className="delete-msg-icon danger-warning-del-msg" aria-hidden="true" role="img" width="24" height="24" viewBox="0 0 24 24">
//                             <path fill="currentColor" d="M15 3.999V2H9V3.999H3V5.999H21V3.999H15Z">
//                             </path>
//                             <path fill="currentColor" d="M5 6.99902V18.999C5 20.101 5.897 20.999 7 20.999H17C18.103 20.999 19 20.101
//                                 19 18.999V6.99902H5ZM11 17H9V11H11V17ZM15 17H13V11H15V17Z">
//                             </path>
//                         </svg>
//                     </div>
//                 </div> */}