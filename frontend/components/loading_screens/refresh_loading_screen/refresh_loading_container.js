import RefreshLoadingScreen from "./refresh_loading_screen"
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { closeModal } from "../../../actions/modal_actions";
import { requestAllFriendships } from "../../../actions/friendship_actions";
import { reSyncCurrentUser } from "../../../actions/session_actions";
import { fetchDmServers } from "../../../actions/dm_server_actions";
import { fetchServers } from "../../../actions/server_actions";

const mSTP = (state, ownProps) => {
    return {
        currentUserId: state.session.id,
        ui_modal: state.ui.modal,
    }
}

const mDTP = (dispatch) => {
    return {
        requestAllFriendships: () => dispatch(requestAllFriendships()),
        reSyncCurrentUser: (currentUser) => dispatch(reSyncCurrentUser(currentUser)),
        fetchUserDmServers: (currentUserId) => dispatch(fetchDmServers(currentUserId)),
        fetchUserServers: (currentUserId) => dispatch(fetchServers(currentUserId)),
        closeModal: () => dispatch(closeModal()),
    }
}



const RefreshLoadingScreenContainer = withRouter(connect(mSTP, mDTP)(RefreshLoadingScreen));
export default RefreshLoadingScreenContainer;

