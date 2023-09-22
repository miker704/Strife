import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { removeFriendshipErrors, createFriendship, updateFriendship } from '../../../actions/friendship_actions';
import { closeModal } from '../../../actions/modal_actions';
import NotFriendsInviteToDmModal from './not_friends_dm_modal.jsx';

const mSTP = (state, ownProps) => {
    return {
        currentUser: state.currentUser,
        errors: state.errors.friendship,
        users: Object.values(state.entities.users),
    }
}

const mDTP = (dispatch) => {
    return {
        removeFriendshipErrors: () => dispatch(removeFriendshipErrors()),
        closeModal: () => dispatch(closeModal()),
        createFriendship: (ids) => dispatch(createFriendship(ids)),
        updateFriendship: (ids) => dispatch(updateFriendship(ids)),
    }
}


const NotFriendsInviteToDmModalContainer = withRouter(connect(mSTP, mDTP)(NotFriendsInviteToDmModal));
export default NotFriendsInviteToDmModalContainer;