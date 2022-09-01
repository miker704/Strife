import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import FriendShipIndex from './friends_list';
import { requestFriendships, removeFriendshipErrors } from '../../../actions/friendship_actions';
import { selectFriendStatus, selectAllFriends } from '../../../utils/selectors_api_util';
import { openModal } from '../../../actions/modal_actions';
import { createDmServer, removeDmServerErrors } from '../../../actions/dm_server_actions';

const mSTP = (state) => {
    return {
        currentUser: state.entities.users[state.session.id],
        friends: selectFriendStatus(state, 3),
        // friends: selectAllFriends(state, 3),
        dmServers: Object.values(state.entities.dmServers),
        errors: state.errors.friendship,
        dmServerErrors: state.errors.dmServer

    }
};


const mDTP = (dispatch) => {
    return {
        requestFriendships: () => dispatch(requestFriendships()),
        removeFriendshipErrors: () => dispatch(removeFriendshipErrors()),
        removeDmServerErrors: () => dispatch(removeDmServerErrors()),
        createDmServer: (dmserver) => dispatch(createDmServer(dmserver)),
        openModal: (modal) => dispatch(openModal(modal))
    }
};

const FriendShipIndexContainer = withRouter(connect(mSTP, mDTP)(FriendShipIndex));
export default FriendShipIndexContainer;
