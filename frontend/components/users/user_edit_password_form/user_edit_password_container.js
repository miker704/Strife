import { connect } from "react-redux";
import { withRouter } from "react-router";
import EditUserPasswordForm from "./user_edit_password_form";
import { updateUserInfo, removeSessionErrors, changePassword} from "../../../actions/session_actions";

const mSTP = (state) => {
    return {
        // currentUser: state.entities.users[state.session.id],
        currentUser: state.currentUser,
        errors: state.errors.session
    }
};

const mDTP = (dispatch) => {
    return {
        updateUserInfo : (user) => {dispatch(updateUserInfo(user))},
        changePassword: (user) => dispatch(changePassword(user)),
        removeSessionErrors: () => dispatch(removeSessionErrors()),
    }
};

const EditUserPasswordContainer = withRouter(connect(mSTP,mDTP)(EditUserPasswordForm))
export default EditUserPasswordContainer;