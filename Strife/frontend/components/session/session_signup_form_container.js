import React from "react";
import { connect } from "react-redux";
import { signUpUser,removeSessionErrors } from "../../actions/session_actions";
import SessionForm from "./session_form";
import { Link } from "react-router-dom";


const mSTP  = state => {
    return {
        errors: state.errors.session,
        formType: 'Sign Up',
        navLink: <Link to="/signin">Already have an account?</Link>,
    }
}

const mDTP = dispatch =>{
    return {
        processForm: (user) => dispatch(signUpUser(user)),
        removeSessionErrors: () =>dispatch(removeSessionErrors())

    }
}

const SessionSignUpFormContainer = connect(mSTP,mDTP)(SessionForm);
export default SessionSignUpFormContainer