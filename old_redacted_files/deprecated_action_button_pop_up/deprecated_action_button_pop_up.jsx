// import React from "react";
// import { useEffect, useState, useRef } from "react";
// import { closeHookModalOnOutsideClick, closeOnEsc } from "../../../utils/close_hook_modals_api_utils";
// import REACT_PORTAL from "../../../utils/ReactPortal_api_util";
// import { Tooltip } from "react-tooltip";
// import { CopyIDIcon } from "../../front_end_svgs/Strife_svgs";

// const ActionButtonPopUp = (props) => {

//     const popupRef = useRef(null);
//     // closeHookModalOnOutsideClick(popupRef, props.setShowPopUp);
//     closeOnEsc(props.setShowPopUp);

//     return (
//         <div className="action-button-pop-up-layer" onClick={(e) => props.setShowPopUp(false)}>
//             <div className="action-button-pop-up" onClick={(e) => e.stopPropagation()} ref={popupRef}>
//                 <div className="action-button-pop-up-menu">
//                     <div className="action-button-scroller">
//                         <div role={"group"}>
//                             <div className="action-button-pop-up-item" data-tooltip-place="top" data-tooltip-id="copy-strife-server-link" data-tooltip-content={'Click to Copy Server Invite Link'}
//                                 onClick={() => {
//                                     navigator.clipboard.writeText(props.serverLink).then(() => { props.setShowPopUp(false) })
//                                 }}
//                             >
//                                 <div className="action-button-strife-server-link">
//                                     Copy Server ID
//                                 </div>
//                                 <div className="action-button-pop-up-icon-wrapper">
//                                     <CopyIDIcon className="action-button-pop-up-icon" />
//                                 </div>
//                             </div>
//                         </div>
//                         <Tooltip className="copy-server-link-tool-tip"
//                             id="copy-strife-server-link" place="top"
//                         />
//                     </div>
//                 </div>
//             </div>
//         </div>

//     )

// }

// export default ActionButtonPopUp;