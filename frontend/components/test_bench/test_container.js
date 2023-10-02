import { connect } from "react-redux";
import { withRouter } from "react-router";
import TestPage1 from "./test_page1";
import TestPage12 from "./test12";
import { Link } from "react-router-dom";
import { openModal, closeModal } from "../../actions/modal_actions";
import { fetchServer, fetchServers, fetchAnotherUsersServers, removeServerErrors, joinServer, createServer } from "../../actions/server_actions";
import { fetchChannel } from "../../actions/channel_actions";
import { fetchDmServers } from "../../actions/dm_server_actions";
import { fetchDmMemberShip } from "../../actions/dm_member_actions";
import { createChannel, removeChannelErrors, createChannelsViaServerTemplate } from "../../actions/channel_actions";
import { signUpUser, signInUser, reSyncCurrentUser, fetchUserByStrifeId, removeSessionErrors, searchUsers, fetchUserByUserNameOrStrifeID, removeUserAccount, logoutUser, updateUserInfo, disableUserAccount } from '../../actions/session_actions';
import { selectFriendStatusOnline, selectFriendStatus, selectFriendsViaStatusType, selectOnlineFriends } from '../../utils/selectors_api_util';
import { requestFriendships, removeFriendshipErrors, requestAllFriendships, createFriendship } from '../../actions/friendship_actions';
import { createDmServer, removeDmServerErrors } from '../../actions/dm_server_actions';




const getRandomId = () => {
    const userId = [1, 2, 3, 4, 4, 5, 6, 7, 8, 9, 10];
    const cut = Math.floor(Math.random() * (userId.length - 1) + 1)
    return userId[cut];
}






const mSTP = (state, ownProps) => {


    return {
        // currentUser: state.entities.users[state.session.id],
        serversArray: Object.values(state.entities.servers),
        servers: state.entities.servers,
        server: state.entities.servers[1],
        // serverId: ownProps.match.params.serverId,
        // errors: state.errors.session,
        // server: state.entities.servers[1],
        channels: Object.values(state.entities.channels),
        // dmServers: state.entities.dmServers,
        // dmServersArray: Object.values(state.entities.dmServers),
        // isMember: state.entities.users[state.session.id].dmServersJoined,
        // selectedLoadingMsg: "$TR!F3 Intrusion Prevention System - Warning You are Not Authorized to access this Server!",

        currentUser: state.currentUser,
        currentUserId: state.session.id,
        // friends: selectFriendStatusOnline(state, 3),
        // friends: selectFriendStatus(state, 3),
        onlineFriends: selectFriendStatusOnline(state, 3),
        friends2: selectFriendsViaStatusType(state, 3),
        onlineFriends2: selectOnlineFriends(state, 3),
        friendShipErrors: state.errors.friendship,
        sessionErrors: state.errors.session,
        dmServerErrors: state.errors.dmServer,
        // errors: state.errors.server,
        errors: state.errors.session,
        channelErrors: state.errors.channel,
        serverErrors: state.errors.server,
        // server: {
        //     server_owner_id: state.session.id,
        //     public: true,
        //     server_name: "",
        // },

        // formType: 'Sign In',
        formType: 'Sign Up',

        // navLink: (<span className="navlinks">Need an account?{" "}<Link to="/register">Register</Link></span>),
        memberId: getRandomId(),

    }
}

const mDTP = (dispatch) => {
    return {
        openModal: (modal) => dispatch(openModal(modal)),
        openSubModal: (subModal) => dispatch(openSubModal(subModal)),
        fetchUsersServers: (userId) => dispatch(fetchServers(userId)),
        fetchServers: () => dispatch(fetchServers()),
        fetchServer: (serverId) => dispatch(fetchServer(serverId)),
        fetchChannel: (channelId) => dispatch(fetchChannel(channelId)),
        fetchDmServers: () => dispatch(fetchDmServers()),
        fetchUserDmServers: (currentUserId) => dispatch(fetchDmServers(currentUserId)),
        closeModal: () => dispatch(closeModal()),
        closeSubModal: () => dispatch(closeSubModal()),

        fetchDmMemberShip: (dm_member) => dispatch(fetchDmMemberShip(dm_member)),
        requestFriendships: () => dispatch(requestFriendships()),
        removeFriendshipErrors: () => dispatch(removeFriendshipErrors()),
        removeDmServerErrors: () => dispatch(removeDmServerErrors()),
        createDmServer: (dmserver) => dispatch(createDmServer(dmserver)),
        openModal: (modal) => dispatch(openModal(modal)),
        requestAllFriendships: () => dispatch(requestAllFriendships()),
        reSyncCurrentUser: (currentUserId) => dispatch(reSyncCurrentUser(currentUserId)),
        createFriendship: (ids) => dispatch(createFriendship(ids)),
        searchUsers: (username) => dispatch(searchUsers(username)),
        fetchUserByStrifeId: (user) => dispatch(fetchUserByStrifeId(user)),
        removeSessionErrors: () => dispatch(removeSessionErrors()),
        fetchUserByUserNameOrStrifeID: (user) => dispatch(fetchUserByUserNameOrStrifeID(user)),





        // action: (server) => dispatch(createServer(server)),
        createServer: (server) => dispatch(createServer(server)),
        fetchJoinedServer: (serverId) => dispatch(fetchServer(serverId)),
        removeServerErrors: () => dispatch(removeServerErrors()),
        joinServer: (inviteCode) => dispatch(joinServer(inviteCode)),
        createChannelSetup: (channel) => dispatch(createChannel(channel)),
        removeChannelErrors: () => dispatch(removeChannelErrors()),
        createChannelsViaServerTemplate: (channels) => dispatch(createChannelsViaServerTemplate(channels)),



        updateUserInfo: (user) => { dispatch(updateUserInfo(user)) },
        deleteUserAccount: (userId) => { dispatch(removeUserAccount(userId)) },
        logoutUser: () => { dispatch(logoutUser()) },
        disableUserAccount: (user) => dispatch(disableUserAccount(user)),


    }
}


// const TestPageContainer = withRouter(connect(mSTP, mDTP)(TestPage));
// const TestPageContainer = withRouter(connect(mSTP, mDTP)(TestPage1));
const TestPageContainer = withRouter(connect(mSTP, mDTP)(TestPage12));
export default TestPageContainer;