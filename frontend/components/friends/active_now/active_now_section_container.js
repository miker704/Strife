import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { requestFriendships, removeFriendshipErrors, requestAllFriendships } from '../../../actions/friendship_actions';
import { reSyncCurrentUser } from '../../../actions/session_actions';
import { fetchDmServers } from '../../../actions/dm_server_actions';
import { fetchServers } from '../../../actions/server_actions';
import { selectFriendStatusOnline, selectFriendsViaStatusType, selectOnlineFriends } from '../../../utils/selectors_api_util';
import ActiveNowSection from './active_now_section.jsx';

const mSTP = (state) => {
    return {
        // currentUser: state.entities.users[state.session.id],
        currentUser: state.currentUser,
        currentUserId: state.session.id,
        errors: state.errors.friendship,
        // onlineFriends: selectFriendStatusOnline(state, 3),
        onlineFriends: selectOnlineFriends(state, 3),
        dmServerErrors: state.errors.dmServer
    }
}

const mDTP = (dispatch) => {
    return {
        requestFriendships: () => dispatch(requestFriendships()),
        removeFriendshipErrors: () => dispatch(removeFriendshipErrors()),
        removeDmServerErrors: () => dispatch(removeDmServerErrors()),
        requestAllFriendships: () => dispatch(requestAllFriendships()),
        reSyncCurrentUser: (currentUser) => dispatch(reSyncCurrentUser(currentUser)),
        fetchUserDmServers: (currentUserId) => dispatch(fetchDmServers(currentUserId)),
        fetchUserServers: (currentUserId) => dispatch(fetchServers(currentUserId))
    };
};

const ActiveNowSectionContainer = withRouter(connect(mSTP, mDTP)(ActiveNowSection));
export default ActiveNowSectionContainer;
