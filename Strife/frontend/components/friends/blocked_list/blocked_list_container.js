import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { selectFriendStatus } from '../../../utils/selectors_api_util';
import { requestFriendships, deleteFriendship, removeFriendshipErrors } from '../../../actions/friendship_actions';
import BlockedList from './blocked_list';

const mSTP = (state) => {
    return {
        currentUser: state.entities.users[state.session.id],
        blockedUsers: selectFriendStatus(state,-1),
        errors: state.errors.friendship
    }
};


const mDTP = (dispatch) => {
    return {
        requestFriendships: () => dispatch(requestFriendships()),
        removeBlockedUser: (ids) => dispatch(deleteFriendship(ids)),
        receiveFriendshipErrors: () => dispatch(receiveFriendshipErrors())
    }
};

const BlockedListContainer = withRouter(connect(mSTP, mDTP)(BlockedList));
export default BlockedListContainer;


