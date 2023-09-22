import { connect } from "react-redux";
import { removeSessionErrors, reSyncCurrentUser } from '../../../actions/session_actions.js'
import { openModal, closeModal } from "../../../actions/modal_actions.js";
import { withRouter } from "react-router";
import MiniUPCModal from "./mini_user_profile_card_modal.jsx";


const mSTP = (state) => {
    return {
        currentUser: state.currentUser,
        errors: state.errors.session
    }
}

const mDTP = (dispatch) => {
    return {
        openModal: (modal) => dispatch(openModal(modal)),
        closeModal: () => dispatch(closeModal()),
        removeSessionErrors: () => dispatch(removeSessionErrors()),
        reSyncCurrentUser: (userId) => dispatch(reSyncCurrentUser(userId))
    }
}

const MiniUPCModalContainer = withRouter(connect(mSTP, mDTP)(MiniUPCModal))
export default MiniUPCModalContainer;
