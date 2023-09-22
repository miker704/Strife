import { connect } from "react-redux";
import { withRouter } from "react-router";
import { closeModal } from "../../../actions/modal_actions.js";
import { deleteFriendship, removeFriendshipErrors } from "../../../actions/friendship_actions.js";
import DeleteFriendConfirmationModal from "./delete_friend_confirmation_modal.jsx";

const mSTP = (state, ownProps) => {
    return {
        currentUser: state.currentUser,
        errors: state.errors.friendship,

    }
}


const mDTP = (dispatch, ownProps) => {

    return {

        removeFriendshipErrors: () => dispatch(removeFriendshipErrors()),
        deleteFriendship: (ids) => dispatch(deleteFriendship(ids)),
        // modal api functions
        closeModal: () => dispatch(closeModal()),

    }
}


const DeleteFriendConfirmationModalContainer = withRouter(connect(mSTP, mDTP)(DeleteFriendConfirmationModal));
export default DeleteFriendConfirmationModalContainer;
