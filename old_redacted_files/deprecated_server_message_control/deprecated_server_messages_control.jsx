// import React from "react";
// import { AddReactionIcon, AddSuperReactionIcon, ChainLinkIcon, CopyIDIcon, OverFlowEllipsisIcon, PenEditIcon, PinnedIcon, ReplyArrowIcon, MarkUnReadIcon, ThreadsIcon, TrashCanIcon, StrifeNitroBadgeIcon } from "../../front_end_svgs/Strife_svgs";
// const ServerMessageControl = (props) => {

//     return (
//         <React.Fragment>
//             {
//                 props.currentUserId === props.message.author_id ?
//                     (
//                         <>
//                             <div className="message-accessories"></div>
//                             <div className="message-accessories-button-container" style={{ display: `${props.showMsgEdit ? `none` : `grid`}` }}>
//                                 <div className="message-accessories-button-layer">
//                                     <div className={`message-accessories-button-wrapper1`} >

//                                         {
//                                             props._SHIFT ? (
//                                                 <div className="message-accessories-button" data-tooltip-id="thread-tip" data-tooltip-place="top" data-tooltip-content="Copy Message ID">
//                                                     <CopyIDIcon className="copy-msg-id-icon" width={24} height={24} />
//                                                 </div>
//                                             ) : ("")

//                                         }
//                                         {
//                                             props._SHIFT ? (
//                                                 <div className="message-accessories-button" data-tooltip-id="thread-tip" data-tooltip-place="top" data-tooltip-content="Copy Link">
//                                                     <ChainLinkIcon className="copy-msg-link-icon" width={24} height={24} />
//                                                 </div>
//                                             ) : ("")

//                                         }

//                                         {
//                                             props._SHIFT ? (
//                                                 <div className="message-accessories-button" data-tooltip-id="thread-tip" data-tooltip-place="top" data-tooltip-content="Mark Unread">
//                                                     <MarkUnReadIcon className="mark-msg-unread-icon" width={24} height={24} />
//                                                 </div>
//                                             ) : ("")

//                                         }

//                                         {
//                                             props._SHIFT ? (
//                                                 <div className="message-accessories-button" data-tooltip-id="thread-tip" data-tooltip-place="top" data-tooltip-content={'Pin Message'}>
//                                                     <PinnedIcon className="pinned-msg-icon" width={24} height={24} />
//                                                 </div>

//                                             ) : ("")

//                                         }

//                                         {
//                                             props._SHIFT ? (
//                                                 <div className="message-accessories-button" data-tooltip-id="thread-tip" data-tooltip-place="top" data-tooltip-content="Reply">
//                                                     <ReplyArrowIcon className="reply-to-msg-icon" width={24} height={24} />
//                                                 </div>

//                                             ) : ("")

//                                         }


//                                         <div className="message-accessories-button" data-tooltip-id="thread-tip" data-tooltip-place="top" data-tooltip-content="Add Reaction">
//                                             <AddReactionIcon className="add-reaction-icon" width={18} height={18} />
//                                         </div>

//                                         <div className="message-accessories-button" data-tooltip-id="thread-tip-super-reaction" data-tooltip-place="top" data-tooltip-content="Add Super Reaction">
//                                             <AddSuperReactionIcon className="add-super-reaction-icon" width={18} height={18} />
//                                         </div>

//                                         <div className="message-accessories-button" data-tooltip-id="thread-tip" data-tooltip-place="top" data-tooltip-content="Edit" onClick={() => props.openEdit()}>
//                                             <PenEditIcon className="pen-icon" width={16} height={16} />
//                                         </div>

//                                         <div className="message-accessories-button" data-tooltip-id="thread-tip" data-tooltip-place="top" data-tooltip-content="Create Thread">
//                                             <ThreadsIcon className="edit-msg-create-thread-icon" width={24} height={24} />
//                                         </div>

//                                         <div className="message-accessories-button" data-tooltip-id="thread-tip" data-tooltip-place="top" data-tooltip-content="Delete"
//                                             onClick={() => {
//                                                 props.openModalWithProps({
//                                                     currentUserId: props.currentUserId,
//                                                     message: props.message,
//                                                     formatTime: props.formatTime,
//                                                     serverId: props.serverId,
//                                                     channelId: props.channelId,
//                                                     messageAuthor: props.messageAuthor,
//                                                     // shiftKeyPress: _SHIFT
//                                                 });
//                                                 props.setRenderDeleteChannelMessage(true);
//                                             }}>
//                                             <TrashCanIcon className="delete-msg-icon danger-warning-del-msg" width={24} height={24} />
//                                         </div>

//                                         {
//                                             !props._SHIFT ? (
//                                                 <div className="message-accessories-button" data-tooltip-id="thread-tip" data-tooltip-place="top" data-tooltip-content="More (Hold Shift)">
//                                                     <OverFlowEllipsisIcon className="edit-msg-more-options-icon" width={24} height={24} />
//                                                 </div>
//                                             ) : ("")

//                                         }
//                                     </div>
//                                 </div>
//                             </div>
//                         </>
//                     )
//                     : (
//                         <>
//                             <div className="message-accessories"></div>
//                             <div className="message-accessories-button-container">
//                                 <div className="message-accessories-button-layer">
//                                     <div className={`message-accessories-button-wrapper1`} >
//                                         {
//                                             props._SHIFT ? (
//                                                 <div className="message-accessories-button" data-tooltip-id="thread-tip" data-tooltip-place="top" data-tooltip-content="Copy Message ID">
//                                                     <CopyIDIcon className="copy-msg-id-icon" width={24} height={24} />
//                                                 </div>
//                                             ) : ("")

//                                         }
//                                         {
//                                             props._SHIFT ? (
//                                                 <div className="message-accessories-button" data-tooltip-id="thread-tip" data-tooltip-place="top" data-tooltip-content="Copy Link">
//                                                     <ChainLinkIcon className="copy-msg-link-icon" width={24} height={24} />
//                                                 </div>
//                                             ) : ("")

//                                         }

//                                         {
//                                             props._SHIFT ? (
//                                                 <div className="message-accessories-button" data-tooltip-id="thread-tip" data-tooltip-place="top" data-tooltip-content="Mark Unread">
//                                                     <MarkUnReadIcon className="mark-msg-unread-icon" width={24} height={24} />
//                                                 </div>
//                                             ) : ("")

//                                         }

//                                         {
//                                             props._SHIFT ? (
//                                                 <div className="message-accessories-button" data-tooltip-id="thread-tip" data-tooltip-place="top" data-tooltip-content={'Pin Message'}>
//                                                     <PinnedIcon className="pinned-msg-icon" width={24} height={24} />
//                                                 </div>

//                                             ) : ("")

//                                         }

//                                         <div className="message-accessories-button" data-tooltip-id="thread-tip" data-tooltip-place="top" data-tooltip-content="Add Reaction">
//                                             <AddReactionIcon className="add-reaction-icon" width={18} height={18} />
//                                         </div>

//                                         <div className="message-accessories-button" data-tooltip-id="thread-tip-super-reaction" data-tooltip-place="top" data-tooltip-content="Add Super Reaction">
//                                             <AddSuperReactionIcon className="add-super-reaction-icon" width={18} height={18} />
//                                         </div>

//                                         <div className="message-accessories-button" data-tooltip-id="thread-tip" data-tooltip-place="top" data-tooltip-content="Reply">
//                                             <ReplyArrowIcon className="reply-to-msg-icon" width={24} height={24} />
//                                         </div>

//                                         <div className="message-accessories-button" data-tooltip-id="thread-tip" data-tooltip-place="top" data-tooltip-content="More (Hold Shift)">
//                                             <OverFlowEllipsisIcon className="edit-msg-more-options-icon" width={24} height={24} />
//                                         </div>

//                                     </div>
//                                 </div>
//                             </div>
//                         </>
//                     )
//             }

//         </React.Fragment>
//     )



//     // return (
//     //     <>
//     //         {
//     //             props.currentUserId === props.message.author_id ?
//     //                 (
//     //                     <>

//     //                         <div className="message-accessories"></div>
//     //                         <div className="message-accessories-button-container">
//     //                             <div className="message-accessories-button-layer">
//     //                                 <div className={`message-accessories-button-wrapper1`} >

//     //                                     <div className="message-accessories-button" data-tooltip-id="thread-tip" data-tooltip-place="top" data-tooltip-content="Copy Message ID">
//     //                                         <CopyIDIcon className="copy-msg-id-icon" width={24} height={24} />
//     //                                     </div>

//     //                                     <div className="message-accessories-button" data-tooltip-id="thread-tip" data-tooltip-place="top" data-tooltip-content="Copy Link">
//     //                                         <ChainLinkIcon className="copy-msg-link-icon" width={24} height={24} />
//     //                                     </div>

//     //                                     <div className="message-accessories-button" data-tooltip-id="thread-tip" data-tooltip-place="top" data-tooltip-content="Mark Unread">
//     //                                         <MarkUnReadIcon className="mark-msg-unread-icon" width={24} height={24} />
//     //                                     </div>
//     //                                     <div className="message-accessories-button" data-tooltip-id="thread-tip" data-tooltip-place="top" data-tooltip-content={'Pin Message'}>
//     //                                         <PinnedIcon className="pinned-msg-icon" width={24} height={24} />
//     //                                     </div>

//     //                                     <div className="message-accessories-button" data-tooltip-id="thread-tip" data-tooltip-place="top" data-tooltip-content="Reply">
//     //                                         <ReplyArrowIcon className="reply-to-msg-icon" width={24} height={24} />
//     //                                     </div>

//     //                                     <div className="message-accessories-button" data-tooltip-id="thread-tip" data-tooltip-place="top" data-tooltip-content="Add Reaction">
//     //                                         <AddReactionIcon className="add-reaction-icon" width={18} height={18} />
//     //                                     </div>

//     //                                     <div className="message-accessories-button" data-tooltip-id="thread-tip-super-reaction" data-tooltip-place="top" data-tooltip-content="Add Super Reaction">
//     //                                         <AddSuperReactionIcon className="add-super-reaction-icon" width={18} height={18} />
//     //                                     </div>

//     //                                     <div className="message-accessories-button" data-tooltip-id="thread-tip" data-tooltip-place="top" data-tooltip-content="Edit" onClick={() => props.openEdit()}>
//     //                                         <PenEditIcon className="pen-icon" width={16} height={16} />
//     //                                     </div>

//     //                                     <div className="message-accessories-button" data-tooltip-id="thread-tip" data-tooltip-place="top" data-tooltip-content="Create Thread">
//     //                                         <ThreadsIcon className="edit-msg-create-thread-icon" width={24} height={24} />
//     //                                     </div>

//     //                                     <div className="message-accessories-button" data-tooltip-id="thread-tip" data-tooltip-place="top" data-tooltip-content="Delete"
//     //                                         onClick={() => {
//     //                                             props.openModalWithProps({
//     //                                                 currentUserId: props.currentUserId,
//     //                                                 message: props.message,
//     //                                                 formatTime: props.formatTime,
//     //                                                 serverId: props.serverId,
//     //                                                 channelId: props.channelId,
//     //                                                 messageAuthor: props.messageAuthor,
//     //                                                 // shiftKeyPress: _SHIFT
//     //                                             });
//     //                                             props.setRenderDeleteChannelMessage(true);
//     //                                         }}>
//     //                                         <TrashCanIcon className="delete-msg-icon danger-warning-del-msg" width={24} height={24} />
//     //                                     </div>

//     //                                     <div className="message-accessories-button" data-tooltip-id="thread-tip" data-tooltip-place="top" data-tooltip-content="More">
//     //                                         <OverFlowEllipsisIcon className="edit-msg-more-options-icon" width={24} height={24} />
//     //                                     </div>
//     //                                 </div>
//     //                             </div>
//     //                         </div>
//     //                     </>
//     //                 )
//     //                 : (
//     //                     <>
//     //                         <div className="message-accessories"></div>
//     //                         <div className="message-accessories-button-container">
//     //                             <div className="message-accessories-button-layer">
//     //                                 <div className={`message-accessories-button-wrapper1`} >

//     //                                     <div className="message-accessories-button" data-tooltip-id="thread-tip" data-tooltip-place="top" data-tooltip-content="Copy Message ID">
//     //                                         <CopyIDIcon className="copy-msg-id-icon" width={24} height={24} />
//     //                                     </div>

//     //                                     <div className="message-accessories-button" data-tooltip-id="thread-tip" data-tooltip-place="top" data-tooltip-content="Copy Link">
//     //                                         <ChainLinkIcon className="copy-msg-link-icon" width={24} height={24} />
//     //                                     </div>

//     //                                     <div className="message-accessories-button" data-tooltip-id="thread-tip" data-tooltip-place="top" data-tooltip-content="Mark Unread">
//     //                                         <MarkUnReadIcon className="mark-msg-unread-icon" width={24} height={24} />
//     //                                     </div>
//     //                                     <div className="message-accessories-button" data-tooltip-id="thread-tip" data-tooltip-place="top" data-tooltip-content={'Pin Message'}>
//     //                                         <PinnedIcon className="pinned-msg-icon" width={24} height={24} />
//     //                                     </div>

//     //                                     <div className="message-accessories-button" data-tooltip-id="thread-tip" data-tooltip-place="top" data-tooltip-content="Add Reaction">
//     //                                         <AddReactionIcon className="add-reaction-icon" width={18} height={18} />
//     //                                     </div>

//     //                                     <div className="message-accessories-button" data-tooltip-id="thread-tip-super-reaction" data-tooltip-place="top" data-tooltip-content="Add Super Reaction">
//     //                                         <AddSuperReactionIcon className="add-super-reaction-icon" width={18} height={18} />
//     //                                     </div>

//     //                                     <div className="message-accessories-button" data-tooltip-id="thread-tip" data-tooltip-place="top" data-tooltip-content="Reply">
//     //                                         <ReplyArrowIcon className="reply-to-msg-icon" width={24} height={24} />
//     //                                     </div>

//     //                                     <div className="message-accessories-button" data-tooltip-id="thread-tip" data-tooltip-place="top" data-tooltip-content="More">
//     //                                         <OverFlowEllipsisIcon className="edit-msg-more-options-icon" width={24} height={24} />
//     //                                     </div>

//     //                                 </div>
//     //                             </div>
//     //                         </div>
//     //                     </>
//     //                 )
//     //         }
//     //     </>
//     // )

// }
// export default ServerMessageControl;