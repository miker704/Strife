import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { selectFriendStatus } from '../../../utils/selectors_api_util';
import { requestFriendships, updateFriendship, deleteFriendship, removeFriendshipErrors, createFriendship } from '../../../actions/friendship_actions';
import { openModal, closeModal } from '../../../actions/modal_actions';
import { fetchUserByStrifeId, removeSessionErrors, searchUsers } from '../../../actions/session_actions';
import AddFriends from './add_friends';

const mSTP = (state) => {
    return {
        // currentUser: state.entities.users[state.session.id],
        currentUser: state.currentUser,
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
        createFriendship: (ids) => dispatch(createFriendship(ids)),
        updateFriendship: (ids) => dispatch(updateFriendship(ids)),
        deleteFriendship: (ids) => dispatch(deleteFriendship(ids)),
        searchUsers:(username) => dispatch(searchUsers(username)),
        removeFriendshipErrors: () => dispatch(removeFriendshipErrors()),
        openModal: (modal) => dispatch(openModal(modal)),
        removeSessionErrors: () => dispatch(removeSessionErrors()),
        closeModal: () => dispatch(closeModal())
    }
};

const AddFriendsContainer = withRouter(connect(mSTP, mDTP)(AddFriends));
export default AddFriendsContainer;


