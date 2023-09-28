import { connect } from "react-redux";
import { withRouter } from "react-router";
import { openModal, openModalWithProps } from "../../../actions/modal_actions";
import { updateMessage, deleteMessage } from "../../../actions/message_actions";
import ServerMessageControl from "./server_message_control";

const mSTP = (state, ownProps) => {
    return {
        currentUser: state.currentUser,
        is_header: ownProps.is_header || false,
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


const ServerMessageControlContainer = withRouter(connect(mSTP, mDTP)(ServerMessageControl));
export default ServerMessageControlContainer;