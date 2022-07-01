import { connect } from "react-redux";
import { fetchServers, fetchServer, removeServerErrors } from "../../../actions/server_actions.js";
import { withRouter } from "react-router";
import ServerNavBar from "./server_nav_bar.jsx";



const mSTP = (state, ownProps) => {
    return {
        currentUser: state.entities.users[state.session.id],
        servers: Object.values(state.entities.servers),
        errors: state.errors.server,
        serverId: ownProps.match.params.serverId
    }
}

const mDTP = (dispatch) => {
    return {
        fetchServers: (userId) => { dispatch(fetchServers(userId)) },
        fetchAllServers: () => { dispatch(fetchServers()) },
        fetchServer: (serverId) => dispatch(fetchServer(serverId)),
    }
}
const ServerNavBarContainer = withRouter(connect(mSTP,mDTP)(ServerNavBar));
export default ServerNavBarContainer;