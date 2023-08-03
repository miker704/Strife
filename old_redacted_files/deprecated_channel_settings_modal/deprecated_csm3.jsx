// import React from "react";
// import { useEffect, useState } from "react";
// import DeleteChannelModalContainer from "../delete_channel_modal/delete_channel_modal_container";
// import ConfirmLogoutModalContainer from "../../users/logout_modal/logout_modal_container";
// import Slider from '@mui/material/Slider';
// import Select from '@mui/material/Select';
// import { styled } from "@mui/material/styles";
// import SvgIcon from "@mui/material/SvgIcon";
// import MenuItem from '@mui/material/MenuItem';
// import StrifeToggleSwitch from "../../custom_input_components/strife_toggle_switch_container";
// import REACT_PORTAL from "../../../utils/ReactPortal_api_util";
// import { appPullerReleaseAnimation } from "../../../utils/appPullerAnimation_api_util";


// const SlowModeSlider = styled(Slider)(({ theme }) => ({
//     '& .MuiSlider-rail': {
//         'opacity': '1',
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
//         'justifyContent': 'center',
//         'top': '24px',
//         'opacity': '1',
//     },

//     '& .MuiSlider-track': {
//         'color': '#5865f2',
//         'boxSizing': 'border-box',
//         'outline': '0',
//         'height': '8px',
//         'transform': 'translate(-4px,50%)',
//     },
//     '& .MuiSlider-thumb': {
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
//     },
//     '& .MuiSlider-valueLabel': {
//         'color': '#ffffff',
//         'fontFamily': "gg sans",
//         'borderRadius': '4px',
//         'backgroundColor': '#1e1f22',
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


// const ChannelSettingsModal = (props) => {

//     const [Channel, setChannel] = useState(props.channel);
//     const [channelType, setChannelType] = useState(null);
//     const [isLoaded, setIsLoaded] = useState(false);
//     const [channelDeletion, setChannelDeletion] = useState(false);
//     const [newChannelName, setNewChannelName] = useState("");
//     const [isSubModMounted, setIsSubModMounted] = useState(false);
//     const [currentSubModal, setCurrentSubModal] = useState({
//         deleteChannel: false,
//         logoutConfirm: false,
//     });


//     useEffect(() => {

//         props.fetchChannel(props.mod_Channel_ID);
//         setChannel(props.channel);
//         setIsLoaded(true);

//     }, [])


//     useEffect(() => {

//         setNewChannelName(Channel.channel_name);
//         setChannelType(Channel.channel_type);
//         if (isSubModMounted === true) {
//             window.removeEventListener('keyup', overrideCloseModal, false);
//         }
//         else if (isSubModMounted === false) {
//             window.addEventListener('keyup', overrideCloseModal, false);
//         }

//         return function cleanUp () {
//             props.removeServerErrors();
//             props.removeChannelErrors();
//             props.removeSessionErrors();
//             window.removeEventListener('keyup', overrideCloseModal, false);

//         }

//     }, [isSubModMounted]);

//     const overrideCloseModal = (e) => {
//         const keys = {
//             27: () => {
//                 e.preventDefault();
//                 let modalToClose = document.getElementById("channel-settings-modal");
//                 modalToClose.classList.add("transition-out");
//                 // document.getElementById("grab-wrapper").style.opacity = 0.6;
//                 // document.getElementById('app-puller').animate(
//                 //     {
//                 //         transform: ['scale(0.93) translateZ(0px)', 'scale(0.94) translateZ(0px)', 'scale(0.95) translateZ(0px)', 'scale(0.97) translateZ(0px)', 'scale(0.99) translateZ(0px)'],
//                 //         offset: [0.0, 0.25, 0.5, 0.75, 1.0],
//                 //     },
//                 //     {
//                 //         duration: 200,
//                 //         iterations: 1,
//                 //     }
//                 // );

//                 appPullerReleaseAnimation();


//                 setTimeout(() => {
//                     props.closeModal();
//                     window.removeEventListener('keyup', overrideCloseModal, false);
//                 }, 100);
//             },
//         };
//         if (keys[e.keyCode] && isSubModMounted === false) {
//             keys[e.keyCode]();
//         }
//     }


//     const handleCloseModal = () => {
//         let modalToClose = document.getElementById("channel-settings-modal");
//         modalToClose.classList.add("transition-out");
//         // document.getElementById("grab-wrapper").style.opacity = 0.6;
//         // document.getElementById('app-puller').animate(
//         //     {
//         //         transform: ['scale(0.93) translateZ(0px)', 'scale(0.94) translateZ(0px)', 'scale(0.95) translateZ(0px)', 'scale(0.97) translateZ(0px)', 'scale(0.99) translateZ(0px)'],
//         //         offset: [0.0, 0.25, 0.5, 0.75, 1.0],
//         //     },
//         //     {
//         //         duration: 200,
//         //         iterations: 1,
//         //     }
//         // );

//         appPullerReleaseAnimation();
//         setTimeout(() => {
//             props.closeModal();
//         }, 100);
//     }

//     const [value, setValue] = useState('');
//     const [count, setCount] = useState(1024);
//     const [newChannelTopic, setNewChannelTopic] = useState('');
//     const [activitySwitch, setActivitySwitch] = useState(false);
//     const [activitySliderValue, setActivitySliderValue] = useState(0);
//     const [finalActivitySliderValue, setFinalActivitySliderValue] = useState(0);

//     const [bitRate, setBitRate] = useState(0);
//     const [userLimit, setUserLimit] = useState(0);
//     const [videoQuality, setvideoQuality] = useState("Auto");
//     const [region, setRegion] = useState("Automatic");
//     const [hideInActivity, setHideInActivity] = useState(72);


//     const hideInActivityChoices = [
//         "1 Hour",
//         "24 Hours",
//         "3 Days",
//         "1 Week"
//     ];

//     const hideInActivityChoicesEvaluation = {
//         "1 Hour": 1,
//         "24 Hours": 24,
//         "3 Days": 72,
//         "1 Week": 168,
//     }
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

//     const bitRateMarks = [
//         {
//             value: 8,
//             label: '8kbps'
//         },
//         {
//             value: 64,
//             label: '64kbps'
//         },
//         {
//             value: 96,
//             label: '96kbps'
//         }
//     ];

//     const userLimitMarks = [
//         {
//             value: 0,
//             label: '∞'
//         },

//         {
//             value: 99,
//             label: '99'
//         }

//     ]

//     const handleHideInActivity = (e) => {
//         setHideInActivity(e.target.value);
//     }


//     const handleRegionChange = (e) => {
//         setRegion(e.target.value);
//     }


//     const SelectChevron = (props) => {
//         return (
//             <SvgIcon {...props} aria-hidden="true" role="img" width="24" height="24" viewBox="0 0 24 24">
//                 <path fill="currentColor" d="M16.59 8.59003L12 13.17L7.41 8.59003L6 10L12 16L18 10L16.59 8.59003Z">
//                 </path>
//             </SvgIcon>
//         );
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


//     const userLimitValueLabel = (value) => {
//         if (value === 0) {
//             return "No Limit";
//         }
//         if (value === 1) {
//             return `${value} user`;
//         }
//         else {
//             return `${value} users`;
//         }
//     }

//     const bitRateLabel = (value) => {
//         return `${value}kbps`;
//     }


//     const updateChannelName = () => {
//         props.removeChannelErrors();
//         let subState = {
//             id: Channel.id,
//             channel_name: newChannelName,

//         }
//         props.updateChannel(subState);

//     }
//     const updateChannelTopic = () => {
//         //tba at another time
//     }


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


//     const handleLogout = () => {
//         props.closeModal();
//         props.logoutUser();
//     }


//     const renderChannelNameErrors = () => {

//         let channelErrorMessagesArray = [
//             "Channel name can't be blank",
//             'Channel name is too short (minimum is 1 character)',
//             'Channel name is too long (maximum is 100 characters)',
//             'Channel name Only one channel in a server can have that name'
//         ]

//         let channelErrorsResponse = {
//             0: 'Must be between 1 and 100 in length. Channel name cannot be ""',
//             1: 'Must be between 1 and 100 in length. Channel name cannot be ""',
//             2: 'Must be between 1 and 100 in length.',
//             3: "A channel with that name already exists in this server!"
//         }
//         for (let i = 0; i < channelErrorMessagesArray.length; i++) {
//             if (props.errors.includes(channelErrorMessagesArray[i])) {
//                 return channelErrorsResponse[i];
//             }
//         }
//         return "";

//     }

//     const channelTypeName = () => {
//         if (Channel.channel_type === 1) {
//             return 'TEXT CHANNELS';
//         }
//         else {
//             return 'VOICE CHANNELS';
//         }
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

//     const renderDeleteChannelModal = () => {
//         if (currentSubModal.deleteChannel === true) {
//             window.removeEventListener('keyup', overrideCloseModal, false);
//             return (
//                 <DeleteChannelModalContainer closeSubMod={closeForm} formName={"deleteChannel"}
//                     currentChannel={props.channel} serverParams={props.serverParams}
//                     mod_Channel_ID={props.mod_Channel_ID}
//                 />
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


//     let channelNameErrors = props.errors.length > 0 ? (
//         <div className={"channel-error-slide"}>{`${renderChannelNameErrors()}`}</div>
//     ) : ("");


//     const channelDescriptionInput = Channel.channel_type === 1 ? (
//         <div>
//             <div className="cs-margin-top">
//                 <h3 className="cs-op-div-fjs-h5">
//                     Channel Topic
//                 </h3>
//                 <div className="cs-channel-topic-input-wrapper">
//                     <div className="cs-ip-maxlen">
//                         <textarea
//                             className="cs-text-area tsa-scrollbar global-scrollbar-no-border global-scrollbar-ghost-hairline"
//                             disabled id="cs-ta"
//                             style={{ paddingRight: `38.92px`, height: `83px` }}
//                             spellCheck={false}
//                             value={value}
//                             autoCorrect="off"
//                             rows={3}
//                             maxLength={1024}
//                             minLength={2}
//                             onChange={(e) => {
//                                 setCount(e.currentTarget.value.length);
//                                 setValue(e.currentTarget.value);
//                             }}
//                             placeholder="Let everyone know how to use this channel! ($TR!F3 N!TR0 Required!)">
//                         </textarea>
//                         <span className="tmaxlen">Maximum 1024 characters.</span>
//                         <div className="maxlen-textarea-cs">{`${count}`}</div>
//                     </div>
//                 </div>
//                 <button type="button" className="faint-boost-shiny-button" disabled onClick={() => updateChannelTopic()}>
//                     <div className="shiny-button-contents">
//                         <svg className="shiny-button-icon" aria-hidden="true" role="img" width="16" height="16" viewBox="0 0 8 12">
//                             <path d="M4 0L0 4V8L4 12L8 8V4L4 0ZM7 7.59L4 10.59L1 7.59V4.41L4 1.41L7 4.41V7.59Z" fill="currentColor">
//                             </path>
//                             <path d="M2 4.83V7.17L4 9.17L6 7.17V4.83L4 2.83L2 4.83Z" fill="currentColor">
//                             </path>
//                         </svg>
//                         Submit Channel Topic Change
//                         <div className="shiny-button-container">
//                             <div className="shiny-button-flex">
//                                 <div className="shiny-button-inner"></div>
//                             </div>
//                         </div>
//                     </div>
//                 </button>
//             </div>
//             <div className="cs-op-divider"></div>
//         </div>
//     ) : ("");

//     const channelInactivity = Channel.channel_type === 1 ?
//         (
//             <div>
//                 <div className="cs-op-divider"></div>
//                 <div className="csm-split-flex-container">
//                     <div className="cs-form-section-header-wrapper">
//                         <h3 className="cs-op-div-fjs-h5">HIDE AFTER INACTIVITY</h3>
//                     </div>
//                     <SelectRegion
//                         value={hideInActivity}
//                         onChange={handleHideInActivity}
//                         MenuProps={menuProps}
//                         IconComponent={SelectChevron}
//                     >
//                         {hideInActivityChoices.map((choice) => {
//                             return (
//                                 <MenuItem value={hideInActivityChoicesEvaluation[choice]} key={choice}>
//                                     {choice}
//                                     {hideInActivity === hideInActivityChoicesEvaluation[choice] ? (checkMark) : ("")}
//                                 </MenuItem>
//                             )
//                         })}

//                     </SelectRegion>
//                     <div className="cs-inactive-sub-info-activity">
//                         New threads will not show in the channel list after being
//                         inactive for the specified duration. ($TR!F3 N!TR0 Required!)
//                     </div>
//                 </div>
//             </div>
//         ) : ("");




//     const voiceChannelStuff = Channel.channel_type === 2 ? (
//         <>
//             <div className="cs-op-divider"></div>

//             <div className="csm-split-flex-container">
//                 <h3 className="cs-op-div-fjs-h5">Bitrate</h3>
//                 <div className="csm-invisible-div"></div>

//                 <div className="cs-box-2">
//                     <SlowModeSlider
//                         aria-label="bitrateslider"
//                         valueLabelDisplay="auto"
//                         getAriaValueText={bitRateLabel}
//                         valueLabelFormat={bitRateLabel}
//                         defaultValue={8}
//                         min={8}
//                         max={96}
//                         marks={bitRateMarks}
//                         step={1}
//                         value={bitRate}
//                         onChange={(e, value) => (setBitRate(value))}
//                     /></div>
//                 <div className="cs-inactive-sub-info">
//                     ALL THE BITS! Going above 64 kbps may adversely affect people on poor connections.
//                 </div>
//             </div>


//             <div className="csm-split-flex-container">
//                 <div>
//                     <h3 className="cs-op-div-fjs-h5">VIDEO QUALITY</h3>
//                     <div role={'radiogroup'} className="csm-vQ-rad-group">
//                         <div className={`csm-vq-rad-item`} aria-checked={`${videoQuality === 'Auto' ? `true` : `false`}`} onClick={() => setvideoQuality('Auto')}>
//                             <div className="csm-vq-rad-item-bar">
//                                 <div className="csm-rad-item-icon-container">
//                                     <svg aria-hidden="true" role="img" width="24" height="24" viewBox="0 0 24 24">
//                                         <path fillRule="evenodd" clipRule="evenodd" d="M12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172
//                                  4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715
//                                   2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" fill="currentColor">
//                                         </path>
//                                         <circle cx="12" cy="12" r="5" className={`csm-rad-item ${videoQuality === 'Auto' ? `fill` : ``}`} fill="currentColor">
//                                         </circle>
//                                     </svg>
//                                 </div>
//                                 <div className="csm-vq-rad-item-info">
//                                     <div className="csm-rad-item-text">Auto</div>
//                                 </div>
//                             </div>
//                         </div>
//                         <div className={`csm-vq-rad-item`} aria-checked={`${videoQuality === '720p' ? `true` : `false`}`} onClick={() => setvideoQuality('720p')}>
//                             <div className="csm-vq-rad-item-bar">
//                                 <div className="csm-rad-item-icon-container">
//                                     <svg aria-hidden="true" role="img" width="24" height="24" viewBox="0 0 24 24">
//                                         <path fillRule="evenodd" clipRule="evenodd" d="M12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172
//                             4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715
//                              2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" fill="currentColor">
//                                         </path>
//                                         <circle cx="12" cy="12" r="5" className={`csm-rad-item ${videoQuality === '720p' ? `fill` : ``}`} fill="currentColor">
//                                         </circle>
//                                     </svg>
//                                 </div>
//                                 <div className="csm-vq-rad-item-info">
//                                     <div className="csm-rad-item-text">720p</div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//                 <div className="cs-inactive-sub-info">
//                     Sets camera video quality for all channel participants. Choose{`${" "}`}
//                     <strong>Auto</strong>{`${" "}`}
//                     for optimal performance.
//                 </div>
//             </div>

//             <div className="csm-split-flex-container">
//                 <h3 className="cs-op-div-fjs-h5">USER LIMIT</h3>
//                 <div className="csm-invisible-div"></div>
//                 <div className="cs-box-2">

//                     <SlowModeSlider
//                         aria-label="userlimitslider"
//                         valueLabelDisplay="auto"
//                         defaultValue={0}
//                         getAriaValueText={userLimitValueLabel}
//                         valueLabelFormat={userLimitValueLabel}
//                         min={0}
//                         max={99}
//                         step={1}
//                         marks={userLimitMarks}
//                         value={userLimit}
//                         onChange={(e, value) => (setUserLimit(value))}
//                     />
//                 </div>
//                 <div className="cs-inactive-sub-info">
//                     Limits the number of users that can connect to this voice channel. Users with the{`${" "}`}
//                     <strong>Move Members</strong>{`${" "}`}
//                     permission ignore this limit and can move other users into the channel.
//                 </div>
//             </div>

//             <div className="csm-split-flex-container">
//                 <h3 className="cs-op-div-fjs-h5">REGION OVERRIDE</h3>
//                 <SelectRegion
//                     value={region}
//                     onChange={handleRegionChange}
//                     MenuProps={menuProps}
//                     IconComponent={SelectChevron}
//                 >
//                     {regionNames.map((regionName) => {
//                         return (
//                             <MenuItem value={regionName} key={regionName}>
//                                 {regionName}
//                                 {region === regionName ? (checkMark) : ("")}
//                             </MenuItem>
//                         )
//                     })}

//                 </SelectRegion>

//                 <div className="cs-inactive-sub-info">
//                     Anyone in this channel will connect to the region you set, regardless of where they live. Regions
//                     affect voice and video quality. Leave it on Automatic and $TR!F3 will figure out what works best.
//                 </div>
//             </div>

//         </>
//     ) : ("");



//     if (isLoaded && (props.channel || Channel)) {
//         return (

//             <REACT_PORTAL wrapperId={'mass-modal-container'} classNameId={'mass-modal-layer-container'} onClick={(e) => e.stopPropagation()}>
//                 <div id="grab-wrapper" className="cs-settings-modal-wrapper" onClick={e => e.stopPropagation()}>
//                     {renderLogOutModal()}
//                     {renderDeleteChannelModal()}
//                     <div className="cs-channel-settings-modal" id="channel-settings-modal">
//                         <div className="cs-left-side-bar-region">
//                             <div className="cs-left-side-bar-region-inner global-scroll-thin-raw-attributes global-scroller-base global-scroll-faded-raw-attributes"
//                                 style={{ overflow: `hidden scroll`, paddingRight: `0px` }}>
//                                 <nav className="cs-left-side-bar-list-wrapper">
//                                     <div className="cs-left-side-bar-list">
//                                         <div className="cs-header-left-list">
//                                             {Channel.channel_type === 1 ?
//                                                 (<svg width="12" height="12" viewBox="0 0 24 24" className="cs-channel-icon-hash-tag-icon" aria-hidden="true" role="img">
//                                                     <path fill="currentColor" fillRule="evenodd" clipRule="evenodd" d="M5.88657 21C5.57547 21 5.3399 20.7189
//                                         5.39427 20.4126L6.00001 17H2.59511C2.28449 17 2.04905 16.7198 2.10259 16.4138L2.27759 15.4138C2.31946 15.1746
//                                         2.52722 15 2.77011 15H6.35001L7.41001 9H4.00511C3.69449 9 3.45905 8.71977 3.51259 8.41381L3.68759 
//                                         7.41381C3.72946 7.17456 3.93722 7 4.18011 7H7.76001L8.39677 3.41262C8.43914 3.17391 8.64664 3 8.88907
//                                         3H9.87344C10.1845 3 10.4201 3.28107 10.3657 3.58738L9.76001 7H15.76L16.3968 3.41262C16.4391 3.17391 
//                                         16.6466 3 16.8891 3H17.8734C18.1845 3 18.4201 3.28107 18.3657 3.58738L17.76 7H21.1649C21.4755 7 21.711 
//                                         7.28023 21.6574 7.58619L21.4824 8.58619C21.4406 8.82544 21.2328 9 20.9899 9H17.41L16.35 15H19.7549C20.0655
//                                         15 20.301 15.2802 20.2474 15.5862L20.0724 16.5862C20.0306 16.8254 19.8228 17 19.5799 17H16L15.3632 
//                                         20.5874C15.3209 20.8261 15.1134 21 14.8709 21H13.8866C13.5755 21 13.3399 20.7189 13.3943 20.4126L14 
//                                         17H8.00001L7.36325 20.5874C7.32088 20.8261 7.11337 21 6.87094 21H5.88657ZM9.41045 9L8.35045 15H14.3504L15.4104 
//                                         9H9.41045Z">
//                                                     </path>
//                                                 </svg>) :
//                                                 (<svg className="cs-channel-icon-mg-icon" aria-hidden="true" role="img" width="12" height="12" viewBox="0 0 24 24">
//                                                     <path fill="currentColor" fillRule="evenodd" clipRule="evenodd" d="M11.383 3.07904C11.009 2.92504 10.579 3.01004 
//                                         10.293 3.29604L6 8.00204H3C2.45 8.00204 2 8.45304 2 9.00204V15.002C2 15.552 2.45 16.002 3 16.002H6L10.293 20.71C10.579
//                                          20.996 11.009 21.082 11.383 20.927C11.757 20.772 12 20.407 12 20.002V4.00204C12 3.59904 11.757 3.23204 11.383 
//                                          3.07904ZM14 5.00195V7.00195C16.757 7.00195 19 9.24595 19 12.002C19 14.759 16.757 17.002 14 17.002V19.002C17.86 
//                                          19.002 21 15.863 21 12.002C21 8.14295 17.86 5.00195 14 5.00195ZM14 9.00195C15.654 9.00195 17 10.349 17 12.002C17 
//                                          13.657 15.654 15.002 14 15.002V13.002C14.551 13.002 15 12.553 15 12.002C15 11.451 14.551 11.002 14 11.002V9.00195Z"
//                                                         aria-hidden="true">
//                                                     </path>
//                                                 </svg>)
//                                             }
//                                             {/* {`${Channel.channel_name}`} */}
//                                             {`${newChannelName}`}
//                                             <span className="cs-inner-header-span">
//                                                 {`${channelTypeName()}`}
//                                             </span>
//                                         </div>
//                                         <div className="cs-left-side-list-item selected">Overview</div>
//                                         <div className="cs-left-side-list-item">Permissions</div>
//                                         <div className="cs-left-side-list-item">Invites</div>
//                                         <div className="cs-left-side-list-item">Integrations</div>
//                                         <div className="cs-lf-lt-sep"></div>
//                                         <div className="cs-left-side-list-item">
//                                             <div className="cs-left-side-item-logout-sec" onClick={() => openModal("deleteChannel")}>
//                                                 Delete Channel
//                                                 <svg className="cs-logout-icon" aria-hidden="true" role="img" width="16" height="16" viewBox="0 0 24 24">
//                                                     <path fill="currentColor" d="M15 3.999V2H9V3.999H3V5.999H21V3.999H15Z"></path>
//                                                     <path fill="currentColor" d="M5 6.99902V18.999C5 20.101 5.897 20.999 7 20.999H17C18.103 20.999 19 20.101 19
//                                              18.999V6.99902H5ZM11 17H9V11H11V17ZM15 17H13V11H15V17Z">
//                                                     </path>
//                                                 </svg>
//                                             </div>
//                                         </div>
//                                         <div className="cs-left-side-list-item" onClick={() => openModal("logoutConfirm")}>
//                                             <div className="cs-left-side-item-logout-sec">
//                                                 Logout
//                                                 <svg className="cs-logout-icon" aria-hidden="true" role="img" width="16" height="16" viewBox="0 0 24 24">
//                                                     <path fill="currentColor" d="M18 2H7C5.897 2 5 2.898 5 4V11H12.59L10.293 8.708L11.706 7.292L16.414 11.991L11.708 16.706L10.292 15.294L12.582 
//                                                     13H5V20C5 21.103 5.897 22 7 22H18C19.103 22 20 21.103 20 20V4C20 2.898 19.103 2 18 2Z">
//                                                     </path>
//                                                 </svg>
//                                             </div>
//                                         </div>
//                                         <div className="cs-lf-lt-sep"></div>
//                                         <div className="cs-version-number">
//                                             <span>Stable 210566 (fc3ede1)</span>
//                                             <br />
//                                             <span>Windows 11 64-bit</span>
//                                         </div>
//                                     </div>
//                                 </nav>
//                                 <div className="cs-invisible-vert-sep"></div>
//                             </div>
//                         </div>
//                         <div className="cs-right-side">
//                             <div className="cs-transit-wrap">
//                                 <div className="cs-right-side-content-side-bar auto-scroll-raw-attributes global-scroller-base"
//                                     style={{ overflow: `hidden scroll`, paddingRight: `0px` }}>
//                                     <div className="cs-right-side-content">
//                                         <div className="cs-channel-settings-overview">
//                                             <div className="cs-channel-settings-overview-title-wrapper">
//                                                 <h2 className="cs-channel-settings-overview-title">
//                                                     Overview
//                                                 </h2>
//                                             </div>
//                                             <div className="cs-children">

//                                                 <div>
//                                                     <div className="cs-op-item-flex">
//                                                         <div>
//                                                             <h5 className="cs-op-item-margin-bottom-h5">
//                                                                 <label>CHANNEL NAME</label>
//                                                             </h5>
//                                                             <div className="cs-channel-name-input-wrapper">

//                                                                 <input
//                                                                     className="server-op-name-input"
//                                                                     type="text"
//                                                                     maxLength={100}
//                                                                     minLength={1}
//                                                                     placeholder={`${Channel.channel_name}`}
//                                                                     spellCheck={false}
//                                                                     value={newChannelName}
//                                                                     onChange={(e) => setNewChannelName(e.currentTarget.value)}
//                                                                 />
//                                                             </div>
//                                                             {channelNameErrors}
//                                                             <button type="button" className="faint-boost-shiny-button" onClick={() => updateChannelName()}>
//                                                                 <div className="shiny-button-contents">
//                                                                     <svg className="shiny-button-icon" aria-hidden="true" role="img" width="16" height="16" viewBox="0 0 8 12">
//                                                                         <path d="M4 0L0 4V8L4 12L8 8V4L4 0ZM7 7.59L4 10.59L1 7.59V4.41L4 1.41L7 4.41V7.59Z" fill="currentColor">
//                                                                         </path>
//                                                                         <path d="M2 4.83V7.17L4 9.17L6 7.17V4.83L4 2.83L2 4.83Z" fill="currentColor">
//                                                                         </path>
//                                                                     </svg>
//                                                                     Submit Name Change
//                                                                     <div className="shiny-button-container">
//                                                                         <div className="shiny-button-flex">
//                                                                             <div className="shiny-button-inner"></div>
//                                                                         </div>
//                                                                     </div>
//                                                                 </div>
//                                                             </button>
//                                                         </div>
//                                                     </div>

//                                                     <div className="cs-op-divider"></div>
//                                                     {channelDescriptionInput}
//                                                     <div>

//                                                         <div>
//                                                             <h3 className="cs-op-div-fjs-h5">Slowmode</h3>


//                                                             <div className="cs-box-1">
//                                                                 <SlowModeSlider
//                                                                     aria-label="Slowmode"
//                                                                     defaultValue={0}
//                                                                     min={0}
//                                                                     max={13}
//                                                                     step={1}
//                                                                     marks={activityMarks}
//                                                                     value={activitySliderValue}
//                                                                     onChange={(e, value) => (updateChannelActivitySlider(e, value))}
//                                                                 /></div>

//                                                             <div className="cs-inactive-sub-info">
//                                                                 Members will be restricted to sending one message and creating one thread per this interval,
//                                                                 unless they have Manage Channel or Manage Messages permissions. ($TR!F3 N!TR0 Required!)
//                                                             </div>
//                                                         </div>
//                                                         <div className="cs-op-divider"></div>
//                                                     </div>


//                                                     <div>
//                                                         <div className="cs-op-container">
//                                                             <StrifeToggleSwitch key={`:r${7}:`} customIndex={7} checkedState={activitySwitch}
//                                                                 labelTagContents={"Age-Restricted Channel"}
//                                                                 setCheckedState={() => setActivitySwitch(!activitySwitch)}
//                                                             />
//                                                             <div className="cs-inactive-sub-info-activity">
//                                                                 Users will need to confirm they are of over legal age to view in the content in this channel.
//                                                                 Age-restricted channels are exempt from the explicit content filter. ($TR!F3 N!TR0 Required!)
//                                                             </div>
//                                                         </div>
//                                                     </div>
//                                                     {channelInactivity}
//                                                 </div>
//                                                 {voiceChannelStuff}
//                                                 <div className="channel-settings-img-wrap">
//                                                     <img className="channel-settings-img" alt=" " />
//                                                 </div>

//                                             </div>
//                                         </div>
//                                     </div>

//                                     <div className="tools-container">
//                                         <div className="tool-x-to-esc-button-wrapper">
//                                             <div className="inner-tool-container">
//                                                 <div className="x-to-esc-button" onClick={() => handleCloseModal()}>
//                                                     <svg role="img" width="18" height="18" viewBox="0 0 24 24">
//                                                         <path fill="currentColor" d="M18.4 4L12 10.4L5.6 4L4 5.6L10.4 
//                                                      12L4 18.4L5.6 20L12 13.6L18.4 20L20 18.4L13.6 12L20 5.6L18.4 4Z">
//                                                         </path>
//                                                     </svg>
//                                                 </div>
//                                                 <div className="esc-bind">ESC</div>
//                                             </div>
//                                         </div>
//                                     </div>
//                                     <div className="cs-invisible-vert-sep"></div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>

//                 </div>
//             </REACT_PORTAL >

//         )
//     }
//     else {
//         return (
//             <REACT_PORTAL wrapperId={'mass-modal-container'} classNameId={'mass-modal-layer-container'} onClick={(e) => e.stopPropagation()}>
//                 <div id="grab-wrapper" className="cs-settings-modal-wrapper" onClick={e => e.stopPropagation()} style={{ backgroundColor: `transparent` }}>
//                     <div className="channel-spinner-back-drop"></div>
//                     <div className="cs-channel-settings-modal" id="channel-settings-modal" style={{ backgroundColor: `transparent` }}>
//                         <div className="i2sm-main-layer">
//                             <div className="i2sm-focus-lock">
//                                 <span className={`spinning-cubes`}>
//                                     <span className="inner-cubes moving-cubes">
//                                         <span className="inner-cube"></span>
//                                         <span className="inner-cube"></span>
//                                     </span>
//                                 </span>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </REACT_PORTAL >
//         )
//     }
// }

// export default ChannelSettingsModal;