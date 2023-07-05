// import React from "react"
// import { Link, Redirect } from 'react-router-dom'


// class DeleteUserAccountForm extends React.Component {
//     constructor (props) {
//         super(props)

//         this.state = {
//             password: "",
//             hasServers: false
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
//         else if (this.props.errors.includes("Error Incorrect Password !")) {
//             return " - Password does not match.";
//         }
//         return "";
//     }

//     componentDidMount () {
//         if (this.props.currentUser.ownedServers.length > 0) {
//             this.setState({ hasServers: true });
//         }

//     }

//     componentWillUnmount () {
//         this.props.removeSessionErrors()

//     }

//     handleInput (field) {
//         return (e) => { this.setState({ [field]: e.currentTarget.value }) }
//     }

//     handleSubmit (e) {
//         e.preventDefault();

//         if (this.cancel) {
//             this.props.removeSessionErrors();
//             return;
//         }
//         let subState = {
//             id: this.props.currentUser.id,
//             password: this.state.password
//         }

//         this.props.disableUserAccount(subState).then(() =>{
//             this.props.closeModal();
//             this.props.logoutUser();
//             this.props.removeUserAccount(this.props.currentUser.id);
//         })
//     }



//     render () {
//         let passwordErrorTag = this.props.errors.length > 0 ? "field-error" : "";


//         let hasServers = this.state.hasServers === true ? (<div id="edit-userInfo-model" className="edit-userInfo-model" >
//             <div className="remove-phone-form-header-wrapper">
//                 <div className="remove-phone-header">
//                     You Own Servers!
//                 </div>
//             </div>
//             <div className="has-servers-subtitle-wrapper">
//                 <div className="has-servers-subtitle">In order to delete or disable your account you must
//                     first transfer ownership of all servers that you own.</div>
//             </div>

//             <div className="username-edit-sep"></div>
//             <div className="username-edit-sep"></div>


//             <form onSubmit={this.handleSubmit}>

//                 <div className="username-edit-button-sec">
//                     <button type="submit" onClick={() => this.cancel = true} className="username-edit-submit-button">Okay</button>
//                 </div>

//             </form>
//         </div>) : ("");




//         let delAcc = this.state.hasServers === false ? (<div id="edit-userInfo-model" className="edit-userInfo-model" >
//             <div className="remove-phone-form-header-wrapper">
//                 <div className="remove-phone-header">
//                     Delete Account
//                 </div>
//             </div>
//             <div className="disable-or-delete-container-warning2">
//                 Are You sure that you want to delete your account? This will immediately
//                 log you out of your account and you will not be able to log in again.
//             </div>
//             <div className="username-edit-sep"></div>

//             <form onSubmit={this.handleSubmit}>
//                 <div className="form-container1">


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
//                     <button type="submit" className="username-edit-submit-button">Delete Account</button>
//                     <button type="submit" onClick={() => this.cancel = true} className="username-edit-cancel-button">Cancel</button>
//                 </div>

//             </form>
//         </div>


//         ) : ("");


//         return (
//             <div id="edit-userInfo-model" className="edit-userInfo-model" >
//               {hasServers}
//               {delAcc}
//             </div>

//         )

//     }


// }

// export default DeleteUserAccountForm;