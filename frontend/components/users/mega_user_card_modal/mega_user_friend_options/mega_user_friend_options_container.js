import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { requestFriendships, removeFriendshipErrors, deleteFriendship, updateFriendship, blockUser, unBlockUser } from '../../../../actions/friendship_actions';
import { reSyncCurrentUser, removeSessionErrors } from '../../../../actions/session_actions';
import { createDmServer, removeDmServerErrors } from '../../../../actions/dm_server_actions';
import MegaUPCUserFriendshipOptionsModal from './mega_user_friend_options';


const mSTP = (state) => {
    return {
        currentUser: state.currentUser,
        dmServers: Object.values(state.entities.dmServers),
        errors: state.errors.friendship,
        dmServerErrors: state.errors.dmServer,
        sessionErrors: state.errors.session,
    }
};


const mDTP = (dispatch) => {
    return {
        requestFriendships: () => dispatch(requestFriendships()),
        removeFriendshipErrors: () => dispatch(removeFriendshipErrors()),
        removeSessionErrors: () => dispatch(removeSessionErrors()),
        deleteFriendship: (ids) => dispatch(deleteFriendship(ids)),
        blockUser: (ids) => dispatch(blockUser(ids)),
        unBlockUser: (ids) => dispatch(unBlockUser(ids)),
        updateFriendship: (ids) => dispatch(updateFriendship(ids)),
        createDmServer: (dmserver) => dispatch(createDmServer(dmserver)),
        reSyncCurrentUser: (currentUserId) => dispatch(reSyncCurrentUser(currentUserId)),
        removeDmServerErrors: () => dispatch(removeDmServerErrors()),

    }
};

const MegaUPCUserFriendshipOptionsModalContainer = withRouter(connect(mSTP, mDTP)(MegaUPCUserFriendshipOptionsModal));
export default MegaUPCUserFriendshipOptionsModalContainer;


