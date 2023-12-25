import { connect } from "react-redux";
import { withRouter } from "react-router";
import { openModal, closeModal, openModalWithProps } from "../../../actions/modal_actions";
import MessageRequestsHeaderNavBar from "./message_requests_header_nav_bar";

const mSTP = (state, ownProps) => {

    return {
        currentUserId: state.session.id,
        currentUser: state.currentUser,
        ui_modal: state.ui.modal,
        modalProps: state.ui.modalProps,
    }
}

const mDTP = (dispatch, ownProps) => {
    return {

        // modal api functions
        openModal: modal => dispatch(openModal(modal)),
        closeModal: () => dispatch(closeModal()),
        openModalWithProps: (modal_with_props) => dispatch(openModalWithProps(modal_with_props))
    }
}


const MessageRequestsHeaderNavBarContainer = withRouter(connect(mSTP, mDTP)(MessageRequestsHeaderNavBar));
export default MessageRequestsHeaderNavBarContainer;