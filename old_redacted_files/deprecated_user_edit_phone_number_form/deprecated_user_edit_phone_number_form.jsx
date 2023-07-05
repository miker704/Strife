// import React from "react"
// import { Link, Redirect } from 'react-router-dom'


// class EditUserPhoneNumberForm extends React.Component {
//     constructor (props) {
//         super(props)

//         this.state = {
//             phone_number: "",
//             password: ""
//         }


//         this.cancel = false;
//         this.handleSubmit = this.handleSubmit.bind(this);
//         this.handleInput = this.handleInput.bind(this);
//         this.passwordErrors = this.passwordErrors.bind(this);
//         this.phoneNumberErrors = this.phoneNumberErrors.bind(this);

//     }


//     phoneNumberErrors () {

//         let phoneNumberErrorList = [
//             "Phone number is invalid, please confirm that it is correct.",
//             'Phone number is not of 10 digits long',
//         ];

//         let phoneNumberErrorMessages = {
//             0: " - Phone number is invalid, please confirm that it is correct.",
//             1: " - Phone Number is not of 10 digits long",
//         }
//         for (let i = 0; i < phoneNumberErrorList.length; i++) {
//             if (this.props.errors.includes(phoneNumberErrorList[i])) {
//                 return phoneNumberErrorMessages[i];
//             }
//         }


//         return "";
//     }


//     passwordErrors () {
//         if (this.props.errors.includes('Login or password is invalid')) {
//             return " - Password does not match.";
//         }
//         else if (this.props.errors.includes('Error Incorrect Password !')) {
//             return " - Password does not match.";
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
//             phone_number: "+1" + this.state.phone_number,
//             password: this.state.password
//         }
       
//         this.props.updateUserInfo(submissionState)
//     }



//     render () {
//         let passwordErrorTag = this.props.errors.length > 0 ? "field-error" : "";
//         let phoneNumberErrorTag = this.props.errors.length > 0 ? "field-error" : "";


//         return (

//             <div id="edit-userInfo-model" className="edit-userInfo-model" >
//                 <div className="edit-username-header-section">
//                     <div className="edit-username-header">
//                         Enter a Phone Number
//                     </div>
//                     <div className="form-email-header-info">
//                         Enter a Phone Number and your existing password
//                     </div>
//                 </div>
//                 <form onSubmit={this.handleSubmit}>
//                     <div className="form-container1">

//                         <div className="form-username-sec">
//                             <h5 className="form-username-header"><label className={phoneNumberErrorTag}>Phone{this.phoneNumberErrors()}</label></h5>
//                             <div>
//                                 <div className="email-input-wrapper">
//                                     <input placeholder={this.props.currentUser.phone_number} value={this.state.phone_number} onChange={this.handleInput("phone_number")} className="input-4-email" type="tel" />
//                                 </div>

//                             </div>
//                         </div>
//                         <div className="password-section">
//                             <h5 className="password-header1">
//                                 <label className={passwordErrorTag}>Current Password{this.passwordErrors()}</label>
//                             </h5>
//                             <div className="input-3-password-wrapper">
//                                 <input value={this.state.password} onChange={this.handleInput("password")} type="password" className="input-3-password" />
//                             </div>
//                         </div>
//                         <div className="username-edit-sep"></div>
//                     </div>
//                     <div className="username-edit-button-sec">
//                         <button type="submit" className="username-edit-submit-button">Done</button>
//                         <button type="submit" onClick={() => this.cancel = true} className="username-edit-cancel-button">Cancel</button>
//                     </div>



//                 </form>
//             </div>

//         )
//     }






// }

// export default EditUserPhoneNumberForm;