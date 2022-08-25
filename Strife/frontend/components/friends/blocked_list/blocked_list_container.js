import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { selectFriendStatus } from '../../../utils/selectors_api_util';
import { requestFriendships } from '../../../actions/friendship_actions';
import BlockedList from './blocked_list';

const mSTP = (state) => {
    return {
        currentUser: state.entities.users[state.session.id],
        friends: selectFriendStatus(state,-1)
    }
};


const mDTP = (dispatch) => {
    return {
        requestFriendships: () => dispatch(requestFriendships())

    }
};

const BlockedListContainer = withRouter(connect(mSTP, mDTP)(BlockedList));
export default BlockedListContainer;


