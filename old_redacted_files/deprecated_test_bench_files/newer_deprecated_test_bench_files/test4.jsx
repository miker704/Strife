// import React from "react";
// import user_Default_PFP from '../../../app/assets/images/discord_PFP.svg';
// import GroupChatIcon from '../../../app/assets/images/groupChatIcon.svg';
// import { useState, useEffect, useRef } from "react";
// // import ReactTooltip from "react-tooltip";
// import { Tooltip } from "react-tooltip";
// import { AddReactionIcon, AddSuperReactionIcon, ChainLinkIcon, CopyIDIcon, MarkUnReadIcon, OverFlowEllipsisIcon, PenEditIcon, PinnedIcon, ReplyArrowIcon, StrifeNitroBadgeIcon, ThreadsIcon, TrashCanIcon } from "../front_end_svgs/Strife_svgs";
// import { styled } from "@mui/material/styles";
// import { useHover } from "@uidotdev/usehooks";

// const TestPage4 = (props) => {
//     const [visible, setVisible] = useState(false);
//     const [reveal, setReveal] = useState(false);
//     const [keyCd, setKeyCD] = useState("");
//     const expandRef = useRef(null);
//     const [enableGrowth, setEnableGrowth] = useState(false);
//     const [_SHIFT, setSHIFT] = useState(false);

//     return (

//         <div>
//             <div className="chat-room-first-message-container">
//                 <div className="chat-room-avatar-wrapper" role="img">
//                     <svg width="80" height="80" viewBox="0 0 80 80" className="chat-room-avatar-svg-wrapper" aria-hidden="true">
//                         <foreignObject x="0" y="0" width="80" height="80" mask="url(#svg-mask-avatar-default)">
//                             <div className="chat-room-avatar-image-stack">
//                                 <img alt=" " className="chat-room-avatar-image icon-colors-9" aria-hidden="true" />
//                             </div>
//                         </foreignObject>
//                     </svg>
//                 </div>
//                 <h3 className="chat-room-header-first-msg">DemoUser1</h3>
//                 <div className="chat-room-header-first-msg-inner-content">
//                     <h3 className="chat-room-header-first-msg-inner-content-header">DemoUser1#4121</h3>
//                     This is the beginning of your direct message history with {`${` `}`}
//                     <strong>DemoUser1</strong>{`${` `}`}
//                     .
//                     <div className="chat-room-o2o-dm-relationship-action-container">
//                         <div className="chat-room-o2o-mutual-servers-container">
//                             <svg width="24" height="24" className="svg-lIB-lq avatarMask-A65G5R" viewBox="0 0 24 24">
//                                 <foreignObject x="0" y="0" width="24" height="24" overflow="visible" mask="url(#svg-mask-voice-user-summary-item)">
//                                     <img src="https://cdn.discordapp.com/icons/1125243217185607711/6a0c0d53543b86be28045cb8e266cbb0.webp?size=40" alt="" className="chat-room-mutual-servers-avatar" />
//                                 </foreignObject>
//                             </svg>
//                         </div>
//                         <div role="button" tabIndex={0}>
//                             <div className="chat-room-o2o-mutual-servers-text">10 Mutual Servers</div>
//                         </div>
//                         <div className="chat-room-o2o-divider"></div>

//                         <button type="button" className="chat-room-o2o-action-button gray">
//                             <div className="look-filled-button-contents global-button-contents">Remove Friend</div>
//                         </button>
//                         <button type="button" className="chat-room-o2o-action-button blue">
//                             <div className="look-filled-button-contents global-button-contents">Add Friend</div>
//                         </button>
//                         <button type="button" className="chat-room-o2o-action-button blue disabled" disabled>
//                             <div className="look-filled-button-contents global-button-contents">Friend Request Sent</div>
//                         </button>
//                         <button type="button" className="chat-room-o2o-action-button gray">
//                             <div className="look-filled-button-contents global-button-contents">Block</div>
//                         </button>

//                         <div className="chat-room-o2o-action-text">Sent You a friend request.</div>

//                         <button type="button" className="chat-room-o2o-action-button blue">
//                             <div className="look-filled-button-contents global-button-contents">Accept</div>
//                         </button>

//                         <button type="button" className="chat-room-o2o-action-button gray">
//                             <div className="look-filled-button-contents global-button-contents">Ignore</div>
//                         </button>
//                         <button type="button" className="chat-room-o2o-action-button gray">
//                             <div className="look-filled-button-contents global-button-contents">Block</div>
//                         </button>

//                         <button type="button" className="chat-room-o2o-action-button red">
//                             <div className="look-filled-button-contents global-button-contents">Report Spam</div>
//                         </button>
//                     </div>
//                 </div>
//             </div>


//             <div className="chat-room-first-message-container">
//                 <div className="chat-room-avatar-wrapper" role="img">
//                     <svg width="80" height="80" viewBox="0 0 80 80" className="chat-room-avatar-svg-wrapper" aria-hidden="true">
//                         <foreignObject x="0" y="0" width="80" height="80" mask="url(#svg-mask-avatar-default)">
//                             <div className="chat-room-avatar-image-stack">
//                                 <img alt=" " className="chat-room-avatar-image group-chat-icon-color-9" src={GroupChatIcon} aria-hidden="true" />
//                             </div>
//                         </foreignObject>
//                     </svg>
//                 </div>
//                 <h3 className="chat-room-header-first-msg">GroupChat</h3>
//                 <div className="chat-room-header-first-msg-inner-content">
//                     Welcome to the beginning of the {`${` `}`}
//                     <strong>DemoUser1</strong>{`${` `}`} group.
//                 </div>
//             </div>
//             <div className="chat-room-dm-gc-sroller-spacer"></div>


//             <div className="chat-room-first-message-container">
//                 <div className="welcomeTextChannelMessage-icon"></div>
//                 <h3 className="chat-room-header-first-msg">Welcome to #General Channel</h3>
//                 <div className="chat-room-text-channel-button-container">
//                     <button type="button" className="chat-room-text-channel-edit-button-container">
//                         <div className="global-button-contents">
//                             <div className="chat-room-text-channel-edit-button-icon-container ">
//                                 <div className="chat-room-text-channel-edit-button-icon">
//                                     <PenEditIcon width={16} height={16} />
//                                 </div>
//                                 <div className="chat-room-text-channel-edit-button-inner-text">
//                                     Edit Channel
//                                 </div>
//                             </div>
//                         </div>
//                     </button>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default TestPage4;

