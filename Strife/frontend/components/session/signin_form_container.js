import { connect } from "react-redux";
import { signInUser, removeSessionErrors } from "../../actions/session_actions";
import SignIn from "./signin";




const mDTP = dispatch => (

    {
        signInUser: formUser => dispatch(signInUser(formUser)),
        removeSessionErrors: ()=> dispatch(removeSessionErrors())
    })

const SignInFormContainer = connect(null, mDTP)(SignIn);
export default SignInFormContainer;