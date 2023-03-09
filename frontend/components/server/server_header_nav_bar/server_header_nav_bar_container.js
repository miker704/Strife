import ServerHeaderNavBar from "./server_header_nav_bar";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { fetchChannel, createChannel, updateChannel, deleteChannel, removeChannelErrors } from "../../../actions/channel_actions.js";
import { fetchServer, fetchServers, removeServerErrors, deleteServer, updateServer } from "../../../actions/server_actions.js";
import { createChannelMembership, deleteChannelMembership } from "../../../actions/channel_membership_actions.js";
import { createServerMembership, deleteServerMembership } from "../../../actions/server_membership_actions.js";
import { openModal } from "../../../actions/modal_actions.js";

const mSTP = (state, ownProps) => {
    return {
        // currentUser: state.entities.users[state.session.id],
        currentUser: state.currentUser,
        server: state.entities.servers[ownProps.match.params.serverId],
        channels: Object.values(state.entities.channels),
        currentChannelId: ownProps.match.params.channelId,
        serverId: ownProps.match.params.serverId,
        errors: state.errors.server,
        channelErrors: state.errors.channel,
        currentChannel: state.entities.channels[ownProps.match.params.channelId]
    }

}

const mDTP = (dispatch,ownProps) => {
    return {
        //server api functions
        fetchServer: serverId => dispatch(fetchServer(serverId)),
        fetchUserServers: (user) => dispatch(fetchServers(user)),
        fetchServers: () => dispatch(fetchServers()),
        updateServer: (server) => dispatch(updateServer(server)),
        deleteServer: (serverId) => dispatch(deleteServer(serverId)),
        removeServerErrors: () => dispatch(removeServerErrors()),
        
        
        //channel api functions
        
        fetchChannel: (channelId) => { dispatch(fetchChannel(channelId)) },
        createChannel: (channel) => dispatch(createChannel(channel)),
        updateChannel: (channel) => dispatch(updateChannel(channel)),
        deleteChannel: (channelId) => dispatch(deleteChannel(channelId)),
        removeChannelErrors: () => dispatch(removeChannelErrors()),

        //server membership api functions

        createServerMembership: (servermembership) => dispatch(createServerMembership(servermembership)),
        deleteServerMembership: (servermembershipId, servermembership) => 
        dispatch(deleteServerMembership(servermembershipId,servermembership)),

        //channel membership api functions 
        createChannelMembership: (channelmembership) => dispatch(createChannelMembership(channelmembership)),
        deleteChannelMembership: (channelmembershipId,channelmembership) => 
        dispatch(deleteChannelMembership(channelmembershipId,channelmembership)),

        // modal api functions
        openModal: modal => dispatch(openModal(modal)),
    }
}

const ServerHeaderNavBarContainer = withRouter(connect(mSTP, mDTP)(ServerHeaderNavBar));
export default ServerHeaderNavBarContainer;