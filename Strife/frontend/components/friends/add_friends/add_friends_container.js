import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { selectFriendStatus } from '../../../utils/selectors_api_util';
import { requestFriendships, updateFriendship, deleteFriendship } from '../../../actions/friendship_actions';
import AddFriends from './add_friends';

const mSTP = (state) => {
    return {
        currentUser: state.entities.users[state.session.id],
        outgoing: selectFriendStatus(state,1),
        incoming: selectFriendStatus(state,2)
    }
};


const mDTP = (dispatch) => {
    return {
        requestFriendships: () => dispatch(requestFriendships()),
        updateFriendship: (ids) => dispatch(updateFriendship(ids)),
        deleteFriendship: (ids) => dispatch(deleteFriendship(ids))

    }
};

const AddFriendsContainer = withRouter(connect(mSTP, mDTP)(AddFriends));
export default AddFriendsContainer;


