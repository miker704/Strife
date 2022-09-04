import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { selectFriendStatusOnline} from '../../../utils/selectors_api_util';
import { requestFriendships, removeFriendshipErrors, deleteFriendship, updateFriendship , blockUser, createFriendship} from '../../../actions/friendship_actions';
import { createDmServer, removeDmServerErrors } from '../../../actions/dm_server_actions';
import { createDmMember, deleteDmMember} from '../../../actions/dm_member_actions';
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
        removeDmServerErrors: () => dispatch(removeDmServerErrors()),
        deleteFriendship: (ids) => dispatch(deleteFriendship(ids)),
        blockUser: (ids) => dispatch(blockUser(ids)),
        updateFriendship: (ids) => dispatch(updateFriendship(ids)),
        createFriendship: (ids) => dispatch(createFriendship(ids)),
        kickUserfromGroupChat: (dm_memberId, dm_member) => dispatch(deleteDmMember(dm_memberId, dm_member)),
        createDmServer: (dmserver) => dispatch(createDmServer(dmserver))
    }
};

const UserOptionsModalContainer = withRouter(connect(mSTP, mDTP)(UserOptionsModal));
export default UserOptionsModalContainer;


