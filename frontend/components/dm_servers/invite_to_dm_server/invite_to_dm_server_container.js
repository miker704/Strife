import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { selectAllFriends, selectFriendsViaStatusType } from '../../../utils/selectors_api_util';
import { requestFriendships, removeFriendshipErrors , requestAllFriendships} from '../../../actions/friendship_actions'; 
import { createDmServer, removeDmServerErrors } from '../../../actions/dm_server_actions';
import { createDmMember } from '../../../actions/dm_member_actions';
import InviteToDmModal from './invite_to_dm_server_modal';
// import InviteToDmModal from './i2dm';
import { closeModal, openModal, openModalWithProps } from '../../../actions/modal_actions';


const mSTP = (state) => {
    return {
        currentUser: state.currentUser,
        dmServers: Object.values(state.entities.dmServers),
        friends: selectFriendsViaStatusType(state, 3),
        errors: state.errors.friendship,
        dmServerErrors: state.errors.dmServer
    }
}

const mDTP = (dispatch) => {
    return {
        requestAllFriendships: () => dispatch(requestAllFriendships()),
        requestFriendships: () => dispatch(requestFriendships()),
        createDmServer: (dmserver) => dispatch(createDmServer(dmserver)),
        createDmMember: (dm_member) => dispatch(createDmMember(dm_member)),
        removeDmServerErrors: () => dispatch(removeDmServerErrors()),
        removeFriendshipErrors: () => dispatch(removeFriendshipErrors()),
        closeModal: () => dispatch(closeModal()),
        openModal: (modal) => dispatch(openModal(modal)),
        openModalWithProps: (modal_Props) => dispatch(openModalWithProps(modal_Props)),
    }
}


const InviteToDmModalContainer = withRouter(connect(mSTP, mDTP)(InviteToDmModal));
export default InviteToDmModalContainer;