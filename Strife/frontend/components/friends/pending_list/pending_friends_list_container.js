import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { selectFriendStatus } from '../../../utils/selectors_api_util';
import { requestFriendships, updateFriendship, deleteFriendship, removeFriendshipErrors } from '../../../actions/friendship_actions';
import PendingFriendList from './pending_friends_list';

const mSTP = (state) => {
    return {
        currentUser: state.entities.users[state.session.id],
        outgoing: selectFriendStatus(state, 1),
        incoming: selectFriendStatus(state, 2),
        errors: state.errors.friendship
    }
};


const mDTP = (dispatch) => {
    return {
        updateFriendship: (ids) => dispatch(updateFriendship(ids)),
        deleteFriendship: (ids) => dispatch(deleteFriendship(ids)),
        removeFriendshipErrors: () => dispatch(removeFriendshipErrors())

    }
};

const PendingFriendListContainer = withRouter(connect(mSTP, mDTP)(PendingFriendList));
export default PendingFriendListContainer;


