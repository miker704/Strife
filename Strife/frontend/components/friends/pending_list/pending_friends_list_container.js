import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { selectFriendStatusOnline } from '../../../utils/selectors_api_util';
import { requestFriendships } from '../../../actions/friendship_actions';
import PendingFriendList from './pending_friends_list';

const mSTP = (state) => {
    return {
        currentUser: state.entities.users[state.session.id],
        friends: selectFriendStatusOnline(state,3)
    }
};


const mDTP = (dispatch) => {
    return {
        requestFriendships: () => dispatch(requestFriendships())

    }
};

const PendingFriendListContainer = withRouter(connect(mSTP, mDTP)(PendingFriendList));
export default PendingFriendListContainer;


