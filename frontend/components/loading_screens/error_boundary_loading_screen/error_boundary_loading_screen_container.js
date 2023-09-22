import { connect } from "react-redux";
import { withRouter } from "react-router";
import { fetchDmServers } from "../../../actions/dm_server_actions";
import { fetchServers, fetchServer, removeServer} from "../../../actions/server_actions";
import { reSyncCurrentUser } from "../../../actions/session_actions";
import ErrorBoundaryLoadingScreen from "./error_boundary_loading_screen";
import { closeModal } from "../../../actions/modal_actions";

const mSTP = (state) => {
    return {
        currentUser: state.currentUser,
        servers: state.entities.servers,
        channels: Object.values(state.entities.channels),
        ui_modal: state.ui.modal,
    }
}


const mDTP = (dispatch) => {
    return {
        fetchUsersServers: (currentUserId) => dispatch(fetchServers(currentUserId)),
        fetchUsersDmServers: (currentUserId) => dispatch(fetchDmServers(currentUserId)),
        fetchServer: (serverId) => dispatch(fetchServer(serverId)),
        reSyncCurrentUser: (currentUserId) => dispatch(reSyncCurrentUser(currentUserId)),
        closeModal: () => dispatch(closeModal()),
    }
}

const ErrorBoundaryLoadingScreenContainer = withRouter(connect(mSTP, mDTP)(ErrorBoundaryLoadingScreen));
export default ErrorBoundaryLoadingScreenContainer;