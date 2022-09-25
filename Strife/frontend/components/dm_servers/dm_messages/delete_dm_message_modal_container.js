import { connect } from "react-redux";
import { withRouter } from "react-router";
import { deleteDmMessage } from "../../../actions/dm_messages_actions";
import { closeModal } from "../../../actions/modal_actions";
import { handleKeyUp } from "../../../utils/modal_api_util";
import DeleteDmMessageModal from "./delete_dm_message_modal";


const mSTP = (state, ownProps) => {
    
        console.log("uiprops: ", state.ui.modalProps);
    return {
            currentUserId: state.session.id,
            dmMessage: state.ui.modalProps.dmMessage,
            dmServerId :state.ui.modalProps.dmServerId,      
            renderGroupChatFirstMessage: state.ui.modalProps.renderGroupChatFirstMessage,
            oneToOneChatFirstMessage:state.ui.modalProps.oneToOneChatFirstMessage,
            formatTime:state.ui.modalProps.formatTime,
    }
}



const mDTP = (dispatch) => {
    return {
        deleteDmMessage: (dm_messageId) => dispatch(deleteDmMessage(dm_messageId)),
        closeModal: () => dispatch(closeModal()),
        xscape: (e) => dispatch(handleKeyUp(e))
    }
}


const DeleteDmMessageModalContainer = withRouter(connect(mSTP, mDTP)(DeleteDmMessageModal));
export default DeleteDmMessageModalContainer;