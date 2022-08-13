import { connect } from "react-redux";
import { withRouter } from "react-router";
import { handleKeyUp } from "../../../utils/modal_api_util";
import EditUserPasswordForm from "./user_edit_password_form";
import { openModal, closeModal } from "../../../actions/modal_actions";
import { updateUserInfo, removeSessionErrors } from "../../../actions/session_actions";

const mSTP = (state) => {
    return {
        currentUser: state.entities.users[state.session.id],
        errors: state.errors.session
    }
};

const mDTP = (dispatch) => {
    return {
        updateUserInfo : (user) => {dispatch(updateUserInfo(user))},
        openModal: (modal) => dispatch(openModal(modal)),
        closeModal: () => dispatch(closeModal()),
        removeSessionErrors: () => dispatch(removeSessionErrors()),
        handleESC : (e) => handleKeyUp(e)
    }
};

const EditUserPasswordContainer = withRouter(connect(mSTP,mDTP)(EditUserPasswordForm))
export default EditUserPasswordContainer;