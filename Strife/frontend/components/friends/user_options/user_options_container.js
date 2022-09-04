import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { selectFriendStatusOnline} from '../../../utils/selectors_api_util';
import { requestFriendships, removeFriendshipErrors, deleteFriendship, updateFriendship , blockUser, createFriendship} from '../../../actions/friendship_actions';
import { createDmServer, receiveDmServerErrors } from '../../../actions/dm_server_actions';
import { createDmMember, deleteDmMember } from '../../../actions/dm_member_actions';
import UserOptionsModal from './user_options_modal';

const mSTP = (state) => {
    return {
        currentUser: state.entities.users[state.session.id],
        friends: selectFriendStatusOnline(state, 3),
        errors: state.errors.friendship,
        dmServerErrors: state.errors.dmServer,

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

const UserOptionsModalContainer = withRouter(connect(mSTP, mDTP)(UserOptionsModal));
export default UserOptionsModalContainer;


