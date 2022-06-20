import { connect } from "react-redux";
import { signInUser } from "../../actions/session_actions";
import SignIn from "./signin";




const mDTP = dispatch => (

    {
        signInUser: formUser => dispatch(signInUser(formUser))
    })

const SignInFormContainer = connect(null, mDTP)(SignIn);
export default SignInFormContainer;