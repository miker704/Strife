//deprecated as of may 26th 2022


// import React from "react";
// import { useEffect, useRef, useState } from "react";
// import DeleteServerModalContainer from "../delete_server_modal/delete_server_modal_container";


// const ServerSettingsModal = (props) => {

//     const [newServerName, setNewServerName] = useState("");
//     const [serverDeletion, setServerDeletion] = useState(false);
//     const [serverIconPhotoUrl, setServerIconPhotoUrl] = useState(props.server.server_Icon);
//     const [serverIconPhoto, setServerIconPhoto] = useState('');
//     const [removeServerIcon, setRemoveServerIcon] = useState(false)
//     let file_Input = null;
//     const [popUpShow, setPopUpShow] = useState(false);

//     useEffect(() => {

//         // if(!props.server?.id){
//         //     props.fetchServer();
//         //     props.fetchChannel();
//         // }

//         if (serverDeletion === true) {
//             window.removeEventListener('keyup', props.handleESC, false);

//         }
//         else {
//             window.addEventListener('keyup', props.handleESC, false);
//         }

//         // window.addEventListener('keyup', props.handleESC, false);
//         file_Input = document.querySelector('input[type=file]');

//         return function cleanUp () {
//             props.removeServerErrors();
//             props.removeChannelErrors();
//             props.removeSessionErrors();
//             window.removeEventListener('keyup', props.handleESC, false);
//         }

//     }, [serverDeletion])


//     const handleServerIconRemoval = () => {
//         if (props.server_Icon) {
//             setRemoveServerIcon(true)
//         }
//         setServerIconPhotoUrl("");
//         setServerIconPhoto(null);

//         const formData = new FormData();
//         formData.append('server[server_Icon_Remove]', removeServerIcon);
//         props.updateServer(props.server.id, formData).then((action) => {
//             let updatedServer = action.server;
//             App.StrifeCore.perform('_Serve_Server_Update_To_Members_Force_Refresh_', { updatedServerID: updatedServer.id })
//             // App.StrifeCore.perform('_Serve_Server_Update_To_Members_',{updatedServerID: updatedServer.id})

//         })

//     }




//     const handleCloseModal = () => {
//         let modalToClose = document.getElementById("user-profile");
//         modalToClose.classList.add("transition-out");
//         setTimeout(() => {
//             props.removeServerErrors();
//             props.closeModal();
//         }, 100);
//     }

//     const handleNameChangeSubmit = () => {

//         let subState = {
//             server_name: newServerName
//         };
//         let formData = new FormData();
//         formData.append('server[server_name]', newServerName);

//         props.updateServer(props.server.id, formData).then((action) => {
//             let updatedServer = action.server;
//             // App.StrifeCore.perform('_Serve_Server_Update_To_Members_',{updatedServerID: updatedServer.id})
//             App.StrifeCore.perform('_Serve_Server_Update_To_Members_Force_Refresh_', { updatedServerID: updatedServer.id })

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
//             0: " - You already own a Server with that name already",
//             1: " - Server name can't be blank",
//             2: ' - Must be between 2 and 100 in length',
//             3: " - Must be between 2 and 100 in length",
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
//         let serverAcryo = props.server.server_name.split(" ").map((parts) => parts[0]).join("");

//         return serverAcryo.length > 5 ? serverAcryo.slice(0, 5) : serverAcryo;
//     }


//     const handleSubmitServerPFP = (e) => {
//         e.preventDefault();
//         let formData = new FormData();
//         //throw in name of server regardless if we are updateing the name or not
//         formData.append('server[server_name]', props.server.server_name);
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
//             setServerIconPhotoUrl('');
//             setServerIconPhoto(null);
//         }
//     }


//     let serverNameErrorsTag = props.errors.length > 0 ? "server-error-lite" : "";
//     let existingServerImageIcon = serverIconPhotoUrl === undefined || serverIconPhotoUrl === '' ?
//         ('') :
//         (<img
//             className={`server-image-uploader-inner`}
//             src={serverIconPhotoUrl}
//             alt={serverIconPhotoUrl}
//         />)

//     return (
//         <div className="user-profile-wrapper" onClick={e => e.stopPropagation()}>
//             {serverDeletion && <DeleteServerModalContainer setServerDeletion={setServerDeletion} />}
//             <div className="user-profile" id="user-profile">
//                 <div className="sidebar">
//                     <div className="sidebar-scrollbar">
//                         <div className="sidebar-inner">
//                             <div className="user-profile-left-side">

//                                 <ul className="user-profile-item-list">

//                                     <li><h3 className="user-profile-header3">{`${props.server.server_name}`}</h3></li>
//                                     <li className="user-profile-item force">Overview</li>
//                                     <li className="user-profile-item">Roles</li>
//                                     <li className="user-profile-item">Emoji</li>
//                                     <li className="user-profile-item">Stickers</li>
//                                     <li className="user-profile-item">Soundboard</li>
//                                     <li className="user-profile-item">Widget</li>
//                                     <li className="user-profile-item">Server Template</li>
//                                     <li className="user-profile-item">Custom Invite Link</li>
//                                     <div className="user-settings-separator"></div>
//                                     <li><h3 className="user-profile-header3">APPS</h3></li>
//                                     <li className="user-profile-item">Integrations</li>
//                                     <li className="user-profile-item">App Directory</li>
//                                     <div className="user-settings-separator"></div>
//                                     <li><h3 className="user-profile-header3">Moderation</h3></li>
//                                     <li className="user-profile-item">Safety Setup</li>
//                                     <li className="user-profile-item">AutoMod</li>
//                                     <li className="user-profile-item">Audit Log</li>
//                                     <li className="user-profile-item">Bans</li>
//                                     <div className="user-settings-separator"></div>
//                                     <li><h3 className="user-profile-header3">Community</h3></li>
//                                     <li className="user-profile-item">Enable Community</li>
//                                     <div className="user-settings-separator"></div>
//                                     <li><h3 className="user-profile-header3">Monetization</h3></li>
//                                     <li className="user-profile-item">Server Subscriptions</li>
//                                     <div className="user-settings-separator"></div>
//                                     <li className="user-profile-item">
//                                         <div className="user-profile-item-logout-sec">
//                                             Server Boost Status

//                                             <svg className="server-boost-icon" aria-hidden="true" role="img" width="24" height="24" viewBox="0 0 8 12">
//                                                 <path d="M4 0L0 4V8L4 12L8 8V4L4 0ZM7 7.59L4 10.59L1 7.59V4.41L4 1.41L7 4.41V7.59Z" fill="#ff73fa">
//                                                 </path>
//                                                 <path d="M2 4.83V7.17L4 9.17L6 7.17V4.83L4 2.83L2 4.83Z" fill="#ff73fa"></path>
//                                             </svg>

//                                         </div>
//                                     </li>
//                                     <div className="user-settings-separator"></div>
//                                     <li><h3 className="user-profile-header3">User Management</h3></li>
//                                     <li className="user-profile-item">Members</li>
//                                     <li className="user-profile-item">Invites</li>
//                                     <div className="user-settings-separator"></div>
//                                     <li className="user-profile-item" onClick={() => setServerDeletion(!serverDeletion)}>
//                                         <div className="user-profile-item-logout-sec">
//                                             Delete Server
//                                             <svg className="upm-logout-icon" aria-hidden="true" role="img" width="16" height="16" viewBox="0 0 24 24">
//                                                 <path fill="currentColor" d="M15 3.999V2H9V3.999H3V5.999H21V3.999H15Z"></path>
//                                                 <path fill="currentColor" d="M5 6.99902V18.999C5 20.101 5.897 20.999 7 20.999H17C18.103 20.999 19 20.101 19
//                                              18.999V6.99902H5ZM11 17H9V11H11V17ZM15 17H13V11H15V17Z">
//                                                 </path>
//                                             </svg>
//                                         </div>
//                                     </li>
//                                     <li className="user-profile-item" onClick={() => handleLogout()} >
//                                         <div className="user-profile-item-logout-sec">
//                                             Log Out
//                                             <svg className="upm-logout-icon" aria-hidden="true" role="img" width="16" height="16" viewBox="0 0 24 24">
//                                                 <path fill="currentColor" d="M18 2H7C5.897 2 5 2.898 5 4V11H12.59L10.293 8.708L11.706 7.292L16.414 11.991L11.708 16.706L10.292 15.294L12.582 
//                                   13H5V20C5 21.103 5.897 22 7 22H18C19.103 22 20 21.103 20 20V4C20 2.898 19.103 2 18 2Z">
//                                                 </path>
//                                             </svg>
//                                         </div>
//                                     </li>
//                                     <div className="user-settings-separator"></div>
//                                     <div className="version-number">
//                                         <span>Stable 140575 (12c29a3)</span>
//                                         <br />
//                                         <span>Windows 11 64-bit</span>

//                                     </div>
//                                 </ul>
//                             </div>
//                         </div>
//                     </div>
//                 </div>

//                 <div className="user-profile-right-side-wrapper">
//                     <div className="user-profile-rs-inner-wrapper">
//                         <div className="user-profile-right-side">
//                             <div className="user-profile-header1-div">
//                                 <h1 className="user-profile-header1">Server Overview</h1>
//                             </div>
//                             <div className="my-account-container-wrapper">
//                                 <div className="server-op-item-flex">
//                                     <div className="server-op-item-flex-jcc">
//                                         <div className="server-op-item-flex-child">
//                                             <div className="server-image-uploader">
//                                                 <div className="server-image-uploader-inner" >

//                                                     {existingServerImageIcon}

//                                                     <span aria-hidden="true">
//                                                         <div
//                                                             className={`image-uploader-acro ${serverIconPhotoUrl === undefined ||
//                                                                 serverIconPhotoUrl === '' ? `` : `is-hidden`}`}>
//                                                             {`${splitServerName()}`}
//                                                         </div>
//                                                     </span>
//                                                     <div className="server-op-image-uploader-hint">
//                                                         Change Icon
//                                                     </div>
//                                                     <input className="server-op-pfp-input" accept=".jpg, .jpeg, .png, .gif" type="file" onChange={(e) => handleFileInput(e)} />
//                                                     <div className="server-op-image-uploader-icon"></div>
//                                                 </div>

//                                                 <div className={`server-op-image-uploader-fp ${serverIconPhotoUrl === undefined ? `` : `is-hidden`}`}>
//                                                     Minimum Size:
//                                                     <strong>128x128</strong>
//                                                 </div>
//                                                 <a role={"button"} onClick={() => handleServerIconRemoval()} type="submit" className={`remove-server-icon-button ${serverIconPhotoUrl === undefined ? `is-hidden` : ``}`}>
//                                                     Remove
//                                                 </a>

//                                             </div>

//                                         </div>

//                                         <div className="server-op-item-flex-vertical">
//                                             <div className="server-op-icon-rec-s">
//                                                 We recommend an image of at least 512x512 for the server.
//                                             </div>
//                                             <button type="submit" className="server-op-pfp-upload-button" onClick={(e) => handleSubmitServerPFP(e)}>

//                                                 <div className="server-op-iubt">Upload Image
//                                                     {/* <input className="server-op-pfp-input" accept=".jpg, .jpeg, .svg, .png, .gif" type="file" /> */}
//                                                 </div>
//                                             </button>
//                                         </div>
//                                     </div>
//                                     <div className="server-op-item-margin-bottom">
//                                         <h5 className="server-op-item-margin-bottom-h5">
//                                             <label className={serverNameErrorsTag}>SERVER NAME{`${renderServerNameErrors()}`}</label>
//                                         </h5>
//                                         <div className="server-op-name-input-wrapper">
//                                             <input
//                                                 className="server-op-name-input"
//                                                 type="text"
//                                                 maxLength={101}
//                                                 minLength={1}
//                                                 placeholder={`${props.server.server_name}`}
//                                                 onChange={(e) => setNewServerName(e.currentTarget.value)}
//                                                 spellCheck={false}
//                                                 value={newServerName}
//                                             />


//                                             <button type="submit" className="faint-boost-shiny-button" onClick={() => handleNameChangeSubmit()}>
//                                                 <div className="shiny-button-contents">
//                                                     <svg className="shiny-button-icon" aria-hidden="true" role="img" width="16" height="16" viewBox="0 0 8 12">
//                                                         <path d="M4 0L0 4V8L4 12L8 8V4L4 0ZM7 7.59L4 10.59L1 7.59V4.41L4 1.41L7 4.41V7.59Z" fill="currentColor">
//                                                         </path>
//                                                         <path d="M2 4.83V7.17L4 9.17L6 7.17V4.83L4 2.83L2 4.83Z" fill="currentColor">
//                                                         </path>
//                                                     </svg>
//                                                     Submit Name Change
//                                                     <div className="shiny-button-container">
//                                                         <div className="shiny-button-flex">
//                                                             <div className="shiny-button-inner"></div>
//                                                         </div>
//                                                     </div>
//                                                 </div>
//                                             </button>
//                                         </div>
//                                         <h5 className="server-op-item-margin-bottom-h5-2">Server Invite Code :{`${` `}`}{`${props.server.invite_code}`}</h5>
//                                     </div>
//                                 </div>
//                                 <div className="server-op-divider">
//                                     <div className="server-op-divider-flex-js">
//                                         <div className="server-op-flexchild1">
//                                             <h5 className="server-op-div-fjs-h5">Inactive Channel</h5>
//                                             <div className="select-box-look-filled">
//                                                 <span className="s-b-value">
//                                                     <div className="s-b-value-flex">
//                                                         <div className="sb-value-inner">No Inactive Channel</div>
//                                                     </div>
//                                                 </span>
//                                                 <div className="server-op-divider-icons-wrap">
//                                                     <svg aria-hidden="true" role="img" width="24" height="24" viewBox="0 0 24 24">
//                                                         <path fill="currentColor" d="M16.59 8.59003L12 13.17L7.41 8.59003L6 10L12 16L18 10L16.59 8.59003Z"></path></svg>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                         <div className="server-op-flexchild1">
//                                             <h5 className="server-op-div-fjs-h5">Inactive Timeout</h5>
//                                             <div className="select-box-look-disabled">
//                                                 <span className="s-b-value">
//                                                     <div className="s-b-value-flex">
//                                                         <div className="sb-value-inner">5 minutes</div>
//                                                     </div>
//                                                 </span>
//                                                 <div className="server-op-divider-icons-wrap">
//                                                     <svg aria-hidden="true" role="img" width="24" height="24" viewBox="0 0 24 24">
//                                                         <path fill="currentColor" d="M16.59 8.59003L12 13.17L7.41 8.59003L6 10L12 16L18 10L16.59 8.59003Z"></path></svg>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     </div>
//                                     <div className="inactive-sub-info">
//                                         Automatically move members to this channel and mute them when they have been idle for longer than the
//                                         inactive timeout. This does not affect browsers.
//                                     </div>
//                                 </div>

//                                 <div className="server-op-divider">
//                                     <h5 className="server-op-div-fjs-h5">System Messages Channel</h5>
//                                     <div className="select-box-look-filled">
//                                         <span className="s-b-value">
//                                             <div className="s-b-value-flex1">
//                                                 <svg width="16" height="16" viewBox="0 0 24 24" className="icon-hash-sop" aria-hidden="true" role="img">
//                                                     <path fill="currentColor" fillRule="evenodd" clipRule="evenodd" d="M5.88657 21C5.57547 21 5.3399 20.7189 5.39427 
//                                                 20.4126L6.00001 17H2.59511C2.28449 17 2.04905 16.7198 2.10259 16.4138L2.27759 15.4138C2.31946 15.1746 2.52722 15 
//                                                 2.77011 15H6.35001L7.41001 9H4.00511C3.69449 9 3.45905 8.71977 3.51259 8.41381L3.68759 7.41381C3.72946 7.17456 3.93722 
//                                                 7 4.18011 7H7.76001L8.39677 3.41262C8.43914 3.17391 8.64664 3 8.88907 3H9.87344C10.1845 3 10.4201 3.28107 10.3657 
//                                                 3.58738L9.76001 7H15.76L16.3968 3.41262C16.4391 3.17391 16.6466 3 16.8891 3H17.8734C18.1845 3 18.4201 3.28107 18.3657 
//                                                 3.58738L17.76 7H21.1649C21.4755 7 21.711 7.28023 21.6574 7.58619L21.4824 8.58619C21.4406 8.82544 21.2328 9 20.9899 
//                                                 9H17.41L16.35 15H19.7549C20.0655 15 20.301 15.2802 20.2474 15.5862L20.0724 16.5862C20.0306 16.8254 19.8228 17 19.5799 
//                                                 17H16L15.3632 20.5874C15.3209 20.8261 15.1134 21 14.8709 21H13.8866C13.5755 21 13.3399 20.7189 13.3943 20.4126L14 
//                                                 17H8.00001L7.36325 20.5874C7.32088 20.8261 7.11337 21 6.87094 21H5.88657ZM9.41045 9L8.35045 15H14.3504L15.4104 9H9.41045Z">
//                                                     </path>
//                                                 </svg>
//                                                 <div className="sb-value-inner">general</div>
//                                                 <div className="sb-value-inner-bolden">Text Channels</div>

//                                             </div>
//                                         </span>
//                                         <div className="server-op-divider-icons-wrap">
//                                             <svg aria-hidden="true" role="img" width="24" height="24" viewBox="0 0 24 24">
//                                                 <path fill="currentColor" d="M16.59 8.59003L12 13.17L7.41 8.59003L6 10L12 16L18 10L16.59 8.59003Z"></path></svg>
//                                         </div>
//                                     </div>
//                                     <div className="inactive-sub-info">
//                                         This is the channel we send system event messages to. These can be turned off at any time.
//                                     </div>


//                                     <div className="server-op-margin-top-container">
//                                         <div className="sop-label-row">
//                                             <label className="sop-label">Send a random welcome message when someone joins this server.</label>
//                                             <div className="sop-slide-control">
//                                                 <svg className="slider-32CRPX" viewBox="0 0 28 20" preserveAspectRatio="xMinYMid meet" style={{ left: `${12}px` }}>
//                                                     <rect fill="white" x="4" y="0" height="20" width="20" rx="10"></rect>
//                                                     <svg viewBox="0 0 20 20" fill="none">
//                                                         <path fill="hsl(139, calc(var(--saturation-factor, 1) * 47.3%), 43.9%)" d="M7.89561 14.8538L6.30462 13.2629L14.3099
//                                                          5.25755L15.9009 6.84854L7.89561 14.8538Z">
//                                                         </path>
//                                                         <path fill="hsl(139, calc(var(--saturation-factor, 1) * 47.3%), 43.9%)" d="M4.08643 11.0903L5.67742 9.49929L9.4485 
//                                                         13.2704L7.85751 14.8614L4.08643 11.0903Z">
//                                                         </path>
//                                                     </svg>
//                                                 </svg>
//                                                 {/* <input type="checkbox" className="sop-slider" checked /> */}
//                                             </div>
//                                         </div>
//                                     </div>
//                                     <div className="server-op-margin-top-container">
//                                         <div className="sop-label-row">
//                                             <label className="sop-label">Prompt members to reply to welcome messages with a sticker.</label>
//                                             <div className="sop-slide-control">
//                                                 <svg className="slider-32CRPX" viewBox="0 0 28 20" preserveAspectRatio="xMinYMid meet" style={{ left: `${12}px` }}>
//                                                     <rect fill="white" x="4" y="0" height="20" width="20" rx="10"></rect>
//                                                     <svg viewBox="0 0 20 20" fill="none">
//                                                         <path fill="hsl(139, calc(var(--saturation-factor, 1) * 47.3%), 43.9%)" d="M7.89561 14.8538L6.30462 13.2629L14.3099
//                                                          5.25755L15.9009 6.84854L7.89561 14.8538Z">
//                                                         </path>
//                                                         <path fill="hsl(139, calc(var(--saturation-factor, 1) * 47.3%), 43.9%)" d="M4.08643 11.0903L5.67742 9.49929L9.4485 
//                                                         13.2704L7.85751 14.8614L4.08643 11.0903Z">
//                                                         </path>
//                                                     </svg>
//                                                 </svg>
//                                                 {/* <input type="checkbox" className="sop-slider" checked /> */}
//                                             </div>
//                                         </div>
//                                     </div>
//                                     <div className="server-op-margin-top-container">
//                                         <div className="sop-label-row">
//                                             <label className="sop-label">Send a message when someone boosts this server.</label>
//                                             <div className="sop-slide-control">
//                                                 <svg className="slider-32CRPX" viewBox="0 0 28 20" preserveAspectRatio="xMinYMid meet" style={{ left: `${12}px` }}>
//                                                     <rect fill="white" x="4" y="0" height="20" width="20" rx="10"></rect>
//                                                     <svg viewBox="0 0 20 20" fill="none">
//                                                         <path fill="hsl(139, calc(var(--saturation-factor, 1) * 47.3%), 43.9%)" d="M7.89561 14.8538L6.30462 13.2629L14.3099
//                                                          5.25755L15.9009 6.84854L7.89561 14.8538Z">
//                                                         </path>
//                                                         <path fill="hsl(139, calc(var(--saturation-factor, 1) * 47.3%), 43.9%)" d="M4.08643 11.0903L5.67742 9.49929L9.4485 
//                                                         13.2704L7.85751 14.8614L4.08643 11.0903Z">
//                                                         </path>
//                                                     </svg>
//                                                 </svg>
//                                                 {/* <input type="checkbox" className="sop-slider" checked /> */}
//                                             </div>
//                                         </div>
//                                     </div>
//                                     <div className="server-op-margin-top-container">
//                                         <div className="sop-label-row">
//                                             <label className="sop-label">Send helpful tips for server setup.</label>
//                                             <div className="sop-slide-control">
//                                                 <svg className="slider-32CRPX" viewBox="0 0 28 20" preserveAspectRatio="xMinYMid meet" style={{ left: `${12}px` }}>
//                                                     <rect fill="white" x="4" y="0" height="20" width="20" rx="10"></rect>
//                                                     <svg viewBox="0 0 20 20" fill="none">
//                                                         <path fill="hsl(139, calc(var(--saturation-factor, 1) * 47.3%), 43.9%)" d="M7.89561 14.8538L6.30462 13.2629L14.3099
//                                                          5.25755L15.9009 6.84854L7.89561 14.8538Z">
//                                                         </path>
//                                                         <path fill="hsl(139, calc(var(--saturation-factor, 1) * 47.3%), 43.9%)" d="M4.08643 11.0903L5.67742 9.49929L9.4485 
//                                                         13.2704L7.85751 14.8614L4.08643 11.0903Z">
//                                                         </path>
//                                                     </svg>
//                                                 </svg>
//                                                 {/* <input type="checkbox" className="sop-slider" checked /> */}
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div>

//                                 <div>
//                                     <div className="server-op-divider">
//                                         <h5 className="server-op-div-fjs-h5">Default Notification Settings</h5>
//                                         <div className="inactive-sub-info-2">
//                                             This will determine whether members who have not explicitly set their notification settings
//                                             receive a notification for every message sent in this server or not.
//                                         </div>
//                                         <div className="inactive-sub-info-2">
//                                             We highly recommend setting this to only @mentions for a public $TR!F3.
//                                         </div>
//                                         <div role={"radiogroup"}>
//                                             <div className="sop-radio-item1" role={"radio"} aria-checked="true">
//                                                 <div className="sop-radio-item-inner">
//                                                     <div>
//                                                         <svg aria-hidden="true" role="img" width="24" height="24" viewBox="0 0 24 24">
//                                                             <path fillRule="evenodd" clipRule="evenodd" d="M12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 
//                                                         12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM12 22C17.5228 22 22 17.5228 22 12C22 6.47715 
//                                                         17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" fill="currentColor">
//                                                             </path>
//                                                             <circle cx="12" cy="12" r="5" className="radioIconForeground" fill="currentColor"></circle>
//                                                         </svg>
//                                                     </div>
//                                                     <div className="sop-radio-info">
//                                                         <div className="sop-text-med">All Messages</div>
//                                                     </div>
//                                                 </div>
//                                             </div>
//                                             <div className="sop-radio-item">
//                                                 <div className="sop-radio-item" role={"radio"} aria-checked="false">
//                                                     <div className="sop-radio-item-inner">
//                                                         <div>
//                                                             <svg aria-hidden="true" role="img" width="24" height="24" viewBox="0 0 24 24">
//                                                                 <path fillRule="evenodd" clipRule="evenodd" d="M12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 
//                                                         12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM12 22C17.5228 22 22 17.5228 22 12C22 6.47715 
//                                                         17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" fill="currentColor">
//                                                                 </path>
//                                                             </svg>
//                                                         </div>
//                                                         <div className="sop-radio-info">
//                                                             <div className="sop-text-med">
//                                                                 Only
//                                                                 <strong>@mentions</strong>
//                                                             </div>
//                                                         </div>
//                                                     </div>
//                                                 </div>
//                                             </div>

//                                         </div>
//                                     </div>

//                                 </div>

//                                 <div>
//                                     <div className="server-op-divider">
//                                         <div className="sop-section-title">
//                                             <h1 className="sop-section-header">
//                                                 Display
//                                             </h1>
//                                         </div>

//                                         <div className="sop-display-children">
//                                             <div>
//                                                 <div className="server-op-divider-flex-js2">
//                                                     <div className="server-op-divider-flex-horz">
//                                                         <div className="server-op-horz-martop-container">
//                                                             <div className="server-op-horz-label-wrapper">
//                                                                 <label className="server-op-horz-label">
//                                                                     Show Boost progress bar
//                                                                 </label>
//                                                                 <div className="control-123">
//                                                                     <div className="control-inner">
//                                                                         <svg className="slider-32CRPX" viewBox="0 0 28 20" preserveAspectRatio="xMinYMid meet" style={{ left: `${-3}px` }}>
//                                                                             <rect fill="white" x="4" y="0" height="20" width="20" rx="10"></rect>
//                                                                             <svg viewBox="0 0 20 20" fill="none">
//                                                                                 <path fill="hsl(218, calc(var(--saturation-factor, 1) * 4.6%), 46.9%)"
//                                                                                     d="M5.13231 6.72963L6.7233 5.13864L14.855 13.2704L13.264 14.8614L5.13231 6.72963Z">
//                                                                                 </path>
//                                                                                 <path fill="hsl(218, calc(var(--saturation-factor, 1) * 4.6%), 46.9%)"
//                                                                                     d="M13.2704 5.13864L14.8614 6.72963L6.72963 14.8614L5.13864 13.2704L13.2704 5.13864Z">
//                                                                                 </path>
//                                                                             </svg>
//                                                                         </svg>
//                                                                         <input type="checkbox" className="sop-slider" />
//                                                                     </div>
//                                                                 </div>
//                                                             </div>
//                                                         </div>
//                                                         <div className="inactive-sub-info">
//                                                             This progress bar will display in your channel list, attached to your server name
//                                                             (or server banner if you have one set).
//                                                         </div>
//                                                     </div>
//                                                     <div className="flex-child-boost-ex">
//                                                         <img className="flex-child-boost-ex-img" alt="boost-example" />
//                                                     </div>
//                                                 </div>
//                                             </div>



//                                             <div className="server-op-divider">
//                                                 <div className="sbb-op-flex">
//                                                     <div className="sbb-flex-child">
//                                                         <h5 className="faint-h5">
//                                                             <div>Server Banner Background</div>
//                                                             <div className="faint-server-boost-icon-super-wrapper">
//                                                                 <div className="faint-server-boost-icon-wrapper">
//                                                                     <svg className="faint-server-boost-icon" aria-hidden="true" role="img" width="24" height="24" viewBox="0 0 8 12">
//                                                                         <path d="M4 0L0 4V8L4 12L8 8V4L4 0ZM7 7.59L4 10.59L1 7.59V4.41L4 1.41L7 4.41V7.59Z" fill="currentColor">
//                                                                         </path>
//                                                                         <path d="M2 4.83V7.17L4 9.17L6 7.17V4.83L4 2.83L2 4.83Z" fill="currentColor">
//                                                                         </path>
//                                                                     </svg>
//                                                                     <h3 className="faint-boost-h3">
//                                                                         LVL 2
//                                                                     </h3>
//                                                                 </div>
//                                                             </div>
//                                                         </h5>
//                                                         <div className="faint-server-invite-text1">
//                                                             This image will display at the top of your channels list.
//                                                         </div>
//                                                         <div className="faint-server-invite-text2">
//                                                             The recommended minimum size is 960x540 and recommended aspect ratio is 16:9.{" "}
//                                                             <a className="faint-anchor" target="_blank" href="https://support.discord.com/hc/en-us/articles/360028716472">Learn More</a>.
//                                                         </div>
//                                                         <button type="button" className="faint-boost-shiny-button">
//                                                             <div className="shiny-button-contents">
//                                                                 <svg className="shiny-button-icon" aria-hidden="true" role="img" width="16" height="16" viewBox="0 0 8 12">
//                                                                     <path d="M4 0L0 4V8L4 12L8 8V4L4 0ZM7 7.59L4 10.59L1 7.59V4.41L4 1.41L7 4.41V7.59Z" fill="currentColor">
//                                                                     </path>
//                                                                     <path d="M2 4.83V7.17L4 9.17L6 7.17V4.83L4 2.83L2 4.83Z" fill="currentColor">
//                                                                     </path>
//                                                                 </svg>
//                                                                 Unlock with Boosting
//                                                                 <div className="shiny-button-container">
//                                                                     <div className="shiny-button-flex">
//                                                                         <div className="shiny-button-inner"></div>
//                                                                     </div>
//                                                                 </div>
//                                                             </div>
//                                                         </button>
//                                                     </div>
//                                                     <div className="faint-boost-flex-child">
//                                                         <div className="faint-upsell">
//                                                             <div className="faint-img-uploader">
//                                                                 <div className="faint-img-upload">
//                                                                     <div className="faint-img-acyro">
//                                                                     </div>
//                                                                     <div className="faint-img-icon">
//                                                                         <svg aria-hidden="true" role="img" width="18" height="18" viewBox="0 0 24 24" fill="none">
//                                                                             <path fillRule="evenodd" clipRule="evenodd" d="M13.2899 2L6 2C3.79086 2 2 3.79086 2 6V18C2 20.2091 3.79086
//                                                                          22 6 22H18C20.2091 22 22 20.2091 22 18V10.7101C21.3663 10.8987 20.695 11 20 11C16.134 11 13 7.86599 13 
//                                                                          4C13 3.30503 13.1013 2.63371 13.2899 2ZM8 6C9.1032 6 10 6.8952 10 8C10 9.1056 9.1032 10 8 10C6.8944 10 6
//                                                                           9.1056 6 8C6 6.8952 6.8944 6 8 6ZM6 18L9 14L11 16L15 11L18 18H6Z" fill="hsl(214, calc(var(--saturation-factor, 1) * 9.9%), 50.4%)">
//                                                                             </path>
//                                                                             <path d="M21 0V3H24V5H21V8H19V5H16V3H19V0H21Z" fill="hsl(214, calc(var(--saturation-factor, 1) * 9.9%), 50.4%)">
//                                                                             </path>
//                                                                         </svg>
//                                                                     </div>
//                                                                 </div>
//                                                             </div>
//                                                         </div>
//                                                     </div>
//                                                 </div>
//                                             </div>

//                                             <div className="server-op-divider">
//                                                 <div className="sbb-op-flex">
//                                                     <div className="sbb-flex-child">
//                                                         <h5 className="faint-h5">
//                                                             <div>Server Invite Background</div>
//                                                             <div className="faint-server-boost-icon-super-wrapper">
//                                                                 <div className="faint-server-boost-icon-wrapper">
//                                                                     <svg className="faint-server-boost-icon" aria-hidden="true" role="img" width="24" height="24" viewBox="0 0 8 12">
//                                                                         <path d="M4 0L0 4V8L4 12L8 8V4L4 0ZM7 7.59L4 10.59L1 7.59V4.41L4 1.41L7 4.41V7.59Z" fill="currentColor">
//                                                                         </path>
//                                                                         <path d="M2 4.83V7.17L4 9.17L6 7.17V4.83L4 2.83L2 4.83Z" fill="currentColor">
//                                                                         </path>
//                                                                     </svg>
//                                                                     <h3 className="faint-boost-h3">
//                                                                         LVL 1
//                                                                     </h3>
//                                                                 </div>
//                                                             </div>
//                                                         </h5>
//                                                         <div className="faint-server-invite-text1">
//                                                             This image will display in server invite embeds, invite in browser, and invite confirmation modal.
//                                                         </div>
//                                                         <div className="faint-server-invite-text2">
//                                                             The recommended minimum size is 1920x1080 and recommended aspect ratio is 16:9.{" "}
//                                                             <a className="faint-anchor" target="_blank" href="https://support.discord.com/hc/en-us/articles/4415841146391">Learn More</a>.
//                                                         </div>
//                                                         <button type="button" className="faint-boost-shiny-button">
//                                                             <div className="shiny-button-contents">
//                                                                 <svg className="shiny-button-icon" aria-hidden="true" role="img" width="16" height="16" viewBox="0 0 8 12">
//                                                                     <path d="M4 0L0 4V8L4 12L8 8V4L4 0ZM7 7.59L4 10.59L1 7.59V4.41L4 1.41L7 4.41V7.59Z" fill="currentColor">
//                                                                     </path>
//                                                                     <path d="M2 4.83V7.17L4 9.17L6 7.17V4.83L4 2.83L2 4.83Z" fill="currentColor">
//                                                                     </path>
//                                                                 </svg>
//                                                                 Unlock with Boosting
//                                                                 <div className="shiny-button-container">
//                                                                     <div className="shiny-button-flex">
//                                                                         <div className="shiny-button-inner"></div>
//                                                                     </div>
//                                                                 </div>
//                                                             </div>
//                                                         </button>
//                                                     </div>
//                                                     <div className="faint-boost-flex-child">
//                                                         <div className="faint-upsell">
//                                                             <div className="faint-img-uploader">
//                                                                 <div className="faint-img-upload">
//                                                                     <div className="faint-img-acyro">
//                                                                     </div>
//                                                                     <div className="faint-img-icon">
//                                                                         <svg aria-hidden="true" role="img" width="18" height="18" viewBox="0 0 24 24" fill="none">
//                                                                             <path fillRule="evenodd" clipRule="evenodd" d="M13.2899 2L6 2C3.79086 2 2 3.79086 2 6V18C2 20.2091 3.79086
//                                                                          22 6 22H18C20.2091 22 22 20.2091 22 18V10.7101C21.3663 10.8987 20.695 11 20 11C16.134 11 13 7.86599 13 
//                                                                          4C13 3.30503 13.1013 2.63371 13.2899 2ZM8 6C9.1032 6 10 6.8952 10 8C10 9.1056 9.1032 10 8 10C6.8944 10 6
//                                                                           9.1056 6 8C6 6.8952 6.8944 6 8 6ZM6 18L9 14L11 16L15 11L18 18H6Z" fill="hsl(214, calc(var(--saturation-factor, 1) * 9.9%), 50.4%)">
//                                                                             </path>
//                                                                             <path d="M21 0V3H24V5H21V8H19V5H16V3H19V0H21Z" fill="hsl(214, calc(var(--saturation-factor, 1) * 9.9%), 50.4%)">
//                                                                             </path>
//                                                                         </svg>
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


//                             </div>


//                         </div>

//                         <div className="tools-container">

//                             <div className="tool-x-to-esc-button-wrapper">
//                                 <div className="inner-tool-container">
//                                     <div className="x-to-esc-button" onClick={() => handleCloseModal()}>
//                                         <svg role="img" width="18" height="18" viewBox="0 0 24 24">
//                                             <path fill="currentColor" d="M18.4 4L12 10.4L5.6 4L4 5.6L10.4 
//                                   12L4 18.4L5.6 20L12 13.6L18.4 20L20 18.4L13.6 12L20 5.6L18.4 4Z">
//                                             </path>
//                                         </svg>
//                                     </div>
//                                     <div className="esc-bind">ESC</div>
//                                 </div>
//                             </div>
//                         </div>



//                     </div>
//                 </div>
//             </div>
//         </div>

//     )



// }


// export default ServerSettingsModal;