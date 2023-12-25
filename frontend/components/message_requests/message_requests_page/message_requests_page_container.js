import { connect } from "react-redux";
import { withRouter } from "react-router";
import { openModal, closeModal, openModalWithProps } from "../../../actions/modal_actions";
import { reSyncCurrentUser } from "../../../actions/session_actions";
import MessageRequestsPage from "./message_requests_page";


const mSTP = (state, ownProps) => {

    return {
        currentUserId: state.session.id,
        currentUser: state.currentUser,
        ui_modal: state.ui.modal,
        modalProps: state.ui.modalProps,
        dmServers : Object.values(state.entities.dmServers),
    }
}


const mDTP = (dispatch, ownProps) => {
    return {
        reSyncCurrentUser: (userId) => dispatch(reSyncCurrentUser(userId)),
        // modal api functions
        openModal: modal => dispatch(openModal(modal)),
        closeModal: () => dispatch(closeModal()),
        openModalWithProps: (modal_with_props) => dispatch(openModalWithProps(modal_with_props))
    }
}


const MessageRequestsPageContainer = withRouter(connect(mSTP, mDTP)(MessageRequestsPage));
export default MessageRequestsPageContainer;
