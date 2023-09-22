import { connect } from "react-redux";
import { withRouter } from "react-router";
import { removeSessionErrors, logoutUser } from "../../../actions/session_actions";
import { closeModal } from "../../../actions/modal_actions";
import ConfirmLogoutModal from "./logout_modal.jsx";


const mSTP = (state) => {
    return {
        currentUser: state.currentUser,
        errors: state.errors.session
    }
};


const mDTP = (dispatch) => {
    return {
        removeSessionErrors: () => dispatch(removeSessionErrors()),
        logoutUser: () => dispatch(logoutUser()),
        closeModal: () => dispatch(closeModal()),
    }
};
const ConfirmLogoutModalContainer = withRouter(connect(mSTP, mDTP)(ConfirmLogoutModal))
export default ConfirmLogoutModalContainer;