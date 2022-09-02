import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { selectFriendStatus, selectAllFriends } from '../../../utils/selectors_api_util';
import { requestFriendships, deleteFriendship, removeFriendshipErrors, requestAllFriendships } from '../../../actions/friendship_actions';
import BlockedList from './blocked_list';

const mSTP = (state) => {
    return {
        currentUser: state.entities.users[state.session.id],
        // blockedUsers: selectFriendStatus(state, -1),
        blockedUsers: selectAllFriends(state, -1),

        errors: state.errors.friendship
    }
};


const mDTP = (dispatch) => {
    return {
        requestFriendships: () => dispatch(requestFriendships()),
        removeBlockedUser: (ids) => dispatch(deleteFriendship(ids)),
        removeFriendshipErrors: () => dispatch(removeFriendshipErrors()),
        requestAllFriendships: () => dispatch(requestAllFriendships())
    }
};

const BlockedListContainer = withRouter(connect(mSTP, mDTP)(BlockedList));
export default BlockedListContainer;


