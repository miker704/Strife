// import React from "react"
// import EditUserNameContainer from "../user_edit_username_form/user_edit_username_container.js"
// import EditUserEmailContainer from "../user_edit_email_form/user_edit_email_container.js"
// import EditUserPFPContainer from "../user_edit_profile_pic_form/user_edit_pfp_container.js"
// import EditUserPasswordContainer from "../user_edit_password_form/user_edit_password_container.js"
// import EditUserPhoneNumberContainer from "../user_edit_phone_number_form/user_edit_phone_number_container.js"
// import RemoveUserPhoneNumberContainer from "../user_remove_phone_number_form/user_remove_phone_number_container.js"
// import DisableUserAccountContainer from "../user_disable_account_form/user_disable_account_container.js"
// import DeleteUserAccountContainer from "../user_delete_account_form/user_delete_account_container.js"
// import EditUserBannerContainer from "../user_edit_banner_form/user_edit_banner_container.js"

// class UserProfile extends React.Component {

//   constructor (props) {

//     super(props)

//     this.state = {

//       user: this.props.currentUser,
//       userEdit: false,
//       deleteForm: false,
//       userNameEdit: false,
//       changeEmail: false,
//       changePhone: false,
//       changePassword: false,
//       changePFP: false,
//       changeBanner: false,
//       removePhoneNumber: false,
//       disableUser: false,
//       deleteUser: false,
//       demoUser: false,
//       userEmail: this.props.currentUser.email,
//       userPhone: this.props.currentUser.phone_number,
//       reveal: "Reveal",
//       reveal1: "Reveal",
//       password: ""

//     };
//     this.handleSubmit = this.handleSubmit.bind(this)
//     this.scrambleEmail = this.scrambleEmail.bind(this);
//     this.scramblePhoneNumber = this.scramblePhoneNumber.bind(this);
//     this.handleRevealClick = this.handleRevealClick.bind(this);
//     this.handleRevealClick2 = this.handleRevealClick2.bind(this);
//     this.handleCloseModal = this.handleCloseModal.bind(this);
//     this.renderEditUserNameModal = this.renderEditUserNameModal.bind(this);
//     this.openModal = this.openModal.bind(this);
//     this.closeModal = this.closeModal.bind(this);
//     this.handleESC = this.handleESC.bind(this);
//     this.handleSubModalClose = this.handleSubModalClose.bind(this);
//     this.closeAllSubMods = this.closeAllSubMods.bind(this);
//     this.renderChangeEmail = this.renderChangeEmail.bind(this);
//     this.renderChangePhone = this.renderChangePhone.bind(this);
//     this.renderChangePassword = this.renderChangePassword.bind(this);
//     this.renderChangeUserPFP = this.renderChangeUserPFP.bind(this);
//     this.renderChangeUserBanner = this.renderChangeUserBanner.bind(this);
//     this.renderRemovePhoneNumber = this.renderRemovePhoneNumber.bind(this);
//     this.handleLogout = this.handleLogout.bind(this);
//     this.checkIfDemoUser = this.checkIfDemoUser.bind(this);
//     this.renderDeleteUser = this.renderDeleteUser.bind(this);
//     this.renderDisableUser = this.renderDisableUser.bind(this);


//   }



//   renderDeleteUser () {
//     if (this.state.deleteUser === true) {
//       window.removeEventListener('keyup', this.props.handleESC, false);
//       window.addEventListener('keyup', this.handleESC, false);
//       return (
//         <div className="edit-userInfo-modal-wrapper" onClick={() => this.closeModal("deleteUser")} >
//           <div className="edit-user-flex-box">
//             <div id="edit-userInfo-model" className="edit-userInfo-model" onClick={e => e.stopPropagation()}>

//               <div onSubmit={() => this.handleSubmit("deleteUser")}>
//                 <DeleteUserAccountContainer />

//               </div>

//             </div>
//           </div>
//         </div>
//       )


//     }
//   }

//   renderDisableUser () {
//     if (this.state.disableUser === true) {
//       window.removeEventListener('keyup', this.props.handleESC, false);
//       window.addEventListener('keyup', this.handleESC, false);
//       return (
//         <div className="edit-userInfo-modal-wrapper" onClick={() => this.closeModal("disableUser")} >
//           <div className="edit-user-flex-box">
//             <div id="edit-userInfo-model" className="edit-userInfo-model" onClick={e => e.stopPropagation()}>

//               <div onSubmit={() => { this.handleSubmit("disableUser") }}>
//                 <DisableUserAccountContainer />
//               </div>

//             </div>
//           </div>
//         </div>
//       )


//     }
//   }




//   handleLogout () {
//     this.props.closeModal();
//     this.props.logoutUser();
//   }

//   checkIfDemoUser () {

//     //this will lock bot, demo user 1, and 2 , and stacy from being edited /deleted
//     const auth_IDs = [1, 2, 3, 4];
//     if (auth_IDs.includes(this.props.currentUser.id)) {

//       //set demouserstate active
//       this.setState({ demoUser: true });
//       document.getElementById("edit-username-button").disabled = true;
//       document.getElementById("edit-user-profile-pic-button").disabled = true;
//       document.getElementById("change-password-button").disabled = true;
//       document.getElementById("edit-email-button").disabled = true;
//       document.getElementById("edit-phone-button").disabled = true;
//       // document.getElementById("remove-phone-button").disabled = true;
//       // document.getElementById("enable-two-auth-button"); // no disable as this feature is diabled already for all users
//       document.getElementById("disable-account-button").disabled = true;
//       document.getElementById("delete-account-button").disabled = true;
//       document.getElementById("edit-user-banner-button").disabled = true;
//     }
//     else {
//       this.setState({ demoUser: false });
//       document.getElementById("edit-username-button").disabled = false;
//       document.getElementById("edit-user-profile-pic-button").disabled = false;
//       document.getElementById("change-password-button").disabled = false;
//       document.getElementById("edit-email-button").disabled = false;
//       document.getElementById("edit-phone-button").disabled = false;
//       // document.getElementById("remove-phone-button").disabled = false;
//       document.getElementById("disable-account-button").disabled = false;
//       document.getElementById("delete-account-button").disabled = false;
//       document.getElementById("edit-user-banner-button").disabled = false;

//       return;
//     }


//   }




//   renderRemovePhoneNumber () {
//     if (this.state.removePhoneNumber === true) {
//       window.removeEventListener('keyup', this.props.handleESC, false);
//       window.addEventListener('keyup', this.handleESC, false);

//       return (
//         <div className="edit-userInfo-modal-wrapper" onClick={() => this.closeModal("removePhoneNumber")} >
//           <div className="edit-user-flex-box">
//             <div id="edit-userInfo-model" className="edit-userInfo-model" onClick={e => e.stopPropagation()}>

//               <div onSubmit={() => this.handleSubmit("removePhoneNumber")}>
//                 <RemoveUserPhoneNumberContainer />
//               </div>

//             </div>
//           </div>
//         </div>
//       )


//     }
//   }


//   renderChangePhone () {
//     if (this.state.changePhone === true) {
//       window.removeEventListener('keyup', this.props.handleESC, false);
//       window.addEventListener('keyup', this.handleESC, false);

//       return (
//         <div className="edit-userInfo-modal-wrapper" onClick={() => this.closeModal("changePhone")} >
//           <div className="edit-user-flex-box">
//             <div id="edit-userInfo-model" className="edit-userInfo-model" onClick={e => e.stopPropagation()}>
//               <div className="edit-user-info-exit-button" >

//                 <svg
//                   width="24"
//                   height="24"
//                   viewBox="0 0 24 24"
//                   onClick={() => this.handleSubModalClose("changePhone")}
//                 ><path fill="currentColor" d="M18.4 4L12 10.4L5.6 4L4 5.6L10.4 12L4 18.4L5.6 20L12 13.6L18.4 20L20 18.4L13.6 12L20 5.6L18.4 4Z"></path>
//                 </svg>

//               </div>
//               <div onSubmit={() => this.handleSubmit("changePhone")}>
//                 <EditUserPhoneNumberContainer />
//               </div>

//             </div>
//           </div>
//         </div>
//       )




//     }
//   }

//   renderChangePassword () {
//     if (this.state.changePassword === true) {
//       window.removeEventListener('keyup', this.props.handleESC, false);
//       window.addEventListener('keyup', this.handleESC, false);
//       return (
//         <div className="edit-userInfo-modal-wrapper" onClick={() => this.closeModal("changePassword")} >
//           <div className="edit-user-flex-box">
//             <div id="edit-userInfo-model" className="edit-userInfo-model" onClick={e => e.stopPropagation()}>
//               <div className="edit-user-info-exit-button" >

//                 <svg
//                   width="24"
//                   height="24"
//                   viewBox="0 0 24 24"
//                   onClick={() => this.handleSubModalClose("changePassword")}
//                 ><path fill="currentColor" d="M18.4 4L12 10.4L5.6 4L4 5.6L10.4 12L4 18.4L5.6 20L12 13.6L18.4 20L20 18.4L13.6 12L20 5.6L18.4 4Z"></path>
//                 </svg>

//               </div>
//               <div onSubmit={() => this.handleSubmit("changePassword")}>
//                 <EditUserPasswordContainer />
//               </div>

//             </div>
//           </div>
//         </div>
//       )
//     }
//   }

//   renderChangeUserPFP () {
//     if (this.state.changePFP === true) {
//       window.removeEventListener('keyup', this.props.handleESC, false);
//       window.addEventListener('keyup', this.handleESC, false);


//       return (
//         <div className="edit-userInfo-modal-wrapper" onClick={() => this.closeModal("changePFP")} >
//           <div className="edit-user-flex-box">
//             <div id="edit-userInfo-model" className="edit-userInfo-model" onClick={e => e.stopPropagation()}>
//               <div className="edit-user-info-exit-button" >

//                 <svg
//                   width="24"
//                   height="24"
//                   viewBox="0 0 24 24"
//                   onClick={() => this.handleSubModalClose("changePFP")}
//                 ><path fill="currentColor" d="M18.4 4L12 10.4L5.6 4L4 5.6L10.4 12L4 18.4L5.6 20L12 13.6L18.4 20L20 18.4L13.6 12L20 5.6L18.4 4Z"></path>
//                 </svg>

//               </div>
//               <div onSubmit={() => this.handleSubmit("changePFP")}>
//                 <EditUserPFPContainer />

//               </div>

//             </div>
//           </div>
//         </div>
//       )

//     }
//   }

//   renderChangeUserBanner () {
//     if (this.state.changeBanner === true) {
//       window.removeEventListener('keyup', this.props.handleESC, false);
//       window.addEventListener('keyup', this.handleESC, false);


//       return (
//         <div className="edit-userInfo-modal-wrapper" onClick={() => this.closeModal("changeBanner")} >
//           <div className="edit-user-flex-box">
//             <div id="edit-userInfo-model" className="edit-userInfo-model" onClick={e => e.stopPropagation()}>
//               <div className="edit-user-info-exit-button" >

//                 <svg
//                   width="24"
//                   height="24"
//                   viewBox="0 0 24 24"
//                   onClick={() => this.handleSubModalClose("changeBanner")}
//                 ><path fill="currentColor" d="M18.4 4L12 10.4L5.6 4L4 5.6L10.4 12L4 18.4L5.6 20L12 13.6L18.4 20L20 18.4L13.6 12L20 5.6L18.4 4Z"></path>
//                 </svg>

//               </div>
//               <div onSubmit={() => this.handleSubmit("changeBanner")}>
//                 <EditUserBannerContainer />

//               </div>

//             </div>
//           </div>
//         </div>
//       )

//     }
//   }


//   renderChangeEmail () {
//     if (this.state.changeEmail === true) {
//       window.removeEventListener('keyup', this.props.handleESC, false);
//       window.addEventListener('keyup', this.handleESC, false);
//       return (
//         <div className="edit-userInfo-modal-wrapper" onClick={() => this.closeModal("changeEmail")} >
//           <div className="edit-user-flex-box">
//             <div id="edit-userInfo-model" className="edit-userInfo-model" onClick={e => e.stopPropagation()}>
//               <div className="edit-user-info-exit-button" >

//                 <svg
//                   width="24"
//                   height="24"
//                   viewBox="0 0 24 24"
//                   onClick={() => this.handleSubModalClose("changeEmail")}
//                 ><path fill="currentColor" d="M18.4 4L12 10.4L5.6 4L4 5.6L10.4 12L4 18.4L5.6 20L12 13.6L18.4 20L20 18.4L13.6 12L20 5.6L18.4 4Z"></path>
//                 </svg>

//               </div>
//               <div onSubmit={() => this.handleSubmit("changeEmail")}>
//                 <EditUserEmailContainer />
//               </div>

//             </div>
//           </div>
//         </div>
//       )
//     }
//   }



//   closeAllSubMods () {
//     let array = [
//       'userNameEdit',
//       'changeEmail',
//       'changePhone',
//       'changePassword',
//       'changePFP',
//       'changeBanner',
//       'removePhoneNumber',
//       "disableUser",
//       "deleteUser",

//     ];
//     for (let i = 0; i < array.length; i++) {
//       this.handleSubModalClose(array[i])
//       // this.closeModal(i)
//       this.closeModal(array[i])
//       window.removeEventListener('keyup', this.handleESC, false);
//       window.addEventListener('keyup', this.props.handleESC, false);

//     }
//     window.removeEventListener('keyup', this.handleESC, false);
//     window.addEventListener('keyup', this.props.handleESC, false);


//   }


//   handleESC (e) {
//     const keys = {
//       27: () => {
//         e.preventDefault();
//         this.closeAllSubMods();
//         window.removeEventListener('keyup', this.handleESC, false);

//       },
//     };
//     if (keys[e.keyCode]) {
//       keys[e.keyCode]();
//     }
//   }



//   handleSubModalClose (subModalName) {

//     let submodalToClose = document.getElementById("edit-userInfo-model")
//     submodalToClose.classList.add("transition-out");
//     // submodalToClose.className = "edit-userInfo-model transition-out"

//     // setTimeout(() => {
//     // this.props.removeSessionErrors();
//     this.closeModal(subModalName);
//     // }, 10);
//     // return submodalToClose

//   }



//   openModal (field) {
//     this.setState({ [field]: true })

//   }

//   closeModal (field) {

//     if (this.mounted) {
//       setTimeout(() => {
//         this.props.removeSessionErrors();
//         this.setState({ [field]: false })
//         window.removeEventListener('keyup', this.handleESC, false);
//         window.addEventListener('keyup', this.props.handleESC, false);

//       }, 100)
//       window.removeEventListener('keyup', this.handleESC, false);

//       window.addEventListener('keyup', this.props.handleESC, false);

//     }
//   }



//   renderEditUserNameModal () {
//     if (this.state.userNameEdit) {
//       window.removeEventListener('keyup', this.props.handleESC, false);
//       window.addEventListener('keyup', this.handleESC, false);

//       return (


//         <div className="edit-userInfo-modal-wrapper" onClick={() => this.closeModal("userNameEdit")} >
//           <div className="edit-user-flex-box">
//             <div id="edit-userInfo-model" className="edit-userInfo-model" onClick={e => e.stopPropagation()}>
//               <div className="edit-user-info-exit-button" >

//                 <svg
//                   width="24"
//                   height="24"
//                   viewBox="0 0 24 24"
//                   onClick={() => this.handleSubModalClose("userNameEdit")}
//                 ><path fill="currentColor" d="M18.4 4L12 10.4L5.6 4L4 5.6L10.4 12L4 18.4L5.6 20L12 13.6L18.4 20L20 18.4L13.6 12L20 5.6L18.4 4Z"></path>
//                 </svg>

//               </div>
//               <div onSubmit={() => this.handleSubmit("userNameEdit")}>
//                 <EditUserNameContainer />
//               </div>

//             </div>
//           </div>
//         </div>


//       )
//     }
//   }


//   handleCloseModal () {
//     let modalToClose = document.getElementById("user-profile");
//     modalToClose.classList.add("transition-out");
//     setTimeout(() => {
//       this.props.removeSessionErrors();
//       this.props.closeModal();
//     }, 100);
//   }


//   componentDidMount () {
//     this.scrambleEmail();
//     this.scramblePhoneNumber();
//     this.checkIfDemoUser();
//     this.mounted = true;
//     // this.props.reSyncCurrentUser(this.props.currentUser.id);
//     window.addEventListener('keyup', this.props.handleESC, false);


//   }
//   componentWillUnmount () {
//     this.mounted = false;
//     window.removeEventListener('keyup', this.props.handleESC, false);
//     this.props.removeSessionErrors();

//   }



//   handleRevealClick (e) {

//     if (this.state.reveal === "Reveal") {
//       this.setState({ reveal: "Hide" });
//     }
//     else if (this.state.reveal === "Hide") {
//       this.setState({ reveal: "Reveal" });
//     }

//   }

//   handleRevealClick2 (e) {

//     if (this.state.reveal1 === "Reveal") {
//       this.setState({ reveal1: "Hide" });
//     }
//     else if (this.state.reveal1 === "Hide") {
//       this.setState({ reveal1: "Reveal" });
//     }

//   }

//   handleSubmit (modalName) {
//     setTimeout(() => {
//       if (this.props.errors.length === 0) {
//         this.closeModal(modalName);
//         // this.handleSubModalClose(modalName);
//       }
//       // else {
//       // this.props.removeSessionErrors();
//       // //   // this.handleSubModalClose(modalName);
//       //   return;
//       // }

//     }, 1000);

//     // if (this.props.errors.length > 0) {
//     //   setTimeout(() => {
//     //     this.props.removeSessionErrors();

//     //   }, 2000)
//     // }


//     //reduce the timepout of closing the window allows for the erros to be processed .
//   }

//   scrambleEmail () {
//     // let e_mail = this.state.userEmail;
//     let e_mail = this.props.currentUser.email;
//     let email_Scramble = "";
//     for (let i = 0; i < e_mail.length; i++) {
//       if (e_mail[i] === "@") {
//         email_Scramble = email_Scramble + e_mail.slice(i);
//         return email_Scramble;
//       }
//       else {
//         email_Scramble += "*";
//       }
//     }

//   }

//   scramblePhoneNumber () {
//     if (this.props.currentUser.phone_number === null) {
//       return "";
//     }
//     else {
//       // let phoneNum = this.state.userPhone.toString();
//       let phoneNum = this.props.currentUser.phone_number;
//       let part1 = phoneNum.slice(0, -4);
//       part1 = part1.replace(/\W/g, "*");
//       part1 = part1.replace(/\d/g, "*") + phoneNum.slice(-4);
//       return part1;
//     }
//   }



//   render () {

//     let default_profile_pic = this.props.currentUser.photo === undefined ?
//       <div className={`user-avatar-img-svg-render color-${this.props.currentUser.color_tag}`}>
//         <img className="user-avatar-img-svg" />
//       </div> : <img src={this.props.currentUser.photo} alt=" " />
//     // let default_profile_pic = this.props.currentUser.photo === undefined ? "https://strife-seeds.s3.amazonaws.com/defaultProfilePic.png" : this.props.currentUser.photo;
//     let scrambledEmail = this.state.reveal1 === "Reveal" ? this.scrambleEmail() : this.props.currentUser.email;
//     let scramblePhone = this.state.reveal === "Reveal" ? this.scramblePhoneNumber() : this.props.currentUser.phone_number;
//     const { reveal } = this.state.reveal;
//     let removePhoneNum = this.state.demoUser === true ? ("") : this.props.currentUser.phone_number !== null ? (
//       <button id="remove-phone-button" type="button" onClick={() => this.openModal("removePhoneNumber")} className="remove-phone-num">Remove</button>
//     ) : ("");
//     let revealPhone = this.props.currentUser.phone_number !== null ? (
//       <button id="reveal" type="button" className="reveal-button" onClick={() => this.handleRevealClick()}>{this.state.reveal}</button>
//     ) : ("")
//     let accountEditingLockedMessage = this.state.demoUser === true ? (<div className="demo-edit-lock-warning">
//       <p>Editing Disabled For Demo Accounts</p>
//       {/* <p>Create Your own account to edit account information and credentials</p> */}
//     </div>) : ("");


//     return (
//       <div className="user-profile-wrapper" onClick={e => e.stopPropagation()}>
//         {this.renderChangeUserPFP()}
//         {this.renderDeleteUser()}
//         {this.renderDisableUser()}
//         {this.renderChangePassword()}
//         {this.renderRemovePhoneNumber()}
//         {this.renderChangeEmail()}
//         {this.renderChangePhone()}
//         {this.renderEditUserNameModal()}
//         {this.renderChangeUserBanner()}

//         <div className="user-profile" id="user-profile">

//           <div className="sidebar">
//             <div className="sidebar-scrollbar">
//               <div className="sidebar-inner">

//                 <div className="user-profile-left-side">


//                   <ul className="user-profile-item-list">

//                     <li>
//                       <h3 className="user-profile-header3">User Settings</h3>
//                     </li>


//                     {/* <Link to={`/users/${this.props.currentUser.id}`}> */}

//                     <li className="user-profile-item force">My Account</li>

//                     {/* </Link> */}

//                     <li className="user-profile-item">Profiles</li>
//                     <li className="user-profile-item">Privacy & Safety</li>
//                     <li className="user-profile-item">Authorized Apps</li>
//                     <li className="user-profile-item">Devices</li>
//                     <li className="user-profile-item">Connections</li>
//                     <li className="user-profile-item">Friend Requests</li>
//                     <div className="user-settings-separator"></div>
//                     <li><h3 className="user-profile-header3">Billing Settings</h3></li>
//                     <li className="user-profile-item" ><div className="strife-nitro-lbl">
//                       Nitro
//                       <div className="strife-nitro-img">
//                         <svg className='strife-nitro-clock1'
//                           aria-hidden="true" role="img" width="12" height="12" viewBox="0 0 20 20">
//                           <g fill="none" fillRule="evenodd">
//                             <path fill="currentColor" d="M9.99999 1.66675C5.39699 1.66675 1.66666 5.39708
//                                                      1.66666 10.0001C1.66666 14.6031 5.39699 18.3334 9.99999 18.3334C14.603 18.3334
//                                                       18.3333 14.6031 18.3333 10.0001C18.3333 5.39708 14.603 1.66675 9.99999
//                                                        1.66675ZM9.99999 4.66675C10.3685 4.66675 10.6667 4.96493 10.6667
//                                                         5.33342V9.61475L13.8021 11.4272C14.1211 11.6108 14.2252 12.0145
//                                                          14.0416 12.3335C13.8581 12.6525 13.4544 12.7567 13.1354 12.5731L9.73937
//                                                           10.6148C9.71333 10.6043 9.68989 10.5874 9.66646 10.5731C9.46724 10.4572
//                                                            9.33312 10.2463 9.33312 10.0002V5.3335C9.33312 4.965 9.6315 4.66675
//                                                             9.99999 4.66675Z">
//                             </path></g>
//                         </svg>
//                         1 month free</div>
//                     </div></li>
//                     <li className="user-profile-item">Server Boost</li>
//                     <li className="user-profile-item">Subscriptions</li>
//                     <li className="user-profile-item">Gift Inventory</li>
//                     <li className="user-profile-item">Billing</li>
//                     <div className="user-settings-separator"></div>
//                     <li><h3 className="user-profile-header3">App Settings</h3></li>
//                     <li className="user-profile-item">Appearance</li>
//                     <li className="user-profile-item">Accessibility</li>
//                     <li className="user-profile-item">Voice & Video</li>
//                     <li className="user-profile-item">Text & Images</li>
//                     <li className="user-profile-item">Notifications</li>
//                     <li className="user-profile-item">Keybinds</li>
//                     <li className="user-profile-item">Language</li>
//                     <li className="user-profile-item">Streamer Mode</li>
//                     <li className="user-profile-item">Advanced</li>
//                     <div className="user-settings-separator"></div>
//                     <li><h3 className="user-profile-header3">Activity Settings</h3></li>
//                     <li className="user-profile-item">Activity Privacy</li>
//                     <li className="user-profile-item">Registered Games</li>
//                     <div className="user-settings-separator"></div>
//                     <li className="user-profile-item">What's New</li>
//                     <li className="user-profile-item">HypeSquad</li>
//                     <div className="user-settings-separator"></div>
//                     <li className="user-profile-item" onClick={() => this.handleLogout()}>
//                       <div className="user-profile-item-logout-sec">
//                         Log Out
//                         <svg className="upm-logout-icon" aria-hidden="true" role="img" width="16" height="16" viewBox="0 0 24 24">
//                           <path fill="currentColor" d="M18 2H7C5.897 2 5 2.898 5 4V11H12.59L10.293 8.708L11.706 7.292L16.414 11.991L11.708 16.706L10.292 15.294L12.582 
//                                 13H5V20C5 21.103 5.897 22 7 22H18C19.103 22 20 21.103 20 20V4C20 2.898 19.103 2 18 2Z">
//                           </path>
//                         </svg>
//                       </div>
//                     </li>
//                     <div className="user-settings-separator"></div>
//                     <div className="user-profile-socials">

//                       <a className="upm-twitter" title="Twitter" href="https://twitter.com/discord/" target="_blank">
//                         <svg className="upm-twitter-icon" width="20" height="16" viewBox="0 0 20 16" aria-hidden="true" role="img">
//                           <g fill="none" fillRule="evenodd">
//                             <path fill="currentColor" d="M1,14.1538462 L1.95,14.1538462 C3.73125,14.1538462 5.5125,13.5384615
//                                       6.81875,12.4307692 C5.15625,12.4307692 3.73125,11.2 3.1375,9.6 C3.375,9.6 3.6125,9.72307692 3.85,9.72307692 
//                                       C4.20625,9.72307692 4.5625,9.72307692 4.91875,9.6 C3.1375,9.23076923 1.7125,7.63076923 1.7125,5.66153846 C2.1875,5.90769231 
//                                       2.78125,6.15384615 3.49375,6.15384615 C2.425,5.41538462 1.83125,4.18461538 1.83125,2.70769231 C1.83125,1.96923077 2.06875,1.23076923
//                                       2.30625,0.615384615 C4.20625,3.07692308 7.05625,4.67692308 10.38125,4.8 C10.2625,4.67692308 10.2625,4.30769231 10.2625,4.06153846
//                                       C10.2625,1.84615385 12.04375,0 14.18125,0 C15.25,0 16.31875,0.492307692 17.03125,1.23076923 C17.8625,1.10769231 18.8125,0.738461538 
//                                       19.525,0.246153846 C19.2875,1.23076923 18.575,1.96923077 17.8625,2.46153846 C18.575,2.46153846 19.2875,2.21538462 20,1.84615385 
//                                       C19.525,2.70769231 18.8125,3.32307692 18.1,3.93846154 L18.1,4.43076923 C18.1,9.84615385 14.18125,16 6.9375,16 
//                                       C4.68125,16 2.6625,15.3846154 1,14.1538462 Z">
//                             </path>
//                             <rect width="20" height="16"></rect>
//                           </g>
//                         </svg>

//                       </a>

//                       <a className="upm-facebook" href="https://www.facebook.com/discord/" title="Facebook" target="_blank">
//                         <svg className="upm-facebook-icon" width="16" height="16" viewBox="0 0 16 16" aria-hidden="true" role="img">
//                           <g fill="none" fillRule="evenodd">
//                             <path fill="currentColor" d="M0,1.99406028 C0,0.892771196 0.894513756,0 1.99406028,0 L14.0059397,0 C15.1072288,0 16,0.894513756 16,1.99406028 
//                                   L16,14.0059397 C16,15.1072288 15.1054862,16 14.0059397,16 L1.99406028,16 C0.892771196,16 0,15.1054862 0,14.0059397 L0,1.99406028 Z M8.23182341,16 L10.3991764,16 
//                                   L10.3991764,9.93141161 L12.5663127,9.93141161 L13,7.76405862 L10.3991764,7.76405862 L10.3246195,6.3468265 C10.3246195,5.66107601 10.5049432,5.17342158 11.4698488,5.17342158 
//                                   L12.974642,5.17385505 L12.974642,3.12202197 C12.7618079,3.09319618 12.3142495,3 11.4644304,3 C9.69001851,3 8.18500859,4.20353112 
//                                   8.18500859,6.23043964 L8.23182341,7.76405862 L6.06425368,7.76405862 L6.06425368,9.93141161 L8.23182341,9.93141161 L8.23182341,16 Z">
//                             </path>
//                             <rect width="16" height="16"></rect>
//                           </g>
//                         </svg>

//                       </a>


//                       <a className="upm-instagram" href="https://www.instagram.com/discord/" title="Instagram" target="_blank">

//                         <svg className="upm-instagram-icon" width="16" height="16" viewBox="0 0 16 16" aria-hidden="true" role="img">
//                           <g fill="none" fillRule="evenodd">
//                             <path fill="currentColor"
//                               d="M4.70012698,0.0531746 C3.84888888,0.092 3.2675238,0.22720635 2.7588254,0.42492063 C2.23292063,0.62926983 1.78692063,0.90273016 
//                                     1.3422857,1.34733333 C0.89768254,1.79196825 0.62422222,2.23796825 0.41987302,2.76387303 C0.22215872,3.27257143 0.08695238,3.85393651
//                                      0.04812698,4.7051746 C0.00920635,5.55819048 0,5.83053968 0,8.00253968 C0,10.1745079 0.00920635,10.4468571 0.04812698,11.299873
//                                      C0.08695238,12.1511111 0.22215873,12.7324762 0.41987302,13.2411746 C0.62422222,13.7670794 0.89768254,14.2130794 1.34228572,14.6577143
//                                      C1.78692062,15.1023175 2.23292062,15.3757778 2.7588254,15.5801587 C3.2675238,15.7778413 3.8488889,15.9130476 4.70012698,15.951873 
//                                     C5.55314286,15.9907937 5.82549206,16 7.99749206,16 C10.1694603,16 10.4418095,15.9907937 11.2948254,15.951873 C12.1460635,15.9130476
//                                      12.7274286,15.7778413 13.236127,15.5801587 C13.7620317,15.3757778 14.2080317,15.1023175 14.6526667,14.6577143 C15.0972698,14.2130794 
//                                     15.3707302,13.7670794 15.5751111,13.2411746 C15.7727937,12.7324762 15.908,12.1511111 15.9468254,11.299873 C15.985746,10.4468571 
//                                     15.9949524,10.1745079 15.9949524,8.00253968 C15.9949524,5.83053968 15.985746,5.55819048 15.9468254,4.7051746 C15.908,3.8539365 
//                                     15.7727937,3.27257143 15.5751111,2.76387302 C15.3707302,2.23796825 15.0972698,1.79196825 14.6526667,1.34733332 C14.2080317,0.90273016 
//                                     13.7620317,0.62926984 13.236127,0.42492064 C12.7274286,0.22720634 12.1460635,0.092 11.2948254,0.0531746 C10.4418095,0.01425397 
//                                     10.1694603,0.00504762 7.99749206,0.00504762 C5.82549206,0.00504762 5.55314286,0.01425397 4.70012698,0.0531746 
//                                     L4.70012698,0.0531746 Z M8.00001453,2.00504762 C9.95416635,2.00504762 10.185649,2.01251386 10.9573741,2.04772432 C11.6709381,2.08026206 
//                                     12.0584565,2.19948958 12.3163471,2.29971739 C12.6579641,2.43248289 12.9017646,2.59107525 13.157854,2.84719363 C13.4139723,3.10328295 
//                                     13.5725647,3.34708347 13.7053302,3.68870053 C13.805558,3.94659105 13.9247856,4.33410953 13.9573233,5.04767346 C13.9925338,5.8193986 14,6.05088127 
//                                     14,8.00506213 C14,9.95921396 13.9925338,10.1906966 13.9573233,10.9624217 C13.9247856,11.6759857 13.805558,12.0635042 13.7053302,12.3213947 C13.5725647,12.6630117 
//                                     13.4139723,12.9068123 13.157854,13.1629016 C12.9017646,13.41902 12.6579641,13.5776123 12.3163471,13.7103779 C12.0584565,13.8106057 11.6709381,13.9298332 
//                                     10.9573741,13.9623709 C10.1857652,13.9975814 9.9543116,14.0050476 8.00001453,14.0050476 C6.04568839,14.0050476 5.81426383,13.9975814 5.04262587,13.9623709 
//                                     C4.32906195,13.9298332 3.94154347,13.8106057 3.68365294,13.7103779 C3.34203588,13.5776123 3.09823536,13.41902 2.84214604,13.1629016 C2.58605671,12.9068123
//                                      2.42743531,12.6630117 2.29466977,12.3213947 C2.19444197,12.0635042 2.07521444,11.6759857 2.04267671,10.9624217 C2.00746628,10.1906966 2,9.95921395 2,8.00506212
//                                      C2,6.05088125 2.00746625,5.81939858 2.0426767,5.04767347 C2.07521444,4.33410953 2.19444196,3.94659104 2.29466977,3.68870052 C2.42743531,3.34708346 
//                                     2.58602767,3.10328294 2.84214604,2.84719362 C3.09823536,2.59107524 3.34203588,2.43248288 3.68365294,2.29971735 C3.94154346,2.19948953 4.32906194,2.08026201 
//                                     5.04262587,2.04772428 C5.81435097,2.01251381 6.04583365,2.00504758 8.00001453,2.00504758 L8.00001453,2.00504762 Z">
//                             </path>
//                             <path fill="currentColor" d="M8.0000119,10 C6.89542535,10 6,9.10457466 6,8.0000119 C6,6.89542535 
//                                   6.89542534,6 8.0000119,6 C9.10457467,6 10,6.89542534 10,8.0000119 C10,9.10457467 9.10457466,10 8.0000119,10 L8.0000119,10 Z M8.00001546,4 C5.7908468,4 4,5.7908468 4,8.00001546 
//                                   C4,10.2091532 5.7908468,12 8.00001546,12 C10.2091532,12 12,10.2091532 12,8.00001546 C12,5.7908468 10.2091532,4 8.00001546,4 L8.00001546,4 Z M13,4.00001654 C13,4.55230644 
//                                   12.5522734,5 11.9999835,5 C11.4477266,5 11,4.55230645 11,4.00001654 C11,3.44772664 11.4477266,3 11.9999835,3 C12.5522734,3 13,3.44772663 13,4.00001654 L13,4.00001654 Z">
//                             </path>
//                             <rect width="16" height="16"></rect>
//                           </g>
//                         </svg>

//                       </a>


//                     </div>
//                     <div className="version-number">
//                       <span>Stable 191743 (b61e73b)</span>
//                       <br />
//                       <span>Windows 11 64-bit</span>

//                     </div>

//                   </ul>
//                 </div>
//               </div>
//             </div>
//           </div>


//           <div className="user-profile-right-side-wrapper">
//             <div className="user-profile-rs-inner-wrapper">

//               <div className="user-profile-right-side">


//                 <div className="user-profile-header1-div">
//                   <h3 className="user-profile-header1">My Account</h3>
//                 </div>

//                 <div className="my-account-container-wrapper">

//                   <div className="my-account-container">

//                     <div className={`account-card-banner ${this.props.currentUser.banner === undefined ?
//                       `color-${this.props.currentUser.color_tag}` : ``}`}
//                       style={{ backgroundImage: `${this.props.currentUser.banner === undefined ? `none` : `url(${this.props.currentUser.banner})`}` }}>
//                       <div className="upc-strife-nitro-wrapper"
//                         title="Upload your own personalized banner and more with $TR!F3 N!TR0!"
//                       // title={`${this.props.currentUser.banner === undefined ? "Upload your own personalized banner and more with $TR!F3 N!TR0!" : "Change Banner"}`}
//                       >
//                         <button type="button" onClick={() => this.openModal("changeBanner")} id="edit-user-banner-button" className="edit-user-banner-button">
//                           <div className="upc-strife-nitro-badge">
//                             <svg className="upc-strife-nitro-icon" aria-hidden="true" role="img" width="16" height="16" viewBox="0 0 24 24">
//                               <path fill="currentColor" d="M2.98966977,9.35789159 C2.98966977,9.77582472 2.63442946,10.1240466 2.20807287,10.1240466
//                                              L1.78171628,10.1240466 C1.35535969,10.1240466 0.999948837,9.77582472 0.999948837,9.35789159 C0.999948837,8.93995846 
//                                              1.35535969,8.59173658 1.78171628,8.59173658 L2.20807287,8.59173658 C2.63442946,8.59173658 2.98966977,8.93995846 
//                                              2.98966977,9.35789159 Z M22.2467643,9.14892503 C24.0942527,12.9800344 22.3888264,17.5772989 18.3384388,19.3882867
//                                               C14.4302837,21.1297305 9.74036124,19.457998 7.9638186,15.6268886 C7.60857829,14.8607335 7.3954,14.0248673 
//                                               7.32428372,13.189001 L5.76091938,13.189001 C5.33456279,13.189001 4.97932248,12.840612 4.97932248,12.4226788 
//                                               C4.97932248,12.0047457 5.33456279,11.6565238 5.76091938,11.6565238 L8.03493488,11.6565238 C8.46129147,11.6565238 8.81653178,
//                                               11.3083019 8.81653178,10.8903688 C8.81653178,10.4724357 8.46129147,10.1240466 8.03493488,10.1240466 L4.41090388,10.1240466
//                                                C3.98454729,10.1240466 3.62913643,9.77582472 3.62913643,9.35789159 C3.62913643,8.93995846 3.98454729,8.59173658 4.41090388,
//                                                8.59173658 L9.45606667,8.59173658 C9.88242326,8.59173658 10.2376636,8.24334752 10.2376636,7.82541439 C10.2376636,7.40748126 
//                                                9.88242326,7.05925937 9.45606667,7.05925937 L7.3954,7.05925937 C6.75586512,7.05925937 6.18727597,6.57161499 6.18727597,
//                                                5.87517123 C6.18727597,5.24827153 6.68474884,4.69091591 7.3954,4.69091591 L15.4250589,4.69091591 C18.267493,4.8303384 
//                                                20.9676946,6.43235968 22.2467643,9.14892503 Z M13.2662961,8.38056332 C11.0193969,9.3919615 10.0341721,11.9973566 11.065955,
//                                                14.1998642 C12.097738,16.4023718 14.755645,17.3681317 17.0025442,16.3567335 C19.249614,15.3453354 20.2346682,12.7399402 
//                                                19.2028853,10.5374326 C18.1711023,8.33492503 15.5131953,7.36916515 13.2662961,8.38056332 Z M16.8462589,9.84548582 
//                                                L18.2673907,12.2138293 C18.338507,12.3530846 18.338507,12.4227958 18.2673907,12.5620512 L16.8462589,14.9303946 C16.7751426,
//                                                15.0696499 16.6330806,15.0696499 16.5619643,15.0696499 L13.7906465,15.0696499 C13.6485845,15.0696499 13.5774682,14.9999387 
//                                                13.5065225,14.9303946 L12.0852202,12.5620512 C12.0142744,12.4227958 12.0142744,12.3530846 12.0852202,12.2138293 L13.5065225,
//                                                9.84548582 C13.5774682,9.7062305 13.7197008,9.7062305 13.7906465,9.7062305 L16.5619643,9.7062305 C16.7041969,9.63651925 
//                                                16.7751426,9.7062305 16.8462589,9.84548582 Z">
//                               </path>
//                             </svg>
//                           </div>
//                           {`   `}Edit User Banner
//                         </button>
//                       </div>
//                       {accountEditingLockedMessage}
//                     </div>

//                     <div className="account-card-user-info">

//                       <div className="account-avatar-wrapper">
//                         {default_profile_pic}
//                       </div>

//                       <div>
//                         <div className="account-card-username-div">

//                           <div className="account-card-username-strife-id-tag">
//                             <span className="account-settings-username">{this.props.currentUser.username}</span>
//                             <span className="account-settings-strife-id-tag">#{this.props.currentUser.strife_id_tag}</span>

//                           </div>
//                           <div className="overflow-menu">
//                             <svg className="overflowMenuIcon" width="24" height="24" viewBox="0 0 24 24">
//                               <path fill="currentColor" d="M7 12.001C7 10.8964 6.10457 10.001 
//                                 5 10.001C3.89543 10.001 3 10.8964 3 12.001C3 13.1055 3.89543 14.001 5 14.001C6.10457 14.001 7 13.1055 
//                                 7 12.001ZM14 12.001C14 10.8964 13.1046 10.001 12 10.001C10.8954 10.001 10 10.8964 10 12.001C10 13.1055 
//                                 10.8954 14.001 12 14.001C13.1046 14.001 14 13.1055 14 12.001ZM19 10.001C20.1046 10.001 21 10.8964 21 
//                                 12.001C21 13.1055 20.1046 14.001 19 14.001C17.8954 14.001 17 13.1055 17 12.001C17 10.8964 17.8954 
//                                 10.001 19 10.001Z">
//                               </path>
//                             </svg>
//                           </div>

//                         </div>
//                         <div className="user-badge-container"></div>

//                       </div>

//                       <button type="button" onClick={() => this.openModal("changePFP")} id="edit-user-profile-pic-button" className="edit-user-profile-button">Edit User Profile</button>


//                     </div>

//                     <div className="account-card-background">
//                       <div className="account-card-background-inner-wrapper">
//                         <div className="account-card-background-inner-field-1">
//                           <div className="constrainedRow">
//                             <div className="constrain-username">
//                               <h5 className="constrain-username-header">Username</h5>
//                               <div className="constrain-username-inner">
//                                 <span className="const-user-name">{this.props.currentUser.username}</span>
//                                 <span className="const-id-tag">#{this.props.currentUser.strife_id_tag}</span>
//                               </div>
//                             </div>
//                           </div>
//                           <button type="button" className="edit-profile-props-button" id="edit-username-button" onClick={() => this.openModal("userNameEdit")}>Edit</button>
//                         </div>


//                         <div className="field2">

//                           <div className="constrainedRow">
//                             <div>
//                               <h5 className="constrain-username-header">Email</h5>
//                               <div>
//                                 <span className="const-hidden-props">{scrambledEmail}
//                                   <button type="button" className="reveal-button" onClick={() => this.handleRevealClick2()}>{this.state.reveal1}</button>
//                                 </span>
//                               </div>
//                             </div>

//                           </div>

//                           <button type="button" id="edit-email-button" className="edit-profile-props-button" onClick={() => this.openModal("changeEmail")} >Edit</button>

//                         </div>



//                         <div className="field3">
//                           <div className="constrainedRow">
//                             <div>
//                               <h5 className="constrain-username-header">Phone Number</h5>
//                               <div>
//                                 <span className="const-hidden-props">{scramblePhone}
//                                   {revealPhone}
//                                 </span>

//                               </div>
//                             </div>
//                           </div>
//                           <div className="phone-num-button-container">
//                             {removePhoneNum}
//                             <button type="button" id="edit-phone-button" className="edit-profile-props-button" onClick={() => this.openModal("changePhone")} >Edit</button>
//                           </div>

//                         </div>

//                       </div>


//                     </div>




//                   </div>

//                 </div>

//                 <div className="divider-margin"></div>
//                 <div className="userSecuritySettings">

//                   <div className="passwrd-section">
//                     <h1 className="passwrdAuth">Password and Authentication</h1>
//                   </div>
//                   <div className="password-edit-section">
//                     <div>
//                       <button type="button" id="change-password-button" className="changePasswordButton" onClick={() => this.openModal("changePassword")}>
//                         Change Password
//                       </button>
//                     </div>

//                     <div className="two-factor-auth-wrapper">
//                       <div className="two-factor-auth-inner">
//                         <div>
//                           <div className="auth-header-div">
//                             <h5 className="auth-header">Two-factor authentication</h5>
//                           </div>
//                           <div className="auth-info-div">
//                             <p className="auth-info">
//                               Protect your $TR!F3 account with an extra layer of security. Once configured, you'll be required
//                               to enter both your password and an authentication code from your mobile phone in order to sign in.
//                             </p>
//                           </div>
//                           <div>
//                             <button id="enable-two-auth-button" type="button" className="auth-button" disabled>Enable Two-Factor Auth</button>
//                           </div>


//                         </div>

//                       </div>

//                       <div className="auth-pic-div">
//                         <img className="auth-security-img" />
//                       </div>


//                     </div>


//                   </div>


//                 </div>

//                 <div className="divider-margin"></div>
//                 <div className="acc-removal-section">
//                   <div className="account-rem-header-div">

//                     <h5 className="account-rem-header">Account Removal</h5>
//                   </div>
//                   <div className="account-rem-info-div">

//                     <p className="account-rem-info">
//                       Disabling your account means you can recover it at any time after taking this action.
//                     </p>
//                   </div>
//                   <div className="account-del-button-cont">
//                     <button onClick={() => {

//                       setTimeout(() => {
//                         this.props.reSyncCurrentUser(this.props.currentUser.id).then(() => {
//                           this.openModal("disableUser");
//                         });
//                       }, 1800);
//                       //  this.openModal("disableUser")

//                     }}
//                       type="button" id="disable-account-button"
//                       className="disable-account-button">Disable Account</button>
//                     <button onClick={() => {
//                       setTimeout(() => {
//                         this.props.reSyncCurrentUser(this.props.currentUser.id).then(() => {
//                           this.openModal("deleteUser");
//                         });
//                       }, 1800);
//                       // this.openModal("deleteUser");
//                     }}
//                       type="button" id="delete-account-button"
//                       className="account-delete-button">Delete Account</button>


//                   </div>
//                 </div>



//               </div>

//               <div className="tools-container">

//                 <div className="tool-x-to-esc-button-wrapper">
//                   <div className="inner-tool-container">
//                     <div className="x-to-esc-button" onClick={() => this.handleCloseModal()}>
//                       <svg role="img" width="18" height="18" viewBox="0 0 24 24">
//                         <path fill="currentColor" d="M18.4 4L12 10.4L5.6 4L4 5.6L10.4 
//                                 12L4 18.4L5.6 20L12 13.6L18.4 20L20 18.4L13.6 12L20 5.6L18.4 4Z">
//                         </path>
//                       </svg>
//                     </div>
//                     <div className="esc-bind">ESC</div>
//                   </div>
//                 </div>
//               </div>



//             </div>
//           </div>
//         </div>
//       </div>

//     )
//   }
// }




// export default UserProfile;