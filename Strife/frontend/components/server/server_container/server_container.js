import { connect } from "react-redux";
import { withRouter } from "react-router";
import Server from "./server.jsx";
import { fetchChannel, createChannel, updateChannel, deleteChannel } from "../../../actions/channel_actions.js";
import { fetchServer, fetchServers, removeServerErrors, deleteServer, updateServer } from "../../../actions/server_actions.js";
import { createChannelMembership, deleteChannelMembership } from "../../../actions/channel_membership_actions.js";
import { createServerMembership, deleteServerMembership } from "../../../actions/server_membership_actions.js";


const mSTP = (state, ownProps) => {


    return {
        currentUser: state.entities.users[state.session.id],
        server: state.entities.servers[ownProps.match.params.serverId],
        channels: Object.values(state.entities.channels),
        currentChannelId: ownProps.match.params.channelId,
        serverId: ownProps.match.params.serverId,
        dmServers: Object.values(state.entities.dmServers),
        errors: state.errors.channel,
        serverErrors: state.errors.server
        


    }
}


const mDTP = (dispatch, ownProps) => {
    return {
        fetchChannel: (channelId) => { dispatch(fetchChannel(channelId)) },
        openModal: modal => dispatch(openModal(modal)),
        fetchServers: () => dispatch(fetchServers()),
        fetchServer: serverId => dispatch(fetchServer(serverId)),
        deleteServer: serverId => dispatch(deleteServer(serverId)),
        removeChannelMembership: (channelmembershiphash) => dispatch(removeChannelMembership(channelmembershiphash)),
        removeServerMembership: (membershiphash) => dispatch(removeServerMembership(membershiphash))
    }
}


const ServerContainer = withRouter(connect(mSTP, mDTP)(Server));
export default ServerContainer;
