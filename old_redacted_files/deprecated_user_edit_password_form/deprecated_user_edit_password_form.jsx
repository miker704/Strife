// import React from "react"
// import { Link, Redirect } from 'react-router-dom'


// class EditUserPasswordForm extends React.Component {
//     constructor (props) {
//         super(props)
//         this.state = {
//             user: this.props.currentUser,
//             password: "",
//             confirmNewPassword: "",
//             newPassword: "",
//         }
//         this.cancel = false;
//         this.handleSubmit = this.handleSubmit.bind(this);
//         this.handleInput = this.handleInput.bind(this);
//         this.passwordErrors = this.passwordErrors.bind(this);


//     }



//     passwordErrors () {

//         let passwordErrorList = [
//             'Error Incorrect Password !',
//             'Error new password cannot match your previous password !',
//             'Error new password does not match confirm password !', 
//             'Error new password must be 8 to 72 in length'
//         ];
//         let passwordErrorMessages = {
//             0: " - incorrect Password",
//             1: " - cannot be an old password",
//             2: ' - must match confirm field',
//             3: ' - must be 8-72 characters in length'
//         }

//         for (let i = 0; i < passwordErrorList.length; i++) {
//             if (this.props.errors.includes(passwordErrorList[i])) {
//                 return passwordErrorMessages[i];
//             }
//         }

//         return "";

       
//     }




//     componentWillUnmount () {
//         this.props.removeSessionErrors()
//     }

//     handleInput (field) {
//         return (e) => { this.setState({ [field]: e.currentTarget.value }) }
//     }
//     handleSubmit (e) {
//         e.preventDefault();
//         if (this.cancel === true) {
//             this.props.removeSessionErrors();
//             return;
//         }
//         let submissionState = {
//             id: this.props.currentUser.id,
//             password: this.state.password,
//             newPassword: this.state.newPassword,
//             confirmNewPassword: this.state.confirmNewPassword
//         }
//         // this.props.updateUserInfo(submissionState);
//         this.props.changePassword(submissionState);
//     }

//     render () {
//         let passwordErrorTag = this.props.errors.length > 0 ? "field-error" : "";

//         return (
//             <div className="password-modal" >
//                 <div className="password-modal-inner-wrapper">
//                     <div className="password-header-flex-container">
//                         <div className="password-main-header">
//                             Update your password
//                         </div>
//                         <div className="password-header-info">
//                             Enter a your current password and a new password.
//                         </div>
//                     </div>
//                     <form onSubmit={this.handleSubmit}>
//                         <div className="form-container1">

//                             <div className="form-username-sec">
//                                 <h5 className="form-username-header"><label className={passwordErrorTag}>Current Password{this.passwordErrors()}</label></h5>
//                                 <div>
//                                     <div className="input-3-password-wrapper">
//                                         <input value={this.state.password} onChange={this.handleInput("password")} className="input-3-password" type="password" />
//                                     </div>

//                                 </div>
//                             </div>
//                             <div className="password-section">
//                                 <h5 className="password-header1">
//                                     <label className={passwordErrorTag}>New Password{this.passwordErrors()}</label>
//                                 </h5>
//                                 <div className="input-3-password-wrapper">
//                                     <input value={this.state.newPassword} onChange={this.handleInput("newPassword")} type="password" className="input-3-password" />
//                                 </div>
//                             </div>
//                             <div className="password-section">
//                                 <h5 className="password-header1">
//                                     <label className={passwordErrorTag}>Confirm New Password{this.passwordErrors()}</label>
//                                 </h5>
//                                 <div className="input-3-password-wrapper">
//                                     <input value={this.state.confirmNewPassword} onChange={this.handleInput("confirmNewPassword")} type="password" className="input-3-password" />
//                                 </div>
//                             </div>
//                             <div className="username-edit-sep"></div>
//                         </div>
//                         <div className="username-edit-button-sec">
//                             <button type="submit" className="username-edit-submit-button">Done</button>
//                             <button type="submit" onClick={() => this.cancel = true} className="username-edit-cancel-button">Cancel</button>
//                         </div>



//                     </form>
//                 </div>
//             </div>
//         )
//     }

// }

// export default EditUserPasswordForm;