import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import FriendShipIndexOnline1 from './friends_list_online1';
import { selectFriendStatusOnline } from '../../../utils/selectors_api_util';
import { requestFriendships, removeFriendshipErrors } from '../../../actions/friendship_actions';
import { createDmServer, removeDmServerErrors } from '../../../actions/dm_server_actions';

const mSTP = (state) => {
    return {
        currentUser: state.entities.users[state.session.id],
        friends: selectFriendStatusOnline(state, 3),
        errors: state.errors.friendship,
        dmServerErrors : state.errors.dmServer,
        dmServers: Object.values(state.entities.dmServers)
    }
};


const mDTP = (dispatch) => {
    return {
        requestFriendships: () => dispatch(requestFriendships()),
        removeFriendshipErrors: () => dispatch(removeFriendshipErrors()),
        removeDmServerErrors: () => dispatch(removeDmServerErrors()),
        createDmServer: (dmserver) => dispatch(createDmServer(dmserver))

    }
};

const FriendShipIndexOnlineContainer1 = withRouter(connect(mSTP, mDTP)(FriendShipIndexOnline1));
export default FriendShipIndexOnlineContainer1;


