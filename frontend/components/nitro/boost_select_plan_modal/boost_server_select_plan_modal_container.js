import { connect } from "react-redux";
import { withRouter } from "react-router";
import { openModal, closeModal, openModalWithProps } from "../../../actions/modal_actions";
import { reSyncCurrentUser, removeSessionErrors } from "../../../actions/session_actions";
import BoostServerSelectPlanModal from "./boost_server_select_plan_modal.jsx";


const mSTP = (state, ownProps) => {

    return {
        currentUserId: state.session.id,
        currentUser: state.currentUser,
        errors: state.errors.session,
        ui_modal: state.ui.modal,
        modalProps: state.ui.modalProps,
    }
}


const mDTP = (dispatch, ownProps) => {
    return {
        reSyncCurrentUser: (userId) => dispatch(reSyncCurrentUser(userId)),
        removeSessionErrors: () => dispatch(removeSessionErrors()),
        // modal api functions
        openModal: modal => dispatch(openModal(modal)),
        closeModal: () => dispatch(closeModal()),
        openModalWithProps: (modal_with_props) => dispatch(openModalWithProps(modal_with_props))
    }
}


const BoostServerSelectPlanModalContainer = withRouter(connect(mSTP, mDTP)(BoostServerSelectPlanModal));
export default BoostServerSelectPlanModalContainer;
