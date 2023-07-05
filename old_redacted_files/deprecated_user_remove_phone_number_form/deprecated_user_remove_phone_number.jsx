// import React from "react"
// import { Link, Redirect } from 'react-router-dom'


// class RemoveUserPhoneNumberForm extends React.Component {
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
//             // phone_number: nil,
//             password: this.state.password
//         }
       
//         // this.props.updateUserInfo(submissionState)
//         this.props.removePhoneNumber(submissionState);
//     }



//     render () {
//         let passwordErrorTag = this.props.errors.length > 0 ? "field-error" : "";

//         return (

//             <div id="edit-userInfo-model" className="edit-userInfo-model" >
//                 <div className="remove-phone-form-header-wrapper">
//                     <div className="remove-phone-header">
//                         Remove Phone Number
//                     </div>
//                 </div>
//                 <form onSubmit={this.handleSubmit}>
//                     <div className="form-container1">

                      
//                         <div className="password-section">
//                             <h5 className="password-header1">
//                                 <label className={passwordErrorTag}>Password{this.passwordErrors()}</label>
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

// export default RemoveUserPhoneNumberForm;