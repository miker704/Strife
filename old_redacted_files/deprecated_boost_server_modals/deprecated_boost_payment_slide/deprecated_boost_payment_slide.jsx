// import React from "react";
// import { AddRolePlusIcon, BoostModalNitroBall, BoostSparkleStarIcon, CloseXIcon, HoveringServerBoostGemIcon, MinusIcon, ProfilePanelChevronIcon, } from "../../front_end_svgs/Strife_svgs";
// import { useEffect, useRef, useState } from "react";
// import REACT_PORTAL from "../../../utils/ReactPortal_api_util";



// const BoostServerPaymentSlide = (props) => {


//     return (
//         <REACT_PORTAL wrapperId={'sub-modal'} classNameId={'subModal'} onClick={(e) => e.stopPropagation()}>
//             <div className="serverboostModalLayerContainer" onClick={(e) => props.handleCloseModal(e)}>
//                 <div className="serverBoostModal-backdrop"></div>
//                 <div className="server-boost-modal-layer">
//                     <div className="server-boost-modal-focus-lock" onClick={(e) => e.stopPropagation()}>
//                         <div className="server-boost-modal no-animations">
//                             <div className="bsspm-background bsspm-background-header">
//                                 <div className="bsspm-guild-wrapper-animation">
//                                     <div className="bsspm-guild-background-wrapper-animation">
//                                         <div className="bsspm-gif" />
//                                     </div>
//                                     <BoostSparkleStarIcon className="BoostSparkleStarIcon" style={{
//                                         top: `100px`,
//                                         left: `29px`,
//                                         width: "11.6693px",
//                                         height: "11.6693px",
//                                         transform: "scale(0) rotate(0deg)",
//                                         fill: "#ebf0f7"
//                                     }} />
//                                     <BoostSparkleStarIcon className="BoostSparkleStarIcon" style={{
//                                         top: `11px`,
//                                         left: `245px`,
//                                         width: "10.9453px",
//                                         height: "10.9453px",
//                                         transform: "scale(0) rotate(0deg)",
//                                         fill: "#fa6ef6"
//                                     }} />
//                                     <BoostSparkleStarIcon className="BoostSparkleStarIcon" style={{
//                                         top: `22px`,
//                                         left: `393px`,
//                                         width: "12.7134px",
//                                         height: "12.7134px",
//                                         transform: "scale(0) rotate(0deg)",
//                                         fill: "#ebf0f7"
//                                     }} />
//                                     <BoostSparkleStarIcon className="BoostSparkleStarIcon" style={{
//                                         top: `30px`,
//                                         left: `74px`,
//                                         width: "9.29724px",
//                                         height: "9.29724px",
//                                         transform: "scale(0) rotate(0deg)",
//                                         fill: "#fa6ef6"
//                                     }} />
//                                     <BoostSparkleStarIcon className="BoostSparkleStarIcon" style={{
//                                         top: `9px`,
//                                         left: `18/8px`,
//                                         width: "8.17547px",
//                                         height: "8.17547px",
//                                         transform: "scale(0) rotate(0deg)",
//                                         fill: "#ebf0f7"
//                                     }} />
//                                     <BoostSparkleStarIcon className="BoostSparkleStarIcon" style={{
//                                         top: `97px`,
//                                         left: `379px`,
//                                         width: "13.822px",
//                                         height: "13.822px",
//                                         transform: "scale(0) rotate(0deg)",
//                                         fill: `#fa6ef6`
//                                     }} />
//                                 </div>
//                                 <div className="bsspm-header"></div>
//                                 <button type="button" className="bsspm-close-button" onClick={(e) => props.handleCloseModal(e)}>
//                                     <div className="global-button-contents"><CloseXIcon className="closeIconX" /></div>
//                                 </button>
//                             </div>
//                             <div className={`server-boost-modal-content`}>
//                                 <div className="bsspm-bread-crumb-wrapper-container">
//                                     <div className="bsspm-bread-crumb-flex-wrapper">
//                                         <div className="bsspm-bread-crumb-wrapper">
//                                             <span className="bsspm-breadCrumb">Select Plan</span>
//                                             <ProfilePanelChevronIcon className="breadCrumb-chevron-icon chevronPointRight" />
//                                         </div>
//                                         <div className="bsspm-bread-crumb-wrapper">
//                                             <span className="bsspm-breadCrumb activeBreadCrumb">Payment</span>
//                                             <ProfilePanelChevronIcon className="breadCrumb-chevron-icon chevronPointRight" />
//                                         </div>
//                                         <div className="bsspm-bread-crumb-wrapper bsspm-bread-crumb-final-wrapper">
//                                             <span className="bsspm-breadCrumb">Review</span>
//                                         </div>
//                                     </div>
//                                 </div>
//                                 <div className={`server-boost-modal-body-wrapper ${props.slideAnimation}`}>
//                                     <div className="server-boost-modal-transition-group">
//                                         <div className="sbm-measurment-fill">
//                                             <div className="sbm-animated-mode">
//                                                 <div className="scroller-subModal-scroller-base global-scroll-thin-raw-attributes global-scroller-base" style={{ overflow: `hidden scroll`, paddingRight: `8px` }}>
//                                                     <div className="server-boost-modal-transition-group">
//                                                         <div className="sbm-measurment-fill">
//                                                             <div className="sbm-animated-mode">
//                                                                 <div className="sbm-payment-body">
//                                                                     <div>
//                                                                         <div className="cardBrands-row">
//                                                                             <div className="sbm-payment-card-icon sbm-payment-card-small visa-card paymentCard-form-header"></div>
//                                                                             <div className="sbm-payment-card-icon sbm-payment-card-small master-card paymentCard-form-header"></div>
//                                                                             <div className="sbm-payment-card-icon sbm-payment-card-small discover-card paymentCard-form-header"></div>
//                                                                             <div className="sbm-payment-card-icon sbm-payment-card-small amex-card paymentCard-form-header"></div>
//                                                                             <div className="sbm-payment-card-icon sbm-payment-card-small jcb-card paymentCard-form-header"></div>
//                                                                             <div className="sbm-payment-card-icon sbm-payment-card-small dinersclub-card paymentCard-form-header"></div>
//                                                                         </div>
//                                                                         <div>
//                                                                             <div className="sbm-payment-input-row">
//                                                                                 <div className="sbm-pi-inner-row-width-100 sbm-payment-input-inner-row">
//                                                                                     <div className="sbm-payment-input-section-title">
//                                                                                         <h1 className="sbm-payment-input-section-header">Card Number</h1>
//                                                                                     </div>
//                                                                                     <div className="sbm-payment-input-children">
//                                                                                         <div className="sbm-payment-input-wrapper">
//                                                                                             <input type="text" className="sbm-payment-input" placeholder="Name" />
//                                                                                         </div>
//                                                                                     </div>
//                                                                                 </div>
//                                                                             </div>
//                                                                             <div className="sbm-payment-input-row">
//                                                                                 <div className="sbm-pi-inner-row-width-50 sbm-payment-input-inner-row">
//                                                                                     <div className="sbm-payment-input-section-title">
//                                                                                         <h1 className="sbm-payment-input-section-header">Expiration Date</h1>
//                                                                                     </div>
//                                                                                     <div className="sbm-payment-input-children">
//                                                                                         <div className="sbm-payment-input-wrapper">
//                                                                                             <input type="text" className="sbm-payment-input" placeholder="Name" />
//                                                                                         </div>
//                                                                                     </div>
//                                                                                 </div>
//                                                                                 <div className="sbm-pi-inner-row-width-50 sbm-payment-input-inner-row">
//                                                                                     <div className="sbm-payment-input-section-title">
//                                                                                         <h1 className="sbm-payment-input-section-header">CVC</h1>
//                                                                                     </div>
//                                                                                     <div className="sbm-payment-input-children">
//                                                                                         <div className="sbm-payment-input-wrapper">
//                                                                                             <input type="text" className="sbm-payment-input" placeholder="Name" />
//                                                                                         </div>
//                                                                                     </div>
//                                                                                 </div>
//                                                                             </div>
//                                                                             <div className="sbm-payment-input-row">
//                                                                                 <div className="sbm-pi-inner-row-width-100 sbm-payment-input-inner-row">
//                                                                                     <div className="sbm-payment-input-section-title">
//                                                                                         <h1 className="sbm-payment-input-section-header">Name On The Card</h1>
//                                                                                     </div>
//                                                                                     <div className="sbm-payment-input-children">
//                                                                                         <div className="sbm-payment-input-wrapper">
//                                                                                             <input type="text" className="sbm-payment-input-cname" placeholder="Name" />
//                                                                                         </div>
//                                                                                     </div>
//                                                                                 </div>
//                                                                             </div>
//                                                                         </div>
//                                                                     </div>
//                                                                 </div>
//                                                             </div>
//                                                         </div>
//                                                     </div>
//                                                     <div className="server-boost-modal-bottom-sep"></div>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                             <div className="sbm-button-footer-container sbm-payment-button-footer-layout">
//                                 <button type="button" className="bsspm-continue-button" onClick={(e) => props.handleSlide(1)}>
//                                     <div className="look-filled-button-contents global-button-contents">Next</div>
//                                 </button>
//                                 <button type="button" className="sbm-back-button" onClick={(e) => props.handleSlide(3)}>
//                                     <div className="look-filled-button-contents global-button-contents">Back</div>
//                                 </button>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </REACT_PORTAL>
//     )


// }

// export default BoostServerPaymentSlide;