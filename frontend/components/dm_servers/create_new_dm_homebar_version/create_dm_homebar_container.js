import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import CreateDmModalHomeBar from './create_dm_modal_homebar_version.jsx';

import { selectFriendStatus, selectAllFriends, selectFriendsViaStatusType } from '../../../utils/selectors_api_util';
import { requestFriendships, removeFriendshipErrors, requestAllFriendships, fetchAllFriendsSorted, requestAllOnlineFriends } from '../../../actions/friendship_actions';
import { createDmServer, removeDmServerErrors } from '../../../actions/dm_server_actions';
import { createDmMember } from '../../../actions/dm_member_actions';
import { closeModal } from '../../../actions/modal_actions';
import { reSyncCurrentUser } from '../../../actions/session_actions';

const mSTP = (state) => {
    return {
        // currentUser: state.entities.users[state.session.id],
        currentUser: state.currentUser,
        currentUserId: state.session.id,
        dmServers: Object.values(state.entities.dmServers),
        // friends: selectFriendStatus(state, 3),
        // friends: selectAllFriends(state, 3),
        friends: selectFriendsViaStatusType(state, 3),
        // allfriends: state.entities.friendshipsSorted.all_friends,
        errors: state.errors.friendship,
        dmServerErrors: state.errors.dmServer
    }
}

const mDTP = (dispatch) => {
    return {
        requestAllFriendships: () => dispatch(requestAllFriendships()),
        requestFriendships: () => dispatch(requestFriendships()),
        createDmServer: (dmserver) => dispatch(createDmServer(dmserver)),
        createDmMember: (dm_member) => dispatch(createDmMember(dm_member)),
        removeDmServerErrors: () => dispatch(removeDmServerErrors()),
        removeFriendshipErrors: () => dispatch(removeFriendshipErrors()),
        closeModal: () => dispatch(closeModal()),
        reSyncCurrentUser: (currentUser) => dispatch(reSyncCurrentUser(currentUser)),
        // fetchAllFriendsSorted: (userId) => dispatch(fetchAllFriendsSorted(userId)),
        // requestAllOnlineFriends:(userId) => dispatch(requestAllOnlineFriends(userId))
    }
}


const CreateDmModalHomeBarContainer = withRouter(connect(mSTP, mDTP)(CreateDmModalHomeBar));
export default CreateDmModalHomeBarContainer;