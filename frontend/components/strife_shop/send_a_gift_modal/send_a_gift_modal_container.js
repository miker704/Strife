import { connect } from "react-redux";
import { withRouter } from "react-router";
import { openModal, closeModal, openModalWithProps } from "../../../actions/modal_actions";
import { reSyncCurrentUser, removeSessionErrors, fetchUser } from "../../../actions/session_actions";
import { selectFriendsViaStatusType } from "../../../utils/selectors_api_util";
import { removeFriendshipErrors, requestAllFriendships } from "../../../actions/friendship_actions";
import SendAGiftModal from "./send_a_gift_modal";

const mSTP = (state, ownProps) => {

    return {
        currentUserId: state.session.id,
        currentUser: state.currentUser,
        friends: selectFriendsViaStatusType(state, 3),
        users: Object.values(state.entities.users),
        errors: state.errors.session,
        friendErrors: state.errors.friendship,
        ui_modal: state.ui.modal,
        modalProps: state.ui.modalProps,
        gifted: ownProps.gifted || false,
        switchMod: ownProps.switchMod || -1,
        productPrice: ownProps.productPrice || 0.00,
        productName: ownProps.productName || "Please Select A Product",
        productKey: ownProps.productKey || "ghosts",
        productType: ownProps.productType || "Avatar_Decoration"
    }
}


const mDTP = (dispatch, ownProps) => {
    return {
        reSyncCurrentUser: (userId) => dispatch(reSyncCurrentUser(userId)),
        removeSessionErrors: () => dispatch(removeSessionErrors()),
        // modal api functions
        openModal: modal => dispatch(openModal(modal)),
        closeModal: () => dispatch(closeModal()),
        openModalWithProps: (modal_with_props) => dispatch(openModalWithProps(modal_with_props)),
        removeFriendshipErrors: () => dispatch(removeFriendshipErrors()),
        requestAllFriendships: () => dispatch(requestAllFriendships()),
        fetchUser: (memberId) => dispatch(fetchUser(memberId)),
    }
}


const SendAGiftModalContainer = withRouter(connect(mSTP, mDTP)(SendAGiftModal));
export default SendAGiftModalContainer;