import { connect } from "react-redux";
import { withRouter } from "react-router";
import DeletedServerLoadingScreen from "./delete_server_loading_screen";

const mSTP = (state) => {
    return {
        currentUserId: state.session.id,
    }
}

const mDTP = (dispatch) => {
    return {
    }
}

const DeletedServerLoadingScreenContainer = withRouter(connect(mSTP,mDTP)(DeletedServerLoadingScreen));
export default DeletedServerLoadingScreenContainer;