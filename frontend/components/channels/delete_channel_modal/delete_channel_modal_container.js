import { connect } from "react-redux";
import { withRouter } from "react-router";
import { fetchChannel, deleteChannel, removeChannelErrors } from "../../../actions/channel_actions.js";
import { fetchServer, fetchServers, removeServerErrors } from "../../../actions/server_actions.js";
import { deleteChannelMembership } from "../../../actions/channel_membership_actions.js";
import { closeModal } from "../../../actions/modal_actions.js";
import { handleKeyUp } from "../../../utils/modal_api_util";
import DeleteChannelModal from "./delete_channel_modal.jsx";

const mSTP = (state, ownProps) => {


    return {

        currentUser: state.currentUser,
        server: state.entities.servers[ownProps.serverParams.serverId],
        channel: state.entities.channels[ownProps.serverParams.channelId] || null,
        channels: Object.values(state.entities.channels),
        currentChannelId: ownProps.mod_Channel_ID,
        serverId: ownProps.serverParams.serverId,
        errors: state.errors.server,
        channelErrors: state.errors.channel,
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

        fetchChannel: (channelId) => { dispatch(fetchChannel(channelId)) },
        deleteChannel: (channelId) => dispatch(deleteChannel(channelId)),
        removeChannelErrors: () => dispatch(removeChannelErrors()),

        //channel membership api functions 
        deleteChannelMembership: (channelmembershipId, channelmembership) =>
            dispatch(deleteChannelMembership(channelmembershipId, channelmembership)),

        // modal api functions
        closeModal: () => dispatch(closeModal()),
        handleESC: (e) => handleKeyUp(e),

    }
}


const DeleteChannelModalContainer = withRouter(connect(mSTP, mDTP)(DeleteChannelModal));
export default DeleteChannelModalContainer;
