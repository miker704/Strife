import { connect } from "react-redux";
import { withRouter } from "react-router";
import { closeModal } from "../../../actions/modal_actions.js";
import { removeFriendshipErrors, blockUser } from "../../../actions/friendship_actions.js";
import BlockUserConfirmationModal from "./block_user_confirmation_modal.jsx";

const mSTP = (state, ownProps) => {
    return {
        currentUser: state.currentUser,
        errors: state.errors.friendship,

    }
}


const mDTP = (dispatch, ownProps) => {

    return {

        removeFriendshipErrors: () => dispatch(removeFriendshipErrors()),
        blockUser: (ids) => dispatch(blockUser(ids)),
        // modal api functions
        closeModal: () => dispatch(closeModal()),

    }
}


const BlockUserConfirmationModalContainer = withRouter(connect(mSTP, mDTP)(BlockUserConfirmationModal));
export default BlockUserConfirmationModalContainer;
