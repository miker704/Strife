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
// import StrifeToggleSwitch from "./strife_switch_container";

// import Switch from "@mui/material/Switch";



// const SystemMessagesChannelCheckBoxes = ({ labelName, check, setCheck, index }) => {

//     // return (
//     //     <div className="server-op-margin-top-container">
//     //         <div className="sop-label-row">
//     //             <label className="sop-label" htmlFor={`:r${index}:`}>{label}</label>
//     //             <div id="sopslidecontrol" className="sop-slide-control-199" style={{ backgroundColor: "rgba(128, 132, 142, 1)" }}>
//     //                 <svg id={`slider32CRPX-${index}`} className="slider-32CRPXXXX" viewBox="0 0 28 20" preserveAspectRatio="xMinYMid meet" style={{ left: `${-3}px` }}>
//     //                     <rect id={`switchrect-${index}`} fill="white" x="4" y="0" height="20" width="20" rx="10"></rect>
//     //                     <svg id={`sliderInner-${index}`} viewBox="0 0 20 20" fill="none">
//     //                         <path fill="rgba(128, 132, 142, 1)"
//     //                             d="M5.13231 6.72963L6.7233 5.13864L14.855 13.2704L13.264 14.8614L5.13231 6.72963Z">
//     //                         </path>
//     //                         <path fill="rgba(128, 132, 142, 1)"
//     //                             d="M13.2704 5.13864L14.8614 6.72963L6.72963 14.8614L5.13864 13.2704L13.2704 5.13864Z">
//     //                         </path>
//     //                     </svg>
//     //                 </svg>
//     //                 <input id={`:r${index}:`} type="checkbox" className="sop-slider" checked={isChecked} onChange={checkHandler} />
//     //             </div>
//     //         </div>
//     //     </div>
//     // )

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

//                 document.getElementById(`sopslidecontrol-${index}`).style.backgroundColor = "rgb(35, 165, 90)";

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

//                 document.getElementById(`sopslidecontrol-${index}`).style.backgroundColor = "rgba(128, 132, 142, 1)";
//             }, 100)
//         }

//     }

//     return (
//         <div className="server-op-margin-top-container">
//             <div className="sop-label-row">
//                 <label className="sop-label" htmlFor={`:r${index}:`}>{labelName}</label>
//                 <div id={`sopslidecontrol-${index}`} className="sop-slide-control-199" style={{ backgroundColor: "rgba(128, 132, 142, 1)" }}>
//                     <svg id={`slider32CRPX-${index}`} className="slider-32CRPXXXX" viewBox="0 0 28 20" preserveAspectRatio="xMinYMid meet" style={{ left: `${-3}px` }}>
//                         <rect id={`switchrect-${index}`} fill="white" x="4" y="0" height="20" width="20" rx="10"></rect>
//                         <svg id={`sliderInner-${index}`} viewBox="0 0 20 20" fill="none">
//                             <path fill="rgba(128, 132, 142, 1)"
//                                 d="M5.13231 6.72963L6.7233 5.13864L14.855 13.2704L13.264 14.8614L5.13231 6.72963Z">
//                             </path>
//                             <path fill="rgba(128, 132, 142, 1)"
//                                 d="M13.2704 5.13864L14.8614 6.72963L6.72963 14.8614L5.13864 13.2704L13.2704 5.13864Z">
//                             </path>
//                         </svg>
//                     </svg>
//                     <input id={`:r${index}:`} type="checkbox" className="sop-slider" checked={check}
//                         onChange={() => {
//                             setCheck(!check);
//                             handleThisAnimationsMap(index, check);
//                         }}
//                     />
//                 </div>
//             </div>
//         </div>

//     );

// }





// const TestPage3 = (props) => {

//     const [isChecked, setChecked] = useState(false);
//     const [svgClick, setSvgClick] = useState(false);

//     const [svgChecked, setSvgCheck] = useState(false);
//     const [svgChecked1, setSvgCheck1] = useState(false);

//     const checkHandler = () => {
//         setChecked(!isChecked);
//     }


//     const isMounted = useIsComponentMounted();
//     console.log(`mounted ${isMounted}`)
//     console.log(isMounted)

//     const [sendWelcomeMessage, setSendWelcomeMessage] = useState(false);
//     const [promptMembers, setPromptMembers] = useState(false);
//     const [sendMessageUponBoost, setSendMessageUponBoost] = useState(false);
//     const [sendHelpfulTips, setSendHelpfulTips] = useState(false);
//     const [showBoostProgressBar, setShowBoostProgressBar] = useState(false);


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

//                 document.getElementById(`sopslidecontrol-${index}`).style.backgroundColor = "rgb(35, 165, 90)";

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

//                 document.getElementById(`sopslidecontrol-${index}`).style.backgroundColor = "rgba(128, 132, 142, 1)";
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

//     const handleSetSvgCheck = () => {

//         // if true and already checked proceed to temporaly add an animation and remove it afterwards
//         if (svgChecked === true) {

//             setSvgCheck(!svgChecked);
//             let x = document.getElementById('sops3').classList.add('transit-backwards');

//             console.log(x);

//         }
//         else {
//             console.log(document.getElementById('sops3'));
//             setSvgCheck(!svgChecked);
//         }
//     }

//     const handleSetSvgCheck2 = () => {

//         // if true and already checked proceed to temporaly add an animation and remove it afterwards
//         if (svgChecked1 === true) {

//             setSvgCheck1(!svgChecked1);
//             // let x = document.getElementById('sops3').classList.add('transit-backwards');
//             // console.log(x);

//         }
//         else {
//             // console.log(document.getElementById('sops3'));
//             setSvgCheck1(!svgChecked1);
//         }
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

//     const [choices, setChoices] = useState(serverLabels);


//     const mapThis = serverLabels.map((choice, index) => {
//         return (
//             <SystemMessagesChannelCheckBoxes key={`:r${index}:`} labelName={choice.name} check={choice.checked} setCheck={() => choice.setFunct(!choice.checked)} index={index} />
//         )
//     });


//     const SystemMessagesChannelCheckBoxes2 = serverLabels.map((choice, index) => {

//         return (
//             <div className="server-op-margin-top-container">
//                 <div className="sop-label-row">
//                     <label className="sop-label" htmlFor={`:r${index}:`}></label>
//                     <div id={`sopslidecontrol-${index}`} className="sop-slide-control-199" style={{ backgroundColor: "rgba(128, 132, 142, 1)" }}>
//                         <svg id={`slider32CRPX-${index}`} className="slider-32CRPXXXX" viewBox="0 0 28 20" preserveAspectRatio="xMinYMid meet" style={{ left: `${-3}px` }}>
//                             <rect id={`switchrect-${index}`} fill="white" x="4" y="0" height="20" width="20" rx="10"></rect>
//                             <svg id={`sliderInner-${index}`} viewBox="0 0 20 20" fill="none">
//                                 <path fill="rgba(128, 132, 142, 1)"
//                                     d="M5.13231 6.72963L6.7233 5.13864L14.855 13.2704L13.264 14.8614L5.13231 6.72963Z">
//                                 </path>
//                                 <path fill="rgba(128, 132, 142, 1)"
//                                     d="M13.2704 5.13864L14.8614 6.72963L6.72963 14.8614L5.13864 13.2704L13.2704 5.13864Z">
//                                 </path>
//                             </svg>
//                         </svg>
//                         <input id={`:r${index}:`} type="checkbox" className="sop-slider" checked={choice.checked}
//                             onChange={() => {
//                                 choice.setFunct(!choice.checked);
//                                 handleThisAnimationsMap(index, choice.checked);
//                             }}
//                         />
//                     </div>
//                 </div>
//             </div>

//         );

//     })





//     const _MAP_THIS_ = serverLabels.map((choice, index) => {
//         return (

//             <StrifeToggleSwitch
//                 key={`:r${index}:`}
//                 labelTagContents={choice.name}
//                 checkedState={choice.checked}
//                 setCheckedState={() => choice.setFunct(!choice.checked)}
//                 customIndex={index} />
//         );
//     });





//     return (

//         <div className="loading-screen-wrapper" style={{ overflow: 'visible' }}>


//             <div style={{ display: 'flex', padding: '30px' }}>
//                 <div id="sopslidecontrol" className={`sop-slide-control-199`}
//                     // onClick={() => handleThisAnimations()}

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
//                         // onChange={() => setSvgClick(!svgClick)}
//                         onChange={() => {
//                             setSvgClick(!svgClick)
//                             handleThisAnimations()
//                         }}

//                     />
//                 </div>
//             </div>
//             <div className="server-op-divider">

//                 {/* {mapThis} */}

//                 {_MAP_THIS_}
//                 {/* {SystemMessagesChannelCheckBoxes2} */}

//             </div>
//             {/* <div className="server-op-divider">
//                 <div className="server-op-margin-top-container">
//                     <div className="sop-label-row">
//                         <label className="sop-label">Send a random welcome message when someone joins this server.</label>
//                         <div className="sop-slide-control">
//                             <svg className="slider-32CRPX" viewBox="0 0 28 20" preserveAspectRatio="xMinYMid meet" style={{ left: `${12}px` }}>
//                                 <rect fill="white" x="4" y="0" height="20" width="20" rx="10"></rect>
//                                 <svg viewBox="0 0 20 20" fill="none">
//                                     <path fill="rgba(35, 165, 90, 1)" d="M7.89561 14.8538L6.30462 13.2629L14.3099
//                                                                        5.25755L15.9009 6.84854L7.89561 14.8538Z">
//                                     </path>
//                                     <path fill="rgba(35, 165, 90, 1)" d="M4.08643 11.0903L5.67742 9.49929L9.4485 
//                                                                       13.2704L7.85751 14.8614L4.08643 11.0903Z">
//                                     </path>
//                                 </svg>
//                             </svg>
//                             <input id=":r8:" type="checkbox" className="sop-slider" checked={sendWelcomeMessage} onChange={() => setSendWelcomeMessage(!sendWelcomeMessage)} />
//                         </div>
//                     </div>
//                 </div>
//                 <div className="server-op-margin-top-container">
//                     <div className="sop-label-row">
//                         <label className="sop-label">Prompt members to reply to welcome messages with a sticker.</label>
//                         <div className="sop-slide-control">
//                             <svg className="slider-32CRPX" viewBox="0 0 28 20" preserveAspectRatio="xMinYMid meet" style={{ left: `${12}px` }}>
//                                 <rect fill="white" x="4" y="0" height="20" width="20" rx="10"></rect>
//                                 <svg viewBox="0 0 20 20" fill="none">
//                                     <path fill="rgba(35, 165, 90, 1)" d="M7.89561 14.8538L6.30462 13.2629L14.3099
//                                                                           5.25755L15.9009 6.84854L7.89561 14.8538Z">
//                                     </path>
//                                     <path fill="rgba(35, 165, 90, 1)" d="M4.08643 11.0903L5.67742 9.49929L9.4485 
//                                                                              13.2704L7.85751 14.8614L4.08643 11.0903Z">
//                                     </path>
//                                 </svg>
//                             </svg>
//                             <input type="checkbox" className="sop-slider" checked />
//                         </div>
//                     </div>
//                 </div>
//                 <div className="server-op-margin-top-container">
//                     <div className="sop-label-row">
//                         <label className="sop-label">Send a message when someone boosts this server.</label>
//                         <div className="sop-slide-control">
//                             <svg className="slider-32CRPX" viewBox="0 0 28 20" preserveAspectRatio="xMinYMid meet" style={{ left: `${12}px` }}>
//                                 <rect fill="white" x="4" y="0" height="20" width="20" rx="10"></rect>
//                                 <svg viewBox="0 0 20 20" fill="none">
//                                     <path fill="rgba(35, 165, 90, 1)" d="M7.89561 14.8538L6.30462 13.2629L14.3099
//                                                                     5.25755L15.9009 6.84854L7.89561 14.8538Z">
//                                     </path>
//                                     <path fill="rgba(35, 165, 90, 1)" d="M4.08643 11.0903L5.67742 9.49929L9.4485 
//                                                                       13.2704L7.85751 14.8614L4.08643 11.0903Z">
//                                     </path>
//                                 </svg>
//                             </svg>
//                             <input type="checkbox" className="sop-slider" checked />
//                         </div>
//                     </div>
//                 </div>
//                 <div className="server-op-margin-top-container">
//                     <div className="sop-label-row">
//                         <label className="sop-label">Send helpful tips for server setup.</label>
//                         <div className="sop-slide-control">
//                             <svg className="slider-32CRPX" viewBox="0 0 28 20" preserveAspectRatio="xMinYMid meet" style={{ left: `${12}px` }}>
//                                 <rect fill="white" x="4" y="0" height="20" width="20" rx="10"></rect>
//                                 <svg viewBox="0 0 20 20" fill="none">
//                                     <path fill="rgba(35, 165, 90, 1)" d="M7.89561 14.8538L6.30462 13.2629L14.3099
//                                                                    5.25755L15.9009 6.84854L7.89561 14.8538Z">
//                                     </path>
//                                     <path fill="rgba(35, 165, 90, 1)" d="M4.08643 11.0903L5.67742 9.49929L9.4485 
//                                                                      13.2704L7.85751 14.8614L4.08643 11.0903Z">
//                                     </path>
//                                 </svg>
//                             </svg>
//                             <input type="checkbox" className="sop-slider" checked />
//                         </div>
//                     </div>
//                 </div>
//             </div> */}

//             <div>
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
//                                         <div className="server-op-horz-label-wrapper">
//                                             <label className="server-op-horz-label">
//                                                 Show Boost progress bar
//                                             </label>
//                                             <div className="control-123">
//                                                 <div className="control-inner">
//                                                     <svg className="slider-32CRPX" viewBox="0 0 28 20" preserveAspectRatio="xMinYMid meet" style={{ left: `${-3}px` }}>
//                                                         <rect fill="white" x="4" y="0" height="20" width="20" rx="10"></rect>
//                                                         <svg viewBox="0 0 20 20" fill="none">
//                                                             <path fill="rgba(128, 132, 142, 1)"
//                                                                 d="M5.13231 6.72963L6.7233 5.13864L14.855 13.2704L13.264 14.8614L5.13231 6.72963Z">
//                                                             </path>
//                                                             <path fill="rgba(128, 132, 142, 1)"
//                                                                 d="M13.2704 5.13864L14.8614 6.72963L6.72963 14.8614L5.13864 13.2704L13.2704 5.13864Z">
//                                                             </path>
//                                                         </svg>
//                                                     </svg>
//                                                     {/* <input type="checkbox" className="sop-slider" /> */}
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>

//     )


// }

// export default TestPage3;

