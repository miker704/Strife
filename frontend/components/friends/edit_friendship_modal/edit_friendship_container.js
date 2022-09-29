import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import EditFriendshipModal from './edit_friendship';
import { selectFriendStatusOnline} from '../../../utils/selectors_api_util';
import { requestFriendships, removeFriendshipErrors, deleteFriendship, updateFriendship , blockUser} from '../../../actions/friendship_actions';


const mSTP = (state) => {
    return {
        currentUser: state.entities.users[state.session.id],
        friends: selectFriendStatusOnline(state, 3),
        errors: state.errors.friendship,
    }
};


const mDTP = (dispatch) => {
    return {
        requestFriendships: () => dispatch(requestFriendships()),
        removeFriendshipErrors: () => dispatch(removeFriendshipErrors()),
        deleteFriendship: (ids) => dispatch(deleteFriendship(ids)),
        blockUser: (ids) => dispatch(blockUser(ids)),
        updateFriendship: (ids) => dispatch(updateFriendship(ids))

    }
};

const EditFriendshipModalContainer = withRouter(connect(mSTP, mDTP)(EditFriendshipModal));
export default EditFriendshipModalContainer;


