import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import FriendShipIndexOnline from './friends_list_online';
import { selectFriendStatusOnline } from '../../../utils/selectors_api_util';
import { requestFriendships, receiveFriendshipErrors } from '../../../actions/friendship_actions';

const mSTP = (state) => {
    return {
        currentUser: state.entities.users[state.session.id],
        friends: selectFriendStatusOnline(state, 3),
        errors: state.errors.friendship
    }
};


const mDTP = (dispatch) => {
    return {
        requestFriendships: () => dispatch(requestFriendships()),
    }
};

const FriendShipIndexOnlineContainer = withRouter(connect(mSTP, mDTP)(FriendShipIndexOnline));
export default FriendShipIndexOnlineContainer;


