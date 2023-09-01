// import React from "react";
// import { AddRolePlusIcon, BoostModalNitroBall, BoostSparkleStarIcon, CloseXIcon, MinusIcon, ProfilePanelChevronIcon, ComputerStreamingIcon, GemBoostIcon, NitroHappyFaceIcon, NitroUpArrowIcon, StrifeBannerLogo, LinkedInIcon, TikTokIcon, YouTubeIcon, FaceBookIcon, InstaGramIcon, TwitterIcon, WumpusIcon, GitHubIcon, AngelListIcon, FolderIcon } from "../../front_end_svgs/Strife_svgs";
// import { useEffect, useRef, useState } from "react";
// import REACT_PORTAL from "../../../utils/ReactPortal_api_util";
// import BoostNitroPlanSuggestionModalContainer from "../boost_select_plan_nitro_suggestion_modal/boost_nitro_plan_suggestion_modal_container";
// import BoostServerPaymentSlide from "../boost_payment_slide/boost_payment_slide";
// import BoostServerPaymentReviewSlide from "../boot_payment_review_slide/boost_payment_review_slide";

// const BoostServerSelectPlanModal = (props) => {

//     const [serverBoostCount, setServerBoostCount] = useState(1);
//     const [price, setPrice] = useState(4.99);
//     const [slide, setSlide] = useState(1);
//     const [spinCubes, setSpinCubes] = useState(true);
//     const [slideAnimation, setSlideAnimation] = useState('');
//     const [forward, setForward] = useState(true);


//     const [cardName, setCardName] = useState('∞∞∞∞ ∞∞∞∞ ∞∞∞∞ ∞∞∞');
//     const [cvs, setCVC] = useState('∞');
//     const [expirationDate, setExpirationDate] = useState('∞/∞');
//     const [nameOnCard, setNameOnCard] = useState('$TR!F3 !$ 4 FR33')



//     useEffect(() => {
//         setSpinCubes(true);
//         props.reSyncCurrentUser(props.currentUser.id).then(() => {
//             setTimeout(() => {
//                 setSpinCubes(false);
//             }, 500);
//         })

//     }, []);

//     useEffect(() => {
//         if (slide === 3) {
//             console.log("hello")
//             $("#smb-auto-text").text("");
//             $("#elip-spin").removeClass("is-hidden");
//             setTimeout(() => {
//                 $("#smb-auto-text").text("Autofill from Browser (N/A)");
//                 $("#elip-spin").addClass("is-hidden");
//             }, 1000);
//         }
//     }, [slide])


//     const handleESC = (e) => {

//         const keys = {
//             27: () => {
//                 e.preventDefault();
//                 handleCloseModal(e);
//                 window.removeEventListener('keyup', handleESC, false);
//             },
//         };
//         if (keys[e.keyCode]) {
//             keys[e.keyCode]();
//         }
//     }

//     const handleCloseModal = (e) => {
//         e.preventDefault();
//         e.stopPropagation();
//         let modalToClose = document.getElementById('server-boost-modal')
//         if (modalToClose) {
//             modalToClose.classList.add("transition-out");
//             Promise.all(modalToClose.getAnimations().map((animation) => animation.finished),)
//                 .then(() => {
//                     props.closeSubMod(props.formName);
//                     window.removeEventListener('keyup', handleESC, false);
//                 }, () => {
//                     props.closeSubMod(props.formName);
//                     window.removeEventListener('keyup', handleESC, false);
//                 });
//         }
//         else {
//             props.closeSubMod(props.formName);
//             window.removeEventListener('keyup', handleESC, false);
//         }
//     }

//     const handleSubtraction = (e) => {
//         e.preventDefault();
//         if (serverBoostCount > 1) {
//             let newCount = serverBoostCount - 1;
//             let newPriceTotal = (4.99 * newCount).toFixed(2);
//             setServerBoostCount(newCount);
//             setPrice(newPriceTotal);
//         }
//         else {
//             return;
//         }

//     }

//     const handleAddition = (e) => {
//         e.preventDefault();
//         if (serverBoostCount < 30) {
//             let newCount = serverBoostCount + 1;
//             setServerBoostCount(newCount);
//             let newPriceTotal = (4.99 * newCount).toFixed(2);
//             setPrice(newPriceTotal);
//         }
//         else {
//             return;
//         }

//     }

//     const handleInput = (e) => {
//         let value = e.currentTarget.value.replace(/\s/g, '');
//         const regexPattern = /^[0-9\b]+$/;
//         if (value.length === 0) {
//             setServerBoostCount('');
//             setPrice(4.99);
//         }
//         else if (regexPattern.test(value)) {
//             if (parseInt(value) < 1) {
//                 setServerBoostCount(1);
//                 setPrice(4.99);
//             }
//             else if (parseInt(value) > 30) {
//                 setServerBoostCount(30);
//                 let newPriceTotal = (4.99 * 30).toFixed(2);
//                 setPrice(newPriceTotal);
//             }
//             else {
//                 let newCount = parseInt(value);
//                 setServerBoostCount(newCount);
//                 let newPriceTotal = (4.99 * newCount).toFixed(2);
//                 setPrice(newPriceTotal);
//             }
//         }
//     }

//     const handleSlideForward = (slideNumber) => {
//         let modalToClose = document.querySelector('.server-boost-modal-body-wrapper');
//         switch (slide) {
//             case 1:
//                 setSlide(slideNumber);
//                 setSlideAnimation('')
//                 return;

//             case 2:
//                 setSlide(slideNumber);
//                 setSlideAnimation('')
//                 return;

//             case 3:
//                 if (modalToClose) {
//                     modalToClose.classList.add("slide-data-to-left-reverse");
//                     Promise.all(modalToClose.getAnimations().map((animation) => animation.finished),)
//                         .then(() => {
//                             modalToClose.classList.remove("slide-data-to-left-reverse")
//                             setSlide(slideNumber);
//                             setSlideAnimation('slide-data-to-right-reverse');
//                             setForward(true);
//                         }, () => {
//                             modalToClose.classList.remove("slide-data-to-left-reverse")
//                             setSlide(slideNumber);
//                             setSlideAnimation('');
//                             setForward(true);
//                         });
//                 }
//                 return;

//             case 4:
//                 if (modalToClose) {
//                     modalToClose.classList.add("slide-data-to-left-reverse");
//                     Promise.all(modalToClose.getAnimations().map((animation) => animation.finished),)
//                         .then(() => {
//                             modalToClose.classList.remove("slide-data-to-left-reverse")
//                             setSlide(slideNumber);
//                             setSlideAnimation('slide-2To3');
//                             setForward(true);
//                         }, () => {
//                             modalToClose.classList.remove("slide-data-to-left-reverse")
//                             setSlide(slideNumber);
//                             setSlideAnimation('');
//                             setForward(true);
//                         });
//                 }
//                 return;

//             case 5:
//                 if (modalToClose) {
//                     modalToClose.classList.add("slide-data-to-left-reverse");
//                     Promise.all(modalToClose.getAnimations().map((animation) => animation.finished),)
//                         .then(() => {
//                             modalToClose.classList.remove("slide-data-to-left-reverse")
//                             setSlide(slideNumber);
//                             setSlideAnimation('slide-3To4');
//                             setForward(true);
//                         }, () => {
//                             modalToClose.classList.remove("slide-data-to-left-reverse")
//                             setSlide(slideNumber);
//                             setSlideAnimation('');
//                             setForward(true);
//                         });
//                 }
//                 return;
//             case 6:
//                 setSlide(slideNumber);
//                 setSlideAnimation('');
//                 setForward(true);
//                 return;
//             default:
//                 setSlide(slideNumber);
//                 setSlideAnimation('');
//                 setForward(true);
//                 return;
//         }

//     }

//     const handleSlideBackward = (slideNumber) => {
//         let modalToClose = document.querySelector('.server-boost-modal-body-wrapper');
//         switch (slide) {
//             case 2:
//                 setSlide(slideNumber);
//                 setSlideAnimation('')
//                 return;
//             case 3:
//                 if (slideNumber === 1) {
//                     if (modalToClose) {
//                         modalToClose.classList.add("slide-data-to-right");
//                         console.log(modalToClose)
//                         Promise.all(modalToClose.getAnimations().map((animation) => animation.finished),)
//                             .then(() => {
//                                 modalToClose.classList.remove("slide-data-to-right")
//                                 setSlide(slideNumber);
//                                 setSlideAnimation("slide-data-to-left");
//                                 setForward(false);
//                             }, () => {
//                                 console.log("hi failed")
//                                 modalToClose.classList.remove("slide-data-to-right")
//                                 setSlide(slideNumber);
//                                 setSlideAnimation("");
//                                 setForward(false);
//                             });
//                     }
//                 }
//                 return;
//             case 4:
//                 if (modalToClose) {
//                     modalToClose.classList.remove('slide-data-to-right-reverse');
//                     modalToClose.classList.add("slide-data-to-right-4-3");
//                     Promise.all(modalToClose.getAnimations().map((animation) => animation.finished),)
//                         .then(() => {
//                             modalToClose.classList.remove("slide-data-to-right-4-3")
//                             setSlide(slideNumber);
//                             setSlideAnimation('slide-data-to-left');
//                             setForward(false);
//                         }, () => {
//                             modalToClose.classList.remove("slide-data-to-right-4-3")
//                             setSlide(slideNumber);
//                             setSlideAnimation('');
//                             setForward(false);
//                         });
//                 }
//                 return;

//             case 5:
//                 if (slideNumber === 1) {
//                     if (modalToClose) {
//                         modalToClose.classList.add("slide-data-to-right");
//                         console.log(modalToClose)
//                         Promise.all(modalToClose.getAnimations().map((animation) => animation.finished),)
//                             .then(() => {
//                                 modalToClose.classList.remove("slide-data-to-right")
//                                 setSlide(slideNumber);
//                                 setSlideAnimation("slide-data-to-left");
//                                 setForward(false);
//                             }, () => {
//                                 console.log("hi failed")
//                                 modalToClose.classList.remove("slide-data-to-right")
//                                 setSlide(slideNumber);
//                                 setSlideAnimation("");
//                                 setForward(false);
//                             });
//                     }
//                 }
//                 return;
//             case 6:
//                 setSlide(slideNumber);
//                 setSlideAnimation('');
//                 setForward(false);
//                 return;

//             default:
//                 setSlide(slideNumber);
//                 setSlideAnimation('');
//                 setForward(false);
//                 return;

//         }
//     }

//     let slide1Content = spinCubes ? null : (
//         <div className={`server-boost-modal-content`}>
//             <div className="bsspm-bread-crumb-wrapper-container">
//                 <div className="bsspm-bread-crumb-flex-wrapper">
//                     <div className="bsspm-bread-crumb-wrapper">
//                         <span className="bsspm-breadCrumb activeBreadCrumb">Select Plan</span>
//                         <ProfilePanelChevronIcon className="breadCrumb-chevron-icon chevronPointRight" />
//                     </div>
//                     <div className="bsspm-bread-crumb-wrapper bsspm-bread-crumb-final-wrapper">
//                         <span className="bsspm-breadCrumb">Review</span>
//                     </div>
//                 </div>
//             </div>
//             <div className={`server-boost-modal-body-wrapper ${slideAnimation}`}>
//                 <div className="server-boost-modal-transition-group">
//                     <div className="sbm-measurment-fill">
//                         <div className="sbm-animated-mode">
//                             <div className="scroller-subModal-scroller-base global-scroll-thin-raw-attributes global-scroller-base" style={{ overflow: `hidden scroll`, paddingRight: `8px` }}>
//                                 <div className="bsspm-planSelectStep">
//                                     <div className="bsspm-plan-select-text">
//                                         Help a server unlock great perks with Server Boosts. Purchase at any time — we'll do the math and prorate it.
//                                     </div>
//                                     <div className="bsspm-select-row">
//                                         <div className="bsspm-selectorWrapper">
//                                             <div className="bbsspm-plan-selector-action-container">
//                                                 <div className={`bsspm-action-icon-wrapper ${serverBoostCount === 1 ? `disabled` : ``}`} onClick={(e) => handleSubtraction(e)}>
//                                                     <MinusIcon className={`bsspm-action-icon ${serverBoostCount === 1 ? `disabled` : ``}`} />
//                                                 </div>
//                                                 <div className="bsspm-input-wrapper">
//                                                     <input className="bsspm-input" type="text" placeholder={`${serverBoostCount}`} value={serverBoostCount} onChange={(e) => handleInput(e)} />
//                                                 </div>
//                                                 <div className={`bsspm-action-icon-wrapper ${serverBoostCount === 30 ? `disabled` : ``}`} onClick={(e) => handleAddition(e)}>
//                                                     <AddRolePlusIcon className={`bsspm-action-icon ${serverBoostCount === 30 ? `disabled` : ``}`} />
//                                                 </div>
//                                             </div>
//                                             <div className="bsspm-selectorLabel">Server Boost(s)</div>
//                                         </div>
//                                         <div className="bsspm-selectorPreviewPrice">$4.99 / Month each</div>
//                                     </div>
//                                     <div className="bsspm-plan-select-divider"></div>
//                                     <div className="bsspm-select-row">
//                                         <div className="bsspm-plan-selector-subtotal">Subtotal</div>
//                                         <div >
//                                             <div className="bsspm-price-per-interval">
//                                                 <strong>${`${price}`}</strong>
//                                                 {`${` `}`}/ Month
//                                             </div>
//                                         </div>
//                                     </div>
//                                     <div className="bsspm-warn-block">
//                                         <div className="warn-block-icon"></div>
//                                         <div className="warn-block-anchor-text">
//                                             Final price and currency will be based on your selected payment method.
//                                             <a className="warn-block-anchor" href="https://support.discord.com/hc/en-us/articles/4407269525911" rel="noreferrer noopener" target="_blank">{`${` `}`}Learn More</a>
//                                             .
//                                         </div>
//                                     </div>
//                                     <div className="bsspm-upSellFooter" >
//                                         <BoostModalNitroBall width={24} height={24} className="upSellFooter-icon" />
//                                         <div>
//                                             You could be paying{`${` `}`}
//                                             <strong>30% less</strong>{`${` `}`}
//                                             for each Boost, and get an additional 2 Boosts with{`${` `}`}
//                                             <a className="upSellFooter-anchor" role="button" tabIndex={0}>Discord Nitro</a>
//                                             !
//                                         </div>
//                                     </div>
//                                 </div>
//                                 <div className="server-boost-modal-bottom-sep"></div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )

//     let slideFooter = spinCubes ? null : (
//         <div className="sbm-button-footer-container">
//             <div className="bsspm-foot-right">
//                 <button type="button" className="bsspm-footer-close-button" onClick={(e) => props.handleCloseModal(e)}>
//                     <div className="look-filled-button-contents global-button-contents">Never Mind</div>
//                 </button>
//                 <button type="button" className="bsspm-continue-button" onClick={(e) => handleSlideForward(2)}>
//                     <div className="look-filled-button-contents global-button-contents">
//                         Continue
//                     </div>
//                 </button>
//             </div>
//         </div>
//     )

//     let spinningCubes = spinCubes ? (
//         <div className="server-boost-modal-content">
//             <div className="server-boost-modal-body-wrapper">
//                 <div className="server-boost-modal-transition-group">
//                     <div className="sbm-measurment-fill">
//                         <div className="sbm-animated-mode">
//                             <div className="scroller-subModal-scroller-base global-scroll-thin-raw-attributes global-scroller-base" style={{ overflow: `hidden scroll`, paddingRight: `8px` }}>
//                                 <div className="bsspm-spin-cube-main-layer">
//                                     <div className="bsspm-spin-cubes-focus-lock">
//                                         <span className={`spinning-cubes`}>
//                                             <span className="inner-cubes moving-cubes">
//                                                 <span className="inner-cube"></span>
//                                                 <span className="inner-cube"></span>
//                                             </span>
//                                         </span>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>


//     ) : null;


//     if (slide === 1) {
//         return (
//             <REACT_PORTAL wrapperId={'sub-modal'} classNameId={'subModal'} onClick={(e) => e.stopPropagation()}>
//                 <div className="serverboostModalLayerContainer" onClick={(e) => props.handleCloseModal(e)}>
//                     <div className="serverBoostModal-backdrop"></div>
//                     <div className="server-boost-modal-layer">
//                         <div className="server-boost-modal-focus-lock" onClick={(e) => e.stopPropagation()}>
//                             <div className="server-boost-modal selectPlan">
//                                 <div className="bsspm-background bsspm-background-header">
//                                     <div className="bsspm-guild-wrapper-animation">
//                                         <div className="bsspm-guild-background-wrapper-animation">
//                                             <div className="bsspm-gif" />
//                                         </div>
//                                     </div>
//                                     <div className="bsspm-header"></div>
//                                     <button type="button" className="bsspm-close-button" onClick={(e) => props.handleCloseModal(e)}>
//                                         <div className="global-button-contents"><CloseXIcon className="closeIconX" /></div>
//                                     </button>
//                                 </div>
//                                 {spinningCubes}
//                                 {slide1Content}
//                                 {slideFooter}
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </REACT_PORTAL>
//         )
//     }
//     else if (slide === 2) {
//         return (
//             <REACT_PORTAL wrapperId={'sub-modal'} classNameId={'subModal'} onClick={(e) => e.stopPropagation()}>
//                 <div className="serverboostModalLayerContainer">
//                     <div className="serverBoostModal-backdrop"></div>
//                     <div className="server-boost-modal-layer">
//                         <div className="server-boost-modal-focus-lock">
//                             <div className="server-boost-modal no-animations">
//                                 <div className="npsm-content npsm-content-padding global-scroll-thin-raw-attributes global-scroller-base" style={{ overflow: `hidden scroll`, paddingRight: `8px` }}>
//                                     <button type="button" className="sbm-close-button">
//                                         <div className="global-button-contents"><CloseXIcon className="closeIconX" /></div>
//                                     </button>
//                                     <div className="nitro-plan-suggestion-icon" />
//                                     <div className="npsm-body-text">
//                                         Boost at a better price with Discord Nitro! For {`${` `}`}
//                                         <strong>$9.99/Month</strong>
//                                         {`${` `}`}you’ll get:
//                                     </div>
//                                     <div className="sbm-perks npsm-perk-list">
//                                         <div className="sbm-perk-row">
//                                             <div className="sbm-perk-container"><GemBoostIcon className="sbm-perk-icon npsm-gem-icon" /></div>
//                                             <div className="sbm-perk-description">2 Server Boosts for instant Level 1 perks</div>
//                                         </div>
//                                         <div className="sbm-perk-row">
//                                             <div className="sbm-perk-container"><GemBoostIcon className="sbm-perk-icon npsm-gem-icon" /></div>
//                                             <div className="sbm-perk-description">30% off Server Boosts</div>
//                                         </div>
//                                         <div className="sbm-perk-row">
//                                             <div className="sbm-perk-container"><NitroHappyFaceIcon className="sbm-perk-icon npsm-happy-face-icon" /></div>
//                                             <div className="sbm-perk-description">Superpower chat perks: animated emoji, custom Discord tag, and more</div>
//                                         </div>
//                                         <div className="sbm-perk-row">
//                                             <div className="sbm-perk-container"><ComputerStreamingIcon className="sbm-perk-icon npsm-streaming-icon" /></div>
//                                             <div className="sbm-perk-description">Source-quality Go Live streaming</div>
//                                         </div>
//                                         <div className="sbm-perk-row">
//                                             <div className="sbm-perk-container"><NitroUpArrowIcon className="sbm-perk-icon npsm-arrow-icon" /></div>
//                                             <div className="sbm-perk-description">Upload file size increase to 100MB</div>
//                                         </div>
//                                     </div>
//                                     <div className="server-boost-modal-bottom-sep"></div>
//                                 </div>
//                                 <div className="npsm-button-footer-container">
//                                     <div className="bsspm-foot-right">
//                                         <button type="button" className="bsspm-footer-close-button" onClick={(e) => handleSlideForward(3)}>
//                                             <div className="look-filled-button-contents global-button-contents">Continue to Boosts</div>
//                                         </button>
//                                         <button type="button" className="npsm-upgrade-to-nitro-button">
//                                             <div className="look-filled-button-contents global-button-contents">
//                                                 Upgrade to Nitro
//                                             </div>
//                                         </button>
//                                     </div>
//                                     <div className="npsm-back-step">
//                                         <button type="button" className="npsm-back-button" onClick={(e) => handleSlideBackward(1)}>
//                                             <div className="look-filled-button-contents global-button-contents">Back</div>
//                                         </button>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </REACT_PORTAL>
//         )
//     }

//     else if (slide === 3) {
//         return (
//             <REACT_PORTAL wrapperId={'sub-modal'} classNameId={'subModal'} onClick={(e) => e.stopPropagation()}>
//                 <div className="serverboostModalLayerContainer" onClick={(e) => props.handleCloseModal(e)}>
//                     <div className="serverBoostModal-backdrop"></div>
//                     <div className="server-boost-modal-layer">
//                         <div className="server-boost-modal-focus-lock" onClick={(e) => e.stopPropagation()}>
//                             <div className="server-boost-modal no-animations">
//                                 <div className="bsspm-background bsspm-background-header">
//                                     <div className="bsspm-guild-wrapper-animation">
//                                         <div className="bsspm-guild-background-wrapper-animation">
//                                             <div className="bsspm-gif" />
//                                         </div>
//                                     </div>
//                                     <div className="bsspm-header"></div>
//                                     <button type="button" className="bsspm-close-button" onClick={(e) => props.handleCloseModal(e)}>
//                                         <div className="global-button-contents"><CloseXIcon className="closeIconX" /></div>
//                                     </button>
//                                 </div>
//                                 <div className={`server-boost-modal-content`}>
//                                     <div className="bsspm-bread-crumb-wrapper-container">
//                                         <div className="bsspm-bread-crumb-flex-wrapper">
//                                             <div className="bsspm-bread-crumb-wrapper">
//                                                 <span className="bsspm-breadCrumb">Select Plan</span>
//                                                 <ProfilePanelChevronIcon className="breadCrumb-chevron-icon chevronPointRight" />
//                                             </div>
//                                             <div className="bsspm-bread-crumb-wrapper">
//                                                 <span className="bsspm-breadCrumb activeBreadCrumb">Payment</span>
//                                                 <ProfilePanelChevronIcon className="breadCrumb-chevron-icon chevronPointRight" />
//                                             </div>
//                                             <div className="bsspm-bread-crumb-wrapper bsspm-bread-crumb-final-wrapper">
//                                                 <span className="bsspm-breadCrumb">Review</span>
//                                             </div>
//                                         </div>
//                                     </div>
//                                     <div className={`server-boost-modal-body-wrapper ${slideAnimation}`}>
//                                         <div className="server-boost-modal-transition-group">
//                                             <div className="sbm-measurment-fill">
//                                                 <div className="sbm-animated-mode">
//                                                     <div className="scroller-subModal-scroller-base global-scroll-thin-raw-attributes global-scroller-base" style={{ overflow: `hidden scroll`, paddingRight: `8px` }}>
//                                                         <div className="server-boost-modal-transition-group">
//                                                             <div className="sbm-measurment-fill">
//                                                                 <div className="sbm-animated-mode">
//                                                                     <div className="sbm-payment-body">
//                                                                         <div>
//                                                                             <div>
//                                                                                 <div className="sbm-payment-body-section-title">
//                                                                                     <h1 className="sbm-payment-header">Select Payment Type</h1>
//                                                                                 </div>
//                                                                                 <div className="sbm-payment-body-children">
//                                                                                     <div>
//                                                                                         <div className="sbm-payment-button-group-wrapper">
//                                                                                             <button type="button" className="sbm-payment-button" onClick={(e) => handleSlideForward(4)}>
//                                                                                                 <div className="look-filled-button-contents global-button-contents">
//                                                                                                     <div className="sbm-payment-button-contents-flex">
//                                                                                                         <div className="sbm-payment-card-icon sbm-payment-card-small sbm-payment-card-button">Card</div>
//                                                                                                         Card
//                                                                                                     </div>
//                                                                                                 </div>
//                                                                                             </button>
//                                                                                             <button type="button" className="sbm-payment-button" onClick={(e) => handleSlideForward(4)}>
//                                                                                                 <div className="look-filled-button-contents global-button-contents">
//                                                                                                     <div className="sbm-payment-button-contents-flex">
//                                                                                                         <div className="sbm-payment-card-icon sbm-payment-card-small paypal-card sbm-payment-card-button">PayPal</div>
//                                                                                                         PayPal
//                                                                                                     </div>
//                                                                                                 </div>
//                                                                                             </button>
//                                                                                             <button type="button" className="sbm-payment-button" onClick={(e) => handleSlideForward(4)}>
//                                                                                                 <div className="look-filled-button-contents global-button-contents">
//                                                                                                     <div className="sbm-payment-button-contents-flex">
//                                                                                                         <div className="sbm-payment-card-icon sbm-payment-card-small venmo-card sbm-payment-card-button">Venmo</div>
//                                                                                                         Venmo
//                                                                                                     </div>
//                                                                                                 </div>
//                                                                                             </button>
//                                                                                             <button type="button" className="sbm-payment-button sbm-payment-button-grow" disabled>
//                                                                                                 <span id={`elip-spin`} className="spinner-ellipsis spinner-dots is-hidden" role='img'>
//                                                                                                     <span className="inner-spinner-dots-container pulsing-ellipsis">
//                                                                                                         <span className="spin-dot spin-dot-item"></span>
//                                                                                                         <span className="spin-dot spin-dot-item"></span>
//                                                                                                         <span className="spin-dot spin-dot-item"></span>
//                                                                                                         <span className="spin-dot spin-dot-item"></span>
//                                                                                                     </span>
//                                                                                                 </span>
//                                                                                                 <div className="look-filled-button-contents global-button-contents" id="smb-auto-text">
//                                                                                                     Autofill from Browser (N/A)
//                                                                                                 </div>
//                                                                                             </button>
//                                                                                         </div>
//                                                                                     </div>
//                                                                                 </div>
//                                                                             </div>
//                                                                         </div>
//                                                                     </div>
//                                                                 </div>
//                                                             </div>
//                                                         </div>
//                                                         <div className="server-boost-modal-bottom-sep"></div>
//                                                     </div>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div>
//                                 <div className="npsm-button-footer-container">
//                                     <div className="bsspm-foot-right">
//                                         <button type="button" className="sbm-back-button" onClick={(e) => handleSlideBackward(1)}>
//                                             <div className="look-filled-button-contents global-button-contents">Back</div>
//                                         </button>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </REACT_PORTAL>
//         )

//     }
//     else if (slide === 4) {
//         return (
//             <REACT_PORTAL wrapperId={'sub-modal'} classNameId={'subModal'} onClick={(e) => e.stopPropagation()}>
//                 <div className="serverboostModalLayerContainer" onClick={(e) => props.handleCloseModal(e)}>
//                     <div className="serverBoostModal-backdrop"></div>
//                     <div className="server-boost-modal-layer">
//                         <div className="server-boost-modal-focus-lock" onClick={(e) => e.stopPropagation()}>
//                             <div className="server-boost-modal no-animations">
//                                 <div className="bsspm-background bsspm-background-header">
//                                     <div className="bsspm-guild-wrapper-animation">
//                                         <div className="bsspm-guild-background-wrapper-animation">
//                                             <div className="bsspm-gif" />
//                                         </div>
//                                     </div>
//                                     <div className="bsspm-header"></div>
//                                     <button type="button" className="bsspm-close-button" onClick={(e) => props.handleCloseModal(e)}>
//                                         <div className="global-button-contents"><CloseXIcon className="closeIconX" /></div>
//                                     </button>
//                                 </div>
//                                 <div className={`server-boost-modal-content`}>
//                                     <div className="bsspm-bread-crumb-wrapper-container">
//                                         <div className="bsspm-bread-crumb-flex-wrapper">
//                                             <div className="bsspm-bread-crumb-wrapper">
//                                                 <span className="bsspm-breadCrumb">Select Plan</span>
//                                                 <ProfilePanelChevronIcon className="breadCrumb-chevron-icon chevronPointRight" />
//                                             </div>
//                                             <div className="bsspm-bread-crumb-wrapper">
//                                                 <span className="bsspm-breadCrumb activeBreadCrumb">Payment</span>
//                                                 <ProfilePanelChevronIcon className="breadCrumb-chevron-icon chevronPointRight" />
//                                             </div>
//                                             <div className="bsspm-bread-crumb-wrapper bsspm-bread-crumb-final-wrapper">
//                                                 <span className="bsspm-breadCrumb">Review</span>
//                                             </div>
//                                         </div>
//                                     </div>
//                                     <div className={`server-boost-modal-body-wrapper ${slideAnimation}`}>
//                                         <div className="server-boost-modal-transition-group">
//                                             <div className="sbm-measurment-fill">
//                                                 <div className="sbm-animated-mode">
//                                                     <div className="scroller-subModal-scroller-base global-scroll-thin-raw-attributes global-scroller-base" style={{ overflow: `hidden scroll`, paddingRight: `8px` }}>
//                                                         <div className="server-boost-modal-transition-group">
//                                                             <div className="sbm-measurment-fill">
//                                                                 <div className="sbm-animated-mode">
//                                                                     <div className="sbm-payment-body">
//                                                                         <div>
//                                                                             <div className="cardBrands-row">
//                                                                                 <div className="sbm-payment-card-icon sbm-payment-card-small visa-card paymentCard-form-header"></div>
//                                                                                 <div className="sbm-payment-card-icon sbm-payment-card-small master-card paymentCard-form-header"></div>
//                                                                                 <div className="sbm-payment-card-icon sbm-payment-card-small discover-card paymentCard-form-header"></div>
//                                                                                 <div className="sbm-payment-card-icon sbm-payment-card-small amex-card paymentCard-form-header"></div>
//                                                                                 <div className="sbm-payment-card-icon sbm-payment-card-small jcb-card paymentCard-form-header"></div>
//                                                                                 <div className="sbm-payment-card-icon sbm-payment-card-small dinersclub-card paymentCard-form-header"></div>
//                                                                             </div>
//                                                                             <div>
//                                                                                 <div className="sbm-payment-input-row">
//                                                                                     <div className="sbm-pi-inner-row-width-100 sbm-payment-input-inner-row">
//                                                                                         <div className="sbm-payment-input-section-title">
//                                                                                             <h1 className="sbm-payment-input-section-header">Card Number</h1>
//                                                                                         </div>
//                                                                                         <div className="sbm-payment-input-children">
//                                                                                             <div className="gold-card-input-outer-wrapper">
//                                                                                                 <div className="sbm-payment-input-wrapper">
//                                                                                                     <div className="sbm-payment-card-icon sbm-payment-card-small goldCard-Input-icon">Card</div>
//                                                                                                     <div className="gold-card-input-wrapper">
//                                                                                                         <input type="text" className="card-number-input" value={'∞∞∞∞ ∞∞∞∞ ∞∞∞∞ ∞∞∞'} placeholder="∞∞∞∞ ∞∞∞∞ ∞∞∞∞ ∞∞∞" disabled readOnly={true} />
//                                                                                                     </div>
//                                                                                                 </div>
//                                                                                             </div>
//                                                                                         </div>
//                                                                                     </div>
//                                                                                 </div>
//                                                                                 <div className="sbm-payment-input-row">
//                                                                                     <div className="sbm-pi-inner-row-width-50 sbm-payment-input-inner-row">
//                                                                                         <div className="sbm-payment-input-section-title">
//                                                                                             <h1 className="sbm-payment-input-section-header">Expiration Date</h1>
//                                                                                         </div>
//                                                                                         <div className="sbm-payment-input-children">
//                                                                                             <div className="sbm-payment-input-wrapper">
//                                                                                                 <input type="text" className="sbm-payment-input" value={'∞'} placeholder='∞' disabled readOnly={true} />
//                                                                                             </div>
//                                                                                         </div>
//                                                                                     </div>
//                                                                                     <div className="sbm-pi-inner-row-width-50 sbm-payment-input-inner-row">
//                                                                                         <div className="sbm-payment-input-section-title">
//                                                                                             <h1 className="sbm-payment-input-section-header">CVC</h1>
//                                                                                         </div>
//                                                                                         <div className="sbm-payment-input-children">
//                                                                                             <div className="sbm-payment-input-wrapper">
//                                                                                                 <input type="text" className="sbm-payment-input" value={'∞/∞'} placeholder='∞/∞' disabled readOnly={true} />
//                                                                                             </div>
//                                                                                         </div>
//                                                                                     </div>
//                                                                                 </div>
//                                                                                 <div className="sbm-payment-input-row">
//                                                                                     <div className="sbm-pi-inner-row-width-100 sbm-payment-input-inner-row">
//                                                                                         <div className="sbm-payment-input-section-title">
//                                                                                             <h1 className="sbm-payment-input-section-header">Name On The Card</h1>
//                                                                                         </div>
//                                                                                         <div className="sbm-payment-input-children">
//                                                                                             <div className="sbm-payment-input-wrapper">
//                                                                                                 <input type="text" className="sbm-payment-input-cname" value={'$TR!F3 !$ 4 FR33'} placeholder="$TR!F3 !$ 4 FR33" disabled readOnly={true} />
//                                                                                             </div>
//                                                                                         </div>
//                                                                                     </div>
//                                                                                 </div>
//                                                                             </div>
//                                                                         </div>
//                                                                     </div>
//                                                                 </div>
//                                                             </div>
//                                                         </div>
//                                                         <div className="server-boost-modal-bottom-sep"></div>
//                                                     </div>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div>
//                                 <div className="sbm-button-footer-container sbm-payment-button-footer-layout">
//                                     <button type="button" className="bsspm-continue-button" onClick={(e) => handleSlideForward(5)}>
//                                         <div className="look-filled-button-contents global-button-contents">Next</div>
//                                     </button>
//                                     <button type="button" className="sbm-back-button" onClick={(e) => handleSlideBackward(3)}>
//                                         <div className="look-filled-button-contents global-button-contents">Back</div>
//                                     </button>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </REACT_PORTAL>
//         )

//     }
//     else if (slide === 5) {
//         return (
//             <BoostServerPaymentReviewSlide price={price} serverBoostCount={serverBoostCount} slideAnimation={slideAnimation} handleSlideForward={handleSlideForward} handleSlideBackward={handleSlideBackward} handleCloseModal={props.handleCloseModal} />
//         )
//     }
//     else if (slide === 6) {
//         return (
//             <REACT_PORTAL wrapperId={'sub-modal'} classNameId={'subModal'} onClick={(e) => e.stopPropagation()}>
//                 <div className="serverboostModalLayerContainer" onClick={(e) => props.handleCloseModal(e)}>
//                     <div className="serverBoostModal-backdrop"></div>
//                     <div className="server-boost-modal-layer">
//                         <div className="server-boost-modal-focus-lock" onClick={(e) => e.stopPropagation()}>
//                             <div className="server-boost-modal no-animations">
//                                 <div className="bsspm-background bsspm-background-header">
//                                     <div className="bsspm-guild-wrapper-animation">
//                                         <div className="bsspm-guild-background-wrapper-animation">
//                                             <div className="bsspm-gif" />
//                                         </div>
//                                     </div>
//                                     <div className="bsspm-header"></div>
//                                     <button type="button" className="bsspm-close-button" onClick={(e) => props.handleCloseModal(e)}>
//                                         <div className="global-button-contents"><CloseXIcon className="closeIconX" /></div>
//                                     </button>
//                                 </div>
//                                 <div className={`server-boost-modal-content`}>
//                                     <div className="bsspm-bread-crumb-wrapper-container">
//                                         <div className="bsspm-bread-crumb-flex-wrapper">
//                                             <div className="bsspm-bread-crumb-wrapper">
//                                                 <span className="bsspm-breadCrumb">Select Plan</span>
//                                                 <ProfilePanelChevronIcon className="breadCrumb-chevron-icon chevronPointRight" />
//                                             </div>
//                                             <div className="bsspm-bread-crumb-wrapper">
//                                                 <span className="bsspm-breadCrumb">Payment</span>
//                                                 <ProfilePanelChevronIcon className="breadCrumb-chevron-icon chevronPointRight" />
//                                             </div>
//                                             <div className="bsspm-bread-crumb-wrapper">
//                                                 <span className="bsspm-breadCrumb">Review</span>
//                                                 <ProfilePanelChevronIcon className="breadCrumb-chevron-icon chevronPointRight" />
//                                             </div>
//                                             <div className="bsspm-bread-crumb-wrapper bsspm-bread-crumb-final-wrapper">
//                                                 <span className="bsspm-breadCrumb activeBreadCrumb">Success Enjoy $TR!F3 N!TR0 !</span>
//                                             </div>
//                                         </div>
//                                     </div>
//                                     <div className={`server-boost-modal-body-wrapper ${slideAnimation}`}>
//                                         <div className="server-boost-modal-transition-group">
//                                             <div className="sbm-measurment-fill">
//                                                 <div className="sbm-animated-mode">
//                                                     <div className="scroller-subModal-scroller-base global-scroll-thin-raw-attributes global-scroller-base" style={{ overflow: `hidden scroll`, paddingRight: `8px` }}>
//                                                         <div className="sbm-strife-banner-flex">
//                                                             <StrifeBannerLogo className="strife-splash-banner-logo green" />
//                                                         </div>
//                                                         <div className="sbm-ty-flex">
//                                                             Thank you for using and taking the time to look at $TR!F3. Hope you've enjoyed it.
//                                                         </div>
//                                                         <div className='sbm-ty-footer-flex'>
//                                                             <span className='splash-footer-nav-link-inner-text'>$TR!F3 is a Discord Clone built by Michael A. Ramoutar. </span>
//                                                         </div>
//                                                         <div className='sbm-social-media-flex'>
//                                                             <a className="splash-footer-socialMediaLink" href='https://www.linkedin.com/in/michael-ramoutar/' title="Connect With Me On LinkedIn" target="_blank">
//                                                                 <LinkedInIcon className="splash-footer-socialMediaIcon sbm-social-media-icons" />
//                                                             </a>
//                                                             <a className="splash-footer-nav-link" href="https://github.com/miker704" target="_blank">
//                                                                 <GitHubIcon className="splash-footer-socialMediaIcon sbm-social-media-icons" />
//                                                             </a>
//                                                             <a className="splash-footer-nav-link" href="https://angel.co/u/michael-ramoutar-1" target="_blank">
//                                                                 <AngelListIcon className="splash-footer-socialMediaIcon sbm-social-media-icons" />
//                                                             </a>
//                                                             <a className="splash-footer-nav-link" href="https://discordapp.com/users/765241782949642280" target="_blank">
//                                                                 <WumpusIcon className="splash-footer-socialMediaIcon sbm-social-media-icons" />
//                                                             </a>
//                                                             <a className="splash-footer-nav-link" href="https://miker704.github.io/portfolio-website/" target="_blank">
//                                                                 <FolderIcon className="splash-footer-socialMediaIcon sbm-social-media-icons" />
//                                                             </a>
//                                                         </div>
//                                                         <div className="server-boost-modal-bottom-sep"></div>
//                                                     </div>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div>
//                                 <div className="sbm-button-footer-container">
//                                     <div className="bsspm-foot-right">
//                                         <button type="button" className="npsm-upgrade-to-nitro-button"
//                                             onClick={(e) => props.handleCloseModal(e)}>
//                                             <div className="look-filled-button-contents global-button-contents">Exit</div>
//                                         </button>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </REACT_PORTAL>
//         )
//     }
// }

// export default BoostServerSelectPlanModal;