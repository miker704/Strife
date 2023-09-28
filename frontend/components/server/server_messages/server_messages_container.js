import { connect } from "react-redux";
import { withRouter } from "react-router";
import { openModal, openModalWithProps } from "../../../actions/modal_actions";
import { updateMessage, deleteMessage } from "../../../actions/message_actions";
import ServerMessages from "./server_messages";

const mSTP = (state) => {
    return {
        currentUser: state.currentUser,
        currentUserId: state.session.id
    }
}

const mDTP = (dispatch) => {
    return {
        updateMessage: (message) => dispatch(updateMessage(message)),
        deleteMessage: (messageId) => dispatch(deleteMessage(messageId)),
        openModal: (modal) => dispatch(openModal(modal)),
        openModalWithProps: (modal_with_props) => dispatch(openModalWithProps(modal_with_props))
    }
}
const ServerMessagesContainer = withRouter(connect(mSTP, mDTP)(ServerMessages));
export default ServerMessagesContainer;