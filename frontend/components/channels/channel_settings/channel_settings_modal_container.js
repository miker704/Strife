import { connect } from "react-redux";
import { withRouter } from "react-router";
import { fetchChannel, createChannel, updateChannel, deleteChannel, removeChannelErrors } from "../../../actions/channel_actions.js";
import { fetchServer, fetchServers, removeServerErrors } from "../../../actions/server_actions.js";
import { createChannelMembership, deleteChannelMembership } from "../../../actions/channel_membership_actions.js";
import { openModal, closeModal } from "../../../actions/modal_actions.js";
import { handleKeyUp } from "../../../utils/modal_api_util";
import { logoutUser, removeSessionErrors } from "../../../actions/session_actions";
import ChannelSettingsModal from "./channel_settings_modal.jsx";

const mSTP = (state, ownProps) => {

    return {

        server: state.entities.servers[ownProps.serverParams.serverId],
        channel: state.entities.channels[state.ui.modalProps.ChannelId] || null,
        currentUser: state.currentUser,
        channels: Object.values(state.entities.channels),
        errors: state.errors.channel,
        serverErrors: state.errors.server,
        sessionErrors: state.errors.session,
        servers: state.entities.servers,
        mod_Channel_ID: state.ui.modalProps.ChannelId || -1,
        ui_modal: state.ui.modal,

        channel_belongs_to_server_id: state.ui.modalProps.channel_belongs_to_server_id || null,
        currentChannel: state.ui.modalProps.selectedChannel || null,
        serverParams: ownProps.serverParams,

    }
}


const mDTP = (dispatch, ownProps) => {

    return {

        //logout user
        logoutUser: () => { dispatch(logoutUser()) },
        removeSessionErrors: () => dispatch(removeSessionErrors()),
        //server api functions
        fetchServer: (serverId) => dispatch(fetchServer(serverId)),
        fetchUserServers: (user) => dispatch(fetchServers(user)),
        fetchServers: () => dispatch(fetchServers()),

        removeServerErrors: () => dispatch(removeServerErrors()),


        //channel api functions

        // fetchChannel: (channelId) => { dispatch(fetchChannel(channelId)) },
        fetchChannel: (channelId) => dispatch(fetchChannel(channelId)),
        createChannel: (channel) => dispatch(createChannel(channel)),
        updateChannel: (channel) => dispatch(updateChannel(channel)),
        deleteChannel: (channelId) => dispatch(deleteChannel(channelId)),
        removeChannelErrors: () => dispatch(removeChannelErrors()),


        //channel membership api functions 
        createChannelMembership: (channelmembership) => dispatch(createChannelMembership(channelmembership)),
        deleteChannelMembership: (channelmembershipId, channelmembership) =>
            dispatch(deleteChannelMembership(channelmembershipId, channelmembership)),

        // modal api functions
        openModal: modal => dispatch(openModal(modal)),
        closeModal: () => dispatch(closeModal()),
        handleESC: (e) => handleKeyUp(e),

    }
}


const ChannelSettingsModalContainer = withRouter(connect(mSTP, mDTP)(ChannelSettingsModal));
export default ChannelSettingsModalContainer;
