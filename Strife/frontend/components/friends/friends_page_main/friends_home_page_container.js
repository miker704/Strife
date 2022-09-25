import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { requestFriendships, removeFriendshipErrors, requestAllFriendships } from '../../../actions/friendship_actions';
import { removeDmServerErrors } from '../../../actions/dm_server_actions';
import FriendsHomePageContainer from './friends_home_page';
import { reSyncCurrentUser } from '../../../actions/session_actions';

const mSTP = (state) => {
    return {
        currentUser: state.entities.users[state.session.id],
        errors: state.errors.friendship,
        dmServerErrors: state.errors.dmServer
    }
}

const mDTP  = (dispatch) => {
    return {
        requestFriendships: () => dispatch(requestFriendships()),
        removeFriendshipErrors: () => dispatch(removeFriendshipErrors()),
        removeDmServerErrors: () => dispatch(removeDmServerErrors()),
        requestAllFriendships: () => dispatch(requestAllFriendships()),
        reSyncCurrentUser: (currentUser) => dispatch(reSyncCurrentUser(currentUser)),
    };
};

const HomePageContainer = withRouter(connect(mSTP,mDTP)(FriendsHomePageContainer));
export default HomePageContainer;
