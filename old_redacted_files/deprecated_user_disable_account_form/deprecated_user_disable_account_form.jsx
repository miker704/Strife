// import React from "react"
// import { Link, Redirect } from 'react-router-dom'


// class DisableUserAccountForm extends React.Component {
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
//             // this.props.removeUserAccount(this.props.currentUser.id);
//         })
//     }
//     componentDidMount () {
//         if (this.props.currentUser.ownedServers.length > 0) {
//             this.setState({ hasServers: true });
//         }

//     }

//     componentWillUnmount () {
//         this.props.removeSessionErrors();
//     }

//     render () {

//         let hasServers = this.state.hasServers === true ? (<div id="edit-userInfo-model" className="edit-userInfo-model" >
//             <div className="remove-phone-form-header-wrapper">
//                 <div className="remove-phone-header">
//                     You Own Servers!
//                 </div>
//             </div>
//             <div className="has-servers-subtitle-wrapper">
//                 <div className="has-servers-subtitle">In order to delete or disable your account you must 
//                 first transfer ownership of all servers that you own.</div>
//             </div>
            
//             <div className="username-edit-sep"></div>
//             <div className="username-edit-sep"></div>


//             <form onSubmit={this.handleSubmit}>

//                 <div className="username-edit-button-sec">
//                     <button type="submit" onClick={() => this.cancel = true} className="username-edit-submit-button">Okay</button>
//                 </div>

//             </form>
//         </div>) : ("");

//         let passwordErrorTag = this.props.errors.length > 0 ? "field-error" : "";
//         let disAcc = this.state.hasServers === false ? (<div id="edit-userInfo-model" className="edit-userInfo-model" >
//             <div className="remove-phone-form-header-wrapper">
//                 <div className="remove-phone-header">
//                     Disable Account
//                 </div>
//             </div>
//             <div className="disable-or-delete-container-warning">
//                 Are You sure that you want to disable your account? This will immediately
//                 log you out and make your account inaccessible to anyone.
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
//                     <button type="submit" className="username-edit-submit-button">Disable Account</button>
//                     <button type="submit" onClick={() => this.cancel = true} className="username-edit-cancel-button">Cancel</button>
//                 </div>

//             </form>
//         </div>


//         ) : ("");






//         return (
//             <div id="edit-userInfo-model" className="edit-userInfo-model" >
//                 {hasServers}
//                 {disAcc}
//             </div>
//         )

//     }


// }

// export default DisableUserAccountForm;