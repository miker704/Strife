// import React from "react";
// import user_Default_PFP from '../../../app/assets/images/discord_PFP.svg';
// import { useState, useEffect, useRef } from "react";
// import Radio from '@mui/material/Radio';
// import RadioGroup from '@mui/material/RadioGroup';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import FormControl from '@mui/material/FormControl';
// import Select from '@mui/material/Select';
// import { styled } from "@mui/material/styles";
// import SvgIcon from "@mui/material/SvgIcon";
// import MenuItem from '@mui/material/MenuItem';

// import useIsComponentMounted from "../../utils/use_is_component_mounted.js";

// // import StrifeToggleSwitch from "./strife_switch_container";
// import StrifeToggleSwitch from "../custom_input_components/strife_toggle_switch_container";
// import Switch from "@mui/material/Switch";
// import compress_Switch_gray from '../../../app/assets/images/compressedswitchgray.svg'
// import compress_Switch from '../../../app/assets/images/compressswitchgreen.svg'
// import green_Switch_check from '../../../app/assets/images/greenswitchcheck.svg'
// import gray_Switch_uncheck from '../../../app/assets/images/grayswitchuncheck.svg'



// const StrifeSwitch = styled(Switch)(({ theme }) => ({

//     width: "40px",
//     height: "24px",
//     padding: 0,
//     display: "flex",
//     position: "relative",
//     cursor: "pointer",
//     outline: 0,
//     boxSizing: "border-box",
//     opacity: "1",
//     borderRadius: "14px",


//     "&:active": {
//         "& .MuiSwitch-thumb": {

//             // height: '2px',
//             // width: '2px',
//             color: 'transparent',
//             transition: 'background-color 200ms ease-in-out 1s, transform 200ms ease-in-out 0s,left 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, transform 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, background-image 150ms ease-in-out',

//             // width: '9px',
//             // height: '3px',
//             // padding: '4px',
//             // margin: '3px',

//             // backgroundImage: `url(${compress_Switch})`,
//             // position: "absolute",
//             // transform: 'scale(0.6)',
//             // backgroundRepeat: "no-repeat",
//             // backgroundPosition: "center",
//             // left: 0,
//             // top: 0,

//             // color: '#80848e',
//             // '.slider-32CRPX': {
//             //     width: 9,
//             //     height: 3,
//             //     padding: '4px',
//             //     margin: '3px'
//             // }
//             "&:before": {
//                 content: "''",
//                 position: "absolute",
//                 width: "100%",
//                 height: "100%",
//                 transform: 'scale(0.6)',
//                 left: 0,
//                 top: 0,
//                 backgroundRepeat: "no-repeat",
//                 backgroundPosition: "center",
//                 backgroundImage: `url(${compress_Switch_gray})`,
//                 color: '#80848e',
//                 transition: 'background-color 200ms ease-in-out 1s, transform 200ms ease-in-out 0s,left 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, transform 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, background-image 150ms ease-in-out',

//             },

//         },

//         "& .MuiSwitch-track": {
//             opacity: 1,
//             backgroundColor: "rgba(100, 142, 126,1)"
//         },

//         "& .MuiSwitch-switchBase": {
//             padding: 2,
//             top: '1px',
//             left: `2px`,

//             "&.Mui-checked": {
//                 color: 'transparent',
//                 left: `-4px`,
//                 top: '1px',

//                 "& .MuiSwitch-thumb:before": {
//                     content: '',
//                     position: "absolute",
//                     backgroundImage: `url(${compress_Switch})`,
//                     backgroundRepeat: "no-repeat",
//                     backgroundPosition: "center",
//                     width: "100%",
//                     height: "100%",
//                     left: 0,
//                     top: 0,
//                     transition: 'background-color 200ms ease-in-out 1s, transform 200ms ease-in-out 0s,left 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, transform 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, background-image 150ms ease-in-out',

//                 },

//                 "& + .MuiSwitch-track": {
//                     opacity: 1,
//                     backgroundColor: "rgba(100, 142, 126,1)"
//                 }
//             },
//         },




//     },
//     "& .MuiSwitch-switchBase": {
//         padding: 2,
//         top: '1px',
//         left: `2px`,
//         color: 'transparent',

//         "&.Mui-checked": {
//             color: 'transparent',
//             left: `-4px`,
//             top: '1px',

//             "& .MuiSwitch-thumb:before": {
//                 content: '',
//                 position: "absolute",
//                 backgroundImage: `url(${green_Switch_check})`,
//                 // backgroundImage: `url(${compress_Switch_gray})`,
//                 backgroundRepeat: "no-repeat",
//                 backgroundPosition: "center",
//                 width: "100%",
//                 height: "100%",
//                 left: 0,
//                 top: 0,
//                 transition: 'background-color 200ms ease-in-out 1s, transform 200ms ease-in-out 0s,left 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, transform 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, background-image 150ms ease-in-out',

//             },

//             "& + .MuiSwitch-track": {
//                 opacity: 1,
//                 backgroundColor: '#23a55a'
//             }
//         }
//     },
//     "& .MuiSwitch-thumb": {
//         boxShadow: "0 2px 4px 0 rgb(0 35 11 / 20%)",
//         width: 18,
//         height: 18,
//         borderRadius: 10,

//         "&:before": {
//             content: "''",
//             position: "absolute",
//             width: "100%",
//             height: "100%",
//             left: 0,
//             top: 0,
//             backgroundRepeat: "no-repeat",
//             backgroundPosition: "center",
//             backgroundImage: `url(${gray_Switch_uncheck})`,
//             color: '#80848e',
//             transition: 'background-color 200ms ease-in-out 1s, transform 200ms ease-in-out 0s,left 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, transform 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, background-image 150ms ease-in-out',
//         },
//         transition: theme.transitions.create(['width'], {
//             duration: 200,
//         }),

//     },
//     "& .MuiSwitch-track": {
//         borderRadius: 14,
//         opacity: 1,
//         backgroundColor: '#80848e',
//         boxSizing: "border-box"
//     }

// }));



// const StrifeToggleSwitch1 = (props = {
//     labelTagContents: String(),
//     checkedState: Boolean(),
//     setCheckedState: Function(),
//     customIndex: Number()
// }) => {

//     const handleThisAnimationsMap = (customIndex, checkedState) => {
//         let firstRect = document.getElementById(`switchrect-${customIndex}`);
//         let w = document.getElementById(`slider32CRPX4-${customIndex}`);
//         // let x = document.getElementById(`slider32CRPX-${index}`).lastElementChild;
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
//                 firstRect.setAttribute('height', '20');
//                 firstRect.setAttribute('width', '20');
//                 firstRect.setAttribute('x', '4');
//                 firstRect.setAttribute('y', '0');
//                 x.firstElementChild.setAttribute('d', "M7.89561 14.8538L6.30462 13.2629L14.3099 5.25755L15.9009 6.84854L7.89561 14.8538Z");
//                 x.firstElementChild.setAttribute('fill', "rgba(35, 165, 90, 1)");

//                 x.lastElementChild.setAttribute('d', "M4.08643 11.0903L5.67742 9.49929L9.4485 13.2704L7.85751 14.8614L4.08643 11.0903Z");
//                 x.lastElementChild.setAttribute('fill', "rgba(35, 165, 90, 1)");

//                 document.getElementById(`stsslidecontrol-${customIndex}`).style.backgroundColor = "rgb(35, 165, 90)";

//             }, 100)


//         }
//         else if (checkedState === true) {
//             w.style.left = '-3px';

//             x.firstElementChild.setAttribute('d', "M6.56666 11.0013L6.56666 8.96683L13.5667 8.96683L13.5667 11.0013L6.56666 11.0013Z");
//             x.lastElementChild.setAttribute('d', "M13.5582 8.96683L13.5582 11.0013L6.56192 11.0013L6.56192 8.96683L13.5582 8.96683Z");
//             setTimeout(() => {
//                 firstRect.setAttribute('height', '20');
//                 firstRect.setAttribute('width', '20');
//                 firstRect.setAttribute('x', '4');
//                 firstRect.setAttribute('y', '0');
//                 x.firstElementChild.setAttribute('d', "M5.13231 6.72963L6.7233 5.13864L14.855 13.2704L13.264 14.8614L5.13231 6.72963Z");
//                 x.firstElementChild.setAttribute('fill', "rgba(128, 132, 142, 1)");
//                 x.lastElementChild.setAttribute('d', "M13.2704 5.13864L14.8614 6.72963L6.72963 14.8614L5.13864 13.2704L13.2704 5.13864Z");
//                 x.lastElementChild.setAttribute('fill', "rgba(128, 132, 142, 1)");

//                 document.getElementById(`stsslidecontrol-${customIndex}`).style.backgroundColor = "rgba(128, 132, 142, 1)";
//             }, 100)
//         }

//     }
//     return (
//         <div className="sts-label-row">
//             <label className="sts-label" htmlFor={`:r${customIndex}:`}>{labelTagContents}</label>
//             <div className="sts-slide-control-wrapper">
//                 <div id={`stsslidecontrol-${customIndex}`} className="sts-slide-control" style={{ backgroundColor: "rgba(128, 132, 142, 1)" }}>
//                     <svg id={`slider32CRPX4-${customIndex}`} className="slider-32CRPX4" viewBox="0 0 28 20" preserveAspectRatio="xMinYMid meet" style={{ left: `${-3}px` }}>
//                         <rect id={`switchrect-${customIndex}`} fill="white" x="4" y="0" height="20" width="20" rx="10"></rect>
//                         <svg id={`sliderInner-${customIndex}`} viewBox="0 0 20 20" fill="none">
//                             <path fill="rgba(128, 132, 142, 1)"
//                                 d="M5.13231 6.72963L6.7233 5.13864L14.855 13.2704L13.264 14.8614L5.13231 6.72963Z">
//                             </path>
//                             <path fill="rgba(128, 132, 142, 1)"
//                                 d="M13.2704 5.13864L14.8614 6.72963L6.72963 14.8614L5.13864 13.2704L13.2704 5.13864Z">
//                             </path>
//                         </svg>
//                     </svg>
//                     <input id={`:r${customIndex}:`} type="checkbox" className="sts-slider" checked={checkedState}
//                         onChange={() => {
//                             setCheckedState(checkedState);
//                             handleThisAnimationsMap(customIndex, checkedState);
//                         }}
//                     />
//                 </div>
//             </div>
//         </div>

//     );


// };




// const TestPage2 = (props) => {

//     const [svgClick, setSvgClick] = useState(false);
//     const handleSvgClick = (e) => {
//         setSvgClick(!svgClick);
//     }
//     const isMounted = useIsComponentMounted();

//     const [sendWelcomeMessage, setSendWelcomeMessage] = useState(false);
//     const [promptMembers, setPromptMembers] = useState(false);
//     const [sendMessageUponBoost, setSendMessageUponBoost] = useState(false);
//     const [sendHelpfulTips, setSendHelpfulTips] = useState(false);
//     const [showBoostProgressBar, setShowBoostProgressBar] = useState(false);

//     const [activitySwitch, setActivitySwitch] = useState(false);


//     const handleThisAnimations = () => {
//         // setSvgClick(!svgClick);svgClick


//         console.log('input is : ');
//         console.log(document.getElementById(":r7:").checked)
//         console.log('input is : ');
//         console.log(document.getElementById(":r8:"))

//         let firstRect = document.getElementById('switchrect');
//         let w = document.getElementById('slider32CRPX');
//         let x = document.getElementById('slider32CRPX').lastElementChild;


//         if (svgClick === false) {
//             firstRect.setAttribute('height', '18');
//             firstRect.setAttribute('width', '28');
//             firstRect.setAttribute('x', '0');
//             firstRect.setAttribute('y', '1');

//             w.style.left = '12px';
//             x.firstElementChild.setAttribute('d', "M6.56666 11.0013L6.56666 8.96683L13.5667 8.96683L13.5667 11.0013L6.56666 11.0013Z");
//             x.lastElementChild.setAttribute('d', "M13.5582 8.96683L13.5582 11.0013L6.56192 11.0013L6.56192 8.96683L13.5582 8.96683Z");
//             setTimeout(() => {
//                 firstRect.setAttribute('height', '20');
//                 firstRect.setAttribute('width', '20');
//                 firstRect.setAttribute('x', '4');
//                 firstRect.setAttribute('y', '0');
//                 x.firstElementChild.setAttribute('d', "M7.89561 14.8538L6.30462 13.2629L14.3099 5.25755L15.9009 6.84854L7.89561 14.8538Z");
//                 x.firstElementChild.setAttribute('fill', "rgba(35, 165, 90, 1)");

//                 x.lastElementChild.setAttribute('d', "M4.08643 11.0903L5.67742 9.49929L9.4485 13.2704L7.85751 14.8614L4.08643 11.0903Z");
//                 x.lastElementChild.setAttribute('fill', "rgba(35, 165, 90, 1)");

//                 document.getElementById("sopslidecontrol").style.backgroundColor = "rgb(35, 165, 90)";

//             }, 100)


//         }
//         else if (svgClick === true) {
//             w.style.left = '-3px';

//             x.firstElementChild.setAttribute('d', "M6.56666 11.0013L6.56666 8.96683L13.5667 8.96683L13.5667 11.0013L6.56666 11.0013Z");
//             x.lastElementChild.setAttribute('d', "M13.5582 8.96683L13.5582 11.0013L6.56192 11.0013L6.56192 8.96683L13.5582 8.96683Z");
//             setTimeout(() => {
//                 firstRect.setAttribute('height', '20');
//                 firstRect.setAttribute('width', '20');
//                 firstRect.setAttribute('x', '4');
//                 firstRect.setAttribute('y', '0');
//                 x.firstElementChild.setAttribute('d', "M5.13231 6.72963L6.7233 5.13864L14.855 13.2704L13.264 14.8614L5.13231 6.72963Z");
//                 x.firstElementChild.setAttribute('fill', "rgba(128, 132, 142, 1)");
//                 x.lastElementChild.setAttribute('d', "M13.2704 5.13864L14.8614 6.72963L6.72963 14.8614L5.13864 13.2704L13.2704 5.13864Z");
//                 x.lastElementChild.setAttribute('fill', "rgba(128, 132, 142, 1)");

//                 document.getElementById("sopslidecontrol").style.backgroundColor = "rgba(128, 132, 142, 1)";

//             }, 100)
//         }

//     }
//     const handleThisAnimationsMap = (index, choice) => {
//         // setSvgClick(!svgClick);svgClick
//         console.log(`choice is  = ${choice}`)

//         console.log('input is : ');
//         console.log(document.getElementById(`:r${index}:`))

//         console.log(document.getElementById(`:r${index}:`).checked)

//         let firstRect = document.getElementById(`switchrect-${index}`);
//         let w = document.getElementById(`slider32CRPX-${index}`);
//         // let x = document.getElementById(`slider32CRPX-${index}`).lastElementChild;
//         let x = w.lastElementChild;

//         if (choice === false) {
//             console.log("hi")
//             firstRect.setAttribute('height', '18');
//             firstRect.setAttribute('width', '28');
//             firstRect.setAttribute('x', '0');
//             firstRect.setAttribute('y', '1');

//             w.style.left = '12px';
//             x.firstElementChild.setAttribute('d', "M6.56666 11.0013L6.56666 8.96683L13.5667 8.96683L13.5667 11.0013L6.56666 11.0013Z");
//             x.lastElementChild.setAttribute('d', "M13.5582 8.96683L13.5582 11.0013L6.56192 11.0013L6.56192 8.96683L13.5582 8.96683Z");
//             setTimeout(() => {
//                 firstRect.setAttribute('height', '20');
//                 firstRect.setAttribute('width', '20');
//                 firstRect.setAttribute('x', '4');
//                 firstRect.setAttribute('y', '0');
//                 x.firstElementChild.setAttribute('d', "M7.89561 14.8538L6.30462 13.2629L14.3099 5.25755L15.9009 6.84854L7.89561 14.8538Z");
//                 x.firstElementChild.setAttribute('fill', "rgba(35, 165, 90, 1)");

//                 x.lastElementChild.setAttribute('d', "M4.08643 11.0903L5.67742 9.49929L9.4485 13.2704L7.85751 14.8614L4.08643 11.0903Z");
//                 x.lastElementChild.setAttribute('fill', "rgba(35, 165, 90, 1)");

//                 document.getElementById("sopslidecontrol").style.backgroundColor = "rgb(35, 165, 90)";

//             }, 100)


//         }
//         else if (choice === true) {
//             w.style.left = '-3px';

//             x.firstElementChild.setAttribute('d', "M6.56666 11.0013L6.56666 8.96683L13.5667 8.96683L13.5667 11.0013L6.56666 11.0013Z");
//             x.lastElementChild.setAttribute('d', "M13.5582 8.96683L13.5582 11.0013L6.56192 11.0013L6.56192 8.96683L13.5582 8.96683Z");
//             setTimeout(() => {
//                 firstRect.setAttribute('height', '20');
//                 firstRect.setAttribute('width', '20');
//                 firstRect.setAttribute('x', '4');
//                 firstRect.setAttribute('y', '0');
//                 x.firstElementChild.setAttribute('d', "M5.13231 6.72963L6.7233 5.13864L14.855 13.2704L13.264 14.8614L5.13231 6.72963Z");
//                 x.firstElementChild.setAttribute('fill', "rgba(128, 132, 142, 1)");
//                 x.lastElementChild.setAttribute('d', "M13.2704 5.13864L14.8614 6.72963L6.72963 14.8614L5.13864 13.2704L13.2704 5.13864Z");
//                 x.lastElementChild.setAttribute('fill', "rgba(128, 132, 142, 1)");

//                 document.getElementById("sopslidecontrol").style.backgroundColor = "rgba(128, 132, 142, 1)";

//             }, 100)
//         }

//     }

//     const handleThisAnimations2 = () => {
//         // setSvgClick(!svgClick);svgClick


//         let firstRect = document.getElementById('switchrect');
//         let w = document.getElementById('slider32CRPX');
//         let x = document.getElementById('slider32CRPX').lastElementChild;


//         if (svgClick === false) {
//             firstRect.setAttribute('height', '18');
//             firstRect.setAttribute('width', '28');
//             firstRect.setAttribute('x', '0');
//             firstRect.setAttribute('y', '1');
//             w.style.left = '12px';
//             x.firstElementChild.setAttribute('d', "M6.56666 11.0013L6.56666 8.96683L13.5667 8.96683L13.5667 11.0013L6.56666 11.0013Z");
//             x.lastElementChild.setAttribute('d', "M13.5582 8.96683L13.5582 11.0013L6.56192 11.0013L6.56192 8.96683L13.5582 8.96683Z");
//             setTimeout(() => {
//                 firstRect.setAttribute('height', '20');
//                 firstRect.setAttribute('width', '20');
//                 firstRect.setAttribute('x', '4');
//                 firstRect.setAttribute('y', '0');
//                 x.firstElementChild.setAttribute('d', "M7.89561 14.8538L6.30462 13.2629L14.3099 5.25755L15.9009 6.84854L7.89561 14.8538Z");
//                 x.firstElementChild.setAttribute('fill', "rgba(35, 165, 90, 1)");
//                 x.lastElementChild.setAttribute('d', "M4.08643 11.0903L5.67742 9.49929L9.4485 13.2704L7.85751 14.8614L4.08643 11.0903Z");
//                 x.lastElementChild.setAttribute('fill', "rgba(35, 165, 90, 1)");
//                 document.getElementById("sopslidecontrol").style.backgroundColor = "rgb(35, 165, 90)";

//             }, 100)


//         }
//         else if (svgClick === true) {
//             w.style.left = '-3px';
//             x.firstElementChild.setAttribute('d', "M6.56666 11.0013L6.56666 8.96683L13.5667 8.96683L13.5667 11.0013L6.56666 11.0013Z");
//             x.lastElementChild.setAttribute('d', "M13.5582 8.96683L13.5582 11.0013L6.56192 11.0013L6.56192 8.96683L13.5582 8.96683Z");
//             setTimeout(() => {
//                 firstRect.setAttribute('height', '20');
//                 firstRect.setAttribute('width', '20');
//                 firstRect.setAttribute('x', '4');
//                 firstRect.setAttribute('y', '0');
//                 x.firstElementChild.setAttribute('d', "M5.13231 6.72963L6.7233 5.13864L14.855 13.2704L13.264 14.8614L5.13231 6.72963Z");
//                 x.firstElementChild.setAttribute('fill', "rgba(128, 132, 142, 1)");
//                 x.lastElementChild.setAttribute('d', "M13.2704 5.13864L14.8614 6.72963L6.72963 14.8614L5.13864 13.2704L13.2704 5.13864Z");
//                 x.lastElementChild.setAttribute('fill', "rgba(128, 132, 142, 1)");

//                 document.getElementById("sopslidecontrol").style.backgroundColor = "rgba(128, 132, 142, 1)";

//             }, 100)
//         }


//         console.log(x);

//     }


//     const serverLabels = [
//         {
//             name: "Send a random welcome message when someone joins this server.",
//             checked: sendWelcomeMessage,
//             setFunct: (param) => setSendWelcomeMessage(param),
//         },
//         {
//             name: "Prompt members to reply to welcome messages with a sticker.",
//             checked: promptMembers,
//             setFunct: (param) => setPromptMembers(param),

//         },
//         {
//             name: "Send a message when someone boosts this server.",
//             checked: sendMessageUponBoost,
//             setFunct: (param) => setSendMessageUponBoost(param),

//         },
//         {
//             name: "Send helpful tips for server setup.",
//             checked: sendHelpfulTips,
//             setFunct: (param) => setSendHelpfulTips(param),

//         }
//     ];

//     return (

//         <div className="loading-screen-wrapper" style={{ overflow: 'visible' }}>



//             <div style={{ display: 'flex', padding: '30px' }}>
//                 <StrifeSwitch checked={svgClick} onChange={(e) => handleSvgClick(e)} />
//             </div>

//             <div className="server-op-margin-top-container">
//                 <StrifeToggleSwitch key={`:r${9}:`} customIndex={9} checkedState={promptMembers}
//                     labelTagContents={"Prompt members to reply to welcome messages with a sticker."}
//                     setCheckedState={() => setPromptMembers(!promptMembers)}
//                 />
//             </div>

//             {/* <div style={{ display: 'flex', padding: '30px' }}>
//                 <div id="sopslidecontrol" className={`sop-slide-control-199`}
//                     style={{ backgroundColor: "rgba(128, 132, 142, 1)" }}>

//                     <svg xmlnsXlink="http://www.w3.org/2000/svg" id="slider32CRPX" className="slider-32CRPXXXX" viewBox="0 0 28 20" fill="rgba(128, 132, 142, 1)" preserveAspectRatio="xMinYMid meet"
//                     >
//                         <rect id="switchrect" fill="white" x="4" y="0" height="20" width="20" rx="10">
//                         </rect>
//                         <svg id="sliderInner" viewBox="0 0 20 20" fill="none">
//                             <path fill="rgba(128, 132, 142, 1)"
//                                 d="M5.13231 6.72963L6.7233 5.13864L14.855 13.2704L13.264 14.8614L5.13231 6.72963Z">
//                             </path>
//                             <path fill="rgba(128, 132, 142, 1)"
//                                 d="M13.2704 5.13864L14.8614 6.72963L6.72963 14.8614L5.13864 13.2704L13.2704 5.13864Z">
//                             </path>
//                         </svg>
//                     </svg>
//                     <input id=":r7:" type="checkbox" className="sop-slider" checked={svgClick}
//                         onChange={() => {
//                             setSvgClick(!svgClick)
//                             handleThisAnimations()
//                         }}
//                     />
//                 </div>
//             </div> */}


//             {/* <div>
//                 <div className="cs-op-container">
//                     <StrifeToggleSwitch key={`:r${7}:`} customIndex={7} checkedState={activitySwitch}
//                         labelTagContents={"Age-Restricted Channel"}
//                         setCheckedState={() => setActivitySwitch(!activitySwitch)}
//                     />
//                     <div className="cs-inactive-sub-info-activity">
//                         Users will need to confirm they are of over legal age to view in the content in this channel.
//                         Age-restricted channels are exempt from the explicit content filter. ($TR!F3 N!TR0 Required!)
//                     </div>
//                 </div>
//             </div>


//             <div className="server-op-divider">
//                 <div className="server-op-margin-top-container">
//                     <StrifeToggleSwitch key={`:r${8}:`} customIndex={8} checkedState={sendWelcomeMessage}
//                         labelTagContents={"Send a random welcome message when someone joins this server."}
//                         setCheckedState={() => setSendWelcomeMessage(!sendWelcomeMessage)}
//                     />
//                 </div>
//                 <div className="server-op-margin-top-container">
//                     <StrifeToggleSwitch key={`:r${9}:`} customIndex={9} checkedState={promptMembers}
//                         labelTagContents={"Prompt members to reply to welcome messages with a sticker."}
//                         setCheckedState={() => setPromptMembers(!promptMembers)}
//                     />
//                 </div>
//                 <div className="server-op-margin-top-container">
//                     <StrifeToggleSwitch key={`:r${10}:`} customIndex={10} checkedState={sendMessageUponBoost}
//                         labelTagContents={"Send a message when someone boosts this server."}
//                         setCheckedState={() => setSendMessageUponBoost(!sendMessageUponBoost)}
//                     />
//                 </div>
//                 <div className="server-op-margin-top-container">
//                     <StrifeToggleSwitch key={`:r${11}:`} customIndex={11} checkedState={sendHelpfulTips}
//                         labelTagContents={"Send helpful tips for server setup."}
//                         setCheckedState={() => setSendHelpfulTips(!sendHelpfulTips)}
//                     />
//                 </div>
//             </div> */}

//             {/* <div>
//                 <div className="server-op-divider">
//                     <div className="sop-section-title">
//                         <h3 className="sop-section-header">
//                             Display
//                         </h3>
//                     </div>

//                     <div className="sop-display-children">
//                         <div>
//                             <div className="server-op-divider-flex-js2 ssm-horz2" style={{ flex: '1 1 auto' }}>
//                                 <div className="server-op-divider-flex-horz">
//                                     <div className="server-op-horz-martop-container">

//                                         <StrifeToggleSwitch key={`:r${12}:`} customIndex={12} checkedState={showBoostProgressBar}
//                                             labelTagContents={"Show Boost progress bar"}
//                                             setCheckedState={() => setShowBoostProgressBar(!showBoostProgressBar)}
//                                         />

//                                     </div>
//                                     <div className="inactive-sub-info-3">
//                                         This progress bar will display in your channel list, attached to your server name
//                                         (or server banner if you have one set).
//                                     </div>
//                                 </div>
//                                 <div className="flex-child-boost-ex">
//                                     <img className="flex-child-boost-ex-img" alt="boost-example" />
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div> */}
//         </div>

//     )


// }

// export default TestPage2;

