import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import FriendShipIndexOnline from './friends_list_online';
import { selectFriendStatusOnline, selectOnlineFriends } from '../../../utils/selectors_api_util';
import { requestFriendships, removeFriendshipErrors, requestAllOnlineFriends } from '../../../actions/friendship_actions';
import { createDmServer, removeDmServerErrors } from '../../../actions/dm_server_actions';
import { openModal } from '../../../actions/modal_actions';


const mSTP = (state) => {
    return {
        currentUser: state.entities.users[state.session.id],
        // friends: selectFriendStatusOnline(state, 3),
        friends: selectOnlineFriends(state, 3),
        onlineFriends: selectOnlineFriends(state, 3),
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
        requestAllOnlineFriends: () => dispatch(requestAllOnlineFriends())
    }
};

const FriendShipIndexOnlineContainer = withRouter(connect(mSTP, mDTP)(FriendShipIndexOnline));
export default FriendShipIndexOnlineContainer;


