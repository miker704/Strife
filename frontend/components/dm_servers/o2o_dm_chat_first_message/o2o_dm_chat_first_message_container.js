import { connect } from "react-redux";
import { withRouter } from "react-router";
import { fetchDmServer, fetchDmServers, removeDmServerErrors } from "../../../actions/dm_server_actions.js";
import { selectDmMembers } from "../../../utils/selectors_api_util.js";
import { removeSessionErrors, reSyncCurrentUser, fetchUser, } from '../../../actions/session_actions.js'
import { requestFriendships, removeFriendshipErrors, deleteFriendship, updateFriendship, blockUser, createFriendship, unBlockUser } from '../../../actions/friendship_actions';
import O2ODMChatFirstMessage from "./o2o_dm_chat_first_message.jsx";

const mSTP = (state, ownProps) => {

    return {
        currentUserId: state.session.id,
        currentUser: state.currentUser,
        dmServer: state.entities.dmServers[ownProps.match.params.dmServerId],
        dmServerMembers: selectDmMembers(state, ownProps.match.params.dmServerId),
        dmServers: Object.values(state.entities.dmServers),
        dmServerErrors: state.errors.dmServer,
        errors: state.errors.session,
        friendshipErrors: state.errors.friendship,
        users: Object.values(state.entities.users),
        member: state.entities.dmServers[ownProps.match.params.dmServerId]?.other_o2o_member,
        memberId: state.entities.dmServers[ownProps.match.params.dmServerId]?.other_o2o_member?.id,
    }
}


const mDTP = (dispatch, ownProps) => {
    return {
        fetchDmServers: (userId) => dispatch(fetchDmServers(userId)),
        fetchDmServer: (dmServerId) => dispatch(fetchDmServer(dmServerId)),
        reSyncCurrentUser: (currentUser) => dispatch(reSyncCurrentUser(currentUser)),
        removeSessionErrors: () => dispatch(removeSessionErrors()),
        fetchUser: (memberId) => dispatch(fetchUser(memberId)),
        requestFriendships: () => dispatch(requestFriendships()),
        removeFriendshipErrors: () => dispatch(removeFriendshipErrors()),
        removeDmServerErrors: () => dispatch(removeDmServerErrors()),
        deleteFriendship: (ids) => dispatch(deleteFriendship(ids)),
        blockUser: (ids) => dispatch(blockUser(ids)),
        unBlockUser: (ids) => dispatch(unBlockUser(ids)),
        updateFriendship: (ids) => dispatch(updateFriendship(ids)),
        createFriendship: (ids) => dispatch(createFriendship(ids)),
    }
}

const O2ODMChatFirstMessageContainer = withRouter(connect(mSTP, mDTP)(O2ODMChatFirstMessage));
export default O2ODMChatFirstMessageContainer;
