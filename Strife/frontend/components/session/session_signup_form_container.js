import { connect } from "react-redux";
import { signUp } from "../../utils/session_api_util";
import SessionForm from "./session_form";
import SignIn from "./signin";


const mSTP  = state => {
    return {
        errors: state.errors.sessionError,
        formType: 'Sign Up',
        navLink: <Link to="/signin">Have an account ? Sign In !</Link>,
    }
}

const mDTP = dispatch =>{
    return {
        processForm: (user) => dispatch(signUp(user)),
    }
}

const SessionSignInFormContainer = connect(mSTP,mDTP)(SessionForm);
