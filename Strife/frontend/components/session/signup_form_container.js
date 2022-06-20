import { connect } from "react-redux";
import { signUpUser } from "../../actions/session_actions";
import SignUp from "./signup";




const mDTP = dispatch => (

    {
        signUpUser: formUser => dispatch(signUpUser(formUser))
    })

const SignUpFormContainer = connect(null, mDTP)(SignUp);
export default SignUpFormContainer;