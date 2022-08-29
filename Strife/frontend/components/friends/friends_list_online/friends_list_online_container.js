import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import FriendShipIndexOnline from './friends_list_online';
import { selectFriendStatusOnline } from '../../../utils/selectors_api_util';
import { requestFriendships, removeFriendshipErrors } from '../../../actions/friendship_actions';

const mSTP = (state) => {
    return {
        currentUser: state.entities.users[state.session.id],
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
    }
};

const FriendShipIndexOnlineContainer = withRouter(connect(mSTP, mDTP)(FriendShipIndexOnline));
export default FriendShipIndexOnlineContainer;


