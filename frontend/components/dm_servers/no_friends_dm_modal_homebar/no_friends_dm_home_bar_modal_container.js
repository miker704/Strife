import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import NoFriendsDMHomeBarModal from './no_friends_dm_home_bar_modal.jsx';
import { selectFriendsViaStatusType } from '../../../utils/selectors_api_util.js';
import { removeFriendshipErrors } from '../../../actions/friendship_actions.js';
import { removeDmServerErrors } from '../../../actions/dm_server_actions.js';
import { closeModal } from '../../../actions/modal_actions.js';

const mSTP = (state) => {
    return {
        currentUser: state.currentUser,
        currentUserId: state.session.id,
        dmServers: Object.values(state.entities.dmServers),
        friends: selectFriendsViaStatusType(state, 3),
        errors: state.errors.friendship,
        dmServerErrors: state.errors.dmServer
    }
}

const mDTP = (dispatch) => {
    return {
        removeDmServerErrors: () => dispatch(removeDmServerErrors()),
        removeFriendshipErrors: () => dispatch(removeFriendshipErrors()),
        closeModal: () => dispatch(closeModal()),
    }
}


const NoFriendsDMHomeBarModalContainer = withRouter(connect(mSTP, mDTP)(NoFriendsDMHomeBarModal));
export default NoFriendsDMHomeBarModalContainer;