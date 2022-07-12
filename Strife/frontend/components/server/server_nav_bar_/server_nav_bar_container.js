import { connect } from "react-redux";
import ServerNavBar from "./server_nav_bar.jsx";
import {  withRouter } from "react-router";

import { fetchServer, fetchServers } from "../../../actions/server_actions";


const mSTP = (state, ownProps) => {
    
    return {
        currentUser: state.entities.users[state.session.id],
        servers: Object.values(state.entities.servers),
        serverId: ownProps.match.params.serverId,
        errors: state.errors.servers,
       

    }
}

const mDTP = (dispatch) => {
    
    return {
        fetchUserServers: (userId) => dispatch(fetchServers(userId)),
        fetchAllServers : () => dispatch(fetchServers()),
        fetchServer : (serverId) => dispatch(fetchServer(serverId)),
    }
}


const ServerNavBarContainer = withRouter(connect(mSTP,mDTP)(ServerNavBar));
export default ServerNavBarContainer;