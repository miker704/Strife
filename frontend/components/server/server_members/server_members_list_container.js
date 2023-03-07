import { connect } from "react-redux";
import { withRouter } from "react-router";
import { fetchChannel,removeChannelErrors } from "../../../actions/channel_actions.js";
import { fetchServer, fetchServers, removeServerErrors} from "../../../actions/server_actions.js";
import { createServerMembership, deleteServerMembership } from "../../../actions/server_membership_actions.js";
import { openModal } from "../../../actions/modal_actions.js";
import ServerMembersList from "./server_members_list.jsx";

const mSTP = (state, ownProps) => {
    return {
        // currentUser: state.entities.users[state.session.id],
        currentUser: state.currentUser,
        serverId: ownProps.match.params.serverId,
        errors: state.errors.server,
        server: state.entities.servers[ownProps.match.params.serverId],
        channels: Object.values(state.entities.channels),
        currentChannelId: ownProps.match.params.channelId,
        channelErrors: state.errors.channel
    }

}

const mDTP = (dispatch,ownProps) => {
    return {
        //server api functions
        fetchServer: serverId => dispatch(fetchServer(serverId)),
        fetchUserServers: (user) => dispatch(fetchServers(user)),
        fetchServers: () => dispatch(fetchServers()),
        removeServerErrors: () => dispatch(removeServerErrors()),
        
        //channel api functions
        
        fetchChannel: (channelId) => { dispatch(fetchChannel(channelId)) },
        removeChannelErrors: () => dispatch(removeChannelErrors()),

        //server membership api functions

        createServerMembership: (servermembership) => dispatch(createServerMembership(servermembership)),
        deleteServerMembership: (servermembershipId, servermembership) => 
        dispatch(deleteServerMembership(servermembershipId,servermembership)),

        // modal api functions
        openModal: modal => dispatch(openModal(modal)),
    }
}

const ServerMembersListContainer = withRouter(connect(mSTP, mDTP)(ServerMembersList));
export default ServerMembersListContainer;