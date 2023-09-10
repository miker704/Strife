// import React from "react";
// import { useEffect, useRef } from "react";
// import REACT_PORTAL from "../../../utils/ReactPortal_api_util";

// const DeleteDmMessageModal = (props) => {
//     const popupRef = useRef();

//     useEffect(() => {
//         window.addEventListener('keyup', handleESC, false);
//         return function cleanUp () {
//             window.removeEventListener('keyup', handleESC, false);
//         }
//     }, [])


//     const handleESC = (e) => {

//         const keys = {
//             27: () => {
//                 e.preventDefault();
//                 handleModalClose(e);
//                 window.removeEventListener('keyup', handleESC, false);

//             },
//         };
//         if (keys[e.keyCode]) {
//             keys[e.keyCode]();
//         }
//     }

//     const handleModalClose = (e) => {
//         e.preventDefault();
//         let modalToClose = document.getElementById("delete-message-modal");
//         if (modalToClose) {
//             modalToClose.classList.add("transition-out");
//             Promise.all(modalToClose.getAnimations().map((animation) => animation.finished),)
//                 .then(() => {
//                     props.setRenderDeleteDM(false);
//                     window.removeEventListener('keyup', handleESC, false);
//                 }, () => {
//                     props.setRenderDeleteDM(false);
//                     window.removeEventListener('keyup', handleESC, false);
//                 });
//         }
//         else {
//             props.setRenderDeleteDM(false);
//             window.removeEventListener('keyup', handleESC, false);
//         }
//     }


//     const handleDelete = (e) => {
//         e.preventDefault();
//         if (props.currentUserId === props.dmMessage.sender_id) {
//             props.deleteDmMessage(props.dmMessage.id);
//         }
//         handleModalClose(e);
//     }

//     const botMessage = props.dmMessage.sender_id === 1 &&
//         props.dmMessage.body === 'This is the beginning of your direct message history with' ?
//         props.oneToOneChatFirstMessage() : props.dmMessage.sender_id === 1 &&
//             props.dmMessage.body === 'Welcome to the beginning of your Group Chat' ?
//             props.renderGroupChatFirstMessage() : ('');


//     let deleteMessageButton = props.currentUserId === props.dmMessage.sender_id ? (
//         <button type="submit" onClick={(e) => handleDelete(e)} className="delete-server-msg-submit-button">
//             <div className="delete-server-msg-button-contents">Delete</div>
//         </button>

//     ) : (
//         <div className="fake-delete-message-submit-button">
//             <div className="delete-server-msg-button-contents">Delete</div>
//         </div>
//     );


//     return (
//         <REACT_PORTAL wrapperId={'sub-modal'} classNameId={'subModal'} onClick={(e) => e.stopPropagation()}>
//             <div className="delete-message-modal-layer" onClick={(e) => handleModalClose(e)}>
//                 <div className="delete-message-modal-backdrop"></div>
//                 <div className="delete-message-modal-inner-layer">
//                     <div className="delete-message-modal-focus-lock" onClick={(e) => e.stopPropagation()} ref={popupRef}>
//                         <div id="delete-message-modal" className="delete-message-modal-root">
//                             <div className="delete-message-modal-inner-flex">
//                                 <h2 className="delete-msg-h2">Delete Message</h2>
//                             </div>
//                             <div className="delete-this-message-wrapper global-scroller-base global-scroll-thin-raw-attributes" style={{ overflow: "hidden scroll", paddingRight: `8px` }}>
//                                 <div className="dtm-subtext">Are you sure you want to delete this message?</div>
//                                 <div className="delete-this-message-container">
//                                     <div className="delete-msg-box">

//                                         <div className="deleted-message-container">
//                                             <div className="deleted-message-inners">
//                                                 {
//                                                     props.dmMessageAuthor.photo === undefined ? (
//                                                         <img className={`delete-message-member-avatar-img icon-colors-${props.dmMessageAuthor.color_tag}`} alt=" " />
//                                                     ) : (
//                                                         <img className={"delete-message-member-avatar-img"} src={props.dmMessageAuthor.photo} alt=" " />
//                                                     )
//                                                 }

//                                                 <h2 className="deleted-message-owner">
//                                                     <span className="deleted-message-username-wrapper">
//                                                         <div className="deleted-message-username">
//                                                             {props.dmMessage.authorName}
//                                                         </div>
//                                                     </span>
//                                                     <span className="deleted-message-time-stamp">
//                                                         <time dateTime={props.dmMessage.created_at}>
//                                                             <i className="deleted-msg-i-tag-sep">{` `}—{` `}</i>
//                                                             {props.formatTime(props.dmMessage.created_at)}
//                                                         </time>
//                                                     </span>
//                                                 </h2>
//                                                 <div className="deleted-message-content">
//                                                     {props.dmMessage.body}
//                                                     {botMessage}
//                                                 </div>
//                                             </div>
//                                             <div className="deleted-message-content-accessories"></div>
//                                         </div>
//                                     </div>
//                                 </div>

//                                 <div className="deleted-message-pro-tips-container">
//                                     <div className="deleted-message-pro-tips-header">
//                                         PROTIP:
//                                     </div>
//                                     <div className="deleted-message-pro-tips-subtext">
//                                         You can hold down shift when clicking{`${" "}`}
//                                         <strong>delete message</strong>{`${" "}`}
//                                         to bypass this confirmation entirely.
//                                     </div>
//                                 </div>
//                                 <div className="delete-server-msg-sep"></div>
//                             </div>
//                             <div className="delete-server-button-sec">
//                                 {deleteMessageButton}
//                                 <button type="button" onClick={(e) => handleModalClose(e)} className="delete-server-msg-cancel-button">
//                                     <div className="delete-server-msg-button-contents">Cancel</div>
//                                 </button>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </REACT_PORTAL >

//     )

// }

// export default DeleteDmMessageModal;

