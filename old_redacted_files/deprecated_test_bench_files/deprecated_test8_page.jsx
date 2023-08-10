// import React from 'react';
// // import ReactTooltip from "react-tooltip";
// import { useState, useRef, useEffect } from "react";
// import { returnDefaultUserPFP } from '../../utils/userPFP_api_util';
// import { returnUserBadgeFillColor } from '../../utils/user_status_badge_color_api_util';
// import { returnUserOnlineActivityStatusBadgeMaskIMG } from '../../utils/user_online_activity_status_badge_api_util';


// const TestPage8 = (props) => {

//     const [note, setNote] = useState('');
//     const [dmMessageText, setDmMessageText] = useState('')
//     const dmMessageRef = useRef(null);
//     // useEffect(() => {
//     const defaultcolorPalleteRef = useRef(Math.random());
//     const colorPalleteAltRef = useRef(Math.random());

//     // }, [])
//     const splitServerName = (serverName) => {
//         let serverAcryo = serverName.split(" ").map((parts) => parts[0]).join("");
//         return serverAcryo.length > 5 ? serverAcryo.slice(0, 5) : serverAcryo;
//     }

//     const generateFontSize = (serverAcryoName) => {

//         if (serverAcryoName.length === 1 || serverAcryoName.length === 2) {
//             return 8;
//         }
//         else if (serverAcryoName.length === 3 || serverAcryoName.length === 4) {
//             return 6;
//         }
//         else if (serverAcryoName.length >= 5) {
//             return 4;
//         }

//     }

//     let if_Bot_tag = (
//         <span className="bot-sticker" data-tip data-for="verifed-bot">
//             <svg aria-label="Verified Bot" className="bot-check-mark" aria-hidden="false" role="img" width="16" height="16" viewBox="0 0 16 15.2">
//                 <path d="M7.4,11.17,4,8.62,5,7.26l2,1.53L10.64,4l1.36,1Z" fill="currentColor"></path></svg>
//             <span className="bot-text">$TR!F3 BOT</span>
//         </span>
//     );


//     let EditOptions = "";

//     let kickUserOption = (<div className="mfom-item red">
//         <div className="mfom-item-label">Kick User</div>
//     </div>)


//     let banUserFromServerTag = (<div className="mfom-item red" >
//         <div className="mfom-item-label">Ban User</div>
//     </div>)


//     let number = Math.floor(Math.random() * (3 - (-2) + 1) + (-2));





//     switch (number) {
//         //if group owner allow kicking of user 

//         // case of -2 means current user is blocked by this user deny any interactions
//         case -2:
//             //remove block only -> no message
//             EditOptions = (
//                 <>
//                     <div className="upc-body-friend-options-wrapper">
//                         <div className='upc-body-friend-options-scroller global-scroll-thin-raw-attributes global-scroll-faded-raw-attributes global-scroller-base' style={{ overflow: `hidden scroll`, paddingRight: `0px` }}>
//                             <div className="mfom-item red">
//                                 <div className="mfom-item-label">Block User</div>
//                             </div>
//                             {kickUserOption}
//                             {banUserFromServerTag}
//                             <div className="mfom-bottom-div"></div>
//                         </div>
//                         <div className="upc-seper"></div>
//                     </div>

//                 </>
//             )
//             break;



//         case -1:
//             //remove block only -> no message

//             EditOptions = (
//                 <>

//                     <div className="upc-body-friend-options-wrapper">

//                         <div className='upc-body-friend-options-scroller global-scroll-thin-raw-attributes global-scroll-faded-raw-attributes global-scroller-base' style={{ overflow: `hidden scroll`, paddingRight: `0px` }}>

//                             <div className="mfom-item red">
//                                 <div className="mfom-item-label">Unblock User</div>
//                             </div>
//                             {kickUserOption}
//                             {banUserFromServerTag}
//                             <div className="mfom-bottom-div"></div>
//                         </div>
//                         <div className="upc-seper"></div>
//                     </div>

//                 </>

//             )
//             break;



//         case 0:
//             // add friend, block friend, message

//             EditOptions = (
//                 <>



//                     <div className="upc-body-friend-options-wrapper">
//                         <div className='upc-body-friend-options-scroller global-scroll-thin-raw-attributes global-scroll-faded-raw-attributes global-scroller-base' style={{ overflow: `hidden scroll`, paddingRight: `0px` }}>

//                             <div className="mfom-item" >
//                                 <div className="mfom-item-label">Message</div>
//                             </div>
//                             <div className="mfom-item green">
//                                 <div className="mfom-item-label">Send Friend Request</div>
//                             </div>

//                             <div className="mfom-item red" >
//                                 <div className="mfom-item-label">Block User</div>
//                             </div>
//                             {kickUserOption}
//                             {banUserFromServerTag}
//                             <div className="mfom-bottom-div"></div>
//                         </div>
//                         <div className="upc-seper"></div>
//                     </div>


//                 </>

//             )
//             break;

//         case 1:
//             //message, cancel request

//             EditOptions = (
//                 <>


//                     <div className="upc-body-friend-options-wrapper">
//                         <div className='upc-body-friend-options-scroller global-scroll-thin-raw-attributes global-scroll-faded-raw-attributes global-scroller-base' style={{ overflow: `hidden scroll`, paddingRight: `0px` }}>

//                             <div className="mfom-item">
//                                 <div className="mfom-item-label">Message</div>
//                             </div>
//                             <div className="mfom-item red">
//                                 <div className="mfom-item-label">Cancel Friend Request</div>
//                             </div>
//                             {kickUserOption}
//                             {banUserFromServerTag}
//                             <div className="mfom-bottom-div"></div>
//                         </div>
//                         <div className="upc-seper"></div>
//                     </div>


//                 </>

//             )
//             break;

//         case 2:
//             // messgae, approve, deny request
//             EditOptions = (
//                 <>


//                     <div className="upc-body-friend-options-wrapper">
//                         <div className='upc-body-friend-options-scroller global-scroll-thin-raw-attributes global-scroll-faded-raw-attributes global-scroller-base' style={{ overflow: `hidden scroll`, paddingRight: `0px` }}>

//                             <div className="mfom-item">
//                                 <div className="mfom-item-label">Message</div>
//                             </div>
//                             <div className="mfom-item green">
//                                 <div className="mfom-item-label">Accept Friend Request</div>
//                             </div>
//                             <div className="mfom-item red">
//                                 <div className="mfom-item-label">Ignore Friend Request</div>
//                             </div>
//                             {kickUserOption}
//                             {banUserFromServerTag}
//                             <div className="mfom-bottom-div"></div>
//                         </div>
//                         <div className="upc-seper"></div>
//                     </div>


//                 </>

//             )
//             break;
//         case 3:
//             //messgae, delete friend
//             EditOptions = (
//                 <>


//                     <div className="upc-body-friend-options-wrapper">
//                         <div className='upc-body-friend-options-scroller global-scroll-thin-raw-attributes global-scroll-faded-raw-attributes global-scroller-base' style={{ overflow: `hidden scroll`, paddingRight: `0px` }}>

//                             <div className="mfom-item">
//                                 <div className="mfom-item-label">Message</div>
//                             </div>
//                             <div className="mfom-item red">
//                                 <div className="mfom-item-label">Remove Friend</div>
//                             </div>
//                             {kickUserOption}
//                             {banUserFromServerTag}
//                             <div className="mfom-bottom-div"></div>
//                         </div>
//                         <div className="upc-seper"></div>
//                     </div>


//                 </>

//             )
//             break;


//         default:

//             EditOptions = ("");

//     }



//     let random_banner = Math.random();


//     let upcColorPallete = 'user-mini-upc theme-dark userProfileOuterTheme' +
//         ((defaultcolorPalleteRef.current > 0.50) ? ' ' + 'user-upc-profile-colors-0' : ' ' + `user-upc-profile-colors-${props.currentUser.color_tag}`) +
//         ((colorPalleteAltRef.current > 0.90) ? ' ' + 'alt' : '');
//     console.log(`upc color pallete is currentUser : `);
//     console.log(upcColorPallete);

//     return (
//         <div className='server-user-options-upc-layer-container' onClick={e => e.stopPropagation()}>
//             <div className='upc-popout'>
//                 <div className='upc-inner-wrapper'>
//                     <div className={upcColorPallete}
//                     >
//                         <div className={`user-mini-upc-inner ${random_banner < 0.50 ? `userProfileThemeWithOutBanner` : `userProfileThemeWithBanner`}`}>
//                             {
//                                 random_banner < 0.50 ? (

//                                     <svg className="upc-bannerSVGwrapper" viewBox="0 0 340 90" >
//                                         <mask id="uid_1414">
//                                             <rect fill="white" x="0" y="0" width="100%" height="100%"></rect>
//                                             <circle fill="black" cx="58" cy="82" r="46"></circle>
//                                         </mask>
//                                         <foreignObject x="0" y="0" width="100%" height="100%" overflow="visible" mask="url(#uid_1414)">
//                                             <div className={`upc-banner ${props.currentUser.banner === undefined ? `color-${props.currentUser.color_tag}` : ``}`}
//                                                 style={{ backgroundImage: `${props.currentUser.banner === undefined ? `none` : `url(${props.currentUser.banner})`}` }}></div>
//                                         </foreignObject>
//                                     </svg>


//                                 ) : (
//                                     <svg className="upc-bannerSVGwrapper-pro" viewBox="0 0 340 120">
//                                         <mask id="uid_3244">
//                                             <rect fill="white" x="0" y="0" width="100%" height="100%"></rect>
//                                             <circle fill="black" cx="58" cy="112" r="46"></circle>
//                                         </mask>
//                                         <foreignObject x="0" y="0" width="100%" height="100%" overflow="visible" mask="url(#uid_3244)">
//                                             <div className={`upc-banner-pro ${props.currentUser.banner === undefined ? `color-${props.currentUser.color_tag}` : ``}`}
//                                                 style={{ backgroundImage: `${props.currentUser.banner === undefined ? `none` : `url(${props.currentUser.banner})`}`, backgroundColor: `${props.currentUser.banner === undefined ? `` : `rgb(21, 20, 20)`}` }}>
//                                                 <div className='upc-pencil-container' data-tip data-for="edit-user-profile">
//                                                     <svg aria-label="Edit Profile" className="upc-pencil-icon" aria-hidden="false" role="img" width="18" height="18" viewBox="0 0 24 24">
//                                                         <path fillRule="evenodd" clipRule="evenodd" d="M19.2929 9.8299L19.9409 9.18278C21.353 7.77064 21.353 5.47197 19.9409 4.05892C18.5287 
//                                                             2.64678 16.2292 2.64678 14.817 4.05892L14.1699 4.70694L19.2929 9.8299ZM12.8962 5.97688L5.18469 13.6906L10.3085 18.813L18.0201 11.0992L12.8962
//                                                             5.97688ZM4.11851 20.9704L8.75906 19.8112L4.18692 15.239L3.02678 19.8796C2.95028 20.1856 3.04028 20.5105 3.26349 20.7337C3.48669 20.9569
//                                                             3.8116 21.046 4.11851 20.9704Z" fill="currentColor">
//                                                         </path>
//                                                     </svg>
//                                                 </div>
//                                             </div>
//                                         </foreignObject>
//                                     </svg>
//                                 )
//                             }




//                             {/* <div className='upc-pencil-container' data-tip data-for="edit-user-profile">
//                                 <svg aria-label="Edit Profile" className="upc-pencil-icon" aria-hidden="false" role="img" width="18" height="18" viewBox="0 0 24 24">
//                                     <path fillRule="evenodd" clipRule="evenodd" d="M19.2929 9.8299L19.9409 9.18278C21.353 7.77064 21.353 5.47197 19.9409 4.05892C18.5287 
//                                                     2.64678 16.2292 2.64678 14.817 4.05892L14.1699 4.70694L19.2929 9.8299ZM12.8962 5.97688L5.18469 13.6906L10.3085 18.813L18.0201 11.0992L12.8962
//                                                     5.97688ZM4.11851 20.9704L8.75906 19.8112L4.18692 15.239L3.02678 19.8796C2.95028 20.1856 3.04028 20.5105 3.26349 20.7337C3.48669 20.9569
//                                                     3.8116 21.046 4.11851 20.9704Z" fill="currentColor">
//                                     </path>
//                                 </svg>
//                             </div> */}


//                             <div className='upc-strife-nitro-wrapper' title="Customize your own profile theme, banner, animated avatar, and more with $TR!F3 N!TR0!">
//                                 <div className="upc-strife-nitro-badge">
//                                     <svg className="upc-strife-nitro-icon" aria-hidden="true" role="img" width="16" height="16" viewBox="0 0 24 24">
//                                         <path fill="currentColor" d="M2.98966977,9.35789159 C2.98966977,9.77582472 2.63442946,10.1240466 2.20807287,10.1240466
//                                              L1.78171628,10.1240466 C1.35535969,10.1240466 0.999948837,9.77582472 0.999948837,9.35789159 C0.999948837,8.93995846 
//                                              1.35535969,8.59173658 1.78171628,8.59173658 L2.20807287,8.59173658 C2.63442946,8.59173658 2.98966977,8.93995846 
//                                              2.98966977,9.35789159 Z M22.2467643,9.14892503 C24.0942527,12.9800344 22.3888264,17.5772989 18.3384388,19.3882867
//                                              C14.4302837,21.1297305 9.74036124,19.457998 7.9638186,15.6268886 C7.60857829,14.8607335 7.3954,14.0248673 
//                                              7.32428372,13.189001 L5.76091938,13.189001 C5.33456279,13.189001 4.97932248,12.840612 4.97932248,12.4226788 
//                                              C4.97932248,12.0047457 5.33456279,11.6565238 5.76091938,11.6565238 L8.03493488,11.6565238 C8.46129147,11.6565238 8.81653178,
//                                              11.3083019 8.81653178,10.8903688 C8.81653178,10.4724357 8.46129147,10.1240466 8.03493488,10.1240466 L4.41090388,10.1240466
//                                              C3.98454729,10.1240466 3.62913643,9.77582472 3.62913643,9.35789159 C3.62913643,8.93995846 3.98454729,8.59173658 4.41090388,
//                                              8.59173658 L9.45606667,8.59173658 C9.88242326,8.59173658 10.2376636,8.24334752 10.2376636,7.82541439 C10.2376636,7.40748126 
//                                              9.88242326,7.05925937 9.45606667,7.05925937 L7.3954,7.05925937 C6.75586512,7.05925937 6.18727597,6.57161499 6.18727597,
//                                              5.87517123 C6.18727597,5.24827153 6.68474884,4.69091591 7.3954,4.69091591 L15.4250589,4.69091591 C18.267493,4.8303384 
//                                              20.9676946,6.43235968 22.2467643,9.14892503 Z M13.2662961,8.38056332 C11.0193969,9.3919615 10.0341721,11.9973566 11.065955,
//                                              14.1998642 C12.097738,16.4023718 14.755645,17.3681317 17.0025442,16.3567335 C19.249614,15.3453354 20.2346682,12.7399402 
//                                              19.2028853,10.5374326 C18.1711023,8.33492503 15.5131953,7.36916515 13.2662961,8.38056332 Z M16.8462589,9.84548582 
//                                              L18.2673907,12.2138293 C18.338507,12.3530846 18.338507,12.4227958 18.2673907,12.5620512 L16.8462589,14.9303946 C16.7751426,
//                                              15.0696499 16.6330806,15.0696499 16.5619643,15.0696499 L13.7906465,15.0696499 C13.6485845,15.0696499 13.5774682,14.9999387 
//                                              13.5065225,14.9303946 L12.0852202,12.5620512 C12.0142744,12.4227958 12.0142744,12.3530846 12.0852202,12.2138293 L13.5065225,
//                                              9.84548582 C13.5774682,9.7062305 13.7197008,9.7062305 13.7906465,9.7062305 L16.5619643,9.7062305 C16.7041969,9.63651925 
//                                              16.7751426,9.7062305 16.8462589,9.84548582 Z">
//                                         </path>
//                                     </svg>
//                                 </div>
//                             </div>







//                             {
//                                 random_banner < 0.50 ? (
//                                     <div className='upc-pfp-icon-wrapper' role='button'>
//                                         <div className='upc-pfp-hover-target'>
//                                             <div className='upc-avatar-wrapper' role='img'>
//                                                 <svg width="92" height="92" viewBox="0 0 92 92" className="upc-avatar-svg-mask" aria-hidden="true">
//                                                     <foreignObject x="0" y="0" width="80" height="80" mask="url(#svg-mask-avatar-status-round-80)">
//                                                         <div className="upc-avatar-stack">
//                                                             {
//                                                                 props.currentUser.photo === undefined ? (
//                                                                     <img className={`upc-avatar-pfp icon-colors-${props.currentUser.color_tag}`} alt=" " aria-hidden="true" />
//                                                                 ) : (
//                                                                     <img className="upc-avatar-pfp" src={props.currentUser.photo} alt=" " aria-hidden="true" />
//                                                                 )
//                                                             }
//                                                         </div>
//                                                     </foreignObject>
//                                                     <circle fill="black" r="14" cx="68" cy="68" style={{ opacity: `0.45` }}></circle>
//                                                     <rect width="16" height="16" x="60" y="60" fill={returnUserBadgeFillColor(props.currentUser.online)}
//                                                         mask={returnUserOnlineActivityStatusBadgeMaskIMG(props.currentUser.online)} className="upc-avatar-pointer-events"></rect>
//                                                 </svg>
//                                             </div>
//                                         </div>
//                                         <svg width="80" height="80" className="upc-avatar-hint" viewBox="0 0 80 80">
//                                             <foreignObject x="0" y="0" width="80" height="80" overflow="visible" mask="url(#svg-mask-avatar-status-round-80)">
//                                                 <div className="upc-avatar-hint-inner">View Profile</div>
//                                             </foreignObject>
//                                         </svg>
//                                     </div>
//                                 ) :
//                                     (

//                                         <div className='upc-pfp-icon-wrapper-pro' role='button'>
//                                             <div className='upc-pfp-hover-target'>
//                                                 <div className='upc-avatar-wrapper' role='img'>
//                                                     <svg width="92" height="92" viewBox="0 0 92 92" className="upc-avatar-svg-mask" aria-hidden="true">
//                                                         <foreignObject x="0" y="0" width="80" height="80" mask="url(#svg-mask-avatar-status-round-80)">
//                                                             <div className="upc-avatar-stack">
//                                                                 {
//                                                                     props.currentUser.photo === undefined ? (
//                                                                         <img className={`upc-avatar-pfp icon-colors-${props.currentUser.color_tag}`} alt=" " aria-hidden="true" />
//                                                                     ) : (
//                                                                         <img className="upc-avatar-pfp" src={props.currentUser.photo} alt=" " aria-hidden="true" />
//                                                                     )
//                                                                 }
//                                                             </div>
//                                                         </foreignObject>
//                                                         <circle fill="black" r="14" cx="68" cy="68" style={{ opacity: `0.45` }}></circle>
//                                                         <rect width="16" height="16" x="60" y="60" fill={returnUserBadgeFillColor(props.currentUser.online)}
//                                                             mask={returnUserOnlineActivityStatusBadgeMaskIMG(props.currentUser.online)} className="upc-avatar-pointer-events"></rect>
//                                                     </svg>
//                                                 </div>
//                                             </div>
//                                             <svg width="80" height="80" className="upc-avatar-hint" viewBox="0 0 80 80">
//                                                 <foreignObject x="0" y="0" width="80" height="80" overflow="visible" mask="url(#svg-mask-avatar-status-round-80)">
//                                                     <div className="upc-avatar-hint-inner">View Profile</div>
//                                                 </foreignObject>
//                                             </svg>
//                                         </div>


//                                     )
//                             }




//                             <div className='upc-profile-badges-container' role='group'>
//                                 <a className='usm-user-strife-tag-badge-anchor' role="button" data-tip data-for="strife-tag-badge">
//                                     <img className='usm-user-strife-tag-badge' alt=" " />
//                                 </a>
//                             </div>

//                             <div className='upc-popout-overlay-background upc-overlay-background' >
//                                 <span></span>
//                                 <div className='upc-section-content upc-username-section' >
//                                     <div>
//                                         <div className='upc-user-text'>
//                                             <h1 className='upc-user-display-name'>{props.currentUser.username}</h1>
//                                             <div className='upc-header-username-tag-wrapper'>
//                                                 <span className='upc-username'>{props.currentUser.username}</span>
//                                                 <span className='upc-strife-tag'>#{props.currentUser.strife_id_tag}</span>
//                                                 {if_Bot_tag}
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div>
//                                 <div className='upc-content-divider'></div>
//                                 <div className='upc-content-section-scroller global-scroll-thin-raw-attributes global-scroller-base' style={{ overflow: `hidden scroll`, paddingRight: `4px` }}>



//                                     <div className='upc-section-content'>
//                                         <h2 className='upc-about-me-text'>About Me</h2>
//                                         <div className='upc-about-me-markup-container'>
//                                             <div className='upc-about-me-markup-text-wrapper'>
//                                                 <span>Loading ... ... ... ... </span>
//                                             </div>
//                                         </div>
//                                     </div>



//                                     <div className='upc-section-content'>
//                                         <h2 className='upc-strife-member-since-header'>$TR!F3 Member Since</h2>
//                                         <div className='upc-strife-member-since-container'>

//                                             <svg className="upc-dis-icon" aria-hidden="false" role="img" width="28" height="20" viewBox="0 0 28 20" data-tip data-for="strife-logo">
//                                                 <path fill="currentColor" d="M23.0212 1.67671C21.3107 0.879656 19.5079 0.318797 17.6584 0C17.4062 0.461742 17.1749 0.934541 16.9708
//                                                  1.4184C15.003 1.12145 12.9974 1.12145 11.0283 1.4184C10.819 0.934541 10.589 0.461744 10.3368 0.00546311C8.48074 0.324393 6.67795 
//                                                  0.885118 4.96746 1.68231C1.56727 6.77853 0.649666 11.7538 1.11108 16.652C3.10102 18.1418 5.3262 19.2743 7.69177 20C8.22338 19.2743 
//                                                  8.69519 18.4993 9.09812 17.691C8.32996 17.3997 7.58522 17.0424 6.87684 16.6135C7.06531 16.4762 7.24726 16.3387 7.42403 16.1847C11.5911
//                                                  18.1749 16.408 18.1749 20.5763 16.1847C20.7531 16.3332 20.9351 16.4762 21.1171 16.6135C20.41 17.0369 19.6639 17.3997 18.897 17.691C19.3052
//                                                  18.4993 19.7718 19.2689 20.3021 19.9945C22.6677 19.2689 24.8929 18.1364 26.8828 16.6466H26.8893C27.43 10.9731 25.9665 6.04728 23.0212
//                                                  1.67671ZM9.68041 13.6383C8.39754 13.6383 7.34085 12.4453 7.34085 10.994C7.34085 9.54272 8.37155 8.34973 9.68041 8.34973C10.9893 8.34973
//                                                  12.0395 9.54272 12.0187 10.994C12.0187 12.4453 10.9828 13.6383 9.68041 13.6383ZM18.3161 13.6383C17.0332 13.6383 15.9765 12.4453 15.9765
//                                                  10.994C15.9765 9.54272 17.0124 8.34973 18.3161 8.34973C19.6184 8.34973 20.6751 9.54272 20.6543 10.994C20.6543 12.4453 19.6184 13.6383 18.3161
//                                                  13.6383Z">
//                                                 </path>
//                                             </svg>
//                                             <div className='upc-strife-member-since-time'>Apr 21, 2023</div>

//                                             <div className='upc-member-since-divider'></div>

//                                             <div className='upc-member-since-server-icon-none' style={{ fontSize: `${generateFontSize("Hello World")}px` }} data-tip data-for="upc-server-name">
//                                                 <div className='upc-server-acyro'>{splitServerName("Hello World")}</div>
//                                             </div>
//                                             <div className='upc-strife-member-since-time'>Apr 21, 2023</div>

//                                             <div className='upc-member-since-divider'></div>
//                                             <div className='upc-member-since-server-icon'
//                                                 style={{ backgroundImage: `${props.currentUser.banner === undefined ? `none` : `url(${props.currentUser.banner})`}` }} data-tip data-for="upc-server-name-icon">
//                                             </div>
//                                             <div className='upc-strife-member-since-time'>Apr 21, 2023</div>

//                                         </div>
//                                     </div>
//                                     <div className='upc-section-content'>

//                                         <h2 className='upc-roles-text'>Roles</h2>
//                                         <div className='upc-server-roles-root'>
//                                             <div className='upc-role-obj upc-role-pill upc-role-pill-border'>
//                                                 <div className="upc-role-remove-button">
//                                                     <span className="upc-role-circle" style={{ backgroundColor: `var(--gold-raw)` }}></span>
//                                                 </div>
//                                                 <div className='upc-role-name-text-wrapper'>
//                                                     <div className='upc-role-name-text'>server owner</div>
//                                                 </div>
//                                             </div>
//                                             <div className='upc-role-obj upc-role-pill upc-role-pill-border'>
//                                                 <div className="upc-role-remove-button">
//                                                     <span className="upc-role-circle" style={{ backgroundColor: `var(--blue-430)` }}></span>
//                                                 </div>
//                                                 <div className='upc-role-name-text-wrapper'>
//                                                     <div className='upc-role-name-text'>server owner</div>
//                                                 </div>
//                                             </div>

//                                             <button className='upc-add-roles-button upc-role-obj upc-role-pill upc-role-pill-border' type="button">
//                                                 <svg className="upc-add-roles-button-icon" aria-hidden="true" role="img" width="24" height="24" viewBox="0 0 24 24">
//                                                     <path fill="currentColor" d="M20 11.1111H12.8889V4H11.1111V11.1111H4V12.8889H11.1111V20H12.8889V12.8889H20V11.1111Z"></path>
//                                                 </svg>
//                                             </button>


//                                         </div>

//                                     </div>
//                                     <div className='upc-section-content'>
//                                         <h2 className='upc-note-title'>Note</h2>
//                                         <div className='upc-note-ta-container'>
//                                             <textarea className='upc-note-ta-container-text-area global-scrollbar-ghost-hairline global-scrollbar-no-border'
//                                                 maxLength={256} autoCorrect='off' autoComplete='off' value={note}
//                                                 onChange={(e) => setNote(e.currentTarget.value)}
//                                                 spellCheck={false} style={{ height: `36px` }} placeholder='Click to add a note'
//                                                 name="" id="" cols="30" rows="10"></textarea>
//                                         </div>
//                                     </div>

//                                     <div className='upc-section-content'>
//                                         <h2 className='upc-note-title'>Member Options</h2>
//                                         {EditOptions}

//                                     </div>
//                                     <div className='upc-message-input-section'>
//                                         <div className='upc-input-wrapper upc-message-at-input-container'>
//                                             <input className="upc-input" type="text" maxLength={999} spellCheck={false} ref={dmMessageRef}
//                                                 autoFocus={false} autoCorrect='off' autoComplete='off' value={dmMessageText}
//                                                 onChange={(e) => setDmMessageText(e.currentTarget.value)}
//                                                 placeholder={`Message @${props.currentUser.username}`} />
//                                         </div>
//                                     </div>
//                                     <div className='upc-section-content-sep'></div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             <ReactTooltip className="message-tool-tip" textColor="#B9BBBE"
//                 backgroundColor="#191919" id="strife-tag-badge" place="top" effect="solid">
//                 Originally known as {props.currentUser.username}#{props.currentUser.strife_id_tag}
//             </ReactTooltip>
//             <ReactTooltip className="message-tool-tip" textColor="#B9BBBE"
//                 backgroundColor="#191919" id="edit-user-profile" place="top" effect="solid">
//                 Edit Profile
//             </ReactTooltip>
//             <ReactTooltip className="message-tool-tip" textColor="#B9BBBE"
//                 backgroundColor="#191919" id="verifed-bot" place="top" effect="solid">
//                 Verified $TR!F3 B0T
//             </ReactTooltip>
//             <ReactTooltip className="message-tool-tip" textColor="#B9BBBE"
//                 backgroundColor="#191919" id="strife-logo" place="top" effect="solid">
//                 $TR!F3
//             </ReactTooltip>
//             <ReactTooltip className="message-tool-tip" textColor="#B9BBBE"
//                 backgroundColor="#191919" id="upc-server-name" place="top" effect="solid">
//                 Hello World
//             </ReactTooltip>
//             <ReactTooltip className="message-tool-tip" textColor="#B9BBBE"
//                 backgroundColor="#191919" id="upc-server-name-icon" place="top" effect="solid">
//                 Hello World icon
//             </ReactTooltip>
//         </div>
//     )






// }

// export default TestPage8;