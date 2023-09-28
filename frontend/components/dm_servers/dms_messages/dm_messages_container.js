import { connect } from "react-redux";
import { withRouter } from "react-router";
import { updateDmMessage, deleteDmMessage } from "../../../actions/dm_messages_actions";
import DMMessages from "./dm_messages";
import { openModal, openModalWithProps } from "../../../actions/modal_actions";

const mSTP = (state) => {
    return {
        currentUser: state.currentUser,
        currentUserId: state.session.id
    }
}

const mDTP = (dispatch) => {
    return {
        updateDmMessage: (dm_message) => dispatch(updateDmMessage(dm_message)),
        deleteDmMessage: (dm_messageId) => dispatch(deleteDmMessage(dm_messageId)),
        openModal: (modal) => dispatch(openModal(modal)),
        openModalWithProps: (modal_with_props) => dispatch(openModalWithProps(modal_with_props))
    }
}

const DMMessagesContainer = withRouter(connect(mSTP, mDTP)(DMMessages));
export default DMMessagesContainer;