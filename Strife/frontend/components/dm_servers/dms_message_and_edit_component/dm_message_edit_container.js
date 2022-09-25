import { connect } from "react-redux";
import { withRouter } from "react-router";
import { updateDmMessage, deleteDmMessage } from "../../../actions/dm_messages_actions";
import DMMessageEdit from "./dm_message_edit";
import { closeModal, openModal, openModalWithProps } from "../../../actions/modal_actions";


const mDTP = (dispatch) => {
    return {
        updateDmMessage: (dm_message) => dispatch(updateDmMessage(dm_message)),
        deleteDmMessage: (dm_messageId) => dispatch(deleteDmMessage(dm_messageId)),
        openModal: (modal) => dispatch(openModal(modal)),
        openModalWithProps: (modal_with_props) => dispatch(openModalWithProps(modal_with_props))
    }
}


const DMMessageEditContainer = withRouter(connect(null, mDTP)(DMMessageEdit));
export default DMMessageEditContainer;