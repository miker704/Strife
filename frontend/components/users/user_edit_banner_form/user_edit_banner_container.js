import { withRouter } from "react-router";
import { connect } from "react-redux";
import { handleKeyUp } from "../../../utils/modal_api_util";
import { closeModal, openModal } from "../../../actions/modal_actions";
import { removeSessionErrors, updateUserInfo, changeUserPFP, changeUserBanner } from "../../../actions/session_actions";
import EditUserBanner from "./user_edit_banner_form";


const mSTP = (state) => {
    return {
        currentUser: state.currentUser,
        errors: state.errors.session
    }
};

const mDTP = (dispatch) => {
    return {
        changeUserPFP: (userId, formData) => dispatch(changeUserPFP(userId, formData)),
        changeUserBanner: (userId, formData) => dispatch(changeUserBanner(userId, formData)),
        updateUserInfo: (user) => { dispatch(updateUserInfo(user)) },
        openModal: (modal) => dispatch(openModal(modal)),
        closeModal: () => dispatch(closeModal()),
        removeSessionErrors: () => dispatch(removeSessionErrors()),
        handleESC: (e) => handleKeyUp(e)
    }
};

const EditUserBannerContainer = withRouter(connect(mSTP, mDTP)(EditUserBanner))
export default EditUserBannerContainer;