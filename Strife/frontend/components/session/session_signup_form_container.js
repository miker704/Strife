import { connect } from "react-redux";
import { signUpUser,removeSessionErrors } from "../../actions/session_actions";
import SessionForm from "./session_form";


const mSTP  = state => {
    return {
        errors: state.errors.sessionError,
        formType: 'Sign Up',
        navLink: <Link to="/signin">Have an account ? Sign In !</Link>,
    }
}

const mDTP = dispatch =>{
    return {
        processForm: (user) => dispatch(signUpUser(user)),
        removeSessionErrors: () =>dispatch(removeSessionErrors())

    }
}

const SessionSignInFormContainer = connect(mSTP,mDTP)(SessionForm);
