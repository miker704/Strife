// import React from 'react';
// // import ReactTooltip from "react-tooltip";
// import { useState, useRef, useEffect } from "react";
// // import { returnDefaultUserPFP } from '../../utils/userPFP_api_util';
// import { returnUserBadgeFillColor } from '../../utils/user_status_badge_color_api_util';
// import { returnUserOnlineActivityStatusBadgeMaskIMG } from '../../utils/user_online_activity_status_badge_api_util';
// import {
//     PenEditIcon, StrifeBannerLogo,
//     StrifeBotTagIcon, StrifeNitroBadgeIcon, VerifiedCheckIcon, VerifiedStarIcon,
//     AngelListIcon, ChatPresentIcon, CloseXIcon, FolderIcon, GitHubIcon, Invite2ServerCheckBoxCheckedIcon, Invite2ServerCheckBoxUnCheckedIcon, LinkedInIcon, NitroBasicBannerIcon, PrivateLockIcon, ProfilePanelChevronIcon, RoundedCheckBoxCheckedIcon, RoundedCheckBoxUnCheckedIcon, WarnILockIcon, WumpusIcon, WumpusChristmasPresentIcon, AddReactionIcon, PartyHornIcon, WumpusCakeGiftIcon, WumpusTreasureGiftIcon, WumpusCupGiftIcon, SelectBoxCheckIcon,

// } from '../front_end_svgs/Strife_svgs';
// import { Avatar, InputLabel, Skeleton } from '@mui/material';
// import { styled } from "@mui/material/styles";
// import { MessageSkeleton, MessageSkeletonList } from '../custom_input_components/message_Skeleton/message_skeleton';
// import DefaultPFPSVG3 from "../../../app/assets/images/defaultPFPSVG3.svg";
// import StrifeShopHeaderNavBarContainer from '../strife_shop/strife_shop_header_nav_bar/strife_shop_header_nav_bar_container';
// import DMNavBarContainer from '../dm_servers/dm_nav_bar/dm_nav_bar_container';
// import REACT_PORTAL from '../../utils/ReactPortal_api_util';
// import { Tooltip } from 'react-tooltip';
// import Select from '@mui/material/Select';
// import SvgIcon from "@mui/material/SvgIcon";
// import MenuItem from '@mui/material/MenuItem';
// import DefaultPFPSVG from "../../../app/assets/images/defaultPFPSVG.svg";

// const StyledSkeleton = styled(Skeleton)(({ theme }) => ({
//     backgroundColor: `var(--text-normal)`, opacity: `0.08`, borderRadius: `0.5rem`,
//     flex: `0 0 auto`, height: `1rem`, lineHeight: `1.375rem`, verticalAlign: `middle`,
//     marginTop: `0.1875rem`,
// }));


// const GuildCardGridSkeletonList = ({ listsToRender }) => {
//     return (
//         <>
//             {
//                 Array(listsToRender)
//                     .fill(1)
//                     .map((card, index) => (

//                         <div className='shop-item-card' key={`guild-grid-card-item-${card}-${index}`}
//                             style={{
//                                 backgroundColor: `var(--background-secondary-alt)`,
//                                 boxShadow: `none`
//                             }}
//                         >
//                             <div className='shop-item-card-inner' >

//                                 <StyledSkeleton
//                                     sx={{ opacity: '0.1', width: '120px', height: '120px', marginTop: `0.125rem`, borderRadius: `50%`, backgroundColor: `var(--text-normal)` }}
//                                     variant="circular"
//                                     animation={'wave'}
//                                 />
//                             </div>
//                             <div className='shop-item-card-inner-text'>
//                                 <StyledSkeleton
//                                     sx={{ opacity: '0.5', width: '252px', height: '24px', marginTop: `0.125rem`, borderRadius: `0.5rem`, backgroundColor: `var(--background-primary)` }}
//                                     variant="rectangular"
//                                     animation={'wave'}
//                                 />
//                                 <StyledSkeleton
//                                     sx={{ opacity: '0.5', width: '252px', height: '24px', marginTop: `0.125rem`, borderRadius: `0.5rem`, backgroundColor: `var(--background-primary)` }}
//                                     variant="rectangular"
//                                     animation={'wave'}
//                                 />
//                             </div>
//                         </div>
//                     ))
//             }
//         </>
//     );
// };


// const GuildCardBannerSkeleton = () => {
//     return (
//         <>
//             <div className='skeleton-shop-banner shop-item-card'>
//                 <div className='skeleton-shop-banner-cardBody'>
//                     <div className='skeleton-shop-banner-cardBody-avatar'></div>
//                     <div className='skeleton-shop-banner-cardBody-title'></div>
//                     <div className='skeleton-shop-banner-cardBody-description'></div>
//                     <div className='skeleton-shop-banner-cardBody-summary'></div>
//                 </div>
//             </div>
//         </>
//     );
// };

// const GuildCardBannerSkeletonList = ({ listsToRender }) => {
//     return (
//         <>
//             {
//                 Array(listsToRender)
//                     .fill(1)
//                     .map((card, index) => (
//                         <div className='skeleton-shop-banner shop-item-card' key={`guild-grid-card-item-${card}-${index}`}>
//                             <div className='skeleton-shop-banner-cardBody'>
//                                 <div className='skeleton-shop-banner-cardBody-avatar'></div>
//                                 <div className='skeleton-shop-banner-cardBody-title'></div>
//                                 <div className='skeleton-shop-banner-cardBody-description'></div>
//                                 <div className='skeleton-shop-banner-cardBody-summary'></div>
//                             </div>
//                         </div>
//                     ))
//             }
//         </>
//     );
// };

// const SelectInActiveChannel = styled(Select)(({ theme }) => ({

//     fontSize: '16px',
//     lineHeight: '20px',
//     fontFamily: "gg sans",
//     fontWeight: '400',
//     color: '#dbdee1',

//     '.MuiSelect-select.Mui-disabled': {
//         opacity: '0.6',
//         color: '#dbdee1',
//         cursor: 'not-allowed',
//         WebkitTextFillColor: '#dbdee1',
//     },
//     '.MuiSelect-select.Mui-disabled .MuiSvgIcon-root': {
//         opacity: '0.6',
//     },
//     '.MuiSelect-select': {
//         backgroundColor: '#1e1f22',
//         borderColor: '#1e1f22',
//         cursor: 'pointer',
//         outline: '0',
//         border: '1px solid transparent',
//         boxSizing: 'border-box',
//         display: 'grid',
//         gridTemplateColumns: '1fr auto',
//         alignItems: 'center',
//         borderRadius: '4px',
//         // width: '320px',
//         // minWidth: '320px',
//         // maxWidth: '320px',
//         width: '382px',
//         minWidth: '382px',
//         maxWidth: '382px',
//         minHeight: '42.55px',
//         height: '42.55px',
//         maxHeight: '42.55px',


//         '.selectRegionSvgCheckMark': {
//             display: 'none !important',
//         },

//     },
//     '.MuiSvgIcon-root': {
//         color: '#dbdee1',
//         height: `24px`,
//         width: `24px`,
//         fontSize: `1.7rem`
//     },

//     '.MuiSvgIcon-root.Mui-disabled': {
//         opacity: '0.6',
//     },

//     "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
//         border: "none",
//         borderRadius: "5px 5px 0 0",
//         borderColor: 'transparent',
//     },
//     "& .MuiOutlinedInput-notchedOutline": {
//         border: "none"
//     },
//     "&:hover .MuiOutlinedInput-notchedOutline": {
//         border: "none",
//     },

//     '.MuiOutlinedInput-input': {
//         padding: '8px 8px 8px 12px',
//     },


// }));

// // const SelectChevron = (props) => {
// //     return (
// //         <SvgIcon {...props} aria-hidden="true" role="img" width="24" height="24" viewBox="0 0 24 24">
// //             <path fill="currentColor" d="M16.59 8.59003L12 13.17L7.41 8.59003L6 10L12 16L18 10L16.59 8.59003Z">
// //             </path>
// //         </SvgIcon>
// //     );
// // }
// const SelectChevron = (props) => {
//     return (
//         <SvgIcon {...props} aria-hidden="true" role="img" width="24" height="24" viewBox="0 0 24 24">
//             <path fill="currentColor" d="M5.3 9.3a1 1 0 0 1 1.4 0l5.3 5.29 5.3-5.3a1 1 0 1 1 1.4 1.42l-6 6a1 1 0 0 1-1.4 0l-6-6a1 1 0 0 1 0-1.42Z">
//             </path>
//         </SvgIcon>
//     );
// }
// const TestPage4 = (props) => {

//     useEffect(() => {
//         props.fetchUser(props.memberId).then((action) => {
//             const newfriend = action.user
//             setMemberData(newfriend);
//             setMemberStatus(newfriend);
//         })

//         return function cleanUp () {
//             if (props.errors.length > 0) {
//                 props.removeFriendshipErrors();
//             }
//             if (props.sessionErrors.length > 0) {
//                 props.removeSessionErrors();
//             }
//         }

//     }, []);

//     // useEffect(() => {

//     //     //combined with the async cable to dispatch actions across users for relationship actions 
//     //     // when a user does some member action on another user if that other user is online then 
//     //     //they are sent new data for the user that just did some member interaction with them 
//     //     //this data has the latest info and since its stored in the user state we can search it 
//     //     // when the user state changes find the user and sync the state data with the new data 
//     //     // which will change the selectable member options and update any banners avatars, or 
//     //     // displayable user info. Note this fires when this modal is rendered but does not 
//     //     // modify component state member as it is undefined currently which is the same value the
//     //     // find function returns redux dispatch for fetchUser runs and adds the user data into the member state 
//     //     // when a receiveUser dispatch is called and it is data that matches the user being viewed this will fire and 
//     //     // change the member state to the new info. Note changes are visually reflected if the modal is still open and 
//     //     // the user on the other end has executing some available action that would violate action choices available on the 
//     //     //current users end. it will then re-render the latest data. If the current user is currently viewing 
//     //     // a user that has just changed their banner,avatar , username, display name it will re-render due to another 
//     //     // cable action un related to friendships but to servers and dmservers and its members. 

//     //     let friendDataReSync = props.users.find((user) => user.id === member.id);

//     //     if (friendDataReSync) {
//     //         setMemberData(friendDataReSync);
//     //         setMemberStatus(friendDataReSync);
//     //     }

//     // }, [props.users])



//     const [time, setTime] = useState(0);
//     const [isRunning, setIsRunning] = useState(false);
//     const popUpRef = useRef(null);
//     // Minutes calculation
//     const minutes = Math.floor((time % 360000) / 6000);
//     // Seconds calculation
//     const seconds = Math.floor((time % 6000) / 100);

//     useEffect(() => {
//         let intervalId;
//         setIsRunning(true);
//         if (isRunning) {
//             intervalId = setInterval(() => setTime(time + 1), 10);
//         }
//         return () => {
//             clearInterval(intervalId);
//         };
//     }, [isRunning, time]);



//     const [memberStatus, setMemberStatus] = useState({});
//     const [member, setMemberData] = useState({});
//     const popupRef = useRef();
//     // closeOnEsc(props.setShowPopup);
//     const defaultcolorPalleteRef = useRef(Math.random());
//     const colorPalleteAltRef = useRef(Math.random());
//     let upcColorPallete = 'ppe-upc theme-dark userProfileOuterTheme profileEffectsModalCustomPreview-UPC profileEffectCustomizationPreview-themed' +
//         ((defaultcolorPalleteRef.current > 0.50) ? ' ' + 'user-upc-profile-colors-0' : ' ' + `user-upc-profile-colors-${member.color_tag}`) +
//         ((colorPalleteAltRef.current > 0.90) ? ' ' + 'alt' : '');

//     const Strife_Bot_IDs = [1, 2, 3, 4];

//     let if_Bot_tag = Strife_Bot_IDs.includes(member.id) ? (
//         <span className="bot-sticker">
//             <StrifeBotTagIcon aria-label="Verified $TR!F3 B0T" className="bot-check-mark" />
//             <span className="bot-text">$TR!F3 B0T</span>
//         </span>
//     ) : ("");


//     let memberBanner = member.banner === undefined ?
//         (

//             <svg className="ppe-upc-bannerSVGwrapper" viewBox="0 0 280 90" >
//                 <mask id="uid_1414">
//                     <rect fill="white" x="0" y="0" width="100%" height="100%"></rect>
//                     <circle fill="black" cx="58" cy="82" r="46"></circle>
//                 </mask>
//                 <foreignObject x="0" y="0" width="100%" height="100%" overflow="visible" mask="url(#uid_1414)">
//                     <div className={`ppe-upc-banner color-${member.color_tag}`}>
//                     </div>
//                 </foreignObject>
//             </svg>

//         ) : (
//             <svg className="ppe-upc-bannerSVGwrapper-pro" viewBox="0 0 280 120">
//                 <mask id="uid_3244">
//                     <rect fill="white" x="0" y="0" width="100%" height="100%"></rect>
//                     <circle fill="black" cx="58" cy="112" r="46"></circle>
//                 </mask>
//                 <foreignObject x="0" y="0" width="100%" height="100%" overflow="visible" mask="url(#uid_3244)">
//                     <div className={`ppe-upc-banner-pro ${member.banner === undefined ? `color-${member.color_tag}` : ``}`}
//                         style={{ backgroundImage: `${member.banner === undefined ? `none` : `url(${member.banner})`}`, backgroundColor: `${member.banner === undefined ? `` : `rgb(21, 20, 20)`}` }}>
//                     </div>
//                 </foreignObject>
//             </svg>
//         );



//     let memberPhoto = (
//         <div className={`upc-pfp-icon-wrapper ${member.banner ? `pro` : ``}`} role="button" tabIndex={0}>
//             <div className='upc-avatar-wrapper' role='img'>
//                 <svg width="80" height="80" viewBox="0 0 80 80" className="upc-avatar-svg-mask" aria-hidden="true">
//                     <foreignObject x="0" y="0" width="80" height="80" mask="url(#svg-mask-avatar-default)">
//                         <div className="upc-avatar-stack">
//                             {
//                                 member.photo === undefined ? (
//                                     <img className={`upc-avatar-pfp icon-colors-${member.color_tag}`} alt=" " aria-hidden="true" />
//                                 ) : (
//                                     <img className="upc-avatar-pfp" src={member.photo} alt=" " aria-hidden="true" />
//                                 )
//                             }
//                         </div>
//                     </foreignObject>
//                 </svg>
//                 {/* <svg width="96" height="96" viewBox="0 0 96 96" className="ssxcore-svg-avatar-decoration" aria-hidden="true">
//                     <foreignObject x="0" y="0" width="96" height="96" >
//                         <div className="ssxcore-avatar-stack">
//                             {avatarDecorationPreviewImgs[props.avatarEffectObj]}
//                         </div>
//                     </foreignObject>
//                 </svg> */}
//             </div>
//             <div className="ppe-status">
//                 <svg className="ppe-status-dot">
//                     <rect width="100%" height="100%" fill={returnUserBadgeFillColor(member.online)}
//                         mask={returnUserOnlineActivityStatusBadgeMaskIMG(member.online)}
//                         className="upc-avatar-pointer-events"></rect>
//                 </svg>
//             </div>
//         </div>
//     );


//     let badgeContainer = (
//         <div className='upc-profile-badges-container' role='group'>
//             <a className='usm-user-strife-tag-badge-anchor' role="button" data-tooltip-position-strategy='fixed' data-tooltip-id="modal-tool-tip-usm"
//                 data-tooltip-content={`Originally known as ${member.username}#${member.strife_id_tag}`}>
//                 <img className='usm-user-strife-tag-badge' alt=" " />
//             </a>
//         </div>
//     );

//     let profileEffectPreviewImgs = {
//         "fallFoliage": (
//             <>
//                 <img className='shop-item-fall-foliage-infinite' alt=" " style={{ top: `0px` }} />
//                 <img className={`ppe-shop-item-fall-foliage-leaves`} alt=" " />
//             </>
//         ),
//         "lillyPad": (
//             <>
//                 <img className="ppe-shop-item-fall-lilly-pad-life" alt=" " style={{ top: `0px` }} />
//             </>
//         ),
//         "ghoulishGraffiti": (
//             <>
//                 <img className="ppe-shop-item-ghoulish-graffiti" alt=" " style={{ top: `0px` }} />
//             </>
//         ),

//         "zombieSlime": (
//             <>
//                 <img className="ppe-shop-item-slime-zombie" alt=" " style={{ top: `0px` }} />
//             </>
//         ),
//         "darkOmens": (
//             <>
//                 <img className="ppe-shop-item-ghost-skulls" alt=" " style={{ top: `0px` }} />
//             </>
//         ),

//         "hydroBlast": (
//             <>
//                 <img className="ppe-shop-item-fantasy-hydro-blast" alt=" " style={{ top: `0px` }} />
//             </>
//         ),
//         "sakuraDreams": (
//             <>
//                 <img className="ppe-shop-item-fantasy-sakura-dreams-main" alt=" " style={{ top: `0px` }} />
//                 <img className="ppe-shop-item-fantasy-sakura-dreams" alt=" " style={{ top: `0px` }} />
//             </>
//         ),
//         "mysticVines": (
//             <>
//                 <img className={`shop-item-fantasy-mystic-vines-growing-cycle`} alt=" " style={{ top: `0px` }} />
//                 <img className={`shop-item-fantasy-mystic-vines-loop`} alt=" " style={{ top: `0px` }} />
//             </>
//         ),
//         "pixieDust": (
//             <>
//                 <img className="ppe-shop-item-fantasy-pixie-dust" alt=" " style={{ top: `0px` }} />
//             </>
//         ),
//         "magicHearts": (
//             <>
//                 <img className="ppe-shop-item-anime-magic-hearts" alt=" " style={{ top: `0px` }} />
//             </>
//         ),
//         "shatterEffect": (
//             <>
//                 <img className="ppe-shop-item-anime-shatter" alt=" " style={{ top: `0px` }} />
//                 <img className="ppe-shop-item-anime-shatter-flame" alt=" " style={{ top: `0px` }} />
//             </>
//         ),
//         "shurikenStrike": (
//             <>
//                 <img className="ppe-shop-item-anime-shuriken-strike" alt=" " style={{ top: `0px` }} />
//                 <img className="ppe-shop-item-anime-shuriken-strike-throws" alt=" " style={{ top: `0px` }} />

//             </>
//         ),
//         "powerSurge": (
//             <>
//                 <img className="ppe-shop-item-anime-power-surge" alt=" " style={{ top: `0px` }} />
//             </>
//         ),
//         "strifeOs": (
//             <>
//                 <img className="ppe-shop-item-breakfast-strife-cereal-o-s" alt=" " style={{ top: `0px` }} />
//             </>
//         ),
//         "breakfastPlate": (
//             <>
//                 <img className="ppe-shop-item-breakfast-plate" alt=" " style={{ top: `0px` }} />
//             </>
//         ),

//         "deckTheHalls": (
//             <>
//                 <img className="shop-item-winter-wonderland-deck-the-halls-intro" alt=" " style={{ top: `0px` }} />
//             </>
//         ),
//         "snowyShenanigans": (
//             <>
//                 <img className="shop-item-winter-wonderland-snowman-intro" alt=" " style={{ top: `0px` }} />
//                 <img className="shop-item-winter-wonderland-snowman-loop" alt=" " style={{ top: `0px` }} />
//             </>
//         ),
//         "boostedRelic": (
//             <>
//                 <img className="shop-item-disxcore-boosted-relic-intro" alt=" " style={{ top: `0px` }} />
//                 <img className="shop-item-disxcore-boosted-relic-loop" alt=" " style={{ top: `0px` }} />
//             </>
//         ),
//         "cyberSpace": (
//             <>
//                 <img className="shop-item-disxcore-cyberspace-intro" alt=" " style={{ top: `0px` }} />
//                 <img className="shop-item-disxcore-cyberspace-loop" alt=" " style={{ top: `0px` }} />
//             </>
//         ),

//         "gooZilla": (
//             <>
//                 <img className="shop-item-monsters-gooZilla-claw" alt=" " style={{ top: `0px` }} />
//                 <img className="shop-item-monsters-gooZilla-claw-goo" alt=" " style={{ top: `0px` }} />
//                 <img className="shop-item-monsters-gooZilla-claw-goo-end" alt=" " style={{ top: `0px` }} />
//             </>
//         ),
//         "heartZilla": (
//             <>
//                 <img className="shop-item-monsters-heartZilla-claw" alt=" " style={{ top: `0px` }} />
//                 <img className="shop-item-monsters-heartZilla-end-dripping" alt=" " style={{ top: `0px` }} />
//             </>
//         ),
//         "monsterPop": (
//             <>
//                 <img className="shop-item-monsters-monsterPop-intro" alt=" " style={{ top: `0px` }} />
//                 <img className="shop-item-monsters-monsterPop-glass-intro" alt=" " style={{ top: `0px` }} />
//                 <img className="shop-item-monsters-monsterPop-ending-pop" alt=" " style={{ top: `0px` }} />

//             </>
//         ),
//     }
//     return (
//         <REACT_PORTAL wrapperId={'sub-modal'} classNameId={'subModal'} onClick={(e) => e.stopPropagation()}>

//             <div className='server-user-options-upc-layer-container' >
//                 <div id="upc-mod" className={`upc-popout message-version`}>
//                     <div className="upc-inner-wrapper reverse-animation">
//                         <div className={upcColorPallete}>
//                             <div className={`user-mini-upc-inner ${member.banner === undefined ? `userProfileThemeWithOutBanner` : `userProfileThemeWithBanner`}`}>
//                                 <div className="shop-item-upc-profile-effects">
//                                     <div className="shop-item-upc-profile-effects-inner">
//                                         {profileEffectPreviewImgs[props.profileThemeObj]}
//                                     </div>
//                                 </div>
//                                 {memberBanner}
//                                 {memberPhoto}
//                                 {badgeContainer}
//                                 <div className='upc-popout-overlay-background upc-overlay-background ppe-customization-upc-body' >

//                                     <div className='upc-section-content ppe-upc-section-content-container' >
//                                         <div>
//                                             <div className='upc-user-text'>
//                                                 <h3 className='upc-user-display-name'>{member.username}</h3>
//                                                 <div className='upc-header-username-tag-wrapper'>
//                                                     <span className='upc-username'>{member.username}</span>
//                                                     <span className='upc-strife-tag'>#{member.strife_id_tag}</span>
//                                                     {if_Bot_tag}
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     </div>
//                                     <div className="ppe-upc-content-divider"></div>
//                                     <div className='upc-section-content' >
//                                         <h3 className='upc-strife-member-since-header'>$TR!F3 Member Since</h3>
//                                         <div className='upc-strife-member-since-container'>
//                                             <div className='upc-strife-member-since-time'>{member.accountCreatedOn}</div>
//                                         </div>
//                                     </div>
//                                     <div className="upc-section-content ppe-upc-last-section">
//                                         <div className="ppe-fakeActivity-title">
//                                             Customizing My Profile
//                                         </div>
//                                         <div className="ppe-fakeActivity-layout">
//                                             <div className="ppe-fakeActivity-icon">
//                                                 <img className="ppe-fake-activity-pencil-icon" alt=" " />
//                                             </div>
//                                             <div className="ppe-fakeActivity-content">
//                                                 <div className="ppe-fakeActivity-content-semi-bold">User Profile</div>
//                                                 <div className="ppe-profile-effect-small-text-description default-text-color">
//                                                     <span className="ppe-fakeActivity-timeValues">
//                                                         {`${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`}
//                                                     </span>{`${` `}`} elapsed
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>

//                 <Tooltip className="usm-tool-tip" id="modal-tool-tip-usm" place="top" closeOnResize={true} closeOnScroll={true} />
//             </div>
//         </REACT_PORTAL >
//     )

// }


// export default TestPage4;