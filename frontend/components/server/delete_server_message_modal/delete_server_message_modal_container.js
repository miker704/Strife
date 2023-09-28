import { connect } from "react-redux";
import { withRouter } from "react-router";
import { deleteMessage } from "../../../actions/message_actions";
import { closeModal } from "../../../actions/modal_actions";
import { handleKeyUp } from "../../../utils/modal_api_util";
import DeleteServerChannelMessageModal from "./delete_server_message_modal";

const mSTP = (state, ownProps) => {

    return {
        currentUser: state.currentUser,
        currentUserId: state.session.id,
        message: state.ui.modalProps.message,
        serverId: state.ui.modalProps.serverId,
        channelId: state.ui.modalProps.channelId,
        messageAuthor: state.ui.modalProps.messageAuthor
    }
}



const mDTP = (dispatch) => {
    return {
        deleteMessage: (messageId) => dispatch(deleteMessage(messageId)),
        closeModal: () => dispatch(closeModal()),
        handleESC: (e) => handleKeyUp(e),
    }
}


const DeleteServerChannelMessageModalContainer = withRouter(connect(mSTP, mDTP)(DeleteServerChannelMessageModal));
export default DeleteServerChannelMessageModalContainer;