import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import FriendShipIndex from './friends_list';
import { requestFriendships, removeFriendshipErrors } from '../../../actions/friendship_actions';
import { selectFriendStatus } from '../../../utils/selectors_api_util';
import { openModal } from '../../../actions/modal_actions';
import { createDmServer, removeDmServerErrors } from '../../../actions/dm_server_actions';

const mSTP = (state) => {
    return {
        currentUser: state.entities.users[state.session.id],
        friends: selectFriendStatus(state, 3),
        dmServers: Object.values(state.entities.dmServers),
        errors: state.errors.friendship
    }
};


const mDTP = (dispatch) => {
    return {
        requestFriendships: () => dispatch(requestFriendships()),
        removeFriendshipErrors:()=> dispatch(removeFriendshipErrors())
    }
};

const FriendShipIndexContainer = withRouter(connect(mSTP, mDTP)(FriendShipIndex));
export default FriendShipIndexContainer;
