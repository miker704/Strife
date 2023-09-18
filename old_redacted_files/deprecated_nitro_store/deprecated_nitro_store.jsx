// import React from "react";
// import NitroHeaderNavBarContainer from "../nitro_header_nav_bar/nitro_header_nav_bar_container";
// import { AcceptFriendRequestIcon, ChatPresentIcon, CloseXIcon, ComputerStreamingIcon, GemBoostIcon, MiniProfileCardIcon, NitroBasicBannerIcon, NitroHappyFaceIcon, NitroStoreSuperReactionIcon, NitroTier2LogoIcon, NitroUpArrowIcon, SparkleStarIcon, StrifeNitroBadgeIcon, StrifeNitroStoreBackground } from "../../front_end_svgs/Strife_svgs";
// import DMNavBarContainer from "../../dm_servers/dm_nav_bar/dm_nav_bar_container";
// import { useEffect, useState, useRef } from "react";
// import { appPullerPullAnimation, appPullerPullAndHoldAnimation } from "../../../utils/appPullerAnimation_api_util";
// import SubscribeToStrifeNitroBasicModalContainer from "../subscribe_to_nitro_basic_modal/subscribe_to_nitro_basic_modal_container";
// import SubscribeToStrifeNitroProModalContainer from "../subscribe_to_nitro_modal/subscribe_to_nitro_pro_modal_container";
// import NitroSelectionModalContainer from "../nitro_selection_modal/nitro_selection_modal_container";

// const NitroStore = (props) => {

//     const [spinCubes, setSpinCubes] = React.useState(true);
//     const [gift, setGift] = React.useState(false);
//     const [currentSubModal, setCurrentSubModal] = useState({
//         nitroPlanSelection: false,
//         subToNitroPro: false,
//         subToNitroBasic: false,
//     });



//     useEffect(() => {
//         setSpinCubes(true);
//         props.reSyncCurrentUser(props.currentUser.id).then(() => {
//             setTimeout(() => {
//                 setSpinCubes(false);
//             }, 1000);
//         });
//     }, []);

//     const openModal = (field, isGift = false) => {
//         setCurrentSubModal(previousState => {
//             return { ...previousState, [field]: true };
//         });
//         setGift(isGift);
//     }
//     const closeForm = (field) => {
//         setCurrentSubModal(previousState => {
//             return { ...previousState, [field]: false };
//         });
//         setGift(false);
//     }

//     const renderNitroBasicModal = () => {
//         if (currentSubModal.subToNitroBasic === true) {
//             return (
//                 <SubscribeToStrifeNitroBasicModalContainer closeSubMod={closeForm} formName={"subToNitroBasic"} gifted={gift} />
//             )
//         }
//     }

//     const renderNitroProModal = () => {
//         if (currentSubModal.subToNitroPro === true) {
//             return (
//                 <SubscribeToStrifeNitroProModalContainer closeSubMod={closeForm} formName={"subToNitroPro"} gifted={gift} />
//             )
//         }
//     }

//     const renderNitroPlanSelectionModal = () => {
//         if (currentSubModal.nitroPlanSelection === true) {
//             return (
//                 <NitroSelectionModalContainer closeSubMod={closeForm} formName={"nitroPlanSelection"} gifted={gift} />
//             )
//         }
//     }

//     let spinningCubes = spinCubes ? (
//         <div className="nitro-store-premium-container">
//             <div className="nitro-spinning-cube-loading-container">
//                 <span className={`spinning-cubes`}>
//                     <span className="inner-cubes moving-cubes">
//                         <span className="inner-cube"></span>
//                         <span className="inner-cube"></span>
//                     </span>
//                 </span>
//             </div>
//         </div>
//     ) : (null);

//     return (
//         <div className="server-main-base">
//             <div className="server-content">
//                 <DMNavBarContainer />
//                 <div className="nitro-main-container">
//                     <div className="nitro-home-wrapper">
//                         <NitroHeaderNavBarContainer />
//                         {renderNitroBasicModal()}
//                         {renderNitroProModal()}
//                         {renderNitroPlanSelectionModal()}
//                         <div className="nitro-scroller auto-scroll-raw-attributes global-scroller-base" style={{ overflow: `hidden scroll`, paddingRight: `0px` }}>
//                             {spinningCubes}
//                             {
//                                 spinCubes ? (null) : (
//                                     <div className="nitro-store-premium-container">
//                                         <div className="nitro-store-tier-0">
//                                             <StrifeNitroStoreBackground className="strife-nitro-svg-background" />
//                                             <div className="nitro-heroscreen">
//                                                 <div className="nitro-heroscreen-text-container">
//                                                     <h2 className="nitro-heroscreen-h2">Unleash More Fun with $TR!F3 N!TR0</h2>
//                                                     <div className="nitro-heroscreen-subtext">Plans start at only $2.99/month. Cancel anytime</div>
//                                                     <div className="nitro-heroscreen-button-container">
//                                                         <button type="button" className="nitro-heroscreen-sub-button" onClick={(e) => openModal("nitroPlanSelection")}>
//                                                             <div className="global-button-contents look-filled-button-contents nitro-heroscreen-sub-button-contents">
//                                                                 <StrifeNitroBadgeIcon className="nitro-heroscreen-sub-icon" height={24} width={24} />
//                                                                 <span className="nitro-heroscreen-sub-button-text">Subscribe</span>
//                                                             </div>
//                                                         </button>
//                                                         <button type="button" className="nitro-heroscreen-gift-button" onClick={(e) => openModal("nitroPlanSelection", true)}>
//                                                             <div className="global-button-contents look-filled-button-contents nitro-heroscreen-gift-button-contents">
//                                                                 <ChatPresentIcon className="nitro-present-icon" />
//                                                                 <span className="nitro-heroscreen-gift-button-text">Gift N!TR0</span>
//                                                             </div>
//                                                         </button>
//                                                     </div>

//                                                 </div>
//                                                 <SparkleStarIcon className="hero-sparkle-star1 nitro-sparkle-star-icon" />
//                                                 <SparkleStarIcon className="hero-sparkle-star2 nitro-sparkle-star-icon" />
//                                                 <SparkleStarIcon className="hero-sparkle-star3 nitro-sparkle-star-icon" />
//                                                 <SparkleStarIcon className="hero-sparkle-star4 nitro-sparkle-star-icon" />
//                                             </div>
//                                             <div className="nitro-premium-cards-container">
//                                                 <div className="nitro-premium-cards">
//                                                     <div className="tier-card-0">
//                                                         <div className="wumpus-card-img-container">
//                                                             <div className="wumpus-img-wrapper">
//                                                                 <img alt=" " className="tier-card-1-img" />
//                                                             </div>
//                                                         </div>
//                                                         <div>
//                                                             <div>
//                                                                 <div className="tier-card-1-logo-container">
//                                                                     <NitroBasicBannerIcon className="tier-card-1-logo" />
//                                                                 </div>
//                                                                 <h2 className="tier-card-1-h2">
//                                                                     <span className="tier-price">$2.99</span> / month
//                                                                 </h2>
//                                                                 <div className="tier-benefits">
//                                                                     <NitroUpArrowIcon className="tier-card-1-icons" />
//                                                                     <div className="tier-benefits-text">50MB uploads</div>
//                                                                 </div>
//                                                                 <div className="tier-benefits">
//                                                                     <NitroHappyFaceIcon className="tier-card-1-icons" />
//                                                                     <div className="tier-benefits-text">Custom emoji anywhere</div>
//                                                                 </div>
//                                                                 <div className="tier-benefits">
//                                                                     <StrifeNitroBadgeIcon className="tier-card-1-icons" height={24} width={24} />
//                                                                     <div className="tier-benefits-text">Special N!TR0 badge on your profile</div>
//                                                                 </div>
//                                                                 <div className="tier-benefits">
//                                                                     <NitroStoreSuperReactionIcon className="tier-card-1-icons" />
//                                                                     <div className="tier-benefits-text">2 Super Reactions per week</div>
//                                                                 </div>
//                                                             </div>
//                                                         </div>
//                                                         <button type="button" className="tier-card-button" onClick={(e) => openModal("subToNitroBasic")}>
//                                                             <div className="global-button-contents look-filled-button-contents tier-card-sub-button">
//                                                                 <span className="nitro-heroscreen-sub-button-text">Subscribe</span>
//                                                             </div>
//                                                         </button>
//                                                     </div>
//                                                     <div className="tier-card-2">
//                                                         <div className="wumpus-card-img-container">
//                                                             <div className="wumpus-img-wrapper">
//                                                                 <img alt=" " className="tier-card-2-img" />
//                                                             </div>
//                                                         </div>
//                                                         <div>
//                                                             <NitroTier2LogoIcon className="tier-card-2-banner-logo" />
//                                                             <h2 className="tier-card-1-h2">
//                                                                 <span className="tier-price">$9.99</span> / month
//                                                             </h2>
//                                                             <div className="tier-benefits">
//                                                                 <NitroUpArrowIcon className="tier-card-1-icons" />
//                                                                 <div className="tier-benefits-text">500MB uploads</div>
//                                                             </div>
//                                                             <div className="tier-benefits">
//                                                                 <NitroHappyFaceIcon className="tier-card-1-icons" />
//                                                                 <div className="tier-benefits-text">Custom emoji anywhere</div>
//                                                             </div>
//                                                             <div className="tier-benefits">
//                                                                 <ComputerStreamingIcon className="tier-card-1-icons" />
//                                                                 <div className="tier-benefits-text">HD video streaming</div>
//                                                             </div>
//                                                             <div className="tier-benefits">
//                                                                 <NitroStoreSuperReactionIcon className="tier-card-1-icons" />
//                                                                 <div className="tier-benefits-text">5 Super Reactions per week</div>
//                                                             </div>
//                                                             <div className="tier-benefits">
//                                                                 <GemBoostIcon className="tier-card-1-icons" />
//                                                                 <div className="tier-benefits-text">2 Server Boosts</div>
//                                                             </div>
//                                                             <div className="tier-benefits">
//                                                                 <MiniProfileCardIcon className="tier-card-1-icons" />
//                                                                 <div className="tier-benefits-text">Custom profiles and more!</div>
//                                                             </div>
//                                                         </div>
//                                                         <button type="button" className="tier-card-button" onClick={(e) => openModal("subToNitroPro")}>
//                                                             <div className="global-button-contents look-filled-button-contents tier-card-sub-button">
//                                                                 <span className="nitro-heroscreen-sub-button-text">Subscribe</span>
//                                                             </div>
//                                                         </button>
//                                                     </div>
//                                                 </div>
//                                             </div>
//                                             <div className="nitro-perks-container">
//                                                 <h2 className="nitro-perks-container-h2">Favorite $TR!F3 N!TR0 Perks</h2>
//                                                 <div className="bigNitroPerkCardContainer">
//                                                     <div className="bigNitroPerkCard">
//                                                         <h2 className="bigNitroPerkCard-h2">Hype, roast, and meme with custom emoji anywhere</h2>
//                                                         <img className="bigNitroPerkCard-img-1" alt=" " />
//                                                     </div>
//                                                     <div className="bigNitroPerkCard">
//                                                         <h2 className="bigNitroPerkCard-h2">Unlock perks for your communities with 2 Server Boosts</h2>
//                                                         <img className="bigNitroPerkCard-img-2" alt=" " />
//                                                     </div>
//                                                     <div className="bigNitroPerkCard">
//                                                         <h2 className="bigNitroPerkCard-h2">Stream apps and games in sweet, sweet HD</h2>
//                                                         <img className="bigNitroPerkCard-img-3" alt=" " />
//                                                     </div>
//                                                     <div className="bigNitroPerkCard">
//                                                         <h2 className="bigNitroPerkCard-h2">From clips to pics, share away with bigger file uploads</h2>
//                                                         <img className="bigNitroPerkCard-img-4" alt=" " />
//                                                     </div>
//                                                 </div>
//                                                 <div className="smallNitroPerkCardContainer">
//                                                     <div className="smallNitroPerkCard client-card">
//                                                         <img className="smallNitroPerkCard-img-1" alt=" " />
//                                                         <div>
//                                                             <h2 className="smallNitroPerkCard-h2">Color Themes</h2>
//                                                             <div className="smallNitroPerkCard-subtext">Add your vibe to $TR!F3 with unique theme colors.</div>
//                                                         </div>
//                                                     </div>
//                                                     <div className="smallNitroPerkCard">
//                                                         <img className="smallNitroPerkCard-img-2" alt=" " />
//                                                         <div>
//                                                             <h2 className="smallNitroPerkCard-h2">Custom Sounds Anywhere</h2>
//                                                             <div className="smallNitroPerkCard-subtext">React with Soundboard custom sounds in all voice channels.</div>
//                                                         </div>
//                                                     </div>
//                                                     <div className="smallNitroPerkCard">
//                                                         <img className="smallNitroPerkCard-img-3" alt=" " />
//                                                         <div>
//                                                             <h2 className="smallNitroPerkCard-h2">Super Reactions</h2>
//                                                             <div className="smallNitroPerkCard-subtext">Hype up the chat with action-packed, animated reactions.</div>
//                                                         </div>
//                                                     </div>
//                                                     <div className="smallNitroPerkCard">
//                                                         <img className="smallNitroPerkCard-img-4" alt=" " />
//                                                         <div>
//                                                             <h2 className="smallNitroPerkCard-h2">Custom Profiles</h2>
//                                                             <div className="smallNitroPerkCard-subtext">Use a different avatar, profile theme, banner, and bio in each of your servers.
//                                                                 <a className="smallNitroPerkCard-anchor" role="button" tabIndex={0} onClick={(e) => { appPullerPullAndHoldAnimation(); props.openModal('userSettings'); }}>Try it out.</a>
//                                                             </div>
//                                                         </div>
//                                                     </div>
//                                                     <div className="smallNitroPerkCard">
//                                                         <img className="smallNitroPerkCard-img-5" alt=" " />
//                                                         <div>
//                                                             <h2 className="smallNitroPerkCard-h2">Special Sticker Access</h2>
//                                                             <div className="smallNitroPerkCard-subtext">Use custom stickers anywhere.</div>
//                                                         </div>
//                                                     </div>
//                                                     <div className="smallNitroPerkCard">
//                                                         <img className="smallNitroPerkCard-img-6" alt=" " />
//                                                         <div>
//                                                             <h2 className="smallNitroPerkCard-h2">N!TR0 Badge</h2>
//                                                             <div className="smallNitroPerkCard-subtext">Show off your N!TR0 membership with a badge in your profile.</div>
//                                                         </div>
//                                                     </div>
//                                                     <div className="smallNitroPerkCard">
//                                                         <img className="smallNitroPerkCard-img-7" alt=" " />
//                                                         <div>
//                                                             <h2 className="smallNitroPerkCard-h2">More Servers</h2>
//                                                             <div className="smallNitroPerkCard-subtext">Join up to 200 of your favorite servers.</div>
//                                                         </div>
//                                                     </div>
//                                                     <div className="smallNitroPerkCard">
//                                                         <img className="smallNitroPerkCard-img-8" alt=" " />
//                                                         <div>
//                                                             <h2 className="smallNitroPerkCard-h2">Longer Messages</h2>
//                                                             <div className="smallNitroPerkCard-subtext">Say what's on your mind with an increased character count.</div>
//                                                         </div>
//                                                     </div>
//                                                 </div>

//                                             </div>
//                                             <div className="nitro-plan-comparison-container">
//                                                 <div className="nitro-plan-comparison-container-root">
//                                                     <h2 className="nitro-plan-comparison-container-root-header">Pick the plan that works best for you</h2>
//                                                     <div className="nitro-plan-comparison-table-wrapper">
//                                                         <div className="tier2ColumnOuterWrapper">
//                                                             <div className="mostPopularTierPlan">
//                                                                 <h2 className="mostPopularTierPlan-header">Most Popular</h2>
//                                                             </div>
//                                                         </div>
//                                                         <table className="nitro-tier-plan-table">
//                                                             <thead>
//                                                                 <tr className="nitro-tier-plan-table-header-row">
//                                                                     <th scope="col" className="nitro-tier-headerCell1">
//                                                                         <h2 className="nitro-tier-headerCell1-header">Pricing and Features</h2>
//                                                                     </th>
//                                                                     <th scope="col" className="nitro-tier-headerCell2">
//                                                                         <img className="nitro-tier-table-nitro-basic-img" alt=" " />
//                                                                     </th>
//                                                                     <th scope="col" className="nitro-tier-headerCell3">
//                                                                         <img className="nitro-tier-table-nitro-img" alt=" " />
//                                                                     </th>
//                                                                 </tr>
//                                                             </thead>
//                                                             <tbody>
//                                                                 <tr className="nitro-tier-plan-table-normal-row">
//                                                                     <th scope="row" className="nitroTableCellLabel">
//                                                                         <div className="nitroTableCellLabelContents">Price</div>
//                                                                     </th>
//                                                                     <td className="nitroTdCell">
//                                                                         <div className="nitroTdCellContents">$2.99/month</div>
//                                                                     </td>
//                                                                     <td className="nitroTdCell">
//                                                                         <div className="nitroTdCellContents">$9.99/month</div>
//                                                                     </td>
//                                                                 </tr>
//                                                                 <tr className="nitro-tier-plan-table-normal-row">
//                                                                     <th scope="row" className="nitroTableCellLabel">
//                                                                         <div className="nitroTableCellLabelContents">Custom emoji anywhere and make them animated</div>
//                                                                     </th>
//                                                                     <td className="nitroTdCell">
//                                                                         <AcceptFriendRequestIcon className="nitroTdCellCheckMark" />
//                                                                         <div className="nitroTdCellContentsHiddenVisually">Included</div>
//                                                                     </td>
//                                                                     <td className="nitroTdCell">
//                                                                         <AcceptFriendRequestIcon className="nitroTdCellCheckMark" />
//                                                                         <div className="nitroTdCellContentsHiddenVisually">Included</div>
//                                                                     </td>
//                                                                 </tr>
//                                                                 <tr className="nitro-tier-plan-table-normal-row">
//                                                                     <th scope="row" className="nitroTableCellLabel">
//                                                                         <div className="nitroTableCellLabelContents">Custom stickers anywhere</div>
//                                                                     </th>
//                                                                     <td className="nitroTdCell">
//                                                                         <AcceptFriendRequestIcon className="nitroTdCellCheckMark" />
//                                                                         <div className="nitroTdCellContentsHiddenVisually">Included</div>
//                                                                     </td>
//                                                                     <td className="nitroTdCell">
//                                                                         <AcceptFriendRequestIcon className="nitroTdCellCheckMark" />
//                                                                         <div className="nitroTdCellContentsHiddenVisually">Included</div>
//                                                                     </td>
//                                                                 </tr>
//                                                                 <tr className="nitro-tier-plan-table-normal-row">
//                                                                     <th scope="row" className="nitroTableCellLabel">
//                                                                         <div className="nitroTableCellLabelContents">Super Reactions</div>
//                                                                     </th>
//                                                                     <td className="nitroTdCell">
//                                                                         <div className="nitroTdCellContents">2/week</div>
//                                                                     </td>
//                                                                     <td className="nitroTdCell">
//                                                                         <div className="nitroTdCellContents">5/week</div>
//                                                                     </td>
//                                                                 </tr>
//                                                                 <tr className="nitro-tier-plan-table-normal-row">
//                                                                     <th scope="row" className="nitroTableCellLabel">
//                                                                         <div className="nitroTableCellLabelContents">Bigger file sharing</div>
//                                                                     </th>
//                                                                     <td className="nitroTdCell">
//                                                                         <div className="nitroTdCellContents">50 MB</div>
//                                                                     </td>
//                                                                     <td className="nitroTdCell">
//                                                                         <div className="nitroTdCellContents">500 MB</div>
//                                                                     </td>
//                                                                 </tr>
//                                                                 <tr className="nitro-tier-plan-table-normal-row">
//                                                                     <th scope="row" className="nitroTableCellLabel">
//                                                                         <div className="nitroTableCellLabelContents">HD streaming</div>
//                                                                     </th>
//                                                                     <td className="nitroTdCell">
//                                                                         <CloseXIcon className="nitroTdCellXMark" />
//                                                                         <div className="nitroTdCellContentsHiddenVisually">Not included</div>
//                                                                     </td>
//                                                                     <td className="nitroTdCell">
//                                                                         <div className="nitroTdCellContents">Up to 4K and 60fps</div>
//                                                                     </td>
//                                                                 </tr>
//                                                                 <tr className="nitro-tier-plan-table-normal-row">
//                                                                     <th scope="row" className="nitroTableCellLabel">
//                                                                         <div className="nitroTableCellLabelContents">2 Boosts + 30% off extra Boosts</div>
//                                                                     </th>
//                                                                     <td className="nitroTdCell">
//                                                                         <CloseXIcon className="nitroTdCellXMark" />
//                                                                         <div className="nitroTdCellContentsHiddenVisually">Not included</div>
//                                                                     </td>
//                                                                     <td className="nitroTdCell">
//                                                                         <AcceptFriendRequestIcon className="nitroTdCellCheckMark" />
//                                                                         <div className="nitroTdCellContentsHiddenVisually">Included</div>
//                                                                     </td>
//                                                                 </tr>
//                                                                 <tr className="nitro-tier-plan-table-normal-row">
//                                                                     <th scope="row" className="nitroTableCellLabel">
//                                                                         <div className="nitroTableCellLabelContents">Animated avatar, banner, and profile theme</div>
//                                                                     </th>
//                                                                     <td className="nitroTdCell">
//                                                                         <CloseXIcon className="nitroTdCellXMark" />
//                                                                         <div className="nitroTdCellContentsHiddenVisually">Not included</div>
//                                                                     </td>
//                                                                     <td className="nitroTdCell">
//                                                                         <AcceptFriendRequestIcon className="nitroTdCellCheckMark" />
//                                                                         <div className="nitroTdCellContentsHiddenVisually">Included</div>
//                                                                     </td>
//                                                                 </tr>
//                                                                 <tr className="nitro-tier-plan-table-normal-row">
//                                                                     <th scope="row" className="nitroTableCellLabel">
//                                                                         <div className="nitroTableCellLabelContents">Custom server profiles</div>
//                                                                     </th>
//                                                                     <td className="nitroTdCell">
//                                                                         <CloseXIcon className="nitroTdCellXMark" />
//                                                                         <div className="nitroTdCellContentsHiddenVisually">Not included</div>
//                                                                     </td>
//                                                                     <td className="nitroTdCell">
//                                                                         <AcceptFriendRequestIcon className="nitroTdCellCheckMark" />
//                                                                         <div className="nitroTdCellContentsHiddenVisually">Included</div>
//                                                                     </td>
//                                                                 </tr>
//                                                                 <tr className="nitro-tier-plan-table-normal-row">
//                                                                     <th scope="row" className="nitroTableCellLabel">
//                                                                         <div className="nitroTableCellLabelContents">Colors for your $TR!F3 theme</div>
//                                                                     </th>
//                                                                     <td className="nitroTdCell">
//                                                                         <CloseXIcon className="nitroTdCellXMark" />
//                                                                         <div className="nitroTdCellContentsHiddenVisually">Not included</div>
//                                                                     </td>
//                                                                     <td className="nitroTdCell">
//                                                                         <AcceptFriendRequestIcon className="nitroTdCellCheckMark" />
//                                                                         <div className="nitroTdCellContentsHiddenVisually">Included</div>
//                                                                     </td>
//                                                                 </tr>
//                                                                 <tr className="nitro-tier-plan-table-normal-row">
//                                                                     <th scope="row" className="nitroTableCellLabel">
//                                                                         <div className="nitroTableCellLabelContents">N!TR0 badge on your profile</div>
//                                                                     </th>
//                                                                     <td className="nitroTdCell">
//                                                                         <AcceptFriendRequestIcon className="nitroTdCellCheckMark" />
//                                                                         <div className="nitroTdCellContentsHiddenVisually">Included</div>
//                                                                     </td>
//                                                                     <td className="nitroTdCell">
//                                                                         <AcceptFriendRequestIcon className="nitroTdCellCheckMark" />
//                                                                         <div className="nitroTdCellContentsHiddenVisually">Included</div>
//                                                                     </td>
//                                                                 </tr>
//                                                                 <tr className="nitro-tier-plan-table-normal-row">
//                                                                     <th scope="row" className="nitroTableCellLabel">
//                                                                         <div className="nitroTableCellLabelContents">Custom video backgrounds</div>
//                                                                     </th>
//                                                                     <td className="nitroTdCell">
//                                                                         <AcceptFriendRequestIcon className="nitroTdCellCheckMark" />
//                                                                         <div className="nitroTdCellContentsHiddenVisually">Included</div>
//                                                                     </td>
//                                                                     <td className="nitroTdCell">
//                                                                         <AcceptFriendRequestIcon className="nitroTdCellCheckMark" />
//                                                                         <div className="nitroTdCellContentsHiddenVisually">Included</div>
//                                                                     </td>
//                                                                 </tr>
//                                                                 <tr className="nitro-tier-plan-table-normal-row">
//                                                                     <th scope="row" className="nitroTableCellLabel">
//                                                                         <div className="nitroTableCellLabelContents">Custom Sounds Anywhere</div>
//                                                                     </th>
//                                                                     <td className="nitroTdCell">
//                                                                         <CloseXIcon className="nitroTdCellXMark" />
//                                                                         <div className="nitroTdCellContentsHiddenVisually">Not included</div>
//                                                                     </td>
//                                                                     <td className="nitroTdCell">
//                                                                         <AcceptFriendRequestIcon className="nitroTdCellCheckMark" />
//                                                                         <div className="nitroTdCellContentsHiddenVisually">Included</div>
//                                                                     </td>
//                                                                 </tr>
//                                                                 <tr className="nitro-tier-plan-table-normal-row">
//                                                                     <th scope="row" className="nitroTableCellLabel">
//                                                                         <div className="nitroTableCellLabelContents">Join up to 200 servers</div>
//                                                                     </th>
//                                                                     <td className="nitroTdCell">
//                                                                         <CloseXIcon className="nitroTdCellXMark" />
//                                                                         <div className="nitroTdCellContentsHiddenVisually">Not included</div>
//                                                                     </td>
//                                                                     <td className="nitroTdCell">
//                                                                         <AcceptFriendRequestIcon className="nitroTdCellCheckMark" />
//                                                                         <div className="nitroTdCellContentsHiddenVisually">Included</div>
//                                                                     </td>
//                                                                 </tr>
//                                                                 <tr className="nitro-tier-plan-table-normal-row">
//                                                                     <th scope="row" className="nitroTableCellLabel">
//                                                                         <div className="nitroTableCellLabelContents">Longer messages up to 4000 characters</div>
//                                                                     </th>
//                                                                     <td className="nitroTdCell">
//                                                                         <CloseXIcon className="nitroTdCellXMark" />
//                                                                         <div className="nitroTdCellContentsHiddenVisually">Not included</div>
//                                                                     </td>
//                                                                     <td className="nitroTdCell">
//                                                                         <AcceptFriendRequestIcon className="nitroTdCellCheckMark" />
//                                                                         <div className="nitroTdCellContentsHiddenVisually">Included</div>
//                                                                     </td>
//                                                                 </tr>
//                                                                 <tr className="nitro-tier-plan-table-bottom-row">
//                                                                     <th scope="row" className="nitroTableCellLabel"></th>
//                                                                     <td className="nitroTdCell nitroTdButtonCell">
//                                                                         <button type="button" className="nitro-heroscreen-sub-button table-button-resize" onClick={(e) => openModal("subToNitroBasic")}>
//                                                                             <div className="global-button-contents look-filled-button-contents nitro-heroscreen-sub-button-contents">
//                                                                                 <span className="nitro-heroscreen-sub-button-text">Subscribe</span>
//                                                                             </div>
//                                                                         </button>
//                                                                         <button type="button" className="nitro-heroscreen-gift-button table-button-resize" onClick={(e) => openModal("subToNitroBasic", true)}>
//                                                                             <div className="global-button-contents look-filled-button-contents nitro-heroscreen-gift-button-contents">
//                                                                                 <ChatPresentIcon className="nitro-present-icon" />
//                                                                                 <span className="nitro-heroscreen-gift-button-text">Gift N!TR0 Basic</span>
//                                                                             </div>
//                                                                         </button>
//                                                                     </td>
//                                                                     <td className="nitroTdCell nitroTdBottomBorderRadius nitroTdButtonCell">
//                                                                         <button type="button" className="nitro-heroscreen-sub-button table-button-resize" onClick={(e) => openModal("subToNitroPro")}>
//                                                                             <div className="global-button-contents look-filled-button-contents nitro-heroscreen-sub-button-contents">
//                                                                                 <span className="nitro-heroscreen-sub-button-text">Subscribe</span>
//                                                                             </div>
//                                                                         </button>
//                                                                         <button type="button" className="nitro-heroscreen-gift-button table-button-resize" onClick={(e) => openModal("subToNitroPro", true)}>
//                                                                             <div className="global-button-contents look-filled-button-contents nitro-heroscreen-gift-button-contents">
//                                                                                 <ChatPresentIcon className="nitro-present-icon" />
//                                                                                 <span className="nitro-heroscreen-gift-button-text">Gift N!TR0</span>
//                                                                             </div>
//                                                                         </button>
//                                                                     </td>
//                                                                 </tr>
//                                                             </tbody>
//                                                         </table>
//                                                     </div>
//                                                 </div>
//                                                 <div className="nitro-plan-table-left-img-container">
//                                                     <img className="nitro-plan-table-left-img" alt=" " />
//                                                 </div>
//                                                 <div className="nitro-plan-table-right-img-container">
//                                                     <img className="nitro-plan-table-right-img" alt=" " />
//                                                 </div>
//                                             </div>

//                                             <div className="nitro-footer">
//                                                 <h2 className="nitro-footer-header">Unleash the fun with $TR!F3 N!TR0!</h2>
//                                                 <div className="nitro-footer-button-container">
//                                                     <button type="button" className="nitro-heroscreen-sub-button" onClick={(e) => openModal("nitroPlanSelection")}>
//                                                         <div className="global-button-contents look-filled-button-contents nitro-heroscreen-sub-button-contents">
//                                                             <StrifeNitroBadgeIcon className="nitro-heroscreen-sub-icon" height={24} width={24} />
//                                                             <span className="nitro-heroscreen-sub-button-text">Subscribe</span>
//                                                         </div>
//                                                     </button>
//                                                     <button type="button" className="nitro-heroscreen-gift-button" onClick={(e) => openModal("nitroPlanSelection", true)}>
//                                                         <div className="global-button-contents look-filled-button-contents nitro-heroscreen-gift-button-contents">
//                                                             <ChatPresentIcon className="nitro-present-icon" />
//                                                             <span className="nitro-heroscreen-gift-button-text">Gift N!TR0</span>
//                                                         </div>
//                                                     </button>
//                                                 </div>
//                                                 <SparkleStarIcon className="sparkleStar-upper-left footer-sparkleStar" />
//                                                 <SparkleStarIcon className="sparkleStar-left-center footer-sparkleStar" />
//                                                 <SparkleStarIcon className="sparkleStar-upper-right footer-sparkleStar" />
//                                                 <SparkleStarIcon className="sparkleStar-right-center footer-sparkleStar" />
//                                             </div>

//                                             <div className="nitro-img-wrapper">
//                                                 <img alt=" " className="nitro-bottom-img" />
//                                             </div>
//                                         </div>
//                                         <div className="nitro-bottom-visibility-sensor"></div>
//                                     </div>
//                                 )
//                             }
//                             <div className="nitro-empty-div"></div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>

//     )

// }

// export default NitroStore;