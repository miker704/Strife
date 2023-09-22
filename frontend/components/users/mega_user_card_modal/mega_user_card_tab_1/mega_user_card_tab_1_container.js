import { connect } from "react-redux";
import { removeSessionErrors, reSyncCurrentUser } from '../../../../actions/session_actions.js'
import { openModal, closeModal } from "../../../../actions/modal_actions.js";
import { withRouter } from "react-router";
import MegaUpcTab1 from "./mega_user_card_tab_1.jsx";

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

const MegaUpcTab1Container = withRouter(connect(mSTP, mDTP)(MegaUpcTab1))
export default MegaUpcTab1Container;
