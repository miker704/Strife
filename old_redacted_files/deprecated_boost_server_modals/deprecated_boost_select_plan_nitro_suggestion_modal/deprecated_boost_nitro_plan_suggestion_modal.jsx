// import React from "react";
// import { CloseXIcon, ComputerStreamingIcon, GemBoostIcon, NitroHappyFaceIcon, NitroUpArrowIcon, PersonShieldIcon, ScreenShareIcon, StickerIcon, XDIcon } from "../../front_end_svgs/Strife_svgs";
// import { useEffect, useRef, useState } from "react";
// import REACT_PORTAL from "../../../utils/ReactPortal_api_util";

// const BoostNitroPlanSuggestionModal = (props) => {


//     return (
//         <REACT_PORTAL wrapperId={'sub-modal'} classNameId={'subModal'} onClick={(e) => e.stopPropagation()}>
//             <div className="serverboostModalLayerContainer">
//                 <div className="serverBoostModal-backdrop"></div>
//                 <div className="server-boost-modal-layer">
//                     <div className="server-boost-modal-focus-lock">
//                         <div className="server-boost-modal no-animations">
//                             <div className="npsm-content npsm-content-padding global-scroll-thin-raw-attributes global-scroller-base" style={{ overflow: `hidden scroll`, paddingRight: `8px` }}>
//                                 <button type="button" className="sbm-close-button">
//                                     <div className="global-button-contents"><CloseXIcon className="closeIconX" /></div>
//                                 </button>
//                                 <div className="nitro-plan-suggestion-icon"/>
//                                 <div className="npsm-body-text">
//                                     Boost at a better price with Discord Nitro! For {`${` `}`}
//                                     <strong>$9.99/Month</strong>
//                                     {`${` `}`}you’ll get:
//                                 </div>
//                                 <div className="sbm-perks npsm-perk-list">
//                                     <div className="sbm-perk-row">
//                                         <div className="sbm-perk-container"><GemBoostIcon className="sbm-perk-icon npsm-gem-icon" /></div>
//                                         <div className="sbm-perk-description">2 Server Boosts for instant Level 1 perks</div>
//                                     </div>
//                                     <div className="sbm-perk-row">
//                                         <div className="sbm-perk-container"><GemBoostIcon className="sbm-perk-icon npsm-gem-icon" /></div>
//                                         <div className="sbm-perk-description">30% off Server Boosts</div>
//                                     </div>
//                                     <div className="sbm-perk-row">
//                                         <div className="sbm-perk-container"><NitroHappyFaceIcon className="sbm-perk-icon npsm-happy-face-icon" /></div>
//                                         <div className="sbm-perk-description">Superpower chat perks: animated emoji, custom Discord tag, and more</div>
//                                     </div>
//                                     <div className="sbm-perk-row">
//                                         <div className="sbm-perk-container"><ComputerStreamingIcon className="sbm-perk-icon npsm-streaming-icon" /></div>
//                                         <div className="sbm-perk-description">Source-quality Go Live streaming</div>
//                                     </div>
//                                     <div className="sbm-perk-row">
//                                         <div className="sbm-perk-container"><NitroUpArrowIcon className="sbm-perk-icon npsm-arrow-icon" /></div>
//                                         <div className="sbm-perk-description">Upload file size increase to 100MB</div>
//                                     </div>
//                                 </div>
//                                 <div className="server-boost-modal-bottom-sep"></div>
//                             </div>
//                             <div className="npsm-button-footer-container">
//                                 <div className="bsspm-foot-right">
//                                     <button type="button" className="bsspm-footer-close-button" onClick={(e)=> props.handleSlide(3)}>
//                                         <div className="look-filled-button-contents global-button-contents">Continue to Boosts</div>
//                                     </button>
//                                     <button type="button" className="npsm-upgrade-to-nitro-button">
//                                         <div className="look-filled-button-contents global-button-contents">
//                                             Upgrade to Nitro
//                                         </div>
//                                     </button>
//                                 </div>
//                                 <div className="npsm-back-step">
//                                     <button type="button" className="npsm-back-button" onClick={(e)=> props.handleSlide(1)}>
//                                         <div className="look-filled-button-contents global-button-contents">Back</div>
//                                     </button>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </REACT_PORTAL>
//     )


// }

// export default BoostNitroPlanSuggestionModal;