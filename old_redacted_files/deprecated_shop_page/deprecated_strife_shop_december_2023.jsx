// import React from "react";
// import StrifeShopHeaderNavBarContainer from "../strife_shop_header_nav_bar/strife_shop_header_nav_bar_container";
// import DMNavBarContainer from "../../dm_servers/dm_nav_bar/dm_nav_bar_container";
// import { useEffect, useState, useRef } from "react";
// import { EnableCameraViewIcon, StrifeBannerLogo, StrifeNitroBadgeIcon } from "../../front_end_svgs/Strife_svgs";
// import SubscribeToStrifeNitroProModalContainer from "../../nitro/subscribe_to_nitro_modal/subscribe_to_nitro_pro_modal_container";
// import ProfileEffectPreviewModalContainer from "../profile_effect_preview_modal/profile_effect_preview_modal_container";
// import AvatarDecorationPreviewModalContainer from "../avatar_decorations_preview_modal/avatar_decoration_preview_modal_container";

// const StrifeShop = (props) => {

//     const [spinCubes, setSpinCubes] = React.useState(true);
//     const [gift, setGift] = React.useState(false);
//     const [currentSubModal, setCurrentSubModal] = useState({
//         nitroPlanSelection: false,
//         subToNitroPro: false,
//         subToNitroBasic: false,
//         profileEffectModal: false,
//         avatarDecorationPreviewModal: false,
//     });

//     const [leavesHover, setLeavesHover] = React.useState(false);
//     const [vinesHover, setVinesHover] = React.useState(false);
//     const [shurikenHover, setShurikenHover] = React.useState(false);
//     const [sakuraDreamsHover, setSakuraDreamsHover] = React.useState(false);
//     const [shatterHover, setShatterHover] = React.useState(false);


//     const [profileEffectThemeType, setProfileEffectThemeType] = React.useState("");
//     const [profileEffectObj, setProfileEffectThemeObj] = React.useState("");
//     const [avatarEffectObj, setAvatarEffectThemeObj] = React.useState("");

//     useEffect(() => {
//         props.reSyncCurrentUser(props.currentUser.id);
//     }, []);

//     const openModal = (field, profileEffectTheme = "", profileThemeObj = "", avatarEffectObj = "", isGift = false) => {
//         setCurrentSubModal(previousState => {
//             return { ...previousState, [field]: true };
//         });

//         setGift(isGift);
//         setProfileEffectThemeType(profileEffectTheme);
//         setProfileEffectThemeObj(profileThemeObj);
//         setAvatarEffectThemeObj(avatarEffectObj);
//     }
//     const closeForm = (field) => {
//         setCurrentSubModal(previousState => {
//             return { ...previousState, [field]: false };
//         });
//         setGift(false);
//         setProfileEffectThemeType("");
//         setProfileEffectThemeObj("");
//         setAvatarEffectThemeObj("");
//     }

//     const renderNitroProModal = () => {
//         if (currentSubModal.subToNitroPro === true) {
//             return (
//                 <SubscribeToStrifeNitroProModalContainer closeSubMod={closeForm} formName={"subToNitroPro"} gifted={gift} />
//             )
//         }
//     }

//     const renderProfileEffectModal = () => {
//         if (currentSubModal.profileEffectModal === true) {
//             return (
//                 <ProfileEffectPreviewModalContainer closeSubMod={closeForm}
//                     formName={"profileEffectModal"} profileEffectThemeType={profileEffectThemeType}
//                     profileThemeObj={profileEffectObj}
//                 />
//             )
//         }
//     }

//     const renderAvatarDecorationModal = () => {
//         if (currentSubModal.avatarDecorationPreviewModal === true) {
//             return (
//                 <AvatarDecorationPreviewModalContainer closeSubMod={closeForm}
//                     formName={"avatarDecorationPreviewModal"} profileEffectThemeType={profileEffectThemeType}
//                     avatarEffectObj={avatarEffectObj}
//                 />
//             )
//         }
//     }

//     return (
//         <div className="server-main-base">
//             <div className="server-content">
//                 <DMNavBarContainer />
//                 <div className="shop-main-container">
//                     <StrifeShopHeaderNavBarContainer />
//                     {renderNitroProModal()}
//                     {renderProfileEffectModal()}
//                     {renderAvatarDecorationModal()}
//                     <div className="shop-scroll auto-scroll-raw-attributes global-scroller-base" style={{ overflow: `hidden scroll`, paddingRight: `0px` }}>
//                         <div className="shop-page-wrapper">
//                             <main className="shop-main-page">

//                                 <div className="shop-hero-banner">
//                                     <div className="shop-hero-description shop-hero-description-with-side-bar">
//                                         <div className="shop-hero-eyebrow" style={{ color: `white` }}>
//                                             <StrifeNitroBadgeIcon className="shop-hero-eyebrow-premium-nitro-ball-icon" height={24} width={24} />
//                                             <span className="shop-hero-eyebrow-span-txt">N!TR0 EARLY ACCESS</span>
//                                         </div>
//                                         <h2 className="shop-hero-h2" style={{ color: `white` }}>Ready for a new look?</h2>
//                                         <div className="shop-hero-subtitle" style={{ color: `white` }}>
//                                             Charming. Fierce. Hungry. Whatever your vibe, buy and collect your favorite styles for your profile for any occasion. Only with N!TR0.
//                                         </div>
//                                         <button type="button" className="shop-buttons shop-hero-button global-button-growth global-button-size-medium button-look-inverted"
//                                             onClick={(e) => { e.stopPropagation(); openModal("subToNitroPro"); }}>
//                                             <div className="global-button-contents look-filled-button-contents shopPremiumSubscribeButton">
//                                                 <StrifeNitroBadgeIcon className="shop-premium-nitro-ball-icon" height={24} width={24} />
//                                                 <span className="shopbuttonText">Unlock Shop with Nitro</span>
//                                             </div>
//                                         </button>
//                                     </div>
//                                     <div className="shop-hero-banner-background-wrapper">
//                                         <img className="shop-hero-banner-background-img" alt=" " />
//                                     </div>
//                                     <img className="shop-hero-banner-foreground" alt=" " />
//                                     <img className="shop-hero-banner-hand" alt=" " />
//                                     <img className="shop-hero-banner-large-Top-sparkle" alt=" " />
//                                     <img className="shop-hero-banner-smallTop-Sparkle" alt=" " />
//                                     <img className="shop-hero-banner-large-Left-sparkle" alt=" " />
//                                     <img className="shop-hero-banner-smallLeft-Sparkle" alt=" " />
//                                     <img className="shop-hero-banner-large-Right-sparkle" alt=" " />
//                                     <img className="shop-hero-banner-smallRight-Sparkle" alt=" " />
//                                 </div>

//                                 <div className="shop-banner-card">
//                                     <div className="shop-banner-card-background-image"></div>
//                                     <div className="shop-bc-content-section">
//                                         <div className="shop-bc-strife-banner-logo">
//                                             <StrifeBannerLogo width={124} height={24} className={'shop-header-nav-bar-icon'} />
//                                         </div>
//                                         <img className="shop-bc-banner-front" alt=" " />
//                                         <span className="shop-bc-banner-text" style={{ color: `white` }}>
//                                             Collect these bonus avatar decorations for extra style when you subscribe to N!TR0!{`${` `}`}
//                                             <span className="shop-bc-premium-unlock-hook" role="button" tabIndex={0} onClick={(e) => { e.stopPropagation(); openModal("subToNitroPro"); }}>
//                                                 <span className="shop-bc-premium-unlock-hook-text" style={{ color: `white` }}>Unlock with N!TR0</span>
//                                             </span>
//                                         </span>
//                                     </div>

//                                     <div className="shop-bc-deco-section">
//                                         <div className="spinkInterface">
//                                             <div className="ssxcore-icon-wrapper">
//                                                 <svg width="120" height="120" viewBox="0 0 120 120" className="ssxcore-svg-mask" aria-hidden="true">
//                                                     <foreignObject x="0" y="0" width="120" height="120" mask="url(#svg-mask-avatar-default)">
//                                                         <div className="ssxcore-avatar-stack">
//                                                             <img alt=" " className="ssxcore-avatar-img" aria-hidden="true" />
//                                                         </div>
//                                                     </foreignObject>
//                                                 </svg>
//                                                 <svg width="144" height="144" viewBox="0 0 144 144" className="ssxcore-svg-avatar-decoration" aria-hidden="true">
//                                                     <foreignObject x="0" y="0" width="144" height="144" >
//                                                         <div className="ssxcore-avatar-stack">
//                                                             <img className="ssxcore-tech-hud" alt=" " aria-hidden="true" />
//                                                         </div>
//                                                     </foreignObject>
//                                                 </svg>
//                                             </div>
//                                         </div>
//                                         <div className="sBlueHeadSet">
//                                             <div className="ssxcore-icon-wrapper">
//                                                 <svg width="120" height="120" viewBox="0 0 120 120" className="ssxcore-svg-mask" aria-hidden="true">
//                                                     <foreignObject x="0" y="0" width="120" height="120" mask="url(#svg-mask-avatar-default)">
//                                                         <div className="ssxcore-avatar-stack">
//                                                             <img alt=" " className="ssxcore-avatar-img" aria-hidden="true" />
//                                                         </div>
//                                                     </foreignObject>
//                                                 </svg>
//                                                 <svg width="144" height="144" viewBox="0 0 144 144" className="ssxcore-svg-avatar-decoration" aria-hidden="true">
//                                                     <foreignObject x="0" y="0" width="144" height="144" >
//                                                         <div className="ssxcore-avatar-stack">
//                                                             <img className="ssxcore-shakingBlueHeadset" alt=" " aria-hidden="true" />
//                                                         </div>
//                                                     </foreignObject>
//                                                 </svg>
//                                             </div>

//                                         </div>
//                                         <div className="sgreenSmoke">
//                                             <div className="ssxcore-icon-wrapper">
//                                                 <svg width="120" height="120" viewBox="0 0 120 120" className="ssxcore-svg-mask" aria-hidden="true">
//                                                     <foreignObject x="0" y="0" width="120" height="120" mask="url(#svg-mask-avatar-default)">
//                                                         <div className="ssxcore-avatar-stack">
//                                                             <img alt=" " className="ssxcore-avatar-img" aria-hidden="true" />
//                                                         </div>
//                                                     </foreignObject>
//                                                 </svg>
//                                                 <svg width="144" height="144" viewBox="0 0 144 144" className="ssxcore-svg-avatar-decoration" aria-hidden="true">
//                                                     <foreignObject x="0" y="0" width="144" height="144" >
//                                                         <div className="ssxcore-avatar-stack">
//                                                             <img className="ssxcore-greenSmokeScreen" alt=" " aria-hidden="true" />
//                                                         </div>
//                                                     </foreignObject>
//                                                 </svg>
//                                             </div>

//                                         </div>
//                                     </div>
//                                     <div className="shop-bc-badge">
//                                         <StrifeNitroBadgeIcon className="shop-bc-badge-premium-nitro-ball-icon" height={24} width={24} />
//                                     </div>
//                                 </div>

//                                 <div>
//                                     <div>
//                                         <div className="shop-banner-img shop-banner-halloween">
//                                             <div className="shop-strife-banner-logo-halloween">
//                                                 <StrifeBannerLogo width={124} height={24} className={'shop-strife-banner-logo-halloween-icon'} />
//                                             </div>
//                                             <img className="shop-halloween-logo" alt=" " />
//                                             <div className="shop-halloween-subtext" style={{ color: `white` }}>Fright and delight your friends, strangers, and friendly strangers.</div>
//                                         </div>

//                                         <div>
//                                             <div className="shop-item-type" style={{ color: `var(--header-secondary)` }}>Avatar Decorations</div>
//                                             <div className="shop-item-cards-container">
//                                                 <div className="shop-item-card halloween-items" role="button" tabIndex={0}
//                                                     onClick={(e) => {
//                                                         e.preventDefault();
//                                                         openModal("avatarDecorationPreviewModal", "halloween-effect", "", "graveyardCat");
//                                                     }}
//                                                     style={{
//                                                         background: `linear-gradient(rgb(81, 127, 219), rgb(6, 14, 35)) border-box border-box`,
//                                                         borderColor: `rgba(44, 73, 129, 0.4)`,
//                                                         boxShadow: `none`
//                                                     }} >
//                                                     <div className="shop-item-card-inner" style={{ width: `120px`, height: `120px` }}>
//                                                         <svg width="120" height="120" viewBox="0 0 120 120" className="ssxcore-svg-mask" aria-hidden="true">
//                                                             <foreignObject x="0" y="0" width="120" height="120" mask="url(#svg-mask-avatar-default)">
//                                                                 <div className="ssxcore-avatar-stack">
//                                                                     <img alt=" " className="halloween-wumpus-avatar-img" aria-hidden="true" />
//                                                                 </div>
//                                                             </foreignObject>
//                                                         </svg>
//                                                         <svg width="144" height="144" viewBox="0 0 144 144" className="ssxcore-svg-avatar-decoration" aria-hidden="true">
//                                                             <foreignObject x="0" y="0" width="144" height="144" >
//                                                                 <div className="ssxcore-avatar-stack">
//                                                                     <img className="halloween-cat-grave" alt=" " aria-hidden="true" />
//                                                                 </div>
//                                                             </foreignObject>
//                                                         </svg>
//                                                     </div>
//                                                     <div className="shop-item-card-inner-text">
//                                                         <div className="shop-item-card-inner-product-name"></div>
//                                                         <div className="shop-item-card-inner-product-details">
//                                                             <div className="shop-item-card-inner-blur">
//                                                                 <div className="shop-item-card-inner-blur-text-lrg" style={{ color: `white` }}>Graveyard Cat</div>
//                                                                 <div className="shop-item-card-inner-blur-text-med" style={{ color: `white` }}>Just a cat on graveyard duty.</div>
//                                                                 <div className="shop-item-price-tags-container" >
//                                                                     <h2 className="shop-item-price-tags-h2-medium" style={{ color: `white` }}><span className="shop-item-striked-price">$7.99</span></h2>
//                                                                     <h2 className="shop-item-price-tags-h2-medium" style={{ color: `white` }}>
//                                                                         <StrifeNitroBadgeIcon className="shop-item-nitro-ball-icon" height={24} width={24} />
//                                                                         <span className="shop-item-price">$5.49</span>
//                                                                     </h2>
//                                                                 </div>

//                                                             </div>
//                                                             <div className="shop-item-card-inner-hover">
//                                                                 <div className="shop-item-card-inner-hover-upsell-container">
//                                                                     <div className="shop-item-card-inner-blur-text-med" style={{ color: `white` }}>Access to purchase this decoration is only available with Nitro.</div>
//                                                                     <div className="shop-item-card-button-container">
//                                                                         <button type="button" className="shop-buttons shop-item-shiny-button global-button-size-medium button-look-filled global-button-full-width"
//                                                                             onClick={(e) => { e.stopPropagation(); openModal("subToNitroPro"); }}>
//                                                                             <div className="global-button-contents look-filled-button-contents shopPremiumSubscribeButton">
//                                                                                 <StrifeNitroBadgeIcon className="shop-premium-nitro-ball-icon" height={24} width={24} />
//                                                                                 <span className="shopbuttonText">Unlock Shop with Nitro</span>
//                                                                                 <div className="shiny-button-container">
//                                                                                     <div className="shiny-button-flex">
//                                                                                         <div className="shiny-button-inner"></div>
//                                                                                     </div>
//                                                                                 </div>
//                                                                             </div>
//                                                                         </button>
//                                                                         <button type="button" className="shop-buttons shop-item-preview-button global-button-growth button-look-filled"
//                                                                             onClick={(e) => {
//                                                                                 e.preventDefault();
//                                                                                 openModal("avatarDecorationPreviewModal", "halloween-effect", "", "graveyardCat");
//                                                                             }}>
//                                                                             <div className="global-button-contents look-filled-button-contents shop-item-previewButtonInner">
//                                                                                 <EnableCameraViewIcon height={24} width={24} />
//                                                                             </div>
//                                                                         </button>
//                                                                     </div>
//                                                                 </div>
//                                                             </div>

//                                                         </div>
//                                                     </div>
//                                                 </div>
//                                                 <div className="shop-item-card halloween-items" role="button" tabIndex={0}
//                                                     onClick={(e) => {
//                                                         e.preventDefault();
//                                                         openModal("avatarDecorationPreviewModal", "halloween-effect", "", "ghosts");
//                                                     }}
//                                                     style={{
//                                                         background: `linear-gradient(rgb(81, 127, 219), rgb(6, 14, 35)) border-box border-box`,
//                                                         borderColor: `rgba(44, 73, 129, 0.4)`,
//                                                         boxShadow: `none`
//                                                     }} >
//                                                     <div className="shop-item-card-inner" style={{ width: `120px`, height: `120px` }}>
//                                                         <svg width="120" height="120" viewBox="0 0 120 120" className="ssxcore-svg-mask" aria-hidden="true">
//                                                             <foreignObject x="0" y="0" width="120" height="120" mask="url(#svg-mask-avatar-default)">
//                                                                 <div className="ssxcore-avatar-stack">
//                                                                     <img alt=" " className="halloween-wumpus-avatar-img" aria-hidden="true" />
//                                                                 </div>
//                                                             </foreignObject>
//                                                         </svg>
//                                                         <svg width="144" height="144" viewBox="0 0 144 144" className="ssxcore-svg-avatar-decoration" aria-hidden="true">
//                                                             <foreignObject x="0" y="0" width="144" height="144" >
//                                                                 <div className="ssxcore-avatar-stack">
//                                                                     <img className="halloween-ghosts" alt=" " aria-hidden="true" />
//                                                                 </div>
//                                                             </foreignObject>
//                                                         </svg>
//                                                     </div>
//                                                     <div className="shop-item-card-inner-text">
//                                                         <div className="shop-item-card-inner-product-name"></div>
//                                                         <div className="shop-item-card-inner-product-details">
//                                                             <div className="shop-item-card-inner-blur">
//                                                                 <div className="shop-item-card-inner-blur-text-lrg" style={{ color: `white` }}>Ghosts</div>
//                                                                 <div className="shop-item-card-inner-blur-text-med" style={{ color: `white` }}>Look at them just spinning and grinning all day...</div>
//                                                                 <div className="shop-item-price-tags-container" >
//                                                                     <h2 className="shop-item-price-tags-h2-medium" style={{ color: `white` }}><span className="shop-item-striked-price">$7.99</span></h2>
//                                                                     <h2 className="shop-item-price-tags-h2-medium" style={{ color: `white` }}>
//                                                                         <StrifeNitroBadgeIcon className="shop-item-nitro-ball-icon" height={24} width={24} />
//                                                                         <span className="shop-item-price">$5.49</span>
//                                                                     </h2>
//                                                                 </div>

//                                                             </div>
//                                                             <div className="shop-item-card-inner-hover">
//                                                                 <div className="shop-item-card-inner-hover-upsell-container">
//                                                                     <div className="shop-item-card-inner-blur-text-med" style={{ color: `white` }}>Access to purchase this decoration is only available with Nitro.</div>
//                                                                     <div className="shop-item-card-button-container">
//                                                                         <button type="button" className="shop-buttons shop-item-shiny-button global-button-size-medium button-look-filled global-button-full-width"
//                                                                             onClick={(e) => { e.stopPropagation(); openModal("subToNitroPro"); }}>
//                                                                             <div className="global-button-contents look-filled-button-contents shopPremiumSubscribeButton">
//                                                                                 <StrifeNitroBadgeIcon className="shop-premium-nitro-ball-icon" height={24} width={24} />
//                                                                                 <span className="shopbuttonText">Unlock Shop with Nitro</span>
//                                                                                 <div className="shiny-button-container">
//                                                                                     <div className="shiny-button-flex">
//                                                                                         <div className="shiny-button-inner"></div>
//                                                                                     </div>
//                                                                                 </div>
//                                                                             </div>
//                                                                         </button>
//                                                                         <button type="button" className="shop-buttons shop-item-preview-button global-button-growth button-look-filled"
//                                                                             onClick={(e) => {
//                                                                                 e.preventDefault();
//                                                                                 openModal("avatarDecorationPreviewModal", "halloween-effect", "", "ghosts");
//                                                                             }}>
//                                                                             <div className="global-button-contents look-filled-button-contents shop-item-previewButtonInner">
//                                                                                 <EnableCameraViewIcon height={24} width={24} />
//                                                                             </div>
//                                                                         </button>
//                                                                     </div>
//                                                                 </div>
//                                                             </div>

//                                                         </div>
//                                                     </div>
//                                                 </div>
//                                                 <div className="shop-item-card halloween-items" role="button" tabIndex={0}
//                                                     onClick={(e) => {
//                                                         e.preventDefault();
//                                                         openModal("avatarDecorationPreviewModal", "halloween-effect", "", "minions");
//                                                     }}
//                                                     style={{
//                                                         background: `linear-gradient(rgb(81, 127, 219), rgb(6, 14, 35)) border-box border-box`,
//                                                         borderColor: `rgba(44, 73, 129, 0.4)`,
//                                                         boxShadow: `none`
//                                                     }} >
//                                                     <div className="shop-item-card-inner" style={{ width: `120px`, height: `120px` }}>
//                                                         <svg width="120" height="120" viewBox="0 0 120 120" className="ssxcore-svg-mask" aria-hidden="true">
//                                                             <foreignObject x="0" y="0" width="120" height="120" mask="url(#svg-mask-avatar-default)">
//                                                                 <div className="ssxcore-avatar-stack">
//                                                                     <img alt=" " className="halloween-wumpus-avatar-img" aria-hidden="true" />
//                                                                 </div>
//                                                             </foreignObject>
//                                                         </svg>
//                                                         <svg width="144" height="144" viewBox="0 0 144 144" className="ssxcore-svg-avatar-decoration" aria-hidden="true">
//                                                             <foreignObject x="0" y="0" width="144" height="144" >
//                                                                 <div className="ssxcore-avatar-stack">
//                                                                     <img className="halloween-minions" alt=" " aria-hidden="true" />
//                                                                 </div>
//                                                             </foreignObject>
//                                                         </svg>
//                                                     </div>
//                                                     <div className="shop-item-card-inner-text">
//                                                         <div className="shop-item-card-inner-product-name"></div>
//                                                         <div className="shop-item-card-inner-product-details">
//                                                             <div className="shop-item-card-inner-blur">
//                                                                 <div className="shop-item-card-inner-blur-text-lrg" style={{ color: `white` }}>Minions</div>
//                                                                 <div className="shop-item-card-inner-blur-text-med" style={{ color: `white` }}>Name a more iconic duo.</div>
//                                                                 <div className="shop-item-price-tags-container" >
//                                                                     <h2 className="shop-item-price-tags-h2-medium" style={{ color: `white` }}><span className="shop-item-striked-price">$7.99</span></h2>
//                                                                     <h2 className="shop-item-price-tags-h2-medium" style={{ color: `white` }}>
//                                                                         <StrifeNitroBadgeIcon className="shop-item-nitro-ball-icon" height={24} width={24} />
//                                                                         <span className="shop-item-price">$5.49</span>
//                                                                     </h2>
//                                                                 </div>

//                                                             </div>
//                                                             <div className="shop-item-card-inner-hover">
//                                                                 <div className="shop-item-card-inner-hover-upsell-container">
//                                                                     <div className="shop-item-card-inner-blur-text-med" style={{ color: `white` }}>Access to purchase this decoration is only available with Nitro.</div>
//                                                                     <div className="shop-item-card-button-container">
//                                                                         <button type="button" className="shop-buttons shop-item-shiny-button global-button-size-medium button-look-filled global-button-full-width"
//                                                                             onClick={(e) => { e.stopPropagation(); openModal("subToNitroPro"); }}>
//                                                                             <div className="global-button-contents look-filled-button-contents shopPremiumSubscribeButton">
//                                                                                 <StrifeNitroBadgeIcon className="shop-premium-nitro-ball-icon" height={24} width={24} />
//                                                                                 <span className="shopbuttonText">Unlock Shop with Nitro</span>
//                                                                                 <div className="shiny-button-container">
//                                                                                     <div className="shiny-button-flex">
//                                                                                         <div className="shiny-button-inner"></div>
//                                                                                     </div>
//                                                                                 </div>
//                                                                             </div>
//                                                                         </button>
//                                                                         <button type="button" className="shop-buttons shop-item-preview-button global-button-growth button-look-filled"
//                                                                             onClick={(e) => {
//                                                                                 e.preventDefault();
//                                                                                 openModal("avatarDecorationPreviewModal", "halloween-effect", "", "minions");
//                                                                             }}>
//                                                                             <div className="global-button-contents look-filled-button-contents shop-item-previewButtonInner">
//                                                                                 <EnableCameraViewIcon height={24} width={24} />
//                                                                             </div>
//                                                                         </button>
//                                                                     </div>
//                                                                 </div>
//                                                             </div>

//                                                         </div>
//                                                     </div>
//                                                 </div>
//                                                 <div className="shop-item-card halloween-items" role="button" tabIndex={0}
//                                                     onClick={(e) => {
//                                                         e.preventDefault();
//                                                         openModal("avatarDecorationPreviewModal", "halloween-effect", "", "jackOLantern");
//                                                     }}
//                                                     style={{
//                                                         background: `linear-gradient(rgb(81, 127, 219), rgb(6, 14, 35)) border-box border-box`,
//                                                         borderColor: `rgba(44, 73, 129, 0.4)`,
//                                                         boxShadow: `none`
//                                                     }} >
//                                                     <div className="shop-item-card-inner" style={{ width: `120px`, height: `120px` }}>
//                                                         <svg width="120" height="120" viewBox="0 0 120 120" className="ssxcore-svg-mask" aria-hidden="true">
//                                                             <foreignObject x="0" y="0" width="120" height="120" mask="url(#svg-mask-avatar-default)">
//                                                                 <div className="ssxcore-avatar-stack">
//                                                                     <img alt=" " className="halloween-wumpus-avatar-img" aria-hidden="true" />
//                                                                 </div>
//                                                             </foreignObject>
//                                                         </svg>
//                                                         <svg width="144" height="144" viewBox="0 0 144 144" className="ssxcore-svg-avatar-decoration" aria-hidden="true">
//                                                             <foreignObject x="0" y="0" width="144" height="144" >
//                                                                 <div className="ssxcore-avatar-stack">
//                                                                     <img className="halloween-jack-o-lantern" alt=" " aria-hidden="true" />
//                                                                 </div>
//                                                             </foreignObject>
//                                                         </svg>
//                                                     </div>
//                                                     <div className="shop-item-card-inner-text">
//                                                         <div className="shop-item-card-inner-product-name"></div>
//                                                         <div className="shop-item-card-inner-product-details">
//                                                             <div className="shop-item-card-inner-blur">
//                                                                 <div className="shop-item-card-inner-blur-text-lrg" style={{ color: `white` }}>Jack-o'-lantern</div>
//                                                                 <div className="shop-item-card-inner-blur-text-med" style={{ color: `white` }}>You can practically hear its eerie cackle...</div>
//                                                                 <div className="shop-item-price-tags-container" >
//                                                                     <h2 className="shop-item-price-tags-h2-medium" style={{ color: `white` }}><span className="shop-item-striked-price">$7.99</span></h2>
//                                                                     <h2 className="shop-item-price-tags-h2-medium" style={{ color: `white` }}>
//                                                                         <StrifeNitroBadgeIcon className="shop-item-nitro-ball-icon" height={24} width={24} />
//                                                                         <span className="shop-item-price">$5.49</span>
//                                                                     </h2>
//                                                                 </div>

//                                                             </div>
//                                                             <div className="shop-item-card-inner-hover">
//                                                                 <div className="shop-item-card-inner-hover-upsell-container">
//                                                                     <div className="shop-item-card-inner-blur-text-med" style={{ color: `white` }}>Access to purchase this decoration is only available with Nitro.</div>
//                                                                     <div className="shop-item-card-button-container">
//                                                                         <button type="button" className="shop-buttons shop-item-shiny-button global-button-size-medium button-look-filled global-button-full-width"
//                                                                             onClick={(e) => { e.stopPropagation(); openModal("subToNitroPro"); }}>
//                                                                             <div className="global-button-contents look-filled-button-contents shopPremiumSubscribeButton">
//                                                                                 <StrifeNitroBadgeIcon className="shop-premium-nitro-ball-icon" height={24} width={24} />
//                                                                                 <span className="shopbuttonText">Unlock Shop with Nitro</span>
//                                                                                 <div className="shiny-button-container">
//                                                                                     <div className="shiny-button-flex">
//                                                                                         <div className="shiny-button-inner"></div>
//                                                                                     </div>
//                                                                                 </div>
//                                                                             </div>
//                                                                         </button>
//                                                                         <button type="button" className="shop-buttons shop-item-preview-button global-button-growth button-look-filled"
//                                                                             onClick={(e) => {
//                                                                                 e.preventDefault();
//                                                                                 openModal("avatarDecorationPreviewModal", "halloween-effect", "", "jackOLantern");
//                                                                             }}>
//                                                                             <div className="global-button-contents look-filled-button-contents shop-item-previewButtonInner">
//                                                                                 <EnableCameraViewIcon height={24} width={24} />
//                                                                             </div>
//                                                                         </button>
//                                                                     </div>
//                                                                 </div>
//                                                             </div>

//                                                         </div>
//                                                     </div>
//                                                 </div>
//                                             </div>
//                                         </div>

//                                         <div>
//                                             <div className="shop-item-type-title-container">
//                                                 <div className="shop-item-type" style={{ color: `var(--header-secondary)` }}>Profile Effects</div>
//                                             </div>

//                                             <div className="shop-item-cards-container">

//                                                 <div className="shop-item-card halloween-items" role="button" tabIndex={0}
//                                                     onClick={(e) => {
//                                                         e.preventDefault();
//                                                         openModal("profileEffectModal", "halloween-effect", "ghoulishGraffiti");
//                                                     }}
//                                                     style={{
//                                                         background: `linear-gradient(rgb(81, 127, 219), rgb(6, 14, 35)) border-box border-box`,
//                                                         borderColor: `rgba(44, 73, 129, 0.4)`,
//                                                         boxShadow: `none`
//                                                     }} >


//                                                     <div className="shop-item-profileEffectPreview">
//                                                         <div className="shop-item-profileEffectPreviewContainer">
//                                                             <img className="shop-item-upc-preview" alt=" " />
//                                                             <div>
//                                                                 <div className="shop-item-upc-profile-effects">
//                                                                     <div className="shop-item-upc-profile-effects-inner">
//                                                                         <img className="shop-item-ghoulish-graffiti" alt=" " style={{ top: `0px` }} />
//                                                                     </div>
//                                                                 </div>
//                                                             </div>
//                                                         </div>
//                                                     </div>

//                                                     <div className="shop-item-card-inner-text shop-item-card-inner-text-profile-effect">
//                                                         <div className="shop-item-card-inner-product-name"></div>
//                                                         <div className="shop-item-card-inner-product-details">
//                                                             <div className="shop-item-card-inner-blur">
//                                                                 <div className="shop-item-card-inner-blur-text-lrg" style={{ color: `white` }}>Ghoulish Graffiti</div>
//                                                                 <div className="shop-item-card-inner-blur-text-med" style={{ color: `white` }}>Did I scare you?</div>
//                                                                 <div className="shop-item-price-tags-container" >
//                                                                     <h2 className="shop-item-price-tags-h2-medium" style={{ color: `white` }}><span className="shop-item-striked-price">$3.99</span></h2>
//                                                                     <h2 className="shop-item-price-tags-h2-medium" style={{ color: `white` }}>
//                                                                         <StrifeNitroBadgeIcon className="shop-item-nitro-ball-icon" height={24} width={24} />
//                                                                         <span className="shop-item-price">$2.99</span>
//                                                                     </h2>
//                                                                 </div>

//                                                             </div>
//                                                             <div className="shop-item-card-inner-hover">
//                                                                 <div className="shop-item-card-inner-hover-upsell-container">
//                                                                     <div className="shop-item-card-inner-blur-text-med" style={{ color: `white` }}>Access to purchase this effect is only available with Nitro.</div>
//                                                                     <div className="shop-item-card-button-container">
//                                                                         <button type="button" className="shop-buttons shop-item-shiny-button global-button-size-medium button-look-filled global-button-full-width"
//                                                                             onClick={(e) => { e.stopPropagation(); openModal("subToNitroPro"); }}>
//                                                                             <div className="global-button-contents look-filled-button-contents shopPremiumSubscribeButton">
//                                                                                 <StrifeNitroBadgeIcon className="shop-premium-nitro-ball-icon" height={24} width={24} />
//                                                                                 <span className="shopbuttonText">Unlock Shop with Nitro</span>
//                                                                                 <div className="shiny-button-container">
//                                                                                     <div className="shiny-button-flex">
//                                                                                         <div className="shiny-button-inner"></div>
//                                                                                     </div>
//                                                                                 </div>
//                                                                             </div>
//                                                                         </button>
//                                                                         <button type="button" className="shop-buttons shop-item-preview-button global-button-growth button-look-filled"
//                                                                             onClick={(e) => {
//                                                                                 e.preventDefault();
//                                                                                 openModal("profileEffectModal", "halloween-effect", "ghoulishGraffiti");
//                                                                             }}>
//                                                                             <div className="global-button-contents look-filled-button-contents shop-item-previewButtonInner">
//                                                                                 <EnableCameraViewIcon height={24} width={24} />
//                                                                             </div>
//                                                                         </button>
//                                                                     </div>
//                                                                 </div>
//                                                             </div>
//                                                         </div>
//                                                     </div>
//                                                 </div>

//                                                 <div className="shop-item-card halloween-items" role="button" tabIndex={0}
//                                                     onClick={(e) => {
//                                                         e.preventDefault();
//                                                         openModal("profileEffectModal", "halloween-effect", "zombieSlime");
//                                                     }}
//                                                     style={{
//                                                         background: `linear-gradient(rgb(81, 127, 219), rgb(6, 14, 35)) border-box border-box`,
//                                                         borderColor: `rgba(44, 73, 129, 0.4)`,
//                                                         boxShadow: `none`,
//                                                     }} >


//                                                     <div className="shop-item-profileEffectPreview">
//                                                         <div className="shop-item-profileEffectPreviewContainer">
//                                                             <img className="shop-item-upc-preview" alt=" " />
//                                                             <div>
//                                                                 <div className="shop-item-upc-profile-effects">
//                                                                     <div className="shop-item-upc-profile-effects-inner">
//                                                                         <img className="shop-item-slime-zombie" alt=" " style={{ top: `0px` }} />
//                                                                     </div>
//                                                                 </div>
//                                                             </div>
//                                                         </div>
//                                                     </div>

//                                                     <div className="shop-item-card-inner-text shop-item-card-inner-text-profile-effect">
//                                                         <div className="shop-item-card-inner-product-name"></div>
//                                                         <div className="shop-item-card-inner-product-details">
//                                                             <div className="shop-item-card-inner-blur">
//                                                                 <div className="shop-item-card-inner-blur-text-lrg" style={{ color: `white` }}>Zombie Slime</div>
//                                                                 <div className="shop-item-card-inner-blur-text-med" style={{ color: `white` }}>I don't think you should touch that.</div>
//                                                                 <div className="shop-item-price-tags-container" >
//                                                                     <h2 className="shop-item-price-tags-h2-medium" style={{ color: `white` }}><span className="shop-item-striked-price">$3.99</span></h2>
//                                                                     <h2 className="shop-item-price-tags-h2-medium" style={{ color: `white` }}>
//                                                                         <StrifeNitroBadgeIcon className="shop-item-nitro-ball-icon" height={24} width={24} />
//                                                                         <span className="shop-item-price">$2.99</span>
//                                                                     </h2>
//                                                                 </div>

//                                                             </div>
//                                                             <div className="shop-item-card-inner-hover">
//                                                                 <div className="shop-item-card-inner-hover-upsell-container">
//                                                                     <div className="shop-item-card-inner-blur-text-med" style={{ color: `white` }}>Access to purchase this effect is only available with Nitro.</div>
//                                                                     <div className="shop-item-card-button-container">
//                                                                         <button type="button" className="shop-buttons shop-item-shiny-button global-button-size-medium button-look-filled global-button-full-width"
//                                                                             onClick={(e) => { e.stopPropagation(); openModal("subToNitroPro"); }}>
//                                                                             <div className="global-button-contents look-filled-button-contents shopPremiumSubscribeButton">
//                                                                                 <StrifeNitroBadgeIcon className="shop-premium-nitro-ball-icon" height={24} width={24} />
//                                                                                 <span className="shopbuttonText">Unlock Shop with Nitro</span>
//                                                                                 <div className="shiny-button-container">
//                                                                                     <div className="shiny-button-flex">
//                                                                                         <div className="shiny-button-inner"></div>
//                                                                                     </div>
//                                                                                 </div>
//                                                                             </div>
//                                                                         </button>
//                                                                         <button type="button" className="shop-buttons shop-item-preview-button global-button-growth button-look-filled"
//                                                                             onClick={(e) => {
//                                                                                 e.preventDefault();
//                                                                                 openModal("profileEffectModal", "halloween-effect", "zombieSlime");
//                                                                             }}>
//                                                                             <div className="global-button-contents look-filled-button-contents shop-item-previewButtonInner">
//                                                                                 <EnableCameraViewIcon height={24} width={24} />
//                                                                             </div>
//                                                                         </button>
//                                                                     </div>
//                                                                 </div>
//                                                             </div>
//                                                         </div>
//                                                     </div>
//                                                 </div>

//                                                 <div className="shop-item-card halloween-items" role="button" tabIndex={0}
//                                                     onClick={(e) => {
//                                                         e.preventDefault();
//                                                         openModal("profileEffectModal", "halloween-effect", "darkOmens");
//                                                     }}
//                                                     style={{
//                                                         background: `linear-gradient(rgb(81, 127, 219), rgb(6, 14, 35)) border-box border-box`,
//                                                         borderColor: `rgba(44, 73, 129, 0.4)`,
//                                                         boxShadow: `none`
//                                                     }} >


//                                                     <div className="shop-item-profileEffectPreview">
//                                                         <div className="shop-item-profileEffectPreviewContainer">
//                                                             <img className="shop-item-upc-preview" alt=" " />
//                                                             <div>
//                                                                 <div className="shop-item-upc-profile-effects">
//                                                                     <div className="shop-item-upc-profile-effects-inner">
//                                                                         <img className="shop-item-ghost-skulls" alt=" " style={{ top: `0px` }} />
//                                                                     </div>
//                                                                 </div>
//                                                             </div>
//                                                         </div>
//                                                     </div>

//                                                     <div className="shop-item-card-inner-text shop-item-card-inner-text-profile-effect">
//                                                         <div className="shop-item-card-inner-product-name"></div>
//                                                         <div className="shop-item-card-inner-product-details">
//                                                             <div className="shop-item-card-inner-blur">
//                                                                 <div className="shop-item-card-inner-blur-text-lrg" style={{ color: `white` }}>Dark Omens</div>
//                                                                 <div className="shop-item-card-inner-blur-text-med" style={{ color: `white` }}>Who keeps summoning these things?</div>
//                                                                 <div className="shop-item-price-tags-container" >
//                                                                     <h2 className="shop-item-price-tags-h2-medium" style={{ color: `white` }}><span className="shop-item-striked-price">$3.99</span></h2>
//                                                                     <h2 className="shop-item-price-tags-h2-medium" style={{ color: `white` }}>
//                                                                         <StrifeNitroBadgeIcon className="shop-item-nitro-ball-icon" height={24} width={24} />
//                                                                         <span className="shop-item-price">$2.99</span>
//                                                                     </h2>
//                                                                 </div>

//                                                             </div>
//                                                             <div className="shop-item-card-inner-hover">
//                                                                 <div className="shop-item-card-inner-hover-upsell-container">
//                                                                     <div className="shop-item-card-inner-blur-text-med" style={{ color: `white` }}>Access to purchase this effect is only available with Nitro.</div>
//                                                                     <div className="shop-item-card-button-container">
//                                                                         <button type="button" className="shop-buttons shop-item-shiny-button global-button-size-medium button-look-filled global-button-full-width"
//                                                                             onClick={(e) => { e.stopPropagation(); openModal("subToNitroPro"); }}>
//                                                                             <div className="global-button-contents look-filled-button-contents shopPremiumSubscribeButton">
//                                                                                 <StrifeNitroBadgeIcon className="shop-premium-nitro-ball-icon" height={24} width={24} />
//                                                                                 <span className="shopbuttonText">Unlock Shop with Nitro</span>
//                                                                                 <div className="shiny-button-container">
//                                                                                     <div className="shiny-button-flex">
//                                                                                         <div className="shiny-button-inner"></div>
//                                                                                     </div>
//                                                                                 </div>
//                                                                             </div>
//                                                                         </button>
//                                                                         <button type="button" className="shop-buttons shop-item-preview-button global-button-growth button-look-filled"
//                                                                             onClick={(e) => {
//                                                                                 e.preventDefault();
//                                                                                 openModal("profileEffectModal", "halloween-effect", "darkOmens");
//                                                                             }}>
//                                                                             <div className="global-button-contents look-filled-button-contents shop-item-previewButtonInner">
//                                                                                 <EnableCameraViewIcon height={24} width={24} />
//                                                                             </div>
//                                                                         </button>
//                                                                     </div>
//                                                                 </div>
//                                                             </div>
//                                                         </div>
//                                                     </div>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     </div>

//                                     <div>
//                                         <div className="shop-banner-img shop-banner-fall">
//                                             <div className="shop-strife-banner-logo-halloween">
//                                                 <StrifeBannerLogo width={124} height={24} className={'shop-strife-banner-logo-halloween-icon'} />
//                                             </div>
//                                             <img className="shop-fall-banner-logo" alt=" " />
//                                             <div className="shop-halloween-subtext" style={{ color: `white` }}>There's a calm and cozy vibe in the air.</div>
//                                         </div>
//                                         <div>
//                                             <div className="shop-item-type" style={{ color: `var(--header-secondary)` }}>Avatar Decorations</div>
//                                             <div className="shop-item-cards-container">
//                                                 <div className="shop-item-card fall-items" role="button" tabIndex={0}
//                                                     onClick={(e) => {
//                                                         e.preventDefault();
//                                                         openModal("avatarDecorationPreviewModal", "fall-effect", "", "fallLeaves");
//                                                     }}
//                                                     style={{
//                                                         background: `linear-gradient(rgb(255, 194, 102), rgb(107, 25, 0)) border-box border-box`,
//                                                         borderColor: `rgba(183, 111, 52, 0.4)`,
//                                                         boxShadow: `none`
//                                                     }} >
//                                                     <div className="shop-item-card-inner" style={{ width: `120px`, height: `120px` }}>
//                                                         <svg width="120" height="120" viewBox="0 0 120 120" className="ssxcore-svg-mask" aria-hidden="true">
//                                                             <foreignObject x="0" y="0" width="120" height="120" mask="url(#svg-mask-avatar-default)">
//                                                                 <div className="ssxcore-avatar-stack">
//                                                                     <img alt=" " className="halloween-wumpus-avatar-img" aria-hidden="true" />
//                                                                 </div>
//                                                             </foreignObject>
//                                                         </svg>
//                                                         <svg width="144" height="144" viewBox="0 0 144 144" className="ssxcore-svg-avatar-decoration" aria-hidden="true">
//                                                             <foreignObject x="0" y="0" width="144" height="144" >
//                                                                 <div className="ssxcore-avatar-stack">
//                                                                     <img className="fall-leaves-image" alt=" " aria-hidden="true" />
//                                                                 </div>
//                                                             </foreignObject>
//                                                         </svg>
//                                                     </div>
//                                                     <div className="shop-item-card-inner-text">
//                                                         <div className="shop-item-card-inner-product-name"></div>
//                                                         <div className="shop-item-card-inner-product-details">
//                                                             <div className="shop-item-card-inner-blur">
//                                                                 <div className="shop-item-card-inner-blur-text-lrg" style={{ color: `white` }}>Fall Leaves</div>
//                                                                 <div className="shop-item-card-inner-blur-text-med" style={{ color: `white` }}>Behold nature's dance.</div>
//                                                                 <div className="shop-item-price-tags-container" >
//                                                                     <h2 className="shop-item-price-tags-h2-medium" style={{ color: `white` }}><span className="shop-item-striked-price">$7.99</span></h2>
//                                                                     <h2 className="shop-item-price-tags-h2-medium" style={{ color: `white` }}>
//                                                                         <StrifeNitroBadgeIcon className="shop-item-nitro-ball-icon" height={24} width={24} />
//                                                                         <span className="shop-item-price">$5.49</span>
//                                                                     </h2>
//                                                                 </div>

//                                                             </div>
//                                                             <div className="shop-item-card-inner-hover">
//                                                                 <div className="shop-item-card-inner-hover-upsell-container">
//                                                                     <div className="shop-item-card-inner-blur-text-med" style={{ color: `white` }}>Access to purchase this decoration is only available with Nitro.</div>
//                                                                     <div className="shop-item-card-button-container">
//                                                                         <button type="button" className="shop-buttons shop-item-shiny-button global-button-size-medium button-look-filled global-button-full-width"
//                                                                             onClick={(e) => { e.stopPropagation(); openModal("subToNitroPro"); }}>
//                                                                             <div className="global-button-contents look-filled-button-contents shopPremiumSubscribeButton">
//                                                                                 <StrifeNitroBadgeIcon className="shop-premium-nitro-ball-icon" height={24} width={24} />
//                                                                                 <span className="shopbuttonText">Unlock Shop with Nitro</span>
//                                                                                 <div className="shiny-button-container">
//                                                                                     <div className="shiny-button-flex">
//                                                                                         <div className="shiny-button-inner"></div>
//                                                                                     </div>
//                                                                                 </div>
//                                                                             </div>
//                                                                         </button>
//                                                                         <button type="button" className="shop-buttons shop-item-preview-button global-button-growth button-look-filled"
//                                                                             onClick={(e) => {
//                                                                                 e.preventDefault();
//                                                                                 openModal("avatarDecorationPreviewModal", "fall-effect", "", "fallLeaves");
//                                                                             }}>
//                                                                             <div className="global-button-contents look-filled-button-contents shop-item-previewButtonInner">
//                                                                                 <EnableCameraViewIcon height={24} width={24} />
//                                                                             </div>
//                                                                         </button>
//                                                                     </div>
//                                                                 </div>
//                                                             </div>

//                                                         </div>
//                                                     </div>
//                                                 </div>
//                                                 <div className="shop-item-card fall-items" role="button" tabIndex={0}
//                                                     onClick={(e) => {
//                                                         e.preventDefault();
//                                                         openModal("avatarDecorationPreviewModal", "fall-effect", "", "pumpkinSpice");
//                                                     }}
//                                                     style={{
//                                                         background: `linear-gradient(rgb(255, 194, 102), rgb(107, 25, 0)) border-box border-box`,
//                                                         borderColor: `rgba(183, 111, 52, 0.4)`,
//                                                         boxShadow: `none`
//                                                     }} >
//                                                     <div className="shop-item-card-inner" style={{ width: `120px`, height: `120px` }}>
//                                                         <svg width="120" height="120" viewBox="0 0 120 120" className="ssxcore-svg-mask" aria-hidden="true">
//                                                             <foreignObject x="0" y="0" width="120" height="120" mask="url(#svg-mask-avatar-default)">
//                                                                 <div className="ssxcore-avatar-stack">
//                                                                     <img alt=" " className="halloween-wumpus-avatar-img" aria-hidden="true" />
//                                                                 </div>
//                                                             </foreignObject>
//                                                         </svg>
//                                                         <svg width="144" height="144" viewBox="0 0 144 144" className="ssxcore-svg-avatar-decoration" aria-hidden="true">
//                                                             <foreignObject x="0" y="0" width="144" height="144" >
//                                                                 <div className="ssxcore-avatar-stack">
//                                                                     <img className="fall-pumpkin-spice-image" alt=" " aria-hidden="true" />
//                                                                 </div>
//                                                             </foreignObject>
//                                                         </svg>
//                                                     </div>
//                                                     <div className="shop-item-card-inner-text">
//                                                         <div className="shop-item-card-inner-product-name"></div>
//                                                         <div className="shop-item-card-inner-product-details">
//                                                             <div className="shop-item-card-inner-blur">
//                                                                 <div className="shop-item-card-inner-blur-text-lrg" style={{ color: `white` }}>Pumpkin Spice</div>
//                                                                 <div className="shop-item-card-inner-blur-text-med" style={{ color: `white` }}>Sweets and spice make everything nice.</div>
//                                                                 <div className="shop-item-price-tags-container" >
//                                                                     <h2 className="shop-item-price-tags-h2-medium" style={{ color: `white` }}><span className="shop-item-striked-price">$7.99</span></h2>
//                                                                     <h2 className="shop-item-price-tags-h2-medium" style={{ color: `white` }}>
//                                                                         <StrifeNitroBadgeIcon className="shop-item-nitro-ball-icon" height={24} width={24} />
//                                                                         <span className="shop-item-price">$5.49</span>
//                                                                     </h2>
//                                                                 </div>

//                                                             </div>
//                                                             <div className="shop-item-card-inner-hover">
//                                                                 <div className="shop-item-card-inner-hover-upsell-container">
//                                                                     <div className="shop-item-card-inner-blur-text-med" style={{ color: `white` }}>Access to purchase this decoration is only available with Nitro.</div>
//                                                                     <div className="shop-item-card-button-container">
//                                                                         <button type="button" className="shop-buttons shop-item-shiny-button global-button-size-medium button-look-filled global-button-full-width"
//                                                                             onClick={(e) => { e.stopPropagation(); openModal("subToNitroPro"); }}>
//                                                                             <div className="global-button-contents look-filled-button-contents shopPremiumSubscribeButton">
//                                                                                 <StrifeNitroBadgeIcon className="shop-premium-nitro-ball-icon" height={24} width={24} />
//                                                                                 <span className="shopbuttonText">Unlock Shop with Nitro</span>
//                                                                                 <div className="shiny-button-container">
//                                                                                     <div className="shiny-button-flex">
//                                                                                         <div className="shiny-button-inner"></div>
//                                                                                     </div>
//                                                                                 </div>
//                                                                             </div>
//                                                                         </button>
//                                                                         <button type="button" className="shop-buttons shop-item-preview-button global-button-growth button-look-filled"
//                                                                             onClick={(e) => {
//                                                                                 e.preventDefault();
//                                                                                 openModal("avatarDecorationPreviewModal", "fall-effect", "", "pumpkinSpice");
//                                                                             }}>
//                                                                             <div className="global-button-contents look-filled-button-contents shop-item-previewButtonInner">
//                                                                                 <EnableCameraViewIcon height={24} width={24} />
//                                                                             </div>
//                                                                         </button>
//                                                                     </div>
//                                                                 </div>
//                                                             </div>

//                                                         </div>
//                                                     </div>
//                                                 </div>
//                                                 <div className="shop-item-card fall-items" role="button" tabIndex={0}
//                                                     onClick={(e) => {
//                                                         e.preventDefault();
//                                                         openModal("avatarDecorationPreviewModal", "fall-effect", "", "frogHat");
//                                                     }}
//                                                     style={{
//                                                         background: `linear-gradient(rgb(255, 194, 102), rgb(107, 25, 0)) border-box border-box`,
//                                                         borderColor: `rgba(183, 111, 52, 0.4)`,
//                                                         boxShadow: `none`
//                                                     }} >
//                                                     <div className="shop-item-card-inner" style={{ width: `120px`, height: `120px` }}>
//                                                         <svg width="120" height="120" viewBox="0 0 120 120" className="ssxcore-svg-mask" aria-hidden="true">
//                                                             <foreignObject x="0" y="0" width="120" height="120" mask="url(#svg-mask-avatar-default)">
//                                                                 <div className="ssxcore-avatar-stack">
//                                                                     <img alt=" " className="halloween-wumpus-avatar-img" aria-hidden="true" />
//                                                                 </div>
//                                                             </foreignObject>
//                                                         </svg>
//                                                         <svg width="144" height="144" viewBox="0 0 144 144" className="ssxcore-svg-avatar-decoration" aria-hidden="true">
//                                                             <foreignObject x="0" y="0" width="144" height="144" >
//                                                                 <div className="ssxcore-avatar-stack">
//                                                                     <img className="fall-frog-hat-image" alt=" " aria-hidden="true" />
//                                                                 </div>
//                                                             </foreignObject>
//                                                         </svg>
//                                                     </div>
//                                                     <div className="shop-item-card-inner-text">
//                                                         <div className="shop-item-card-inner-product-name"></div>
//                                                         <div className="shop-item-card-inner-product-details">
//                                                             <div className="shop-item-card-inner-blur">
//                                                                 <div className="shop-item-card-inner-blur-text-lrg" style={{ color: `white` }}>Frog Hat</div>
//                                                                 <div className="shop-item-card-inner-blur-text-med" style={{ color: `white` }}>Frogs and fashion go together and you can't tell me otherwise.</div>
//                                                                 <div className="shop-item-price-tags-container" >
//                                                                     <h2 className="shop-item-price-tags-h2-medium" style={{ color: `white` }}><span className="shop-item-striked-price">$7.99</span></h2>
//                                                                     <h2 className="shop-item-price-tags-h2-medium" style={{ color: `white` }}>
//                                                                         <StrifeNitroBadgeIcon className="shop-item-nitro-ball-icon" height={24} width={24} />
//                                                                         <span className="shop-item-price">$5.49</span>
//                                                                     </h2>
//                                                                 </div>

//                                                             </div>
//                                                             <div className="shop-item-card-inner-hover">
//                                                                 <div className="shop-item-card-inner-hover-upsell-container">
//                                                                     <div className="shop-item-card-inner-blur-text-med" style={{ color: `white` }}>Access to purchase this decoration is only available with Nitro.</div>
//                                                                     <div className="shop-item-card-button-container">
//                                                                         <button type="button" className="shop-buttons shop-item-shiny-button global-button-size-medium button-look-filled global-button-full-width"
//                                                                             onClick={(e) => { e.stopPropagation(); openModal("subToNitroPro"); }}>
//                                                                             <div className="global-button-contents look-filled-button-contents shopPremiumSubscribeButton">
//                                                                                 <StrifeNitroBadgeIcon className="shop-premium-nitro-ball-icon" height={24} width={24} />
//                                                                                 <span className="shopbuttonText">Unlock Shop with Nitro</span>
//                                                                                 <div className="shiny-button-container">
//                                                                                     <div className="shiny-button-flex">
//                                                                                         <div className="shiny-button-inner"></div>
//                                                                                     </div>
//                                                                                 </div>
//                                                                             </div>
//                                                                         </button>
//                                                                         <button type="button" className="shop-buttons shop-item-preview-button global-button-growth button-look-filled"
//                                                                             onClick={(e) => {
//                                                                                 e.preventDefault();
//                                                                                 openModal("avatarDecorationPreviewModal", "fall-effect", "", "frogHat");
//                                                                             }}>
//                                                                             <div className="global-button-contents look-filled-button-contents shop-item-previewButtonInner">
//                                                                                 <EnableCameraViewIcon height={24} width={24} />
//                                                                             </div>
//                                                                         </button>
//                                                                     </div>
//                                                                 </div>
//                                                             </div>

//                                                         </div>
//                                                     </div>
//                                                 </div>
//                                                 <div className="shop-item-card fall-items" role="button" tabIndex={0}
//                                                     onClick={(e) => {
//                                                         e.preventDefault();
//                                                         openModal("avatarDecorationPreviewModal", "fall-effect", "", "foxHat");
//                                                     }}
//                                                     style={{
//                                                         background: `linear-gradient(rgb(255, 194, 102), rgb(107, 25, 0)) border-box border-box`,
//                                                         borderColor: `rgba(183, 111, 52, 0.4)`,
//                                                         boxShadow: `none`
//                                                     }} >
//                                                     <div className="shop-item-card-inner" style={{ width: `120px`, height: `120px` }}>
//                                                         <svg width="120" height="120" viewBox="0 0 120 120" className="ssxcore-svg-mask" aria-hidden="true">
//                                                             <foreignObject x="0" y="0" width="120" height="120" mask="url(#svg-mask-avatar-default)">
//                                                                 <div className="ssxcore-avatar-stack">
//                                                                     <img alt=" " className="halloween-wumpus-avatar-img" aria-hidden="true" />
//                                                                 </div>
//                                                             </foreignObject>
//                                                         </svg>
//                                                         <svg width="144" height="144" viewBox="0 0 144 144" className="ssxcore-svg-avatar-decoration" aria-hidden="true">
//                                                             <foreignObject x="0" y="0" width="144" height="144" >
//                                                                 <div className="ssxcore-avatar-stack">
//                                                                     <img className="fall-fox-hat-image" alt=" " aria-hidden="true" />
//                                                                 </div>
//                                                             </foreignObject>
//                                                         </svg>
//                                                     </div>
//                                                     <div className="shop-item-card-inner-text">
//                                                         <div className="shop-item-card-inner-product-name"></div>
//                                                         <div className="shop-item-card-inner-product-details">
//                                                             <div className="shop-item-card-inner-blur">
//                                                                 <div className="shop-item-card-inner-blur-text-lrg" style={{ color: `white` }}>Fox Hat</div>
//                                                                 <div className="shop-item-card-inner-blur-text-med" style={{ color: `white` }}>Charming, cozy, and a little bit nosy.</div>
//                                                                 <div className="shop-item-price-tags-container" >
//                                                                     <h2 className="shop-item-price-tags-h2-medium" style={{ color: `white` }}><span className="shop-item-striked-price">$7.99</span></h2>
//                                                                     <h2 className="shop-item-price-tags-h2-medium" style={{ color: `white` }}>
//                                                                         <StrifeNitroBadgeIcon className="shop-item-nitro-ball-icon" height={24} width={24} />
//                                                                         <span className="shop-item-price">$5.49</span>
//                                                                     </h2>
//                                                                 </div>

//                                                             </div>
//                                                             <div className="shop-item-card-inner-hover">
//                                                                 <div className="shop-item-card-inner-hover-upsell-container">
//                                                                     <div className="shop-item-card-inner-blur-text-med" style={{ color: `white` }}>Access to purchase this decoration is only available with Nitro.</div>
//                                                                     <div className="shop-item-card-button-container">
//                                                                         <button type="button" className="shop-buttons shop-item-shiny-button global-button-size-medium button-look-filled global-button-full-width"
//                                                                             onClick={(e) => { e.stopPropagation(); openModal("subToNitroPro"); }}>
//                                                                             <div className="global-button-contents look-filled-button-contents shopPremiumSubscribeButton">
//                                                                                 <StrifeNitroBadgeIcon className="shop-premium-nitro-ball-icon" height={24} width={24} />
//                                                                                 <span className="shopbuttonText">Unlock Shop with Nitro</span>
//                                                                                 <div className="shiny-button-container">
//                                                                                     <div className="shiny-button-flex">
//                                                                                         <div className="shiny-button-inner"></div>
//                                                                                     </div>
//                                                                                 </div>
//                                                                             </div>
//                                                                         </button>
//                                                                         <button type="button" className="shop-buttons shop-item-preview-button global-button-growth button-look-filled"
//                                                                             onClick={(e) => {
//                                                                                 e.preventDefault();
//                                                                                 openModal("avatarDecorationPreviewModal", "fall-effect", "", "foxHat");
//                                                                             }}>
//                                                                             <div className="global-button-contents look-filled-button-contents shop-item-previewButtonInner">
//                                                                                 <EnableCameraViewIcon height={24} width={24} />
//                                                                             </div>
//                                                                         </button>
//                                                                     </div>
//                                                                 </div>
//                                                             </div>
//                                                         </div>
//                                                     </div>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                         <div>
//                                             <div className="shop-item-type-title-container">
//                                                 <div className="shop-item-type" style={{ color: `var(--header-secondary)` }}>Profile Effects</div>
//                                             </div>
//                                             <div className="shop-item-cards-container">
//                                                 <div className="shop-item-card fall-items" role="button" tabIndex={0}
//                                                     onMouseEnter={() => setLeavesHover(true)}
//                                                     onMouseLeave={() => setLeavesHover(false)}
//                                                     onClick={(e) => {
//                                                         e.preventDefault();
//                                                         openModal("profileEffectModal", "fall-effect", "fallFoliage");
//                                                     }}
//                                                     style={{
//                                                         background: `linear-gradient(rgb(255, 194, 102), rgb(107, 25, 0)) border-box border-box`,
//                                                         borderColor: `rgba(183, 111, 52, 0.4)`,
//                                                         boxShadow: `none`
//                                                     }} >


//                                                     <div className="shop-item-profileEffectPreview">
//                                                         <div className="shop-item-profileEffectPreviewContainer">
//                                                             <img className="shop-item-upc-preview" alt=" " />
//                                                             <div>
//                                                                 <div className="shop-item-upc-profile-effects">
//                                                                     <div className="shop-item-upc-profile-effects-inner">
//                                                                         <img className='shop-item-fall-foliage-static' alt=" " style={{ top: `0px` }} />
//                                                                         <img className={`shop-item-fall-foliage-leaves ${leavesHover ? `` : `is-hidden`}`} alt=" " />
//                                                                     </div>
//                                                                 </div>
//                                                             </div>
//                                                         </div>
//                                                     </div>

//                                                     <div className="shop-item-card-inner-text shop-item-card-inner-text-profile-effect">
//                                                         <div className="shop-item-card-inner-product-name"></div>
//                                                         <div className="shop-item-card-inner-product-details">
//                                                             <div className="shop-item-card-inner-blur">
//                                                                 <div className="shop-item-card-inner-blur-text-lrg" style={{ color: `white` }}>Fall Foliage</div>
//                                                                 <div className="shop-item-card-inner-blur-text-med" style={{ color: `white` }}>Getting ready for sweater weather.</div>
//                                                                 <div className="shop-item-price-tags-container" >
//                                                                     <h2 className="shop-item-price-tags-h2-medium" style={{ color: `white` }}><span className="shop-item-striked-price">$9.99</span></h2>
//                                                                     <h2 className="shop-item-price-tags-h2-medium" style={{ color: `white` }}>
//                                                                         <StrifeNitroBadgeIcon className="shop-item-nitro-ball-icon" height={24} width={24} />
//                                                                         <span className="shop-item-price">$6.99</span>
//                                                                     </h2>
//                                                                 </div>

//                                                             </div>
//                                                             <div className="shop-item-card-inner-hover">
//                                                                 <div className="shop-item-card-inner-hover-upsell-container">
//                                                                     <div className="shop-item-card-inner-blur-text-med" style={{ color: `white` }}>Access to purchase this effect is only available with Nitro.</div>
//                                                                     <div className="shop-item-card-button-container">
//                                                                         <button type="button" className="shop-buttons shop-item-shiny-button global-button-size-medium button-look-filled global-button-full-width"
//                                                                             onClick={(e) => { e.stopPropagation(); openModal("subToNitroPro"); }}>
//                                                                             <div className="global-button-contents look-filled-button-contents shopPremiumSubscribeButton">
//                                                                                 <StrifeNitroBadgeIcon className="shop-premium-nitro-ball-icon" height={24} width={24} />
//                                                                                 <span className="shopbuttonText">Unlock Shop with Nitro</span>
//                                                                                 <div className="shiny-button-container">
//                                                                                     <div className="shiny-button-flex">
//                                                                                         <div className="shiny-button-inner"></div>
//                                                                                     </div>
//                                                                                 </div>
//                                                                             </div>
//                                                                         </button>
//                                                                         <button type="button" className="shop-buttons shop-item-preview-button global-button-growth button-look-filled"
//                                                                             onClick={(e) => {
//                                                                                 e.preventDefault();
//                                                                                 openModal("profileEffectModal", "fall-effect", "fallFoliage");
//                                                                             }}>
//                                                                             <div className="global-button-contents look-filled-button-contents shop-item-previewButtonInner">
//                                                                                 <EnableCameraViewIcon height={24} width={24} />
//                                                                             </div>
//                                                                         </button>
//                                                                     </div>
//                                                                 </div>
//                                                             </div>
//                                                         </div>
//                                                     </div>
//                                                 </div>
//                                                 <div className="shop-item-card fall-items" role="button" tabIndex={0}
//                                                     onClick={(e) => {
//                                                         e.preventDefault();
//                                                         openModal("profileEffectModal", "fall-effect", "lillyPad");
//                                                     }}
//                                                     style={{
//                                                         background: `linear-gradient(rgb(255, 194, 102), rgb(107, 25, 0)) border-box border-box`,
//                                                         borderColor: `rgba(183, 111, 52, 0.4)`,
//                                                         boxShadow: `none`
//                                                     }} >


//                                                     <div className="shop-item-profileEffectPreview">
//                                                         <div className="shop-item-profileEffectPreviewContainer">
//                                                             <img className="shop-item-upc-preview" alt=" " />
//                                                             <div>
//                                                                 <div className="shop-item-upc-profile-effects">
//                                                                     <div className="shop-item-upc-profile-effects-inner">
//                                                                         <img className="shop-item-fall-lilly-pad-life" alt=" " style={{ top: `0px` }} />
//                                                                     </div>
//                                                                 </div>
//                                                             </div>
//                                                         </div>
//                                                     </div>

//                                                     <div className="shop-item-card-inner-text shop-item-card-inner-text-profile-effect">
//                                                         <div className="shop-item-card-inner-product-name"></div>
//                                                         <div className="shop-item-card-inner-product-details">
//                                                             <div className="shop-item-card-inner-blur">
//                                                                 <div className="shop-item-card-inner-blur-text-lrg" style={{ color: `white` }}>Lillypad Life</div>
//                                                                 <div className="shop-item-card-inner-blur-text-med" style={{ color: `white` }}>*ribbit*</div>
//                                                                 <div className="shop-item-price-tags-container" >
//                                                                     <h2 className="shop-item-price-tags-h2-medium" style={{ color: `white` }}><span className="shop-item-striked-price">$9.99</span></h2>
//                                                                     <h2 className="shop-item-price-tags-h2-medium" style={{ color: `white` }}>
//                                                                         <StrifeNitroBadgeIcon className="shop-item-nitro-ball-icon" height={24} width={24} />
//                                                                         <span className="shop-item-price">$6.99</span>
//                                                                     </h2>
//                                                                 </div>

//                                                             </div>
//                                                             <div className="shop-item-card-inner-hover">
//                                                                 <div className="shop-item-card-inner-hover-upsell-container">
//                                                                     <div className="shop-item-card-inner-blur-text-med" style={{ color: `white` }}>Access to purchase this effect is only available with Nitro.</div>
//                                                                     <div className="shop-item-card-button-container">
//                                                                         <button type="button" className="shop-buttons shop-item-shiny-button global-button-size-medium button-look-filled global-button-full-width"
//                                                                             onClick={(e) => { e.stopPropagation(); openModal("subToNitroPro"); }}>
//                                                                             <div className="global-button-contents look-filled-button-contents shopPremiumSubscribeButton">
//                                                                                 <StrifeNitroBadgeIcon className="shop-premium-nitro-ball-icon" height={24} width={24} />
//                                                                                 <span className="shopbuttonText">Unlock Shop with Nitro</span>
//                                                                                 <div className="shiny-button-container">
//                                                                                     <div className="shiny-button-flex">
//                                                                                         <div className="shiny-button-inner"></div>
//                                                                                     </div>
//                                                                                 </div>
//                                                                             </div>
//                                                                         </button>
//                                                                         <button type="button" className="shop-buttons shop-item-preview-button global-button-growth button-look-filled"
//                                                                             onClick={(e) => {
//                                                                                 e.preventDefault();
//                                                                                 openModal("profileEffectModal", "fall-effect", "lillyPad");
//                                                                             }}>
//                                                                             <div className="global-button-contents look-filled-button-contents shop-item-previewButtonInner">
//                                                                                 <EnableCameraViewIcon height={24} width={24} />
//                                                                             </div>
//                                                                         </button>
//                                                                     </div>
//                                                                 </div>
//                                                             </div>
//                                                         </div>
//                                                     </div>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     </div>



//                                     <div>
//                                         <div className="shop-banner-img shop-banner-winter-wonderland">
//                                             <div className="shop-strife-banner-logo-halloween">
//                                                 <StrifeBannerLogo width={124} height={24} className={'shop-strife-banner-logo-halloween-icon'} />
//                                             </div>
//                                             <img className="shop-banner-winter-wonderland-logo" alt=" " />
//                                             <div className="shop-halloween-subtext" style={{ color: `white` }}>tis the season</div>
//                                         </div>

//                                         <div>
//                                             <div className="shop-item-type" style={{ color: `var(--header-secondary)` }}>Avatar Decorations</div>
//                                             <div className="shop-item-cards-container">

//                                                 <div className="shop-item-card winter-wonderland-items" role="button" tabIndex={0}
//                                                     onClick={(e) => {
//                                                         e.preventDefault();
//                                                         openModal("avatarDecorationPreviewModal", "winter-wonderland-effect", "", "newYear2024");
//                                                     }}
//                                                     style={{
//                                                         background: `linear-gradient(rgb(71, 126, 255), rgb(21, 77, 209)) border-box border-box`,
//                                                         borderColor: `rgba(45, 101, 230, 0.4)`,
//                                                         boxShadow: `none`
//                                                     }} >
//                                                     <div className="shop-item-card-inner" style={{ width: `120px`, height: `120px` }}>
//                                                         <svg width="120" height="120" viewBox="0 0 120 120" className="ssxcore-svg-mask" aria-hidden="true">
//                                                             <foreignObject x="0" y="0" width="120" height="120" mask="url(#svg-mask-avatar-default)">
//                                                                 <div className="ssxcore-avatar-stack">
//                                                                     <img alt=" " className="halloween-wumpus-avatar-img" aria-hidden="true" />
//                                                                 </div>
//                                                             </foreignObject>
//                                                         </svg>
//                                                         <svg width="144" height="144" viewBox="0 0 144 144" className="ssxcore-svg-avatar-decoration" aria-hidden="true">
//                                                             <foreignObject x="0" y="0" width="144" height="144" >
//                                                                 <div className="ssxcore-avatar-stack">
//                                                                     <img className="winter-wonderland-new-year" alt=" " aria-hidden="true" />
//                                                                 </div>
//                                                             </foreignObject>
//                                                         </svg>
//                                                     </div>
//                                                     <div className="shop-item-card-inner-text">
//                                                         <div className="shop-item-card-inner-product-name"></div>
//                                                         <div className="shop-item-card-inner-product-details">
//                                                             <div className="shop-item-card-inner-blur">
//                                                                 <div className="shop-item-card-inner-blur-text-lrg" style={{ color: `white` }}>New Year</div>
//                                                                 <div className="shop-item-card-inner-blur-text-med" style={{ color: `white` }}>Ringing in 2024!</div>
//                                                                 <div className="shop-item-price-tags-container" >
//                                                                     <h2 className="shop-item-price-tags-h2-medium" style={{ color: `white` }}><span className="shop-item-striked-price">$4.99</span></h2>
//                                                                     <h2 className="shop-item-price-tags-h2-medium" style={{ color: `white` }}>
//                                                                         <StrifeNitroBadgeIcon className="shop-item-nitro-ball-icon" height={24} width={24} />
//                                                                         <span className="shop-item-price">$3.99</span>
//                                                                     </h2>
//                                                                 </div>

//                                                             </div>
//                                                             <div className="shop-item-card-inner-hover">
//                                                                 <div className="shop-item-card-inner-hover-upsell-container">
//                                                                     <div className="shop-item-card-inner-blur-text-med" style={{ color: `white` }}>Access to purchase this decoration is only available with Nitro.</div>
//                                                                     <div className="shop-item-card-button-container">
//                                                                         <button type="button" className="shop-buttons shop-item-shiny-button global-button-size-medium button-look-filled global-button-full-width"
//                                                                             onClick={(e) => { e.stopPropagation(); openModal("subToNitroPro"); }}>
//                                                                             <div className="global-button-contents look-filled-button-contents shopPremiumSubscribeButton">
//                                                                                 <StrifeNitroBadgeIcon className="shop-premium-nitro-ball-icon" height={24} width={24} />
//                                                                                 <span className="shopbuttonText">Unlock Shop with Nitro</span>
//                                                                                 <div className="shiny-button-container">
//                                                                                     <div className="shiny-button-flex">
//                                                                                         <div className="shiny-button-inner"></div>
//                                                                                     </div>
//                                                                                 </div>
//                                                                             </div>
//                                                                         </button>
//                                                                         <button type="button" className="shop-buttons shop-item-preview-button global-button-growth button-look-filled"
//                                                                             onClick={(e) => {
//                                                                                 e.preventDefault();
//                                                                                 openModal("avatarDecorationPreviewModal", "winter-wonderland-effect", "", "newYear2024");
//                                                                             }}>
//                                                                             <div className="global-button-contents look-filled-button-contents shop-item-previewButtonInner">
//                                                                                 <EnableCameraViewIcon height={24} width={24} />
//                                                                             </div>
//                                                                         </button>
//                                                                     </div>
//                                                                 </div>
//                                                             </div>

//                                                         </div>
//                                                     </div>
//                                                 </div>
//                                                 <div className="shop-item-card winter-wonderland-items" role="button" tabIndex={0}
//                                                     onClick={(e) => {
//                                                         e.preventDefault();
//                                                         openModal("avatarDecorationPreviewModal", "winter-wonderland-effect", "", "freshPine");
//                                                     }}
//                                                     style={{
//                                                         background: `linear-gradient(rgb(71, 126, 255), rgb(21, 77, 209)) border-box border-box`,
//                                                         borderColor: `rgba(45, 101, 230, 0.4)`,
//                                                         boxShadow: `none`
//                                                     }} >
//                                                     <div className="shop-item-card-inner" style={{ width: `120px`, height: `120px` }}>
//                                                         <svg width="120" height="120" viewBox="0 0 120 120" className="ssxcore-svg-mask" aria-hidden="true">
//                                                             <foreignObject x="0" y="0" width="120" height="120" mask="url(#svg-mask-avatar-default)">
//                                                                 <div className="ssxcore-avatar-stack">
//                                                                     <img alt=" " className="halloween-wumpus-avatar-img" aria-hidden="true" />
//                                                                 </div>
//                                                             </foreignObject>
//                                                         </svg>
//                                                         <svg width="144" height="144" viewBox="0 0 144 144" className="ssxcore-svg-avatar-decoration" aria-hidden="true">
//                                                             <foreignObject x="0" y="0" width="144" height="144" >
//                                                                 <div className="ssxcore-avatar-stack">
//                                                                     <img className="winter-wonderland-fresh-pine" alt=" " aria-hidden="true" />
//                                                                 </div>
//                                                             </foreignObject>
//                                                         </svg>
//                                                     </div>
//                                                     <div className="shop-item-card-inner-text">
//                                                         <div className="shop-item-card-inner-product-name"></div>
//                                                         <div className="shop-item-card-inner-product-details">
//                                                             <div className="shop-item-card-inner-blur">
//                                                                 <div className="shop-item-card-inner-blur-text-lrg" style={{ color: `white` }}>Fresh Pine</div>
//                                                                 <div className="shop-item-card-inner-blur-text-med" style={{ color: `white` }}>Ah...the smell of Winter.</div>
//                                                                 <div className="shop-item-price-tags-container" >
//                                                                     <h2 className="shop-item-price-tags-h2-medium" style={{ color: `white` }}><span className="shop-item-striked-price">$4.99</span></h2>
//                                                                     <h2 className="shop-item-price-tags-h2-medium" style={{ color: `white` }}>
//                                                                         <StrifeNitroBadgeIcon className="shop-item-nitro-ball-icon" height={24} width={24} />
//                                                                         <span className="shop-item-price">$3.99</span>
//                                                                     </h2>
//                                                                 </div>

//                                                             </div>
//                                                             <div className="shop-item-card-inner-hover">
//                                                                 <div className="shop-item-card-inner-hover-upsell-container">
//                                                                     <div className="shop-item-card-inner-blur-text-med" style={{ color: `white` }}>Access to purchase this decoration is only available with Nitro.</div>
//                                                                     <div className="shop-item-card-button-container">
//                                                                         <button type="button" className="shop-buttons shop-item-shiny-button global-button-size-medium button-look-filled global-button-full-width"
//                                                                             onClick={(e) => { e.stopPropagation(); openModal("subToNitroPro"); }}>
//                                                                             <div className="global-button-contents look-filled-button-contents shopPremiumSubscribeButton">
//                                                                                 <StrifeNitroBadgeIcon className="shop-premium-nitro-ball-icon" height={24} width={24} />
//                                                                                 <span className="shopbuttonText">Unlock Shop with Nitro</span>
//                                                                                 <div className="shiny-button-container">
//                                                                                     <div className="shiny-button-flex">
//                                                                                         <div className="shiny-button-inner"></div>
//                                                                                     </div>
//                                                                                 </div>
//                                                                             </div>
//                                                                         </button>
//                                                                         <button type="button" className="shop-buttons shop-item-preview-button global-button-growth button-look-filled"
//                                                                             onClick={(e) => {
//                                                                                 e.preventDefault();
//                                                                                 openModal("avatarDecorationPreviewModal", "winter-wonderland-effect", "", "freshPine");
//                                                                             }}>
//                                                                             <div className="global-button-contents look-filled-button-contents shop-item-previewButtonInner">
//                                                                                 <EnableCameraViewIcon height={24} width={24} />
//                                                                             </div>
//                                                                         </button>
//                                                                     </div>
//                                                                 </div>
//                                                             </div>

//                                                         </div>
//                                                     </div>
//                                                 </div>
//                                                 <div className="shop-item-card winter-wonderland-items" role="button" tabIndex={0}
//                                                     onClick={(e) => {
//                                                         e.preventDefault();
//                                                         openModal("avatarDecorationPreviewModal", "winter-wonderland-effect", "", "snowGlobe");
//                                                     }}
//                                                     style={{
//                                                         background: `linear-gradient(rgb(71, 126, 255), rgb(21, 77, 209)) border-box border-box`,
//                                                         borderColor: `rgba(45, 101, 230, 0.4)`,
//                                                         boxShadow: `none`
//                                                     }} >
//                                                     <div className="shop-item-card-inner" style={{ width: `120px`, height: `120px` }}>
//                                                         <svg width="120" height="120" viewBox="0 0 120 120" className="ssxcore-svg-mask" aria-hidden="true">
//                                                             <foreignObject x="0" y="0" width="120" height="120" mask="url(#svg-mask-avatar-default)">
//                                                                 <div className="ssxcore-avatar-stack">
//                                                                     <img alt=" " className="halloween-wumpus-avatar-img" aria-hidden="true" />
//                                                                 </div>
//                                                             </foreignObject>
//                                                         </svg>
//                                                         <svg width="144" height="144" viewBox="0 0 144 144" className="ssxcore-svg-avatar-decoration" aria-hidden="true">
//                                                             <foreignObject x="0" y="0" width="144" height="144" >
//                                                                 <div className="ssxcore-avatar-stack">
//                                                                     <img className="winter-wonderland-snow-globe" alt=" " aria-hidden="true" />
//                                                                 </div>
//                                                             </foreignObject>
//                                                         </svg>
//                                                     </div>
//                                                     <div className="shop-item-card-inner-text">
//                                                         <div className="shop-item-card-inner-product-name"></div>
//                                                         <div className="shop-item-card-inner-product-details">
//                                                             <div className="shop-item-card-inner-blur">
//                                                                 <div className="shop-item-card-inner-blur-text-lrg" style={{ color: `white` }}>Snowglobe</div>
//                                                                 <div className="shop-item-card-inner-blur-text-med" style={{ color: `white` }}>Try not to shake too hard.</div>
//                                                                 <div className="shop-item-price-tags-container" >
//                                                                     <h2 className="shop-item-price-tags-h2-medium" style={{ color: `white` }}><span className="shop-item-striked-price">$4.99</span></h2>
//                                                                     <h2 className="shop-item-price-tags-h2-medium" style={{ color: `white` }}>
//                                                                         <StrifeNitroBadgeIcon className="shop-item-nitro-ball-icon" height={24} width={24} />
//                                                                         <span className="shop-item-price">$3.99</span>
//                                                                     </h2>
//                                                                 </div>

//                                                             </div>
//                                                             <div className="shop-item-card-inner-hover">
//                                                                 <div className="shop-item-card-inner-hover-upsell-container">
//                                                                     <div className="shop-item-card-inner-blur-text-med" style={{ color: `white` }}>Access to purchase this decoration is only available with Nitro.</div>
//                                                                     <div className="shop-item-card-button-container">
//                                                                         <button type="button" className="shop-buttons shop-item-shiny-button global-button-size-medium button-look-filled global-button-full-width"
//                                                                             onClick={(e) => { e.stopPropagation(); openModal("subToNitroPro"); }}>
//                                                                             <div className="global-button-contents look-filled-button-contents shopPremiumSubscribeButton">
//                                                                                 <StrifeNitroBadgeIcon className="shop-premium-nitro-ball-icon" height={24} width={24} />
//                                                                                 <span className="shopbuttonText">Unlock Shop with Nitro</span>
//                                                                                 <div className="shiny-button-container">
//                                                                                     <div className="shiny-button-flex">
//                                                                                         <div className="shiny-button-inner"></div>
//                                                                                     </div>
//                                                                                 </div>
//                                                                             </div>
//                                                                         </button>
//                                                                         <button type="button" className="shop-buttons shop-item-preview-button global-button-growth button-look-filled"
//                                                                             onClick={(e) => {
//                                                                                 e.preventDefault();
//                                                                                 openModal("avatarDecorationPreviewModal", "winter-wonderland-effect", "", "snowGlobe");
//                                                                             }}>
//                                                                             <div className="global-button-contents look-filled-button-contents shop-item-previewButtonInner">
//                                                                                 <EnableCameraViewIcon height={24} width={24} />
//                                                                             </div>
//                                                                         </button>
//                                                                     </div>
//                                                                 </div>
//                                                             </div>

//                                                         </div>
//                                                     </div>
//                                                 </div>
//                                                 <div className="shop-item-card winter-wonderland-items" role="button" tabIndex={0}
//                                                     onClick={(e) => {
//                                                         e.preventDefault();
//                                                         openModal("avatarDecorationPreviewModal", "winter-wonderland-effect", "", "stringLights");
//                                                     }}
//                                                     style={{
//                                                         background: `linear-gradient(rgb(71, 126, 255), rgb(21, 77, 209)) border-box border-box`,
//                                                         borderColor: `rgba(45, 101, 230, 0.4)`,
//                                                         boxShadow: `none`
//                                                     }} >
//                                                     <div className="shop-item-card-inner" style={{ width: `120px`, height: `120px` }}>
//                                                         <svg width="120" height="120" viewBox="0 0 120 120" className="ssxcore-svg-mask" aria-hidden="true">
//                                                             <foreignObject x="0" y="0" width="120" height="120" mask="url(#svg-mask-avatar-default)">
//                                                                 <div className="ssxcore-avatar-stack">
//                                                                     <img alt=" " className="halloween-wumpus-avatar-img" aria-hidden="true" />
//                                                                 </div>
//                                                             </foreignObject>
//                                                         </svg>
//                                                         <svg width="144" height="144" viewBox="0 0 144 144" className="ssxcore-svg-avatar-decoration" aria-hidden="true">
//                                                             <foreignObject x="0" y="0" width="144" height="144" >
//                                                                 <div className="ssxcore-avatar-stack">
//                                                                     <img className="winter-wonderland-string-lights" alt=" " aria-hidden="true" />
//                                                                 </div>
//                                                             </foreignObject>
//                                                         </svg>
//                                                     </div>
//                                                     <div className="shop-item-card-inner-text">
//                                                         <div className="shop-item-card-inner-product-name"></div>
//                                                         <div className="shop-item-card-inner-product-details">
//                                                             <div className="shop-item-card-inner-blur">
//                                                                 <div className="shop-item-card-inner-blur-text-lrg" style={{ color: `white` }}>String Lights</div>
//                                                                 <div className="shop-item-card-inner-blur-text-med" style={{ color: `white` }}>String up some holiday cheer.</div>
//                                                                 <div className="shop-item-price-tags-container" >
//                                                                     <h2 className="shop-item-price-tags-h2-medium" style={{ color: `white` }}><span className="shop-item-striked-price">$4.99</span></h2>
//                                                                     <h2 className="shop-item-price-tags-h2-medium" style={{ color: `white` }}>
//                                                                         <StrifeNitroBadgeIcon className="shop-item-nitro-ball-icon" height={24} width={24} />
//                                                                         <span className="shop-item-price">$3.99</span>
//                                                                     </h2>
//                                                                 </div>

//                                                             </div>
//                                                             <div className="shop-item-card-inner-hover">
//                                                                 <div className="shop-item-card-inner-hover-upsell-container">
//                                                                     <div className="shop-item-card-inner-blur-text-med" style={{ color: `white` }}>Access to purchase this decoration is only available with Nitro.</div>
//                                                                     <div className="shop-item-card-button-container">
//                                                                         <button type="button" className="shop-buttons shop-item-shiny-button global-button-size-medium button-look-filled global-button-full-width"
//                                                                             onClick={(e) => { e.stopPropagation(); openModal("subToNitroPro"); }}>
//                                                                             <div className="global-button-contents look-filled-button-contents shopPremiumSubscribeButton">
//                                                                                 <StrifeNitroBadgeIcon className="shop-premium-nitro-ball-icon" height={24} width={24} />
//                                                                                 <span className="shopbuttonText">Unlock Shop with Nitro</span>
//                                                                                 <div className="shiny-button-container">
//                                                                                     <div className="shiny-button-flex">
//                                                                                         <div className="shiny-button-inner"></div>
//                                                                                     </div>
//                                                                                 </div>
//                                                                             </div>
//                                                                         </button>
//                                                                         <button type="button" className="shop-buttons shop-item-preview-button global-button-growth button-look-filled"
//                                                                             onClick={(e) => {
//                                                                                 e.preventDefault();
//                                                                                 openModal("avatarDecorationPreviewModal", "winter-wonderland-effect", "", "stringLights");
//                                                                             }}>
//                                                                             <div className="global-button-contents look-filled-button-contents shop-item-previewButtonInner">
//                                                                                 <EnableCameraViewIcon height={24} width={24} />
//                                                                             </div>
//                                                                         </button>
//                                                                     </div>
//                                                                 </div>
//                                                             </div>

//                                                         </div>
//                                                     </div>
//                                                 </div>

//                                             </div>
//                                         </div>

//                                         <div>
//                                             <div className="shop-item-type-title-container">
//                                                 <div className="shop-item-type" style={{ color: `var(--header-secondary)` }}>Profile Effects</div>
//                                             </div>

//                                             <div className="shop-item-cards-container">

//                                                 <div className="shop-item-card winter-wonderland-items" role="button" tabIndex={0}
//                                                     onClick={(e) => {
//                                                         e.preventDefault();
//                                                         openModal("profileEffectModal", "halloween-effect", "ghoulishGraffiti");
//                                                     }}
//                                                     style={{
//                                                         background: `linear-gradient(rgb(71, 126, 255), rgb(21, 77, 209)) border-box border-box`,
//                                                         borderColor: `rgba(45, 101, 230, 0.4)`,
//                                                         boxShadow: `none`
//                                                     }} >


//                                                     <div className="shop-item-profileEffectPreview">
//                                                         <div className="shop-item-profileEffectPreviewContainer">
//                                                             <img className="shop-item-upc-preview" alt=" " />
//                                                             <div>
//                                                                 <div className="shop-item-upc-profile-effects">
//                                                                     <div className="shop-item-upc-profile-effects-inner">
//                                                                         <img className="shop-item-ghoulish-graffiti" alt=" " style={{ top: `0px` }} />
//                                                                     </div>
//                                                                 </div>
//                                                             </div>
//                                                         </div>
//                                                     </div>

//                                                     <div className="shop-item-card-inner-text shop-item-card-inner-text-profile-effect">
//                                                         <div className="shop-item-card-inner-product-name"></div>
//                                                         <div className="shop-item-card-inner-product-details">
//                                                             <div className="shop-item-card-inner-blur">
//                                                                 <div className="shop-item-card-inner-blur-text-lrg" style={{ color: `white` }}>Deck the halls</div>
//                                                                 <div className="shop-item-card-inner-blur-text-med" style={{ color: `white` }}>Keep out of reach from cats</div>
//                                                                 <div className="shop-item-price-tags-container" >
//                                                                     <h2 className="shop-item-price-tags-h2-medium" style={{ color: `white` }}><span className="shop-item-striked-price">$4.99</span></h2>
//                                                                     <h2 className="shop-item-price-tags-h2-medium" style={{ color: `white` }}>
//                                                                         <StrifeNitroBadgeIcon className="shop-item-nitro-ball-icon" height={24} width={24} />
//                                                                         <span className="shop-item-price">$3.99</span>
//                                                                     </h2>
//                                                                 </div>

//                                                             </div>
//                                                             <div className="shop-item-card-inner-hover">
//                                                                 <div className="shop-item-card-inner-hover-upsell-container">
//                                                                     <div className="shop-item-card-inner-blur-text-med" style={{ color: `white` }}>Access to purchase this effect is only available with Nitro.</div>
//                                                                     <div className="shop-item-card-button-container">
//                                                                         <button type="button" className="shop-buttons shop-item-shiny-button global-button-size-medium button-look-filled global-button-full-width"
//                                                                             onClick={(e) => { e.stopPropagation(); openModal("subToNitroPro"); }}>
//                                                                             <div className="global-button-contents look-filled-button-contents shopPremiumSubscribeButton">
//                                                                                 <StrifeNitroBadgeIcon className="shop-premium-nitro-ball-icon" height={24} width={24} />
//                                                                                 <span className="shopbuttonText">Unlock Shop with Nitro</span>
//                                                                                 <div className="shiny-button-container">
//                                                                                     <div className="shiny-button-flex">
//                                                                                         <div className="shiny-button-inner"></div>
//                                                                                     </div>
//                                                                                 </div>
//                                                                             </div>
//                                                                         </button>
//                                                                         <button type="button" className="shop-buttons shop-item-preview-button global-button-growth button-look-filled"
//                                                                             onClick={(e) => {
//                                                                                 e.preventDefault();
//                                                                                 openModal("profileEffectModal", "halloween-effect", "ghoulishGraffiti");
//                                                                             }}>
//                                                                             <div className="global-button-contents look-filled-button-contents shop-item-previewButtonInner">
//                                                                                 <EnableCameraViewIcon height={24} width={24} />
//                                                                             </div>
//                                                                         </button>
//                                                                     </div>
//                                                                 </div>
//                                                             </div>
//                                                         </div>
//                                                     </div>
//                                                 </div>

//                                                 <div className="shop-item-card winter-wonderland-items" role="button" tabIndex={0}
//                                                     onClick={(e) => {
//                                                         e.preventDefault();
//                                                         openModal("profileEffectModal", "halloween-effect", "ghoulishGraffiti");
//                                                     }}
//                                                     style={{
//                                                         background: `linear-gradient(rgb(71, 126, 255), rgb(21, 77, 209)) border-box border-box`,
//                                                         borderColor: `rgba(45, 101, 230, 0.4)`,
//                                                         boxShadow: `none`
//                                                     }} >


//                                                     <div className="shop-item-profileEffectPreview">
//                                                         <div className="shop-item-profileEffectPreviewContainer">
//                                                             <img className="shop-item-upc-preview" alt=" " />
//                                                             <div>
//                                                                 <div className="shop-item-upc-profile-effects">
//                                                                     <div className="shop-item-upc-profile-effects-inner">
//                                                                         <img className="shop-item-ghoulish-graffiti" alt=" " style={{ top: `0px` }} />
//                                                                     </div>
//                                                                 </div>
//                                                             </div>
//                                                         </div>
//                                                     </div>

//                                                     <div className="shop-item-card-inner-text shop-item-card-inner-text-profile-effect">
//                                                         <div className="shop-item-card-inner-product-name"></div>
//                                                         <div className="shop-item-card-inner-product-details">
//                                                             <div className="shop-item-card-inner-blur">
//                                                                 <div className="shop-item-card-inner-blur-text-lrg" style={{ color: `white` }}>Snowy Shenanigans</div>
//                                                                 <div className="shop-item-card-inner-blur-text-med" style={{ color: `white` }}>Gone in a flurry.</div>
//                                                                 <div className="shop-item-price-tags-container" >
//                                                                     <h2 className="shop-item-price-tags-h2-medium" style={{ color: `white` }}><span className="shop-item-striked-price">$4.99</span></h2>
//                                                                     <h2 className="shop-item-price-tags-h2-medium" style={{ color: `white` }}>
//                                                                         <StrifeNitroBadgeIcon className="shop-item-nitro-ball-icon" height={24} width={24} />
//                                                                         <span className="shop-item-price">$3.99</span>
//                                                                     </h2>
//                                                                 </div>

//                                                             </div>
//                                                             <div className="shop-item-card-inner-hover">
//                                                                 <div className="shop-item-card-inner-hover-upsell-container">
//                                                                     <div className="shop-item-card-inner-blur-text-med" style={{ color: `white` }}>Access to purchase this effect is only available with Nitro.</div>
//                                                                     <div className="shop-item-card-button-container">
//                                                                         <button type="button" className="shop-buttons shop-item-shiny-button global-button-size-medium button-look-filled global-button-full-width"
//                                                                             onClick={(e) => { e.stopPropagation(); openModal("subToNitroPro"); }}>
//                                                                             <div className="global-button-contents look-filled-button-contents shopPremiumSubscribeButton">
//                                                                                 <StrifeNitroBadgeIcon className="shop-premium-nitro-ball-icon" height={24} width={24} />
//                                                                                 <span className="shopbuttonText">Unlock Shop with Nitro</span>
//                                                                                 <div className="shiny-button-container">
//                                                                                     <div className="shiny-button-flex">
//                                                                                         <div className="shiny-button-inner"></div>
//                                                                                     </div>
//                                                                                 </div>
//                                                                             </div>
//                                                                         </button>
//                                                                         <button type="button" className="shop-buttons shop-item-preview-button global-button-growth button-look-filled"
//                                                                             onClick={(e) => {
//                                                                                 e.preventDefault();
//                                                                                 openModal("profileEffectModal", "halloween-effect", "ghoulishGraffiti");
//                                                                             }}>
//                                                                             <div className="global-button-contents look-filled-button-contents shop-item-previewButtonInner">
//                                                                                 <EnableCameraViewIcon height={24} width={24} />
//                                                                             </div>
//                                                                         </button>
//                                                                     </div>
//                                                                 </div>
//                                                             </div>
//                                                         </div>
//                                                     </div>
//                                                 </div>

//                                             </div>
//                                         </div>
//                                     </div>

//                                     <div>
//                                         <div className="shop-banner-img shop-banner-fantasy">
//                                             <div className="shop-strife-banner-logo-halloween">
//                                                 <StrifeBannerLogo width={124} height={24} className={'shop-strife-banner-logo-halloween-icon'} />
//                                             </div>
//                                             <img className="shop-banner-fantasy-logo" alt=" " />
//                                             <div className="shop-halloween-subtext" style={{ color: `white` }}>There's a calm and cozy vibe in the air.</div>
//                                         </div>
//                                         <div>
//                                             <div className="shop-item-type" style={{ color: `var(--header-secondary)` }}>Avatar Decorations</div>
//                                             <div className="shop-item-cards-container">
//                                                 <div className="shop-item-card fantasy-items" role="button" tabIndex={0}
//                                                     onClick={(e) => {
//                                                         e.preventDefault();
//                                                         openModal("avatarDecorationPreviewModal", "fantasy-effect", "", "flamingSword");
//                                                     }}
//                                                     style={{
//                                                         background: `linear-gradient(rgb(20, 97, 68), rgb(2, 24, 13)) border-box border-box`,
//                                                         borderColor: `rgba(11, 61, 40, 0.4)`,
//                                                         boxShadow: `none`
//                                                     }} >
//                                                     <div className="shop-item-card-inner" style={{ width: `120px`, height: `120px` }}>
//                                                         <svg width="120" height="120" viewBox="0 0 120 120" className="ssxcore-svg-mask" aria-hidden="true">
//                                                             <foreignObject x="0" y="0" width="120" height="120" mask="url(#svg-mask-avatar-default)">
//                                                                 <div className="ssxcore-avatar-stack">
//                                                                     <img alt=" " className="halloween-wumpus-avatar-img" aria-hidden="true" />
//                                                                 </div>
//                                                             </foreignObject>
//                                                         </svg>
//                                                         <svg width="144" height="144" viewBox="0 0 144 144" className="ssxcore-svg-avatar-decoration" aria-hidden="true">
//                                                             <foreignObject x="0" y="0" width="144" height="144" >
//                                                                 <div className="ssxcore-avatar-stack">
//                                                                     <img className="fantasy-flaming-sword" alt=" " aria-hidden="true" />
//                                                                 </div>
//                                                             </foreignObject>
//                                                         </svg>
//                                                     </div>
//                                                     <div className="shop-item-card-inner-text">
//                                                         <div className="shop-item-card-inner-product-name"></div>
//                                                         <div className="shop-item-card-inner-product-details">
//                                                             <div className="shop-item-card-inner-blur">
//                                                                 <div className="shop-item-card-inner-blur-text-lrg" style={{ color: `white` }}>Flaming Sword</div>
//                                                                 <div className="shop-item-card-inner-blur-text-med" style={{ color: `white` }}>Slaying the look and the monsters.</div>
//                                                                 <div className="shop-item-price-tags-container" >
//                                                                     <h2 className="shop-item-price-tags-h2-medium" style={{ color: `white` }}><span className="shop-item-striked-price">$9.99</span></h2>
//                                                                     <h2 className="shop-item-price-tags-h2-medium" style={{ color: `white` }}>
//                                                                         <StrifeNitroBadgeIcon className="shop-item-nitro-ball-icon" height={24} width={24} />
//                                                                         <span className="shop-item-price">$6.99</span>
//                                                                     </h2>
//                                                                 </div>

//                                                             </div>
//                                                             <div className="shop-item-card-inner-hover">
//                                                                 <div className="shop-item-card-inner-hover-upsell-container">
//                                                                     <div className="shop-item-card-inner-blur-text-med" style={{ color: `white` }}>Access to purchase this decoration is only available with Nitro.</div>
//                                                                     <div className="shop-item-card-button-container">
//                                                                         <button type="button" className="shop-buttons shop-item-shiny-button global-button-size-medium button-look-filled global-button-full-width"
//                                                                             onClick={(e) => { e.stopPropagation(); openModal("subToNitroPro"); }}>
//                                                                             <div className="global-button-contents look-filled-button-contents shopPremiumSubscribeButton">
//                                                                                 <StrifeNitroBadgeIcon className="shop-premium-nitro-ball-icon" height={24} width={24} />
//                                                                                 <span className="shopbuttonText">Unlock Shop with Nitro</span>
//                                                                                 <div className="shiny-button-container">
//                                                                                     <div className="shiny-button-flex">
//                                                                                         <div className="shiny-button-inner"></div>
//                                                                                     </div>
//                                                                                 </div>
//                                                                             </div>
//                                                                         </button>
//                                                                         <button type="button" className="shop-buttons shop-item-preview-button global-button-growth button-look-filled"
//                                                                             onClick={(e) => {
//                                                                                 e.preventDefault();
//                                                                                 openModal("avatarDecorationPreviewModal", "fantasy-effect", "", "flamingSword");
//                                                                             }}>
//                                                                             <div className="global-button-contents look-filled-button-contents shop-item-previewButtonInner">
//                                                                                 <EnableCameraViewIcon height={24} width={24} />
//                                                                             </div>
//                                                                         </button>
//                                                                     </div>
//                                                                 </div>
//                                                             </div>
//                                                         </div>
//                                                     </div>
//                                                 </div>

//                                                 <div className="shop-item-card fantasy-items" role="button" tabIndex={0}
//                                                     onClick={(e) => {
//                                                         e.preventDefault();
//                                                         openModal("avatarDecorationPreviewModal", "fantasy-effect", "", "magicPotion");
//                                                     }}
//                                                     style={{
//                                                         background: `linear-gradient(rgb(20, 97, 68), rgb(2, 24, 13)) border-box border-box`,
//                                                         borderColor: `rgba(11, 61, 40, 0.4)`,
//                                                         boxShadow: `none`
//                                                     }} >
//                                                     <div className="shop-item-card-inner" style={{ width: `120px`, height: `120px` }}>
//                                                         <svg width="120" height="120" viewBox="0 0 120 120" className="ssxcore-svg-mask" aria-hidden="true">
//                                                             <foreignObject x="0" y="0" width="120" height="120" mask="url(#svg-mask-avatar-default)">
//                                                                 <div className="ssxcore-avatar-stack">
//                                                                     <img alt=" " className="halloween-wumpus-avatar-img" aria-hidden="true" />
//                                                                 </div>
//                                                             </foreignObject>
//                                                         </svg>
//                                                         <svg width="144" height="144" viewBox="0 0 144 144" className="ssxcore-svg-avatar-decoration" aria-hidden="true">
//                                                             <foreignObject x="0" y="0" width="144" height="144" >
//                                                                 <div className="ssxcore-avatar-stack">
//                                                                     <img className="fantasy-magic-potion" alt=" " aria-hidden="true" />
//                                                                 </div>
//                                                             </foreignObject>
//                                                         </svg>
//                                                     </div>
//                                                     <div className="shop-item-card-inner-text">
//                                                         <div className="shop-item-card-inner-product-name"></div>
//                                                         <div className="shop-item-card-inner-product-details">
//                                                             <div className="shop-item-card-inner-blur">
//                                                                 <div className="shop-item-card-inner-blur-text-lrg" style={{ color: `white` }}>Magical Potion</div>
//                                                                 <div className="shop-item-card-inner-blur-text-med" style={{ color: `white` }}>Drink at your own risk.</div>
//                                                                 <div className="shop-item-price-tags-container" >
//                                                                     <h2 className="shop-item-price-tags-h2-medium" style={{ color: `white` }}><span className="shop-item-striked-price">$9.99</span></h2>
//                                                                     <h2 className="shop-item-price-tags-h2-medium" style={{ color: `white` }}>
//                                                                         <StrifeNitroBadgeIcon className="shop-item-nitro-ball-icon" height={24} width={24} />
//                                                                         <span className="shop-item-price">$6.99</span>
//                                                                     </h2>
//                                                                 </div>

//                                                             </div>
//                                                             <div className="shop-item-card-inner-hover">
//                                                                 <div className="shop-item-card-inner-hover-upsell-container">
//                                                                     <div className="shop-item-card-inner-blur-text-med" style={{ color: `white` }}>Access to purchase this decoration is only available with Nitro.</div>
//                                                                     <div className="shop-item-card-button-container">
//                                                                         <button type="button" className="shop-buttons shop-item-shiny-button global-button-size-medium button-look-filled global-button-full-width"
//                                                                             onClick={(e) => { e.stopPropagation(); openModal("subToNitroPro"); }}>
//                                                                             <div className="global-button-contents look-filled-button-contents shopPremiumSubscribeButton">
//                                                                                 <StrifeNitroBadgeIcon className="shop-premium-nitro-ball-icon" height={24} width={24} />
//                                                                                 <span className="shopbuttonText">Unlock Shop with Nitro</span>
//                                                                                 <div className="shiny-button-container">
//                                                                                     <div className="shiny-button-flex">
//                                                                                         <div className="shiny-button-inner"></div>
//                                                                                     </div>
//                                                                                 </div>
//                                                                             </div>
//                                                                         </button>
//                                                                         <button type="button" className="shop-buttons shop-item-preview-button global-button-growth button-look-filled"
//                                                                             onClick={(e) => {
//                                                                                 e.preventDefault();
//                                                                                 openModal("avatarDecorationPreviewModal", "fantasy-effect", "", "magicPotion");
//                                                                             }}>
//                                                                             <div className="global-button-contents look-filled-button-contents shop-item-previewButtonInner">
//                                                                                 <EnableCameraViewIcon height={24} width={24} />
//                                                                             </div>
//                                                                         </button>
//                                                                     </div>
//                                                                 </div>
//                                                             </div>
//                                                         </div>
//                                                     </div>
//                                                 </div>

//                                                 <div className="shop-item-card fantasy-items" role="button" tabIndex={0}
//                                                     onClick={(e) => {
//                                                         e.preventDefault();
//                                                         openModal("avatarDecorationPreviewModal", "fantasy-effect", "", "fairySprites");
//                                                     }}
//                                                     style={{
//                                                         background: `linear-gradient(rgb(20, 97, 68), rgb(2, 24, 13)) border-box border-box`,
//                                                         borderColor: `rgba(11, 61, 40, 0.4)`,
//                                                         boxShadow: `none`
//                                                     }} >
//                                                     <div className="shop-item-card-inner" style={{ width: `120px`, height: `120px` }}>
//                                                         <svg width="120" height="120" viewBox="0 0 120 120" className="ssxcore-svg-mask" aria-hidden="true">
//                                                             <foreignObject x="0" y="0" width="120" height="120" mask="url(#svg-mask-avatar-default)">
//                                                                 <div className="ssxcore-avatar-stack">
//                                                                     <img alt=" " className="halloween-wumpus-avatar-img" aria-hidden="true" />
//                                                                 </div>
//                                                             </foreignObject>
//                                                         </svg>
//                                                         <svg width="144" height="144" viewBox="0 0 144 144" className="ssxcore-svg-avatar-decoration" aria-hidden="true">
//                                                             <foreignObject x="0" y="0" width="144" height="144" >
//                                                                 <div className="ssxcore-avatar-stack">
//                                                                     <img className="fantasy-fairy-sprites" alt=" " aria-hidden="true" />
//                                                                 </div>
//                                                             </foreignObject>
//                                                         </svg>
//                                                     </div>
//                                                     <div className="shop-item-card-inner-text">
//                                                         <div className="shop-item-card-inner-product-name"></div>
//                                                         <div className="shop-item-card-inner-product-details">
//                                                             <div className="shop-item-card-inner-blur">
//                                                                 <div className="shop-item-card-inner-blur-text-lrg" style={{ color: `white` }}>Fairy Sprites</div>
//                                                                 <div className="shop-item-card-inner-blur-text-med" style={{ color: `white` }}>Here to guide you on your path.</div>
//                                                                 <div className="shop-item-price-tags-container" >
//                                                                     <h2 className="shop-item-price-tags-h2-medium" style={{ color: `white` }}><span className="shop-item-striked-price">$9.99</span></h2>
//                                                                     <h2 className="shop-item-price-tags-h2-medium" style={{ color: `white` }}>
//                                                                         <StrifeNitroBadgeIcon className="shop-item-nitro-ball-icon" height={24} width={24} />
//                                                                         <span className="shop-item-price">$6.99</span>
//                                                                     </h2>
//                                                                 </div>

//                                                             </div>
//                                                             <div className="shop-item-card-inner-hover">
//                                                                 <div className="shop-item-card-inner-hover-upsell-container">
//                                                                     <div className="shop-item-card-inner-blur-text-med" style={{ color: `white` }}>Access to purchase this decoration is only available with Nitro.</div>
//                                                                     <div className="shop-item-card-button-container">
//                                                                         <button type="button" className="shop-buttons shop-item-shiny-button global-button-size-medium button-look-filled global-button-full-width"
//                                                                             onClick={(e) => { e.stopPropagation(); openModal("subToNitroPro"); }}>
//                                                                             <div className="global-button-contents look-filled-button-contents shopPremiumSubscribeButton">
//                                                                                 <StrifeNitroBadgeIcon className="shop-premium-nitro-ball-icon" height={24} width={24} />
//                                                                                 <span className="shopbuttonText">Unlock Shop with Nitro</span>
//                                                                                 <div className="shiny-button-container">
//                                                                                     <div className="shiny-button-flex">
//                                                                                         <div className="shiny-button-inner"></div>
//                                                                                     </div>
//                                                                                 </div>
//                                                                             </div>
//                                                                         </button>
//                                                                         <button type="button" className="shop-buttons shop-item-preview-button global-button-growth button-look-filled"
//                                                                             onClick={(e) => {
//                                                                                 e.preventDefault();
//                                                                                 openModal("avatarDecorationPreviewModal", "fantasy-effect", "", "fairySprites");
//                                                                             }}>
//                                                                             <div className="global-button-contents look-filled-button-contents shop-item-previewButtonInner">
//                                                                                 <EnableCameraViewIcon height={24} width={24} />
//                                                                             </div>
//                                                                         </button>
//                                                                     </div>
//                                                                 </div>
//                                                             </div>
//                                                         </div>
//                                                     </div>
//                                                 </div>

//                                                 <div className="shop-item-card fantasy-items" role="button" tabIndex={0}
//                                                     onClick={(e) => {
//                                                         e.preventDefault();
//                                                         openModal("avatarDecorationPreviewModal", "fantasy-effect", "", "wizardsStaff");
//                                                     }}
//                                                     style={{
//                                                         background: `linear-gradient(rgb(20, 97, 68), rgb(2, 24, 13)) border-box border-box`,
//                                                         borderColor: `rgba(11, 61, 40, 0.4)`,
//                                                         boxShadow: `none`
//                                                     }} >
//                                                     <div className="shop-item-card-inner" style={{ width: `120px`, height: `120px` }}>
//                                                         <svg width="120" height="120" viewBox="0 0 120 120" className="ssxcore-svg-mask" aria-hidden="true">
//                                                             <foreignObject x="0" y="0" width="120" height="120" mask="url(#svg-mask-avatar-default)">
//                                                                 <div className="ssxcore-avatar-stack">
//                                                                     <img alt=" " className="halloween-wumpus-avatar-img" aria-hidden="true" />
//                                                                 </div>
//                                                             </foreignObject>
//                                                         </svg>
//                                                         <svg width="144" height="144" viewBox="0 0 144 144" className="ssxcore-svg-avatar-decoration" aria-hidden="true">
//                                                             <foreignObject x="0" y="0" width="144" height="144" >
//                                                                 <div className="ssxcore-avatar-stack">
//                                                                     <img className="fantasy-wizard-staff" alt=" " aria-hidden="true" />
//                                                                 </div>
//                                                             </foreignObject>
//                                                         </svg>
//                                                     </div>
//                                                     <div className="shop-item-card-inner-text">
//                                                         <div className="shop-item-card-inner-product-name"></div>
//                                                         <div className="shop-item-card-inner-product-details">
//                                                             <div className="shop-item-card-inner-blur">
//                                                                 <div className="shop-item-card-inner-blur-text-lrg" style={{ color: `white` }}>Wizard's Staff</div>
//                                                                 <div className="shop-item-card-inner-blur-text-med" style={{ color: `white` }}>How much power does it hold?</div>
//                                                                 <div className="shop-item-price-tags-container" >
//                                                                     <h2 className="shop-item-price-tags-h2-medium" style={{ color: `white` }}><span className="shop-item-striked-price">$9.99</span></h2>
//                                                                     <h2 className="shop-item-price-tags-h2-medium" style={{ color: `white` }}>
//                                                                         <StrifeNitroBadgeIcon className="shop-item-nitro-ball-icon" height={24} width={24} />
//                                                                         <span className="shop-item-price">$6.99</span>
//                                                                     </h2>
//                                                                 </div>

//                                                             </div>
//                                                             <div className="shop-item-card-inner-hover">
//                                                                 <div className="shop-item-card-inner-hover-upsell-container">
//                                                                     <div className="shop-item-card-inner-blur-text-med" style={{ color: `white` }}>Access to purchase this decoration is only available with Nitro.</div>
//                                                                     <div className="shop-item-card-button-container">
//                                                                         <button type="button" className="shop-buttons shop-item-shiny-button global-button-size-medium button-look-filled global-button-full-width"
//                                                                             onClick={(e) => { e.stopPropagation(); openModal("subToNitroPro"); }}>
//                                                                             <div className="global-button-contents look-filled-button-contents shopPremiumSubscribeButton">
//                                                                                 <StrifeNitroBadgeIcon className="shop-premium-nitro-ball-icon" height={24} width={24} />
//                                                                                 <span className="shopbuttonText">Unlock Shop with Nitro</span>
//                                                                                 <div className="shiny-button-container">
//                                                                                     <div className="shiny-button-flex">
//                                                                                         <div className="shiny-button-inner"></div>
//                                                                                     </div>
//                                                                                 </div>
//                                                                             </div>
//                                                                         </button>
//                                                                         <button type="button" className="shop-buttons shop-item-preview-button global-button-growth button-look-filled"
//                                                                             onClick={(e) => {
//                                                                                 e.preventDefault();
//                                                                                 openModal("avatarDecorationPreviewModal", "fantasy-effect", "", "wizardsStaff");
//                                                                             }}>
//                                                                             <div className="global-button-contents look-filled-button-contents shop-item-previewButtonInner">
//                                                                                 <EnableCameraViewIcon height={24} width={24} />
//                                                                             </div>
//                                                                         </button>
//                                                                     </div>
//                                                                 </div>
//                                                             </div>
//                                                         </div>
//                                                     </div>
//                                                 </div>

//                                                 <div className="shop-item-card fantasy-items" role="button" tabIndex={0}
//                                                     onClick={(e) => {
//                                                         e.preventDefault();
//                                                         openModal("avatarDecorationPreviewModal", "fantasy-effect", "", "glowingRunes");
//                                                     }}
//                                                     style={{
//                                                         background: `linear-gradient(rgb(20, 97, 68), rgb(2, 24, 13)) border-box border-box`,
//                                                         borderColor: `rgba(11, 61, 40, 0.4)`,
//                                                         boxShadow: `none`
//                                                     }} >
//                                                     <div className="shop-item-card-inner" style={{ width: `120px`, height: `120px` }}>
//                                                         <svg width="120" height="120" viewBox="0 0 120 120" className="ssxcore-svg-mask" aria-hidden="true">
//                                                             <foreignObject x="0" y="0" width="120" height="120" mask="url(#svg-mask-avatar-default)">
//                                                                 <div className="ssxcore-avatar-stack">
//                                                                     <img alt=" " className="halloween-wumpus-avatar-img" aria-hidden="true" />
//                                                                 </div>
//                                                             </foreignObject>
//                                                         </svg>
//                                                         <svg width="144" height="144" viewBox="0 0 144 144" className="ssxcore-svg-avatar-decoration" aria-hidden="true">
//                                                             <foreignObject x="0" y="0" width="144" height="144" >
//                                                                 <div className="ssxcore-avatar-stack">
//                                                                     <img className="fantasy-glowing-runes" alt=" " aria-hidden="true" />
//                                                                 </div>
//                                                             </foreignObject>
//                                                         </svg>
//                                                     </div>
//                                                     <div className="shop-item-card-inner-text">
//                                                         <div className="shop-item-card-inner-product-name"></div>
//                                                         <div className="shop-item-card-inner-product-details">
//                                                             <div className="shop-item-card-inner-blur">
//                                                                 <div className="shop-item-card-inner-blur-text-lrg" style={{ color: `white` }}>Glowing Runes</div>
//                                                                 <div className="shop-item-card-inner-blur-text-med" style={{ color: `white` }}>I wonder what these symbols mean.</div>
//                                                                 <div className="shop-item-price-tags-container" >
//                                                                     <h2 className="shop-item-price-tags-h2-medium" style={{ color: `white` }}><span className="shop-item-striked-price">$9.99</span></h2>
//                                                                     <h2 className="shop-item-price-tags-h2-medium" style={{ color: `white` }}>
//                                                                         <StrifeNitroBadgeIcon className="shop-item-nitro-ball-icon" height={24} width={24} />
//                                                                         <span className="shop-item-price">$6.99</span>
//                                                                     </h2>
//                                                                 </div>

//                                                             </div>
//                                                             <div className="shop-item-card-inner-hover">
//                                                                 <div className="shop-item-card-inner-hover-upsell-container">
//                                                                     <div className="shop-item-card-inner-blur-text-med" style={{ color: `white` }}>Access to purchase this decoration is only available with Nitro.</div>
//                                                                     <div className="shop-item-card-button-container">
//                                                                         <button type="button" className="shop-buttons shop-item-shiny-button global-button-size-medium button-look-filled global-button-full-width"
//                                                                             onClick={(e) => { e.stopPropagation(); openModal("subToNitroPro"); }}>
//                                                                             <div className="global-button-contents look-filled-button-contents shopPremiumSubscribeButton">
//                                                                                 <StrifeNitroBadgeIcon className="shop-premium-nitro-ball-icon" height={24} width={24} />
//                                                                                 <span className="shopbuttonText">Unlock Shop with Nitro</span>
//                                                                                 <div className="shiny-button-container">
//                                                                                     <div className="shiny-button-flex">
//                                                                                         <div className="shiny-button-inner"></div>
//                                                                                     </div>
//                                                                                 </div>
//                                                                             </div>
//                                                                         </button>
//                                                                         <button type="button" className="shop-buttons shop-item-preview-button global-button-growth button-look-filled"
//                                                                             onClick={(e) => {
//                                                                                 e.preventDefault();
//                                                                                 openModal("avatarDecorationPreviewModal", "fantasy-effect", "", "glowingRunes");
//                                                                             }}>
//                                                                             <div className="global-button-contents look-filled-button-contents shop-item-previewButtonInner">
//                                                                                 <EnableCameraViewIcon height={24} width={24} />
//                                                                             </div>
//                                                                         </button>
//                                                                     </div>
//                                                                 </div>
//                                                             </div>
//                                                         </div>
//                                                     </div>
//                                                 </div>

//                                                 <div className="shop-item-card fantasy-items" role="button" tabIndex={0}
//                                                     onClick={(e) => {
//                                                         e.preventDefault();
//                                                         openModal("avatarDecorationPreviewModal", "fantasy-effect", "", "defensiveShield");
//                                                     }}
//                                                     style={{
//                                                         background: `linear-gradient(rgb(20, 97, 68), rgb(2, 24, 13)) border-box border-box`,
//                                                         borderColor: `rgba(11, 61, 40, 0.4)`,
//                                                         boxShadow: `none`
//                                                     }} >
//                                                     <div className="shop-item-card-inner" style={{ width: `120px`, height: `120px` }}>
//                                                         <svg width="120" height="120" viewBox="0 0 120 120" className="ssxcore-svg-mask" aria-hidden="true">
//                                                             <foreignObject x="0" y="0" width="120" height="120" mask="url(#svg-mask-avatar-default)">
//                                                                 <div className="ssxcore-avatar-stack">
//                                                                     <img alt=" " className="halloween-wumpus-avatar-img" aria-hidden="true" />
//                                                                 </div>
//                                                             </foreignObject>
//                                                         </svg>
//                                                         <svg width="144" height="144" viewBox="0 0 144 144" className="ssxcore-svg-avatar-decoration" aria-hidden="true">
//                                                             <foreignObject x="0" y="0" width="144" height="144" >
//                                                                 <div className="ssxcore-avatar-stack">
//                                                                     <img className="fantasy-defensive-shield" alt=" " aria-hidden="true" />
//                                                                 </div>
//                                                             </foreignObject>
//                                                         </svg>
//                                                     </div>
//                                                     <div className="shop-item-card-inner-text">
//                                                         <div className="shop-item-card-inner-product-name"></div>
//                                                         <div className="shop-item-card-inner-product-details">
//                                                             <div className="shop-item-card-inner-blur">
//                                                                 <div className="shop-item-card-inner-blur-text-lrg" style={{ color: `white` }}>Defensive Shield</div>
//                                                                 <div className="shop-item-card-inner-blur-text-med" style={{ color: `white` }}>Use against pointy things.</div>
//                                                                 <div className="shop-item-price-tags-container" >
//                                                                     <h2 className="shop-item-price-tags-h2-medium" style={{ color: `white` }}><span className="shop-item-striked-price">$9.99</span></h2>
//                                                                     <h2 className="shop-item-price-tags-h2-medium" style={{ color: `white` }}>
//                                                                         <StrifeNitroBadgeIcon className="shop-item-nitro-ball-icon" height={24} width={24} />
//                                                                         <span className="shop-item-price">$6.99</span>
//                                                                     </h2>
//                                                                 </div>

//                                                             </div>
//                                                             <div className="shop-item-card-inner-hover">
//                                                                 <div className="shop-item-card-inner-hover-upsell-container">
//                                                                     <div className="shop-item-card-inner-blur-text-med" style={{ color: `white` }}>Access to purchase this decoration is only available with Nitro.</div>
//                                                                     <div className="shop-item-card-button-container">
//                                                                         <button type="button" className="shop-buttons shop-item-shiny-button global-button-size-medium button-look-filled global-button-full-width"
//                                                                             onClick={(e) => { e.stopPropagation(); openModal("subToNitroPro"); }}>
//                                                                             <div className="global-button-contents look-filled-button-contents shopPremiumSubscribeButton">
//                                                                                 <StrifeNitroBadgeIcon className="shop-premium-nitro-ball-icon" height={24} width={24} />
//                                                                                 <span className="shopbuttonText">Unlock Shop with Nitro</span>
//                                                                                 <div className="shiny-button-container">
//                                                                                     <div className="shiny-button-flex">
//                                                                                         <div className="shiny-button-inner"></div>
//                                                                                     </div>
//                                                                                 </div>
//                                                                             </div>
//                                                                         </button>
//                                                                         <button type="button" className="shop-buttons shop-item-preview-button global-button-growth button-look-filled"
//                                                                             onClick={(e) => {
//                                                                                 e.preventDefault();
//                                                                                 openModal("avatarDecorationPreviewModal", "fantasy-effect", "", "defensiveShield");
//                                                                             }}>
//                                                                             <div className="global-button-contents look-filled-button-contents shop-item-previewButtonInner">
//                                                                                 <EnableCameraViewIcon height={24} width={24} />
//                                                                             </div>
//                                                                         </button>
//                                                                     </div>
//                                                                 </div>
//                                                             </div>
//                                                         </div>
//                                                     </div>
//                                                 </div>
//                                                 <div className="shop-item-card fantasy-items" role="button" tabIndex={0}
//                                                     onClick={(e) => {
//                                                         e.preventDefault();
//                                                         openModal("avatarDecorationPreviewModal", "fantasy-effect", "", "skullMedallion");
//                                                     }}
//                                                     style={{
//                                                         background: `linear-gradient(rgb(20, 97, 68), rgb(2, 24, 13)) border-box border-box`,
//                                                         borderColor: `rgba(11, 61, 40, 0.4)`,
//                                                         boxShadow: `none`
//                                                     }} >
//                                                     <div className="shop-item-card-inner" style={{ width: `120px`, height: `120px` }}>
//                                                         <svg width="120" height="120" viewBox="0 0 120 120" className="ssxcore-svg-mask" aria-hidden="true">
//                                                             <foreignObject x="0" y="0" width="120" height="120" mask="url(#svg-mask-avatar-default)">
//                                                                 <div className="ssxcore-avatar-stack">
//                                                                     <img alt=" " className="halloween-wumpus-avatar-img" aria-hidden="true" />
//                                                                 </div>
//                                                             </foreignObject>
//                                                         </svg>
//                                                         <svg width="144" height="144" viewBox="0 0 144 144" className="ssxcore-svg-avatar-decoration" aria-hidden="true">
//                                                             <foreignObject x="0" y="0" width="144" height="144" >
//                                                                 <div className="ssxcore-avatar-stack">
//                                                                     <img className="fantasy-skull-medallion" alt=" " aria-hidden="true" />
//                                                                 </div>
//                                                             </foreignObject>
//                                                         </svg>
//                                                     </div>
//                                                     <div className="shop-item-card-inner-text">
//                                                         <div className="shop-item-card-inner-product-name"></div>
//                                                         <div className="shop-item-card-inner-product-details">
//                                                             <div className="shop-item-card-inner-blur">
//                                                                 <div className="shop-item-card-inner-blur-text-lrg" style={{ color: `white` }}>Skull Medallion</div>
//                                                                 <div className="shop-item-card-inner-blur-text-med" style={{ color: `white` }}>Earned through unknown means.</div>
//                                                                 <div className="shop-item-price-tags-container" >
//                                                                     <h2 className="shop-item-price-tags-h2-medium" style={{ color: `white` }}><span className="shop-item-striked-price">$9.99</span></h2>
//                                                                     <h2 className="shop-item-price-tags-h2-medium" style={{ color: `white` }}>
//                                                                         <StrifeNitroBadgeIcon className="shop-item-nitro-ball-icon" height={24} width={24} />
//                                                                         <span className="shop-item-price">$6.99</span>
//                                                                     </h2>
//                                                                 </div>

//                                                             </div>
//                                                             <div className="shop-item-card-inner-hover">
//                                                                 <div className="shop-item-card-inner-hover-upsell-container">
//                                                                     <div className="shop-item-card-inner-blur-text-med" style={{ color: `white` }}>Access to purchase this decoration is only available with Nitro.</div>
//                                                                     <div className="shop-item-card-button-container">
//                                                                         <button type="button" className="shop-buttons shop-item-shiny-button global-button-size-medium button-look-filled global-button-full-width"
//                                                                             onClick={(e) => { e.stopPropagation(); openModal("subToNitroPro"); }}>
//                                                                             <div className="global-button-contents look-filled-button-contents shopPremiumSubscribeButton">
//                                                                                 <StrifeNitroBadgeIcon className="shop-premium-nitro-ball-icon" height={24} width={24} />
//                                                                                 <span className="shopbuttonText">Unlock Shop with Nitro</span>
//                                                                                 <div className="shiny-button-container">
//                                                                                     <div className="shiny-button-flex">
//                                                                                         <div className="shiny-button-inner"></div>
//                                                                                     </div>
//                                                                                 </div>
//                                                                             </div>
//                                                                         </button>
//                                                                         <button type="button" className="shop-buttons shop-item-preview-button global-button-growth button-look-filled"
//                                                                             onClick={(e) => {
//                                                                                 e.preventDefault();
//                                                                                 openModal("avatarDecorationPreviewModal", "fantasy-effect", "", "skullMedallion");
//                                                                             }}>
//                                                                             <div className="global-button-contents look-filled-button-contents shop-item-previewButtonInner">
//                                                                                 <EnableCameraViewIcon height={24} width={24} />
//                                                                             </div>
//                                                                         </button>
//                                                                     </div>
//                                                                 </div>
//                                                             </div>
//                                                         </div>
//                                                     </div>
//                                                 </div>

//                                                 <div className="shop-item-card fantasy-items" role="button" tabIndex={0}
//                                                     onClick={(e) => {
//                                                         e.preventDefault();
//                                                         openModal("avatarDecorationPreviewModal", "fantasy-effect", "", "treasureNKey");
//                                                     }}
//                                                     style={{
//                                                         background: `linear-gradient(rgb(20, 97, 68), rgb(2, 24, 13)) border-box border-box`,
//                                                         borderColor: `rgba(11, 61, 40, 0.4)`,
//                                                         boxShadow: `none`
//                                                     }} >
//                                                     <div className="shop-item-card-inner" style={{ width: `120px`, height: `120px` }}>
//                                                         <svg width="120" height="120" viewBox="0 0 120 120" className="ssxcore-svg-mask" aria-hidden="true">
//                                                             <foreignObject x="0" y="0" width="120" height="120" mask="url(#svg-mask-avatar-default)">
//                                                                 <div className="ssxcore-avatar-stack">
//                                                                     <img alt=" " className="halloween-wumpus-avatar-img" aria-hidden="true" />
//                                                                 </div>
//                                                             </foreignObject>
//                                                         </svg>
//                                                         <svg width="144" height="144" viewBox="0 0 144 144" className="ssxcore-svg-avatar-decoration" aria-hidden="true">
//                                                             <foreignObject x="0" y="0" width="144" height="144" >
//                                                                 <div className="ssxcore-avatar-stack">
//                                                                     <img className="fantasy-treasure-n-key" alt=" " aria-hidden="true" />
//                                                                 </div>
//                                                             </foreignObject>
//                                                         </svg>
//                                                     </div>
//                                                     <div className="shop-item-card-inner-text">
//                                                         <div className="shop-item-card-inner-product-name"></div>
//                                                         <div className="shop-item-card-inner-product-details">
//                                                             <div className="shop-item-card-inner-blur">
//                                                                 <div className="shop-item-card-inner-blur-text-lrg" style={{ color: `white` }}>Treasure and Key</div>
//                                                                 <div className="shop-item-card-inner-blur-text-med" style={{ color: `white` }}>What glorious treasures lie within?</div>
//                                                                 <div className="shop-item-price-tags-container" >
//                                                                     <h2 className="shop-item-price-tags-h2-medium" style={{ color: `white` }}><span className="shop-item-striked-price">$9.99</span></h2>
//                                                                     <h2 className="shop-item-price-tags-h2-medium" style={{ color: `white` }}>
//                                                                         <StrifeNitroBadgeIcon className="shop-item-nitro-ball-icon" height={24} width={24} />
//                                                                         <span className="shop-item-price">$6.99</span>
//                                                                     </h2>
//                                                                 </div>

//                                                             </div>
//                                                             <div className="shop-item-card-inner-hover">
//                                                                 <div className="shop-item-card-inner-hover-upsell-container">
//                                                                     <div className="shop-item-card-inner-blur-text-med" style={{ color: `white` }}>Access to purchase this decoration is only available with Nitro.</div>
//                                                                     <div className="shop-item-card-button-container">
//                                                                         <button type="button" className="shop-buttons shop-item-shiny-button global-button-size-medium button-look-filled global-button-full-width"
//                                                                             onClick={(e) => { e.stopPropagation(); openModal("subToNitroPro"); }}>
//                                                                             <div className="global-button-contents look-filled-button-contents shopPremiumSubscribeButton">
//                                                                                 <StrifeNitroBadgeIcon className="shop-premium-nitro-ball-icon" height={24} width={24} />
//                                                                                 <span className="shopbuttonText">Unlock Shop with Nitro</span>
//                                                                                 <div className="shiny-button-container">
//                                                                                     <div className="shiny-button-flex">
//                                                                                         <div className="shiny-button-inner"></div>
//                                                                                     </div>
//                                                                                 </div>
//                                                                             </div>
//                                                                         </button>
//                                                                         <button type="button" className="shop-buttons shop-item-preview-button global-button-growth button-look-filled"
//                                                                             onClick={(e) => {
//                                                                                 e.preventDefault();
//                                                                                 openModal("avatarDecorationPreviewModal", "fantasy-effect", "", "treasureNKey");
//                                                                             }}>
//                                                                             <div className="global-button-contents look-filled-button-contents shop-item-previewButtonInner">
//                                                                                 <EnableCameraViewIcon height={24} width={24} />
//                                                                             </div>
//                                                                         </button>
//                                                                     </div>
//                                                                 </div>
//                                                             </div>
//                                                         </div>
//                                                     </div>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                         <div>
//                                             <div className="shop-item-type-title-container">
//                                                 <div className="shop-item-type" style={{ color: `var(--header-secondary)` }}>Profile Effects</div>
//                                             </div>
//                                             <div className="shop-item-cards-container">
//                                                 <div className="shop-item-card fantasy-items" role="button" tabIndex={0}
//                                                     onClick={(e) => {
//                                                         e.preventDefault();
//                                                         openModal("profileEffectModal", "fantasy-effect", "hydroBlast");
//                                                     }}
//                                                     style={{
//                                                         background: `linear-gradient(rgb(20, 97, 68), rgb(2, 24, 13)) border-box border-box`,
//                                                         borderColor: `rgba(11, 61, 40, 0.4)`,
//                                                         boxShadow: `none`
//                                                     }} >


//                                                     <div className="shop-item-profileEffectPreview">
//                                                         <div className="shop-item-profileEffectPreviewContainer">
//                                                             <img className="shop-item-upc-preview" alt=" " />
//                                                             <div>
//                                                                 <div className="shop-item-upc-profile-effects">
//                                                                     <div className="shop-item-upc-profile-effects-inner">
//                                                                         <img className="shop-item-fantasy-hydro-blast" alt=" " style={{ top: `0px` }} />
//                                                                     </div>
//                                                                 </div>
//                                                             </div>
//                                                         </div>
//                                                     </div>

//                                                     <div className="shop-item-card-inner-text shop-item-card-inner-text-profile-effect">
//                                                         <div className="shop-item-card-inner-product-name"></div>
//                                                         <div className="shop-item-card-inner-product-details">
//                                                             <div className="shop-item-card-inner-blur">
//                                                                 <div className="shop-item-card-inner-blur-text-lrg" style={{ color: `white` }}>Hydro Blast</div>
//                                                                 <div className="shop-item-card-inner-blur-text-med" style={{ color: `white` }}>Time to make a splash.</div>
//                                                                 <div className="shop-item-price-tags-container" >
//                                                                     <h2 className="shop-item-price-tags-h2-medium" style={{ color: `white` }}><span className="shop-item-striked-price">$11.99</span></h2>
//                                                                     <h2 className="shop-item-price-tags-h2-medium" style={{ color: `white` }}>
//                                                                         <StrifeNitroBadgeIcon className="shop-item-nitro-ball-icon" height={24} width={24} />
//                                                                         <span className="shop-item-price">$8.49</span>
//                                                                     </h2>
//                                                                 </div>

//                                                             </div>
//                                                             <div className="shop-item-card-inner-hover">
//                                                                 <div className="shop-item-card-inner-hover-upsell-container">
//                                                                     <div className="shop-item-card-inner-blur-text-med" style={{ color: `white` }}>Access to purchase this effect is only available with Nitro.</div>
//                                                                     <div className="shop-item-card-button-container">
//                                                                         <button type="button" className="shop-buttons shop-item-shiny-button global-button-size-medium button-look-filled global-button-full-width"
//                                                                             onClick={(e) => { e.stopPropagation(); openModal("subToNitroPro"); }}>
//                                                                             <div className="global-button-contents look-filled-button-contents shopPremiumSubscribeButton">
//                                                                                 <StrifeNitroBadgeIcon className="shop-premium-nitro-ball-icon" height={24} width={24} />
//                                                                                 <span className="shopbuttonText">Unlock Shop with Nitro</span>
//                                                                                 <div className="shiny-button-container">
//                                                                                     <div className="shiny-button-flex">
//                                                                                         <div className="shiny-button-inner"></div>
//                                                                                     </div>
//                                                                                 </div>
//                                                                             </div>
//                                                                         </button>
//                                                                         <button type="button" className="shop-buttons shop-item-preview-button global-button-growth button-look-filled"
//                                                                             onClick={(e) => {
//                                                                                 e.preventDefault();
//                                                                                 openModal("profileEffectModal", "fantasy-effect", "hydroBlast");
//                                                                             }}>
//                                                                             <div className="global-button-contents look-filled-button-contents shop-item-previewButtonInner">
//                                                                                 <EnableCameraViewIcon height={24} width={24} />
//                                                                             </div>
//                                                                         </button>
//                                                                     </div>
//                                                                 </div>
//                                                             </div>
//                                                         </div>
//                                                     </div>
//                                                 </div>

//                                                 <div className="shop-item-card fantasy-items" role="button" tabIndex={0}
//                                                     onMouseEnter={() => setSakuraDreamsHover(true)}
//                                                     onMouseLeave={() => setSakuraDreamsHover(false)}
//                                                     onClick={(e) => {
//                                                         e.preventDefault();
//                                                         openModal("profileEffectModal", "fantasy-effect", "sakuraDreams");
//                                                     }}
//                                                     style={{
//                                                         background: `linear-gradient(rgb(20, 97, 68), rgb(2, 24, 13)) border-box border-box`,
//                                                         borderColor: `rgba(11, 61, 40, 0.4)`,
//                                                         boxShadow: `none`
//                                                     }} >


//                                                     <div className="shop-item-profileEffectPreview">
//                                                         <div className="shop-item-profileEffectPreviewContainer">
//                                                             <img className="shop-item-upc-preview" alt=" " />
//                                                             <div>
//                                                                 <div className="shop-item-upc-profile-effects">
//                                                                     <div className="shop-item-upc-profile-effects-inner">
//                                                                         {
//                                                                             sakuraDreamsHover ? (
//                                                                                 <>
//                                                                                     <img className="shop-item-fantasy-sakura-dreams-tree" alt=" " style={{ top: `0px` }} />
//                                                                                     <img className="shop-item-fantasy-sakura-dreams-petals" alt=" " style={{ top: `0px` }} />
//                                                                                 </>
//                                                                             ) : (
//                                                                                 <img className="shop-item-fantasy-sakura-dreams" alt=" " style={{ top: `0px` }} />
//                                                                             )
//                                                                         }
//                                                                     </div>
//                                                                 </div>
//                                                             </div>
//                                                         </div>
//                                                     </div>

//                                                     <div className="shop-item-card-inner-text shop-item-card-inner-text-profile-effect">
//                                                         <div className="shop-item-card-inner-product-name"></div>
//                                                         <div className="shop-item-card-inner-product-details">
//                                                             <div className="shop-item-card-inner-blur">
//                                                                 <div className="shop-item-card-inner-blur-text-lrg" style={{ color: `white` }}>Sakura Dreams</div>
//                                                                 <div className="shop-item-card-inner-blur-text-med" style={{ color: `white` }}>Close your eyes, and breathe.</div>
//                                                                 <div className="shop-item-price-tags-container" >
//                                                                     <h2 className="shop-item-price-tags-h2-medium" style={{ color: `white` }}><span className="shop-item-striked-price">$11.99</span></h2>
//                                                                     <h2 className="shop-item-price-tags-h2-medium" style={{ color: `white` }}>
//                                                                         <StrifeNitroBadgeIcon className="shop-item-nitro-ball-icon" height={24} width={24} />
//                                                                         <span className="shop-item-price">$8.49</span>
//                                                                     </h2>
//                                                                 </div>

//                                                             </div>
//                                                             <div className="shop-item-card-inner-hover">
//                                                                 <div className="shop-item-card-inner-hover-upsell-container">
//                                                                     <div className="shop-item-card-inner-blur-text-med" style={{ color: `white` }}>Access to purchase this effect is only available with Nitro.</div>
//                                                                     <div className="shop-item-card-button-container">
//                                                                         <button type="button" className="shop-buttons shop-item-shiny-button global-button-size-medium button-look-filled global-button-full-width"
//                                                                             onClick={(e) => { e.stopPropagation(); openModal("subToNitroPro"); }}>
//                                                                             <div className="global-button-contents look-filled-button-contents shopPremiumSubscribeButton">
//                                                                                 <StrifeNitroBadgeIcon className="shop-premium-nitro-ball-icon" height={24} width={24} />
//                                                                                 <span className="shopbuttonText">Unlock Shop with Nitro</span>
//                                                                                 <div className="shiny-button-container">
//                                                                                     <div className="shiny-button-flex">
//                                                                                         <div className="shiny-button-inner"></div>
//                                                                                     </div>
//                                                                                 </div>
//                                                                             </div>
//                                                                         </button>
//                                                                         <button type="button" className="shop-buttons shop-item-preview-button global-button-growth button-look-filled"
//                                                                             onClick={(e) => {
//                                                                                 e.preventDefault();
//                                                                                 openModal("profileEffectModal", "fantasy-effect", "sakuraDreams");
//                                                                             }}>
//                                                                             <div className="global-button-contents look-filled-button-contents shop-item-previewButtonInner">
//                                                                                 <EnableCameraViewIcon height={24} width={24} />
//                                                                             </div>
//                                                                         </button>
//                                                                     </div>
//                                                                 </div>
//                                                             </div>
//                                                         </div>
//                                                     </div>
//                                                 </div>

//                                                 <div className="shop-item-card fantasy-items" role="button" tabIndex={0}
//                                                     onMouseEnter={() => setVinesHover(true)}
//                                                     onMouseLeave={() => setVinesHover(false)}
//                                                     onClick={(e) => {
//                                                         e.preventDefault();
//                                                         openModal("profileEffectModal", "fantasy-effect", "mysticVines");
//                                                     }}
//                                                     style={{
//                                                         background: `linear-gradient(rgb(20, 97, 68), rgb(2, 24, 13)) border-box border-box`,
//                                                         borderColor: `rgba(11, 61, 40, 0.4)`,
//                                                         boxShadow: `none`
//                                                     }} >

//                                                     <div className="shop-item-profileEffectPreview">
//                                                         <div className="shop-item-profileEffectPreviewContainer">
//                                                             <img className="shop-item-upc-preview" alt=" " />
//                                                             <div>
//                                                                 <div className="shop-item-upc-profile-effects">
//                                                                     <div className="shop-item-upc-profile-effects-inner">
//                                                                         {
//                                                                             vinesHover ? (
//                                                                                 <>
//                                                                                     <img className={`shop-item-fantasy-mystic-vines-growing-cycle`} alt=" " style={{ top: `0px` }} />
//                                                                                     <img className={`shop-item-fantasy-mystic-vines-loop`} alt=" " style={{ top: `0px` }} />
//                                                                                 </>
//                                                                             ) : (
//                                                                                 <img className={`shop-item-fantasy-mystic-vines`} alt=" " style={{ top: `0px` }} />
//                                                                             )
//                                                                         }

//                                                                     </div>
//                                                                 </div>
//                                                             </div>
//                                                         </div>
//                                                     </div>

//                                                     <div className="shop-item-card-inner-text shop-item-card-inner-text-profile-effect">
//                                                         <div className="shop-item-card-inner-product-name"></div>
//                                                         <div className="shop-item-card-inner-product-details">
//                                                             <div className="shop-item-card-inner-blur">
//                                                                 <div className="shop-item-card-inner-blur-text-lrg" style={{ color: `white` }}>Mystic Vines</div>
//                                                                 <div className="shop-item-card-inner-blur-text-med" style={{ color: `white` }}>Why touch grass when you can touch magical vines?</div>
//                                                                 <div className="shop-item-price-tags-container" >
//                                                                     <h2 className="shop-item-price-tags-h2-medium" style={{ color: `white` }}><span className="shop-item-striked-price">$11.99</span></h2>
//                                                                     <h2 className="shop-item-price-tags-h2-medium" style={{ color: `white` }}>
//                                                                         <StrifeNitroBadgeIcon className="shop-item-nitro-ball-icon" height={24} width={24} />
//                                                                         <span className="shop-item-price">$8.49</span>
//                                                                     </h2>
//                                                                 </div>

//                                                             </div>
//                                                             <div className="shop-item-card-inner-hover">
//                                                                 <div className="shop-item-card-inner-hover-upsell-container">
//                                                                     <div className="shop-item-card-inner-blur-text-med" style={{ color: `white` }}>Access to purchase this effect is only available with Nitro.</div>
//                                                                     <div className="shop-item-card-button-container">
//                                                                         <button type="button" className="shop-buttons shop-item-shiny-button global-button-size-medium button-look-filled global-button-full-width"
//                                                                             onClick={(e) => { e.stopPropagation(); openModal("subToNitroPro"); }}>
//                                                                             <div className="global-button-contents look-filled-button-contents shopPremiumSubscribeButton">
//                                                                                 <StrifeNitroBadgeIcon className="shop-premium-nitro-ball-icon" height={24} width={24} />
//                                                                                 <span className="shopbuttonText">Unlock Shop with Nitro</span>
//                                                                                 <div className="shiny-button-container">
//                                                                                     <div className="shiny-button-flex">
//                                                                                         <div className="shiny-button-inner"></div>
//                                                                                     </div>
//                                                                                 </div>
//                                                                             </div>
//                                                                         </button>
//                                                                         <button type="button" className="shop-buttons shop-item-preview-button global-button-growth button-look-filled"
//                                                                             onClick={(e) => {
//                                                                                 e.preventDefault();
//                                                                                 openModal("profileEffectModal", "fantasy-effect", "mysticVines");
//                                                                             }}>
//                                                                             <div className="global-button-contents look-filled-button-contents shop-item-previewButtonInner">
//                                                                                 <EnableCameraViewIcon height={24} width={24} />
//                                                                             </div>
//                                                                         </button>
//                                                                     </div>
//                                                                 </div>
//                                                             </div>
//                                                         </div>
//                                                     </div>
//                                                 </div>

//                                                 <div className="shop-item-card fantasy-items" role="button" tabIndex={0}
//                                                     onClick={(e) => {
//                                                         e.preventDefault();
//                                                         openModal("profileEffectModal", "fantasy-effect", "pixieDust");
//                                                     }}
//                                                     style={{
//                                                         background: `linear-gradient(rgb(20, 97, 68), rgb(2, 24, 13)) border-box border-box`,
//                                                         borderColor: `rgba(11, 61, 40, 0.4)`,
//                                                         boxShadow: `none`
//                                                     }} >


//                                                     <div className="shop-item-profileEffectPreview">
//                                                         <div className="shop-item-profileEffectPreviewContainer">
//                                                             <img className="shop-item-upc-preview" alt=" " />
//                                                             <div>
//                                                                 <div className="shop-item-upc-profile-effects">
//                                                                     <div className="shop-item-upc-profile-effects-inner">
//                                                                         <img className="shop-item-fantasy-pixie-dust" alt=" " style={{ top: `0px` }} />
//                                                                     </div>
//                                                                 </div>
//                                                             </div>
//                                                         </div>
//                                                     </div>

//                                                     <div className="shop-item-card-inner-text shop-item-card-inner-text-profile-effect">
//                                                         <div className="shop-item-card-inner-product-name"></div>
//                                                         <div className="shop-item-card-inner-product-details">
//                                                             <div className="shop-item-card-inner-blur">
//                                                                 <div className="shop-item-card-inner-blur-text-lrg" style={{ color: `white` }}>Pixie Dust</div>
//                                                                 <div className="shop-item-card-inner-blur-text-med" style={{ color: `white` }}>Did a pixie sneeze nearby?</div>
//                                                                 <div className="shop-item-price-tags-container" >
//                                                                     <h2 className="shop-item-price-tags-h2-medium" style={{ color: `white` }}><span className="shop-item-striked-price">$11.99</span></h2>
//                                                                     <h2 className="shop-item-price-tags-h2-medium" style={{ color: `white` }}>
//                                                                         <StrifeNitroBadgeIcon className="shop-item-nitro-ball-icon" height={24} width={24} />
//                                                                         <span className="shop-item-price">$8.49</span>
//                                                                     </h2>
//                                                                 </div>

//                                                             </div>
//                                                             <div className="shop-item-card-inner-hover">
//                                                                 <div className="shop-item-card-inner-hover-upsell-container">
//                                                                     <div className="shop-item-card-inner-blur-text-med" style={{ color: `white` }}>Access to purchase this effect is only available with Nitro.</div>
//                                                                     <div className="shop-item-card-button-container">
//                                                                         <button type="button" className="shop-buttons shop-item-shiny-button global-button-size-medium button-look-filled global-button-full-width"
//                                                                             onClick={(e) => { e.stopPropagation(); openModal("subToNitroPro"); }}>
//                                                                             <div className="global-button-contents look-filled-button-contents shopPremiumSubscribeButton">
//                                                                                 <StrifeNitroBadgeIcon className="shop-premium-nitro-ball-icon" height={24} width={24} />
//                                                                                 <span className="shopbuttonText">Unlock Shop with Nitro</span>
//                                                                                 <div className="shiny-button-container">
//                                                                                     <div className="shiny-button-flex">
//                                                                                         <div className="shiny-button-inner"></div>
//                                                                                     </div>
//                                                                                 </div>
//                                                                             </div>
//                                                                         </button>
//                                                                         <button type="button" className="shop-buttons shop-item-preview-button global-button-growth button-look-filled"
//                                                                             onClick={(e) => {
//                                                                                 e.preventDefault();
//                                                                                 openModal("profileEffectModal", "fantasy-effect", "pixieDust");
//                                                                             }}>
//                                                                             <div className="global-button-contents look-filled-button-contents shop-item-previewButtonInner">
//                                                                                 <EnableCameraViewIcon height={24} width={24} />
//                                                                             </div>
//                                                                         </button>
//                                                                     </div>
//                                                                 </div>
//                                                             </div>
//                                                         </div>
//                                                     </div>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     </div>

//                                     <div>
//                                         <div className="shop-banner-img shop-banner-anime">
//                                             <div className="shop-strife-banner-logo-halloween">
//                                                 <StrifeBannerLogo width={124} height={24} className={'shop-strife-banner-logo-halloween-icon'} />
//                                             </div>
//                                             <img className="shop-banner-anime-logo" alt=" " />
//                                             <div className="shop-halloween-subtext" style={{ color: `white` }}>There's a calm and cozy vibe in the air.</div>
//                                         </div>
//                                         <div>
//                                             <div className="shop-item-type" style={{ color: `var(--header-secondary)` }}>Avatar Decorations</div>
//                                             <div className="shop-item-cards-container">
//                                                 <div className="shop-item-card anime-items" role="button" tabIndex={0}
//                                                     onClick={(e) => {
//                                                         e.preventDefault();
//                                                         openModal("avatarDecorationPreviewModal", "anime-effect", "", "radiatingEnergy");
//                                                     }}
//                                                     style={{
//                                                         background: `linear-gradient(rgb(75, 120, 175), rgb(15, 14, 57)) border-box border-box`,
//                                                         borderColor: `rgba(46, 68, 118, 0.4)`,
//                                                         boxShadow: `none`
//                                                     }} >
//                                                     <div className="shop-item-card-inner" style={{ width: `120px`, height: `120px` }}>
//                                                         <svg width="120" height="120" viewBox="0 0 120 120" className="ssxcore-svg-mask" aria-hidden="true">
//                                                             <foreignObject x="0" y="0" width="120" height="120" mask="url(#svg-mask-avatar-default)">
//                                                                 <div className="ssxcore-avatar-stack">
//                                                                     <img alt=" " className="halloween-wumpus-avatar-img" aria-hidden="true" />
//                                                                 </div>
//                                                             </foreignObject>
//                                                         </svg>
//                                                         <svg width="144" height="144" viewBox="0 0 144 144" className="ssxcore-svg-avatar-decoration" aria-hidden="true">
//                                                             <foreignObject x="0" y="0" width="144" height="144" >
//                                                                 <div className="ssxcore-avatar-stack">
//                                                                     <img className="anime-radiating-energy" alt=" " aria-hidden="true" />
//                                                                 </div>
//                                                             </foreignObject>
//                                                         </svg>
//                                                     </div>
//                                                     <div className="shop-item-card-inner-text">
//                                                         <div className="shop-item-card-inner-product-name"></div>
//                                                         <div className="shop-item-card-inner-product-details">
//                                                             <div className="shop-item-card-inner-blur">
//                                                                 <div className="shop-item-card-inner-blur-text-lrg" style={{ color: `white` }}>Radiating Energy</div>
//                                                                 <div className="shop-item-card-inner-blur-text-med" style={{ color: `white` }}>Over EIGHT-THOUSAND-NINE-HUNDRED-NINETY-NINE!</div>
//                                                                 <div className="shop-item-price-tags-container" >
//                                                                     <h2 className="shop-item-price-tags-h2-medium" style={{ color: `white` }}><span className="shop-item-striked-price">$7.99</span></h2>
//                                                                     <h2 className="shop-item-price-tags-h2-medium" style={{ color: `white` }}>
//                                                                         <StrifeNitroBadgeIcon className="shop-item-nitro-ball-icon" height={24} width={24} />
//                                                                         <span className="shop-item-price">$5.49</span>
//                                                                     </h2>
//                                                                 </div>

//                                                             </div>
//                                                             <div className="shop-item-card-inner-hover">
//                                                                 <div className="shop-item-card-inner-hover-upsell-container">
//                                                                     <div className="shop-item-card-inner-blur-text-med" style={{ color: `white` }}>Access to purchase this decoration is only available with Nitro.</div>
//                                                                     <div className="shop-item-card-button-container">
//                                                                         <button type="button" className="shop-buttons shop-item-shiny-button global-button-size-medium button-look-filled global-button-full-width"
//                                                                             onClick={(e) => { e.stopPropagation(); openModal("subToNitroPro"); }}>
//                                                                             <div className="global-button-contents look-filled-button-contents shopPremiumSubscribeButton">
//                                                                                 <StrifeNitroBadgeIcon className="shop-premium-nitro-ball-icon" height={24} width={24} />
//                                                                                 <span className="shopbuttonText">Unlock Shop with Nitro</span>
//                                                                                 <div className="shiny-button-container">
//                                                                                     <div className="shiny-button-flex">
//                                                                                         <div className="shiny-button-inner"></div>
//                                                                                     </div>
//                                                                                 </div>
//                                                                             </div>
//                                                                         </button>
//                                                                         <button type="button" className="shop-buttons shop-item-preview-button global-button-growth button-look-filled"
//                                                                             onClick={(e) => {
//                                                                                 e.preventDefault();
//                                                                                 openModal("avatarDecorationPreviewModal", "anime-effect", "", "radiatingEnergy");
//                                                                             }}>
//                                                                             <div className="global-button-contents look-filled-button-contents shop-item-previewButtonInner">
//                                                                                 <EnableCameraViewIcon height={24} width={24} />
//                                                                             </div>
//                                                                         </button>
//                                                                     </div>
//                                                                 </div>
//                                                             </div>

//                                                         </div>
//                                                     </div>
//                                                 </div>
//                                                 <div className="shop-item-card anime-items" role="button" tabIndex={0}
//                                                     onClick={(e) => {
//                                                         e.preventDefault();
//                                                         openModal("avatarDecorationPreviewModal", "anime-effect", "", "soulLeavingBody");
//                                                     }}
//                                                     style={{
//                                                         background: `linear-gradient(rgb(75, 120, 175), rgb(15, 14, 57)) border-box border-box`,
//                                                         borderColor: `rgba(46, 68, 118, 0.4)`,
//                                                         boxShadow: `none`
//                                                     }} >
//                                                     <div className="shop-item-card-inner" style={{ width: `120px`, height: `120px` }}>
//                                                         <svg width="120" height="120" viewBox="0 0 120 120" className="ssxcore-svg-mask" aria-hidden="true">
//                                                             <foreignObject x="0" y="0" width="120" height="120" mask="url(#svg-mask-avatar-default)">
//                                                                 <div className="ssxcore-avatar-stack">
//                                                                     <img alt=" " className="halloween-wumpus-avatar-img" aria-hidden="true" />
//                                                                 </div>
//                                                             </foreignObject>
//                                                         </svg>
//                                                         <svg width="144" height="144" viewBox="0 0 144 144" className="ssxcore-svg-avatar-decoration" aria-hidden="true">
//                                                             <foreignObject x="0" y="0" width="144" height="144" >
//                                                                 <div className="ssxcore-avatar-stack">
//                                                                     <img className="anime-soul-leaving-body" alt=" " aria-hidden="true" />
//                                                                 </div>
//                                                             </foreignObject>
//                                                         </svg>
//                                                     </div>
//                                                     <div className="shop-item-card-inner-text">
//                                                         <div className="shop-item-card-inner-product-name"></div>
//                                                         <div className="shop-item-card-inner-product-details">
//                                                             <div className="shop-item-card-inner-blur">
//                                                                 <div className="shop-item-card-inner-blur-text-lrg" style={{ color: `white` }}>Soul Leaving Body</div>
//                                                                 <div className="shop-item-card-inner-blur-text-med" style={{ color: `white` }}>Can I just disappear right now?</div>
//                                                                 <div className="shop-item-price-tags-container" >
//                                                                     <h2 className="shop-item-price-tags-h2-medium" style={{ color: `white` }}><span className="shop-item-striked-price">$7.99</span></h2>
//                                                                     <h2 className="shop-item-price-tags-h2-medium" style={{ color: `white` }}>
//                                                                         <StrifeNitroBadgeIcon className="shop-item-nitro-ball-icon" height={24} width={24} />
//                                                                         <span className="shop-item-price">$5.49</span>
//                                                                     </h2>
//                                                                 </div>

//                                                             </div>
//                                                             <div className="shop-item-card-inner-hover">
//                                                                 <div className="shop-item-card-inner-hover-upsell-container">
//                                                                     <div className="shop-item-card-inner-blur-text-med" style={{ color: `white` }}>Access to purchase this decoration is only available with Nitro.</div>
//                                                                     <div className="shop-item-card-button-container">
//                                                                         <button type="button" className="shop-buttons shop-item-shiny-button global-button-size-medium button-look-filled global-button-full-width"
//                                                                             onClick={(e) => { e.stopPropagation(); openModal("subToNitroPro"); }}>
//                                                                             <div className="global-button-contents look-filled-button-contents shopPremiumSubscribeButton">
//                                                                                 <StrifeNitroBadgeIcon className="shop-premium-nitro-ball-icon" height={24} width={24} />
//                                                                                 <span className="shopbuttonText">Unlock Shop with Nitro</span>
//                                                                                 <div className="shiny-button-container">
//                                                                                     <div className="shiny-button-flex">
//                                                                                         <div className="shiny-button-inner"></div>
//                                                                                     </div>
//                                                                                 </div>
//                                                                             </div>
//                                                                         </button>
//                                                                         <button type="button" className="shop-buttons shop-item-preview-button global-button-growth button-look-filled"
//                                                                             onClick={(e) => {
//                                                                                 e.preventDefault();
//                                                                                 openModal("avatarDecorationPreviewModal", "anime-effect", "", "soulLeavingBody");
//                                                                             }}>
//                                                                             <div className="global-button-contents look-filled-button-contents shop-item-previewButtonInner">
//                                                                                 <EnableCameraViewIcon height={24} width={24} />
//                                                                             </div>
//                                                                         </button>
//                                                                     </div>
//                                                                 </div>
//                                                             </div>

//                                                         </div>
//                                                     </div>
//                                                 </div>

//                                                 <div className="shop-item-card anime-items" role="button" tabIndex={0}
//                                                     onClick={(e) => {
//                                                         e.preventDefault();
//                                                         openModal("avatarDecorationPreviewModal", "anime-effect", "", "sweatDrops");
//                                                     }}
//                                                     style={{
//                                                         background: `linear-gradient(rgb(75, 120, 175), rgb(15, 14, 57)) border-box border-box`,
//                                                         borderColor: `rgba(46, 68, 118, 0.4)`,
//                                                         boxShadow: `none`
//                                                     }} >
//                                                     <div className="shop-item-card-inner" style={{ width: `120px`, height: `120px` }}>
//                                                         <svg width="120" height="120" viewBox="0 0 120 120" className="ssxcore-svg-mask" aria-hidden="true">
//                                                             <foreignObject x="0" y="0" width="120" height="120" mask="url(#svg-mask-avatar-default)">
//                                                                 <div className="ssxcore-avatar-stack">
//                                                                     <img alt=" " className="halloween-wumpus-avatar-img" aria-hidden="true" />
//                                                                 </div>
//                                                             </foreignObject>
//                                                         </svg>
//                                                         <svg width="144" height="144" viewBox="0 0 144 144" className="ssxcore-svg-avatar-decoration" aria-hidden="true">
//                                                             <foreignObject x="0" y="0" width="144" height="144" >
//                                                                 <div className="ssxcore-avatar-stack">
//                                                                     <img className="anime-sweat-drops" alt=" " aria-hidden="true" />
//                                                                 </div>
//                                                             </foreignObject>
//                                                         </svg>
//                                                     </div>
//                                                     <div className="shop-item-card-inner-text">
//                                                         <div className="shop-item-card-inner-product-name"></div>
//                                                         <div className="shop-item-card-inner-product-details">
//                                                             <div className="shop-item-card-inner-blur">
//                                                                 <div className="shop-item-card-inner-blur-text-lrg" style={{ color: `white` }}>Sweat Drops</div>
//                                                                 <div className="shop-item-card-inner-blur-text-med" style={{ color: `white` }}>*laughs nervously*</div>
//                                                                 <div className="shop-item-price-tags-container" >
//                                                                     <h2 className="shop-item-price-tags-h2-medium" style={{ color: `white` }}><span className="shop-item-striked-price">$7.99</span></h2>
//                                                                     <h2 className="shop-item-price-tags-h2-medium" style={{ color: `white` }}>
//                                                                         <StrifeNitroBadgeIcon className="shop-item-nitro-ball-icon" height={24} width={24} />
//                                                                         <span className="shop-item-price">$5.49</span>
//                                                                     </h2>
//                                                                 </div>
//                                                             </div>
//                                                             <div className="shop-item-card-inner-hover">
//                                                                 <div className="shop-item-card-inner-hover-upsell-container">
//                                                                     <div className="shop-item-card-inner-blur-text-med" style={{ color: `white` }}>Access to purchase this decoration is only available with Nitro.</div>
//                                                                     <div className="shop-item-card-button-container">
//                                                                         <button type="button" className="shop-buttons shop-item-shiny-button global-button-size-medium button-look-filled global-button-full-width"
//                                                                             onClick={(e) => { e.stopPropagation(); openModal("subToNitroPro"); }}>
//                                                                             <div className="global-button-contents look-filled-button-contents shopPremiumSubscribeButton">
//                                                                                 <StrifeNitroBadgeIcon className="shop-premium-nitro-ball-icon" height={24} width={24} />
//                                                                                 <span className="shopbuttonText">Unlock Shop with Nitro</span>
//                                                                                 <div className="shiny-button-container">
//                                                                                     <div className="shiny-button-flex">
//                                                                                         <div className="shiny-button-inner"></div>
//                                                                                     </div>
//                                                                                 </div>
//                                                                             </div>
//                                                                         </button>
//                                                                         <button type="button" className="shop-buttons shop-item-preview-button global-button-growth button-look-filled"
//                                                                             onClick={(e) => {
//                                                                                 e.preventDefault();
//                                                                                 openModal("avatarDecorationPreviewModal", "anime-effect", "", "sweatDrops");
//                                                                             }}>
//                                                                             <div className="global-button-contents look-filled-button-contents shop-item-previewButtonInner">
//                                                                                 <EnableCameraViewIcon height={24} width={24} />
//                                                                             </div>
//                                                                         </button>
//                                                                     </div>
//                                                                 </div>
//                                                             </div>
//                                                         </div>
//                                                     </div>
//                                                 </div>
//                                                 <div className="shop-item-card anime-items" role="button" tabIndex={0}
//                                                     onClick={(e) => {
//                                                         e.preventDefault();
//                                                         openModal("avatarDecorationPreviewModal", "anime-effect", "", "starryEyed");
//                                                     }}
//                                                     style={{
//                                                         background: `linear-gradient(rgb(75, 120, 175), rgb(15, 14, 57)) border-box border-box`,
//                                                         borderColor: `rgba(46, 68, 118, 0.4)`,
//                                                         boxShadow: `none`
//                                                     }} >
//                                                     <div className="shop-item-card-inner" style={{ width: `120px`, height: `120px` }}>
//                                                         <svg width="120" height="120" viewBox="0 0 120 120" className="ssxcore-svg-mask" aria-hidden="true">
//                                                             <foreignObject x="0" y="0" width="120" height="120" mask="url(#svg-mask-avatar-default)">
//                                                                 <div className="ssxcore-avatar-stack">
//                                                                     <img alt=" " className="halloween-wumpus-avatar-img" aria-hidden="true" />
//                                                                 </div>
//                                                             </foreignObject>
//                                                         </svg>
//                                                         <svg width="144" height="144" viewBox="0 0 144 144" className="ssxcore-svg-avatar-decoration" aria-hidden="true">
//                                                             <foreignObject x="0" y="0" width="144" height="144" >
//                                                                 <div className="ssxcore-avatar-stack">
//                                                                     <img className="anime-starry-eyed" alt=" " aria-hidden="true" />
//                                                                 </div>
//                                                             </foreignObject>
//                                                         </svg>
//                                                     </div>
//                                                     <div className="shop-item-card-inner-text">
//                                                         <div className="shop-item-card-inner-product-name"></div>
//                                                         <div className="shop-item-card-inner-product-details">
//                                                             <div className="shop-item-card-inner-blur">
//                                                                 <div className="shop-item-card-inner-blur-text-lrg" style={{ color: `white` }}>Starry Eyed</div>
//                                                                 <div className="shop-item-card-inner-blur-text-med" style={{ color: `white` }}>Feelin' sparkly.</div>
//                                                                 <div className="shop-item-price-tags-container" >
//                                                                     <h2 className="shop-item-price-tags-h2-medium" style={{ color: `white` }}><span className="shop-item-striked-price">$7.99</span></h2>
//                                                                     <h2 className="shop-item-price-tags-h2-medium" style={{ color: `white` }}>
//                                                                         <StrifeNitroBadgeIcon className="shop-item-nitro-ball-icon" height={24} width={24} />
//                                                                         <span className="shop-item-price">$5.49</span>
//                                                                     </h2>
//                                                                 </div>

//                                                             </div>
//                                                             <div className="shop-item-card-inner-hover">
//                                                                 <div className="shop-item-card-inner-hover-upsell-container">
//                                                                     <div className="shop-item-card-inner-blur-text-med" style={{ color: `white` }}>Access to purchase this decoration is only available with Nitro.</div>
//                                                                     <div className="shop-item-card-button-container">
//                                                                         <button type="button" className="shop-buttons shop-item-shiny-button global-button-size-medium button-look-filled global-button-full-width"
//                                                                             onClick={(e) => { e.stopPropagation(); openModal("subToNitroPro"); }}>
//                                                                             <div className="global-button-contents look-filled-button-contents shopPremiumSubscribeButton">
//                                                                                 <StrifeNitroBadgeIcon className="shop-premium-nitro-ball-icon" height={24} width={24} />
//                                                                                 <span className="shopbuttonText">Unlock Shop with Nitro</span>
//                                                                                 <div className="shiny-button-container">
//                                                                                     <div className="shiny-button-flex">
//                                                                                         <div className="shiny-button-inner"></div>
//                                                                                     </div>
//                                                                                 </div>
//                                                                             </div>
//                                                                         </button>
//                                                                         <button type="button" className="shop-buttons shop-item-preview-button global-button-growth button-look-filled"
//                                                                             onClick={(e) => {
//                                                                                 e.preventDefault();
//                                                                                 openModal("avatarDecorationPreviewModal", "anime-effect", "", "starryEyed");
//                                                                             }}>
//                                                                             <div className="global-button-contents look-filled-button-contents shop-item-previewButtonInner">
//                                                                                 <EnableCameraViewIcon height={24} width={24} />
//                                                                             </div>
//                                                                         </button>
//                                                                     </div>
//                                                                 </div>
//                                                             </div>

//                                                         </div>
//                                                     </div>
//                                                 </div>
//                                                 <div className="shop-item-card anime-items" role="button" tabIndex={0}
//                                                     onClick={(e) => {
//                                                         e.preventDefault();
//                                                         openModal("avatarDecorationPreviewModal", "anime-effect", "", "inLove");
//                                                     }}
//                                                     style={{
//                                                         background: `linear-gradient(rgb(75, 120, 175), rgb(15, 14, 57)) border-box border-box`,
//                                                         borderColor: `rgba(46, 68, 118, 0.4)`,
//                                                         boxShadow: `none`
//                                                     }} >
//                                                     <div className="shop-item-card-inner" style={{ width: `120px`, height: `120px` }}>
//                                                         <svg width="120" height="120" viewBox="0 0 120 120" className="ssxcore-svg-mask" aria-hidden="true">
//                                                             <foreignObject x="0" y="0" width="120" height="120" mask="url(#svg-mask-avatar-default)">
//                                                                 <div className="ssxcore-avatar-stack">
//                                                                     <img alt=" " className="halloween-wumpus-avatar-img" aria-hidden="true" />
//                                                                 </div>
//                                                             </foreignObject>
//                                                         </svg>
//                                                         <svg width="144" height="144" viewBox="0 0 144 144" className="ssxcore-svg-avatar-decoration" aria-hidden="true">
//                                                             <foreignObject x="0" y="0" width="144" height="144" >
//                                                                 <div className="ssxcore-avatar-stack">
//                                                                     <img className="anime-in-love" alt=" " aria-hidden="true" />
//                                                                 </div>
//                                                             </foreignObject>
//                                                         </svg>
//                                                     </div>
//                                                     <div className="shop-item-card-inner-text">
//                                                         <div className="shop-item-card-inner-product-name"></div>
//                                                         <div className="shop-item-card-inner-product-details">
//                                                             <div className="shop-item-card-inner-blur">
//                                                                 <div className="shop-item-card-inner-blur-text-lrg" style={{ color: `white` }}>In Love</div>
//                                                                 <div className="shop-item-card-inner-blur-text-med" style={{ color: `white` }}>uwu</div>
//                                                                 <div className="shop-item-price-tags-container" >
//                                                                     <h2 className="shop-item-price-tags-h2-medium" style={{ color: `white` }}><span className="shop-item-striked-price">$7.99</span></h2>
//                                                                     <h2 className="shop-item-price-tags-h2-medium" style={{ color: `white` }}>
//                                                                         <StrifeNitroBadgeIcon className="shop-item-nitro-ball-icon" height={24} width={24} />
//                                                                         <span className="shop-item-price">$5.49</span>
//                                                                     </h2>
//                                                                 </div>

//                                                             </div>
//                                                             <div className="shop-item-card-inner-hover">
//                                                                 <div className="shop-item-card-inner-hover-upsell-container">
//                                                                     <div className="shop-item-card-inner-blur-text-med" style={{ color: `white` }}>Access to purchase this decoration is only available with Nitro.</div>
//                                                                     <div className="shop-item-card-button-container">
//                                                                         <button type="button" className="shop-buttons shop-item-shiny-button global-button-size-medium button-look-filled global-button-full-width"
//                                                                             onClick={(e) => { e.stopPropagation(); openModal("subToNitroPro"); }}>
//                                                                             <div className="global-button-contents look-filled-button-contents shopPremiumSubscribeButton">
//                                                                                 <StrifeNitroBadgeIcon className="shop-premium-nitro-ball-icon" height={24} width={24} />
//                                                                                 <span className="shopbuttonText">Unlock Shop with Nitro</span>
//                                                                                 <div className="shiny-button-container">
//                                                                                     <div className="shiny-button-flex">
//                                                                                         <div className="shiny-button-inner"></div>
//                                                                                     </div>
//                                                                                 </div>
//                                                                             </div>
//                                                                         </button>
//                                                                         <button type="button" className="shop-buttons shop-item-preview-button global-button-growth button-look-filled"
//                                                                             onClick={(e) => {
//                                                                                 e.preventDefault();
//                                                                                 openModal("avatarDecorationPreviewModal", "anime-effect", "", "inLove");
//                                                                             }}>
//                                                                             <div className="global-button-contents look-filled-button-contents shop-item-previewButtonInner">
//                                                                                 <EnableCameraViewIcon height={24} width={24} />
//                                                                             </div>
//                                                                         </button>
//                                                                     </div>
//                                                                 </div>
//                                                             </div>

//                                                         </div>
//                                                     </div>
//                                                 </div>
//                                                 <div className="shop-item-card anime-items" role="button" tabIndex={0}
//                                                     onClick={(e) => {
//                                                         e.preventDefault();
//                                                         openModal("avatarDecorationPreviewModal", "anime-effect", "", "shocked");
//                                                     }}
//                                                     style={{
//                                                         background: `linear-gradient(rgb(75, 120, 175), rgb(15, 14, 57)) border-box border-box`,
//                                                         borderColor: `rgba(46, 68, 118, 0.4)`,
//                                                         boxShadow: `none`
//                                                     }} >
//                                                     <div className="shop-item-card-inner" style={{ width: `120px`, height: `120px` }}>
//                                                         <svg width="120" height="120" viewBox="0 0 120 120" className="ssxcore-svg-mask" aria-hidden="true">
//                                                             <foreignObject x="0" y="0" width="120" height="120" mask="url(#svg-mask-avatar-default)">
//                                                                 <div className="ssxcore-avatar-stack">
//                                                                     <img alt=" " className="halloween-wumpus-avatar-img" aria-hidden="true" />
//                                                                 </div>
//                                                             </foreignObject>
//                                                         </svg>
//                                                         <svg width="144" height="144" viewBox="0 0 144 144" className="ssxcore-svg-avatar-decoration" aria-hidden="true">
//                                                             <foreignObject x="0" y="0" width="144" height="144" >
//                                                                 <div className="ssxcore-avatar-stack">
//                                                                     <img className="anime-shocked" alt=" " aria-hidden="true" />
//                                                                 </div>
//                                                             </foreignObject>
//                                                         </svg>
//                                                     </div>
//                                                     <div className="shop-item-card-inner-text">
//                                                         <div className="shop-item-card-inner-product-name"></div>
//                                                         <div className="shop-item-card-inner-product-details">
//                                                             <div className="shop-item-card-inner-blur">
//                                                                 <div className="shop-item-card-inner-blur-text-lrg" style={{ color: `white` }}>Shocked</div>
//                                                                 <div className="shop-item-card-inner-blur-text-med" style={{ color: `white` }}>Nani?!!</div>
//                                                                 <div className="shop-item-price-tags-container" >
//                                                                     <h2 className="shop-item-price-tags-h2-medium" style={{ color: `white` }}><span className="shop-item-striked-price">$7.99</span></h2>
//                                                                     <h2 className="shop-item-price-tags-h2-medium" style={{ color: `white` }}>
//                                                                         <StrifeNitroBadgeIcon className="shop-item-nitro-ball-icon" height={24} width={24} />
//                                                                         <span className="shop-item-price">$5.49</span>
//                                                                     </h2>
//                                                                 </div>

//                                                             </div>
//                                                             <div className="shop-item-card-inner-hover">
//                                                                 <div className="shop-item-card-inner-hover-upsell-container">
//                                                                     <div className="shop-item-card-inner-blur-text-med" style={{ color: `white` }}>Access to purchase this decoration is only available with Nitro.</div>
//                                                                     <div className="shop-item-card-button-container">
//                                                                         <button type="button" className="shop-buttons shop-item-shiny-button global-button-size-medium button-look-filled global-button-full-width"
//                                                                             onClick={(e) => { e.stopPropagation(); openModal("subToNitroPro"); }}>
//                                                                             <div className="global-button-contents look-filled-button-contents shopPremiumSubscribeButton">
//                                                                                 <StrifeNitroBadgeIcon className="shop-premium-nitro-ball-icon" height={24} width={24} />
//                                                                                 <span className="shopbuttonText">Unlock Shop with Nitro</span>
//                                                                                 <div className="shiny-button-container">
//                                                                                     <div className="shiny-button-flex">
//                                                                                         <div className="shiny-button-inner"></div>
//                                                                                     </div>
//                                                                                 </div>
//                                                                             </div>
//                                                                         </button>
//                                                                         <button type="button" className="shop-buttons shop-item-preview-button global-button-growth button-look-filled"
//                                                                             onClick={(e) => {
//                                                                                 e.preventDefault();
//                                                                                 openModal("avatarDecorationPreviewModal", "anime-effect", "", "shocked");
//                                                                             }}>
//                                                                             <div className="global-button-contents look-filled-button-contents shop-item-previewButtonInner">
//                                                                                 <EnableCameraViewIcon height={24} width={24} />
//                                                                             </div>
//                                                                         </button>
//                                                                     </div>
//                                                                 </div>
//                                                             </div>

//                                                         </div>
//                                                     </div>
//                                                 </div>
//                                                 <div className="shop-item-card anime-items" role="button" tabIndex={0}
//                                                     onClick={(e) => {
//                                                         e.preventDefault();
//                                                         openModal("avatarDecorationPreviewModal", "anime-effect", "", "angry");
//                                                     }}
//                                                     style={{
//                                                         background: `linear-gradient(rgb(75, 120, 175), rgb(15, 14, 57)) border-box border-box`,
//                                                         borderColor: `rgba(46, 68, 118, 0.4)`,
//                                                         boxShadow: `none`
//                                                     }} >
//                                                     <div className="shop-item-card-inner" style={{ width: `120px`, height: `120px` }}>
//                                                         <svg width="120" height="120" viewBox="0 0 120 120" className="ssxcore-svg-mask" aria-hidden="true">
//                                                             <foreignObject x="0" y="0" width="120" height="120" mask="url(#svg-mask-avatar-default)">
//                                                                 <div className="ssxcore-avatar-stack">
//                                                                     <img alt=" " className="halloween-wumpus-avatar-img" aria-hidden="true" />
//                                                                 </div>
//                                                             </foreignObject>
//                                                         </svg>
//                                                         <svg width="144" height="144" viewBox="0 0 144 144" className="ssxcore-svg-avatar-decoration" aria-hidden="true">
//                                                             <foreignObject x="0" y="0" width="144" height="144" >
//                                                                 <div className="ssxcore-avatar-stack">
//                                                                     <img className="anime-angry" alt=" " aria-hidden="true" />
//                                                                 </div>
//                                                             </foreignObject>
//                                                         </svg>
//                                                     </div>
//                                                     <div className="shop-item-card-inner-text">
//                                                         <div className="shop-item-card-inner-product-name"></div>
//                                                         <div className="shop-item-card-inner-product-details">
//                                                             <div className="shop-item-card-inner-blur">
//                                                                 <div className="shop-item-card-inner-blur-text-lrg" style={{ color: `white` }}>Angry</div>
//                                                                 <div className="shop-item-card-inner-blur-text-med" style={{ color: `white` }}>How dare you.</div>
//                                                                 <div className="shop-item-price-tags-container" >
//                                                                     <h2 className="shop-item-price-tags-h2-medium" style={{ color: `white` }}><span className="shop-item-striked-price">$7.99</span></h2>
//                                                                     <h2 className="shop-item-price-tags-h2-medium" style={{ color: `white` }}>
//                                                                         <StrifeNitroBadgeIcon className="shop-item-nitro-ball-icon" height={24} width={24} />
//                                                                         <span className="shop-item-price">$5.49</span>
//                                                                     </h2>
//                                                                 </div>

//                                                             </div>
//                                                             <div className="shop-item-card-inner-hover">
//                                                                 <div className="shop-item-card-inner-hover-upsell-container">
//                                                                     <div className="shop-item-card-inner-blur-text-med" style={{ color: `white` }}>Access to purchase this decoration is only available with Nitro.</div>
//                                                                     <div className="shop-item-card-button-container">
//                                                                         <button type="button" className="shop-buttons shop-item-shiny-button global-button-size-medium button-look-filled global-button-full-width"
//                                                                             onClick={(e) => { e.stopPropagation(); openModal("subToNitroPro"); }}>
//                                                                             <div className="global-button-contents look-filled-button-contents shopPremiumSubscribeButton">
//                                                                                 <StrifeNitroBadgeIcon className="shop-premium-nitro-ball-icon" height={24} width={24} />
//                                                                                 <span className="shopbuttonText">Unlock Shop with Nitro</span>
//                                                                                 <div className="shiny-button-container">
//                                                                                     <div className="shiny-button-flex">
//                                                                                         <div className="shiny-button-inner"></div>
//                                                                                     </div>
//                                                                                 </div>
//                                                                             </div>
//                                                                         </button>
//                                                                         <button type="button" className="shop-buttons shop-item-preview-button global-button-growth button-look-filled"
//                                                                             onClick={(e) => {
//                                                                                 e.preventDefault();
//                                                                                 openModal("avatarDecorationPreviewModal", "anime-effect", "", "angry");
//                                                                             }}>
//                                                                             <div className="global-button-contents look-filled-button-contents shop-item-previewButtonInner">
//                                                                                 <EnableCameraViewIcon height={24} width={24} />
//                                                                             </div>
//                                                                         </button>
//                                                                     </div>
//                                                                 </div>
//                                                             </div>
//                                                         </div>
//                                                     </div>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                         <div>
//                                             <div className="shop-item-type-title-container">
//                                                 <div className="shop-item-type" style={{ color: `var(--header-secondary)` }}>Profile Effects</div>
//                                             </div>
//                                             <div className="shop-item-cards-container">

//                                                 <div className="shop-item-card anime-items" role="button" tabIndex={0}
//                                                     onClick={(e) => {
//                                                         e.preventDefault();
//                                                         openModal("profileEffectModal", "anime-effect", "magicHearts");
//                                                     }}
//                                                     style={{
//                                                         background: `linear-gradient(rgb(75, 120, 175), rgb(15, 14, 57)) border-box border-box`,
//                                                         borderColor: `rgba(46, 68, 118, 0.4)`,
//                                                         boxShadow: `none`
//                                                     }} >


//                                                     <div className="shop-item-profileEffectPreview">
//                                                         <div className="shop-item-profileEffectPreviewContainer">
//                                                             <img className="shop-item-upc-preview" alt=" " />
//                                                             <div>
//                                                                 <div className="shop-item-upc-profile-effects">
//                                                                     <div className="shop-item-upc-profile-effects-inner">
//                                                                         <img className="shop-item-anime-magic-hearts" alt=" " style={{ top: `0px` }} />
//                                                                     </div>
//                                                                 </div>
//                                                             </div>
//                                                         </div>
//                                                     </div>

//                                                     <div className="shop-item-card-inner-text shop-item-card-inner-text-profile-effect">
//                                                         <div className="shop-item-card-inner-product-name"></div>
//                                                         <div className="shop-item-card-inner-product-details">
//                                                             <div className="shop-item-card-inner-blur">
//                                                                 <div className="shop-item-card-inner-blur-text-lrg" style={{ color: `white` }}>Magic Hearts</div>
//                                                                 <div className="shop-item-card-inner-blur-text-med" style={{ color: `white` }}>Moon Prism Power, Make Up!</div>
//                                                                 <div className="shop-item-price-tags-container" >
//                                                                     <h2 className="shop-item-price-tags-h2-medium" style={{ color: `white` }}><span className="shop-item-striked-price">$11.99</span></h2>
//                                                                     <h2 className="shop-item-price-tags-h2-medium" style={{ color: `white` }}>
//                                                                         <StrifeNitroBadgeIcon className="shop-item-nitro-ball-icon" height={24} width={24} />
//                                                                         <span className="shop-item-price">$8.49</span>
//                                                                     </h2>
//                                                                 </div>

//                                                             </div>
//                                                             <div className="shop-item-card-inner-hover">
//                                                                 <div className="shop-item-card-inner-hover-upsell-container">
//                                                                     <div className="shop-item-card-inner-blur-text-med" style={{ color: `white` }}>Access to purchase this effect is only available with Nitro.</div>
//                                                                     <div className="shop-item-card-button-container">
//                                                                         <button type="button" className="shop-buttons shop-item-shiny-button global-button-size-medium button-look-filled global-button-full-width"
//                                                                             onClick={(e) => { e.stopPropagation(); openModal("subToNitroPro"); }}>
//                                                                             <div className="global-button-contents look-filled-button-contents shopPremiumSubscribeButton">
//                                                                                 <StrifeNitroBadgeIcon className="shop-premium-nitro-ball-icon" height={24} width={24} />
//                                                                                 <span className="shopbuttonText">Unlock Shop with Nitro</span>
//                                                                                 <div className="shiny-button-container">
//                                                                                     <div className="shiny-button-flex">
//                                                                                         <div className="shiny-button-inner"></div>
//                                                                                     </div>
//                                                                                 </div>
//                                                                             </div>
//                                                                         </button>
//                                                                         <button type="button" className="shop-buttons shop-item-preview-button global-button-growth button-look-filled"
//                                                                             onClick={(e) => {
//                                                                                 e.preventDefault();
//                                                                                 openModal("profileEffectModal", "anime-effect", "magicHearts");
//                                                                             }}>
//                                                                             <div className="global-button-contents look-filled-button-contents shop-item-previewButtonInner">
//                                                                                 <EnableCameraViewIcon height={24} width={24} />
//                                                                             </div>
//                                                                         </button>
//                                                                     </div>
//                                                                 </div>
//                                                             </div>
//                                                         </div>
//                                                     </div>
//                                                 </div>

//                                                 <div className="shop-item-card anime-items" role="button" tabIndex={0}
//                                                     onMouseEnter={() => setShatterHover(true)}
//                                                     onMouseLeave={() => setShatterHover(false)}
//                                                     onClick={(e) => {
//                                                         e.preventDefault();
//                                                         openModal("profileEffectModal", "anime-effect", "shatterEffect");
//                                                     }}
//                                                     style={{
//                                                         background: `linear-gradient(rgb(75, 120, 175), rgb(15, 14, 57)) border-box border-box`,
//                                                         borderColor: `rgba(46, 68, 118, 0.4)`,
//                                                         boxShadow: `none`
//                                                     }} >


//                                                     <div className="shop-item-profileEffectPreview">
//                                                         <div className="shop-item-profileEffectPreviewContainer">
//                                                             <img className="shop-item-upc-preview" alt=" " />
//                                                             <div>
//                                                                 <div className="shop-item-upc-profile-effects">
//                                                                     <div className="shop-item-upc-profile-effects-inner">
//                                                                         {
//                                                                             shatterHover ? (
//                                                                                 <>
//                                                                                     <img className="shop-item-anime-shattered-glass" alt=" " style={{ top: `0px` }} />
//                                                                                     <img className="shop-item-anime-shattered-flames" alt=" " style={{ top: `0px` }} />
//                                                                                 </>
//                                                                             ) : (
//                                                                                 <img className="shop-item-anime-shatter" alt=" " style={{ top: `0px` }} />
//                                                                             )
//                                                                         }
//                                                                     </div>
//                                                                 </div>
//                                                             </div>
//                                                         </div>
//                                                     </div>

//                                                     <div className="shop-item-card-inner-text shop-item-card-inner-text-profile-effect">
//                                                         <div className="shop-item-card-inner-product-name"></div>
//                                                         <div className="shop-item-card-inner-product-details">
//                                                             <div className="shop-item-card-inner-blur">
//                                                                 <div className="shop-item-card-inner-blur-text-lrg" style={{ color: `white` }}>Shatter</div>
//                                                                 <div className="shop-item-card-inner-blur-text-med" style={{ color: `white` }}>Ouch, my windows!</div>
//                                                                 <div className="shop-item-price-tags-container" >
//                                                                     <h2 className="shop-item-price-tags-h2-medium" style={{ color: `white` }}><span className="shop-item-striked-price">$11.99</span></h2>
//                                                                     <h2 className="shop-item-price-tags-h2-medium" style={{ color: `white` }}>
//                                                                         <StrifeNitroBadgeIcon className="shop-item-nitro-ball-icon" height={24} width={24} />
//                                                                         <span className="shop-item-price">$8.49</span>
//                                                                     </h2>
//                                                                 </div>

//                                                             </div>
//                                                             <div className="shop-item-card-inner-hover">
//                                                                 <div className="shop-item-card-inner-hover-upsell-container">
//                                                                     <div className="shop-item-card-inner-blur-text-med" style={{ color: `white` }}>Access to purchase this effect is only available with Nitro.</div>
//                                                                     <div className="shop-item-card-button-container">
//                                                                         <button type="button" className="shop-buttons shop-item-shiny-button global-button-size-medium button-look-filled global-button-full-width"
//                                                                             onClick={(e) => { e.stopPropagation(); openModal("subToNitroPro"); }}>
//                                                                             <div className="global-button-contents look-filled-button-contents shopPremiumSubscribeButton">
//                                                                                 <StrifeNitroBadgeIcon className="shop-premium-nitro-ball-icon" height={24} width={24} />
//                                                                                 <span className="shopbuttonText">Unlock Shop with Nitro</span>
//                                                                                 <div className="shiny-button-container">
//                                                                                     <div className="shiny-button-flex">
//                                                                                         <div className="shiny-button-inner"></div>
//                                                                                     </div>
//                                                                                 </div>
//                                                                             </div>
//                                                                         </button>
//                                                                         <button type="button" className="shop-buttons shop-item-preview-button global-button-growth button-look-filled"
//                                                                             onClick={(e) => {
//                                                                                 e.preventDefault();
//                                                                                 openModal("profileEffectModal", "anime-effect", "shatterEffect");
//                                                                             }}>
//                                                                             <div className="global-button-contents look-filled-button-contents shop-item-previewButtonInner">
//                                                                                 <EnableCameraViewIcon height={24} width={24} />
//                                                                             </div>
//                                                                         </button>
//                                                                     </div>
//                                                                 </div>
//                                                             </div>
//                                                         </div>
//                                                     </div>
//                                                 </div>

//                                                 <div className="shop-item-card anime-items" role="button" tabIndex={0}
//                                                     onMouseEnter={() => setShurikenHover(true)}
//                                                     onMouseLeave={() => setShurikenHover(false)}
//                                                     onClick={(e) => {
//                                                         e.preventDefault();
//                                                         openModal("profileEffectModal", "anime-effect", "shurikenStrike");
//                                                     }}
//                                                     style={{
//                                                         background: `linear-gradient(rgb(75, 120, 175), rgb(15, 14, 57)) border-box border-box`,
//                                                         borderColor: `rgba(46, 68, 118, 0.4)`,
//                                                         boxShadow: `none`
//                                                     }} >


//                                                     <div className="shop-item-profileEffectPreview">
//                                                         <div className="shop-item-profileEffectPreviewContainer">
//                                                             <img className="shop-item-upc-preview" alt=" " />
//                                                             <div>
//                                                                 <div className="shop-item-upc-profile-effects">
//                                                                     <div className="shop-item-upc-profile-effects-inner">
//                                                                         {
//                                                                             shurikenHover ? (
//                                                                                 <>
//                                                                                     <img className={`shop-item-anime-shuriken-strike-intro ${shurikenHover ? `` : ``}`} alt=" " style={{ top: `0px` }} />
//                                                                                     <img className="shop-item-anime-shuriken-strike-loop" alt=" " style={{ top: `0px` }} />
//                                                                                 </>
//                                                                             ) : (
//                                                                                 <img className="shop-item-anime-shuriken-strike" alt=" " style={{ top: `0px` }} />
//                                                                             )
//                                                                         }
//                                                                     </div>
//                                                                 </div>
//                                                             </div>
//                                                         </div>
//                                                     </div>

//                                                     <div className="shop-item-card-inner-text shop-item-card-inner-text-profile-effect">
//                                                         <div className="shop-item-card-inner-product-name"></div>
//                                                         <div className="shop-item-card-inner-product-details">
//                                                             <div className="shop-item-card-inner-blur">
//                                                                 <div className="shop-item-card-inner-blur-text-lrg" style={{ color: `white` }}>Shuriken Strike</div>
//                                                                 <div className="shop-item-card-inner-blur-text-med" style={{ color: `white` }}>Every side is the pointy end.</div>
//                                                                 <div className="shop-item-price-tags-container" >
//                                                                     <h2 className="shop-item-price-tags-h2-medium" style={{ color: `white` }}><span className="shop-item-striked-price">$11.99</span></h2>
//                                                                     <h2 className="shop-item-price-tags-h2-medium" style={{ color: `white` }}>
//                                                                         <StrifeNitroBadgeIcon className="shop-item-nitro-ball-icon" height={24} width={24} />
//                                                                         <span className="shop-item-price">$8.49</span>
//                                                                     </h2>
//                                                                 </div>

//                                                             </div>
//                                                             <div className="shop-item-card-inner-hover">
//                                                                 <div className="shop-item-card-inner-hover-upsell-container">
//                                                                     <div className="shop-item-card-inner-blur-text-med" style={{ color: `white` }}>Access to purchase this effect is only available with Nitro.</div>
//                                                                     <div className="shop-item-card-button-container">
//                                                                         <button type="button" className="shop-buttons shop-item-shiny-button global-button-size-medium button-look-filled global-button-full-width"
//                                                                             onClick={(e) => { e.stopPropagation(); openModal("subToNitroPro"); }}>
//                                                                             <div className="global-button-contents look-filled-button-contents shopPremiumSubscribeButton">
//                                                                                 <StrifeNitroBadgeIcon className="shop-premium-nitro-ball-icon" height={24} width={24} />
//                                                                                 <span className="shopbuttonText">Unlock Shop with Nitro</span>
//                                                                                 <div className="shiny-button-container">
//                                                                                     <div className="shiny-button-flex">
//                                                                                         <div className="shiny-button-inner"></div>
//                                                                                     </div>
//                                                                                 </div>
//                                                                             </div>
//                                                                         </button>
//                                                                         <button type="button" className="shop-buttons shop-item-preview-button global-button-growth button-look-filled"
//                                                                             onClick={(e) => {
//                                                                                 e.preventDefault();
//                                                                                 openModal("profileEffectModal", "anime-effect", "shurikenStrike");
//                                                                             }}>
//                                                                             <div className="global-button-contents look-filled-button-contents shop-item-previewButtonInner">
//                                                                                 <EnableCameraViewIcon height={24} width={24} />
//                                                                             </div>
//                                                                         </button>
//                                                                     </div>
//                                                                 </div>
//                                                             </div>
//                                                         </div>
//                                                     </div>
//                                                 </div>

//                                                 <div className="shop-item-card anime-items" role="button" tabIndex={0}
//                                                     onClick={(e) => {
//                                                         e.preventDefault();
//                                                         openModal("profileEffectModal", "anime-effect", "powerSurge");
//                                                     }}
//                                                     style={{
//                                                         background: `linear-gradient(rgb(75, 120, 175), rgb(15, 14, 57)) border-box border-box`,
//                                                         borderColor: `rgba(46, 68, 118, 0.4)`,
//                                                         boxShadow: `none`
//                                                     }} >


//                                                     <div className="shop-item-profileEffectPreview">
//                                                         <div className="shop-item-profileEffectPreviewContainer">
//                                                             <img className="shop-item-upc-preview" alt=" " />
//                                                             <div>
//                                                                 <div className="shop-item-upc-profile-effects">
//                                                                     <div className="shop-item-upc-profile-effects-inner">
//                                                                         <img className="shop-item-anime-power-surge" alt=" " style={{ top: `0px` }} />
//                                                                     </div>
//                                                                 </div>
//                                                             </div>
//                                                         </div>
//                                                     </div>

//                                                     <div className="shop-item-card-inner-text shop-item-card-inner-text-profile-effect">
//                                                         <div className="shop-item-card-inner-product-name"></div>
//                                                         <div className="shop-item-card-inner-product-details">
//                                                             <div className="shop-item-card-inner-blur">
//                                                                 <div className="shop-item-card-inner-blur-text-lrg" style={{ color: `white` }}>Power Surge</div>
//                                                                 <div className="shop-item-card-inner-blur-text-med" style={{ color: `white` }}>You're about to witness true power.</div>
//                                                                 <div className="shop-item-price-tags-container" >
//                                                                     <h2 className="shop-item-price-tags-h2-medium" style={{ color: `white` }}><span className="shop-item-striked-price">$11.99</span></h2>
//                                                                     <h2 className="shop-item-price-tags-h2-medium" style={{ color: `white` }}>
//                                                                         <StrifeNitroBadgeIcon className="shop-item-nitro-ball-icon" height={24} width={24} />
//                                                                         <span className="shop-item-price">$8.49</span>
//                                                                     </h2>
//                                                                 </div>

//                                                             </div>
//                                                             <div className="shop-item-card-inner-hover">
//                                                                 <div className="shop-item-card-inner-hover-upsell-container">
//                                                                     <div className="shop-item-card-inner-blur-text-med" style={{ color: `white` }}>Access to purchase this effect is only available with Nitro.</div>
//                                                                     <div className="shop-item-card-button-container">
//                                                                         <button type="button" className="shop-buttons shop-item-shiny-button global-button-size-medium button-look-filled global-button-full-width"
//                                                                             onClick={(e) => { e.stopPropagation(); openModal("subToNitroPro"); }}>
//                                                                             <div className="global-button-contents look-filled-button-contents shopPremiumSubscribeButton">
//                                                                                 <StrifeNitroBadgeIcon className="shop-premium-nitro-ball-icon" height={24} width={24} />
//                                                                                 <span className="shopbuttonText">Unlock Shop with Nitro</span>
//                                                                                 <div className="shiny-button-container">
//                                                                                     <div className="shiny-button-flex">
//                                                                                         <div className="shiny-button-inner"></div>
//                                                                                     </div>
//                                                                                 </div>
//                                                                             </div>
//                                                                         </button>
//                                                                         <button type="button" className="shop-buttons shop-item-preview-button global-button-growth button-look-filled"
//                                                                             onClick={(e) => {
//                                                                                 e.preventDefault();
//                                                                                 openModal("profileEffectModal", "anime-effect", "powerSurge");
//                                                                             }}>
//                                                                             <div className="global-button-contents look-filled-button-contents shop-item-previewButtonInner">
//                                                                                 <EnableCameraViewIcon height={24} width={24} />
//                                                                             </div>
//                                                                         </button>
//                                                                     </div>
//                                                                 </div>
//                                                             </div>
//                                                         </div>
//                                                     </div>
//                                                 </div>
//                                             </div>
//                                         </div>

//                                     </div>
//                                     <div>
//                                         <div className="shop-banner-img shop-banner-breakfast">
//                                             <div className="shop-strife-banner-logo-halloween">
//                                                 <StrifeBannerLogo width={124} height={24} className={'shop-strife-banner-logo-halloween-icon'} />
//                                             </div>
//                                             <img className="shop-banner-breakfast-logo" alt=" " />
//                                             <div className="shop-halloween-subtext" style={{ color: `white` }}>Breakfast is definitely the most important meal of the day.</div>
//                                         </div>
//                                         <div>
//                                             <div className="shop-item-type" style={{ color: `var(--header-secondary)` }}>Avatar Decorations</div>
//                                             <div className="shop-item-cards-container">
//                                                 <div className="shop-item-card breakfast-items" role="button" tabIndex={0}
//                                                     onClick={(e) => {
//                                                         e.preventDefault();
//                                                         openModal("avatarDecorationPreviewModal", "breakfast-effect", "", "toast");
//                                                     }}
//                                                     style={{
//                                                         background: `linear-gradient(rgb(232, 177, 105), rgb(122, 59, 0)) border-box border-box`,
//                                                         borderColor: `rgba(176, 117, 54, 0.4)`,
//                                                         boxShadow: `none`
//                                                     }} >
//                                                     <div className="shop-item-card-inner" style={{ width: `120px`, height: `120px` }}>
//                                                         <svg width="120" height="120" viewBox="0 0 120 120" className="ssxcore-svg-mask" aria-hidden="true">
//                                                             <foreignObject x="0" y="0" width="120" height="120" mask="url(#svg-mask-avatar-default)">
//                                                                 <div className="ssxcore-avatar-stack">
//                                                                     <img alt=" " className="halloween-wumpus-avatar-img" aria-hidden="true" />
//                                                                 </div>
//                                                             </foreignObject>
//                                                         </svg>
//                                                         <svg width="144" height="144" viewBox="0 0 144 144" className="ssxcore-svg-avatar-decoration" aria-hidden="true">
//                                                             <foreignObject x="0" y="0" width="144" height="144" >
//                                                                 <div className="ssxcore-avatar-stack">
//                                                                     <img className="breakfast-items-toast" alt=" " aria-hidden="true" />
//                                                                 </div>
//                                                             </foreignObject>
//                                                         </svg>
//                                                     </div>
//                                                     <div className="shop-item-card-inner-text">
//                                                         <div className="shop-item-card-inner-product-name"></div>
//                                                         <div className="shop-item-card-inner-product-details">
//                                                             <div className="shop-item-card-inner-blur">
//                                                                 <div className="shop-item-card-inner-blur-text-lrg" style={{ color: `white` }}>Toast</div>
//                                                                 <div className="shop-item-card-inner-blur-text-med" style={{ color: `white` }}>It is toast.</div>
//                                                                 <div className="shop-item-price-tags-container" >
//                                                                     <h2 className="shop-item-price-tags-h2-medium" style={{ color: `white` }}><span className="shop-item-striked-price">$3.99</span></h2>
//                                                                     <h2 className="shop-item-price-tags-h2-medium" style={{ color: `white` }}>
//                                                                         <StrifeNitroBadgeIcon className="shop-item-nitro-ball-icon" height={24} width={24} />
//                                                                         <span className="shop-item-price">$2.99</span>
//                                                                     </h2>
//                                                                 </div>

//                                                             </div>
//                                                             <div className="shop-item-card-inner-hover">
//                                                                 <div className="shop-item-card-inner-hover-upsell-container">
//                                                                     <div className="shop-item-card-inner-blur-text-med" style={{ color: `white` }}>Access to purchase this decoration is only available with Nitro.</div>
//                                                                     <div className="shop-item-card-button-container">
//                                                                         <button type="button" className="shop-buttons shop-item-shiny-button global-button-size-medium button-look-filled global-button-full-width"
//                                                                             onClick={(e) => { e.stopPropagation(); openModal("subToNitroPro"); }}>
//                                                                             <div className="global-button-contents look-filled-button-contents shopPremiumSubscribeButton">
//                                                                                 <StrifeNitroBadgeIcon className="shop-premium-nitro-ball-icon" height={24} width={24} />
//                                                                                 <span className="shopbuttonText">Unlock Shop with Nitro</span>
//                                                                                 <div className="shiny-button-container">
//                                                                                     <div className="shiny-button-flex">
//                                                                                         <div className="shiny-button-inner"></div>
//                                                                                     </div>
//                                                                                 </div>
//                                                                             </div>
//                                                                         </button>
//                                                                         <button type="button" className="shop-buttons shop-item-preview-button global-button-growth button-look-filled"
//                                                                             onClick={(e) => {
//                                                                                 e.preventDefault();
//                                                                                 openModal("avatarDecorationPreviewModal", "breakfast-effect", "", "toast");
//                                                                             }}>
//                                                                             <div className="global-button-contents look-filled-button-contents shop-item-previewButtonInner">
//                                                                                 <EnableCameraViewIcon height={24} width={24} />
//                                                                             </div>
//                                                                         </button>
//                                                                     </div>
//                                                                 </div>
//                                                             </div>

//                                                         </div>
//                                                     </div>
//                                                 </div>
//                                                 <div className="shop-item-card breakfast-items" role="button" tabIndex={0}
//                                                     onClick={(e) => {
//                                                         e.preventDefault();
//                                                         openModal("avatarDecorationPreviewModal", "breakfast-effect", "", "morningCoffee");
//                                                     }}
//                                                     style={{
//                                                         background: `linear-gradient(rgb(232, 177, 105), rgb(122, 59, 0)) border-box border-box`,
//                                                         borderColor: `rgba(176, 117, 54, 0.4)`,
//                                                         boxShadow: `none`
//                                                     }} >
//                                                     <div className="shop-item-card-inner" style={{ width: `120px`, height: `120px` }}>
//                                                         <svg width="120" height="120" viewBox="0 0 120 120" className="ssxcore-svg-mask" aria-hidden="true">
//                                                             <foreignObject x="0" y="0" width="120" height="120" mask="url(#svg-mask-avatar-default)">
//                                                                 <div className="ssxcore-avatar-stack">
//                                                                     <img alt=" " className="halloween-wumpus-avatar-img" aria-hidden="true" />
//                                                                 </div>
//                                                             </foreignObject>
//                                                         </svg>
//                                                         <svg width="144" height="144" viewBox="0 0 144 144" className="ssxcore-svg-avatar-decoration" aria-hidden="true">
//                                                             <foreignObject x="0" y="0" width="144" height="144" >
//                                                                 <div className="ssxcore-avatar-stack">
//                                                                     <img className="breakfast-items-morning-coffee" alt=" " aria-hidden="true" />
//                                                                 </div>
//                                                             </foreignObject>
//                                                         </svg>
//                                                     </div>
//                                                     <div className="shop-item-card-inner-text">
//                                                         <div className="shop-item-card-inner-product-name"></div>
//                                                         <div className="shop-item-card-inner-product-details">
//                                                             <div className="shop-item-card-inner-blur">
//                                                                 <div className="shop-item-card-inner-blur-text-lrg" style={{ color: `white` }}>Morning Coffee</div>
//                                                                 <div className="shop-item-card-inner-blur-text-med" style={{ color: `white` }}>Don't talk to me until I finish this.</div>
//                                                                 <div className="shop-item-price-tags-container" >
//                                                                     <h2 className="shop-item-price-tags-h2-medium" style={{ color: `white` }}><span className="shop-item-striked-price">$3.99</span></h2>
//                                                                     <h2 className="shop-item-price-tags-h2-medium" style={{ color: `white` }}>
//                                                                         <StrifeNitroBadgeIcon className="shop-item-nitro-ball-icon" height={24} width={24} />
//                                                                         <span className="shop-item-price">$2.99</span>
//                                                                     </h2>
//                                                                 </div>

//                                                             </div>
//                                                             <div className="shop-item-card-inner-hover">
//                                                                 <div className="shop-item-card-inner-hover-upsell-container">
//                                                                     <div className="shop-item-card-inner-blur-text-med" style={{ color: `white` }}>Access to purchase this decoration is only available with Nitro.</div>
//                                                                     <div className="shop-item-card-button-container">
//                                                                         <button type="button" className="shop-buttons shop-item-shiny-button global-button-size-medium button-look-filled global-button-full-width"
//                                                                             onClick={(e) => { e.stopPropagation(); openModal("subToNitroPro"); }}>
//                                                                             <div className="global-button-contents look-filled-button-contents shopPremiumSubscribeButton">
//                                                                                 <StrifeNitroBadgeIcon className="shop-premium-nitro-ball-icon" height={24} width={24} />
//                                                                                 <span className="shopbuttonText">Unlock Shop with Nitro</span>
//                                                                                 <div className="shiny-button-container">
//                                                                                     <div className="shiny-button-flex">
//                                                                                         <div className="shiny-button-inner"></div>
//                                                                                     </div>
//                                                                                 </div>
//                                                                             </div>
//                                                                         </button>
//                                                                         <button type="button" className="shop-buttons shop-item-preview-button global-button-growth button-look-filled"
//                                                                             onClick={(e) => {
//                                                                                 e.preventDefault();
//                                                                                 openModal("avatarDecorationPreviewModal", "breakfast-effect", "", "morningCoffee");
//                                                                             }}>
//                                                                             <div className="global-button-contents look-filled-button-contents shop-item-previewButtonInner">
//                                                                                 <EnableCameraViewIcon height={24} width={24} />
//                                                                             </div>
//                                                                         </button>
//                                                                     </div>
//                                                                 </div>
//                                                             </div>

//                                                         </div>
//                                                     </div>
//                                                 </div>
//                                                 <div className="shop-item-card breakfast-items" role="button" tabIndex={0}
//                                                     onClick={(e) => {
//                                                         e.preventDefault();
//                                                         openModal("avatarDecorationPreviewModal", "breakfast-effect", "", "friedEgg");
//                                                     }}
//                                                     style={{
//                                                         background: `linear-gradient(rgb(232, 177, 105), rgb(122, 59, 0)) border-box border-box`,
//                                                         borderColor: `rgba(176, 117, 54, 0.4)`,
//                                                         boxShadow: `none`
//                                                     }} >
//                                                     <div className="shop-item-card-inner" style={{ width: `120px`, height: `120px` }}>
//                                                         <svg width="120" height="120" viewBox="0 0 120 120" className="ssxcore-svg-mask" aria-hidden="true">
//                                                             <foreignObject x="0" y="0" width="120" height="120" mask="url(#svg-mask-avatar-default)">
//                                                                 <div className="ssxcore-avatar-stack">
//                                                                     <img alt=" " className="halloween-wumpus-avatar-img" aria-hidden="true" />
//                                                                 </div>
//                                                             </foreignObject>
//                                                         </svg>
//                                                         <svg width="144" height="144" viewBox="0 0 144 144" className="ssxcore-svg-avatar-decoration" aria-hidden="true">
//                                                             <foreignObject x="0" y="0" width="144" height="144" >
//                                                                 <div className="ssxcore-avatar-stack">
//                                                                     <img className="breakfast-items-fried-eggs" alt=" " aria-hidden="true" />
//                                                                 </div>
//                                                             </foreignObject>
//                                                         </svg>
//                                                     </div>
//                                                     <div className="shop-item-card-inner-text">
//                                                         <div className="shop-item-card-inner-product-name"></div>
//                                                         <div className="shop-item-card-inner-product-details">
//                                                             <div className="shop-item-card-inner-blur">
//                                                                 <div className="shop-item-card-inner-blur-text-lrg" style={{ color: `white` }}>Fried Egg</div>
//                                                                 <div className="shop-item-card-inner-blur-text-med" style={{ color: `white` }}>I like mine sunny side-up.</div>
//                                                                 <div className="shop-item-price-tags-container" >
//                                                                     <h2 className="shop-item-price-tags-h2-medium" style={{ color: `white` }}><span className="shop-item-striked-price">$3.99</span></h2>
//                                                                     <h2 className="shop-item-price-tags-h2-medium" style={{ color: `white` }}>
//                                                                         <StrifeNitroBadgeIcon className="shop-item-nitro-ball-icon" height={24} width={24} />
//                                                                         <span className="shop-item-price">$2.99</span>
//                                                                     </h2>
//                                                                 </div>

//                                                             </div>
//                                                             <div className="shop-item-card-inner-hover">
//                                                                 <div className="shop-item-card-inner-hover-upsell-container">
//                                                                     <div className="shop-item-card-inner-blur-text-med" style={{ color: `white` }}>Access to purchase this decoration is only available with Nitro.</div>
//                                                                     <div className="shop-item-card-button-container">
//                                                                         <button type="button" className="shop-buttons shop-item-shiny-button global-button-size-medium button-look-filled global-button-full-width"
//                                                                             onClick={(e) => { e.stopPropagation(); openModal("subToNitroPro"); }}>
//                                                                             <div className="global-button-contents look-filled-button-contents shopPremiumSubscribeButton">
//                                                                                 <StrifeNitroBadgeIcon className="shop-premium-nitro-ball-icon" height={24} width={24} />
//                                                                                 <span className="shopbuttonText">Unlock Shop with Nitro</span>
//                                                                                 <div className="shiny-button-container">
//                                                                                     <div className="shiny-button-flex">
//                                                                                         <div className="shiny-button-inner"></div>
//                                                                                     </div>
//                                                                                 </div>
//                                                                             </div>
//                                                                         </button>
//                                                                         <button type="button" className="shop-buttons shop-item-preview-button global-button-growth button-look-filled"
//                                                                             onClick={(e) => {
//                                                                                 e.preventDefault();
//                                                                                 openModal("avatarDecorationPreviewModal", "breakfast-effect", "", "friedEgg");
//                                                                             }}>
//                                                                             <div className="global-button-contents look-filled-button-contents shop-item-previewButtonInner">
//                                                                                 <EnableCameraViewIcon height={24} width={24} />
//                                                                             </div>
//                                                                         </button>
//                                                                     </div>
//                                                                 </div>
//                                                             </div>

//                                                         </div>
//                                                     </div>
//                                                 </div>
//                                                 <div className="shop-item-card breakfast-items" role="button" tabIndex={0}
//                                                     onClick={(e) => {
//                                                         e.preventDefault();
//                                                         openModal("avatarDecorationPreviewModal", "breakfast-effect", "", "blueberryJam");
//                                                     }}
//                                                     style={{
//                                                         background: `linear-gradient(rgb(232, 177, 105), rgb(122, 59, 0)) border-box border-box`,
//                                                         borderColor: `rgba(176, 117, 54, 0.4)`,
//                                                         boxShadow: `none`
//                                                     }} >
//                                                     <div className="shop-item-card-inner" style={{ width: `120px`, height: `120px` }}>
//                                                         <svg width="120" height="120" viewBox="0 0 120 120" className="ssxcore-svg-mask" aria-hidden="true">
//                                                             <foreignObject x="0" y="0" width="120" height="120" mask="url(#svg-mask-avatar-default)">
//                                                                 <div className="ssxcore-avatar-stack">
//                                                                     <img alt=" " className="halloween-wumpus-avatar-img" aria-hidden="true" />
//                                                                 </div>
//                                                             </foreignObject>
//                                                         </svg>
//                                                         <svg width="144" height="144" viewBox="0 0 144 144" className="ssxcore-svg-avatar-decoration" aria-hidden="true">
//                                                             <foreignObject x="0" y="0" width="144" height="144" >
//                                                                 <div className="ssxcore-avatar-stack">
//                                                                     <img className="breakfast-items-blueberry-jam" alt=" " aria-hidden="true" />
//                                                                 </div>
//                                                             </foreignObject>
//                                                         </svg>
//                                                     </div>
//                                                     <div className="shop-item-card-inner-text">
//                                                         <div className="shop-item-card-inner-product-name"></div>
//                                                         <div className="shop-item-card-inner-product-details">
//                                                             <div className="shop-item-card-inner-blur">
//                                                                 <div className="shop-item-card-inner-blur-text-lrg" style={{ color: `white` }}>Blueberry Jam</div>
//                                                                 <div className="shop-item-card-inner-blur-text-med" style={{ color: `white` }}>MMMM JUICY.</div>
//                                                                 <div className="shop-item-price-tags-container" >
//                                                                     <h2 className="shop-item-price-tags-h2-medium" style={{ color: `white` }}><span className="shop-item-striked-price">$3.99</span></h2>
//                                                                     <h2 className="shop-item-price-tags-h2-medium" style={{ color: `white` }}>
//                                                                         <StrifeNitroBadgeIcon className="shop-item-nitro-ball-icon" height={24} width={24} />
//                                                                         <span className="shop-item-price">$2.99</span>
//                                                                     </h2>
//                                                                 </div>

//                                                             </div>
//                                                             <div className="shop-item-card-inner-hover">
//                                                                 <div className="shop-item-card-inner-hover-upsell-container">
//                                                                     <div className="shop-item-card-inner-blur-text-med" style={{ color: `white` }}>Access to purchase this decoration is only available with Nitro.</div>
//                                                                     <div className="shop-item-card-button-container">
//                                                                         <button type="button" className="shop-buttons shop-item-shiny-button global-button-size-medium button-look-filled global-button-full-width"
//                                                                             onClick={(e) => { e.stopPropagation(); openModal("subToNitroPro"); }}>
//                                                                             <div className="global-button-contents look-filled-button-contents shopPremiumSubscribeButton">
//                                                                                 <StrifeNitroBadgeIcon className="shop-premium-nitro-ball-icon" height={24} width={24} />
//                                                                                 <span className="shopbuttonText">Unlock Shop with Nitro</span>
//                                                                                 <div className="shiny-button-container">
//                                                                                     <div className="shiny-button-flex">
//                                                                                         <div className="shiny-button-inner"></div>
//                                                                                     </div>
//                                                                                 </div>
//                                                                             </div>
//                                                                         </button>
//                                                                         <button type="button" className="shop-buttons shop-item-preview-button global-button-growth button-look-filled"
//                                                                             onClick={(e) => {
//                                                                                 e.preventDefault();
//                                                                                 openModal("avatarDecorationPreviewModal", "breakfast-effect", "", "blueberryJam");
//                                                                             }}>
//                                                                             <div className="global-button-contents look-filled-button-contents shop-item-previewButtonInner">
//                                                                                 <EnableCameraViewIcon height={24} width={24} />
//                                                                             </div>
//                                                                         </button>
//                                                                     </div>
//                                                                 </div>
//                                                             </div>
//                                                         </div>
//                                                     </div>
//                                                 </div>
//                                                 <div className="shop-item-card breakfast-items" role="button" tabIndex={0}
//                                                     onClick={(e) => {
//                                                         e.preventDefault();
//                                                         openModal("avatarDecorationPreviewModal", "breakfast-effect", "", "donut");
//                                                     }}
//                                                     style={{
//                                                         background: `linear-gradient(rgb(232, 177, 105), rgb(122, 59, 0)) border-box border-box`,
//                                                         borderColor: `rgba(176, 117, 54, 0.4)`,
//                                                         boxShadow: `none`
//                                                     }} >
//                                                     <div className="shop-item-card-inner" style={{ width: `120px`, height: `120px` }}>
//                                                         <svg width="120" height="120" viewBox="0 0 120 120" className="ssxcore-svg-mask" aria-hidden="true">
//                                                             <foreignObject x="0" y="0" width="120" height="120" mask="url(#svg-mask-avatar-default)">
//                                                                 <div className="ssxcore-avatar-stack">
//                                                                     <img alt=" " className="halloween-wumpus-avatar-img" aria-hidden="true" />
//                                                                 </div>
//                                                             </foreignObject>
//                                                         </svg>
//                                                         <svg width="144" height="144" viewBox="0 0 144 144" className="ssxcore-svg-avatar-decoration" aria-hidden="true">
//                                                             <foreignObject x="0" y="0" width="144" height="144" >
//                                                                 <div className="ssxcore-avatar-stack">
//                                                                     <img className="breakfast-items-donuts" alt=" " aria-hidden="true" />
//                                                                 </div>
//                                                             </foreignObject>
//                                                         </svg>
//                                                     </div>
//                                                     <div className="shop-item-card-inner-text">
//                                                         <div className="shop-item-card-inner-product-name"></div>
//                                                         <div className="shop-item-card-inner-product-details">
//                                                             <div className="shop-item-card-inner-blur">
//                                                                 <div className="shop-item-card-inner-blur-text-lrg" style={{ color: `white` }}>Donut</div>
//                                                                 <div className="shop-item-card-inner-blur-text-med" style={{ color: `white` }}>Never enough sprinkles.</div>
//                                                                 <div className="shop-item-price-tags-container" >
//                                                                     <h2 className="shop-item-price-tags-h2-medium" style={{ color: `white` }}><span className="shop-item-striked-price">$3.99</span></h2>
//                                                                     <h2 className="shop-item-price-tags-h2-medium" style={{ color: `white` }}>
//                                                                         <StrifeNitroBadgeIcon className="shop-item-nitro-ball-icon" height={24} width={24} />
//                                                                         <span className="shop-item-price">$2.99</span>
//                                                                     </h2>
//                                                                 </div>

//                                                             </div>
//                                                             <div className="shop-item-card-inner-hover">
//                                                                 <div className="shop-item-card-inner-hover-upsell-container">
//                                                                     <div className="shop-item-card-inner-blur-text-med" style={{ color: `white` }}>Access to purchase this decoration is only available with Nitro.</div>
//                                                                     <div className="shop-item-card-button-container">
//                                                                         <button type="button" className="shop-buttons shop-item-shiny-button global-button-size-medium button-look-filled global-button-full-width"
//                                                                             onClick={(e) => { e.stopPropagation(); openModal("subToNitroPro"); }}>
//                                                                             <div className="global-button-contents look-filled-button-contents shopPremiumSubscribeButton">
//                                                                                 <StrifeNitroBadgeIcon className="shop-premium-nitro-ball-icon" height={24} width={24} />
//                                                                                 <span className="shopbuttonText">Unlock Shop with Nitro</span>
//                                                                                 <div className="shiny-button-container">
//                                                                                     <div className="shiny-button-flex">
//                                                                                         <div className="shiny-button-inner"></div>
//                                                                                     </div>
//                                                                                 </div>
//                                                                             </div>
//                                                                         </button>
//                                                                         <button type="button" className="shop-buttons shop-item-preview-button global-button-growth button-look-filled"
//                                                                             onClick={(e) => {
//                                                                                 e.preventDefault();
//                                                                                 openModal("avatarDecorationPreviewModal", "breakfast-effect", "", "donut");
//                                                                             }}>
//                                                                             <div className="global-button-contents look-filled-button-contents shop-item-previewButtonInner">
//                                                                                 <EnableCameraViewIcon height={24} width={24} />
//                                                                             </div>
//                                                                         </button>
//                                                                     </div>
//                                                                 </div>
//                                                             </div>
//                                                         </div>
//                                                     </div>
//                                                 </div>
//                                                 <div className="shop-item-card breakfast-items" role="button" tabIndex={0}
//                                                     onClick={(e) => {
//                                                         e.preventDefault();
//                                                         openModal("avatarDecorationPreviewModal", "breakfast-effect", "", "pancakes");
//                                                     }}
//                                                     style={{
//                                                         background: `linear-gradient(rgb(232, 177, 105), rgb(122, 59, 0)) border-box border-box`,
//                                                         borderColor: `rgba(176, 117, 54, 0.4)`,
//                                                         boxShadow: `none`
//                                                     }} >
//                                                     <div className="shop-item-card-inner" style={{ width: `120px`, height: `120px` }}>
//                                                         <svg width="120" height="120" viewBox="0 0 120 120" className="ssxcore-svg-mask" aria-hidden="true">
//                                                             <foreignObject x="0" y="0" width="120" height="120" mask="url(#svg-mask-avatar-default)">
//                                                                 <div className="ssxcore-avatar-stack">
//                                                                     <img alt=" " className="halloween-wumpus-avatar-img" aria-hidden="true" />
//                                                                 </div>
//                                                             </foreignObject>
//                                                         </svg>
//                                                         <svg width="144" height="144" viewBox="0 0 144 144" className="ssxcore-svg-avatar-decoration" aria-hidden="true">
//                                                             <foreignObject x="0" y="0" width="144" height="144" >
//                                                                 <div className="ssxcore-avatar-stack">
//                                                                     <img className="breakfast-items-pancakes" alt=" " aria-hidden="true" />
//                                                                 </div>
//                                                             </foreignObject>
//                                                         </svg>
//                                                     </div>
//                                                     <div className="shop-item-card-inner-text">
//                                                         <div className="shop-item-card-inner-product-name"></div>
//                                                         <div className="shop-item-card-inner-product-details">
//                                                             <div className="shop-item-card-inner-blur">
//                                                                 <div className="shop-item-card-inner-blur-text-lrg" style={{ color: `white` }}>Pancakes</div>
//                                                                 <div className="shop-item-card-inner-blur-text-med" style={{ color: `white` }}>How high can you stack 'em?</div>
//                                                                 <div className="shop-item-price-tags-container" >
//                                                                     <h2 className="shop-item-price-tags-h2-medium" style={{ color: `white` }}><span className="shop-item-striked-price">$3.99</span></h2>
//                                                                     <h2 className="shop-item-price-tags-h2-medium" style={{ color: `white` }}>
//                                                                         <StrifeNitroBadgeIcon className="shop-item-nitro-ball-icon" height={24} width={24} />
//                                                                         <span className="shop-item-price">$2.99</span>
//                                                                     </h2>
//                                                                 </div>

//                                                             </div>
//                                                             <div className="shop-item-card-inner-hover">
//                                                                 <div className="shop-item-card-inner-hover-upsell-container">
//                                                                     <div className="shop-item-card-inner-blur-text-med" style={{ color: `white` }}>Access to purchase this decoration is only available with Nitro.</div>
//                                                                     <div className="shop-item-card-button-container">
//                                                                         <button type="button" className="shop-buttons shop-item-shiny-button global-button-size-medium button-look-filled global-button-full-width"
//                                                                             onClick={(e) => { e.stopPropagation(); openModal("subToNitroPro"); }}>
//                                                                             <div className="global-button-contents look-filled-button-contents shopPremiumSubscribeButton">
//                                                                                 <StrifeNitroBadgeIcon className="shop-premium-nitro-ball-icon" height={24} width={24} />
//                                                                                 <span className="shopbuttonText">Unlock Shop with Nitro</span>
//                                                                                 <div className="shiny-button-container">
//                                                                                     <div className="shiny-button-flex">
//                                                                                         <div className="shiny-button-inner"></div>
//                                                                                     </div>
//                                                                                 </div>
//                                                                             </div>
//                                                                         </button>
//                                                                         <button type="button" className="shop-buttons shop-item-preview-button global-button-growth button-look-filled"
//                                                                             onClick={(e) => {
//                                                                                 e.preventDefault();
//                                                                                 openModal("avatarDecorationPreviewModal", "breakfast-effect", "", "pancakes");
//                                                                             }}>
//                                                                             <div className="global-button-contents look-filled-button-contents shop-item-previewButtonInner">
//                                                                                 <EnableCameraViewIcon height={24} width={24} />
//                                                                             </div>
//                                                                         </button>
//                                                                     </div>
//                                                                 </div>
//                                                             </div>
//                                                         </div>
//                                                     </div>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                         <div>
//                                             <div className="shop-item-type-title-container">
//                                                 <div className="shop-item-type" style={{ color: `var(--header-secondary)` }}>Profile Effects</div>
//                                             </div>
//                                             <div className="shop-item-cards-container">
//                                                 <div className="shop-item-card breakfast-items" role="button" tabIndex={0}
//                                                     onClick={(e) => {
//                                                         e.preventDefault();
//                                                         openModal("profileEffectModal", "breakfast-effect", "strifeOs");
//                                                     }}
//                                                     style={{
//                                                         background: `linear-gradient(rgb(232, 177, 105), rgb(122, 59, 0)) border-box border-box`,
//                                                         borderColor: `rgba(176, 117, 54, 0.4)`,
//                                                         boxShadow: `none`
//                                                     }} >


//                                                     <div className="shop-item-profileEffectPreview">
//                                                         <div className="shop-item-profileEffectPreviewContainer">
//                                                             <img className="shop-item-upc-preview" alt=" " />
//                                                             <div>
//                                                                 <div className="shop-item-upc-profile-effects">
//                                                                     <div className="shop-item-upc-profile-effects-inner">
//                                                                         <img className="shop-item-breakfast-strife-cereal-o-s" alt=" " style={{ top: `0px` }} />
//                                                                     </div>
//                                                                 </div>
//                                                             </div>
//                                                         </div>
//                                                     </div>

//                                                     <div className="shop-item-card-inner-text shop-item-card-inner-text-profile-effect">
//                                                         <div className="shop-item-card-inner-product-name"></div>
//                                                         <div className="shop-item-card-inner-product-details">
//                                                             <div className="shop-item-card-inner-blur">
//                                                                 <div className="shop-item-card-inner-blur-text-lrg" style={{ color: `white` }}>$TR!F3-Os</div>
//                                                                 <div className="shop-item-card-inner-blur-text-med" style={{ color: `white` }}>Bet you can't have just one bowl.</div>
//                                                                 <div className="shop-item-price-tags-container" >
//                                                                     <h2 className="shop-item-price-tags-h2-medium" style={{ color: `white` }}><span className="shop-item-striked-price">$11.99</span></h2>
//                                                                     <h2 className="shop-item-price-tags-h2-medium" style={{ color: `white` }}>
//                                                                         <StrifeNitroBadgeIcon className="shop-item-nitro-ball-icon" height={24} width={24} />
//                                                                         <span className="shop-item-price">$8.49</span>
//                                                                     </h2>
//                                                                 </div>

//                                                             </div>
//                                                             <div className="shop-item-card-inner-hover">
//                                                                 <div className="shop-item-card-inner-hover-upsell-container">
//                                                                     <div className="shop-item-card-inner-blur-text-med" style={{ color: `white` }}>Access to purchase this effect is only available with Nitro.</div>
//                                                                     <div className="shop-item-card-button-container">
//                                                                         <button type="button" className="shop-buttons shop-item-shiny-button global-button-size-medium button-look-filled global-button-full-width"
//                                                                             onClick={(e) => { e.stopPropagation(); openModal("subToNitroPro"); }}>
//                                                                             <div className="global-button-contents look-filled-button-contents shopPremiumSubscribeButton">
//                                                                                 <StrifeNitroBadgeIcon className="shop-premium-nitro-ball-icon" height={24} width={24} />
//                                                                                 <span className="shopbuttonText">Unlock Shop with Nitro</span>
//                                                                                 <div className="shiny-button-container">
//                                                                                     <div className="shiny-button-flex">
//                                                                                         <div className="shiny-button-inner"></div>
//                                                                                     </div>
//                                                                                 </div>
//                                                                             </div>
//                                                                         </button>
//                                                                         <button type="button" className="shop-buttons shop-item-preview-button global-button-growth button-look-filled"
//                                                                             onClick={(e) => {
//                                                                                 e.preventDefault();
//                                                                                 openModal("profileEffectModal", "breakfast-effect", "strifeOs");
//                                                                             }}>
//                                                                             <div className="global-button-contents look-filled-button-contents shop-item-previewButtonInner">
//                                                                                 <EnableCameraViewIcon height={24} width={24} />
//                                                                             </div>
//                                                                         </button>
//                                                                     </div>
//                                                                 </div>
//                                                             </div>
//                                                         </div>
//                                                     </div>
//                                                 </div>
//                                                 <div className="shop-item-card breakfast-items" role="button" tabIndex={0}
//                                                     onClick={(e) => {
//                                                         e.preventDefault();
//                                                         openModal("profileEffectModal", "breakfast-effect", "breakfastPlate");
//                                                     }}
//                                                     style={{
//                                                         background: `linear-gradient(rgb(232, 177, 105), rgb(122, 59, 0)) border-box border-box`,
//                                                         borderColor: `rgba(176, 117, 54, 0.4)`,
//                                                         boxShadow: `none`
//                                                     }} >


//                                                     <div className="shop-item-profileEffectPreview">
//                                                         <div className="shop-item-profileEffectPreviewContainer">
//                                                             <img className="shop-item-upc-preview" alt=" " />
//                                                             <div>
//                                                                 <div className="shop-item-upc-profile-effects">
//                                                                     <div className="shop-item-upc-profile-effects-inner">
//                                                                         <img className="shop-item-breakfast-plate" alt=" " style={{ top: `0px` }} />
//                                                                     </div>
//                                                                 </div>
//                                                             </div>
//                                                         </div>
//                                                     </div>

//                                                     <div className="shop-item-card-inner-text shop-item-card-inner-text-profile-effect">
//                                                         <div className="shop-item-card-inner-product-name"></div>
//                                                         <div className="shop-item-card-inner-product-details">
//                                                             <div className="shop-item-card-inner-blur">
//                                                                 <div className="shop-item-card-inner-blur-text-lrg" style={{ color: `white` }}>Breakfast Plate</div>
//                                                                 <div className="shop-item-card-inner-blur-text-med" style={{ color: `white` }}>The best meal for any time of day.</div>
//                                                                 <div className="shop-item-price-tags-container" >
//                                                                     <h2 className="shop-item-price-tags-h2-medium" style={{ color: `white` }}><span className="shop-item-striked-price">$11.99</span></h2>
//                                                                     <h2 className="shop-item-price-tags-h2-medium" style={{ color: `white` }}>
//                                                                         <StrifeNitroBadgeIcon className="shop-item-nitro-ball-icon" height={24} width={24} />
//                                                                         <span className="shop-item-price">$8.49</span>
//                                                                     </h2>
//                                                                 </div>

//                                                             </div>
//                                                             <div className="shop-item-card-inner-hover">
//                                                                 <div className="shop-item-card-inner-hover-upsell-container">
//                                                                     <div className="shop-item-card-inner-blur-text-med" style={{ color: `white` }}>Access to purchase this effect is only available with Nitro.</div>
//                                                                     <div className="shop-item-card-button-container">
//                                                                         <button type="button" className="shop-buttons shop-item-shiny-button global-button-size-medium button-look-filled global-button-full-width"
//                                                                             onClick={(e) => { e.stopPropagation(); openModal("subToNitroPro"); }}>
//                                                                             <div className="global-button-contents look-filled-button-contents shopPremiumSubscribeButton">
//                                                                                 <StrifeNitroBadgeIcon className="shop-premium-nitro-ball-icon" height={24} width={24} />
//                                                                                 <span className="shopbuttonText">Unlock Shop with Nitro</span>
//                                                                                 <div className="shiny-button-container">
//                                                                                     <div className="shiny-button-flex">
//                                                                                         <div className="shiny-button-inner"></div>
//                                                                                     </div>
//                                                                                 </div>
//                                                                             </div>
//                                                                         </button>
//                                                                         <button type="button" className="shop-buttons shop-item-preview-button global-button-growth button-look-filled"
//                                                                             onClick={(e) => {
//                                                                                 e.preventDefault();
//                                                                                 openModal("profileEffectModal", "breakfast-effect", "breakfastPlate");
//                                                                             }}>
//                                                                             <div className="global-button-contents look-filled-button-contents shop-item-previewButtonInner">
//                                                                                 <EnableCameraViewIcon height={24} width={24} />
//                                                                             </div>
//                                                                         </button>
//                                                                     </div>
//                                                                 </div>
//                                                             </div>
//                                                         </div>
//                                                     </div>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div>

//                             </main>
//                         </div>
//                         <div className="shop-page-bottom-seperator"></div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default StrifeShop;