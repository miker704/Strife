import { connect } from "react-redux";
import { signUpUser,removeSessionErrors } from "../../actions/session_actions";
import SessionForm from "./session_form";


const mSTP  = state => {
    return {
        errors: state.errors.sessionError,
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