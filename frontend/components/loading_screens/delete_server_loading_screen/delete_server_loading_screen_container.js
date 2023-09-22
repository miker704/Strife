import { connect } from "react-redux";
import { withRouter } from "react-router";
import { closeModal } from "../../../actions/modal_actions";
import DeletedServerLoadingScreen from "./delete_server_loading_screen";

const mSTP = (state) => {
    return {
        currentUserId: state.session.id,
        ui_modal: state.ui.modal,
    }
}

const mDTP = (dispatch) => {
    return {
        closeModal: () => dispatch(closeModal()),
    }
}

const DeletedServerLoadingScreenContainer = withRouter(connect(mSTP, mDTP)(DeletedServerLoadingScreen));
export default DeletedServerLoadingScreenContainer;