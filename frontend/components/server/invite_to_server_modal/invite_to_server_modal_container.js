import { connect } from "react-redux";
import { withRouter } from "react-router";
import { fetchChannel, removeChannelErrors } from "../../../actions/channel_actions.js";
import { fetchServer, fetchServers, removeServerErrors } from "../../../actions/server_actions.js";
import { createServerMembership, createServerMembershipViaInjectionOfDmMembers } from "../../../actions/server_membership_actions.js";
import { closeModal } from "../../../actions/modal_actions.js";
import { handleKeyUp } from "../../../utils/modal_api_util";
import { requestFriendships, removeFriendshipErrors, requestAllFriendships } from "../../../actions/friendship_actions.js";
import { fetchDmServers, removeDmServerErrors, createDmServer } from "../../../actions/dm_server_actions.js";
import { sendDmMessage, removeDmMessageErrors } from "../../../actions/dm_messages_actions.js";
import { selectAllFriends } from "../../../utils/selectors_api_util.js";
import { reSyncCurrentUser } from "../../../actions/session_actions.js";
import InviteToServerModal from "./invite_to_server_modal.jsx";

const mSTP = (state, ownProps) => {
    return {

        currentUser: state.currentUser,
        server: state.entities.servers[ownProps.serverParams.serverId],
        channel: state.entities.channels[state.ui.modalProps.ChannelId] || null,
        currentChannel: state.entities.channels[parseInt(state.ui.modalProps.ChannelId)] || null,
        currentChannelId: state.ui.modalProps.ChannelId || -1,
        serverId: ownProps.serverParams.serverId,
        mod_Channel_ID: state.ui.modalProps.ChannelId || -1,
        i2smType: state.ui.modalProps.ChannelId === -1 ? "CDDM" : "NORMAL",
        channels: Object.values(state.entities.channels),
        errors: state.errors.server,
        channelErrors: state.errors.channel,
        friendShipErrors: state.errors.friendship,
        dmServerErrors: state.errors.dmServer,
        dmMessageErrors: state.errors.dmMessage,
        servers: state.entities.servers,
        friends: selectAllFriends(state, 3),
        dmServers: state.entities.dmServers,
        channel_belongs_to_server_id: state.ui.modalProps.channel_belongs_to_server_id || -1,

    }
}


const mDTP = (dispatch, ownProps) => {

    return {


        reSyncCurrentUser: (currentUserId) => dispatch(reSyncCurrentUser(currentUserId)),

        //server api functions
        fetchServer: (serverId) => dispatch(fetchServer(serverId)),
        fetchUserServers: (user) => dispatch(fetchServers(user)),
        fetchServers: () => dispatch(fetchServers()),
        removeServerErrors: () => dispatch(removeServerErrors()),

        //dmserver fetches
        fetchDmServers: (userId) => dispatch(fetchDmServers(userId)),
        removeDmServerErrors: () => dispatch(removeDmServerErrors()),
        createDmServer: (dmserver) => dispatch(createDmServer(dmserver)),

        //dm Messages 
        sendDmMessage: (dmMsg) => dispatch(sendDmMessage(dmMsg)),
        removeDmMessageErrors: () => dispatch(removeDmMessageErrors()),

        //friend ship stuff
        removeFriendshipErrors: () => dispatch(removeFriendshipErrors()),
        requestAllFriendships: () => dispatch(requestAllFriendships()),
        requestFriendships: () => dispatch(requestFriendships()),

        //channel api functions

        fetchChannel: (channelId) => { dispatch(fetchChannel(channelId)) },
        removeChannelErrors: () => dispatch(removeChannelErrors()),

        //server membership api functions

        createServerMembership: (servermembership) => dispatch(createServerMembership(servermembership)),
        createServerMembershipViaInjectionOfDmMembers: (servermembership) => dispatch(createServerMembershipViaInjectionOfDmMembers(servermembership)),
        // modal api functions
        closeModal: () => dispatch(closeModal()),
        handleESC: (e) => handleKeyUp(e),

    }
}


const InviteToServerModalContainer = withRouter(connect(mSTP, mDTP)(InviteToServerModal));
export default InviteToServerModalContainer;
