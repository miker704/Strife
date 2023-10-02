import { connect } from "react-redux";
import { withRouter } from "react-router";
import { fetchChannel, deleteChannel, removeChannelErrors, webSocketReceiveChannel } from "../../../actions/channel_actions.js";
import { fetchServer, fetchServers, deleteServer, removeServerErrors, removeServer } from "../../../actions/server_actions.js";
import { receiveMessage, createMessage, removeMessageErrors, removeMessage } from "../../../actions/message_actions.js";
import { reSyncCurrentUser } from "../../../actions/session_actions.js";
import ServerChatRoom from "./server_chat_room.jsx";

const mSTP = (state, ownProps) => {


    const currentChannelId = ownProps.match.params.channelId;
    const sortedChannelMessages = Object.values(state.entities.messages)
        .filter(msg => msg.channel_id === parseInt(currentChannelId));
    //fails safe as switching to a different server crashes due to channel name being undefined
    // we can set this to null but it leaves the placeholder in message input of null when switch too fast 
    // so setting it to an empty string we can set placeholder with message # then the channel name
    let channelName = '';
    if (state.entities.channels[ownProps.match.params.channelId]) {
        channelName = state.entities.channels[ownProps.match.params.channelId].channel_name;
    }

    let channel_type = 1;
    if (state.entities.channels[ownProps.match.params.channelId]) {
        channel_type = state.entities.channels[ownProps.match.params.channelId].channel_type;
    }

    return {
        newMessage: {
            body: "",
            author_id: state.session.id,
            channel_id: parseInt(ownProps.match.params.channelId)
        },
        messages: Object.values(state.entities.messages),
        messageIds: Object.keys(state.entities.messages),
        currentChannelMessages: sortedChannelMessages,
        currentUserId: state.session.id,
        currentUser: state.currentUser,
        serverId: ownProps.match.params.serverId,
        channelId: ownProps.match.params.channelId,
        server: state.entities.servers[ownProps.match.params.serverId],
        channel: state.entities.channels[ownProps.match.params.channelId],
        channelName: channelName,
        channel_type: channel_type,
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
        webSocketReceiveChannel: (channelId) => dispatch(webSocketReceiveChannel(channelId)),
        createMessage: (message) => dispatch(createMessage(message)),
        receiveMessage: (message) => dispatch(receiveMessage(message)),
        removeMessage: (messageId) => dispatch(removeMessage(messageId)),
        reSyncCurrentUser: (currentUser) => dispatch(reSyncCurrentUser(currentUser)),
        removeChannelErrors: () => dispatch(removeChannelErrors()),
        removeMessageErrors: () => dispatch(removeMessageErrors()),
        removeServerErrors: () => dispatch(removeServerErrors()),

    }
}


const ServerChatRoomContainer = withRouter(connect(mSTP, mDTP)(ServerChatRoom));
export default ServerChatRoomContainer;
