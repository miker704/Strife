import { connect } from "react-redux";
import { withRouter } from "react-router";
import DeleteUserAccountForm from "./user_delete_account_form.jsx";
import { removeSessionErrors, removeUserAccount, disableUserAccount, logoutUser } from "../../../actions/session_actions";
import { closeModal } from "../../../actions/modal_actions.js";


const mSTP = (state) => {
    return {
        // currentUser: state.entities.users[state.session.id],
        currentUser: state.currentUser,
        errors: state.errors.session,
        serverErrors: state.errors.session
    }
};

const mDTP = (dispatch) => {
    return {
        disableUserAccount: (user) => dispatch(disableUserAccount(user)),
        removeUserAccount: (userId) => dispatch(removeUserAccount(userId)),
        removeSessionErrors: () => dispatch(removeSessionErrors()),
        closeModal: () => dispatch(closeModal()),
        logoutUser: () => dispatch(logoutUser()),
    }
};

const DeleteUserAccountContainer = withRouter(connect(mSTP, mDTP)(DeleteUserAccountForm))
export default DeleteUserAccountContainer;