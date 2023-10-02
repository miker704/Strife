import { connect } from "react-redux";
import { withRouter } from "react-router";
import { fetchChannel, removeChannelErrors } from "../../../actions/channel_actions.js";
import { fetchServer, removeServerErrors } from "../../../actions/server_actions.js";
import { reSyncCurrentUser } from "../../../actions/session_actions.js";
import LoadingTextChannelChatRoom from "./loading_text_channel_chat_room.jsx";

const mSTP = (state, ownProps) => {
    let channelName = '';
    if (state.entities.channels[ownProps.match.params.channelId]) {
        channelName = state.entities.channels[ownProps.match.params.channelId].channel_name;
    }
    return {

        serverId: ownProps.match.params.serverId,
        channelId: ownProps.match.params.channelId,
        server: state.entities.servers[ownProps.match.params.serverId],
        channel: state.entities.channels[ownProps.match.params.channelId],
        channels: Object.values(state.entities.channels),
        channelName: channelName,
        channelErrors: state.errors.channel,
        serverErrors: state.errors.server,
    }
}


const mDTP = (dispatch, ownProps) => {
    return {

        fetchServer: () => { dispatch(fetchServer(ownProps.match.params.serverId)) },
        fetchChannel: (channelId) => dispatch(fetchChannel(channelId)),
        reSyncCurrentUser: (currentUser) => dispatch(reSyncCurrentUser(currentUser)),
        removeChannelErrors: () => dispatch(removeChannelErrors()),
        removeServerErrors: () => dispatch(removeServerErrors()),

    }
}

const LoadingTextChannelChatRoomContainer = withRouter(connect(mSTP, mDTP)(LoadingTextChannelChatRoom));
export default LoadingTextChannelChatRoomContainer;