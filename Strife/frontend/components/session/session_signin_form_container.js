import React from "react";
import { connect } from "react-redux";
import { signInUser,removeSessionErrors } from "../../actions/session_actions";
import SessionForm from "./session_form";
import { Link } from "react-router-dom";


const mSTP  = state => {
    return {
        errors: state.errors.sessionError,
        formType: 'Sign In',
        navLink: <Link to="/session_signup_form_container">Need an account ? Register</Link>,
    }
}

const mDTP = dispatch =>{
    return {
        processForm: (user) => dispatch(signInUser(user)),
        removeSessionErrors: ()=> dispatch(removeSessionErrors())
    }
}

const SessionSignInFormContainer = connect(mSTP,mDTP)(SessionForm);
export default SessionSignInFormContainer;