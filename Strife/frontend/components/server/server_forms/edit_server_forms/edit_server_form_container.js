import { connect } from "react-redux";
import { withRouter } from "react-router";
import { removeServerErrors, updateServer } from "../../../../actions/server_actions";
import { openModal, closeModal } from "../../../../actions/modal_actions";
import EditServerForm from "./edit_server_form";

const mSTP = (state) => {
    return {
        errors : state.errors.server
    }
}

const mDTP = (dispatch) => {
    return {
        updateServerInfo: (server) => dispatch(updateServer(server)),
        removeServerErrors: () => dispatch(removeServerErrors()),
        openModal: (modal) => dispatch(openModal(modal)),
        closeModal: () => dispatch(closeModal())
    }
}


const EditServerFormContainer = withRouter(connect(mSTP,mDTP)(EditServerForm));
export default EditServerFormContainer;
