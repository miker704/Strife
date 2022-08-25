import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import FriendShipIndex from './friends_list';
import { requestFriendships } from '../../../actions/friendship_actions';

const mSTP = (state) => {
    return {
        currentUser: state.entities.users[state.session.id],
        friends: Object.values(state.entities.users)
    }
};


const mDTP = (dispatch) => {
    return {
        requestFriendships: () => dispatch(requestFriendships())

    }
};

const FriendShipIndexContainer = withRouter(connect(mSTP, mDTP)(FriendShipIndex));
export default FriendShipIndexContainer;
