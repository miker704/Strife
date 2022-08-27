import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { requestFriendships, removeFriendshipErrors } from '../../../actions/friendship_actions';
import FriendsHomePageContainer from './friends_home_page';

const mSTP = (state) => {
    return {
        errors: state.errors.friendship,
        dmServerErrors: state.error.dmServer
    }
}

const mDTP  = (dispatch) => {
    return {
        requestFriendships: () => dispatch(requestFriendships()),
        removeFriendshipErrors: () => dispatch(removeFriendshipErrors())
    };
};

const HomePageContainer = withRouter(connect(null,mDTP)(FriendsHomePageContainer));
export default HomePageContainer;
