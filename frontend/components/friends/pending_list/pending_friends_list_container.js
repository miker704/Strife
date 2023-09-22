import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { selectFriendStatus} from '../../../utils/selectors_api_util';
import { requestFriendships, updateFriendship, deleteFriendship, removeFriendshipErrors, requestAllFriendships } from '../../../actions/friendship_actions';
import PendingFriendList from './pending_friends_list';


const mSTP = (state) => {
    return {
        // currentUser: state.entities.users[state.session.id],
        currentUser: state.currentUser,
        outgoing: selectFriendStatus(state, 1),
        incoming: selectFriendStatus(state, 2),
        errors: state.errors.friendship
    }
};


const mDTP = (dispatch) => {
    return {
        requestFriendships: () => dispatch(requestFriendships()),
        updateFriendship: (ids) => dispatch(updateFriendship(ids)),
        deleteFriendship: (ids) => dispatch(deleteFriendship(ids)),
        removeFriendshipErrors: () => dispatch(removeFriendshipErrors()),
        requestAllFriendships: () => dispatch(requestAllFriendships())
    }
};

const PendingFriendListContainer = withRouter(connect(mSTP, mDTP)(PendingFriendList));
export default PendingFriendListContainer;


