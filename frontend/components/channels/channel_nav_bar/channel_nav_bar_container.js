import { withRouter } from "react-router";
import { connect } from "react-redux";
import ChannelNavBar from "./channel_nav_bar";
import { fetchChannel } from "../../../actions/channel_actions";
import { fetchServer, fetchServers, deleteServer } from "../../../actions/server_actions";
import { removeServerMembership } from "../../../actions/server_membership_actions";
import { removeChannelMembership } from "../../../actions/channel_membership_actions"
import { openModal, openModalWithProps } from "../../../actions/modal_actions";

const mSTP = (state, ownProps) => {

    return {
        currentUser: state.currentUser,
        currentUserId: state.session.id,
        server: state.entities.servers[ownProps.match.params.serverId],
        channels: Object.values(state.entities.channels),
        serverChannels: Object.values(state.entities.servers[ownProps.match.params.serverId].channels),
        currentChannelId: ownProps.match.params.channelId,
        currentChannel: state.entities.channels[ownProps.match.params.channelId],
        serverId: ownProps.match.params.serverId,
        errors: state.errors.channel,
        serverErrors: state.errors.server

    }
};


const mDTP = (dispatch, ownProps) => {
    return {
        fetchChannel: (channelId) => dispatch(fetchChannel(ownProps.match.params.channelId)),
        openModal: modal => dispatch(openModal(modal)),
        fetchServers: () => dispatch(fetchServers()),
        fetchServer: (serverId) => dispatch(fetchServer(ownProps.match.params.serverId)),
        deleteServer: serverId => dispatch(deleteServer(serverId)),
        removeChannelMembership: (channelmembershiphash) => dispatch(removeChannelMembership(channelmembershiphash)),
        removeServerMembership: (membershiphash) => dispatch(removeServerMembership(membershiphash)),
        openModalWithProps: (modal_With_props) => dispatch(openModalWithProps(modal_With_props))

    }
}


const ChannelNavBarContainer = withRouter(connect(mSTP, mDTP)(ChannelNavBar));

export default ChannelNavBarContainer;