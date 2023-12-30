import { connect } from "react-redux";
import { withRouter } from "react-router";
import { openModal, closeModal, openModalWithProps } from "../../../actions/modal_actions";
import { reSyncCurrentUser, removeSessionErrors } from "../../../actions/session_actions";
import { selectFriendsViaStatusType } from "../../../utils/selectors_api_util";
import { removeFriendshipErrors, requestAllFriendships } from "../../../actions/friendship_actions";
import StrifeShop from "./strife_shop";

const mSTP = (state, ownProps) => {

    return {
        currentUserId: state.session.id,
        friends: selectFriendsViaStatusType(state, 3),
        friendErrors: state.errors.friendship,
        errors: state.errors.session,
        currentUser: state.currentUser,
        users: Object.values(state.entities.users),
        ui_modal: state.ui.modal,
        modalProps: state.ui.modalProps,
    }
}


const mDTP = (dispatch, ownProps) => {
    return {
        reSyncCurrentUser: (userId) => dispatch(reSyncCurrentUser(userId)),
        removeFriendshipErrors: () => dispatch(removeFriendshipErrors()),
        requestAllFriendships: () => dispatch(requestAllFriendships()),
        removeSessionErrors: () => dispatch(removeSessionErrors()),
        // modal api functions
        openModal: modal => dispatch(openModal(modal)),
        closeModal: () => dispatch(closeModal()),
        openModalWithProps: (modal_with_props) => dispatch(openModalWithProps(modal_with_props))
    }
}


const StrifeShopContainer = withRouter(connect(mSTP, mDTP)(StrifeShop));
export default StrifeShopContainer;