// import React from "react";
// import { useState, useEffect, useRef } from "react";
// import DeleteServerModalContainer from "../delete_server_modal/delete_server_modal_container";
// import ConfirmLogoutModalContainer from "../../users/logout_modal/logout_modal_container";
// import ServerAvatarModalContainer from "../server_avatar_modal/server_avatar_modal_container";
// import Select from '@mui/material/Select';
// import { styled } from "@mui/material/styles";
// import SvgIcon from "@mui/material/SvgIcon";
// import MenuItem from '@mui/material/MenuItem';
// import { Tooltip } from "react-tooltip";
// import REACT_PORTAL from "../../../utils/ReactPortal_api_util";
// import { appPullerReleaseAnimation } from "../../../utils/appPullerAnimation_api_util";

// const StrifeToggleSwitch = (props = {
//     labelTagContents: String(),
//     checkedState: Boolean(),
//     setCheckedState: Function(),
//     customIndex: Number(),
//     name: String()
// }) => {

//     const handleThisAnimationsMap = (customIndex, checkedState) => {

//         let sliderBackGround = document.getElementById(`stsslidecontrol-${customIndex}`);
//         let firstRect = document.getElementById(`switchrect-${customIndex}`);
//         let w = document.getElementById(`slider32CRPX4-${customIndex}`);
//         let x = w.lastElementChild;

//         if (checkedState === false) {
//             firstRect.setAttribute('height', '18');
//             firstRect.setAttribute('width', '28');
//             firstRect.setAttribute('x', '0');
//             firstRect.setAttribute('y', '1');
//             w.style.left = '12px';

//             x.firstElementChild.setAttribute('d', "M6.56666 11.0013L6.56666 8.96683L13.5667 8.96683L13.5667 11.0013L6.56666 11.0013Z");
//             x.lastElementChild.setAttribute('d', "M13.5582 8.96683L13.5582 11.0013L6.56192 11.0013L6.56192 8.96683L13.5582 8.96683Z");

//             setTimeout(() => {
//                 // x.firstElementChild.style.transition = "300ms ease-in-out";
//                 // x.lastElementChild.style.transition = "300ms ease-in-out";
//                 x.firstElementChild.setAttribute('fill', "rgba(35, 165, 90, 1)");
//                 x.lastElementChild.setAttribute('fill', "rgba(35, 165, 90, 1)");
//                 sliderBackGround.style.backgroundColor = "rgba(100, 142, 126,1)";

//             }, 90)


//             setTimeout(() => {
//                 firstRect.setAttribute('height', '20');
//                 firstRect.setAttribute('width', '20');
//                 firstRect.setAttribute('x', '4');
//                 firstRect.setAttribute('y', '0');
//                 x.firstElementChild.setAttribute('d', "M7.89561 14.8538L6.30462 13.2629L14.3099 5.25755L15.9009 6.84854L7.89561 14.8538Z");
//                 x.firstElementChild.setAttribute('fill', "rgba(35, 165, 90, 1)");
//                 x.lastElementChild.setAttribute('d', "M4.08643 11.0903L5.67742 9.49929L9.4485 13.2704L7.85751 14.8614L4.08643 11.0903Z");
//                 x.lastElementChild.setAttribute('fill', "rgba(35, 165, 90, 1)");
//                 sliderBackGround.style.backgroundColor = "rgb(35, 165, 90)";

//             }, 250)


//         }
//         else if (checkedState === true) {
//             w.style.left = '-3px';
//             firstRect.setAttribute('height', '18');
//             firstRect.setAttribute('width', '28');
//             firstRect.setAttribute('x', '0');
//             firstRect.setAttribute('y', '1');
//             x.firstElementChild.setAttribute('d', "M6.56666 11.0013L6.56666 8.96683L13.5667 8.96683L13.5667 11.0013L6.56666 11.0013Z");
//             x.lastElementChild.setAttribute('d', "M13.5582 8.96683L13.5582 11.0013L6.56192 11.0013L6.56192 8.96683L13.5582 8.96683Z");
//             setTimeout(() => {
//                 // x.firstElementChild.style.transition = "300ms ease-in-out";
//                 // x.lastElementChild.style.transition = "300ms ease-in-out";
//                 x.firstElementChild.setAttribute('fill', "rgba(128, 132, 142, 1)");
//                 x.lastElementChild.setAttribute('fill', "rgba(128, 132, 142, 1)");
//                 sliderBackGround.style.backgroundColor = "rgba(100, 142, 126,1)";
//             }, 90)
//             setTimeout(() => {
//                 firstRect.setAttribute('height', '20');
//                 firstRect.setAttribute('width', '20');
//                 firstRect.setAttribute('x', '4');
//                 firstRect.setAttribute('y', '0');
//                 x.firstElementChild.setAttribute('d', "M5.13231 6.72963L6.7233 5.13864L14.855 13.2704L13.264 14.8614L5.13231 6.72963Z");
//                 x.firstElementChild.setAttribute('fill', "rgba(128, 132, 142, 1)");
//                 x.lastElementChild.setAttribute('d', "M13.2704 5.13864L14.8614 6.72963L6.72963 14.8614L5.13864 13.2704L13.2704 5.13864Z");
//                 x.lastElementChild.setAttribute('fill', "rgba(128, 132, 142, 1)");
//                 sliderBackGround.style.backgroundColor = "rgba(128, 132, 142, 1)";
//             }, 250)
//         }

//     }



//     let pathRef = useRef(props.checkedState);
//     let xMarkPaths = [
//         "M5.13231 6.72963L6.7233 5.13864L14.855 13.2704L13.264 14.8614L5.13231 6.72963Z",
//         "M13.2704 5.13864L14.8614 6.72963L6.72963 14.8614L5.13864 13.2704L13.2704 5.13864Z"
//     ]
//     let checkMarkPaths = [
//         "M7.89561 14.8538L6.30462 13.2629L14.3099 5.25755L15.9009 6.84854L7.89561 14.8538Z",
//         "M4.08643 11.0903L5.67742 9.49929L9.4485 13.2704L7.85751 14.8614L4.08643 11.0903Z"
//     ]
//     let startingColor = pathRef.current === false ? "rgba(128, 132, 142, 1)" : "rgb(35, 165, 90)";
//     let startingPaths = pathRef.current === false ? xMarkPaths : checkMarkPaths;

//     return (
//         <div className="sts-label-row">
//             <label className="sts-label" htmlFor={`:r${props.customIndex}:`}>{props.labelTagContents}</label>
//             <div className="sts-slide-control-wrapper">
//                 <div id={`stsslidecontrol-${props.customIndex}`} className="sts-slide-control"
//                     style={{ backgroundColor: `${props.checkedState === false ? `rgba(128, 132, 142, 1)` : `rgb(35, 165, 90)`}` }}
//                 >
//                     <svg id={`slider32CRPX4-${props.customIndex}`} className="slider-32CRPX4" viewBox="0 0 28 20" preserveAspectRatio="xMinYMid meet"
//                         style={{ left: `${props.checkedState === false ? `${-3}px` : `${12}px`}` }}>
//                         <rect className="switchrect" id={`switchrect-${props.customIndex}`} fill="white" x="4" y="0" height="20" width="20" rx="10"></rect>
//                         <svg className="sliderInner" id={`sliderInner-${props.customIndex}`} viewBox="0 0 20 20" fill="none">
//                             <path fill={startingColor}
//                                 d={startingPaths[0]}>
//                             </path>
//                             <path fill={startingColor}
//                                 d={startingPaths[1]}>
//                             </path>
//                         </svg>
//                     </svg>
//                     <input id={`:r${props.customIndex}:`} type="checkbox" className="sts-slider" checked={props.checkedState}
//                         onChange={() => {
//                             props.setCheckedState(!props.checkedState);
//                             handleThisAnimationsMap(props.customIndex, props.checkedState);
//                         }}
//                     />
//                 </div>
//             </div>
//         </div>

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
//         width: '320px',
//         minWidth: '320px',
//         maxWidth: '320px',
//         minHeight: '42px',
//         height: '42px',
//         maxHeight: '42px',

//         '.selectRegionSvgCheckMark': {
//             display: 'none !important',
//         },

//     },
//     '.MuiSvgIcon-root': {
//         color: '#dbdee1',
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
//         padding: '8px 8px 8px 16px',

//     },


// }));


// const SelectSystemMessagesChannel = styled(Select)(({ theme }) => ({
//     fontSize: '16px',
//     lineHeight: '20px',
//     fontFamily: "gg sans",
//     fontWeight: '400',
//     color: '#dbdee1',

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
//         width: '660px',
//         minWidth: '660px',
//         maxWidth: '660px',
//         minHeight: '42px',
//         height: '42px',
//         maxHeight: '42px',

//         '.selectRegionSvgCheckMark': {
//             display: 'none !important',
//         },

//     },
//     '.MuiSvgIcon-root': {
//         color: '#dbdee1',
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
//         padding: '8px 8px 8px 16px',

//     }

// }));

// const SelectChevron = (props) => {
//     return (
//         <SvgIcon {...props} aria-hidden="true" role="img" width="24" height="24" viewBox="0 0 24 24">
//             <path fill="currentColor" d="M16.59 8.59003L12 13.17L7.41 8.59003L6 10L12 16L18 10L16.59 8.59003Z">
//             </path>
//         </SvgIcon>
//     );
// }

// const ServerSettingsModal = (props) => {
//     const [server, setServer] = useState({});
//     const [newServerName, setNewServerName] = useState("");
//     const [serverIconPhotoUrl, setServerIconPhotoUrl] = useState(props.server.server_Icon);
//     const [serverIconPhoto, setServerIconPhoto] = useState('');
//     const [removeServerIcon, setRemoveServerIcon] = useState(false)
//     // const [inactiveChannel, setInactiveChannel] = useState('No Inactive Channel');
//     const [inactiveChannel, setInactiveChannel] = useState(0);
//     const [inactiveTimeOut, setInactiveTimeOut] = useState(5);
//     // const [systemMessagesChannel, setSystemMessagesChannel] = useState('No System Messages');
//     const [systemMessagesChannel, setSystemMessagesChannel] = useState(0);
//     const [sendWelcomeMessage, setSendWelcomeMessage] = useState(true);
//     const [promptMembers, setPromptMembers] = useState(true);
//     const [sendMessageUponBoost, setSendMessageUponBoost] = useState(true);
//     const [sendHelpfulTips, setSendHelpfulTips] = useState(true);
//     const [showBoostProgressBar, setShowBoostProgressBar] = useState(false);
//     const [defaultNotificationSettings, setDefaultNotificationSettings] = useState("All Messages");
//     const [freeze, setFreeze] = useState(false);
//     const [isSubModMounted, setIsSubModMounted] = useState(false);
//     const [currentSubModal, setCurrentSubModal] = useState({
//         deleteServer: false,
//         logoutConfirm: false,
//         changeServerAvatar: false,
//         changeServerBanner: false,
//     });

//     const fileRef = useRef(null);

//     useEffect(() => {
//         props.fetchServer(props.serverId);
//         setServer(props.server);
//         setNewServerName(props.server.server_name);
//         setServerIconPhotoUrl(props.server.server_Icon);
//     }, []);


//     useEffect(() => {

//         // if(!props.server?.id){
//         //     props.fetchServer();
//         //     props.fetchChannel();
//         // }
//         // props.fetchServer(props.serverId);
//         // setNewServerName(props.server.server_name);
//         // setServerIconPhotoUrl(props.server.server_Icon);

//         if (isSubModMounted === true) {
//             window.removeEventListener('keyup', overrideCloseModal, false);
//         }
//         else if (isSubModMounted === false) {
//             window.addEventListener('keyup', overrideCloseModal, false);
//         }

//         return function cleanUp () {

//             window.removeEventListener('keyup', overrideCloseModal, false);

//             if (props.errors.length > 0) {
//                 props.removeServerErrors();
//             }
//             if (props.channelErrors.length > 0) {
//                 props.removeChannelErrors();
//             }
//             if (props.sessionErrors.length > 0) {
//                 props.removeSessionErrors();
//             }
//         }

//     }, [isSubModMounted])

//     useEffect(() => {
//         setServer(props.server);
//         setNewServerName(props.server.server_name);
//         setServerIconPhotoUrl(props.server.server_Icon);
//         setRemoveServerIcon(false);
//         setServerIconPhoto('');
//         setFreeze(false);
//     }, [props.server]);


//     useEffect(() => {
//         catchChanges();
//     }, [newServerName, serverIconPhotoUrl])


//     const overrideCloseModal = (e) => {
//         const keys = {
//             27: () => {
//                 e.preventDefault();
//                 let modalToClose = document.getElementById("server-settings-modal");
//                 if (modalToClose) {
//                     modalToClose.classList.add("transition-out");
//                     appPullerReleaseAnimation();
//                     Promise.all(modalToClose.getAnimations().map((animation) => animation.finished),)
//                         .then(() => {
//                             props.closeModal();
//                             window.removeEventListener('keyup', overrideCloseModal, false);
//                         }, () => {
//                             props.closeModal();
//                             window.removeEventListener('keyup', overrideCloseModal, false);
//                         });
//                 }
//                 else {
//                     props.closeModal();
//                     window.removeEventListener('keyup', overrideCloseModal, false);
//                 }
//             },
//         };
//         if (keys[e.keyCode] && isSubModMounted === false) {
//             keys[e.keyCode]();
//         }

//     }

//     const handleCloseModal = (e) => {
//         e.preventDefault();
//         let modalToClose = document.getElementById("server-settings-modal");

//         if (freeze) {
//             $(".app-layer-main").addClass("error-shaking");
//             $(".app-layer-main").one("animationend", () => ($('.app-layer-main').removeClass("error-shaking")));
//             return;
//         }
//         else {
//             if (modalToClose) {
//                 modalToClose.classList.add("transition-out");
//                 appPullerReleaseAnimation();
//                 Promise.all(modalToClose.getAnimations().map((animation) => animation.finished),)
//                     .then(() => {
//                         props.closeModal();
//                         window.removeEventListener('keyup', overrideCloseModal, false);
//                     }, () => {
//                         props.closeModal();
//                         window.removeEventListener('keyup', overrideCloseModal, false);
//                     });
//             }
//             else {
//                 props.closeModal();
//                 window.removeEventListener('keyup', overrideCloseModal, false);
//             }
//         }
//     }



//     let checkMark = (
//         <svg className="selectRegionSvgCheckMark" aria-hidden="true" role="img" width="20" height="20" viewBox="0 0 24 24">
//             <circle r="8" cx="12" cy="12" fill="white"></circle>
//             <g fill="none" fillRule="evenodd">
//                 <path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10
//                     14.17l7.59-7.59L19 8l-9 9z">
//                 </path>
//             </g>
//         </svg>
//     );


//     let channelHashIcon = (
//         <svg width="16" height="16" viewBox="0 0 24 24" className="icon-hash-sop" aria-hidden="true" role="img">
//             <path fill="currentColor" fillRule="evenodd" clipRule="evenodd" d="M5.88657 21C5.57547 21 5.3399 20.7189 5.39427 
//                  20.4126L6.00001 17H2.59511C2.28449 17 2.04905 16.7198 2.10259 16.4138L2.27759 15.4138C2.31946 15.1746 2.52722 15 
//                  2.77011 15H6.35001L7.41001 9H4.00511C3.69449 9 3.45905 8.71977 3.51259 8.41381L3.68759 7.41381C3.72946 7.17456 3.93722 
//                  7 4.18011 7H7.76001L8.39677 3.41262C8.43914 3.17391 8.64664 3 8.88907 3H9.87344C10.1845 3 10.4201 3.28107 10.3657 
//                  3.58738L9.76001 7H15.76L16.3968 3.41262C16.4391 3.17391 16.6466 3 16.8891 3H17.8734C18.1845 3 18.4201 3.28107 18.3657 
//                  3.58738L17.76 7H21.1649C21.4755 7 21.711 7.28023 21.6574 7.58619L21.4824 8.58619C21.4406 8.82544 21.2328 9 20.9899 
//                  9H17.41L16.35 15H19.7549C20.0655 15 20.301 15.2802 20.2474 15.5862L20.0724 16.5862C20.0306 16.8254 19.8228 17 19.5799 
//                  17H16L15.3632 20.5874C15.3209 20.8261 15.1134 21 14.8709 21H13.8866C13.5755 21 13.3399 20.7189 13.3943 20.4126L14 
//                  17H8.00001L7.36325 20.5874C7.32088 20.8261 7.11337 21 6.87094 21H5.88657ZM9.41045 9L8.35045 15H14.3504L15.4104 9H9.41045Z">
//             </path>
//         </svg>
//     );

//     let channelLoudSpeakerIcon = (
//         <svg className="ssm-channelLoudSpeakerIcon" aria-hidden="true" role="img" width="16" height="16" viewBox="0 0 24 24">
//             <path fill="currentColor" fillRule="evenodd" clipRule="evenodd" d="M11.383 3.07904C11.009 2.92504 10.579 3.01004
//              10.293 3.29604L6 8.00204H3C2.45 8.00204 2 8.45304 2 9.00204V15.002C2 15.552 2.45 16.002 3 16.002H6L10.293 20.71C10.579
//               20.996 11.009 21.082 11.383 20.927C11.757 20.772 12 20.407 12 20.002V4.00204C12 3.59904 11.757 3.23204 11.383 3.07904ZM14 
//               5.00195V7.00195C16.757 7.00195 19 9.24595 19 12.002C19 14.759 16.757 17.002 14 17.002V19.002C17.86 19.002 21 15.863 21
//                12.002C21 8.14295 17.86 5.00195 14 5.00195ZM14 9.00195C15.654 9.00195 17 10.349 17 12.002C17 13.657 15.654 15.002 14 
//                15.002V13.002C14.551 13.002 15 12.553 15 12.002C15 11.451 14.551 11.002 14 11.002V9.00195Z" aria-hidden="true">
//             </path>
//         </svg>
//     );

//     let inActiveTimeOutOptions = [
//         '1 minute',
//         '5 minutes',
//         '15 minutes',
//         '30 minutes',
//         '1 hour'

//     ];
//     let inActiveTimeOutOptionsEvaluation = {
//         0: 1,
//         1: 5,
//         2: 15,
//         3: 30,
//         4: 60
//     };

//     const handleSetInactiveTimeOutOptions = (e) => {
//         setInactiveTimeOut(e.target.value);
//     }


//     const menuProps = {
//         PaperProps: {
//             sx: {
//                 "& .MuiMenuItem-root": {
//                     cursor: 'pointer',
//                     color: '#dbdee1',
//                     fontWeight: '500',
//                     fontSize: '16px',
//                     fontFamily: 'gg sans',
//                     padding: '8px 8px 8px 16px',
//                     display: 'grid',
//                     gridTemplateColumns: '1fr auto',
//                     alignItems: 'center',
//                     boxSizing: 'border-box',

//                 },

//                 "& .MuiMenuItem-root.Mui-selected": {
//                     backgroundColor: 'rgba(78, 80,88,0.6)',
//                     color: 'white',
//                 },

//                 "& .MuiMenuItem-root.Mui-selected .selectRegionSvgCheckMark": {
//                     color: 'hsl(235, 85.6%, 64.7%)',
//                 },

//                 "& .MuiMenuItem-root.Mui-selected:hover .selectRegionSvgCheckMark": {
//                     color: 'hsl(235, 85.6%, 64.7%)',
//                 },

//                 "& .MuiMenuItem-root:hover": {
//                     backgroundColor: 'rgba(78,80,88,0.3)',
//                     color: '#dbdee1',

//                 },
//                 "& .MuiMenuItem-root:focus-within": {
//                     backgroundColor: 'rgba(78,80,88,0.3)',
//                     color: '#dbdee1',
//                 },
//                 "& .MuiMenuItem-root:focus": {
//                     backgroundColor: 'rgba(78,80,88,0.3)',
//                     color: '#dbdee1',
//                 },
//                 "& .MuiMenuItem-root:active": {
//                     backgroundColor: 'rgba(78,80,88,0.3)',
//                     color: '#dbdee1',
//                 },

//                 "& .MuiMenuItem-root.Mui-selected:active, & .MuiMenuItem-root.Mui-selected:focus-within, & .MuiMenuItem-root.Mui-selected:focus, & .MuiMenuItem-root.Mui-selected:hover": {
//                     backgroundColor: 'rgba(78, 80,88,0.6)',
//                     color: 'white',
//                 },

//                 "&::-webkit-scrollbar": {
//                     width: "8px",
//                     height: "8px",
//                 },
//                 "&::-webkit-scrollbar-corner": {
//                     backgroundColor: 'transparent',
//                 },
//                 "&::-webkit-scrollbar-track": {
//                     backgroundColor: 'hsla(0, 0%, 0%, 0)',
//                     border: '2px solid hsla(0, 0%, 0%, 0)',
//                     borderColor: 'hsla(0, 0%, 0%, 0)',
//                 },
//                 "&::-webkit-scrollbar-thumb": {
//                     backgroundClip: 'padding-box',
//                     border: '2px solid transparent',
//                     borderRadius: '4px',
//                     minHeight: '40px',
//                     backgroundColor: 'hsl(225, 7.1%, 11%)',
//                 }
//             },

//             style: {
//                 backgroundColor: '#2b2d31',
//                 color: '#dbdee1',
//                 fontSize: '16px',
//                 lineHeight: '20px',
//                 fontFamily: "gg sans",
//                 fontWeight: '400',
//                 paddingRight: '0px',
//                 maxHeight: '285.455px',
//                 width: '320px',
//                 boxSizing: 'border-box',
//                 border: '1px solid rgb(30,31,34)',
//                 borderRadius: '0 0 4px 4px',

//             },
//         },
//     }
//     const menuProps2 = {
//         PaperProps: {
//             sx: {
//                 "& .MuiMenuItem-root": {
//                     cursor: 'pointer',
//                     color: '#dbdee1',
//                     fontWeight: '500',
//                     fontSize: '16px',
//                     fontFamily: 'gg sans',
//                     padding: '8px 8px 8px 16px',
//                     display: 'grid',
//                     gridTemplateColumns: '1fr auto',
//                     alignItems: 'center',
//                     boxSizing: 'border-box',

//                 },

//                 "& .MuiMenuItem-root.Mui-selected": {
//                     backgroundColor: 'rgba(78, 80,88,0.6)',
//                     color: 'white',
//                 },

//                 "& .MuiMenuItem-root.Mui-selected .selectRegionSvgCheckMark": {
//                     color: 'hsl(235, 85.6%, 64.7%)',
//                 },

//                 "& .MuiMenuItem-root.Mui-selected:hover .selectRegionSvgCheckMark": {
//                     color: 'hsl(235, 85.6%, 64.7%)',
//                 },

//                 "& .MuiMenuItem-root:hover": {
//                     backgroundColor: 'rgba(78,80,88,0.3)',
//                     color: '#dbdee1',

//                 },
//                 "& .MuiMenuItem-root:focus-within": {
//                     backgroundColor: 'rgba(78,80,88,0.3)',
//                     color: '#dbdee1',
//                 },
//                 "& .MuiMenuItem-root:focus": {
//                     backgroundColor: 'rgba(78,80,88,0.3)',
//                     color: '#dbdee1',
//                 },
//                 "& .MuiMenuItem-root:active": {
//                     backgroundColor: 'rgba(78,80,88,0.3)',
//                     color: '#dbdee1',
//                 },

//                 "& .MuiMenuItem-root.Mui-selected:active, & .MuiMenuItem-root.Mui-selected:focus-within, & .MuiMenuItem-root.Mui-selected:focus, & .MuiMenuItem-root.Mui-selected:hover": {
//                     backgroundColor: 'rgba(78, 80,88,0.6)',
//                     color: 'white',
//                 },

//                 "&::-webkit-scrollbar": {
//                     width: "8px",
//                     height: "8px",
//                 },
//                 "&::-webkit-scrollbar-corner": {
//                     backgroundColor: 'transparent',
//                 },
//                 "&::-webkit-scrollbar-track": {
//                     backgroundColor: 'hsla(0, 0%, 0%, 0)',
//                     border: '2px solid hsla(0, 0%, 0%, 0)',
//                     borderColor: 'hsla(0, 0%, 0%, 0)',
//                 },
//                 "&::-webkit-scrollbar-thumb": {
//                     backgroundClip: 'padding-box',
//                     border: '2px solid transparent',
//                     borderRadius: '4px',
//                     minHeight: '40px',
//                     backgroundColor: 'hsl(225, 7.1%, 11%)',
//                 }
//             },

//             style: {
//                 backgroundColor: '#2b2d31',
//                 color: '#dbdee1',
//                 fontSize: '16px',
//                 lineHeight: '20px',
//                 fontFamily: "gg sans",
//                 fontWeight: '400',
//                 paddingRight: '0px',
//                 maxHeight: '285.455px',
//                 width: '660px',
//                 boxSizing: 'border-box',
//                 border: '1px solid rgb(30,31,34)',
//                 borderRadius: '0 0 4px 4px',

//             },
//         },
//     }

//     const handleSetInactiveChannel = (e) => {
//         setInactiveChannel(e.target.value);
//     }

//     const handleSetSystemMessagesChannel = (e) => {
//         setSystemMessagesChannel(e.target.value);
//     }

//     const handleSetDefaultNotificationSettings = (e) => {
//         setDefaultNotificationSettings(e.target.value);
//     }

//     const handleServerIconRemoval = () => {
//         if (props.server.server_Icon) {
//             setRemoveServerIcon(true)
//         }
//         setServerIconPhotoUrl("");
//         setServerIconPhoto(null);

//         // const formData = new FormData();
//         // formData.append('server[server_Icon_Remove]', removeServerIcon);
//         // props.updateServer(props.server.id, formData).then((action) => {
//         //     let updatedServer = action.server;
//         //     App.StrifeCore.perform('_Serve_Server_Update_To_Members_Force_Refresh_', { updatedServerID: updatedServer.id })
//         //     // App.StrifeCore.perform('_Serve_Server_Update_To_Members_',{updatedServerID: updatedServer.id})

//         // })

//     }

//     const handleSnackBarSubmit = (e) => {
//         e.preventDefault();

//         console.log("snack submit")

//         let formData = new FormData();
//         if (removeServerIcon === true) {
//             console.log("snack remove img")

//             formData.append('server[server_Icon_Remove]', removeServerIcon);
//         }
//         else if (serverIconPhoto) {
//             console.log("snack upload img")

//             formData.append('server[server_Icon]', serverIconPhoto);
//         }

//         formData.append('server[server_name]', newServerName.trim());
//         props.updateServer(props.server.id, formData).then((action) => {
//             let updatedServer = action.server;
//             // App.StrifeCore.perform('_Serve_Server_Update_To_Members_',{updatedServerID: updatedServer.id})
//             App.StrifeCore.perform('_Serve_Server_Update_To_Members_Force_Refresh_', { updatedServerID: updatedServer.id })
//             setFreeze(false);
//         });
//     }


//     const handleNameChangeSubmit = (e) => {
//         e.preventDefault();
//         let subState = {
//             server_name: newServerName.trim()
//         };
//         let formData = new FormData();
//         formData.append('server[server_name]', newServerName.trim());

//         props.updateServer(props.server.id, formData).then((action) => {
//             let updatedServer = action.server;
//             // App.StrifeCore.perform('_Serve_Server_Update_To_Members_',{updatedServerID: updatedServer.id})
//             App.StrifeCore.perform('_Serve_Server_Update_To_Members_Force_Refresh_', { updatedServerID: updatedServer.id })
//             setFreeze(false);
//         });
//     }


//     const handleLogout = () => {
//         props.closeModal();
//         props.logoutUser();
//     }

//     const renderServerNameErrors = () => {

//         let serverNameErrorList = [
//             'Server owner You already have a server with that name already',
//             "Server name can't be blank",
//             'Server name is too short (minimum is 2 characters)',
//             'Server name is too long (maximum is 100 characters)'

//         ];


//         let serverNameErrorMessages = {
//             0: "You already own a Server with that name already",
//             1: "Server name can't be blank",
//             2: 'Must be between 2 and 100 in length',
//             3: "Must be between 2 and 100 in length",
//         }

//         for (let i = 0; i < serverNameErrorList.length; i++) {
//             if (props.errors.includes(serverNameErrorList[i])) {
//                 return serverNameErrorMessages[i];
//             }
//         }

//         return "";

//     }

//     const splitServerName = () => {
//         //reduce server acryo name to 5 max chars/ initials
//         // let serverAcryo = props.server.server_name.split(" ").map((parts) => parts[0]).join("");
//         let serverAcryo = newServerName.split(" ").map((parts) => parts[0]).join("");
//         return serverAcryo.length > 5 ? serverAcryo.slice(0, 5) : serverAcryo;
//     }


//     const handleSubmitServerPFP = (e) => {
//         e.preventDefault();
//         let formData = new FormData();
//         //throw in name of server regardless if we are updateing the name or not
//         formData.append('server[server_name]', newServerName.trim());
//         if (serverIconPhoto) {
//             formData.append('server[server_Icon]', serverIconPhoto);
//         }

//         props.updateServer(props.server.id, formData).then((action) => {
//             let updatedServer = action.server;
//             App.StrifeCore.perform('_Serve_Server_Update_To_Members_Force_Refresh_', { updatedServerID: updatedServer.id })
//             // App.StrifeCore.perform('_Serve_Server_Update_To_Members_',{updatedServerID: updatedServer.id})

//         });

//     }


//     const handleFileInput = (e) => {
//         // e.preventDefault();
//         const fileReader = new FileReader();
//         const file = e.currentTarget.files[0];
//         fileReader.onloadend = () => {
//             setServerIconPhotoUrl(fileReader.result);
//             setServerIconPhoto(file);
//         }

//         if (file) {
//             fileReader.readAsDataURL(file);
//         }
//         else {

//             if (props.server.server_Icon !== undefined) {
//                 setServerIconPhotoUrl(props.server.server_Icon);

//             }
//             else {
//                 setServerIconPhotoUrl('');
//             }

//             setServerIconPhoto(null);
//         }

//     }


//     const handleUploadImage = (e) => {
//         e.preventDefault();
//         if (props.server.server_Icon === undefined) {
//             console.log("server icon is undefined for props")
//             if (serverIconPhotoUrl) {
//                 console.log("sever has no pre- added photo but state added on uploading it now")
//                 handleSubmitServerPFP(e);
//             }
//             else {
//                 console.log("server icon is undefiend and sttate is undefined open modal ")

//                 openModal("changeServerAvatar");
//             }
//         }

//         else if (props.server.server_Icon !== undefined) {
//             console.log("server icon is NOT undefined! ")

//             if (serverIconPhotoUrl === "") {
//                 console.log("server icon is NOT undefined! AND STATE IS '' OPENING MODAL ")

//                 openModal("changeServerAvatar");
//             }

//             else if (serverIconPhotoUrl !== props.server.server_Icon) {
//                 console.log("server icon is NOT undefined! AND STATE IS NOT UNDEFINED IT HAS A PICTURE SUBMITTING PICTURE NOW ")

//                 handleSubmitServerPFP(e);
//             }
//             else {
//                 console.log("server icon is NOT undefined! AND STATE is the SAME OPENING MODAL ")

//                 openModal("changeServerAvatar");
//             }
//         }

//     }

//     const resetChanges = (e) => {
//         e.preventDefault();
//         if (props.errors.length > 0) {
//             props.removeServerErrors();
//         }

//         let snackBar = document.getElementById("snack-bar-slider");
//         if (snackBar) {
//             snackBar.classList.add('transition-out');
//             Promise.all(snackBar.getAnimations().map((animation) => animation.finished),)
//                 .then(() => {
//                     setFreeze(false);
//                 }, () => {
//                     setFreeze(false);
//                 });
//         }
//         setNewServerName(props.server.server_name);
//         setServerIconPhotoUrl(props.server.server_Icon);
//         setRemoveServerIcon(false);
//         setServerIconPhoto('');

//     }

//     const catchChanges = () => {
//         // snack bar appears for only serverl name and photo at the moment until other feature are
//         // fully implemented
//         const sProc = {
//             server_name: props.server.server_name,
//             server_Icon: props.server.server_Icon,
//         };
//         const regulationChange = {
//             server_name: newServerName,
//             server_Icon: serverIconPhotoUrl,
//         }

//         const keys = ['server_name', 'server_Icon',];

//         for (const key of keys) {
//             // if(removeServerIcon === true){
//             //     console.log("server_icon file is null skipping");
//             //     continue;
//             // }

//             if (regulationChange[key] !== sProc[key]) {
//                 setFreeze(true);
//                 return;
//             }
//         }
//         setFreeze(false);
//     }


//     const openModal = (field) => {
//         setCurrentSubModal({ [field]: true });
//         window.removeEventListener('keyup', overrideCloseModal, false);
//         setIsSubModMounted(true)
//     }

//     const closeForm = (field) => {
//         setCurrentSubModal({ [field]: false });
//         window.addEventListener('keyup', overrideCloseModal, false);
//         setIsSubModMounted(false)

//     }

//     const renderDeleteServerModal = () => {
//         if (currentSubModal.deleteServer === true) {
//             window.removeEventListener('keyup', overrideCloseModal, false);
//             return (
//                 <DeleteServerModalContainer serverParams={props.serverParams} server={props.server} closeSubMod={closeForm} formName={"deleteServer"} />
//             )
//         }
//     }

//     const renderLogOutModal = () => {
//         if (currentSubModal.logoutConfirm === true) {
//             window.removeEventListener('keyup', overrideCloseModal, false);
//             return (
//                 <ConfirmLogoutModalContainer closeSubMod={closeForm} formName={"logoutConfirm"} />
//             )
//         }
//     }


//     const rendeChangeServerAvatarModal = () => {
//         if (currentSubModal.changeServerAvatar === true) {
//             window.removeEventListener('keyup', overrideCloseModal, false);
//             return (
//                 <ServerAvatarModalContainer closeSubMod={closeForm} formName={"changeServerAvatar"}
//                     serverIconPhoto={serverIconPhoto} serverIconPhotoUrl={serverIconPhotoUrl}
//                     server={props.server}
//                 />
//             )
//         }
//     }

//     // tbd when patch v5 arrives
//     // const renderChangeServerBanner = () => {
//     //     if(currentSubModal.changeServerBanner === true){
//     //         window.removeEventListener('keyup', overrideCloseModal, false);
//     //         return (
//     //             <ServerAvatarModalContainer closeSubMod={closeForm} formName={"changeServerBanner"}
//     //                 serverIconPhoto={serverIconPhoto} serverIconPhotoUrl={serverIconPhotoUrl}
//     //                 server={props.server}
//     //             />
//     //         )
//     //     }
//     // }

//     const renderSnackBar = () => {
//         if (freeze === true) {
//             return (
//                 <div className="change-notice-region snack-bar-slider" id="snack-bar-slider">
//                     <div className="snack-bar-container">
//                         <div className="snack-bar-flex-container">
//                             <div className="snack-bar-shrink-container">
//                                 <div className="snack-bar-message">
//                                     Careful — you have unsaved changes!
//                                 </div>
//                             </div>
//                             <div className="snack-bar-actions">
//                                 <button className="snack-bar-reset-button" type="button" onClick={(e) => resetChanges(e)}>
//                                     <div className="global-button-contents">Reset</div>
//                                 </button>
//                                 <button className="snack-bar-save-changes-button" type="button" onClick={(e) => {
//                                     // handleNameChangeSubmit(e)
//                                     handleSnackBarSubmit(e);
//                                 }}>
//                                     <div className="shiny-button-contents">
//                                         Save Changes
//                                         <div className="shiny-button-container">
//                                             <div className="shiny-button-flex">
//                                                 <div className="shiny-button-inner"></div>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </button>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             )
//         }
//     }


//     let serverNameErrors = props.errors.length > 0 ? (
//         <div className="server-error-lite">{`${renderServerNameErrors()}`}</div>
//     ) : ("");


//     let existingServerImageIcon = serverIconPhotoUrl === undefined || serverIconPhotoUrl === '' ?
//         ('') :
//         (<img
//             className={`server-image-uploader-inner`}
//             src={serverIconPhotoUrl}
//             alt=" "
//         />)

//     return (

//         <REACT_PORTAL wrapperId={'mass-modal-container'} classNameId={'mass-modal-layer-container'} onClick={(e) => e.stopPropagation()}>
//             <div className="server-settings-wrapper" id="grab-wrapper" onClick={e => e.stopPropagation()}>
//                 {renderDeleteServerModal()}
//                 {renderLogOutModal()}
//                 {rendeChangeServerAvatarModal()}
//                 <div className="server-settings-modal" id="server-settings-modal">
//                     <div className="server-settings-sidebar-region">
//                         <div className="server-settings-sidebar-region-scroller-base global-scroll-thin-raw-attributes global-scroller-base global-scroll-faded-raw-attributes"
//                             style={{ overflow: `hidden scroll`, paddingRight: `0px` }}>
//                             <nav className="server-settings-sidebar">
//                                 <div className="server-settings-sidebar-list" role="tablist">
//                                     <div className="server-settings-sidebar-list-header-wrapper" role="button" tabIndex={-1}>
//                                         <div className="server-settings-sidebar-list-header">
//                                             {`${newServerName}`}
//                                         </div>
//                                     </div>
//                                     <div className="server-settings-sidebar-list-item selected" role="tab" tabIndex={-1}>Overview</div>
//                                     <div className="server-settings-sidebar-list-item" role="tab" >Roles</div>
//                                     <div className="server-settings-sidebar-list-item" role="tab">Emoji</div>
//                                     <div className="server-settings-sidebar-list-item" role="tab">Stickers</div>
//                                     <div className="server-settings-sidebar-list-item" role="tab">Soundboard</div>
//                                     <div className="server-settings-sidebar-list-item" role="tab">Widget</div>
//                                     <div className="server-settings-sidebar-list-item" role="tab">Server Template</div>
//                                     <div className="server-settings-sidebar-list-item" role="tab">Custom Invite Link</div>
//                                     <div className="server-settings-sidebar-list-sep"></div>
//                                     <div className="server-settings-sidebar-list-header-wrapper" role="button" tabIndex={-1}>
//                                         <div className="server-settings-sidebar-list-header">APPS</div>
//                                     </div>
//                                     <div className="server-settings-sidebar-list-item" role="tab">Integrations</div>
//                                     <div className="server-settings-sidebar-list-item" role="tab">App Directory</div>
//                                     <div className="server-settings-sidebar-list-sep"></div>
//                                     <div className="server-settings-sidebar-list-header-wrapper" role="button" tabIndex={-1}>
//                                         <div className="server-settings-sidebar-list-header">Moderation</div>
//                                     </div>
//                                     <div className="server-settings-sidebar-list-item" role="tab">Safety Setup</div>
//                                     <div className="server-settings-sidebar-list-item" role="tab">AutoMod</div>
//                                     <div className="server-settings-sidebar-list-item" role="tab">Audit Log</div>
//                                     <div className="server-settings-sidebar-list-item" role="tab">Bans</div>
//                                     <div className="server-settings-sidebar-list-sep"></div>
//                                     <div className="server-settings-sidebar-list-header-wrapper" role="button" tabIndex={-1}>
//                                         <div className="server-settings-sidebar-list-header">Community</div>
//                                     </div>
//                                     <div className="server-settings-sidebar-list-item" role="tab">Enable Community</div>
//                                     <div className="server-settings-sidebar-list-sep"></div>
//                                     <div className="server-settings-sidebar-list-header-wrapper" role="button" tabIndex={-1}>
//                                         <div className="server-settings-sidebar-list-header">Monetization</div>
//                                     </div>
//                                     <div className="server-settings-sidebar-list-item" role="tab">
//                                         <div className="server-settings-sidebar-list-item-inner">Server Subscriptions</div>
//                                     </div>
//                                     <div className="server-settings-sidebar-list-sep"></div>

//                                     <div className="server-settings-sidebar-list-item" role="tab">
//                                         <div className="server-settings-sidebar-list-item-inner-special">
//                                             Server Boost Status
//                                             <svg className="ssm-server-boost-icon" aria-hidden="true" role="img" width="24" height="24" viewBox="0 0 8 12">
//                                                 <path d="M4 0L0 4V8L4 12L8 8V4L4 0ZM7 7.59L4 10.59L1 7.59V4.41L4 1.41L7 4.41V7.59Z" fill="#ff73fa">
//                                                 </path>
//                                                 <path d="M2 4.83V7.17L4 9.17L6 7.17V4.83L4 2.83L2 4.83Z" fill="#ff73fa"></path>
//                                             </svg>
//                                         </div>
//                                     </div>
//                                     <div className="server-settings-sidebar-list-sep"></div>
//                                     <div className="server-settings-sidebar-list-header-wrapper" role="button" tabIndex={-1}>
//                                         <div className="server-settings-sidebar-list-header">User Management</div>
//                                     </div>

//                                     <div className="server-settings-sidebar-list-item" role="tab">Members</div>
//                                     <div className="server-settings-sidebar-list-item" role="tab">Invites</div>
//                                     <div className="server-settings-sidebar-list-sep"></div>

//                                     <div className="server-settings-sidebar-list-item" role="tab"
//                                         onClick={(e) => openModal("deleteServer")}
//                                     >
//                                         <div className="server-settings-sidebar-list-item-inner-special">
//                                             Delete Server
//                                             <svg className="ssm-del-server-icon" aria-hidden="true" role="img" width="16" height="16" viewBox="0 0 24 24">
//                                                 <path fill="currentColor" d="M15 3.999V2H9V3.999H3V5.999H21V3.999H15Z"></path>
//                                                 <path fill="currentColor" d="M5 6.99902V18.999C5 20.101 5.897 20.999 7 20.999H17C18.103 20.999 19 20.101 19
//                                              18.999V6.99902H5ZM11 17H9V11H11V17ZM15 17H13V11H15V17Z">
//                                                 </path>
//                                             </svg>
//                                         </div>
//                                     </div>
//                                     <div className="server-settings-sidebar-list-item" role="tab"
//                                         onClick={(e) => openModal("logoutConfirm")}
//                                     >
//                                         <div className="server-settings-sidebar-list-item-inner-special">
//                                             Log Out
//                                             <svg className="ssm-logout-icon" aria-hidden="true" role="img" width="16" height="16" viewBox="0 0 24 24">
//                                                 <path fill="currentColor" d="M18 2H7C5.897 2 5 2.898 5 4V11H12.59L10.293 8.708L11.706 7.292L16.414 11.991L11.708 16.706L10.292 15.294L12.582 
//                                                 13H5V20C5 21.103 5.897 22 7 22H18C19.103 22 20 21.103 20 20V4C20 2.898 19.103 2 18 2Z">
//                                                 </path>
//                                             </svg>
//                                         </div>
//                                     </div>
//                                     <div className="server-settings-sidebar-list-sep"></div>
//                                     <div className="ssm-version-number">
//                                         <span>Stable 210566 (fc3ede1)</span>
//                                         <br />
//                                         <span>Windows 11 64-bit</span>

//                                     </div>
//                                 </div>
//                             </nav>
//                             <div className="server-settings-sep"></div>
//                         </div>
//                     </div>
//                     <div className="server-settings-lhs-content">
//                         <div className="server-settings-lhs-content-transit-wrap">
//                             <div className="server-settings-lhs-content-scroller auto-scroll-raw-attributes global-scroller-base" style={{ overflow: `hidden scroll`, paddingRight: `0px` }}>
//                                 <div className="server-settings-lhs-inner-contents">
//                                     <div className="server-settings-pre-sec-title">
//                                         <div className="ssm-title-wrap">
//                                             <h2 className="ssm-title-header">
//                                                 Server Overview
//                                             </h2>
//                                         </div>
//                                         <div className="ssm-children">
//                                             <div className="server-op-item-flex ssm-horz" style={{ flex: '1 1 auto' }}>
//                                                 <div className="server-op-item-flex-jcc ssm-horz" style={{ flex: '1 1 50%' }}>
//                                                     <div className="server-op-item-flex-child" style={{ flex: '1 1 auto' }}>
//                                                         <div className="server-image-uploader server-avatar-image-uploader">
//                                                             <div className="server-image-uploader-icon-wrapper">
//                                                                 <div className="server-image-uploader-inner server-avatar-image-uploader-inner">
//                                                                     {existingServerImageIcon}
//                                                                     <span aria-hidden="true">
//                                                                         {
//                                                                             serverIconPhotoUrl === undefined || serverIconPhotoUrl === "" || serverIconPhotoUrl === null ? (
//                                                                                 <div className='image-uploader-acro'>
//                                                                                     {`${splitServerName()}`}
//                                                                                 </div>
//                                                                             ) : ("")
//                                                                         }
//                                                                     </span>

//                                                                     <input id="upload-server-avatar" className="server-op-pfp-input" accept=".jpg, .jpeg, .png, .gif" type="file" ref={fileRef}
//                                                                         onChange={(e) => {
//                                                                             handleFileInput(e);
//                                                                             console.log("onChange is mount false");
//                                                                             setIsSubModMounted(false);
//                                                                         }}
//                                                                         onClick={(e) => {
//                                                                             // fileRef.current.focus();
//                                                                             console.log("onClick is mount true");
//                                                                             setIsSubModMounted(true);
//                                                                         }}
//                                                                         onKeyDown={(e) => {
//                                                                             if (e.keyCode === 27) {
//                                                                                 setIsSubModMounted(false);
//                                                                                 console.log("onkeydown is mount false");
//                                                                             }
//                                                                         }}
//                                                                     />

//                                                                 </div>
//                                                                 <div className="server-op-image-uploader-hint">
//                                                                     Change Icon
//                                                                 </div>
//                                                                 <div className="server-op-image-uploader-icon"></div>
//                                                             </div>

//                                                             {
//                                                                 serverIconPhotoUrl === undefined || serverIconPhotoUrl === "" || serverIconPhotoUrl === null ? (
//                                                                     <small className={`server-op-image-uploader-fp`}>
//                                                                         Minimum Size:
//                                                                         <strong>128x128</strong>
//                                                                     </small>

//                                                                 ) : (
//                                                                     <a role={"button"} onClick={() => handleServerIconRemoval()} type="submit" className={`remove-server-icon-button`}>
//                                                                         Remove
//                                                                     </a>
//                                                                 )
//                                                             }
//                                                         </div>

//                                                     </div>

//                                                     <div className="server-op-item-flex-jcc vertical" style={{ flex: '1 1 auto', maxWidth: `180px` }}>
//                                                         <div className="server-op-icon-rec-s">
//                                                             We recommend an image of at least 512x512 for the server.
//                                                         </div>
//                                                         <button type="submit" className="server-op-pfp-upload-button" onClick={(e) => { handleUploadImage(e) }}>
//                                                             <div className="server-op-iubt">Upload Image</div>
//                                                         </button>
//                                                     </div>
//                                                 </div>
//                                                 <div className="server-op-item-flex-child ssm-margin-bottom" style={{ flex: '1 1 50%' }}>
//                                                     <h5 className="server-op-item-margin-bottom-h5">
//                                                         <label>SERVER NAME</label>
//                                                     </h5>
//                                                     <div className="server-op-name-input-wrapper">
//                                                         <input
//                                                             className="server-op-name-input"
//                                                             type="text"
//                                                             maxLength={100}
//                                                             minLength={1}
//                                                             placeholder={`${props.server.server_name}`}
//                                                             onChange={(e) => setNewServerName(e.currentTarget.value)}
//                                                             spellCheck={false}
//                                                             value={newServerName}
//                                                         />


//                                                         {/* <button type="submit" className="faint-boost-shiny-button" onClick={(e) => handleNameChangeSubmit(e)}>
//                                                             <div className="shiny-button-contents">
//                                                                 <svg className="shiny-button-icon" aria-hidden="true" role="img" width="16" height="16" viewBox="0 0 8 12">
//                                                                     <path d="M4 0L0 4V8L4 12L8 8V4L4 0ZM7 7.59L4 10.59L1 7.59V4.41L4 1.41L7 4.41V7.59Z" fill="currentColor">
//                                                                     </path>
//                                                                     <path d="M2 4.83V7.17L4 9.17L6 7.17V4.83L4 2.83L2 4.83Z" fill="currentColor">
//                                                                     </path>
//                                                                 </svg>
//                                                                 Submit Name Change
//                                                                 <div className="shiny-button-container">
//                                                                     <div className="shiny-button-flex">
//                                                                         <div className="shiny-button-inner"></div>
//                                                                     </div>
//                                                                 </div>
//                                                             </div>
//                                                         </button> */}
//                                                     </div>
//                                                     {serverNameErrors}
//                                                     <h5 className="server-op-item-margin-bottom-h5-2">Server Invite Code :{`${` `}`}{`${props.server.invite_code}`}</h5>
//                                                 </div>
//                                             </div>

//                                             <div className="server-op-divider">
//                                                 <div className="server-op-item-flex ssm-horz" style={{ flex: '1 1 auto' }}>
//                                                     <div className="server-op-item-flex-child" style={{ flex: '1 1 50%' }}>
//                                                         <h3 className="server-op-div-fjs-h5">Inactive Channel</h3>

//                                                         <SelectInActiveChannel
//                                                             value={inactiveChannel}
//                                                             onChange={handleSetInactiveChannel}
//                                                             MenuProps={menuProps}
//                                                             IconComponent={SelectChevron}
//                                                         >

//                                                             <MenuItem value={0} key={'noactivechannel'}>
//                                                                 {'No Inactive Channel'}
//                                                                 {inactiveChannel === 0 ? (checkMark) : ("")}
//                                                             </MenuItem>
//                                                             {props.channels.map((channel) => {
//                                                                 if (channel.channel_type === 2) {
//                                                                     return (
//                                                                         <MenuItem value={channel.id} key={channel.id}>
//                                                                             <div className="ssm-iac-menu-item-container">
//                                                                                 {channelLoudSpeakerIcon}
//                                                                                 <div className="ssm-iac-menu-item-title">
//                                                                                     {channel.channel_name}
//                                                                                 </div>
//                                                                                 <div className="ssm-iac-menu-item-type">
//                                                                                     {"VOICE CHANNELS"}
//                                                                                 </div>
//                                                                             </div>
//                                                                             {inactiveChannel === channel.id ? (checkMark) : ("")}
//                                                                         </MenuItem>
//                                                                     )

//                                                                 }
//                                                                 else {
//                                                                     return null;
//                                                                 }
//                                                             })}

//                                                         </SelectInActiveChannel>

//                                                     </div>
//                                                     <div className="server-op-item-flex-child" style={{ flex: '1 1 50%' }}>
//                                                         <h5 className="server-op-div-fjs-h5">Inactive Timeout</h5>

//                                                         <SelectInActiveChannel
//                                                             value={inactiveTimeOut}
//                                                             onChange={handleSetInactiveTimeOutOptions}
//                                                             MenuProps={menuProps}
//                                                             IconComponent={SelectChevron}
//                                                             disabled={inactiveChannel === 0}
//                                                             defaultValue={5}
//                                                         >
//                                                             {
//                                                                 inActiveTimeOutOptions.map((timeout, timeIdx) => {
//                                                                     return (
//                                                                         <MenuItem value={inActiveTimeOutOptionsEvaluation[timeIdx]} key={timeout}>
//                                                                             <div className="ssm-iac-menu-item-container">
//                                                                                 <div className="ssm-iac-menu-item-title">
//                                                                                     {timeout}
//                                                                                 </div>
//                                                                             </div>
//                                                                             {inactiveTimeOut === inActiveTimeOutOptionsEvaluation[timeIdx] ? (checkMark) : ("")}
//                                                                         </MenuItem>
//                                                                     )
//                                                                 })
//                                                             }
//                                                         </SelectInActiveChannel>
//                                                     </div>
//                                                 </div>
//                                                 <div className="inactive-sub-info">
//                                                     Automatically move members to this channel and mute them when they have been idle for longer than the
//                                                     inactive timeout. This does not affect browsers.
//                                                 </div>
//                                             </div>

//                                             <div className="server-op-divider">
//                                                 <h5 className="server-op-div-fjs-h5">System Messages Channel</h5>
//                                                 <SelectSystemMessagesChannel
//                                                     value={systemMessagesChannel}
//                                                     onChange={handleSetSystemMessagesChannel}
//                                                     MenuProps={menuProps2}
//                                                     IconComponent={SelectChevron}
//                                                 >
//                                                     <MenuItem value={0} key={'NSM'}>
//                                                         {'No System Messages'}
//                                                         {systemMessagesChannel === 0 ? (checkMark) : ("")}
//                                                     </MenuItem>
//                                                     {props.channels.map((channel) => {
//                                                         if (channel.channel_type === 1) {
//                                                             return (
//                                                                 <MenuItem value={channel.id} key={channel.id}>
//                                                                     <div className="ssm-iac-menu-item-container">
//                                                                         {channelHashIcon}
//                                                                         <div className="ssm-iac-menu-item-title">
//                                                                             {channel.channel_name}
//                                                                         </div>
//                                                                         <div className="ssm-iac-menu-item-type">
//                                                                             {"TEXT CHANNELS"}
//                                                                         </div>
//                                                                     </div>
//                                                                     {systemMessagesChannel === channel.id ? (checkMark) : ("")}
//                                                                 </MenuItem>
//                                                             )

//                                                         }
//                                                         else {
//                                                             return null;
//                                                         }
//                                                     })}
//                                                 </SelectSystemMessagesChannel>

//                                                 <div className="inactive-sub-info">
//                                                     This is the channel we send system event messages to. These can be turned off at any time.
//                                                 </div>

//                                                 <div className="server-op-margin-top-container">
//                                                     <StrifeToggleSwitch key={`:r${8}:`} customIndex={8} checkedState={sendWelcomeMessage}
//                                                         labelTagContents={"Send a random welcome message when someone joins this server."}
//                                                         setCheckedState={() => setSendWelcomeMessage(!sendWelcomeMessage)}
//                                                     />
//                                                 </div>
//                                                 <div className="server-op-margin-top-container">
//                                                     <StrifeToggleSwitch key={`:r${9}:`} customIndex={9} checkedState={promptMembers}
//                                                         labelTagContents={"Prompt members to reply to welcome messages with a sticker."}
//                                                         setCheckedState={() => setPromptMembers(!promptMembers)}
//                                                     />
//                                                 </div>
//                                                 <div className="server-op-margin-top-container">
//                                                     <StrifeToggleSwitch key={`:r${10}:`} customIndex={10} checkedState={sendMessageUponBoost}
//                                                         labelTagContents={"Send a message when someone boosts this server."}
//                                                         setCheckedState={() => setSendMessageUponBoost(!sendMessageUponBoost)}
//                                                     />
//                                                 </div>
//                                                 <div className="server-op-margin-top-container">
//                                                     <StrifeToggleSwitch key={`:r${11}:`} customIndex={11} checkedState={sendHelpfulTips}
//                                                         labelTagContents={"Send helpful tips for server setup."}
//                                                         setCheckedState={() => setSendHelpfulTips(!sendHelpfulTips)}
//                                                     />
//                                                 </div>
//                                             </div>
//                                             <div>
//                                                 <div className="server-op-divider">
//                                                     <h3 className="server-op-div-fjs-h5">Default Notification Settings</h3>
//                                                     <div className="inactive-sub-info-2">
//                                                         This will determine whether members who have not explicitly set their notification settings
//                                                         receive a notification for every message sent in this server or not.
//                                                     </div>
//                                                     <div className="inactive-sub-info-2">
//                                                         We highly recommend setting this to only @mentions for a Community server.
//                                                     </div>
//                                                     <div className="ssm-radio-group-container" role={"radiogroup"}>

//                                                         <div className="sop-radio-item" role={"radio"} aria-checked={`${defaultNotificationSettings === "All Messages" ? `true` : `false`}`}>
//                                                             <div className="sop-radio-item-inner" onClick={() => setDefaultNotificationSettings("All Messages")}>
//                                                                 <div className="radioIconForeground-container">

//                                                                     <svg aria-hidden="true" role="img" width="24" height="24" viewBox="0 0 24 24">
//                                                                         <path fillRule="evenodd" clipRule="evenodd" d="M12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 
//                                                                      12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM12 22C17.5228 22 22 17.5228 22 12C22 6.47715 
//                                                                          17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" fill="currentColor">
//                                                                         </path>
//                                                                         <circle cx="12" cy="12" r="5" className={`radioIconForeground ${defaultNotificationSettings === "All Messages" ? `fill` : ``}`}
//                                                                             fill="currentColor"></circle>
//                                                                     </svg>
//                                                                 </div>

//                                                                 <div className="sop-radio-info">
//                                                                     <div className="sop-text-med">All Messages</div>
//                                                                 </div>
//                                                             </div>
//                                                         </div>
//                                                         <div className="sop-radio-item" role={"radio"} aria-checked={`${defaultNotificationSettings === "Only @mentions" ? `true` : `false`}`}>

//                                                             <div className="sop-radio-item-inner" onClick={() => setDefaultNotificationSettings("Only @mentions")}>
//                                                                 <div className="radioIconForeground-container">
//                                                                     <svg aria-hidden="true" role="img" width="24" height="24" viewBox="0 0 24 24">
//                                                                         <path fillRule="evenodd" clipRule="evenodd" d="M12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 
//                                                                               12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM12 22C17.5228 22 22 17.5228 22 12C22 6.47715 
//                                                                              17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" fill="currentColor">
//                                                                         </path>
//                                                                         <circle cx="12" cy="12" r="5" className={`radioIconForeground ${defaultNotificationSettings === "Only @mentions" ? `fill` : ``}`}
//                                                                             fill="currentColor"></circle>
//                                                                     </svg>
//                                                                 </div>
//                                                                 <div className="sop-radio-info">
//                                                                     <div className="sop-text-med">
//                                                                         Only{` `}
//                                                                         <strong>@mentions</strong>
//                                                                     </div>
//                                                                 </div>
//                                                             </div>
//                                                         </div>
//                                                     </div>
//                                                 </div>
//                                             </div>
//                                             <div>
//                                                 <div className="server-op-divider">
//                                                     <div className="sop-section-title">
//                                                         <h3 className="sop-section-header">
//                                                             Display
//                                                         </h3>
//                                                     </div>
//                                                     <div className="sop-display-children">
//                                                         <div>
//                                                             <div className="server-op-divider-flex-js2 ssm-horz2" style={{ flex: '1 1 auto' }}>
//                                                                 <div className="server-op-divider-flex-horz">
//                                                                     <div className="server-op-horz-martop-container">
//                                                                         <StrifeToggleSwitch key={`:r${12}:`} customIndex={12} checkedState={showBoostProgressBar}
//                                                                             labelTagContents={"Show Boost progress bar"}
//                                                                             setCheckedState={() => setShowBoostProgressBar(!showBoostProgressBar)}
//                                                                         />
//                                                                     </div>
//                                                                     <div className="inactive-sub-info-3">
//                                                                         This progress bar will display in your channel list, attached to your server name
//                                                                         (or server banner if you have one set).
//                                                                     </div>
//                                                                 </div>
//                                                                 <div className="flex-child-boost-ex">
//                                                                     <img className="flex-child-boost-ex-img" alt=" " />
//                                                                 </div>
//                                                             </div>
//                                                         </div>

//                                                         <div className="server-op-divider">
//                                                             <div className="sbb-op-flex ssm-horz3" style={{ flex: '1 1 50%' }}>
//                                                                 <div className="sbb-flex-child" style={{ flex: '1 1 50%' }}>
//                                                                     <h4 className="faint-h5">
//                                                                         <div>Server Banner Background</div>
//                                                                         <div className="faint-server-boost-icon-super-wrapper">
//                                                                             <div className="faint-server-boost-icon-wrapper" data-tooltip-place="left" data-tooltip-id="modal-tip-s" data-tooltip-content={'Click to learn more'}>
//                                                                                 <svg className="faint-server-boost-icon" aria-hidden="true" role="img" width="24" height="24" viewBox="0 0 8 12">
//                                                                                     <path d="M4 0L0 4V8L4 12L8 8V4L4 0ZM7 7.59L4 10.59L1 7.59V4.41L4 1.41L7 4.41V7.59Z" fill="currentColor">
//                                                                                     </path>
//                                                                                     <path d="M2 4.83V7.17L4 9.17L6 7.17V4.83L4 2.83L2 4.83Z" fill="currentColor">
//                                                                                     </path>
//                                                                                 </svg>
//                                                                                 <h4 className="faint-boost-h4">
//                                                                                     LVL 2
//                                                                                 </h4>
//                                                                             </div>
//                                                                         </div>
//                                                                     </h4>
//                                                                     <div className="faint-server-invite-text1">
//                                                                         This image will display at the top of your channels list.
//                                                                     </div>
//                                                                     <div className="faint-server-invite-text2">
//                                                                         The recommended minimum size is 960x540 and recommended aspect ratio is 16:9.{" "}
//                                                                         <a className="faint-anchor" target="_blank" href="https://support.discord.com/hc/en-us/articles/360028716472">Learn more</a>.
//                                                                     </div>
//                                                                     <button type="button" className="faint-boost-shiny-button">
//                                                                         <div className="shiny-button-contents">
//                                                                             <svg className="shiny-button-icon" aria-hidden="true" role="img" width="16" height="16" viewBox="0 0 8 12">
//                                                                                 <path d="M4 0L0 4V8L4 12L8 8V4L4 0ZM7 7.59L4 10.59L1 7.59V4.41L4 1.41L7 4.41V7.59Z" fill="currentColor">
//                                                                                 </path>
//                                                                                 <path d="M2 4.83V7.17L4 9.17L6 7.17V4.83L4 2.83L2 4.83Z" fill="currentColor">
//                                                                                 </path>
//                                                                             </svg>
//                                                                             Unlock with Boosting
//                                                                             <div className="shiny-button-container">
//                                                                                 <div className="shiny-button-flex">
//                                                                                     <div className="shiny-button-inner"></div>
//                                                                                 </div>
//                                                                             </div>
//                                                                         </div>
//                                                                     </button>
//                                                                 </div>

//                                                                 <div className="sbb-flex-child" style={{ flex: '1 1 50%' }}>
//                                                                     <div className="faint-upsell">
//                                                                         <div className="faint-img-uploader disabled">
//                                                                             <div className="faint-img-upload">
//                                                                                 <div className="faint-img-acyro">
//                                                                                 </div>
//                                                                                 <div className="faint-img-icon disabled faint-img-uploader-icon">
//                                                                                     <svg aria-hidden="true" role="img" width="18" height="18" viewBox="0 0 24 24" fill="none">
//                                                                                         <path fillRule="evenodd" clipRule="evenodd" d="M13.2899 2L6 2C3.79086 2 2 3.79086 2 6V18C2 20.2091 3.79086
//                                                                                      22 6 22H18C20.2091 22 22 20.2091 22 18V10.7101C21.3663 10.8987 20.695 11 20 11C16.134 11 13 7.86599 13 
//                                                                                      4C13 3.30503 13.1013 2.63371 13.2899 2ZM8 6C9.1032 6 10 6.8952 10 8C10 9.1056 9.1032 10 8 10C6.8944 10 6
//                                                                                       9.1056 6 8C6 6.8952 6.8944 6 8 6ZM6 18L9 14L11 16L15 11L18 18H6Z" fill="rgb(128, 132, 142)">
//                                                                                         </path>
//                                                                                         <path d="M21 0V3H24V5H21V8H19V5H16V3H19V0H21Z" fill="rgb(128, 132, 142)">
//                                                                                         </path>
//                                                                                     </svg>
//                                                                                 </div>
//                                                                             </div>
//                                                                         </div>
//                                                                     </div>
//                                                                 </div>
//                                                             </div>
//                                                         </div>

//                                                         <div className="server-op-divider">
//                                                             <div className="sbb-op-flex ssm-horz3" style={{ flex: '1 1 50%' }}>
//                                                                 <div className="sbb-flex-child" style={{ flex: '1 1 50%' }}>
//                                                                     <h4 className="faint-h5">
//                                                                         <div>Server Invite Background</div>
//                                                                         <div className="faint-server-boost-icon-super-wrapper">
//                                                                             <div className="faint-server-boost-icon-wrapper" data-tooltip-place="left" data-tooltip-id="modal-tip-s" data-tooltip-content={'Click to learn more'}>
//                                                                                 <svg className="faint-server-boost-icon" aria-hidden="true" role="img" width="24" height="24" viewBox="0 0 8 12">
//                                                                                     <path d="M4 0L0 4V8L4 12L8 8V4L4 0ZM7 7.59L4 10.59L1 7.59V4.41L4 1.41L7 4.41V7.59Z" fill="currentColor">
//                                                                                     </path>
//                                                                                     <path d="M2 4.83V7.17L4 9.17L6 7.17V4.83L4 2.83L2 4.83Z" fill="currentColor">
//                                                                                     </path>
//                                                                                 </svg>
//                                                                                 <h4 className="faint-boost-h4">
//                                                                                     LVL 1
//                                                                                 </h4>
//                                                                             </div>
//                                                                         </div>
//                                                                     </h4>
//                                                                     <div className="faint-server-invite-text1">
//                                                                         This image will display in server invite embeds, invite in browser, and invite confirmation modal.
//                                                                     </div>
//                                                                     <div className="faint-server-invite-text2">
//                                                                         The recommended minimum size is 1920x1080 and recommended aspect ratio is 16:9.{" "}
//                                                                         <a className="faint-anchor" target="_blank" href="https://support.discord.com/hc/en-us/articles/4415841146391">Learn more</a>.
//                                                                     </div>
//                                                                     <button type="button" className="faint-boost-shiny-button">
//                                                                         <div className="shiny-button-contents">
//                                                                             <svg className="shiny-button-icon" aria-hidden="true" role="img" width="16" height="16" viewBox="0 0 8 12">
//                                                                                 <path d="M4 0L0 4V8L4 12L8 8V4L4 0ZM7 7.59L4 10.59L1 7.59V4.41L4 1.41L7 4.41V7.59Z" fill="currentColor">
//                                                                                 </path>
//                                                                                 <path d="M2 4.83V7.17L4 9.17L6 7.17V4.83L4 2.83L2 4.83Z" fill="currentColor">
//                                                                                 </path>
//                                                                             </svg>
//                                                                             Unlock with Boosting
//                                                                             <div className="shiny-button-container">
//                                                                                 <div className="shiny-button-flex">
//                                                                                     <div className="shiny-button-inner"></div>
//                                                                                 </div>
//                                                                             </div>
//                                                                         </div>
//                                                                     </button>
//                                                                 </div>
//                                                                 <div className="sbb-flex-child" style={{ flex: '1 1 50%' }}>
//                                                                     <div className="faint-upsell">
//                                                                         <div className="faint-img-uploader disabled">
//                                                                             <div className="faint-img-upload">
//                                                                                 <div className="faint-img-acyro">
//                                                                                 </div>
//                                                                                 <div className="faint-img-icon disabled faint-img-uploader-icon">
//                                                                                     <svg aria-hidden="true" role="img" width="18" height="18" viewBox="0 0 24 24" fill="none">
//                                                                                         <path fillRule="evenodd" clipRule="evenodd" d="M13.2899 2L6 2C3.79086 2 2 3.79086 2 6V18C2 20.2091 3.79086
//                                                                                       22 6 22H18C20.2091 22 22 20.2091 22 18V10.7101C21.3663 10.8987 20.695 11 20 11C16.134 11 13 7.86599 13 
//                                                                                       4C13 3.30503 13.1013 2.63371 13.2899 2ZM8 6C9.1032 6 10 6.8952 10 8C10 9.1056 9.1032 10 8 10C6.8944 10 6
//                                                                                       9.1056 6 8C6 6.8952 6.8944 6 8 6ZM6 18L9 14L11 16L15 11L18 18H6Z" fill="rgb(128, 132, 142)">
//                                                                                         </path>
//                                                                                         <path d="M21 0V3H24V5H21V8H19V5H16V3H19V0H21Z" fill="rgb(128, 132, 142)">
//                                                                                         </path>
//                                                                                     </svg>
//                                                                                 </div>
//                                                                             </div>
//                                                                         </div>
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
//                                 <div className="tools-container">
//                                     <div className="tool-x-to-esc-button-wrapper">
//                                         <div className="inner-tool-container">
//                                             <div className="x-to-esc-button" onClick={(e) => handleCloseModal(e)}>
//                                                 <svg role="img" width="18" height="18" viewBox="0 0 24 24">
//                                                     <path fill="currentColor" d="M18.4 4L12 10.4L5.6 4L4 5.6L10.4 
//                                                      12L4 18.4L5.6 20L12 13.6L18.4 20L20 18.4L13.6 12L20 5.6L18.4 4Z">
//                                                     </path>
//                                                 </svg>
//                                             </div>
//                                             <div className="esc-bind">ESC</div>
//                                         </div>
//                                     </div>
//                                 </div>
//                                 <div className="server-settings-sep"></div>
//                             </div>
//                         </div>
//                         {renderSnackBar()}
//                     </div>
//                     <Tooltip className="thread-tool-tip" id="modal-tip-s" place="top" />
//                 </div>
//             </div >
//         </REACT_PORTAL >

//     )
// }
// export default ServerSettingsModal;