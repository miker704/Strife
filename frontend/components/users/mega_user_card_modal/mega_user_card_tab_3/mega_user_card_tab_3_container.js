import { connect } from "react-redux";
import { removeSessionErrors, reSyncCurrentUser, fetchUser } from '../../../../actions/session_actions.js'
import { openModal, closeModal } from "../../../../actions/modal_actions.js";
import { withRouter } from "react-router";
import MegaUpcTab3 from "./mega_user_card_tab_3.jsx";

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
        reSyncCurrentUser: (userId) => dispatch(reSyncCurrentUser(userId)),
        fetchUser: (userId) => dispatch(fetchUser(userId)),
    }
}

const MegaUpcTab3Container = withRouter(connect(mSTP, mDTP)(MegaUpcTab3))
export default MegaUpcTab3Container;
