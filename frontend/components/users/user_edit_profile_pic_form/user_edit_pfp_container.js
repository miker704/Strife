import { withRouter } from "react-router";
import { connect } from "react-redux";
import { handleKeyUp } from "../../../utils/modal_api_util";
import EditUserPFP from "./user_edit_pfp_form";
import { closeModal, openModal } from "../../../actions/modal_actions";
import { removeSessionErrors, updateUserInfo, changeUserPFP } from "../../../actions/session_actions";



const mSTP = (state) => {
    return {
        // currentUser: state.entities.users[state.session.id],
        currentUser: state.currentUser,
        errors: state.errors.session
    }
};

const mDTP = (dispatch) => {
    return {
        changeUserPFP: (userId, formData) => dispatch(changeUserPFP(userId, formData)),
        // changeUserPFP: (user) => dispatch(changeUserPFP(user)),
        updateUserInfo: (user) => { dispatch(updateUserInfo(user)) },
        openModal: (modal) => dispatch(openModal(modal)),
        closeModal: () => dispatch(closeModal()),
        removeSessionErrors: () => dispatch(removeSessionErrors()),
        handleESC: (e) => handleKeyUp(e)
    }
};

const EditUserPFPContainer = withRouter(connect(mSTP, mDTP)(EditUserPFP))
export default EditUserPFPContainer;