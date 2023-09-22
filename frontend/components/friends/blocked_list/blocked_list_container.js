import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { selectFriendStatus } from '../../../utils/selectors_api_util';
import { requestFriendships, removeFriendshipErrors, requestAllFriendships , unBlockUser} from '../../../actions/friendship_actions';
import BlockedList from './blocked_list';

const mSTP = (state) => {
    return {
        // currentUser: state.entities.users[state.session.id],
        currentUser: state.currentUser,
        blockedUsers: selectFriendStatus(state, -1),
        errors: state.errors.friendship
    }
};


const mDTP = (dispatch) => {
    return {
        requestFriendships: () => dispatch(requestFriendships()),
        removeBlockedUser: (ids) => dispatch(unBlockUser(ids)),
        removeFriendshipErrors: () => dispatch(removeFriendshipErrors()),
        requestAllFriendships: () => dispatch(requestAllFriendships())
    }
};

const BlockedListContainer = withRouter(connect(mSTP, mDTP)(BlockedList));
export default BlockedListContainer;


