// import React from "react";
// import { connect } from "react-redux";
// import { signInUser,removeSessionErrors } from "../../actions/session_actions";
// // import SessionForm from "./session_form";
// import SessionForm4 from "./session_form4";
// import SessionForm from "./session_form2";

// import { Link } from "react-router-dom";


// const mSTP  = state => {
//     return {
//         errors: state.errors.session,
//         formType: 'Sign In',
//         // navLink: <span className="navlinks">Need an account?{" "}<Link to="/register">Register</Link></span>
      
//     }
// }

// const mDTP = dispatch =>{
//     return {
//         processForm: (user) => dispatch(signInUser(user)),
//         removeSessionErrors: ()=> dispatch(removeSessionErrors())
//     }
// }

// // const SessionSignInFormContainer = connect(mSTP,mDTP)(SessionForm4);
// const SessionSignInFormContainer = connect(mSTP, mDTP)(SessionForm);
// export default SessionSignInFormContainer;