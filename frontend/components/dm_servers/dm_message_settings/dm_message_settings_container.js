import { connect } from "react-redux";
import { withRouter } from "react-router";
import { openModal, openModalWithProps } from "../../../actions/modal_actions";
import { deleteDmMessage } from "../../../actions/dm_messages_actions";
import DmMessageSettings from "./dm_message_settings";

const mSTP = (state, ownProps) => {
    return {
        currentUser: state.currentUser,
        is_header: ownProps.is_header || false,
    }
}


const mDTP = (dispatch) => {
    return {
        deleteDmMessage: (dmmessageId) => dispatch(deleteDmMessage(dmmessageId)),
        openModal: (modal) => dispatch(openModal(modal)),
        openModalWithProps: (modal_with_props) => dispatch(openModalWithProps(modal_with_props))
    }
}

const DmMessageSettingsContainer = withRouter(connect(mSTP, mDTP)(DmMessageSettings));
export default DmMessageSettingsContainer;