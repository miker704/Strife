import { connect } from "react-redux";
import { removeSessionErrors, reSyncCurrentUser } from '../../../../actions/session_actions.js'
import { removeServerErrors } from "../../../../actions/server_actions.js";
import { openModal, closeModal } from "../../../../actions/modal_actions.js";
import { withRouter } from "react-router";
import MegaUpcTab2 from "./mega_user_card_tab_2.jsx";

const mSTP = (state) => {
    return {
        currentUser: state.currentUser,
        errors: state.errors.session,
        serverErrors: state.errors.server,
    }
}

const mDTP = (dispatch) => {
    return {
        openModal: (modal) => dispatch(openModal(modal)),
        closeModal: () => dispatch(closeModal()),
        removeSessionErrors: () => dispatch(removeSessionErrors()),
        removeServerErrors: () => dispatch(removeServerErrors()),
        reSyncCurrentUser: (userId) => dispatch(reSyncCurrentUser(userId)),
    }
}

const MegaUpcTab2Container = withRouter(connect(mSTP, mDTP)(MegaUpcTab2))
export default MegaUpcTab2Container;
