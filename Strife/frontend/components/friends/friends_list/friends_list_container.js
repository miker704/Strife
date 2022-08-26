import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import FriendShipIndex from './friends_list';
import { requestFriendships, removeFriendshipErrors } from '../../../actions/friendship_actions';
import { selectFriendStatus } from '../../../utils/selectors_api_util';

const mSTP = (state) => {
    return {
        currentUser: state.entities.users[state.session.id],
        friends: selectFriendStatus(state, 3),
        errors: state.errors.friendship
    }
};


const mDTP = (dispatch) => {
    return {
        requestFriendships: () => dispatch(requestFriendships()),
    }
};

const FriendShipIndexContainer = withRouter(connect(mSTP, mDTP)(FriendShipIndex));
export default FriendShipIndexContainer;
