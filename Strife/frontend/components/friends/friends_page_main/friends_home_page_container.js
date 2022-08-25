import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { requestFriendships } from '../../../actions/friendship_actions';
import FriendsHomePageContainer from './friends_home_page';



const mDTP  = (dispatch) => {
    return {
        requestFriendships: () => dispatch(requestFriendships())
    };
};

const HomePageContainer = withRouter(connect(null,mDTP)(FriendsHomePageContainer));
export default HomePageContainer;
