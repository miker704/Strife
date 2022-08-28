import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { selectFriendStatus } from '../../../utils/selectors_api_util';
import { requestFriendships, updateFriendship, deleteFriendship, removeFriendshipErrors } from '../../../actions/friendship_actions';
import { openModal } from '../../../actions/modal_actions';
import { fetchUserByStrifeId, removeSessionErrors } from '../../../actions/session_actions';
import AddFriends from './add_friends';

const mSTP = (state) => {
    return {
        currentUser: state.entities.users[state.session.id],
        outgoing: selectFriendStatus(state, 1),
        incoming: selectFriendStatus(state, 2),
        errors: state.errors.friendship,
        sessionErrors: state.errors.session
    }
};


const mDTP = (dispatch) => {
    return {
        fetchUserByStrifeId: (user) => dispatch(fetchUserByStrifeId(user)),
        requestFriendships: () => dispatch(requestFriendships()),
        updateFriendship: (ids) => dispatch(updateFriendship(ids)),
        deleteFriendship: (ids) => dispatch(deleteFriendship(ids)),
        removeFriendshipErrors: () => dispatch(removeFriendshipErrors()),
        openModal: (modal) => dispatch(openModal(modal)),
        removeSessionErrors: () => dispatch(removeSessionErrors())
    }
};

const AddFriendsContainer = withRouter(connect(mSTP, mDTP)(AddFriends));
export default AddFriendsContainer;


