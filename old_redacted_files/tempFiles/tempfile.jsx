
// //this file is use to store code temperoy will redoing for better changes


// // //this file will combine both the sign/in/up forms to be rendered based on 
// // //certain conditions


// // document.querySelector("#bottompage").addEventListener("click", () => {
// //     var scrollingElement = (document.scrollingElement || document.body);
// //     scrollingElement.scrollTop = scrollingElement.scrollHeight;
// // })

// //            button{
// //     float: right;
// //     background - color: yellow;
// //     color: red;
// // }


// //            < !DOCTYPE html >
// //     <html>
// //         <head>
// //             <title>Scroll Automatically</title>
// //         </head>
// //         <body id='main_body'>
// //             <button id="bottompage">Bottom</button>
// //             <div id="headingone">
// //                 <h1>Heading One</h1>
// //                 <img src="https://media.istockphoto.com/photos/programming-code-abstract-             			technology-background-of-software-developer-picture-id1294521676?                   			b=1&k=20&m=1294521676&s=170667a&w=0&h=7pqhrZcqqbQq43Q0_TD0Y_YjInAyvA9xiht9bto030U=" alt="Programming Picture">
// //                     <p>
// //                         Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum 			has been the industry's standard dummy text ever since the 1500s, when an unknown printer 		  took a galley of type and scrambled it to make a type specimen book. It has survived not 		   only five centuries, but also the leap into electronic typesetting, remaining essentially 		 unchanged. It was popularised in the 1960s with the release of Letraset sheets containing 		   Lorem Ipsum passages, and more recently with desktop publishing software like Aldus 				PageMaker including versions of Lorem Ipsum.
// //                     </p>
// //             </div>
// //             <div id="headingtwo">
// //                 <h1>Heading Two</h1>
// //                 <img src="https://media.istockphoto.com/photos/programming-code-abstract-technology-      		  background-of-software-developer-picture-id1294521676?                      					b=1&k=20&m=1294521676&s=170667a&w=0&h=7pqhrZcqqbQq43Q0_TD0Y_YjInAyvA9xiht9bto030U=" alt="Programming Picture">
// //                     <p>
// //                         Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem        	 	Ipsum has been the industry's standard dummy text ever since the 1500s, when an         		unknown printer took a galley of type and scrambled it to make a type specimen book.       		 It has survived not only five centuries, but also the leap into electronic           			typesetting, remaining essentially unchanged. It was popularised in the 1960s with        		  the release of Letraset sheets containing Lorem Ipsum passages, and more recently         		with desktop publishing software like Aldus PageMaker including versions of Lorem         		  Ipsum.
// //                     </p>
// //             </div>
// //             <div id="headingthree">
// //                 <h1>Heading Three</h1>
// //                 <img src="https://media.istockphoto.com/photos/programming-code-abstract-technology-      		  background-of-software-developer-picture-id1294521676?                      					b=1&k=20&m=1294521676&s=170667a&w=0&h=7pqhrZcqqbQq43Q0_TD0Y_YjInAyvA9xiht9bto030U=" alt="Programming Picture">
// //                     <p>
// //                         Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem        		Ipsum has been the industry's standard dummy text ever since the 1500s, when an         		unknown printer took a galley of type and scrambled it to make a type specimen book.       		 It has survived not only five centuries, but also the leap into electronic           			typesetting, remaining essentially unchanged. It was popularised in the 1960s with        		  the release of Letraset sheets containing Lorem Ipsum passages, and more recently         		with desktop publishing software like Aldus PageMaker including versions of Lorem         		  Ipsum.
// //                     </p>
// //             </div>
// //             <h1> Hi There! </h1>
// //         </body>
// //     </html>

// class ServerSettingsModal extends React.Component {
//     constructor (props) {
//         super(props);

//         this.state = {
//             newServerName: '',
//             openDeleteModal: false,

//         }


//         this.handleCloseModal = this.handleCloseModal.bind(this);
//         this.handleSubmitNameChange = this.handleSubmitNameChange.bind(this);
//         this.handleInput = this.handleInput.bind(this);
//         this.handleLogOut = this.handleLogOut.bind(this);
//     }

//     componentWillUnmount () {
//         if (this.props.errors.length > 0) {
//             this.props.removeServerErrors();
//         }
//     }

//     handleCloseModal () {
//         let modalToClose = document.getElementById("user-profile");
//         modalToClose.classList.add("transition-out");
//         setTimeout(() => {
//             this.props.removeServerErrors();
//             this.props.closeModal();
//         }, 100);
//     }


//     handleLogOut () {
//         setTimeout(() => {
//             this.handleCloseModal();
//             this.props.logoutUser();
//         }, 100)
//     }

//     handleSubmitNameChange (e) {

//         let subState = {
//             server_name: this.state.newServerName
//         }
//         // this.props.updateServer();

//     }



  

//     render () {

//         let currentUser = {
//             "id": 2,
//             "username": "DemoUser1",
//             "email": "DemoUser1@strife.com",
//             "online": true,
//             "phone_number": null,
//             "strife_id_tag": "9897",
//             "color_tag": 5,
//             "photo": "/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBCdz09IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--45db13fbbcaa07ac3b995ef65337806f8b68cd73/loading.gif",
//             "friend_request_status": 0,
//             "ownedServers": [
//                 1,
//                 4,
//                 5,
//                 6,
//                 7,
//                 8,
//                 9,
//                 10,
//                 17
//             ],
//             "serversJoined": [
//                 1,
//                 3,
//                 4,
//                 5,
//                 6,
//                 7,
//                 8,
//                 9,
//                 10,
//                 17,
//                 18,
//                 28
//             ],
//             "dmServersJoined": [
//                 1,
//                 2,
//                 3,
//                 4,
//                 5,
//                 7
//             ]
//         }

//         return (
//             <div className="user-profile-wrapper" onClick={e => e.stopPropagation()}>
//                 <div className="user-profile" id="user-profile">

//                     <div className="sidebar">
//                         <div className="sidebar-scrollbar">
//                             <div className="sidebar-inner">

//                                 <div className="user-profile-left-side">


//                                     <ul className="user-profile-item-list">

//                                         <li><h3 className="user-profile-header3">{`${this.props.server.server_name}`}</h3></li>



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
//                                                 <input className="server-op-name-input" type="text" maxLength={100} placeholder={`${this.props.server.server_name}`} />
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
//                                             <h5 className="server-op-item-margin-bottom-h5-2">Server Invite Code :</h5>
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
//                                                     {/* <input type="checkbox" className="sop-slider" checked /> */}
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
//                                                     {/* <input type="checkbox" className="sop-slider" checked /> */}
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
//                                                     {/* <input type="checkbox" className="sop-slider" checked /> */}
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
//                                                     {/* <input type="checkbox" className="sop-slider" checked /> */}
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


//                                 </div>


//                             </div>

//                             <div className="tools-container">

//                                 <div className="tool-x-to-esc-button-wrapper">
//                                     <div className="inner-tool-container">
//                                         <div className="x-to-esc-button" onClick={() => this.handleCloseModal()}>
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
//             <div className="server-chat-container-wrapper">
//                 <main className="server-chat-container">
//                     <div className="message-wrapper">
//                         <div className="chat-scroller">
//                             <div className="chat-scroller-content">
//                                 <ol className="chat-scroller-inner">
//                                     <div className="chat-divider">
//                                         <span className="chat-divider-content"></span>
//                                     </div>
//                                     <li className="chat-message-item">
//                                         <div className="message-wrapper1">
//                                             <div className="message-wrapper-contents">
//                                                 <div className="chat-member-avatar-img">
//                                                     insert img here
//                                                 </div>
//                                                 <h2 className="chat-member-username-header">
//                                                     <span className="chat-member-username-wrap">
//                                                         <span className="chat-member-username">insert username here</span>
//                                                     </span>
//                                                     <span className="chat-message-timestamp-wrap">
//                                                         <time className="chat-message-timestamp">
//                                                             <i className="chat-message-timestamp-i">
//                                                                 insert time stamp here
//                                                             </i>
//                                                         </time>
//                                                     </span>
//                                                 </h2>
//                                                 <div className="chat-message">insert message content here
//                                                     <span className="mention-wrapper">@mentionuser</span>
//                                                 </div>
//                                             </div>
//                                             <div className="message-accessories"></div>
//                                         </div>
//                                     </li>
//                                     <div className="ol-scroller-spacer"></div>
//                                 </ol>
//                             </div>
//                         </div>
//                     </div>

//                     <form className="chat-input-form" onSubmit={this.handleSubmit}>
//                         <div className="chat-input-text-area">
//                             <div className="chat-input-text-area-scroller">
//                                 <div className="inner-attach-button">
//                                     <div className="uploadinput">
//                                         <input type="file" className="file-input" />
//                                     </div>
//                                     <div className="attach-wrapper">
//                                         <button type="button" className="attach-wrapper-button">
//                                             <div className="attach-wrapper-button-content">
//                                                 <svg width="24" height="24" viewBox="0 0 24 24">
//                                                     <path className="attachButtonPlus" fill="currentColor"
//                                                         d="M12 2.00098C6.486 2.00098 2 6.48698 2 12.001C2 17.515 6.486 22.001
//                                                          12 22.001C17.514 22.001 22 17.515 22 12.001C22 6.48698 17.514 2.00098
//                                                           12 2.00098ZM17 13.001H13V17.001H11V13.001H7V11.001H11V7.00098H13V11.001H17V13.001Z">
//                                                     </path>
//                                                 </svg>
//                                             </div>
//                                         </button>
//                                     </div>
//                                     <div className="inner-scroller-text-area">
//                                         <div>
//                                             {/* <div className="server-chat-box-placeholder"> */}
//                                             {/* Message #general or #channel name */}
//                                             {/* </div> */}
//                                             {/* <div role={"textbox"} spellCheck={true} aria-haspopup={"listbox"} aria-invalid={"false"}
//                                                 aria-autocomplete={"list"} data-can-focus="true" autoCorrect="off"
//                                                 className="server-message-chat-box-area" aria-label="Message #general"
//                                                 aria-multiline="true" data-slate-editor="true" data-slate-node="value"
//                                                 contentEditable="true" zindex={-1}>
//                                                 <div data-slate-node="element">
//                                                     <span data-slate-node="text">
//                                                         <span data-slate-leaf="true" className="empty-text-sc">
//                                                             <span data-slate-zero-width="n" data-slate-length="0">
//                                                                 &#xFEFF;
//                                                                 <br />
//                                                             </span>
//                                                         </span>
//                                                     </span>
//                                                 </div>
//                                             </div> */}
//                                             <textarea
//                                                 value={this.state.value}
//                                                 onChange={this.handleInput()}
//                                                 className="server-message-chat-box-area"
//                                                 rows="1"
//                                                 cols="1"
//                                                 minLength={1}
//                                                 maxLength={2000}
//                                                 placeholder={"Message #general or #channel name"}
//                                                 spellCheck={false}
//                                                 // onSubmit={this.printMsg()}
//                                                 onInput={() => {
//                                                     window.addEventListener('keyup', this.handleEnter, false);
//                                                 }}
//                                             />
                                           
//                                         </div>
//                                     </div>
//                                     <div className="inner-scroller-buttons">
//                                         <button type="button" className="send-gift-button">
//                                             <div className="chat-button-contents">
//                                                 <div className="chat-button-wrapper">
//                                                     <svg className="present-icon" width="24" height="24" aria-hidden="true" role="img" viewBox="0 0 24 24">
//                                                         <path fill="currentColor" fillRule="evenodd" clipRule="evenodd" d="M16.886 7.999H20C21.104 7.999 
//                                                 22 8.896 22 9.999V11.999H2V9.999C2 8.896 2.897 7.999 4 7.999H7.114C6.663 7.764 6.236 7.477 5.879
//                                                  7.121C4.709 5.951 4.709 4.048 5.879 2.879C7.012 1.746 8.986 1.746 10.121 2.877C11.758 4.514 11.979 
//                                                  7.595 11.998 7.941C11.9991 7.9525 11.9966 7.96279 11.9941 7.97304C11.992 7.98151 11.99 7.98995 11.99
//                                                   7.999H12.01C12.01 7.98986 12.0079 7.98134 12.0058 7.97287C12.0034 7.96282 12.0009 7.95286 12.002 
//                                                   7.942C12.022 7.596 12.242 4.515 13.879 2.878C15.014 1.745 16.986 1.746 18.121 2.877C19.29 4.049 19.29 
//                                                   5.952 18.121 7.121C17.764 7.477 17.337 7.764 16.886 7.999ZM7.293 5.707C6.903 5.316 6.903 4.682 7.293 
//                                                   4.292C7.481 4.103 7.732 4 8 4C8.268 4 8.519 4.103 8.707 4.292C9.297 4.882 9.641 5.94 9.825 6.822C8.945 
//                                                   6.639 7.879 6.293 7.293 5.707ZM14.174 6.824C14.359 5.941 14.702 4.883 15.293 4.293C15.481 4.103 15.732 4 16 
//                                                   4C16.268 4 16.519 4.103 16.706 4.291C17.096 4.682 17.097 5.316 16.707 5.707C16.116 6.298 15.057 6.642 14.174 
//                                                   6.824ZM3 13.999V19.999C3 21.102 3.897 21.999 5 21.999H11V13.999H3ZM13 13.999V21.999H19C20.104 21.999 21 21.102 
//                                                   21 19.999V13.999H13Z">
//                                                         </path>
//                                                     </svg>
//                                                 </div>
//                                             </div>
//                                         </button>
//                                         <div className="button-chat-input-wrap">
//                                             <button type="button" className="send-gift-button">
//                                                 <div className="chat-button-contents">
//                                                     <div className="chat-button-wrapper">
//                                                         <svg width="24" height="24" className="icongif" aria-hidden="true" role="img" viewBox="0 0 24 24">
//                                                             <path fill="currentColor" d="M2 2C0.895431 2 0 2.89543 0 4V20C0 21.1046 0.89543 22 2 
//                                                             22H22C23.1046 22 24 21.1046 24 20V4C24 2.89543 23.1046 2 22 2H2ZM9.76445 11.448V15.48C8.90045 
//                                                             16.044 7.88045 16.356 6.74045 16.356C4.11245 16.356 2.66045 14.628 2.66045 12.072C2.66045 9.504 
//                                                             4.23245 7.764 6.78845 7.764C7.80845 7.764 8.66045 8.004 9.32045 8.376L9.04445 10.164C8.42045 9.768 
//                                                             7.68845 9.456 6.83645 9.456C5.40845 9.456 4.71245 10.512 4.71245 12.06C4.71245 13.62 5.43245 14.712 
//                                                             6.86045 14.712C7.31645 14.712 7.64045 14.616 7.97645 14.448V12.972H6.42845V11.448H9.76445ZM11.5481 
//                                                             7.92H13.6001V16.2H11.5481V7.92ZM20.4724 7.92V9.636H17.5564V11.328H19.8604V13.044H17.5564V16.2H15.5164V7.92H20.4724Z">
//                                                             </path>
//                                                         </svg>
//                                                     </div>
//                                                 </div>

//                                             </button>
//                                         </div>
//                                         <div className="button-chat-input-wrap">
//                                             <button type="button" className="send-gift-button">
//                                                 <div className="chat-button-contents">
//                                                     <div className="chat-button-wrapper">
//                                                         <svg width="24" height="24" className="sticker-icon" aria-hidden="true" role="img" viewBox="0 0 20 20">
//                                                             <path fill="currentColor" fillRule="evenodd" clipRule="evenodd" d="M12.0002 0.662583V5.40204C12.0002 
//                                                             6.83974 13.1605 7.99981 14.5986 7.99981H19.3393C19.9245 7.99981 20.222 7.29584 19.8055 6.8794L13.1209 0.196569C12.7043 -0.219868 
//                                                             12.0002 0.0676718 12.0002 0.662583ZM14.5759 10.0282C12.0336 10.0282 9.96986 7.96441 9.96986 5.42209V0.0583083H1.99397C0.897287 
//                                                             0.0583083 0 0.955595 0 2.05228V18.0041C0 19.1007 0.897287 19.998 1.99397 19.998H17.9457C19.0424 19.998 19.9397 19.1007 19.9397 
//                                                             18.0041V10.0282H14.5759ZM11.9998 12.2201C11.9998 13.3245 11.1046 14.2198 10.0002 14.2198C8.8958 14.2198 8.00052 13.3245 8.00052 
//                                                             12.2201H6.66742C6.66742 14.0607 8.15955 15.5529 10.0002 15.5529C11.8408 15.5529 13.3329 14.0607 13.3329 12.2201H11.9998ZM4.44559 
//                                                             13.331C4.44559 13.9446 3.94821 14.442 3.33467 14.442C2.72112 14.442 2.22375 13.9446 2.22375 13.331C2.22375 12.7175 2.72112 12.2201 
//                                                             3.33467 12.2201C3.94821 12.2201 4.44559 12.7175 4.44559 13.331ZM16.6657 14.442C17.2793 14.442 17.7766 13.9446 17.7766 13.331C17.7766 
//                                                             12.7175 17.2793 12.2201 16.6657 12.2201C16.0522 12.2201 15.5548 12.7175 15.5548 13.331C15.5548 13.9446 16.0522 14.442 16.6657 14.442Z">
//                                                             </path>
//                                                             <path fill="currentColor" fillRule="evenodd" clipRule="evenodd"
//                                                                 d="M12.0002 0.662583V5.40204C12.0002 6.83974 13.1605 7.99981 14.5986 7.99981H19.3393C19.9245 
//                                                                 7.99981 20.222 7.29584 19.8055 6.8794L13.1209 0.196569C12.7043 -0.219868 12.0002 0.0676718 
//                                                                 12.0002 0.662583ZM14.5759 10.0282C12.0336 10.0282 9.96986 7.96441 9.96986 5.42209V0.0583083H1.99397C0.897287 0.0583083 0 0.955595 
//                                                                 0 2.05228V18.0041C0 19.1007 0.897287 19.998 1.99397 19.998H17.9457C19.0424 19.998 19.9397 19.1007 19.9397 18.0041V10.0282H14.5759ZM12 
//                                                                 13H11.2H8.8H8C8 14.1046 8.89543 15 10 15C11.1046 15 12 14.1046 12 13ZM17.7766 13.331C17.7766 13.9446 17.2793 14.442 16.6657 
//                                                                 14.442C16.0522 14.442 15.5548 13.9446 15.5548 13.331C15.5548 12.7175 16.0522 12.2201 16.6657 12.2201C17.2793 12.2201 17.7766 
//                                                                 12.7175 17.7766 13.331ZM2 
//                                                                 12.2361L2.53532 11L5.62492 12.7835C5.79161 12.8797 5.79161 13.1203 5.62492 13.2165L2.53532 15L2 13.7639L3.32339 13L2 12.2361Z">
//                                                             </path>
//                                                         </svg>
//                                                     </div>
//                                                 </div>
//                                             </button>
//                                         </div>
//                                         <div className="button-chat-input-wrap">
//                                             <button type="button" className="send-gift-button happyface">
//                                                 <div className="chat-button-contents">
//                                                     <div className="chat-button-wrapper">
//                                                         {/* <i className="fa-regular fa-face-smile-wink fa-xl"></i> */}
//                                                         <svg className = "smiley-face-icon" xmlns="http://www.w3.org/2000/svg" height="24" width={24} viewBox="0 0 512 512">
//                                                             <path fill= "currentColor" d="M256 352C293.2 352 319.2 334.5 334.4 318.1C343.3 308.4 358.5 307.7 368.3 316.7C378 325.7 378.6 
//                                                         340.9 369.6 350.6C347.7 374.5 309.7 400 256 400C202.3 400 164.3 374.5 142.4 350.6C133.4 340.9 133.1 325.7 143.7 
//                                                         316.7C153.5 307.7 168.7 308.4 177.6 318.1C192.8 334.5 218.8 352 256 352zM208.4 208C208.4 225.7 194 240 176.4 
//                                                         240C158.7 240 144.4 225.7 144.4 208C144.4 190.3 158.7 176 176.4 176C194 176 208.4 190.3 208.4 208zM281.9 230.6C273.9 223
//                                                         273.5 210.4 281 202.3C295.6 186.8 316.3 180 335.6 180C354.1 180 375.7 186.8 390.2 202.3C397.8 210.4 397.4 223 389.3 
//                                                         230.6C381.2 238.1 368.6 237.7 361 229.7C355.6 223.8 346.3 220 335.6 220C324.1 220 315.7 223.8 310.2 229.7C302.7 237.7
//                                                         290 238.1 281.9 230.6zM512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512
//                                                         114.6 512 256zM256 48C141.1 48 48 141.1 48 256C48 370.9 141.1 464 256 464C370.9 464 464 370.9 464 256C464 141.1 370.9 48 256 48z" />
//                                                         </svg>
//                                                     </div>
//                                                 </div>
//                                             </button>
//                                         </div>

//                                     </div>
//                                 </div>
//                             </div>
//                             <div className="chat-input-text-area-sticker">

//                             </div>
//                         </div>
//                     </form>
//                 </main>
//              </div>


//             </div>

//         )
//     }
// }

// {/* <link href="https://unpkg.com/material-components-web@latest/dist/material-components-web.min.css" rel="stylesheet">
//     <script src="https://unpkg.com/material-components-web@latest/dist/material-components-web.min.js"></script>
//     <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons"></link> */}




//     import React from "react";
// import { MDCRipple } from "@material/ripple";
// import { createConsumer } from "@rails/actioncable";
// import { JOIN_CALL, LEAVE_CALL, EXCHANGE, ice } from "../../../actions/video_and_voice_calls_actions.js";
// import { broadcastData } from "../../../utils/voice_and_video_calls_api_util";
// import user_Default_PFP from "../../../../app/assets/images/discord_PFP.svg"

// class STRIFE_WEB_RTC_DM_CALL extends React.Component {
//     constructor (props) {
//         super(props);
//         this.peerConnectionPeers = {};
//         this.state = {
//             joinCall: false,
//             startCall: true,
//             leaveCall: true,
//         }
//         this._V_CALL_CONSTRUCTOR_ = this._V_CALL_CONSTRUCTOR_.bind(this);
//         this._V_CALL_DECONSTRUCTOR_ = this._V_CALL_DECONSTRUCTOR_.bind(this);
//         this.exchange = this.exchange.bind(this);
//         this.join = this.join.bind(this);
//         this.removeUser = this.removeUser.bind(this);
//         this.joinCall = this.joinCall.bind(this);
//         this.leaveCall = this.leaveCall.bind(this);
//         this.createPeerConnection = this.createPeerConnection.bind(this);
//         this.currentUser = null;
//     }

//     componentDidMount () {

//     }

//     componentDidUpdate () {

//     }

//     componentWillUnmount () {
//         this._V_CALL_DECONSTRUCTOR_();
//     }

//     _V_CALL_CONSTRUCTOR_ () {
//         this.localVideo = document.getElementById("localVideo");
//         this.remoteVideo = document.getElementById("remoteVideo");
//         navigator.mediaDevices.getUserMedia(
//             {
//                 audio: true,
//                 video: true
//             }
//         ).then(stream => {
//             this.localStream = stream;
//             this.localVideo.srcObject = stream;
//         }).catch((error) => { console.log(error) });
//         this.setState({
//             leaveCall: false,
//             startCall: false,
//             joinCall: true,
//         })
//     }

//     _V_CALL_DECONSTRUCTOR_ () {
//         const pcKeys = Object.keys(this.peerConnectionPeers);
//         for (let i = 0; i < pcKeys.length; i++) {
//             this.peerConnectionPeers[pcKeys[i]].close();
//         }
//         App.cable.subscriptions.subscriptions = [];
//         broadcastData({
//             type: LEAVE_CALL,
//             from: this.props.currentUserId,
//             id: "1000"
//         });
//         document.location.reload(true);
//     }
//     joinCall (e) {
//         e.preventDefault();
//         const secureUser = this.props.currentUserId;
//         App.cable.subscriptions.create(
//             { channel: "CallChannel", id: "1000" },
//             {
//                 connected: () => {
//                     setTimeout(() => {
//                         broadcastData({
//                             type: JOIN_CALL,
//                             from: secureUser,
//                             id: "1000"
//                         });
//                     }, 1000)
//                 },
//                 received: data => {
//                     if (data.from === secureUser) return;
//                     switch (data.type) {
//                         case JOIN_CALL:
//                             return this.join(data);
//                         case EXCHANGE:
//                             if (data.to !== secureUser) return;
//                             return this.exchange(data);
//                         case LEAVE_CALL:
//                             return this.removeUser(data);
//                         default:
//                             return;
//                     }
//                 },
//             });
//     }

//     leaveCall (e) {

//         e.preventDefault();
//         const pcKeys = Object.keys(this.peerConnectionPeers);
//         for (let i = 0; i < pcKeys.length; i++) {
//             this.peerConnectionPeers[pcKeys[i]].close();
//         }
//         this.peerConnectionPeers = {};
//         this.localVideo.srcObject.getTracks().forEach(function (track) {
//             track.stop();
//         })
//         this.localVideo.srcObject = null;
//         App.cable.subscriptions.subscriptions = [];

//         this.remoteVideo.innerHTML = "";

//         broadcastData({
//             type: LEAVE_CALL,
//             from: this.props.currentUserId,
//             id: "1000"
//         });
//         this.setState({
//             leaveCall: true,
//             startCall: true,
//             joinCall: false
//         })
//         this.props.closeModal();
//     }

//     join (data) {
//         this.createPeerConnection(data.from, true)
//     }
//     removeUser (data) {
//         let video = document.getElementById(`remoteVideo+${data.from}`);
//         video && video.remove();

//         let peers = this.peerConnectionPeers
//         delete peers[data.from]
//     }
//     createPeerConnection (userId, isOffer) {


//         let peerConnection = new RTCPeerConnection(ice)
//         this.peerConnectionPeers[userId] = peerConnection;
//         let vidcount = 0;
//         this.localStream.getTracks().forEach((track) => peerConnection.addTrack(track, this.localStream));

//         let that = this;
//         if (isOffer) {
//             peerConnection.createOffer().then(offer => {
//                 peerConnection.setLocalDescription(offer).then(() => {

//                     setTimeout(() => {
//                         broadcastData({
//                             type: EXCHANGE,
//                             from: that.props.currentUserId,
//                             to: userId,
//                             sdp: JSON.stringify(peerConnection.localDescription),
//                             id: "1000"
//                         })
//                     }, 1000);
//                 });

//             });
//         }
//         peerConnection.onicecandidate = (e) => {
//             if (e.candidate) {
//                 setTimeout(() => {
//                     broadcastData({
//                         type: EXCHANGE,
//                         from: that.props.currentUserId,
//                         to: userId,
//                         sdp: JSON.stringify(e.candidate),
//                         id: "1000"
//                     });
//                 }, 1000);
//             }
//         }
//         peerConnection.ontrack = e => {
//             if (vidcount === 0) {
//                 // const remoteVid = document.createElement("video");
//                 // remoteVid.id = `remoteVideo+${userId}`;
//                 // remoteVid.autoplay = "autoPlay";
//                 // remoteVid.playsInline = "playsInline"
//                 // remoteVid.srcObject = e.streams[0];
//                 // this.remoteVideo.appendChild(remoteVid);
//                 this.remoteVideo.id = `remoteVideo+${userId}`
//                 this.remoteVideo.srcObject = e.streams[0];
//                 vidcount++

//             }
//         };
//         peerConnection.oniceconnectionstatechange = e => {
//             if (peerConnection.iceConnectionState === 'disconnected') {

//                 broadcastData({
//                     type: LEAVE_CALL,
//                     from: userId,
//                     id: "1000"
//                 });

//             }
//         };
//         return peerConnection;
//     }
//     exchange (data) {

//         const that = this
//         let peerConnection;

//         if (!this.peerConnectionPeers[data.from]) {
//             peerConnection = this.createPeerConnection(data.from, false);
//         } else {
//             peerConnection = this.peerConnectionPeers[data.from];
//         }


//         if (data.candidate) {
//             let candidate = JSON.parse(data.candidate)
//             peerConnection.addIceCandidate(new RTCIceCandidate(candidate))
//         }

//         if (data.sdp) {
//             const sdp = JSON.parse(data.sdp);

//             if (sdp && !sdp.candidate) {
//                 peerConnection.setRemoteDescription(sdp).then(() => {
//                     if (sdp.type === "offer") {
//                         peerConnection.createAnswer().then(answer => {
//                             peerConnection.setLocalDescription(answer)
//                                 .then(() => {
//                                     setTimeout(() => {
//                                         broadcastData({
//                                             type: EXCHANGE,
//                                             from: that.props.currentUserId,
//                                             to: data.from,
//                                             sdp: JSON.stringify(peerConnection.localDescription),
//                                             id: "1000"
//                                         });
//                                     }, 1000);
//                                 });

//                         }).catch(errors => console.log(errors));

//                     }
//                 }).catch((errors) => console.log(errors));

//             }
//         }
//     }

//     render () {
//         console.log("props: ", this.props);
//         const render_User_PFP = user_Default_PFP;
//         return (
//             <div className="strife-web-call-container2" onClick={(e) => e.stopPropagation()}>
//                 <div id="buttons">
//                     <div className="video-controls">
//                         <button disabled={this.state.joinCall} type="button" id="Join-call" className="faint-boost-shiny-button start-call-button" onClick={this._V_CALL_CONSTRUCTOR_.bind(this)}>
//                             <svg x="0" y="0" className="icon-phone-2" aria-hidden="true" role="img" width="24" height="24" viewBox="0 0 24 24">
//                                 <path fill="currentColor" fillRule="evenodd" clipRule="evenodd" d="M11 5V3C16.515 3 21 7.486 21 13H19C19 
//                                 8.589 15.411 5 11 5ZM17 13H15C15 10.795 13.206 9 11 9V7C14.309 7 17 9.691 17 13ZM11 11V13H13C13 
//                                 11.896 12.105 11 11 11ZM14 16H18C18.553 16 19 16.447 19 17V21C19 21.553 18.553 22 18 22H13C6.925 
//                                 22 2 17.075 2 11V6C2 5.447 2.448 5 3 5H7C7.553 5 8 5.447 8 6V10C8 10.553 7.553 11 7 11H6C6.063 
//                                 14.938 9 18 13 18V17C13 16.447 13.447 16 14 16Z">
//                                 </path>
//                             </svg>
//                             <div className="shiny-button-contents">
//                                 Join Call
//                                 <div className="shiny-button-container">
//                                     <div className="shiny-button-flex">
//                                         <div className="shiny-button-inner"></div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </button>
//                         <button disabled={this.state.startCall} type="button" id="start-call" className="faint-boost-shiny-button start-call-button" onClick={this.joinCall.bind(this)}>
//                             <svg x="0" y="0" className="icon-phone-2" aria-hidden="true" role="img" width="24" height="24" viewBox="0 0 24 24">
//                                 <path fill="currentColor" fillRule="evenodd" clipRule="evenodd" d="M11 5V3C16.515 3 21 7.486 21 13H19C19 
//                                 8.589 15.411 5 11 5ZM17 13H15C15 10.795 13.206 9 11 9V7C14.309 7 17 9.691 17 13ZM11 11V13H13C13 
//                                 11.896 12.105 11 11 11ZM14 16H18C18.553 16 19 16.447 19 17V21C19 21.553 18.553 22 18 22H13C6.925 
//                                 22 2 17.075 2 11V6C2 5.447 2.448 5 3 5H7C7.553 5 8 5.447 8 6V10C8 10.553 7.553 11 7 11H6C6.063 
//                                 14.938 9 18 13 18V17C13 16.447 13.447 16 14 16Z">
//                                 </path>
//                             </svg>
//                             <div className="shiny-button-contents">
//                                 Start Call
//                                 <div className="shiny-button-container">
//                                     <div className="shiny-button-flex">
//                                         <div className="shiny-button-inner"></div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </button>
//                         <button disabled={this.state.leaveCall} type="button" id="leave-call" className="faint-boost-shiny-button drop-call-button" onClick={this.leaveCall.bind(this)}>
//                             <svg className="disconnect-call-icon" aria-hidden="true" role="img" width="24" height="24"
//                                 viewBox="0 0 24 24">
//                                 <path fill="currentColor" fillRule="evenodd" clipRule="evenodd" d="M21.1169 1.11603L22.8839 
//                                     2.88403L19.7679 6.00003L22.8839 9.11603L21.1169 10.884L17.9999 7.76803L14.8839 10.884L13.1169 
//                                     9.11603L16.2329 6.00003L13.1169 2.88403L14.8839 1.11603L17.9999 4.23203L21.1169 1.11603ZM18 22H13C6.925 
//                                     22 2 17.075 2 11V6C2 5.447 2.448 5 3 5H7C7.553 5 8 5.447 8 6V10C8 10.553 7.553 11 7 11H6C6.063 14.938 9 18 13 
//                                     18V17C13 16.447 13.447 16 14 16H18C18.553 16 19 16.447 19 17V21C19 21.553 18.553 22 18 22Z">
//                                 </path>
//                             </svg>
//                             <div className="shiny-button-contents">
//                                 Leave Call
//                                 <div className="shiny-button-container">
//                                     <div className="shiny-button-flex">
//                                         <div className="shiny-button-inner"></div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </button>
//                     </div>
//                 </div>


//                 {/* <div className="friend-index-item call">
//                     <div className="friend-index-item-wrapper-inner call">
//                         <div className="friend-account-info-wrapper-super">
//                             <div className={`${this.props.currentUser.photo === undefined ?
//                                 `user-pfp-svg-render color-${this.props.currentUser.color_tag}` : `friend-info`}`}>
//                                 <img src={`${this.props.currentUser.photo === undefined ? render_User_PFP : this.props.currentUser.photo}`} alt="pfp" />
//                             </div>
//                             <div className="friend-account-info-wrapper">
//                                 <div className="friend-account-info">
//                                     <div className="friend-tag">
//                                         {this.props.currentUser.username}
//                                         <span>#{this.props.currentUser.strife_id_tag}</span>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div> */}
//                 <div id="videos">
//                     <video id="localVideo" muted autoPlay playsInline></video>
//                     <video id="remoteVideo" autoPlay playsInline></video>
//                 </div>

//             </div>
//         )
//     }



// }


// export default STRIFE_WEB_RTC_DM_CALL;





// import React from "react";
// import { broadcastData } from "../../frontend/utils/voice_and_video_calls_api_util.js";
// import { JOIN_CALL, LEAVE_CALL, EXCHANGE, ice } from "../../frontend/actions/video_and_voice_calls_actions.js";
// import { createConsumer } from "@rails/actioncable";

// class STRIFE_VIDEO_AND_VOICE_CALL_VIA_WEB_RTC_ON_RAILS extends React.Component {

//     constructor (props) {
//         super(props);
//         this.peerConnectionPeers = {};
//     }

//     componentDidMount () {
//         this.localVideo = document.getElementById("local-video");
//         this.remoteVideoContainer = document.getElementById("remote-video-container");
//         navigator.mediaDevices.getUserMedia(
//             {
//                 audio: true,
//                 video: true
//             }
//         ).then(stream => {
//             this.localStream = stream;
//             this.localVideo.srcObject = stream;
//         }).catch((error) => { console.log(error) });
//     }

//     componentDidUpdate () {
//         this.localVideo = document.getElementById("local-video");
//         navigator.mediaDevices.getUserMedia(
//             {
//                 audio: true,
//                 video: true
//             }
//         ).then(stream => {
//             this.localStream = stream;
//             this.localVideo.srcObject = stream;
//         }).catch((error) => { console.log(error) });

//     }
//     componentWillUnmount () {
//         const pcKeys = Object.keys(this.peerConnectionPeers);
//         for (let i = 0; i < pcKeys.length; i++) {
//             this.peerConnectionPeers[pcKeys[i]].close();
//         }
//         App.cable.subscriptions.subscriptions = [];
//         broadcastData({
//             type: LEAVE_CALL,
//             from: this.props.currentUserId,
//             id: "1000"
//         });
//     }

//     joinCall (e) {
//         //connect to action cable
//         //switch on broadcasted data.type and decide what to do from there

//         e.preventDefault();
//         const secureUser = this.props.currentUserId;
//         App.cable.subscriptions.create(
//             { channel: "CallChannel", id: "1000" },
//             {
//                 connected: () => {
//                     setTimeout(() => {
//                         broadcastData({
//                             type: JOIN_CALL,
//                             from: secureUser,
//                             id: "1000"
//                         });
//                     }, 1000)
//                 },
//                 received: data => {
//                     if (data.from === secureUser) return;
//                     switch (data.type) {
//                         case JOIN_CALL:
//                             return this.join(data);
//                         case EXCHANGE:
//                             if (data.to !== secureUser) return;
//                             return this.exchange(data);
//                         case LEAVE_CALL:
//                             return this.removeUser(data);
//                         default:
//                             return;
//                     }
//                 },
//             });
//     }

//     leaveCall (e) {

//         e.preventDefault();
//         const pcKeys = Object.keys(this.peerConnectionPeers);
//         for (let i = 0; i < pcKeys.length; i++) {
//             this.peerConnectionPeers[pcKeys[i]].close();
//         }
//         this.peerConnectionPeers = {};
//         this.localVideo.srcObject.getTracks().forEach(function (track) {
//             track.stop();
//         })
//         this.localVideo.srcObject = null;
//         App.cable.subscriptions.subscriptions = [];

//         this.remoteVideoContainer.innerHTML = "";

//         broadcastData({
//             type: LEAVE_CALL,
//             from: this.props.currentUserId,
//             id: "1000"
//         });
//         this.props.closeModal();
//     }

//     join (data) {
//         this.createPeerConnection(data.from, true)
//     }
//     removeUser (data) {
//         let video = document.getElementById(`remoteVideoContainer+${data.from}`);
//         video && video.remove();

//         let peers = this.peerConnectionPeers
//         delete peers[data.from]
//     }
//     createPeerConnection (userId, isOffer) {


//         let peerConnection = new RTCPeerConnection(ice)
//         this.peerConnectionPeers[userId] = peerConnection;
//         let vidcount = 0;
//         this.localStream.getTracks().forEach((track) => peerConnection.addTrack(track, this.localStream));

//         let that = this;
//         if (isOffer) {
//             peerConnection.createOffer().then(offer => {
//                 peerConnection.setLocalDescription(offer).then(() => {

//                     setTimeout(() => {
//                         broadcastData({
//                             type: EXCHANGE,
//                             from: that.props.currentUserId,
//                             to: userId,
//                             sdp: JSON.stringify(peerConnection.localDescription),
//                             id: "1000"
//                         })
//                     }, 1000);
//                 });

//             });
//         }
//         peerConnection.onicecandidate = (e) => {
//             if (e.candidate) {
//                 setTimeout(() => {
//                     broadcastData({
//                         type: EXCHANGE,
//                         from: that.props.currentUserId,
//                         to: userId,
//                         sdp: JSON.stringify(e.candidate),
//                         id: "1000"
//                     });
//                 }, 1000);
//             }
//         }
//         peerConnection.ontrack = e => {
//             if (vidcount === 0) {
//                 const remoteVid = document.createElement("video");
//                 remoteVid.id = `remoteVideoContainer+${userId}`;
//                 remoteVid.autoplay = "autoplay";
//                 remoteVid.srcObject = e.streams[0];
//                 this.remoteVideoContainer.appendChild(remoteVid);
//                 vidcount++
//             }
//         };
//         peerConnection.oniceconnectionstatechange = e => {
//             if (peerConnection.iceConnectionState === 'disconnected') {

//                 broadcastData({
//                     type: LEAVE_CALL,
//                     from: userId,
//                     id: "1000"
//                 });

//             }
//         };
//         return peerConnection;
//     }
//     exchange (data) {

//         const that = this
//         let peerConnection;

//         if (!this.peerConnectionPeers[data.from]) {
//             peerConnection = this.createPeerConnection(data.from, false);
//         } else {
//             peerConnection = this.peerConnectionPeers[data.from];
//         }


//         if (data.candidate) {
//             let candidate = JSON.parse(data.candidate)
//             peerConnection.addIceCandidate(new RTCIceCandidate(candidate))
//         }

//         if (data.sdp) {
//             const sdp = JSON.parse(data.sdp);

//             if (sdp && !sdp.candidate) {
//                 peerConnection.setRemoteDescription(sdp).then(() => {
//                     if (sdp.type === "offer") {
//                         peerConnection.createAnswer().then(answer => {
//                             peerConnection.setLocalDescription(answer)
//                                 .then(() => {
//                                     setTimeout(() => {
//                                         broadcastData({
//                                             type: EXCHANGE,
//                                             from: that.props.currentUserId,
//                                             to: data.from,
//                                             sdp: JSON.stringify(peerConnection.localDescription),
//                                             id: "1000"
//                                         });
//                                     }, 1000);
//                                 });

//                         }).catch(errors => console.log(errors));

//                     }
//                 }).catch((errors) => console.log(errors));

//             }
//         }
//     }

//     render () {


//         return (


//             <div className="strife-web-call-container" onClick={e => e.stopPropagation()}>

//                 <div id='vidContainer' className='video-call'>
//                     <div id="remote-video-container"></div>
//                     <video id='local-video' muted autoPlay></video>
//                     <div className='video-controls'>

//                         <button className='join-call' onClick={this.joinCall.bind(this)}>
//                             Join Call
//                         </button>

//                         <button className='leave-call' onClick={this.leaveCall.bind(this)}>
//                             Leave Call
//                         </button>
//                     </div>
//                 </div>
//             </div>
//         )
//     }

// }

// // export default STRIFE_VIDEO_AND_VOICE_CALL_VIA_WEB_RTC_ON_RAILS;











// // import React from 'react';
// // import { Route, Switch } from 'react-router-dom';
// // import { AuthRoute, ProtectedRoute } from '../utils/route_util.jsx';
// // import SplashContainer from "./splash/splash_container";
// // import SessionSignInFormContainer from './session/session_signin_form_container';
// // import SessionSignUpFormContainer from './session/session_signup_form_container';
// // import UserNavContainer from './users/user_nav/user_nav_container';
// // import ServerNavBarContainer from './server/server_nav_bar/server_nav_bar_container';
// // import ModalManagerContainer from './modals/modal_manager_container';
// // import DMNavBarContainer from './dm_servers/dm_nav_bar/dm_nav_bar_container.js';
// // import HomePageContainer from './friends/friends_page_main/friends_home_page_container.js';
// // import LoadingScreenContainer from './loading_screen/loading_screen_container.js';
// // import IntrusionPreventionLoadingScreenContainer from './loading_screen/instrusion_loading_screen_container.js';
// // import DeletedServerLoadingScreenContainer from './loading_screen/delete_server_loading_screen_container.js';
// // import ExploreServersContainer from './server/server_search/server_search_container.js';
// // import PROTECTED_DM_SERVER_CONTAINER from './dm_servers/dm_server_security/protect_dm_server_container.js';
// // import PROTECTED_SERVER_CONTAINER from './server/server_security/protect_server_container.js';
// // import STRIFE_VOICE_CALL_API_CONTAINER from './voice_calls/voice_call_container.js';
// // import _STRIFE_CORE_CONTAINER_ from './Core/CORE_CONTAINER.js';
// // // import _STRIFE_CORE_CABLE_ from './Core/CORE_CABLE.js';
// // // import { useStore} from 'react-redux';
// // // import { useEffect } from 'react';

// // const App = () => {


// //     // const CABLE_STORE = useStore();
// //     // useEffect(() => {
// //     //     _STRIFE_CORE_CABLE_(CABLE_STORE);
// //     //     // return () => {
// //     //         // App.StrifeCore.subscription.un
// //     //     // };
// //     // }, []);

// //     return (
// //         <div>
// //             <Route path='/' component={ModalManagerContainer}></Route>
// //             <ProtectedRoute  component={_STRIFE_CORE_CONTAINER_} ></ProtectedRoute>
// //             <ProtectedRoute path="/channels/:serverId/" component={ServerNavBarContainer} />
// //             <ProtectedRoute path="/channels/" component={UserNavContainer} />
// //             <ProtectedRoute exact path="/voice/" component={STRIFE_VOICE_CALL_API_CONTAINER} />

// //             <Switch>
// //                 <ProtectedRoute path="/channels/@me" component={DMNavBarContainer} />
// //             </Switch>


// //             {/* render proper component for messages type or friends list */}
// //             <Switch>

// //                 <ProtectedRoute path="/channels/@me/:dmServerId" component={PROTECTED_DM_SERVER_CONTAINER} />
// //                 <ProtectedRoute path="/channels/:serverId/:channelId" component={PROTECTED_SERVER_CONTAINER} />
// //                 <ProtectedRoute path="/channels/@me" component={HomePageContainer} />

// //             </Switch>

// //             {/* alt routes to other areas not involving main app */}
// //             <Switch>
// //                 <ProtectedRoute path="/loading/" component={LoadingScreenContainer} />
// //                 <ProtectedRoute path="/telefrag/" component={DeletedServerLoadingScreenContainer} />
// //                 <ProtectedRoute path='/$TR!F3-INTRUSION-PREVENTION/' component={IntrusionPreventionLoadingScreenContainer} />
// //                 <ProtectedRoute path="/channels/guild-discovery/" component={ExploreServersContainer} />
// //             </Switch>


// //             {/* this is the user auth routes */}
// //             <Switch>
// //                 <AuthRoute exact path="/" component={SplashContainer} />
// //                 <AuthRoute path="/register" component={SessionSignUpFormContainer} />
// //                 <AuthRoute path="/login" component={SessionSignInFormContainer} />
// //             </Switch>

// //         </div>
// //     )
// // }

// // export default App;