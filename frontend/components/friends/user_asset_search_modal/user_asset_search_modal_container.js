import { connect } from "react-redux";
import { withRouter } from "react-router";
import { openModal, openModalWithProps, closeModal } from "../../../actions/modal_actions.js";
import { createDmServer, fetchDmServer, fetchDmServers } from "../../../actions/dm_server_actions.js";
import { fetchServers, fetchServer } from "../../../actions/server_actions.js";
import { handleKeyUp } from "../../../utils/modal_api_util.js";
import { selectAllFriends } from "../../../utils/selectors_api_util.js";
import { requestAllFriendships } from "../../../actions/friendship_actions.js";
import { reSyncCurrentUser } from "../../../actions/session_actions.js";
import StartConversationSearchBarModal from "./user_asset_search_modal.jsx";

const mSTP = (state, ownProps) => {
    return {
        currentUser: state.currentUser,
        currentUserId: state.session.id,
        servers: Object.values(state.entities.servers),
        channels: state.entities.channels,
        dmServers: Object.values(state.entities.dmServers),
        friends: selectAllFriends(state,3)
    }
}

const mDTP = (dispatch) => {
    return {

        // modal api functions
        fetchServer: (serverId) => dispatch(fetchServer(serverId)),
        fetchServers: (userId) => dispatch(fetchServers(userId)),
        fetchDmServer: (dmServerId) => dispatch(fetchDmServer(dmServerId)),
        fetchDmServers: (userId) => dispatch(fetchDmServers(userId)),
        createDmServer: (dmServer) => dispatch(createDmServer(dmServer)),
        requestAllFriendships: () => dispatch(requestAllFriendships()),
        reSyncCurrentUser: (currentUserId) => dispatch(reSyncCurrentUser(currentUserId)),
        openModal: modal => dispatch(openModal(modal)),
        openModalWithProps: (modal_with_props) => dispatch(openModalWithProps(modal_with_props)),
        closeModal: () => dispatch(closeModal()),
        handleESC: (e) => handleKeyUp(e),

    }
}

const StartConversationSearchBarModalContainer = withRouter(connect(mSTP, mDTP)(StartConversationSearchBarModal));
export default StartConversationSearchBarModalContainer;