// import React from "react";
// import { useEffect, useState, useRef } from "react";
// import ReactTooltip from "react-tooltip";
// // import autosize from "autosize";
// import user_Default_PFP from '../../../../app/assets/images/discord_PFP.svg';
// import DefaultPFPSVG from "../../../../app/assets/images/defaultPFPSVG.svg";
// import { closeOnEsc, closeHookModalOnOutsideClick } from "../../../utils/close_hook_modals_api_utils";

// const DMMessageEdit = ({

//     currentUserId,
//     currentUser,
//     dmMessage,
//     dmMembers,
//     renderGroupChatFirstMessage,
//     oneToOneChatFirstMessage,
//     formatTime,
//     dmServerId,
//     updateDmMessage,
//     deleteDmMessage,
//     openModal,
//     openModalWithProps,
//     strifeBot,
//     dmMessageAuthor,



// }) => {

//     const [showDmEdit, setShowDmEdit] = useState(false);
//     const [value, setValue] = useState(dmMessage.body);
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
//             setValue(dmMessage.body);
//             openModalWithProps({
//                 currentUserId: currentUserId,
//                 currentUser: currentUser,
//                 dmMessage: dmMessage,
//                 renderGroupChatFirstMessage: renderGroupChatFirstMessage,
//                 oneToOneChatFirstMessage: oneToOneChatFirstMessage,
//                 formatTime: formatTime,
//                 dmServerId: dmServerId,
//                 dmMessageAuthor: dmMessageAuthor

//             });
//             openModal('DeleteDmMessage');
//         }

//         else if (value !== dmMessage.body) {

//             let editedDmMessage = {
//                 id: dmMessage.id,
//                 body: value,
//                 dm_server_id: parseInt(dmServerId),
//                 sender_id: currentUserId
//             }

//             updateDmMessage(editedDmMessage);
//         }
//         setShowDmEdit(false);
//     };

//     const closeEdit = (bool) => {
//         setShowDmEdit(bool);
//         setValue(dmMessage.body);
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
//                 placeholder={`${dmMessage.body}`}
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
//         if (currentUserId === dmMessage.sender_id) {
//             return (
//                 <>
//                     {showDmEdit ? editInput : dmMessage.body}
//                 </>
//             )
//         }
//         else {
//             return (
//                 <>
//                     {dmMessage.body}
//                 </>
//             )
//         }
//     }




//     const render_User_PFP = user_Default_PFP;
//     let rendered_Default_PFP = DefaultPFPSVG;

//     const botMessage = dmMessage.sender_id === 1 &&
//         dmMessage.body === 'This is the beginning of your direct message history with' ?
//         oneToOneChatFirstMessage() : dmMessage.sender_id === 1 &&
//             dmMessage.body === 'Welcome to the beginning of your Group Chat' ?
//             renderGroupChatFirstMessage() : ('');
//     let dmMessageAuthorName = dmMessage.sender_id !== dmMessageAuthor.id ? dmMessage.authorName : dmMessageAuthor.username;

//     return (

//         <li className={`chat-message-item ${showDmEdit === true ? `selected` : ``}`} key={dmMessage.id} ref={popUpRef}>

//             <div className="message-wrapper1" id={`dmMessage-id-${dmMessage.id}`}>
//                 <div className="message-wrapper-contents">

//                     {/* {
//                         dmMessageAuthor.photo === undefined ? (
//                             <img className={`chat-member-avatar-img color-${dmMessageAuthor.color_tag}`} src={rendered_Default_PFP} alt=" " />
//                         ) : (
//                             <img className="chat-member-avatar-img" src={dmMessageAuthor.photo} alt=" " />
//                         )
//                     } */}
                    
//                     <div className={`${dmMessageAuthor.photo === undefined ?
//                         `chat-user-pfp-svg-render color-${dmMessageAuthor.color_tag}` :
//                         `chat-member-avatar-img`}`}>
//                         <img src={`${dmMessageAuthor.photo === undefined
//                             ? render_User_PFP : dmMessageAuthor.photo}`} alt=" " />
//                     </div>
//                     <h3 className="chat-member-username-header">
//                         <span className="chat-member-username-wrap">
//                             <span className="chat-member-username">{dmMessageAuthorName}</span>
//                         </span>
//                         <span className="chat-message-timestamp">
//                             <time dateTime={`${dmMessage.created_at}`}>
//                                 <i className="chat-message-timestamp-i"> — </i>
//                                 {formatTime(dmMessage.created_at)}
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
//                     currentUserId === dmMessage.sender_id ? (
//                         <div className={`message-accessories-button-wrapper`}>
//                             <div className="message-accessories-button" data-tip data-for="edit-message" onClick={() => openEdit()}>
//                                 <svg className="pen-icon" aria-hidden="true" role="img" width="16" height="16" viewBox="0 0 24 24">
//                                     <path fillRule="evenodd" clipRule="evenodd" d="M19.2929 9.8299L19.9409 9.18278C21.353 7.77064 
//                                  21.353 5.47197 19.9409 4.05892C18.5287 2.64678 16.2292 2.64678 14.817 4.05892L14.1699 4.70694L19.2929 
//                                  9.8299ZM12.8962 5.97688L5.18469 13.6906L10.3085 18.813L18.0201 11.0992L12.8962 5.97688ZM4.11851 
//                                  20.9704L8.75906 19.8112L4.18692 15.239L3.02678 19.8796C2.95028 20.1856 3.04028 20.5105 3.26349 
//                                  20.7337C3.48669 20.9569 3.8116 21.046 4.11851 20.9704Z" fill="currentColor">
//                                     </path>
//                                 </svg>

//                             </div>
//                             <div className="message-accessories-button" data-tip data-for="delete-message"
//                                 onClick={() => {
//                                     openModalWithProps({
//                                         currentUserId: currentUserId,
//                                         currentUser: currentUser,
//                                         dmMessage: dmMessage,
//                                         renderGroupChatFirstMessage: renderGroupChatFirstMessage,
//                                         oneToOneChatFirstMessage: oneToOneChatFirstMessage,
//                                         formatTime: formatTime,
//                                         dmServerId: dmServerId,
//                                         dmMessageAuthor: dmMessageAuthor

//                                     });
//                                     openModal('DeleteDmMessage');

//                                 }}>
//                                 <svg className="trash-message-icon" aria-hidden="true" role="img" width="24" height="24" viewBox="0 0 24 24">
//                                     <path fill="currentColor" d="M15 3.999V2H9V3.999H3V5.999H21V3.999H15Z">
//                                     </path>
//                                     <path fill="currentColor" d="M5 6.99902V18.999C5 20.101 5.897 20.999 7 20.999H17C18.103 20.999
//                                 19 20.101 19 18.999V6.99902H5ZM11 17H9V11H11V17ZM15 17H13V11H15V17Z">
//                                     </path>
//                                 </svg>

//                             </div>
//                         </div>
//                     ) : ("")
//                 }

//             </div>
//             <ReactTooltip
//                 className="thread-tool-tip"
//                 textColor="#B9BBBE"
//                 backgroundColor="#191919"
//                 id="edit-message"
//                 place="top"
//                 effect="solid">
//                 Edit
//             </ReactTooltip>

//             <ReactTooltip
//                 className="thread-tool-tip"
//                 textColor="#B9BBBE"
//                 backgroundColor="#191919"
//                 id="delete-message"
//                 place="top"
//                 effect="solid">
//                 Delete
//             </ReactTooltip>
//         </li>

//     )


// }
// export default DMMessageEdit;