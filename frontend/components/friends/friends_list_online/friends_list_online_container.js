import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import FriendShipIndexOnline from './friends_list_online';
import { selectFriendStatusOnline} from '../../../utils/selectors_api_util';
import { requestFriendships, removeFriendshipErrors, requestAllFriendships } from '../../../actions/friendship_actions';
import { createDmServer, removeDmServerErrors } from '../../../actions/dm_server_actions';
import { openModal } from '../../../actions/modal_actions';
import { reSyncCurrentUser } from '../../../actions/session_actions';

const mSTP = (state) => {
    return {
        // currentUser: state.entities.users[state.session.id],
        currentUser: state.currentUser,
        currentUserId: state.session.id,
        friends: selectFriendStatusOnline(state, 3),
        errors: state.errors.friendship,
        dmServerErrors: state.errors.dmServer,
        dmServers: Object.values(state.entities.dmServers),
    }
};


const mDTP = (dispatch) => {
    return {
        requestFriendships: () => dispatch(requestFriendships()),
        removeFriendshipErrors: () => dispatch(removeFriendshipErrors()),
        removeDmServerErrors: () => dispatch(removeDmServerErrors()),
        createDmServer: (dmserver) => dispatch(createDmServer(dmserver)),
        openModal: (modal) => dispatch(openModal(modal)),
        requestAllFriendships: () => dispatch(requestAllFriendships()),
        reSyncCurrentUser: (currentUserId) => dispatch(reSyncCurrentUser(currentUserId))
    }
};

const FriendShipIndexOnlineContainer = withRouter(connect(mSTP, mDTP)(FriendShipIndexOnline));
export default FriendShipIndexOnlineContainer;


