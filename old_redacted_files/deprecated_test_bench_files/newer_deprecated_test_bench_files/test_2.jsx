// import React from 'react';
// // import ReactTooltip from "react-tooltip";
// import { useState, useRef, useEffect } from "react";
// // import { returnDefaultUserPFP } from '../../utils/userPFP_api_util';
// import { returnUserBadgeFillColor } from '../../utils/user_status_badge_color_api_util';
// import { returnUserOnlineActivityStatusBadgeMaskIMG } from '../../utils/user_online_activity_status_badge_api_util';
// import { PenEditIcon, StrifeBotTagIcon, StrifeNitroBadgeIcon } from '../front_end_svgs/Strife_svgs';


// const TestPage2 = (props) => {


//     const defaultcolorPalleteRef = useRef(Math.random());
//     const colorPalleteAltRef = useRef(Math.random());
//     let upcColorPallete = 'currentuser-mini-upc theme-dark userProfileOuterTheme' +
//         ((defaultcolorPalleteRef.current > 0.50) ? ' ' + 'user-upc-profile-colors-0' : ' ' + `user-upc-profile-colors-${props.currentUser.color_tag}`) +
//         ((colorPalleteAltRef.current > 0.90) ? ' ' + 'alt' : '');
//     const Strife_Bot_IDs = [1, 2, 3, 4];

//     let if_Bot_tag = Strife_Bot_IDs.includes(props.currentUser.id) ? (
//         <span className="bot-sticker">
//             <StrifeBotTagIcon aria-label="Verified $TR!F3 B0T" className="bot-check-mark" data-tooltip-position-strategy='fixed' data-tooltip-id="suom-tool-tip" data-tooltip-content={'Verified $TR!F3 B0T'} />
//             <span className="bot-text">$TR!F3 B0T</span>
//         </span>
//     ) : ("");

//     let upcStrifeNitroWrapper = (
//         <div className='upc-strife-nitro-wrapper' data-tooltip-id="suom-tool-tip"
//             data-tooltip-position-strategy='fixed' data-tooltip-place='bottom'
//             data-tooltip-content={"Customize your own profile theme, banner, animated avatar, and more with $TR!F3 N!TR0!"}>
//             <div className="upc-strife-nitro-badge">
//                 <StrifeNitroBadgeIcon className="upc-strife-nitro-icon" height={16} width={16} />
//             </div>
//         </div>
//     );
//     let pencilIcon = (
//         <div className='upc-pencil-container' data-tooltip-position-strategy='fixed' data-tooltip-id="suom-tool-tip"
//             data-tooltip-content={`Edit Profile`} onClick={(e) => handleOpenUserSettings(e)}>
//             <PenEditIcon aria-label="Edit Profile" className="upc-pencil-icon" aria-hidden="false" role="img" width={18} height={18} />
//         </div>
//     );


//     const handleOpenUserSettings = (e) => {
//         e.preventDefault();
//         props.setShowPopup(false);
//         props.openModal('userSettings');
//     }



//     return (

//         <div className='mini-current-user-layer-container'>
//             <div className='minicupc-popout'>
//                 <div className='minicupc-inner-wrapper'>
//                     <div className='currentUserAccountProfileWrapper'>
//                         <div className={upcColorPallete}>

//                             <div className={`user-mini-upc-inner ${props.currentUser.banner === undefined ? `userProfileThemeWithOutBanner` : `userProfileThemeWithBanner`}`}>
                                
//                                 {
//                                     props.currentUser.banner === undefined ?
//                                         (
//                                             <svg className="upc-bannerSVGwrapper" viewBox="0 0 340 90" >
//                                                 <mask id="uid_1414">
//                                                     <rect fill="white" x="0" y="0" width="100%" height="100%"></rect>
//                                                     <circle fill="black" cx="58" cy="82" r="46"></circle>
//                                                 </mask>
//                                                 <foreignObject x="0" y="0" width="100%" height="100%" overflow="visible" mask="url(#uid_1414)">
//                                                     <div className={`upc-banner color-${props.currentUser.color_tag}`}>
//                                                         {upcStrifeNitroWrapper}
//                                                         {pencilIcon}
//                                                     </div>
//                                                 </foreignObject>
//                                             </svg>

//                                         ) : (
//                                             <svg className="upc-bannerSVGwrapper-pro" viewBox="0 0 340 120">
//                                                 <mask id="uid_3244">
//                                                     <rect fill="white" x="0" y="0" width="100%" height="100%"></rect>
//                                                     <circle fill="black" cx="58" cy="112" r="46"></circle>
//                                                 </mask>
//                                                 <foreignObject x="0" y="0" width="100%" height="100%" overflow="visible" mask="url(#uid_3244)">
//                                                     <div className={`upc-banner-pro ${props.currentUser.banner === undefined ? `color-${props.currentUser.color_tag}` : ``}`}
//                                                         style={{
//                                                             backgroundImage: `${props.currentUser.banner === undefined ? `none` : `url(${props.currentUser.banner})`}`,
//                                                             backgroundColor: `${props.currentUser.banner === undefined ? `` : `rgb(21, 20, 20)`}`
//                                                         }}>
//                                                         {upcStrifeNitroWrapper}
//                                                         {pencilIcon}
//                                                     </div>
//                                                 </foreignObject>
//                                             </svg>
//                                         )
//                                 }
//                                 <div className={`upc-pfp-icon-wrapper ${props.currentUser.banner ? `pro` : ``}`} role='button'>
//                                     <div className='upc-pfp-hover-target'>
//                                         <div className='upc-avatar-wrapper' role='img'>
//                                             <svg width="92" height="92" viewBox="0 0 92 92" className="upc-avatar-svg-mask" aria-hidden="true">
//                                                 <foreignObject x="0" y="0" width="80" height="80" mask="url(#svg-mask-avatar-status-round-80)">
//                                                     <div className="upc-avatar-stack">
//                                                         {
//                                                             props.currentUser.photo === undefined ? (
//                                                                 <img className={`upc-avatar-pfp icon-colors-${props.currentUser.color_tag}`} alt=" " aria-hidden="true" />
//                                                             ) : (
//                                                                 <img className="upc-avatar-pfp" src={props.currentUser.photo} alt=" " aria-hidden="true" />
//                                                             )
//                                                         }
//                                                     </div>
//                                                 </foreignObject>
//                                                 <circle fill="black" r="14" cx="68" cy="68" style={{ opacity: `0.45` }}></circle>
//                                                 <rect width="16" height="16" x="60" y="60" fill={returnUserBadgeFillColor(props.currentUser.online)}
//                                                     mask={returnUserOnlineActivityStatusBadgeMaskIMG(props.currentUser.online)}
//                                                     className="upc-avatar-pointer-events" data-tooltip-id="suom-tool-tip"
//                                                     data-tooltip-position-strategy='fixed' data-tooltip-content={`${props.currentUser.online ? `Online` : `Offline`}`}></rect>
//                                             </svg>
//                                         </div>
//                                     </div>
//                                     <svg width="80" height="80" className="upc-avatar-hint" viewBox="0 0 80 80">
//                                         <foreignObject x="0" y="0" width="80" height="80" overflow="visible" mask="url(#svg-mask-avatar-status-round-80)">
//                                             <div className="upc-avatar-hint-inner">View Profile</div>
//                                         </foreignObject>
//                                     </svg>
//                                 </div>
//                                 <div className='upc-profile-badges-container' role='group'>
//                                     <a className='usm-user-strife-tag-badge-anchor' role="button" data-tooltip-position-strategy='fixed' data-tooltip-id="suom-tool-tip"
//                                         data-tooltip-content={`Originally known as ${props.currentUser.username}#${props.currentUser.strife_id_tag}`}>
//                                         <img className='usm-user-strife-tag-badge' alt=" " />
//                                     </a>
//                                 </div>
//                                 <div className='upc-popout-overlay-background upc-overlay-background' >
//                                     <span></span>
//                                     <div className='upc-section-content upc-username-section' >
//                                         <div>
//                                             <div className='upc-user-text'>
//                                                 <h1 className='upc-user-display-name'>{props.currentUser.username}</h1>
//                                                 <div className='upc-header-username-tag-wrapper'>
//                                                     <span className='upc-username'>{props.currentUser.username}</span>
//                                                     <span className='upc-strife-tag'>#{props.currentUser.strife_id_tag}</span>
//                                                     {if_Bot_tag}
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     </div>
//                                     <div className='upc-content-divider'></div>
//                                     <div className='upc-content-section-scroller global-scroll-thin-raw-attributes global-scroller-base' style={{ overflow: `hidden scroll`, paddingRight: `4px` }}>
//                                         <div className='upc-section-content'>
//                                             <h2 className='upc-about-me-text'>About Me</h2>
//                                             <div className='upc-about-me-markup-container'>
//                                                 <div className='upc-about-me-markup-text-wrapper'>
//                                                     <span>Loading ... ... ... ... </span>
//                                                     <img className='upc-loading-status' alt="" />
//                                                 </div>
//                                             </div>
//                                         </div>
//                                         <div className='upc-section-content'>
//                                             <h2 className='upc-strife-member-since-header'>$TR!F3 Member Since</h2>
//                                             <div className='upc-strife-member-since-container'>
//                                                 <div className='upc-strife-member-since-time'>{props.currentUser.accountCreatedOn}</div>
//                                             </div>
//                                         </div>
//                                         <div className='upc-section-content-sep'></div>
//                                     </div>
//                                 </div>
//                             </div>
//                             <div className=''></div>
//                             <div className=''></div>

//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>



//     )




// }

// export default TestPage2;