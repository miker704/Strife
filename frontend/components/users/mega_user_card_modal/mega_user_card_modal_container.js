import { connect } from "react-redux";
import { removeSessionErrors, reSyncCurrentUser, fetchUser, } from '../../../actions/session_actions.js'
import { requestFriendships, removeFriendshipErrors, deleteFriendship, updateFriendship, blockUser, createFriendship, unBlockUser } from '../../../actions/friendship_actions';
import { createDmServer, removeDmServerErrors, fetchDmServer } from '../../../actions/dm_server_actions';
import { openModal, closeModal } from "../../../actions/modal_actions.js";
import { withRouter } from "react-router";
import MegaUPCModal from "./mega_user_card_modal.jsx";

const mSTP = (state, ownProps) => {
    return {
        currentUser: state.currentUser,
        errors: state.errors.session,
        dmServers: Object.values(state.entities.dmServers),
        friendshipErrors: state.errors.friendship,
        dmServerErrors: state.errors.dmServer,
        users: Object.values(state.entities.users),
        o2oStartUp: ownProps.o2oStartUp || false,
    }
}

const mDTP = (dispatch) => {
    return {
        openModal: (modal) => dispatch(openModal(modal)),
        closeModal: () => dispatch(closeModal()),
        removeSessionErrors: () => dispatch(removeSessionErrors()),
        reSyncCurrentUser: (userId) => dispatch(reSyncCurrentUser(userId)),
        fetchUser: (memberId) => dispatch(fetchUser(memberId)),
        requestFriendships: () => dispatch(requestFriendships()),
        removeFriendshipErrors: () => dispatch(removeFriendshipErrors()),
        removeDmServerErrors: () => dispatch(removeDmServerErrors()),
        deleteFriendship: (ids) => dispatch(deleteFriendship(ids)),
        blockUser: (ids) => dispatch(blockUser(ids)),
        unBlockUser: (ids) => dispatch(unBlockUser(ids)),
        updateFriendship: (ids) => dispatch(updateFriendship(ids)),
        createFriendship: (ids) => dispatch(createFriendship(ids)),
        createDmServer: (dmserver) => dispatch(createDmServer(dmserver)),
        fetchDmServer: () => dispatch(fetchDmServer(ownProps.match.params.dmServerId)),
    }
}

const MegaUPCModalContainer = withRouter(connect(mSTP, mDTP)(MegaUPCModal))
export default MegaUPCModalContainer;
