import { connect } from "react-redux";
import CopyStrifeTagIDModal from "./copy_strife_tag_modal.jsx";
import { removeSessionErrors, reSyncCurrentUser } from '../../../actions/session_actions.js'
import { openModal, closeModal } from "../../../actions/modal_actions.js";
import { withRouter } from "react-router";

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

const CopyStrifeTagIDModalContainer = withRouter(connect(mSTP, mDTP)(CopyStrifeTagIDModal))
export default CopyStrifeTagIDModalContainer;
