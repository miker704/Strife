import { connect } from "react-redux";
import { withRouter } from "react-router";
import { fetchServer, fetchServers, removeServerErrors, exploreServers, 
        clearUnexploredServers, joiningServer } from "../../../actions/server_actions.js";
import { createServerMembership } from "../../../actions/server_membership_actions.js";
import { reSyncCurrentUser } from "../../../actions/session_actions.js";
import ExploreServers from "./explore_servers.jsx";

const mSTP = (state, ownProps) => {
    return {
        currentUser: state.currentUser,
        currentUserId: state.session.id,
        // channels: Object.values(state.entities.channels),
        errors: state.errors.server,
        servers: state.entities.servers,
        unExploredServers: state.unExploredServers,
    }
}


const mDTP = (dispatch, ownProps) => {
    return {
        //server api functions
        fetchServer: (serverId) => dispatch(fetchServer(serverId)),
        fetchUserServers: (user) => dispatch(fetchServers(user)),
        fetchServers: () => dispatch(fetchServers()),
        // exploreServers: () => dispatch(exploreServers()),
        exploreServers: (currentUserId) => dispatch(exploreServers(currentUserId)),
        removeServerErrors: () => dispatch(removeServerErrors()),
        //server membership api functions
        createServerMembership: (servermembership) => dispatch(createServerMembership(servermembership)),
        // modal api functions
        clearUnexploredServers: () => dispatch(clearUnexploredServers()),
        joiningServer: (inviteCode) => dispatch(joiningServer(inviteCode)),
        reSyncCurrentUser: (currentUserId) => dispatch(reSyncCurrentUser(currentUserId))
    }
}
const ExploreServersContainer = withRouter(connect(mSTP, mDTP)(ExploreServers));
export default ExploreServersContainer;