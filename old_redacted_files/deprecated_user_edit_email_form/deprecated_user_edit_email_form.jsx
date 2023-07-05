// import React from "react"
// import { Link, Redirect } from 'react-router-dom'


// class EditUserEmailForm extends React.Component {
//     constructor (props) {
//         super(props)
//         this.state = {
//             user: this.props.currentUser,
//             email: this.props.currentUser.email,
//             password: ""
//         }
//         this.cancel = false;
//         this.handleSubmit = this.handleSubmit.bind(this);
//         this.handleInput = this.handleInput.bind(this);
//         this.emailErrors = this.emailErrors.bind(this);
//         this.passwordErrors = this.passwordErrors.bind(this);

//     }

    
//     passwordErrors () {
//         if (this.props.errors.includes('Login or password is invalid')) {
//             return " - Password does not match.";
//         }
//         else if (this.props.errors.includes("Error Incorrect Password !")){
//             return " - Password does not match.";
//         }
//         return "";
//     }



//     emailErrors() {
       
//         let emailErrorList = [
//             "Email can't be blank",
//             "Email Not well formed email address",
//             "Email Must be 320 or fewer in Length",
//             "Email has already been taken"
//         ];

//         let emailErrorMessages = {
//             0: " - can't be blank",
//             1: " - Not well formed email address",
//             2: " - Must be 320 or fewer in Length",
//             3: " - Email is already registered "

//         }
//         for (let i = 0; i < emailErrorList.length; i++) {
//             if (this.props.errors.includes(emailErrorList[i])) {
//                 return emailErrorMessages[i];
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
//     handleSubmit(e){
//         e.preventDefault();
//         if(this.cancel === true){
//             this.props.removeSessionErrors();
//             return;
//         }
//         let submissionState = {
//             id: this.props.currentUser.id,
//             email: this.state.email,
//             password: this.state.password

//         }
//         this.props.updateUserInfo(submissionState);
//       }



//       render (){

//         let emailErrorTag = this.props.errors.length > 0 ? "field-error" : "";
//         let passwordErrorTag = this.props.errors.length > 0 ? "field-error" : "";

//         return (
//             <div id="edit-userInfo-model" className="edit-userInfo-model" >
//             <div className="edit-username-header-section">
//                 <div className="edit-username-header">
//                     Enter an email address
//                 </div>
//                 <div className="form-email-header-info">
//                     Enter a new email address and your existing password
//                 </div>
//             </div>
//             <form  onSubmit={this.handleSubmit}>
//                 <div className="form-container1">

//                     <div className="form-username-sec">
//                         <h5 className="form-username-header"><label className={emailErrorTag}>Email{this.emailErrors()}</label></h5>
//                         <div>
//                             <div className="email-input-wrapper">
//                                 <input placeholder={this.props.currentUser.email} value={this.state.email} onChange={this.handleInput("email")} className="input-4-email" type="email" />
//                             </div>
                         
//                         </div>
//                     </div>
//                     <div className="password-section">
//                         <h5 className="password-header1">
//                             <label className={passwordErrorTag}>Current Password{this.passwordErrors()}</label>
//                         </h5>
//                         <div className="input-3-password-wrapper">
//                             <input value={this.state.password} onChange={this.handleInput("password")} type="password" className="input-3-password" />
//                         </div>
//                     </div>
//                     <div className="username-edit-sep"></div>
//                 </div>
//                 <div className="username-edit-button-sec">
//                     <button type="submit" className="username-edit-submit-button">Done</button>
//                     <button type="submit" onClick={() => this.cancel=true} className="username-edit-cancel-button">Cancel</button>
//                 </div>



//             </form>
//         </div>
//         )
//       }



// }

// export default EditUserEmailForm;