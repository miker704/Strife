// import React from "react";



// class UserOwnsServers extends React.Component {
//     constructor (props) {
//         super(props);
//         this.okay = false;
//         this.handleOkayClick = this.handleOkayClick.bind(this);
//     }

//     handleOkayClick (e) {
//         e.preventDefault();
//         if (this.okay === true) {
//             return;
//         }
//     }

//     render () {
//         <div id="edit-userInfo-model" className="edit-userInfo-model" >
//             <div className="remove-phone-form-header-wrapper">
//                 <div className="remove-phone-header">
//                     You Own Servers!
//                 </div>
//                 <div className="edit-username-header-info">
//                 In order to delete or disable your account you must first transfer ownership of all servers that you own.
//                 </div>
//             </div>
//             <form onSubmit={this.handleSubmit}>
//                 <div className="form-container1">



//                     <div className="username-edit-sep"></div>
//                 </div>
//                 <div className="username-edit-button-sec">
//                     <button type="submit" onClick={() => this.okay = true} className="username-edit-submit-button">Okay</button>
//                 </div>



//             </form>
//         </div>
//     }


// }

// export default UserOwnsServers;