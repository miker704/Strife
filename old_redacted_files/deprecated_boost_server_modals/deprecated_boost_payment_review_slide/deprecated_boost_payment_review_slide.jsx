// import React from "react";
// import { AddRolePlusIcon, BoostModalNitroBall, BoostSparkleStarIcon, CloseXIcon, HoveringServerBoostGemIcon, Invite2ServerCheckBoxCheckedIcon, Invite2ServerCheckBoxUnCheckedIcon, MinusIcon, ProfilePanelChevronIcon, } from "../../front_end_svgs/Strife_svgs";
// import { useEffect, useRef, useState } from "react";
// import REACT_PORTAL from "../../../utils/ReactPortal_api_util";
// import { Tooltip } from "react-tooltip";

// const BoostServerPaymentReviewSlide = (props) => {
//     const [hideSubDesc, setHideSubDesc] = useState(true);
//     const [agreementCheck, setAgreementCheck] = useState(false);
//     const [renewalDate, setRenewalDate] = useState('');

//     useEffect(() => {
//         let date = new Date();
//         date.setDate(date.getDate() + 31)
//         let year = date.getFullYear();
//         let monthName = date.toLocaleString('default', { month: 'short', })
//         let day = date.getDate();
//         setRenewalDate(`${monthName} ${day}, ${year}`);

//     }, [])


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
//                                             <span className="bsspm-breadCrumb">Payment</span>
//                                             <ProfilePanelChevronIcon className="breadCrumb-chevron-icon chevronPointRight" />
//                                         </div>
//                                         <div className="bsspm-bread-crumb-wrapper bsspm-bread-crumb-final-wrapper">
//                                             <span className="bsspm-breadCrumb activeBreadCrumb">Review</span>
//                                         </div>
//                                     </div>
//                                 </div>
//                                 <div className={`server-boost-modal-body-wrapper ${props.slideAnimation}`}>
//                                     <div className="server-boost-modal-transition-group">
//                                         <div className="sbm-measurment-fill">
//                                             <div className="sbm-animated-mode">
//                                                 <div className="scroller-subModal-scroller-base global-scroll-thin-raw-attributes global-scroller-base" style={{ overflow: `hidden scroll`, paddingRight: `8px` }}>
//                                                     <div className="sbm-review-step">
//                                                         <div className="sbm-subscription-notice">
//                                                             Your next renewal date will be {`${` `}`}
//                                                             <strong>{`${renewalDate}`}</strong>
//                                                         </div>
//                                                         <div className="sbm-review-table">
//                                                             <div className="sbm-review-table-header">Purchase Details</div>
//                                                             <div className="sbm-rt-row sbm-rt-row-base">
//                                                                 <div className="sbm-rt-row-label">{`${props.serverBoostCount}`} × Server Boost Monthly</div>
//                                                                 <div className="sbm-rt-row-amount">${`${props.price}`} / Month</div>
//                                                             </div>
//                                                             <div className="sbm-rt-divider"></div>
//                                                             <div className="sbm-rt-total-row">
//                                                                 <div className="sbm-rt-total-row-label"><strong>Today's Total</strong>{`${` `}`} (Tax Included)</div>
//                                                                 <div className="sbm-rt-total-row-amount">${`${props.price}`}</div>
//                                                             </div>

//                                                             <div className="sbm-fine-print">
//                                                                 Any eligible subscription credit will be applied until it runs out. Your subscription will renew for {`${` `}`}
//                                                                 <strong>${`${props.price}`} / Month</strong>{`${` `}`} on {`${` `}`}
//                                                                 <strong>{`${renewalDate}`}</strong>. Have questions?{`${` `}`}
//                                                                 <a className="sbm-fine-print-anchor" href="http://dis.gd/contact" rel="noreferrer noopener" target="_blank">Contact our support team</a>
//                                                                 {`${` `}`}or{`${` `}`}
//                                                                 <a className="sbm-fine-print-anchor" href="https://support.discord.com/hc/en-us/articles/360017693772" rel="noreferrer noopener" target="_blank">check out our subscription FAQ</a>
//                                                                 .
//                                                             </div>
//                                                             <div className="sbm-rt-subDetailsToggle" role="button" tabIndex={0} onClick={(e) => setHideSubDesc(!hideSubDesc)}>
//                                                                 {`${hideSubDesc ? `Hide Subscription Details` : `Show Subscription Details`}`}
//                                                                 <ProfilePanelChevronIcon className={`sbm-rt-subDetailsToggle-caretIcon sbm-caretIcon-transition ${hideSubDesc ? `sbm-caretIcon-up` : `sbm-caretIcon-down`}`} />
//                                                             </div>

//                                                             {
//                                                                 hideSubDesc ? (
//                                                                     <>
//                                                                         <div className="sbm-rt-divider sbm-rt-divider-extended"></div>
//                                                                         <div className="sbm-review-table-header">New Subscription</div>
//                                                                         <div className="sbm-rt-row sbm-rt-row-base smb-rt-subAddedInvoiceItem">
//                                                                             <div className="sbm-rt-row-label"><strong>{`${props.serverBoostCount}`}</strong> × Server Boost Monthly</div>
//                                                                             <div className="sbm-rt-row-amount">${`${props.price}`} / Month</div>
//                                                                         </div>
//                                                                         <div className="sbm-rt-divider"></div>
//                                                                         <div className="sbm-rt-row sbm-rt-row-base sbm-rt-sub-cost-row">
//                                                                             <div className="sbm-rt-row-label">New Subscription Total</div>
//                                                                             <div className="sbm-rt-row-amount">${`${props.price}`} / Month</div>
//                                                                         </div>
//                                                                     </>
//                                                                 ) : ("")
//                                                             }

//                                                         </div>
//                                                         <div className="sbm-payment-source-wrapper">
//                                                             <h1 className="sbm-payment-header">Pay for it with</h1>
//                                                             <div className="sbm-fake-select-box">
//                                                                 <span className="sbm-fake-select-box-value">
//                                                                     <div className="sbm-fake-select-payment-source">
//                                                                         <div className="sbm-payment-card-icon sbm-payment-card-small paypal-card">PayPal</div>
//                                                                         <div className="sbm-fake-select-payment-source-label">$TR!F3 !$ 4 FR33</div>
//                                                                     </div>
//                                                                 </span>
//                                                                 <div className="sbm-fake-select-box-icons">
//                                                                     <ProfilePanelChevronIcon className={`pp-chevron-icon chevronPointDown`} />
//                                                                 </div>
//                                                             </div>
//                                                         </div>
//                                                         <div className="sbm-legal-mumbo-jumbo-wrapper">
//                                                             <div>
//                                                                 <h1 className="sbm-legal-mumbo-jumbo-header">Legal Mumbo Jumbo</h1>

//                                                                 <label className={`sbm-pr-label`} htmlFor="sbm-icheckbox-raw">
//                                                                     <input id="sbm-icheckbox-raw" className="sbm-raw-check-input" type="checkbox" onChange={() => setAgreementCheck(!agreementCheck)} value={agreementCheck} />
//                                                                     <div className={`sbm-icheckbox-wrapper ${agreementCheck === true ? `checked` : ``}`}>
//                                                                         {
//                                                                             agreementCheck ? (<Invite2ServerCheckBoxCheckedIcon />) : (<Invite2ServerCheckBoxUnCheckedIcon />)
//                                                                         }
//                                                                     </div>
//                                                                     <div className="sbm-raw-invite-label-text-wrapper">
//                                                                         <div className={`sbm-raw-invite-label-text`} >
//                                                                             I agree to the {`${` `}`}
//                                                                             <a className="sbm-fine-print-anchor" href="//discord.com/terms" rel="noreferrer noopener" target="_blank">$TR!F3 Terms of Service</a>
//                                                                             {`${` `}`}and{`${` `}`}
//                                                                             <a className="sbm-fine-print-anchor" href="https://support.discord.com/hc/articles/4410339366295" rel="noreferrer noopener" target="_blank">Paid Services Terms</a>
//                                                                         </div>
//                                                                     </div>
//                                                                 </label>
//                                                                 <div className="sbm-legal-mumbo-jumbo-fine-print">
//                                                                     Hey! What you're purchasing is a recurring subscription, which means we'll charge you today and continue to charge you monthly until you cancel the subscription.
//                                                                     You can cancel anytime from your Settings page, though!
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
//                             <div className="sbm-button-footer-container">

//                                 <div className="npsm-back-step">
//                                     <button type="button" className="npsm-back-button" onClick={(e) => props.handleSlideBackward(1)}>
//                                         <div className="look-filled-button-contents global-button-contents">Back</div>
//                                     </button>
//                                 </div>

//                                 <div className="bsspm-foot-right">
//                                     <button type="button" className="npsm-upgrade-to-nitro-button" disabled={agreementCheck ? false : true}
//                                         data-tooltip-content={"Accept the Terms of Service and Paid Services Terms to continue"}
//                                         data-tooltip-id="sbm-thread-tip"
//                                         onClick={(e) => props.handleSlideForward(6)}>
//                                         <div className="look-filled-button-contents global-button-contents">Purchase</div>
//                                     </button>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//                 <Tooltip className="thread-tool-tip" id="sbm-thread-tip" position="top" closeOnResize={true} closeOnScroll={true} />
//             </div>
//         </REACT_PORTAL>
//     )


// }

// export default BoostServerPaymentReviewSlide;