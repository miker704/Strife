import { connect } from "react-redux";
import { withRouter } from "react-router";
import { removeChannelErrors } from "../../../actions/channel_actions.js";
import { fetchServer, fetchServers, removeServerErrors } from "../../../actions/server_actions.js";
import { deleteServerMembership } from "../../../actions/server_membership_actions.js";
import LeaveServerModal from "./leave_server_modal.jsx";

// const extractServerProps = (state, ownProps) => {
//     let locationString = ownProps.location.pathname;
//     let newLoc = locationString.split('/$/channels/').join('').split('/');
//     return newLoc;
// }



const mSTP = (state, ownProps) => {

    // const getIds = extractServerProps(state, ownProps);

    return {

        currentUser: state.currentUser,
        server: state.entities.servers[ownProps.serverParams.serverId],
        serverId: ownProps.serverParams.serverId,
        errors: state.errors.server,
        channelErrors: state.errors.channel,
        sessionErrors: state.errors.session,
        servers: state.entities.servers

    }
}


const mDTP = (dispatch, ownProps) => {

    return {

        //server api functions
        fetchServer: (serverId) => dispatch(fetchServer(serverId)),
        fetchUserServers: (user) => dispatch(fetchServers(user)),
        removeServerErrors: () => dispatch(removeServerErrors()),

        //channel api functions

        removeChannelErrors: () => dispatch(removeChannelErrors()),

        //server membership api functions

        deleteServerMembership: (servermembershipId, servermembership) =>
            dispatch(deleteServerMembership(servermembershipId, servermembership)),

    }
}


const LeaveServerModalContainer = withRouter(connect(mSTP, mDTP)(LeaveServerModal));
export default LeaveServerModalContainer;
