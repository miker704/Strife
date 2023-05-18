// import React from "react";
// import defaultPFP from '../../../app/assets/images/discord_PFP.svg';
// import { Link } from "react-router-dom";
// class TestPage extends React.Component {
//     constructor (props) {
//         super(props);
//         this.selectChannelTypes = this.selectChannelTypes.bind(this);
//     }

//     selectChannelTypes (channels) {
//         let channelHash = new Object();

//         for (let i of channels) {
//             channelHash[i.channel_cat_name] = [];
//         }
//         for (let i of channels) {
//             channelHash[i.channel_cat_name].push(i)
//         }

//         return channelHash;

//     }

// import React from "react";
// // import defaultPFP from '../../../app/assets/images/discord_PFP.svg';
// import { useState } from "react";
// import InputLabel from '@mui/material/InputLabel';
// import MenuItem from '@mui/material/MenuItem';
// import FormControl from '@mui/material/FormControl';
// import Select from '@mui/material/Select';
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// import SvgIcon from "@mui/material/SvgIcon";
// import { styled } from "@mui/material/styles";
// import Slider from '@mui/material/Slider';
// import Box from '@mui/material/Box';

// import ReactTooltip from "react-tooltip";


// const SlowModeSlider = styled(Slider)(({ theme }) => ({
//     '& .MuiSlider-rail': {
//         'opacity': '1',
//         'forcedColorAdjust': 'none',
//         'outline': '0',
//         'position': 'relative',
//         'height': '8px',
//         'borderRadius': '4px',
//         'display': 'block',
//         'overflow': 'hidden',
//         'boxSizing': 'border-box',
//         'backgroundColor': '#4e5058',
//         'width': '101%',
//         'transform': 'translate(0px,50%)',
//     },
//     '& .MuiSlider-mark': {
//         'height': `24px`,
//         'width': `2px`,
//         'outline': '0',
//         'boxSizing': 'border-box',
//         'background': '#4e5058',
//         'display': 'flex',
//         'flexDirection': 'column',
//         'alignItems': 'center',
//         'borderRadius': '0px',
//         'userSelect': 'none',
//         'position': 'absolute',
//         'forcedColorAdjust': 'none',
//         'justifyContent': 'center',
//         'top': '24px',
//         'opacity': '1',
//     },

//     '& .MuiSlider-track': {
//         'color': '#5865f2',
//         'boxSizing': 'border-box',
//         'outline': '0',
//         'forcedColorAdjust': 'none',
//         'height': '8px',
//         'transform': 'translate(-4px,50%)',
//     },
//     '& .MuiSlider-thumb': {
//         'forcedColorAdjust': 'none',
//         'outline': '0',
//         'boxSizing': 'border-box',
//         'position': 'absolute',
//         'width': '10px',
//         'height': '24px',
//         'marginLeft': '0px',
//         'top': '80%',
//         'marginTop': '0px',
//         'borderRadius': '3px',
//         'cursor': 'ew-resize',
//         'boxShadow': '0 3px 1px 0 rgba(0, 0, 0, 0.05), 0 2px 2px 0 rgba(0, 0, 0, 0.1), 0 3px 3px 0 rgba(0, 0, 0, 0.05)',
//         'backgroundColor': 'white',
//         'border': '1px solid #e3e5e8',
//     },

//     '& .MuiSlider-markLabel': {
//         'color': '#949aa4',
//         'forcedColorAdjust': 'none',
//         'outline': '0',
//         'boxSizing': 'border-box',
//         'paddingLeft': '1px',
//         'fontWeight': '700',
//         'fontSize': '10px',
//         'marginBottom': '4px',
//         'minHeight': '10px',
//         'fontFamily': "gg sans",
//         'top': '-6px',
//     },
//     '& .MuiSlider-thumb.Mui-focusVisible, .MuiSlider-thumb:hover, .MuiSlider-thumb.Mui-active': {
//         'boxShadow': 'none !important'
//     }
// }));


// const SelectRegion = styled(Select)(({ theme }) => ({

//     fontSize: '16px',
//     lineHeight: '20px',
//     fontFamily: "gg sans",
//     fontWeight: '400',
//     color: '#dbdee1',

//     '.MuiSelect-select': {
//         backgroundColor: '#1e1f22',
//         '.selectRegionSvgCheckMark': {
//             display: 'none !important',
//         }
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
//         padding: '10px 8px 8px 10px',
//     }

// }));






// const TestPage1 = (props) => {

//     const [videoQuality, setvideoQuality] = useState("Auto");
//     const [hideActivity, setHideActivity] = useState("3 Days");
//     const handleVideoSelection = (e) => {
//         setvideoQuality(e.target.value);
//     }

//     const [region, setRegion] = useState("Automatic");
//     const handleRegionChange = (e) => {
//         setRegion(e.target.value);
//     }

//     const handleHideActivity = (e) => {
//         setHideActivity(e.target.value);
//     }


//     const SelectChevron = (props) => {
//         return (
//             <SvgIcon {...props} aria-hidden="true" role="img" width="24" height="24" viewBox="0 0 24 24">
//                 <path fill="currentColor" d="M16.59 8.59003L12 13.17L7.41 8.59003L6 10L12 16L18 10L16.59 8.59003Z">
//                 </path>
//             </SvgIcon>
//         );
//     }

//     const hideActivityChoices = [
//         "1 Hour",
//         "24 Hours",
//         "3 Days",
//         "1 Week"
//     ]

//     const menuActivityProps = {
//         PaperProps: {
//             sx: {
//                 "& .MuiMenuItem-root": {
//                     cursor: 'pointer',
//                     color: '#dbdee1',
//                     fontWeight: '500',
//                     fontSize: '16px',
//                     fontFamily: 'gg sans',

//                     padding: '8px',
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
//                 // "& .MuiMenuItem-root.Mui-selected:hover": {
//                 //     backgroundColor: 'rgba(78, 80,88,0.6)',
//                 //     color: 'white',
//                 // },
//                 // "& .MuiMenuItem-root.Mui-selected:focus": {
//                 //     backgroundColor: 'rgba(78, 80,88,0.6)',
//                 //     color: 'white',
//                 // },
//                 // "& .MuiMenuItem-root.Mui-selected:focus-within": {
//                 //     backgroundColor: 'rgba(78, 80,88,0.6)',
//                 //     color: 'white',
//                 // },
//                 // "& .MuiMenuItem-root.Mui-selected:active": {
//                 //     backgroundColor: 'rgba(78, 80,88,0.6)',
//                 //     color: 'white',
//                 // },

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
//                 // overFlow: 'hidden scroll',
//                 boxSizing: 'border-box',
//                 border: '1px solid rgb(30,31,34)',
//                 borderRadius: '0 0 4px 4px',
//             },
//         },
//     }



//     const regionNames = [
//         "Automatic",
//         "Brazil",
//         "Hong Kong",
//         "India",
//         "Japan",
//         "Rotterdam",
//         "Russia",
//         "Singapore",
//         "South Africa",
//         "Sydney",
//         "US Central",
//         "US East",
//         "US South",
//         "US West",
//     ]

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

//     const menuProps = {
//         PaperProps: {
//             sx: {
//                 "& .MuiMenuItem-root": {
//                     cursor: 'pointer',
//                     color: '#dbdee1',
//                     fontWeight: '500',
//                     fontSize: '16px',
//                     fontFamily: 'gg sans',

//                     padding: '8px',
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
//                 // "& .MuiMenuItem-root.Mui-selected:hover": {
//                 //     backgroundColor: 'rgba(78, 80,88,0.6)',
//                 //     color: 'white',
//                 // },
//                 // "& .MuiMenuItem-root.Mui-selected:focus": {
//                 //     backgroundColor: 'rgba(78, 80,88,0.6)',
//                 //     color: 'white',
//                 // },
//                 // "& .MuiMenuItem-root.Mui-selected:focus-within": {
//                 //     backgroundColor: 'rgba(78, 80,88,0.6)',
//                 //     color: 'white',
//                 // },
//                 // "& .MuiMenuItem-root.Mui-selected:active": {
//                 //     backgroundColor: 'rgba(78, 80,88,0.6)',
//                 //     color: 'white',
//                 // },

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
//                 // overFlow: 'hidden scroll',
//                 boxSizing: 'border-box',
//                 border: '1px solid rgb(30,31,34)',
//                 borderRadius: '0 0 4px 4px',
//             },
//         },
//     }

//     const [activitySliderValue, setActivitySliderValue] = useState(0);
//     const [finalActivitySliderValue, setFinalActivitySliderValue] = useState(0);
//     const activityMarks = [
//         {
//             value: 0,
//             label: 'Off'
//         },
//         {
//             value: 1,
//             label: '5s'
//         },
//         {
//             value: 2,
//             label: '10s'
//         },
//         {
//             value: 3,
//             label: '15s'
//         },
//         {
//             value: 4,
//             label: '30s'
//         },
//         {
//             value: 5,
//             label: '1m'
//         },
//         {
//             value: 6,
//             label: '2m'
//         },
//         {
//             value: 7,
//             label: '5m'
//         },
//         {
//             value: 8,
//             label: '10m'
//         },
//         {
//             value: 9,
//             label: '15m'
//         },
//         {
//             value: 10,
//             label: '30m'
//         },
//         {
//             value: 11,
//             label: '1h'
//         },
//         {
//             value: 12,
//             label: '2h'
//         },
//         {
//             value: 13,
//             label: '6h'
//         },

//     ];
//     const updateChannelActivitySlider = (e, value) => {
//         let ActivitySliderValues = {
//             0: 0,
//             1: 5,
//             2: 10,
//             3: 15,
//             4: 30,
//             5: 60,
//             6: 120,
//             7: 300,
//             8: 600,
//             9: 900,
//             10: 1800,
//             11: 3600,
//             12: 7200,
//             13: 21600,
//         }
//         setActivitySliderValue(value);
//         setFinalActivitySliderValue(ActivitySliderValues[value]);
//     }




//     return (
//         <div className="loading-screen-wrapper">
//             <div>
//                 <div style={{ display: "flex" }}>
//                     {/* <div id="rangeSlider" className="cs-slowmode-slider" role={'slider'}
//                         aria-valuemin={0}
//                         aria-valuemax={21600}
//                         aria-valuenow={0}
//                         aria-disabled={false}
//                         tabIndex={0}
//                     >

//                         <div className="cs-track">
//                             <div className="cs-mark" style={{ left: '0%' }}>
//                                 <div className="cs-mark-value">Off</div>
//                                 <div className="cs-mark-dash"></div>
//                             </div>
//                             <div className="cs-mark" style={{ left: '7.69231%' }}>
//                                 <div className="cs-mark-value">5s</div>
//                                 <div className="cs-mark-dash"></div>
//                             </div>
//                             <div className="cs-mark" style={{ left: '15.3846%' }}>
//                                 <div className="cs-mark-value">10s</div>
//                                 <div className="cs-mark-dash"></div>
//                             </div>
//                             <div className="cs-mark" style={{ left: '23.0769%' }}>
//                                 <div className="cs-mark-value">15s</div>
//                                 <div className="cs-mark-dash"></div>
//                             </div>
//                             <div className="cs-mark" style={{ left: '30.7692%' }}>
//                                 <div className="cs-mark-value">30s</div>
//                                 <div className="cs-mark-dash"></div>
//                             </div>
//                             <div className="cs-mark" style={{ left: '38.4615%' }}>
//                                 <div className="cs-mark-value">1m</div>
//                                 <div className="cs-mark-dash"></div>
//                             </div>
//                             <div className="cs-mark" style={{ left: '46.1538%' }}>
//                                 <div className="cs-mark-value">2m</div>
//                                 <div className="cs-mark-dash"></div>
//                             </div>
//                             <div className="cs-mark" style={{ left: '53.8462%' }}>
//                                 <div className="cs-mark-value">5m</div>
//                                 <div className="cs-mark-dash"></div>
//                             </div>
//                             <div className="cs-mark" style={{ left: '61.5385%' }}>
//                                 <div className="cs-mark-value">10m</div>
//                                 <div className="cs-mark-dash"></div>
//                             </div>
//                             <div className="cs-mark" style={{ left: '69.2308%' }}>
//                                 <div className="cs-mark-value">15m</div>
//                                 <div className="cs-mark-dash"></div>
//                             </div>
//                             <div className="cs-mark" style={{ left: '76.9231%' }}>
//                                 <div className="cs-mark-value">30m</div>
//                                 <div className="cs-mark-dash"></div>
//                             </div>
//                             <div className="cs-mark" style={{ left: '84.6154%' }}>
//                                 <div className="cs-mark-value">1h</div>
//                                 <div className="cs-mark-dash"></div>
//                             </div>
//                             <div className="cs-mark" style={{ left: '92.3077%' }}>
//                                 <div className="cs-mark-value">2h</div>
//                                 <div className="cs-mark-dash"></div>
//                             </div>
//                             <div className="cs-mark" style={{ left: '100%' }}>
//                                 <div className="cs-mark-value">6h</div>
//                                 <div className="cs-mark-dash"></div>
//                             </div>
//                         </div>
//                         <div className="cs-slider-bar">
//                             <div className="cs-slider-bar-fill" style={{ width: '0%' }}></div>
//                         </div>
//                         <div className="cs-track-bar">
//                             <div draggable={true} id="grabber" className="cs-grabber" style={{ left: '0%' }}></div>
//                         </div>
//                     </div> */}

//                     {

//                         /* <div>
//                             <div className="csm-split-flex-container">
//                                 <div>
//                                     <h3 className="cs-op-div-fjs-h5">VIDEO QUALITY</h3>
//                                     <div role={'radiogroup'} className="csm-vQ-rad-group">
//                                         <div className={`csm-vq-rad-item ${videoQuality === 'Auto' ? `checked` : ``}`} onClick={() => setvideoQuality('Auto')}>
//                                             <div className="csm-vq-rad-item-bar">
//                                                 <div>
//                                                     <svg aria-hidden="true" role="img" width="24" height="24" viewBox="0 0 24 24">
//                                                         <path fillRule="evenodd" clipRule="evenodd" d="M12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172
//                                                          4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715
//                                                           2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" fill="currentColor">
//                                                         </path>
//                                                         <circle cx="12" cy="12" r="5" className={`csm-rad-item ${videoQuality === 'Auto' ? `fill` : ``}`} fill="currentColor">
//                                                         </circle>
//                                                     </svg>
//                                                 </div>
//                                                 <div className="csm-vq-rad-item-info">
//                                                     <div className="csm-rad-item-text">Auto</div>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                         <div className={`csm-vq-rad-item ${videoQuality === '720P' ? `checked` : ``}`} onClick={() => setvideoQuality('720P')}>
//                                             <div className="csm-vq-rad-item-bar">
//                                                 <div>
//                                                     <svg aria-hidden="true" role="img" width="24" height="24" viewBox="0 0 24 24">
//                                                         <path fillRule="evenodd" clipRule="evenodd" d="M12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172
//                                                          4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715
//                                                           2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" fill="currentColor">
//                                                         </path>
//                                                         <circle cx="12" cy="12" r="5" className={`csm-rad-item ${videoQuality === '720P' ? `fill` : ``}`} fill="currentColor">
//                                                         </circle>
//                                                     </svg>
//                                                 </div>
//                                                 <div className="csm-vq-rad-item-info">
//                                                     <div className="csm-rad-item-text">720P</div>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div>
//                                 <div className="cs-inactive-sub-info">
//                                     Sets camera video quality for all channel participants. Choose{`${" "}`}
//                                     <strong>Auto</strong>
//                                     for optimal performance.
//                                 </div>
//                             </div>
//                         </div> */
//                     }


//                     <li className={`chat-message-item`}  >

//                         <div className="message-wrapper1">
//                             <div className="message-wrapper-contents">
//                                 {/* 
//                             <div className={`${messageAuthor.photo === undefined ?
//                                 `chat-user-pfp-svg-render color-${messageAuthor.color_tag}` :
//                                 `chat-member-avatar-img`}`}>
//                                 <img src={`${messageAuthor.photo === undefined
//                                     ? render_User_PFP : messageAuthor.photo}`} alt="SMPFP" />
//                             </div> */}

//                                 <h2 className="chat-member-username-header">
//                                     <span className="chat-member-username-wrap">
//                                         {/* <span className="chat-member-username">{message.authorName}</span> */}
//                                         <span className="chat-member-username">messageAuthorName</span>

//                                     </span>
//                                     <span className="chat-message-timestamp-wrap">
//                                         <p className="chat-message-timestamp">
//                                             {/* {formatTime(message.created_at)} */}
//                                             5:23
//                                         </p>
//                                     </span>
//                                 </h2>
//                                 <div className="chat-message">
//                                     {/* {messageBody()} */}
//                                     mooo mooo mooo mooo
//                                 </div>
//                             </div>
//                             <div className="message-accessories"></div>
//                             <div className="message-accessories-button-container">
//                                 <div className="message-accessories-button-layer">
//                                     <div className={`message-accessories-button-wrapper1`} >
//                                         <div className="message-accessories-button">
//                                             <svg className="copy-msg-id-icon" aria-hidden="true" role="img" width="24" height="24" viewBox="0 0 24 24">
//                                                 <path fill="currentColor" fillRule="evenodd" clipRule="evenodd" d="M3.37868 2.87868C3.94129 2.31607 4.70435 
//                                   2 5.5 2H19.5C20.2956 2 21.0587 2.31607 21.6213 2.87868C22.1839 3.44129 22.5 4.20435 22.5 5V19C22.5 19.7956 
//                                   22.1839 20.5587 21.6213 21.1213C21.0587 21.6839 20.2956 22 19.5 22H5.5C4.70435 22 3.94129 21.6839 3.37868 21.1213C2.81607 
//                                   20.5587 2.5 19.7956 2.5 19V5C2.5 4.20435 2.81607 3.44129 3.37868 2.87868ZM7.65332 16.3125H9.47832V7.6875H7.65332V16.3125ZM11.23 
//                                   7.6875V16.3125H14.2925C15.6008 16.3125 16.6091 15.9417 17.3175 15.2C18.0341 14.4583 18.3925 13.3917 18.3925 12C18.3925 10.6083 
//                                   18.0341 9.54167 17.3175 8.8C16.6091 8.05833 15.6008 7.6875 14.2925 7.6875H11.23ZM15.955 14.0625C15.5466 14.4625 14.9925 14.6625 
//                                   14.2925 14.6625H13.055V9.3375H14.2925C14.9925 9.3375 15.5466 9.5375 15.955 9.9375C16.3633 10.3375 16.5675 11.025 16.5675 12C16.5675
//                                    12.975 16.3633 13.6625 15.955 14.0625Z">
//                                                 </path>
//                                             </svg>
//                                         </div>
//                                         <div className="message-accessories-button">
//                                             <svg className="copy-msg-link-icon" aria-hidden="true" role="img" width="24" height="24" viewBox="0 0 24 24">
//                                                 <g fill="none" fillRule="evenodd">
//                                                     <path fill="currentColor" d="M10.59 13.41c.41.39.41 1.03 0 1.42-.39.39-1.03.39-1.42 0a5.003 5.003 0 0 1 
//                                               0-7.07l3.54-3.54a5.003 5.003 0 0 1
//                                               7.07 0 5.003 5.003 0 0 1 0 7.07l-1.49 1.49c.01-.82-.12-1.64-.4-2.42l.47-.48a2.982 2.982 0 0 0 
//                                               0-4.24 2.982 2.982 0 0 0-4.24 0l-3.53 
//                                               3.53a2.982 2.982 0 0 0 0 4.24zm2.82-4.24c.39-.39 1.03-.39 1.42 0a5.003 5.003 0 0 1 0 7.07l-3.54 
//                                               3.54a5.003 5.003 0 0 1-7.07 0 5.003
//                                                5.003 0 0 1 0-7.07l1.49-1.49c-.01.82.12 1.64.4 2.43l-.47.47a2.982 2.982 0 0 0 0 4.24 2.982 2.982 
//                                                0 0 0 4.24 0l3.53-3.53a2.982 2.982 
//                                                0 0 0 0-4.24.973.973 0 0 1 0-1.42z">
//                                                     </path>
//                                                     <rect width="24" height="24">
//                                                     </rect>
//                                                 </g>
//                                             </svg>
//                                         </div>
//                                         <div className="message-accessories-button">
//                                             <svg className="mark-msg-unread-icon" aria-hidden="true" role="img" width="24" height="24" viewBox="0 0 24 24">
//                                                 <path fill="currentColor" d="M14 3H20C21 3 22.0001 4 22.0001 5V19.0003C22.0001 20 21 21 20 21H14C13 21 6 13 6 13H2V11H6C6 11 13 3 14 3Z">
//                                                 </path>
//                                             </svg>
//                                         </div>
//                                         <div className="message-accessories-button">
//                                             <svg className="reply-to-msg-icon" width="24" height="24" viewBox="0 0 24 24">
//                                                 <path d="M10 8.26667V4L3 11.4667L10 18.9333V14.56C15 14.56 18.5 16.2667 21 20C20 14.6667 17 9.33333 10 8.26667Z" fill="currentColor">
//                                                 </path>
//                                             </svg>
//                                         </div>
//                                         <div className="message-accessories-button">
//                                             <svg className="add-reaction-icon" aria-hidden="true" role="img" width="18" height="18" viewBox="0 0 24 24">
//                                                 <path fillRule="evenodd" clipRule="evenodd" d="M12.1151 2.00065C12.0768 2.00022 12.0384 2 12 2C6.477 2 2 6.477 
//                                       2 12C2 17.522 6.477 22 12 22C17.523 22 22 17.522 22 12C22 11.9616 21.9998 11.9232 21.9993 11.8849C21.1882 12.1737
//                                       20.3146 12.3309 19.4043 12.3309C15.1323 12.3309 11.6691 8.86771 11.6691 4.59565C11.6691 3.68536 11.8263 2.8118
//                                       12.1151 2.00065ZM7.92105 11.8023C7.92105 12.7107 7.18468 13.4471 6.27631 13.4471C5.36795 13.4471 4.63158 12.7107
//                                       4.63158 11.8023C4.63158 10.894 5.36795 10.1576 6.27631 10.1576C7.18467 10.1576 7.92105 10.894 7.92105 11.8023ZM10.5217
//                                       14.5171C10.3859 13.9893 9.84786 13.6716 9.32005 13.8074C8.79223 13.9433 8.47448 14.4813 8.61033 15.0091C9.01196 
//                                       16.5695 10.4273 17.7236 12.1147 17.7236C13.8021 17.7236 15.2174 16.5695 15.6191 15.0091C15.7549 14.4813 15.4372 
//                                       13.9433 14.9093 13.8074C14.3815 13.6716 13.8435 13.9893 13.7077 14.5171C13.525 15.2267 12.8797 15.7499 12.1147 
//                                       15.7499C11.3497 15.7499 10.7044 15.2267 10.5217 14.5171Z" fill="currentColor">
//                                                 </path>
//                                                 <path d="M18.5 2C17.9477 2 17.5 2.44772 17.5 3V4.5H16C15.4477 4.5 15 4.94771 15 5.5C15 6.05228 15.4477 6.5 16 6.5H17.5V8C17.5 
//                                      8.55228 17.9477 9 18.5 9C19.0523 9 19.5 8.55229 19.5 8V6.5H21C21.5523 6.5 22 6.05229 22 5.5C22 4.94772 21.5523 4.5 21 4.5H19.5V3C19.5
//                                      2.44772 19.0523 2 18.5 2Z" fill="currentColor">
//                                                 </path>
//                                             </svg>
//                                         </div>

//                                         <div className="message-accessories-button">
//                                             <svg className="add-super-reaction-icon" data-tip data-for="add-super-reaction" aria-hidden="true" role="img" width="18" height="18" viewBox="0 0 24 24">
//                                                 <path fillRule="evenodd" clipRule="evenodd" d="M20.3397 14.2379C21.2318 14.4731 22.1292 14.5474 23 14.4789C22.9906 14.5151 22.9809 
//                                  14.5514 22.9711 14.5876C21.5194 19.9201 15.9496 23.086 10.5309 21.6569C10.3451 21.6079 10.1619 21.5542 9.98145 21.4958C7.94618 20.8378
//                                   5.90941 20 3.77041 20H3.5C2.67157 20 2 19.3284 2 18.5C2 17.6716 2.67157 17 3.5 17C4.75918 17 3.9661 15.8584 3.47514 14.7655C3.28101 
//                                   14.3334 2.86615 14 2.39244 14H1.5C0.671573 14 0 13.3284 0 12.5C0 11.6716 0.671573 11 1.5 11V11C2.38174 11 3.10559 10.3274 3.33171
//                                    9.47516C3.33726 9.45427 3.34287 9.43338 3.34856 9.41249V9.41249C3.53406 8.7311 2.9812 8.0187 2.44976 7.55366C2.17543 7.31362 2 6.96872
//                                     2 6.5C2 5.67157 2.67157 5 3.5 5V5C5.03983 5 6.4765 4.31861 7.78941 3.51404C10.0926 2.10261 12.9612 1.59744 15.7887 2.34316C15.827 2.35324
//                                      15.8651 2.36352 15.9031 2.374C15.4064 3.08271 15.0224 3.88574 14.7831 4.76493C13.6598 8.89108 16.1476 13.1323 20.3397 14.2379ZM9.26206
//                                       8.71607C8.70747 8.56981 8.13976 8.79579 7.83448 9.23964C7.62045 9.55083 7.19184 9.86027 6.69655 9.72964C6.24033 9.60932 5.88292 9.10507
//                                        6.13732 8.60064C6.78216 7.32202 8.27206 6.62396 9.72714 7.00771C11.1822 7.39146 12.1179 8.72923 12.0268 10.1539C11.9909 10.7159 11.4252
//                                         10.9767 10.969 10.8564C10.4737 10.7258 10.2597 10.2469 10.2324 9.87205C10.1935 9.33743 9.81666 8.86234 9.26206 8.71607ZM16.3671 
//                                         14.9268C16.17 14.5422 15.7892 14.2404 15.3308 14.1195L10.6411 12.8827C10.1826 12.7618 9.69947 12.8357 9.33352 13.0718C8.95878 
//                                         13.3135 8.70829 13.7284 8.7613 14.2422C8.93054 15.8827 10.1055 17.3278 11.821 17.7802C13.5365 18.2326 15.2881 17.5594 16.2681 
//                                         16.222C16.575 15.8031 16.5688 15.3205 16.3671 14.9268Z" fill="currentColor">
//                                                 </path>
//                                                 <path d="M20.5 4C19.9477 4 19.5 4.44772 19.5 5V6.5H18C17.4477 6.5 17 6.94771 17 7.5C17 8.05228 17.4477 8.5 18 8.5H19.5V10C19.5 
//                                      10.5523 19.9477 11 20.5 11C21.0523 11 21.5 10.5523 21.5 10V8.5H23C23.5523 8.5 24 8.05229 24 7.5C24 6.94772 23.5523 6.5 23 6.5H21.5V5C21.5
//                                      4.44772 21.0523 4 20.5 4Z" fill="currentColor">
//                                                 </path>
//                                             </svg>
//                                         </div>

//                                         <div className="message-accessories-button">
//                                             <svg className="pen-icon" aria-hidden="true" role="img" width="16" height="16" viewBox="0 0 24 24">
//                                                 <path fillRule="evenodd" clipRule="evenodd" d="M19.2929 9.8299L19.9409 9.18278C21.353 7.77064 21.353 5.47197 19.9409 
//                                                  4.05892C18.5287 2.64678 16.2292 2.64678 14.817 4.05892L14.1699 4.70694L19.2929 9.8299ZM12.8962 5.97688L5.18469 13.6906L10.3085
//                                                   18.813L18.0201 11.0992L12.8962 5.97688ZM4.11851 20.9704L8.75906 19.8112L4.18692 15.239L3.02678 19.8796C2.95028 20.1856 3.04028 
//                                                   20.5105 3.26349 20.7337C3.48669 20.9569 3.8116 21.046 4.11851 20.9704Z" fill="currentColor">
//                                                 </path>
//                                             </svg>
//                                         </div>
//                                         <div className="message-accessories-button">
//                                             <svg className="edit-msg-create-thread-icon" aria-hidden="true" role="img" width="24" height="24" viewBox="0 0 24 24" fill="none">
//                                                 <path fill="currentColor" d="M5.43309 21C5.35842 21 5.30189 20.9325 5.31494 20.859L5.99991 17H2.14274C2.06819 17 2.01168 16.9327
//                                           2.02453 16.8593L2.33253 15.0993C2.34258 15.0419 2.39244 15 2.45074 15H6.34991L7.40991 9H3.55274C3.47819 9 3.42168 8.93274 3.43453
//                                            8.85931L3.74253 7.09931C3.75258 7.04189 3.80244 7 3.86074 7H7.75991L8.45234 3.09903C8.46251 3.04174 8.51231 3 8.57049 
//                                            3H10.3267C10.4014 3 10.4579 3.06746 10.4449 3.14097L9.75991 7H15.7599L16.4523 3.09903C16.4625 3.04174 16.5123 3 16.5705 
//                                            3H18.3267C18.4014 3 18.4579 3.06746 18.4449 3.14097L17.7599 7H21.6171C21.6916 7 21.7481 7.06725 21.7353 7.14069L21.4273 8.90069C21.4172 
//                                            8.95811 21.3674 9 21.3091 9H17.4099L17.0495 11.04H15.05L15.4104 9H9.41035L8.35035 15H10.5599V17H7.99991L7.30749 20.901C7.29732 20.9583 
//                                            7.24752 21 7.18934 21H5.43309Z">
//                                                 </path>
//                                                 <path fill="currentColor" d="M13.4399 12.96C12.9097 12.96 12.4799 13.3898 12.4799 13.92V20.2213C12.4799 20.7515 12.9097 21.1813
//                                      13.4399 21.1813H14.3999C14.5325 21.1813 14.6399 21.2887 14.6399 21.4213V23.4597C14.6399 23.6677 14.8865 23.7773 15.0408 23.6378L17.4858
//                                       21.4289C17.6622 21.2695 17.8916 21.1813 18.1294 21.1813H22.5599C23.0901 21.1813 23.5199 20.7515 23.5199 20.2213V13.92C23.5199 13.3898 
//                                       23.0901 12.96 22.5599 12.96H13.4399Z">
//                                                 </path>
//                                             </svg>
//                                         </div>
//                                         <div className="message-accessories-button">
//                                             <svg className="edit-msg-more-options-icon" aria-hidden="true" role="img" width="24" height="24" viewBox="0 0 24 24">
//                                                 <path fill="currentColor" fillRule="evenodd" clipRule="evenodd" d="M7 12.001C7 10.8964 6.10457 10.001 5 10.001C3.89543 
//                                     10.001 3 10.8964 3 12.001C3 13.1055 3.89543 14.001 5 14.001C6.10457 14.001 7 13.1055 7 12.001ZM14 12.001C14 10.8964 
//                                     13.1046 10.001 12 10.001C10.8954 10.001 10 10.8964 10 12.001C10 13.1055 10.8954 14.001 12 14.001C13.1046 14.001 14 
//                                     13.1055 14 12.001ZM19 10.001C20.1046 10.001 21 10.8964 21 12.001C21 13.1055 20.1046 14.001 19 14.001C17.8954 14.001 
//                                     17 13.1055 17 12.001C17 10.8964 17.8954 10.001 19 10.001Z">
//                                                 </path>
//                                             </svg>
//                                         </div>
//                                         <div className="message-accessories-button">
//                                             <svg className="delete-msg-icon danger-warning-del-msg" aria-hidden="true" role="img" width="24" height="24" viewBox="0 0 24 24">
//                                                 <path fill="currentColor" d="M15 3.999V2H9V3.999H3V5.999H21V3.999H15Z">
//                                                 </path>
//                                                 <path fill="currentColor" d="M5 6.99902V18.999C5 20.101 5.897 20.999 7 20.999H17C18.103 20.999 19 20.101
//                                                 19 18.999V6.99902H5ZM11 17H9V11H11V17ZM15 17H13V11H15V17Z">
//                                                 </path>
//                                             </svg>
//                                         </div>

//                                     </div>

//                                 </div>
//                                 <ReactTooltip
//                                     className="add-a-super-reaction-tool-tip"
//                                     id="add-super-reaction"
//                                     place="top"
//                                     effect="solid">

//                                     <div>
//                                         <svg class="nitroWheel-1wx4C0" aria-hidden="true" role="img" width="24" height="24" viewBox="0 0 24 24">
//                                             <path fill="currentColor" d="M2.98966977,9.35789159 C2.98966977,9.77582472 2.63442946,10.1240466
//                                      2.20807287,10.1240466 L1.78171628,10.1240466 C1.35535969,10.1240466 0.999948837,9.77582472
//                                       0.999948837,9.35789159 C0.999948837,8.93995846 1.35535969,8.59173658 1.78171628,8.59173658
//                                        L2.20807287,8.59173658 C2.63442946,8.59173658 2.98966977,8.93995846 2.98966977,9.35789159 
//                                        Z M22.2467643,9.14892503 C24.0942527,12.9800344 22.3888264,17.5772989 18.3384388,19.3882867
//                                         C14.4302837,21.1297305 9.74036124,19.457998 7.9638186,15.6268886 C7.60857829,14.8607335 
//                                         7.3954,14.0248673 7.32428372,13.189001 L5.76091938,13.189001 C5.33456279,13.189001 4.97932248,12.840612 
//                                         4.97932248,12.4226788 C4.97932248,12.0047457 5.33456279,11.6565238 5.76091938,11.6565238 L8.03493488,11.6565238
//                                          C8.46129147,11.6565238 8.81653178,11.3083019 8.81653178,10.8903688 C8.81653178,10.4724357 8.46129147,10.1240466
//                                           8.03493488,10.1240466 L4.41090388,10.1240466 C3.98454729,10.1240466 3.62913643,9.77582472 3.62913643,9.35789159
//                                            C3.62913643,8.93995846 3.98454729,8.59173658 4.41090388,8.59173658 L9.45606667,8.59173658 C9.88242326,8.59173658
//                                             10.2376636,8.24334752 10.2376636,7.82541439 C10.2376636,7.40748126 9.88242326,7.05925937 9.45606667,7.05925937
//                                              L7.3954,7.05925937 C6.75586512,7.05925937 6.18727597,6.57161499 6.18727597,5.87517123 C6.18727597,5.24827153
//                                               6.68474884,4.69091591 7.3954,4.69091591 L15.4250589,4.69091591 C18.267493,4.8303384 20.9676946,6.43235968 
//                                               22.2467643,9.14892503 Z M13.2662961,8.38056332 C11.0193969,9.3919615 10.0341721,11.9973566 11.065955,14.1998642
//                                                C12.097738,16.4023718 14.755645,17.3681317 17.0025442,16.3567335 C19.249614,15.3453354 20.2346682,12.7399402
//                                                 19.2028853,10.5374326 C18.1711023,8.33492503 15.5131953,7.36916515 13.2662961,8.38056332 Z M16.8462589,9.84548582
//                                                  L18.2673907,12.2138293 C18.338507,12.3530846 18.338507,12.4227958 18.2673907,12.5620512 L16.8462589,14.9303946
//                                                   C16.7751426,15.0696499 16.6330806,15.0696499 16.5619643,15.0696499 L13.7906465,15.0696499 C13.6485845,15.0696499
//                                                    13.5774682,14.9999387 13.5065225,14.9303946 L12.0852202,12.5620512 C12.0142744,12.4227958 12.0142744,12.3530846
//                                                     12.0852202,12.2138293 L13.5065225,9.84548582 C13.5774682,9.7062305 13.7197008,9.7062305 13.7906465,9.7062305 
//                                                     L16.5619643,9.7062305 C16.7041969,9.63651925 16.7751426,9.7062305 16.8462589,9.84548582 Z">
//                                             </path>
//                                         </svg>
//                                     </div>
//                                 </ReactTooltip>
//                             </div>
//                         </div>
//                     </li>
//                 </div>
//             </div>
//         </div >
//     )
// }

// export default TestPage1;





//     render () {




//         //     )



//         //         let channels = {
//         //             "4": {

//         //                 "id": 4,
//         //                 "channel_name": "general",
//         //                 "server_id": 3,
//         //                 "channel_type": '1',
//         //                 'channel_cat_name': 'text'

//         //             },
//         //             "14": {

//         //                 "id": 14,
//         //                 "channel_name": "Ayce's Circle",
//         //                 "server_id": 3,
//         //                 "channel_type": '1',
//         //                 'channel_cat_name': 'text'

//         //             },
//         //             "1": {

//         //                 "id": 1,
//         //                 "channel_name": "school help",
//         //                 "server_id": 3,
//         //                 "channel_type": '2',
//         //                 'channel_cat_name': 'school'

//         //             },
//         //             "2": {

//         //                 "id": 2,
//         //                 "channel_name": "AYCE CHAT",
//         //                 "server_id": 3,
//         //                 "channel_type": '2',
//         //                 'channel_cat_name': 'voice'

//         //             },
//         //             "3": {

//         //                 "id": 3,
//         //                 "channel_name": "code help",
//         //                 "server_id": 3,
//         //                 "channel_type": '2',
//         //                 'channel_cat_name': 'coding'

//         //             },
//         //             "5": {

//         //                 "id": 5,
//         //                 "channel_name": "coding",
//         //                 "server_id": 3,
//         //                 "channel_type": '1',
//         //                 'channel_cat_name': 'coding'

//         //             },
//         //             "6": {

//         //                 "id": 6,
//         //                 "channel_name": "school",
//         //                 "server_id": 3,
//         //                 "channel_type": '1',
//         //                 'channel_cat_name': 'school'

//         //             },
//         //             "7": {

//         //                 "id": 7,
//         //                 "channel_name": "text me",
//         //                 "server_id": 3,
//         //                 "channel_type": '1',
//         //                 'channel_cat_name': 'text'

//         //             },
//         //             "8": {

//         //                 "id": 8,
//         //                 "channel_name": "group chat",
//         //                 "server_id": 3,
//         //                 "channel_type": '2',
//         //                 'channel_cat_name': 'voice'

//         //             },
//         //             "9": {

//         //                 "id": 9,
//         //                 "channel_name": "general",
//         //                 "server_id": 3,
//         //                 "channel_type": '2',
//         //                 'channel_cat_name': 'game chat'

//         //             },
//         //             "10": {

//         //                 "id": 10,
//         //                 "channel_name": "text",
//         //                 "server_id": 3,
//         //                 "channel_type": '1',
//         //                 'channel_cat_name': 'default'

//         //             },

//         //         }


//         //         let cat_channels = [
//         //             [
//         //                 "school",
//         //                 [
//         //                     {
//         //                         "id": 1,
//         //                         "channel_name": "school help",
//         //                         "server_id": 3,
//         //                         "channel_type": "2",
//         //                         "channel_cat_name": "school"
//         //                     },
//         //                     {
//         //                         "id": 6,
//         //                         "channel_name": "school",
//         //                         "server_id": 3,
//         //                         "channel_type": "1",
//         //                         "channel_cat_name": "school"
//         //                     }
//         //                 ]
//         //             ],
//         //             [
//         //                 "voice",
//         //                 [
//         //                     {
//         //                         "id": 2,
//         //                         "channel_name": "AYCE CHAT",
//         //                         "server_id": 3,
//         //                         "channel_type": "2",
//         //                         "channel_cat_name": "voice"
//         //                     },
//         //                     {
//         //                         "id": 8,
//         //                         "channel_name": "group chat",
//         //                         "server_id": 3,
//         //                         "channel_type": "2",
//         //                         "channel_cat_name": "voice"
//         //                     }
//         //                 ]
//         //             ],
//         //             [
//         //                 "coding",
//         //                 [
//         //                     {
//         //                         "id": 3,
//         //                         "channel_name": "code help",
//         //                         "server_id": 3,
//         //                         "channel_type": "2",
//         //                         "channel_cat_name": "coding"
//         //                     },
//         //                     {
//         //                         "id": 5,
//         //                         "channel_name": "coding",
//         //                         "server_id": 3,
//         //                         "channel_type": "1",
//         //                         "channel_cat_name": "coding"
//         //                     }
//         //                 ]
//         //             ],
//         //             [
//         //                 "text",
//         //                 [
//         //                     {
//         //                         "id": 4,
//         //                         "channel_name": "general",
//         //                         "server_id": 3,
//         //                         "channel_type": "1",
//         //                         "channel_cat_name": "text"
//         //                     },
//         //                     {
//         //                         "id": 7,
//         //                         "channel_name": "text me",
//         //                         "server_id": 3,
//         //                         "channel_type": "1",
//         //                         "channel_cat_name": "text"
//         //                     },
//         //                     {
//         //                         "id": 14,
//         //                         "channel_name": "Ayce's Circle",
//         //                         "server_id": 3,
//         //                         "channel_type": "1",
//         //                         "channel_cat_name": "text"
//         //                     }
//         //                 ]
//         //             ],
//         //             [
//         //                 "game chat",
//         //                 [
//         //                     {
//         //                         "id": 9,
//         //                         "channel_name": "general",
//         //                         "server_id": 3,
//         //                         "channel_type": "2",
//         //                         "channel_cat_name": "game chat"
//         //                     }
//         //                 ]
//         //             ],
//         //             [
//         //                 "default",
//         //                 [
//         //                     {
//         //                         "id": 10,
//         //                         "channel_name": "text",
//         //                         "server_id": 3,
//         //                         "channel_type": "1",
//         //                         "channel_cat_name": "default"
//         //                     }
//         //                 ]
//         //             ]
//         //         ]

//         //         let voice_icon = <div className="def-channel-icon-container" >
//         //             <svg className="icon-speaker" aria-hidden="true" role="img" width="24" height="24" viewBox="0 0 24 24">
//         //                 <path fill="currentColor" fillRule="evenodd" clipRule="evenodd" d="M11.383 3.07904C11.009 2.92504 10.579 
//         // 3.01004 10.293 3.29604L6 8.00204H3C2.45 8.00204 2 8.45304 2 9.00204V15.002C2 15.552 2.45 16.002 3 16.002H6L10.293 
//         // 20.71C10.579 20.996 11.009 21.082 11.383 20.927C11.757 20.772 12 20.407 12 20.002V4.00204C12 3.59904 11.757 
//         // 3.23204 11.383 3.07904ZM14 5.00195V7.00195C16.757 7.00195 19 9.24595 19 12.002C19 14.759 16.757 17.002 14 
//         // 17.002V19.002C17.86 19.002 21 15.863 21 12.002C21 8.14295 17.86 5.00195 14 5.00195ZM14 9.00195C15.654 9.00195 
//         // 17 10.349 17 12.002C17 13.657 15.654 15.002 14 15.002V13.002C14.551 13.002 15 12.553 15 12.002C15 11.451 
//         // 14.551 11.002 14 11.002V9.00195Z" aria-hidden="true">
//         //                 </path>
//         //             </svg>

//         //         </div>


//         //         let chat_icon = <div className="def-channel-icon-container">
//         //             <svg width="24" height="24" viewBox="0 0 24 24" className="icon-2W8DHg" aria-hidden="true" role="img">
//         //                 <path fill="currentColor" fillRule="evenodd"
//         //                     clipRule="evenodd" d="M5.88657 21C5.57547 21 5.3399 20.7189 5.39427 20.4126L6.00001
//         // 17H2.59511C2.28449 17 2.04905 16.7198 2.10259 16.4138L2.27759 15.4138C2.31946 15.1746
//         // 2.52722 15 2.77011 15H6.35001L7.41001 9H4.00511C3.69449 9 3.45905 8.71977 3.51259 
//         // 8.41381L3.68759 7.41381C3.72946 7.17456 3.93722 7 4.18011 7H7.76001L8.39677 3.41262C8.43914
//         // 3.17391 8.64664 3 8.88907 3H9.87344C10.1845 3 10.4201 3.28107 10.3657 3.58738L9.76001
//         // 7H15.76L16.3968 3.41262C16.4391 3.17391 16.6466 3 16.8891 3H17.8734C18.1845 3 18.4201
//         // 3.28107 18.3657 3.58738L17.76 7H21.1649C21.4755 7 21.711 7.28023 21.6574 7.58619L21.4824
//         // 8.58619C21.4406 8.82544 21.2328 9 20.9899 9H17.41L16.35 15H19.7549C20.0655 15 20.301 15.2802
//         // 20.2474 15.5862L20.0724 16.5862C20.0306 16.8254 19.8228 17 19.5799 17H16L15.3632 20.5874C15.3209 20.8261
//         // 15.1134 21 14.8709 21H13.8866C13.5755 21 13.3399 20.7189 13.3943 20.4126L14 17H8.00001L7.36325
//         // 20.5874C7.32088 20.8261 7.11337 21 6.87094 21H5.88657ZM9.41045 9L8.35045 15H14.3504L15.4104
//         // 9H9.41045Z">
//         //                 </path>
//         //             </svg>
//         //         </div>



//         //         let channels_Array = Object.values(channels);


//         //         let channel_nav_bar_content = this.selectChannelTypes(channels_Array);



//         //         let channel_nav_bar_content_array = Object.entries(channel_nav_bar_content);

//         //         channel_nav_bar_content_array.map((channelCat, idx) => {
//         //             channelCat[1].map((channel, channelidx) => {

//         //             })
//         //         })


//         //         return (


//         //             <div className="channel-nav-bar">
//         //                 <div className="channel-nav-bar-container-wrapper">
//         //                     <div className="channel-nav-bar-top-container">
//         //                         <div className="channel-nav-bar-top-container-header">
//         //                             <div className="channel-nav-bar-header-content">
//         //                                 <h1 className="channel-nav-bar-h1">
//         //                                 </h1>
//         //                                 <div className="channel-nav-bar-top-button">

//         //                                 </div>
//         //                                 <div className="channel-nav-chevron" >
//         //                                     <svg width="18" height="18" className="icon-chevron" >
//         //                                         <g fill="none" fillRule="evenodd">
//         //                                             <path d="M0 0h18v18H0"></path>
//         //                                             <path stroke="currentColor" d="M4.5 4.5l9 9" strokeLinecap="round"></path>
//         //                                             <path stroke="currentColor" d="M13.5 4.5l-9 9" strokeLinecap="round"></path>
//         //                                         </g>
//         //                                     </svg>
//         //                                 </div>
//         //                             </div>
//         //                         </div>
//         //                     </div>
//         //                     <div className="channel-nav-sep"><div></div></div>
//         //                     <div className="channel-post-container">
//         //                         <div className="channel-unread">
//         //                             <div className="channel-unread-top">
//         //                                 <span className="channel-unread-text"></span>
//         //                             </div>
//         //                         </div>
//         //                     </div>
//         //                     <div className="channel-nav-scroller">
//         //                         {
//         //                             channel_nav_bar_content_array.map((channel_category, category_idx) => {



//         //                                 return (

//         //                                     <ul className="ul-channels">

//         //                                         <li className="channel-li-item-cat" key={category_idx}>
//         //                                             <div className="channel-li-icon">
//         //                                                 <div className="main-channel-content">
//         //                                                     <svg className="channel-icon-arrow" width="24" height="24" viewBox="0 0 24 24">
//         //                                                         <path fill="currentColor" fillRule="evenodd" clipRule="evenodd" d="M16.59 8.59004L12 13.17L7.41
//         //                                          8.59004L6 10L12 16L18 10L16.59 8.59004Z">
//         //                                                         </path>
//         //                                                     </svg>
//         //                                                     <h2 className="main-channel-content-h2">
//         //                                                         <div className="main-channel-h2">{channel_category[0]}</div>
//         //                                                     </h2>
//         //                                                 </div>
//         //                                                 <div className="channel-plus-div" >
//         //                                                     <button type="button" className="add-channel-button">
//         //                                                         <div className="add-channel-button-inner">
//         //                                                             <svg className="addButtonIcon" aria-hidden="true" role="img" width="18" height="18" viewBox="0 0 18 18">
//         //                                                                 <polygon fillRule="nonzero" fill="currentColor"
//         //                                                                     points="15 10 10 10 10 15 8 15 8 10 3 10 3 8 8 8 8 3 10 3 10 8 15 8">
//         //                                                                 </polygon>
//         //                                                             </svg>
//         //                                                         </div>
//         //                                                     </button>

//         //                                                 </div>
//         //                                             </div>
//         //                                         </li>
//         //                                         {channel_category[1].map((channel, channelidx) => {
//         //                                             let icon = channel.channel_type === '1' ? chat_icon : voice_icon;

//         //                                             return (
//         //                                                 <li className="default-channel-item" key={parseInt(channel.id)}>
//         //                                                     <div className="def-channel-wrap">
//         //                                                         <div className="def-channel-content">
//         //                                                             <Link to={`/testing/`} className="def-channel-a">
//         //                                                                 {icon}



//         //                                                                 <div className="default-channel-name-cont">
//         //                                                                     <div className="default-channel-name">
//         //                                                                         {channel.channel_name}
//         //                                                                     </div>
//         //                                                                 </div>
//         //                                                             </Link>
//         //                                                             <div className="child-buttons">
//         //                                                                 <div className="create-channel-invite-icon-wrapper" >
//         //                                                                     <svg className="create-channel-invite-icon" aria-hidden="true" role="img" width="16" height="16" viewBox="0 0 16 16">
//         //                                                                         <path fill="currentColor" d="M14 2H16V3H14V5H13V3H11V2H13V0H14V2Z"></path>
//         //                                                                         <path fill="currentColor" d="M6.5 8.00667C7.88 8.00667 9 6.88667 9 5.50667C9 4.12667 7.88 3.00667 6.5 
//         //                                             3.00667C5.12 3.00667 4 4.12667 4 5.50667C4 6.88667 5.12 8.00667 6.5 8.00667Z">

//         //                                                                         </path>
//         //                                                                         <path fill="currentColor" d="M6.5 8.34C3.26 8.34 1 9.98666 1 12.34V13.0067H12V12.34C12 9.98 9.74 8.34 6.5 8.34Z">
//         //                                                                         </path>
//         //                                                                     </svg>

//         //                                                                 </div>
//         //                                                                 <div className="channel-settings-wrapper" >
//         //                                                                     <svg className="channel-gear-icon" aria-hidden="true" role="img" width="16" height="16" viewBox="0 0 16 16">
//         //                                                                         <path fill="currentColor" fillRule="evenodd" clipRule="evenodd" d="M14 7V9C14 9 12.5867 9 12.5733 
//         //                                         9.00667C12.42 9.58667 12.1733 10.1267 11.84 10.6067L12.74 11.5067L11.4933 12.7533L10.5933 11.8533C10.1133
//         //                                          12.1867 9.57334 12.44 8.99334 12.5867V14H6.99334V12.58C6.41334 12.4333 5.87334 12.18 5.39334 11.8467L4.49333 
//         //                                          12.7467L3.24667 11.5L4.14667 10.6C3.81333 10.1267 3.56 9.58 3.41333 9H2V7H3.41333C3.56 6.42 3.81333 5.88 4.14667
//         //                                           5.4L3.24667 4.5L4.5 3.24667L5.4 4.14667C5.87334 3.81333 6.42 3.56 7 3.41333V2H9V3.41333C9.58 3.56667 10.12 
//         //                                           3.81333 10.6 4.14667L11.5067 3.25333L12.7533 4.5L11.8533 5.4C12.1867 5.87334 12.44 6.42 12.5867 7H14ZM8
//         //                                            10C9.10457 10 10 9.10457 10 8C10 6.89543 9.10457 6 8 6C6.89543 6 6 6.89543 6 8C6 9.10457 6.89543 10 8 10Z">
//         //                                                                         </path>
//         //                                                                     </svg>

//         //                                                                 </div>
//         //                                                                 <div className="channel-info-sep"></div>
//         //                                                             </div>
//         //                                                         </div>
//         //                                                     </div>
//         //                                                 </li>

//         //                                             )




//         //                                         })}




//         //                                     </ul>
//         //                                 )


//         //                             })
//         //                         }
//         //                         <ul className="ul-channels">

//         //                             <li className="channel-li-item-cat">
//         //                                 <div className="channel-li-icon">
//         //                                     <div className="main-channel-content">
//         //                                         <svg className="channel-icon-arrow" width="24" height="24" viewBox="0 0 24 24">
//         //                                             <path fill="currentColor" fillRule="evenodd" clipRule="evenodd" d="M16.59 8.59004L12 13.17L7.41
//         //                                      8.59004L6 10L12 16L18 10L16.59 8.59004Z">
//         //                                             </path>
//         //                                         </svg>
//         //                                         <h2 className="main-channel-content-h2">
//         //                                             <div className="main-channel-h2">Text Channels</div>
//         //                                         </h2>
//         //                                     </div>
//         //                                     <div className="channel-plus-div" >
//         //                                         <button type="button" className="add-channel-button">
//         //                                             <div className="add-channel-button-inner">
//         //                                                 <svg className="addButtonIcon" aria-hidden="true" role="img" width="18" height="18" viewBox="0 0 18 18">
//         //                                                     <polygon fillRule="nonzero" fill="currentColor"
//         //                                                         points="15 10 10 10 10 15 8 15 8 10 3 10 3 8 8 8 8 3 10 3 10 8 15 8">
//         //                                                     </polygon>
//         //                                                 </svg>
//         //                                             </div>
//         //                                         </button>

//         //                                     </div>
//         //                                 </div>
//         //                             </li>

//         //                             <li className="default-channel-item">
//         //                                 <div className="def-channel-wrap">
//         //                                     <div className="def-channel-content">
//         //                                         <Link to={`/testing/`} className="def-channel-a">
//         //                                             <div className="def-channel-icon-container">
//         //                                                 <svg width="24" height="24" viewBox="0 0 24 24" className="icon-2W8DHg" aria-hidden="true" role="img">
//         //                                                     <path fill="currentColor" fillRule="evenodd"
//         //                                                         clipRule="evenodd" d="M5.88657 21C5.57547 21 5.3399 20.7189 5.39427 20.4126L6.00001
//         //                                          17H2.59511C2.28449 17 2.04905 16.7198 2.10259 16.4138L2.27759 15.4138C2.31946 15.1746
//         //                                           2.52722 15 2.77011 15H6.35001L7.41001 9H4.00511C3.69449 9 3.45905 8.71977 3.51259 
//         //                                           8.41381L3.68759 7.41381C3.72946 7.17456 3.93722 7 4.18011 7H7.76001L8.39677 3.41262C8.43914
//         //                                            3.17391 8.64664 3 8.88907 3H9.87344C10.1845 3 10.4201 3.28107 10.3657 3.58738L9.76001
//         //                                             7H15.76L16.3968 3.41262C16.4391 3.17391 16.6466 3 16.8891 3H17.8734C18.1845 3 18.4201
//         //                                              3.28107 18.3657 3.58738L17.76 7H21.1649C21.4755 7 21.711 7.28023 21.6574 7.58619L21.4824
//         //                                               8.58619C21.4406 8.82544 21.2328 9 20.9899 9H17.41L16.35 15H19.7549C20.0655 15 20.301 15.2802
//         //                                                20.2474 15.5862L20.0724 16.5862C20.0306 16.8254 19.8228 17 19.5799 17H16L15.3632 20.5874C15.3209 20.8261
//         //                                                 15.1134 21 14.8709 21H13.8866C13.5755 21 13.3399 20.7189 13.3943 20.4126L14 17H8.00001L7.36325
//         //                                                  20.5874C7.32088 20.8261 7.11337 21 6.87094 21H5.88657ZM9.41045 9L8.35045 15H14.3504L15.4104
//         //                                                   9H9.41045Z">
//         //                                                     </path>
//         //                                                 </svg>
//         //                                             </div>
//         //                                             <div className="default-channel-name-cont">
//         //                                                 <div className="default-channel-name">
//         //                                                     insert channel name here
//         //                                                 </div>
//         //                                             </div>
//         //                                         </Link>
//         //                                         <div className="child-buttons">
//         //                                             <div className="create-channel-invite-icon-wrapper" >
//         //                                                 <svg className="create-channel-invite-icon" aria-hidden="true" role="img" width="16" height="16" viewBox="0 0 16 16">
//         //                                                     <path fill="currentColor" d="M14 2H16V3H14V5H13V3H11V2H13V0H14V2Z"></path>
//         //                                                     <path fill="currentColor" d="M6.5 8.00667C7.88 8.00667 9 6.88667 9 5.50667C9 4.12667 7.88 3.00667 6.5 
//         //                                             3.00667C5.12 3.00667 4 4.12667 4 5.50667C4 6.88667 5.12 8.00667 6.5 8.00667Z">

//         //                                                     </path>
//         //                                                     <path fill="currentColor" d="M6.5 8.34C3.26 8.34 1 9.98666 1 12.34V13.0067H12V12.34C12 9.98 9.74 8.34 6.5 8.34Z">
//         //                                                     </path>
//         //                                                 </svg>

//         //                                             </div>
//         //                                             <div className="channel-settings-wrapper" >
//         //                                                 <svg className="channel-gear-icon" aria-hidden="true" role="img" width="16" height="16" viewBox="0 0 16 16">
//         //                                                     <path fill="currentColor" fillRule="evenodd" clipRule="evenodd" d="M14 7V9C14 9 12.5867 9 12.5733 
//         //                                         9.00667C12.42 9.58667 12.1733 10.1267 11.84 10.6067L12.74 11.5067L11.4933 12.7533L10.5933 11.8533C10.1133
//         //                                          12.1867 9.57334 12.44 8.99334 12.5867V14H6.99334V12.58C6.41334 12.4333 5.87334 12.18 5.39334 11.8467L4.49333 
//         //                                          12.7467L3.24667 11.5L4.14667 10.6C3.81333 10.1267 3.56 9.58 3.41333 9H2V7H3.41333C3.56 6.42 3.81333 5.88 4.14667
//         //                                           5.4L3.24667 4.5L4.5 3.24667L5.4 4.14667C5.87334 3.81333 6.42 3.56 7 3.41333V2H9V3.41333C9.58 3.56667 10.12 
//         //                                           3.81333 10.6 4.14667L11.5067 3.25333L12.7533 4.5L11.8533 5.4C12.1867 5.87334 12.44 6.42 12.5867 7H14ZM8
//         //                                            10C9.10457 10 10 9.10457 10 8C10 6.89543 9.10457 6 8 6C6.89543 6 6 6.89543 6 8C6 9.10457 6.89543 10 8 10Z">
//         //                                                     </path>
//         //                                                 </svg>

//         //                                             </div>
//         //                                             <div className="channel-info-sep"></div>
//         //                                         </div>
//         //                                     </div>
//         //                                 </div>
//         //                             </li>

//         //                             <li className="channel-li-item-cat">
//         //                                 <div className="channel-li-icon">
//         //                                     <div className="main-channel-content">
//         //                                         <svg className="channel-icon-arrow" width="24" height="24" viewBox="0 0 24 24">
//         //                                             <path fill="currentColor" fillRule="evenodd" clipRule="evenodd" d="M16.59 8.59004L12 13.17L7.41
//         //                                      8.59004L6 10L12 16L18 10L16.59 8.59004Z">
//         //                                             </path>
//         //                                         </svg>
//         //                                         <h2 className="main-channel-content-h2">
//         //                                             <div className="main-channel-h2">Voice Channels</div>
//         //                                         </h2>
//         //                                     </div>
//         //                                     <div className="channel-plus-div" >
//         //                                         <button type="button" className="add-channel-button">
//         //                                             <div className="add-channel-button-inner">
//         //                                                 <svg className="addButtonIcon" aria-hidden="true" role="img" width="18" height="18" viewBox="0 0 18 18">
//         //                                                     <polygon fillRule="nonzero" fill="currentColor"
//         //                                                         points="15 10 10 10 10 15 8 15 8 10 3 10 3 8 8 8 8 3 10 3 10 8 15 8">
//         //                                                     </polygon>
//         //                                                 </svg>


//         //                                             </div>
//         //                                         </button>
//         //                                     </div>
//         //                                 </div>
//         //                             </li>
//         //                             <li className="default-channel-item">
//         //                                 <div className="def-channel-wrap">
//         //                                     <div className="def-channel-content">
//         //                                         <Link to={`/tetsing/`} className="def-channel-a">
//         //                                             <div className="def-channel-icon-container" >
//         //                                                 <svg className="icon-speaker" aria-hidden="true" role="img" width="24" height="24" viewBox="0 0 24 24">
//         //                                                     <path fill="currentColor" fillRule="evenodd" clipRule="evenodd" d="M11.383 3.07904C11.009 2.92504 10.579 
//         //                                     3.01004 10.293 3.29604L6 8.00204H3C2.45 8.00204 2 8.45304 2 9.00204V15.002C2 15.552 2.45 16.002 3 16.002H6L10.293 
//         //                                     20.71C10.579 20.996 11.009 21.082 11.383 20.927C11.757 20.772 12 20.407 12 20.002V4.00204C12 3.59904 11.757 
//         //                                     3.23204 11.383 3.07904ZM14 5.00195V7.00195C16.757 7.00195 19 9.24595 19 12.002C19 14.759 16.757 17.002 14 
//         //                                     17.002V19.002C17.86 19.002 21 15.863 21 12.002C21 8.14295 17.86 5.00195 14 5.00195ZM14 9.00195C15.654 9.00195 
//         //                                     17 10.349 17 12.002C17 13.657 15.654 15.002 14 15.002V13.002C14.551 13.002 15 12.553 15 12.002C15 11.451 
//         //                                     14.551 11.002 14 11.002V9.00195Z" aria-hidden="true">
//         //                                                     </path>
//         //                                                 </svg>

//         //                                             </div>
//         //                                             <div className="default-channel-name-cont">
//         //                                                 <div className="default-channel-name">
//         //                                                     insert channel name here
//         //                                                 </div>
//         //                                             </div>
//         //                                         </Link>
//         //                                         <div className="child-buttons">

//         //                                             <div className="create-channel-invite-icon-wrapper" >
//         //                                                 <svg className="open-chat-icon" aria-hidden="true" role="img" width="16" height="16" viewBox="0 0 24 24" fill="none">
//         //                                                     <path fill="currentColor" d="M4.79805 3C3.80445 3 2.99805 3.8055 2.99805 4.8V15.6C2.99805 16.5936 3.80445 
//         //                                     17.4 4.79805 17.4H7.49805V21L11.098 17.4H19.198C20.1925 17.4 20.998 16.5936 20.998 15.6V4.8C20.998 3.8055 
//         //                                     20.1925 3 19.198 3H4.79805Z">
//         //                                                     </path>
//         //                                                 </svg>

//         //                                             </div>
//         //                                             <div className="create-channel-invite-icon-wrapper" >

//         //                                                 <svg className="create-channel-invite-icon" aria-hidden="true" role="img" width="16" height="16" viewBox="0 0 16 16">
//         //                                                     <path fill="currentColor" d="M14 2H16V3H14V5H13V3H11V2H13V0H14V2Z"></path>
//         //                                                     <path fill="currentColor" d="M6.5 8.00667C7.88 8.00667 9 6.88667 9 5.50667C9 4.12667 7.88 3.00667 6.5 
//         //                                             3.00667C5.12 3.00667 4 4.12667 4 5.50667C4 6.88667 5.12 8.00667 6.5 8.00667Z">

//         //                                                     </path>
//         //                                                     <path fill="currentColor" d="M6.5 8.34C3.26 8.34 1 9.98666 1 12.34V13.0067H12V12.34C12 9.98 9.74 8.34 6.5 8.34Z">
//         //                                                     </path>
//         //                                                 </svg>

//         //                                             </div>
//         //                                             <div className="channel-settings-wrapper" >
//         //                                                 <svg className="channel-gear-icon" aria-hidden="true" role="img" width="16" height="16" viewBox="0 0 16 16">
//         //                                                     <path fill="currentColor" fillRule="evenodd" clipRule="evenodd" d="M14 7V9C14 9 12.5867 9 12.5733 
//         //                                         9.00667C12.42 9.58667 12.1733 10.1267 11.84 10.6067L12.74 11.5067L11.4933 12.7533L10.5933 11.8533C10.1133
//         //                                          12.1867 9.57334 12.44 8.99334 12.5867V14H6.99334V12.58C6.41334 12.4333 5.87334 12.18 5.39334 11.8467L4.49333 
//         //                                          12.7467L3.24667 11.5L4.14667 10.6C3.81333 10.1267 3.56 9.58 3.41333 9H2V7H3.41333C3.56 6.42 3.81333 5.88 4.14667
//         //                                           5.4L3.24667 4.5L4.5 3.24667L5.4 4.14667C5.87334 3.81333 6.42 3.56 7 3.41333V2H9V3.41333C9.58 3.56667 10.12 
//         //                                           3.81333 10.6 4.14667L11.5067 3.25333L12.7533 4.5L11.8533 5.4C12.1867 5.87334 12.44 6.42 12.5867 7H14ZM8
//         //                                            10C9.10457 10 10 9.10457 10 8C10 6.89543 9.10457 6 8 6C6.89543 6 6 6.89543 6 8C6 9.10457 6.89543 10 8 10Z">
//         //                                                     </path>
//         //                                                 </svg>

//         //                                             </div>
//         //                                             <div className="channel-info-sep"></div>
//         //                                         </div>
//         //                                     </div>
//         //                                 </div>
//         //                             </li>

//         //                         </ul>
//         //                     </div>
//         //                 </div>


//         //             </div>













//         //         )


//         return (
//             <div className="user-profile-wrapper" onClick={e => e.stopPropagation()}>
//                 <div className="user-profile" id="user-profile">

//                     <div className="sidebar">
//                         <div className="sidebar-scrollbar">
//                             <div className="sidebar-inner">

//                                 <div className="user-profile-left-side">


//                                     <ul className="user-profile-item-list">

//                                         <li><h3 className="user-profile-header3">Server Name</h3></li>



//                                         <li className="user-profile-item">Overview</li>


//                                         <li className="user-profile-item">Roles</li>
//                                         <li className="user-profile-item">Emoji</li>
//                                         <li className="user-profile-item">Stickers</li>
//                                         <li className="user-profile-item">Integration</li>
//                                         <li className="user-profile-item">Widget</li>
//                                         <li className="user-profile-item">Server Template</li>
//                                         <li className="user-profile-item">Custom Invite Link</li>
//                                         <div className="user-settings-separator"></div>
//                                         <li><h3 className="user-profile-header3">Moderation</h3></li>
//                                         <li className="user-profile-item">Safety Setup</li>
//                                         <li className="user-profile-item">Audit Log</li>
//                                         <li className="user-profile-item">Bans</li>
//                                         <div className="user-settings-separator"></div>
//                                         <li><h3 className="user-profile-header3">Community</h3></li>
//                                         <li className="user-profile-item">Enable Community</li>
//                                         <div className="user-settings-separator"></div>
//                                         <li className="user-profile-item">
//                                             <div className="user-profile-item-logout-sec">
//                                                 Server Boost Status

//                                                 <svg className="server-boost-icon" aria-hidden="true" role="img" width="24" height="24" viewBox="0 0 8 12">
//                                                     <path d="M4 0L0 4V8L4 12L8 8V4L4 0ZM7 7.59L4 10.59L1 7.59V4.41L4 1.41L7 4.41V7.59Z" fill="#ff73fa">
//                                                     </path>
//                                                     <path d="M2 4.83V7.17L4 9.17L6 7.17V4.83L4 2.83L2 4.83Z" fill="#ff73fa"></path>
//                                                 </svg>

//                                             </div>
//                                         </li>
//                                         <div className="user-settings-separator"></div>
//                                         <li><h3 className="user-profile-header3">User Management</h3></li>

//                                         <li className="user-profile-item">Members</li>
//                                         <li className="user-profile-item">Invites</li>
//                                         <div className="user-settings-separator"></div>
//                                         <li className="user-profile-item">
//                                             <div className="user-profile-item-logout-sec">
//                                                 Delete Server
//                                                 <svg className="upm-logout-icon" aria-hidden="true" role="img" width="16" height="16" viewBox="0 0 24 24">
//                                                     <path fill="currentColor" d="M15 3.999V2H9V3.999H3V5.999H21V3.999H15Z"></path>
//                                                     <path fill="currentColor" d="M5 6.99902V18.999C5 20.101 5.897 20.999 7 20.999H17C18.103 20.999 19 20.101 19
//                                                  18.999V6.99902H5ZM11 17H9V11H11V17ZM15 17H13V11H15V17Z">
//                                                     </path>
//                                                 </svg>
//                                             </div>
//                                         </li>
//                                         <li className="user-profile-item" >
//                                             <div className="user-profile-item-logout-sec">
//                                                 Log Out
//                                                 <svg className="upm-logout-icon" aria-hidden="true" role="img" width="16" height="16" viewBox="0 0 24 24">
//                                                     <path fill="currentColor" d="M18 2H7C5.897 2 5 2.898 5 4V11H12.59L10.293 8.708L11.706 7.292L16.414 11.991L11.708 16.706L10.292 15.294L12.582 
//                                       13H5V20C5 21.103 5.897 22 7 22H18C19.103 22 20 21.103 20 20V4C20 2.898 19.103 2 18 2Z">
//                                                     </path>
//                                                 </svg>
//                                             </div>
//                                         </li>
//                                         <div className="user-settings-separator"></div>

//                                         <div className="version-number">
//                                             <span>Stable 140575 (12c29a3)</span>
//                                             <br />
//                                             <span>Windows 11 64-bit</span>

//                                         </div>

//                                     </ul>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>


//                     <div className="user-profile-right-side-wrapper">
//                         <div className="user-profile-rs-inner-wrapper">

//                             <div className="user-profile-right-side">


//                                 <div className="user-profile-header1-div">
//                                     <h1 className="user-profile-header1">Server Overview</h1>
//                                 </div>

//                                 <div className="my-account-container-wrapper">


//                                     <div className="server-op-item-flex">
//                                         <div className="server-op-item-flex-jcc">
//                                             <div className="server-op-item-flex-child">
//                                                 <div className="server-image-uploader">
//                                                     <div className="server-image-uploader-inner">

//                                                         <span aria-hidden="true">
//                                                             <div className="image-uploader-acro">servername</div>
//                                                         </span>
//                                                         <div className="server-op-image-uploader-hint">
//                                                             Change Icon
//                                                         </div>
//                                                         <input className="server-op-pfp-input" accept=".jpg, .jpeg, .svg, .png, .gif" type="file" />
//                                                         <div className="server-op-image-uploader-icon"></div>
//                                                     </div>

//                                                     <div className="server-op-image-uploader-fp">
//                                                         Minimum Size:
//                                                         <strong>128x128</strong>
//                                                     </div>
//                                                 </div>

//                                             </div>

//                                             <div className="server-op-item-flex-vertical">
//                                                 <div className="server-op-icon-rec-s">
//                                                     We recommend an image of at least 512x512 for the server.
//                                                 </div>
//                                                 <button type="button" className="server-op-pfp-upload-button">

//                                                     <div className="server-op-iubt">Upload Image
//                                                         <input className="server-op-pfp-input" accept=".jpg, .jpeg, .svg, .png, .gif" type="file" />

//                                                     </div>
//                                                 </button>
//                                             </div>
//                                         </div>
//                                         <div className="server-op-item-margin-bottom">
//                                             <h5 className="server-op-item-margin-bottom-h5">Server Name</h5>
//                                             <div className="server-op-name-input-wrapper">
//                                                 <input className="server-op-name-input" type="text" maxLength={100} placeholder="servernameplaceholder" />
//                                                 <button type="button" className="faint-boost-shiny-button">
//                                                     <div className="shiny-button-contents">
//                                                         <svg className="shiny-button-icon" aria-hidden="true" role="img" width="16" height="16" viewBox="0 0 8 12">
//                                                             <path d="M4 0L0 4V8L4 12L8 8V4L4 0ZM7 7.59L4 10.59L1 7.59V4.41L4 1.41L7 4.41V7.59Z" fill="currentColor">
//                                                             </path>
//                                                             <path d="M2 4.83V7.17L4 9.17L6 7.17V4.83L4 2.83L2 4.83Z" fill="currentColor">
//                                                             </path>
//                                                         </svg>
//                                                         Submit Name Change
//                                                         <div className="shiny-button-container">
//                                                             <div className="shiny-button-flex">
//                                                                 <div className="shiny-button-inner"></div>
//                                                             </div>
//                                                         </div>
//                                                     </div>
//                                                 </button>
//                                             </div>
//                                         </div>
//                                     </div>
//                                     <div className="server-op-divider">
//                                         <div className="server-op-divider-flex-js">
//                                             <div className="server-op-flexchild1">
//                                                 <h5 className="server-op-div-fjs-h5">Inactive Channel</h5>
//                                                 <div className="select-box-look-filled">
//                                                     <span className="s-b-value">
//                                                         <div className="s-b-value-flex">
//                                                             <div className="sb-value-inner">No Active Channel</div>
//                                                         </div>
//                                                     </span>
//                                                     <div className="server-op-divider-icons-wrap">
//                                                         <svg aria-hidden="true" role="img" width="24" height="24" viewBox="0 0 24 24">
//                                                             <path fill="currentColor" d="M16.59 8.59003L12 13.17L7.41 8.59003L6 10L12 16L18 10L16.59 8.59003Z"></path></svg>
//                                                     </div>
//                                                 </div>
//                                             </div>
//                                             <div className="server-op-flexchild1">
//                                                 <h5 className="server-op-div-fjs-h5">Inactive Timeout</h5>
//                                                 <div className="select-box-look-disabled">
//                                                     <span className="s-b-value">
//                                                         <div className="s-b-value-flex">
//                                                             <div className="sb-value-inner">5 minutes</div>
//                                                         </div>
//                                                     </span>
//                                                     <div className="server-op-divider-icons-wrap">
//                                                         <svg aria-hidden="true" role="img" width="24" height="24" viewBox="0 0 24 24">
//                                                             <path fill="currentColor" d="M16.59 8.59003L12 13.17L7.41 8.59003L6 10L12 16L18 10L16.59 8.59003Z"></path></svg>
//                                                     </div>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                         <div className="inactive-sub-info">
//                                             Automatically move members to this channel and mute them when they have been idle for longer than the
//                                             inactive timeout. This does not affect browsers.
//                                         </div>
//                                     </div>

//                                     <div className="server-op-divider">
//                                         <h5 className="server-op-div-fjs-h5">System Messages Channel</h5>
//                                         <div className="select-box-look-filled">
//                                             <span className="s-b-value">
//                                                 <div className="s-b-value-flex1">
//                                                     <svg width="16" height="16" viewBox="0 0 24 24" className="icon-hash-sop" aria-hidden="true" role="img">
//                                                         <path fill="currentColor" fillRule="evenodd" clipRule="evenodd" d="M5.88657 21C5.57547 21 5.3399 20.7189 5.39427 
//                                                     20.4126L6.00001 17H2.59511C2.28449 17 2.04905 16.7198 2.10259 16.4138L2.27759 15.4138C2.31946 15.1746 2.52722 15 
//                                                     2.77011 15H6.35001L7.41001 9H4.00511C3.69449 9 3.45905 8.71977 3.51259 8.41381L3.68759 7.41381C3.72946 7.17456 3.93722 
//                                                     7 4.18011 7H7.76001L8.39677 3.41262C8.43914 3.17391 8.64664 3 8.88907 3H9.87344C10.1845 3 10.4201 3.28107 10.3657 
//                                                     3.58738L9.76001 7H15.76L16.3968 3.41262C16.4391 3.17391 16.6466 3 16.8891 3H17.8734C18.1845 3 18.4201 3.28107 18.3657 
//                                                     3.58738L17.76 7H21.1649C21.4755 7 21.711 7.28023 21.6574 7.58619L21.4824 8.58619C21.4406 8.82544 21.2328 9 20.9899 
//                                                     9H17.41L16.35 15H19.7549C20.0655 15 20.301 15.2802 20.2474 15.5862L20.0724 16.5862C20.0306 16.8254 19.8228 17 19.5799 
//                                                     17H16L15.3632 20.5874C15.3209 20.8261 15.1134 21 14.8709 21H13.8866C13.5755 21 13.3399 20.7189 13.3943 20.4126L14 
//                                                     17H8.00001L7.36325 20.5874C7.32088 20.8261 7.11337 21 6.87094 21H5.88657ZM9.41045 9L8.35045 15H14.3504L15.4104 9H9.41045Z">
//                                                         </path>
//                                                     </svg>
//                                                     <div className="sb-value-inner">general</div>
//                                                     <div className="sb-value-inner-bolden">Text Channels</div>

//                                                 </div>
//                                             </span>
//                                             <div className="server-op-divider-icons-wrap">
//                                                 <svg aria-hidden="true" role="img" width="24" height="24" viewBox="0 0 24 24">
//                                                     <path fill="currentColor" d="M16.59 8.59003L12 13.17L7.41 8.59003L6 10L12 16L18 10L16.59 8.59003Z"></path></svg>
//                                             </div>
//                                         </div>
//                                         <div className="inactive-sub-info">
//                                             This is the channel we send system event messages to. These can be turned off at any time.
//                                         </div>


//                                         <div className="server-op-margin-top-container">
//                                             <div className="sop-label-row">
//                                                 <label className="sop-label">Send a random welcome message when someone joins this server.</label>
//                                                 <div className="sop-slide-control">
//                                                     <svg className="slider-32CRPX" viewBox="0 0 28 20" preserveAspectRatio="xMinYMid meet" style={{ left: `${12}px` }}>
//                                                         <rect fill="white" x="4" y="0" height="20" width="20" rx="10"></rect>
//                                                         <svg viewBox="0 0 20 20" fill="none">
//                                                             <path fill="hsl(139, calc(var(--saturation-factor, 1) * 47.3%), 43.9%)" d="M7.89561 14.8538L6.30462 13.2629L14.3099
//                                                              5.25755L15.9009 6.84854L7.89561 14.8538Z">
//                                                             </path>
//                                                             <path fill="hsl(139, calc(var(--saturation-factor, 1) * 47.3%), 43.9%)" d="M4.08643 11.0903L5.67742 9.49929L9.4485 
//                                                             13.2704L7.85751 14.8614L4.08643 11.0903Z">
//                                                             </path>
//                                                         </svg>
//                                                     </svg>
//                                                     <input type="checkbox" className="sop-slider" checked />
//                                                 </div>
//                                             </div>
//                                         </div>
//                                         <div className="server-op-margin-top-container">
//                                             <div className="sop-label-row">
//                                                 <label className="sop-label">Prompt members to reply to welcome messages with a sticker.</label>
//                                                 <div className="sop-slide-control">
//                                                     <svg className="slider-32CRPX" viewBox="0 0 28 20" preserveAspectRatio="xMinYMid meet" style={{ left: `${12}px` }}>
//                                                         <rect fill="white" x="4" y="0" height="20" width="20" rx="10"></rect>
//                                                         <svg viewBox="0 0 20 20" fill="none">
//                                                             <path fill="hsl(139, calc(var(--saturation-factor, 1) * 47.3%), 43.9%)" d="M7.89561 14.8538L6.30462 13.2629L14.3099
//                                                              5.25755L15.9009 6.84854L7.89561 14.8538Z">
//                                                             </path>
//                                                             <path fill="hsl(139, calc(var(--saturation-factor, 1) * 47.3%), 43.9%)" d="M4.08643 11.0903L5.67742 9.49929L9.4485 
//                                                             13.2704L7.85751 14.8614L4.08643 11.0903Z">
//                                                             </path>
//                                                         </svg>
//                                                     </svg>
//                                                     <input type="checkbox" className="sop-slider" checked />
//                                                 </div>
//                                             </div>
//                                         </div>
//                                         <div className="server-op-margin-top-container">
//                                             <div className="sop-label-row">
//                                                 <label className="sop-label">Send a message when someone boosts this server.</label>
//                                                 <div className="sop-slide-control">
//                                                     <svg className="slider-32CRPX" viewBox="0 0 28 20" preserveAspectRatio="xMinYMid meet" style={{ left: `${12}px` }}>
//                                                         <rect fill="white" x="4" y="0" height="20" width="20" rx="10"></rect>
//                                                         <svg viewBox="0 0 20 20" fill="none">
//                                                             <path fill="hsl(139, calc(var(--saturation-factor, 1) * 47.3%), 43.9%)" d="M7.89561 14.8538L6.30462 13.2629L14.3099
//                                                              5.25755L15.9009 6.84854L7.89561 14.8538Z">
//                                                             </path>
//                                                             <path fill="hsl(139, calc(var(--saturation-factor, 1) * 47.3%), 43.9%)" d="M4.08643 11.0903L5.67742 9.49929L9.4485 
//                                                             13.2704L7.85751 14.8614L4.08643 11.0903Z">
//                                                             </path>
//                                                         </svg>
//                                                     </svg>
//                                                     <input type="checkbox" className="sop-slider" checked />
//                                                 </div>
//                                             </div>
//                                         </div>
//                                         <div className="server-op-margin-top-container">
//                                             <div className="sop-label-row">
//                                                 <label className="sop-label">Send helpful tips for server setup.</label>
//                                                 <div className="sop-slide-control">
//                                                     <svg className="slider-32CRPX" viewBox="0 0 28 20" preserveAspectRatio="xMinYMid meet" style={{ left: `${12}px` }}>
//                                                         <rect fill="white" x="4" y="0" height="20" width="20" rx="10"></rect>
//                                                         <svg viewBox="0 0 20 20" fill="none">
//                                                             <path fill="hsl(139, calc(var(--saturation-factor, 1) * 47.3%), 43.9%)" d="M7.89561 14.8538L6.30462 13.2629L14.3099
//                                                              5.25755L15.9009 6.84854L7.89561 14.8538Z">
//                                                             </path>
//                                                             <path fill="hsl(139, calc(var(--saturation-factor, 1) * 47.3%), 43.9%)" d="M4.08643 11.0903L5.67742 9.49929L9.4485 
//                                                             13.2704L7.85751 14.8614L4.08643 11.0903Z">
//                                                             </path>
//                                                         </svg>
//                                                     </svg>
//                                                     <input type="checkbox" className="sop-slider" checked />
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     </div>

//                                     <div>
//                                         <div className="server-op-divider">
//                                             <h5 className="server-op-div-fjs-h5">Default Notification Settings</h5>
//                                             <div className="inactive-sub-info-2">
//                                                 This will determine whether members who have not explicitly set their notification settings
//                                                 receive a notification for every message sent in this server or not.
//                                             </div>
//                                             <div className="inactive-sub-info-2">
//                                                 We highly recommend setting this to only @mentions for a public STRIFE.
//                                             </div>
//                                             <div role={"radiogroup"}>
//                                                 <div className="sop-radio-item1" role={"radio"} aria-checked="true">
//                                                     <div className="sop-radio-item-inner">
//                                                         <div>
//                                                             <svg aria-hidden="true" role="img" width="24" height="24" viewBox="0 0 24 24">
//                                                                 <path fillRule="evenodd" clipRule="evenodd" d="M12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 
//                                                             12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM12 22C17.5228 22 22 17.5228 22 12C22 6.47715 
//                                                             17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" fill="currentColor">
//                                                                 </path>
//                                                                 <circle cx="12" cy="12" r="5" className="radioIconForeground" fill="currentColor"></circle>
//                                                             </svg>
//                                                         </div>
//                                                         <div className="sop-radio-info">
//                                                             <div className="sop-text-med">All Messages</div>
//                                                         </div>
//                                                     </div>
//                                                 </div>
//                                                 <div className="sop-radio-item">
//                                                     <div className="sop-radio-item" role={"radio"} aria-checked="false">
//                                                         <div className="sop-radio-item-inner">
//                                                             <div>
//                                                                 <svg aria-hidden="true" role="img" width="24" height="24" viewBox="0 0 24 24">
//                                                                     <path fillRule="evenodd" clipRule="evenodd" d="M12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 
//                                                             12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM12 22C17.5228 22 22 17.5228 22 12C22 6.47715 
//                                                             17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" fill="currentColor">
//                                                                     </path>
//                                                                 </svg>
//                                                             </div>
//                                                             <div className="sop-radio-info">
//                                                                 <div className="sop-text-med">
//                                                                     Only
//                                                                     <strong>@mentions</strong>
//                                                                 </div>
//                                                             </div>
//                                                         </div>
//                                                     </div>
//                                                 </div>

//                                             </div>
//                                         </div>

//                                     </div>

//                                     <div>
//                                         <div className="server-op-divider">
//                                             <div className="sop-section-title">
//                                                 <h1 className="sop-section-header">
//                                                     Display
//                                                 </h1>
//                                             </div>

//                                             <div className="sop-display-children">
//                                                 <div>
//                                                     <div className="server-op-divider-flex-js2">
//                                                         <div className="server-op-divider-flex-horz">
//                                                             <div className="server-op-horz-martop-container">
//                                                                 <div className="server-op-horz-label-wrapper">
//                                                                     <label className="server-op-horz-label">
//                                                                         Show Boost progress bar
//                                                                     </label>
//                                                                     <div className="control-123">
//                                                                         <div className="control-inner">
//                                                                             <svg className="slider-32CRPX" viewBox="0 0 28 20" preserveAspectRatio="xMinYMid meet" style={{ left: `${-3}px` }}>
//                                                                                 <rect fill="white" x="4" y="0" height="20" width="20" rx="10"></rect>
//                                                                                 <svg viewBox="0 0 20 20" fill="none">
//                                                                                     <path fill="hsl(218, calc(var(--saturation-factor, 1) * 4.6%), 46.9%)"
//                                                                                         d="M5.13231 6.72963L6.7233 5.13864L14.855 13.2704L13.264 14.8614L5.13231 6.72963Z">
//                                                                                     </path>
//                                                                                     <path fill="hsl(218, calc(var(--saturation-factor, 1) * 4.6%), 46.9%)"
//                                                                                         d="M13.2704 5.13864L14.8614 6.72963L6.72963 14.8614L5.13864 13.2704L13.2704 5.13864Z">
//                                                                                     </path>
//                                                                                 </svg>
//                                                                             </svg>
//                                                                             <input type="checkbox" className="sop-slider" />
//                                                                         </div>
//                                                                     </div>
//                                                                 </div>
//                                                             </div>
//                                                             <div className="inactive-sub-info">
//                                                                 This progress bar will display in your channel list, attached to your server name
//                                                                 (or server banner if you have one set).
//                                                             </div>
//                                                         </div>
//                                                         <div className="flex-child-boost-ex">
//                                                             <img className="flex-child-boost-ex-img" alt="boost-example" />
//                                                         </div>
//                                                     </div>
//                                                 </div>



//                                                 <div className="server-op-divider">
//                                                     <div className="sbb-op-flex">
//                                                         <div className="sbb-flex-child">
//                                                             <h5 className="faint-h5">
//                                                                 <div>Server Banner Background</div>
//                                                                 <div className="faint-server-boost-icon-super-wrapper">
//                                                                     <div className="faint-server-boost-icon-wrapper">
//                                                                         <svg className="faint-server-boost-icon" aria-hidden="true" role="img" width="24" height="24" viewBox="0 0 8 12">
//                                                                             <path d="M4 0L0 4V8L4 12L8 8V4L4 0ZM7 7.59L4 10.59L1 7.59V4.41L4 1.41L7 4.41V7.59Z" fill="currentColor">
//                                                                             </path>
//                                                                             <path d="M2 4.83V7.17L4 9.17L6 7.17V4.83L4 2.83L2 4.83Z" fill="currentColor">
//                                                                             </path>
//                                                                         </svg>
//                                                                         <h3 className="faint-boost-h3">
//                                                                             LVL 2
//                                                                         </h3>
//                                                                     </div>
//                                                                 </div>
//                                                             </h5>
//                                                             <div className="faint-server-invite-text1">
//                                                                 This image will display at the top of your channels list.
//                                                             </div>
//                                                             <div className="faint-server-invite-text2">
//                                                                 The recommended minimum size is 960x540 and recommended aspect ratio is 16:9.{" "}
//                                                                 <a className="faint-anchor" target="_blank" href="https://support.discord.com/hc/en-us/articles/360028716472">Learn More</a>.
//                                                             </div>
//                                                             <button type="button" className="faint-boost-shiny-button">
//                                                                 <div className="shiny-button-contents">
//                                                                     <svg className="shiny-button-icon" aria-hidden="true" role="img" width="16" height="16" viewBox="0 0 8 12">
//                                                                         <path d="M4 0L0 4V8L4 12L8 8V4L4 0ZM7 7.59L4 10.59L1 7.59V4.41L4 1.41L7 4.41V7.59Z" fill="currentColor">
//                                                                         </path>
//                                                                         <path d="M2 4.83V7.17L4 9.17L6 7.17V4.83L4 2.83L2 4.83Z" fill="currentColor">
//                                                                         </path>
//                                                                     </svg>
//                                                                     Unlock with Boosting
//                                                                     <div className="shiny-button-container">
//                                                                         <div className="shiny-button-flex">
//                                                                             <div className="shiny-button-inner"></div>
//                                                                         </div>
//                                                                     </div>
//                                                                 </div>
//                                                             </button>
//                                                         </div>
//                                                         <div className="faint-boost-flex-child">
//                                                             <div className="faint-upsell">
//                                                                 <div className="faint-img-uploader">
//                                                                     <div className="faint-img-upload">
//                                                                         <div className="faint-img-acyro">
//                                                                         </div>
//                                                                         <div className="faint-img-icon">
//                                                                             <svg aria-hidden="true" role="img" width="18" height="18" viewBox="0 0 24 24" fill="none">
//                                                                                 <path fillRule="evenodd" clipRule="evenodd" d="M13.2899 2L6 2C3.79086 2 2 3.79086 2 6V18C2 20.2091 3.79086
//                                                                              22 6 22H18C20.2091 22 22 20.2091 22 18V10.7101C21.3663 10.8987 20.695 11 20 11C16.134 11 13 7.86599 13 
//                                                                              4C13 3.30503 13.1013 2.63371 13.2899 2ZM8 6C9.1032 6 10 6.8952 10 8C10 9.1056 9.1032 10 8 10C6.8944 10 6
//                                                                               9.1056 6 8C6 6.8952 6.8944 6 8 6ZM6 18L9 14L11 16L15 11L18 18H6Z" fill="hsl(214, calc(var(--saturation-factor, 1) * 9.9%), 50.4%)">
//                                                                                 </path>
//                                                                                 <path d="M21 0V3H24V5H21V8H19V5H16V3H19V0H21Z" fill="hsl(214, calc(var(--saturation-factor, 1) * 9.9%), 50.4%)">
//                                                                                 </path>
//                                                                             </svg>
//                                                                         </div>
//                                                                     </div>
//                                                                 </div>
//                                                             </div>
//                                                         </div>
//                                                     </div>
//                                                 </div>



//                                                 <div className="server-op-divider">
//                                                     <div className="sbb-op-flex">
//                                                         <div className="sbb-flex-child">
//                                                             <h5 className="faint-h5">
//                                                                 <div>Server Invite Background</div>
//                                                                 <div className="faint-server-boost-icon-super-wrapper">
//                                                                     <div className="faint-server-boost-icon-wrapper">
//                                                                         <svg className="faint-server-boost-icon" aria-hidden="true" role="img" width="24" height="24" viewBox="0 0 8 12">
//                                                                             <path d="M4 0L0 4V8L4 12L8 8V4L4 0ZM7 7.59L4 10.59L1 7.59V4.41L4 1.41L7 4.41V7.59Z" fill="currentColor">
//                                                                             </path>
//                                                                             <path d="M2 4.83V7.17L4 9.17L6 7.17V4.83L4 2.83L2 4.83Z" fill="currentColor">
//                                                                             </path>
//                                                                         </svg>
//                                                                         <h3 className="faint-boost-h3">
//                                                                             LVL 1
//                                                                         </h3>
//                                                                     </div>
//                                                                 </div>
//                                                             </h5>
//                                                             <div className="faint-server-invite-text1">
//                                                                 This image will display in server invite embeds, invite in browser, and invite confirmation modal.
//                                                             </div>
//                                                             <div className="faint-server-invite-text2">
//                                                                 "The recommended minimum size is 1920x1080 and recommended aspect ratio is 16:9."{" "}
//                                                                 <a className="faint-anchor" target="_blank" href="https://support.discord.com/hc/en-us/articles/4415841146391">Learn More</a>.
//                                                             </div>
//                                                             <button type="button" className="faint-boost-shiny-button">
//                                                                 <div className="shiny-button-contents">
//                                                                     <svg className="shiny-button-icon" aria-hidden="true" role="img" width="16" height="16" viewBox="0 0 8 12">
//                                                                         <path d="M4 0L0 4V8L4 12L8 8V4L4 0ZM7 7.59L4 10.59L1 7.59V4.41L4 1.41L7 4.41V7.59Z" fill="currentColor">
//                                                                         </path>
//                                                                         <path d="M2 4.83V7.17L4 9.17L6 7.17V4.83L4 2.83L2 4.83Z" fill="currentColor">
//                                                                         </path>
//                                                                     </svg>
//                                                                     Unlock with Boosting
//                                                                     <div className="shiny-button-container">
//                                                                         <div className="shiny-button-flex">
//                                                                             <div className="shiny-button-inner"></div>
//                                                                         </div>
//                                                                     </div>
//                                                                 </div>
//                                                             </button>
//                                                         </div>
//                                                         <div className="faint-boost-flex-child">
//                                                             <div className="faint-upsell">
//                                                                 <div className="faint-img-uploader">
//                                                                     <div className="faint-img-upload">
//                                                                         <div className="faint-img-acyro">
//                                                                         </div>
//                                                                         <div className="faint-img-icon">
//                                                                             <svg aria-hidden="true" role="img" width="18" height="18" viewBox="0 0 24 24" fill="none">
//                                                                                 <path fillRule="evenodd" clipRule="evenodd" d="M13.2899 2L6 2C3.79086 2 2 3.79086 2 6V18C2 20.2091 3.79086
//                                                                              22 6 22H18C20.2091 22 22 20.2091 22 18V10.7101C21.3663 10.8987 20.695 11 20 11C16.134 11 13 7.86599 13 
//                                                                              4C13 3.30503 13.1013 2.63371 13.2899 2ZM8 6C9.1032 6 10 6.8952 10 8C10 9.1056 9.1032 10 8 10C6.8944 10 6
//                                                                               9.1056 6 8C6 6.8952 6.8944 6 8 6ZM6 18L9 14L11 16L15 11L18 18H6Z" fill="hsl(214, calc(var(--saturation-factor, 1) * 9.9%), 50.4%)">
//                                                                                 </path>
//                                                                                 <path d="M21 0V3H24V5H21V8H19V5H16V3H19V0H21Z" fill="hsl(214, calc(var(--saturation-factor, 1) * 9.9%), 50.4%)">
//                                                                                 </path>
//                                                                             </svg>
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







//                                     <div className="my-account-container">




//                                     </div>

//                                 </div>

//                                 <div className="divider-margin"></div>


//                                 <div className="divider-margin"></div>




//                             </div>

//                             <div className="tools-container">

//                                 <div className="tool-x-to-esc-button-wrapper">
//                                     <div className="inner-tool-container">
//                                         <div className="x-to-esc-button" >
//                                             <svg role="img" width="18" height="18" viewBox="0 0 24 24">
//                                                 <path fill="currentColor" d="M18.4 4L12 10.4L5.6 4L4 5.6L10.4 
//                                       12L4 18.4L5.6 20L12 13.6L18.4 20L20 18.4L13.6 12L20 5.6L18.4 4Z">
//                                                 </path>
//                                             </svg>
//                                         </div>
//                                         <div className="esc-bind">ESC</div>
//                                     </div>
//                                 </div>
//                             </div>



//                         </div>
//                     </div>
//                 </div>
//             </div>

//         )

// let goHome = this.props.serverId === "@me" ? "selected-Server" : "unselected-Server";





// let userServer = this.props.servers.map((server, serverIndex) => {
//     let serverNavBarClassTag = this.props.serverId === server.id.toString() ? "selected-Server" : "unselected-Server";
//     let serverAcryo1 = server.server_Icon === undefined ? (

//         <svg width="48" height="48" viewBox="0 0 48 48" className="purple-bubbles" >
//             <defs>
//                 <path d="M48 24C48 37.2548 37.2548 48 24 48C10.7452 48 0 37.2548 0 24C0 10.7452 10.7452 0 24 0C37.2548 0 48 10.7452 48 24Z" >
//                 </path>
//             </defs>
//             <foreignObject x="0" y="0" width="48" height="48">
//                 <div className="bubble-wrap" >
//                     <div className="server-Acryo" >{this.splitServerName(server.server_name)}</div>
//                 </div>
//             </foreignObject>
//         </svg>
//         // <p className={`server-Acryo`}>{this.splitServerName(server.server_name)}</p>




//     ) : ("");

//     let serverAcryo = server.server_Icon === undefined ? (<p className={`server-Acryo`}>{this.splitServerName(server.server_name)}</p>) : ("")


//     let serverIcon = server.server_Icon !== undefined ? (
//         <div className="bubble-wrap"><img className="bubble-img" src={server.server_Icon} alt="SPFP" /></div>
//         // <img className="bubble-img" src={server.server_Icon} alt="SPFP" />

//     ) : ("");
//     let SPFP = server.server_Icon !== undefined ? (<img src={server.server_Icon} alt="SPFP" />) : ("");

//     return (
//         <li className="server-bubbles" key={server.id}>
//             <div className="server-nav-bar-list-item">
//                 <Link to={`/channels/${server.id}/${server.general_channel_id}`}
//                     onClick={() => this.props.fetchServer(server.id)}
//                     className={serverNavBarClassTag}
//                     id={`${server.server_Icon === undefined ? `purple-hover` : `no-purple`}`}
//                 >
//                     <div className="pill-box"><span className="pill-box-item"></span></div>
//                     {serverAcryo1}
//                     {serverIcon}
//                 </Link>

//             </div>
//             <div className="server-nav-bar-tool-kit">{server.server_name}</div>
//         </li>
//     )
// }
// )

// return (
//     <div className="empty-messages-container">

//         <p className="this-is-a-test">HELLO WORLD !!!!</p>
//         <div className="server-nav-bar">
//             <ul className="server-nav-bar-list">
//                 <li key="home-Bubbles" className="server-bubbles">
//                     <div className="server-nav-bar-list-item">
//                         <Link id="purple-hover" className={goHome} to={`/channels/@me`}>
//                             <div className="pill-box"><span className="pill-box-item"></span></div>
//                             <svg className="home-Bubbles" aria-hidden="true" role="img" width="28" height="20" viewBox="0 0 28 20">
//                                 <path fill="currentColor" d="M23.0212 1.67671C21.3107 0.879656 19.5079 0.318797 17.6584 0C17.4062 
//                             0.461742 17.1749 0.934541 16.9708 1.4184C15.003 1.12145 12.9974 1.12145 11.0283 1.4184C10.819 
//                             0.934541 10.589 0.461744 10.3368 0.00546311C8.48074 0.324393 6.67795 0.885118 4.96746 1.68231C1.56727 
//                             6.77853 0.649666 11.7538 1.11108 16.652C3.10102 18.1418 5.3262 19.2743 7.69177 20C8.22338 19.2743 
//                             8.69519 18.4993 9.09812 17.691C8.32996 17.3997 7.58522 17.0424 6.87684 16.6135C7.06531 16.4762 7.24726 
//                             16.3387 7.42403 16.1847C11.5911 18.1749 16.408 18.1749 20.5763 16.1847C20.7531 16.3332 20.9351 16.4762 
//                             21.1171 16.6135C20.41 17.0369 19.6639 17.3997 18.897 17.691C19.3052 18.4993 19.7718 19.2689 20.3021 
//                             19.9945C22.6677 19.2689 24.8929 18.1364 26.8828 16.6466H26.8893C27.43 10.9731 25.9665 6.04728 23.0212 
//                             1.67671ZM9.68041 13.6383C8.39754 13.6383 7.34085 12.4453 7.34085 10.994C7.34085 9.54272 8.37155 8.34973 
//                             9.68041 8.34973C10.9893 8.34973 12.0395 9.54272 12.0187 10.994C12.0187 12.4453 10.9828 13.6383 9.68041 
//                             13.6383ZM18.3161 13.6383C17.0332 13.6383 15.9765 12.4453 15.9765 10.994C15.9765 9.54272 17.0124 8.34973
//                              18.3161 8.34973C19.6184 8.34973 20.6751 9.54272 20.6543 10.994C20.6543 12.4453 19.6184 13.6383 18.3161 
//                              13.6383Z">
//                                 </path>
//                             </svg>

//                         </Link>
//                     </div>
//                     <div className="server-nav-bar-tool-kit">HOME</div>
//                 </li>

//                 <div className="server-bubble-seperator-container">
//                     <div className="server-bubble-seperator"></div>
//                 </div>
//                 {userServer}

//                 <li className="server-bubbles" key="createServer">
//                     <div className="server-nav-bar-list-item">
//                         <button id="create-server" onClick={() => this.renderModal('createServerForm')}>
//                             <div id="fill-pill" className="pill-box"><span className="pill-box-item"></span></div>
//                             <svg aria-hidden="true" role="img" width="24" height="24" viewBox="0 0 24 24">
//                                 <path fill="currentColor" d="M20 11.1111H12.8889V4H11.1111V11.1111H4V12.8889H11.1111V20H12.8889V12.8889H20V11.1111Z">
//                                 </path>
//                             </svg>
//                         </button>
//                     </div>
//                     <div className="server-nav-bar-tool-kit">Add a Server</div>
//                 </li>

//                 <li className="server-bubbles" key="serverSearch">
//                     <div className="server-nav-bar-list-item">
//                         <button id="search-servers" onClick={() => this.props.openModal('serverSearch')}>
//                             <div id="fill-pill" className="pill-box"><span className="pill-box-item"></span></div>
//                             <svg aria-hidden="true" role="img" width="24" height="24" viewBox="0 0 24 24">
//                                 <path fill="currentColor" d="M12 10.9C11.39 10.9 10.9 11.39 10.9 12C10.9 12.61 11.39 13.1 12 
//                                                         13.1C12.61 13.1 13.1 12.61 13.1 12C13.1 11.39 12.61 10.9 12 10.9ZM12 
//                                                         2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 
//                                                         2 12 2ZM14.19 14.19L6 18L9.81 9.81L18 6L14.19 14.19Z">
//                                 </path>
//                             </svg>
//                         </button>
//                     </div>
//                     <div className="server-nav-bar-tool-kit">Explore Public Servers</div>
//                 </li>

//                 <div className="bottom-server-bubble-seperator-container">
//                     <div className="bottom-server-bubble-seperator"></div>
//                 </div>


//                 <li className="server-bubbles" key="downloadApps">
//                     <div className="server-nav-bar-list-item">
//                         <button id="download-apps" onClick={() => this.props.openModal('downloadApps')} >
//                             <div id="fill-pill" className="pill-box"><span className="pill-box-item"></span></div>
//                             <svg fill="currentColor" aria-hidden="false" width="24" height="24" viewBox="0 0 24 24">
//                                 <path d="M16.293 9.293L17.707 10.707L12 16.414L6.29297 10.707L7.70697 9.293L11 
//                                  12.586V2H13V12.586L16.293 9.293ZM18 20V18H20V20C20 21.102 19.104 22 18 22H6C4.896 22 4 21.102 4 
//                                  20V18H6V20H18Z">
//                                 </path>
//                             </svg>

//                         </button>
//                     </div>
//                     <div className="server-nav-bar-tool-kit">Download Apps</div>
//                 </li>

//             </ul>

//         </div>
//     </div>
// )


//     }
// }

// export default TestPage;


// return (


//     <div className="leave-server-wrapper"  >
//         <div className="leave-server-backdrop"></div>
//         <div className="leave-server-layer">
//             <div id="leave-server-focus-lock" className="leave-server-focus-lock" >
//                 <div className="leave-server-root" >
//                     <div className="leave-server-flex" >
//                         <h2 className="remove-phone-header">
//                             Leave 'Shot from the point'
//                         </h2>
//                     </div>
//                     <div className="leave-server-content-scroll-base" >
//                         <div className="leave-server-text">
//                             Are you sure you want to leave {` `}
//                             <strong>shot from the point</strong>
//                             ? You won't be able to rejoin this server unless you are re-invited.
//                         </div>
//                         <div className="username-edit-sep"></div>
//                     </div>
//                         <form onSubmit={this.handleSubmit} className="leave-server-button-flex-wrapper">
//                             <button type="submit" onClick={() => this.cancel = true} className="delete-server-submit-button">Leave Server</button>
//                             <button type="submit" onClick={() => this.cancel = true} className="username-edit-cancel-button">cancel</button>
//                         </form>
//                 </div>
//             </div>
//         </div>
//     </div>


                                                                    {/* <div id="1s-op"className="check"><div className="inside"></div></div> */}
// )