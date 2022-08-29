import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import FriendShipIndex1 from './friends_list1';
import { requestFriendships, removeFriendshipErrors } from '../../../actions/friendship_actions';
import { selectFriendStatus } from '../../../utils/selectors_api_util';
import { openModal } from '../../../actions/modal_actions';

const mSTP = (state) => {
    return {
        currentUser: state.entities.users[state.session.id],
        friends: selectFriendStatus(state, 3),
        dmServers: Object.values(state.entities.dmServers),
        errors: state.errors.friendship,
        dmServerErrors: state.errors.dmServer
    }
};


const mDTP = (dispatch) => {
    return {
        requestFriendships: () => dispatch(requestFriendships()),
        removeFriendshipErrors:()=> dispatch(removeFriendshipErrors()),
        removeDmServerErrors: () => dispatch(removeDmServerErrors()),
        createDmServer: (dmserver) => dispatch(createDmServer(dmserver)),
        openModal: (modal) => dispatch(openModal(modal))
    }
};

const FriendShipIndexContainer1 = withRouter(connect(mSTP, mDTP)(FriendShipIndex1));
export default FriendShipIndexContainer1;
