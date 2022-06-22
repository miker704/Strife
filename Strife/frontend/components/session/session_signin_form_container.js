import { connect } from "react-redux";
import { signIn } from "../../utils/session_api_util";
import SessionForm from "./session_form";
import SignIn from "./signin";


const mSTP  = state => {
    return {
        errors: state.errors.sessionError,
        formType: 'Sign In',
        navLink: <Link to="/signup">Dont have an account ? create one !</Link>,
    }
}

const mDTP = dispatch =>{
    return {
        processForm: (user) => dispatch(signIn(user)),
    }
}

const SessionSignInFormContainer = connect(mSTP,mDTP)(SessionForm);
