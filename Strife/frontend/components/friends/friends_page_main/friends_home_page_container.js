import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { requestFriendships, removeFriendshipErrors } from '../../../actions/friendship_actions';
import { removeDmServerErrors } from '../../../actions/dm_server_actions';
import FriendsHomePageContainer from './friends_home_page';

const mSTP = (state) => {
    return {
        errors: state.errors.friendship,
        dmServerErrors: state.errors.dmServer
    }
}

const mDTP  = (dispatch) => {
    return {
        requestFriendships: () => dispatch(requestFriendships()),
        removeFriendshipErrors: () => dispatch(removeFriendshipErrors()),
        removeDmServerErrors: () => dispatch(removeDmServerErrors())
    };
};

const HomePageContainer = withRouter(connect(mSTP,mDTP)(FriendsHomePageContainer));
export default HomePageContainer;
