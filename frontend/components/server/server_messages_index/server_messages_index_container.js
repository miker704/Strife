import { connect } from "react-redux";
import { withRouter } from "react-router";
import { fetchChannel, deleteChannel, removeChannelErrors } from "../../../actions/channel_actions.js";
import { fetchServer, fetchServers, deleteServer, removeServerErrors, removeServer } from "../../../actions/server_actions.js";
import { receiveMessage, createMessage, removeMessageErrors} from "../../../actions/message_actions.js";
import { reSyncCurrentUser } from "../../../actions/session_actions.js";
import ServerMessagesIndex from "./server_messages_index.jsx";

const mSTP = (state, ownProps) => {

    return {
        newMessage: {
            body: "",
            author_id: state.session.id,
            channel_id: parseInt(ownProps.match.params.channelId)
        },
        messages: Object.values(state.entities.messages),
        messageIds: Object.keys(state.entities.messages),
        currentUserId: state.session.id,
        currentUser: state.currentUser,
        serverId: ownProps.match.params.serverId,
        channelId: ownProps.match.params.channelId,
        server: state.entities.servers[ownProps.match.params.serverId],
        channel: state.entities.channels[ownProps.match.params.channelId],
        channels: Object.values(state.entities.channels),
        serverMembers: Object.values(state.entities.servers[ownProps.match.params.serverId].users),
        errors: state.errors.message,
        channelErrors: state.errors.channel,
        serverErrors: state.errors.server,
        users: Object.values(state.entities.users),
        strifeBot: state.systemUtils._STRIFE_BOT

    }
}


const mDTP = (dispatch, ownProps) => {
    return {

        fetchUsersServers: (userId) => dispatch(fetchServers(userId)),
        fetchServer: () => { dispatch(fetchServer(ownProps.match.params.serverId)) },
        deleteServer: (serverId) => dispatch(deleteServer(serverId)),
        removeServer: (serverId) => dispatch(removeServer(serverId)),
        // fetchChannel: () => dispatch(fetchChannel(ownProps.match.params.channelId)),
        fetchChannel: (channelId) => dispatch(fetchChannel(channelId)),
        deleteChannel: (channelId) => dispatch(deleteChannel(channelId)),
        createMessage: (message) => dispatch(createMessage(message)),
        receiveMessage: (message) => dispatch(receiveMessage(message)),
        reSyncCurrentUser: (currentUser) => dispatch(reSyncCurrentUser(currentUser)),
        removeChannelErrors: () => dispatch(removeChannelErrors()),
        removeMessageErrors: () => dispatch(removeMessageErrors()),
        removeServerErrors: () => dispatch(removeServerErrors()),

    }
}
const ServerMessagesIndexContainer = withRouter(connect(mSTP, mDTP)(ServerMessagesIndex));
export default ServerMessagesIndexContainer;