import ServerUserOptionsMessengerModal from "./suop_messenger_modal";
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { selectFriendStatusOnline } from '../../../utils/selectors_api_util';
import { requestFriendships, removeFriendshipErrors, deleteFriendship, updateFriendship, blockUser, createFriendship, unBlockUser } from '../../../actions/friendship_actions';
import { createDmServer, removeDmServerErrors, fetchDmServer, deleteDmServer } from '../../../actions/dm_server_actions';
import { deleteDmMember } from '../../../actions/dm_member_actions';
import { createChannelMembership, deleteChannelMembership } from "../../../actions/channel_membership_actions.js";
import { createServerMembership, deleteServerMembership } from "../../../actions/server_membership_actions.js";
import { fetchUser, removeSessionErrors } from '../../../actions/session_actions.js';
import { removeServerErrors, fetchServer } from "../../../actions/server_actions.js";
import { removeChannelErrors, fetchChannel } from "../../../actions/channel_actions.js";
import { reSyncCurrentUser } from "../../../actions/session_actions.js";
import { sendDmMessage } from '../../../actions/dm_messages_actions.js';
import { openModal } from "../../../actions/modal_actions";

const mSTP = (state, ownProps) => {
    return {
        currentUser: state.currentUser,
        currentUserId: state.session.id,
        friends: selectFriendStatusOnline(state, 3),
        errors: state.errors.friendship,
        dmServerErrors: state.errors.dmServer,
        dmServerId: ownProps.match.params.dmServerId,
        dmServers: Object.values(state.entities.dmServers),
        serverId: ownProps.match.params.serverId,
        channelId: ownProps.match.params.channelId,
        channels: Object.values(state.entities.channels),
        servers: Object.values(state.entities.servers),
        serverErrors: state.errors.server,
        channelErrors: state.errors.channel,
        sessionErrors: state.errors.session,
        users: Object.values(state.entities.users),
        messageVersion: ownProps.messageVersion || false,
        getClientRect: ownProps.getClientRect || {},
        serverMemberShipDate: ownProps.serverMemberShipDate || "",
        userNameClicked: ownProps.userNameClicked || false,
    }
};

const mDTP = (dispatch, ownProps) => {
    return {
        fetchUser: (memberId) => dispatch(fetchUser(memberId)),
        requestFriendships: () => dispatch(requestFriendships()),
        removeFriendshipErrors: () => dispatch(removeFriendshipErrors()),
        removeDmServerErrors: () => dispatch(removeDmServerErrors()),
        removeSessionErrors: () => dispatch(removeSessionErrors()),
        deleteFriendship: (ids) => dispatch(deleteFriendship(ids)),
        blockUser: (ids) => dispatch(blockUser(ids)),
        unBlockUser: (ids) => dispatch(unBlockUser(ids)),
        updateFriendship: (ids) => dispatch(updateFriendship(ids)),
        createFriendship: (ids) => dispatch(createFriendship(ids)),
        kickUserfromGroupChat: (dm_memberId, dm_member) => dispatch(deleteDmMember(dm_memberId, dm_member)),
        createDmServer: (dmserver) => dispatch(createDmServer(dmserver)),
        fetchDmServer: () => dispatch(fetchDmServer(ownProps.match.params.dmServerId)),
        deleteDmServer: (dmServerId) => dispatch(deleteDmServer(dmServerId)),

        fetchServer: () => dispatch(fetchServer(ownProps.match.params.serverId)),
        fetchChannel: () => dispatch(fetchChannel(ownProps.match.params.channelId)),

        createServerMembership: (servermembership) => dispatch(createServerMembership(servermembership)),
        deleteServerMembership: (servermembershipId, servermembership) =>
            dispatch(deleteServerMembership(servermembershipId, servermembership)),

        //channel membership api functions 
        createChannelMembership: (channelmembership) => dispatch(createChannelMembership(channelmembership)),
        deleteChannelMembership: (channelmembershipId, channelmembership) =>
            dispatch(deleteChannelMembership(channelmembershipId, channelmembership)),


        removeChannelErrors: () => dispatch(removeChannelErrors()),
        removeServerErrors: () => dispatch(removeServerErrors()),

        //reSync current user props
        reSyncCurrentUser: (currentUserId) => dispatch(reSyncCurrentUser(currentUserId)),
        sendDmMessage: (dmMsg) => dispatch(sendDmMessage(dmMsg)),

        openModal: (modal) => dispatch(openModal(modal)),

    }
};
const ServerUserOptionsMessengerModalContainer = withRouter(connect(mSTP, mDTP)(ServerUserOptionsMessengerModal));
export default ServerUserOptionsMessengerModalContainer;


