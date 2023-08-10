// import React from "react";
// import { useState, useEffect, useRef } from "react";


// /**
//  * Custom made Toggle Switch Component that uses a nearly identical SVG animation/ Movement tto that of discords 
//  * typically used in Server/Channel Settings Modals.
//  * The switch upon being clicked moves and morphs the svg from X -> gray minus -> green minus -> checkmark. 
//  * @typedef {object} Props
//  * @type {React.FC<Props>}
//  * @param {string} labelTagContents - HTML content between label tag
//  * @param {bool} checkedState - boolean variable returned by the useState 
//  * @param {Function} setCheckedState - useState function to update checkedState
//  * @param {number} customIndex - A number (warning keep it unique!) used for component key prop and id for components elements
//  * @returns {React.FunctionComponent}
//  * @example
//  * import StrifeToggleSwitch from '.../${PATH_TO = "strife_switch_container.js"}';
//  * const SomeGenericComponent = (props) => {
//  *  const [check, setCheck] = useState(false);
//  *  let labelContents = "Hello World";
//  *  ...
//  *  <div>
//  *          <StrifeToggleSwitch 
//  *              labelTagContents = {labelContents} 
//  *              checkedState={check}
//  *              setCheckedState={setCheck}
//  *              customIndex={SOME_UNIQUE_DIGIT} 
//  *           />
//  *  </div>
//  * }
//  */
// const StrifeToggleSwitch = (props = {
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
//             <label className="sts-label" htmlFor={`:r${props.customIndex}:`}>{props.labelTagContents}</label>
//             <div className="sts-slide-control-wrapper">
//                 <div id={`stsslidecontrol-${props.customIndex}`} className="sts-slide-control" style={{ backgroundColor: "rgba(128, 132, 142, 1)" }}>
//                     <svg id={`slider32CRPX4-${props.customIndex}`} className="slider-32CRPX4" viewBox="0 0 28 20" preserveAspectRatio="xMinYMid meet" style={{ left: `${-3}px` }}>
//                         <rect id={`switchrect-${props.customIndex}`} fill="white" x="4" y="0" height="20" width="20" rx="10"></rect>
//                         <svg id={`sliderInner-${props.customIndex}`} viewBox="0 0 20 20" fill="none">
//                             <path fill="rgba(128, 132, 142, 1)"
//                                 d="M5.13231 6.72963L6.7233 5.13864L14.855 13.2704L13.264 14.8614L5.13231 6.72963Z">
//                             </path>
//                             <path fill="rgba(128, 132, 142, 1)"
//                                 d="M13.2704 5.13864L14.8614 6.72963L6.72963 14.8614L5.13864 13.2704L13.2704 5.13864Z">
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
//     // return (
//     //     <div className="server-op-margin-top-container">
//     //         <div className="sts-label-row">
//     //             <label className="sts-label" htmlFor={`:r${props.customIndex}:`}>{props.labelTagContents}</label>
//     //             <div className="sts-slide-control-wrapper">
//     //                 <div id={`stsslidecontrol-${props.customIndex}`} className="sts-slide-control" style={{ backgroundColor: "rgba(128, 132, 142, 1)" }}>
//     //                     <svg id={`slider32CRPX4-${props.customIndex}`} className="slider-32CRPX4" viewBox="0 0 28 20" preserveAspectRatio="xMinYMid meet" style={{ left: `${-3}px` }}>
//     //                         <rect id={`switchrect-${props.customIndex}`} fill="white" x="4" y="0" height="20" width="20" rx="10"></rect>
//     //                         <svg id={`sliderInner-${props.customIndex}`} viewBox="0 0 20 20" fill="none">
//     //                             <path fill="rgba(128, 132, 142, 1)"
//     //                                 d="M5.13231 6.72963L6.7233 5.13864L14.855 13.2704L13.264 14.8614L5.13231 6.72963Z">
//     //                             </path>
//     //                             <path fill="rgba(128, 132, 142, 1)"
//     //                                 d="M13.2704 5.13864L14.8614 6.72963L6.72963 14.8614L5.13864 13.2704L13.2704 5.13864Z">
//     //                             </path>
//     //                         </svg>
//     //                     </svg>
//     //                     <input id={`:r${props.customIndex}:`} type="checkbox" className="sts-slider" checked={props.checkedState}
//     //                         onChange={() => {
//     //                             props.setCheckedState(!props.checkedState);
//     //                             handleThisAnimationsMap(props.customIndex, props.checkedState);
//     //                         }}
//     //                     />
//     //                 </div>
//     //             </div>
//     //         </div>
//     //     </div>

//     // );

// };

// export default StrifeToggleSwitch;