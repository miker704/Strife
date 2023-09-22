import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { requestFriendships, removeFriendshipErrors, requestAllFriendships } from '../../../actions/friendship_actions';
import { removeDmServerErrors } from '../../../actions/dm_server_actions';
import FriendsHomePageContainer from './friends_home_page';
import { reSyncCurrentUser } from '../../../actions/session_actions';
import { fetchDmServers } from '../../../actions/dm_server_actions';
import { fetchServers } from '../../../actions/server_actions';
import { selectFriendStatusOnline } from '../../../utils/selectors_api_util';
import { openModal, openModalWithProps } from '../../../actions/modal_actions';

const mSTP = (state) => {
    return {
        // currentUser: state.entities.users[state.session.id],
        currentUser: state.currentUser,
        currentUserId: state.session.id,
        errors: state.errors.friendship,
        onlineFriends: selectFriendStatusOnline(state, 3),
        dmServerErrors: state.errors.dmServer
    }
}

const mDTP = (dispatch) => {
    return {
        requestFriendships: () => dispatch(requestFriendships()),
        removeFriendshipErrors: () => dispatch(removeFriendshipErrors()),
        removeDmServerErrors: () => dispatch(removeDmServerErrors()),
        requestAllFriendships: () => dispatch(requestAllFriendships()),
        reSyncCurrentUser: (currentUser) => dispatch(reSyncCurrentUser(currentUser)),
        fetchUserDmServers: (currentUserId) => dispatch(fetchDmServers(currentUserId)),
        fetchUserServers: (currentUserId) => dispatch(fetchServers(currentUserId)),
        openModal: (modal) => dispatch(openModal(modal)),
        openModalWithProps: (modal_Props) => dispatch(openModalWithProps(modal_Props)),
    };
};

const HomePageContainer = withRouter(connect(mSTP, mDTP)(FriendsHomePageContainer));
export default HomePageContainer;
