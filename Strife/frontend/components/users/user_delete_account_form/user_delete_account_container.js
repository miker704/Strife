import { connect } from "react-redux";
import { withRouter } from "react-router";
import DeleteUserAccountForm from "./user_delete_account_form.jsx";
import { removeSessionErrors, removeUserAccount } from "../../../actions/session_actions";

const mSTP = (state) => {
    return {
        currentUser: state.entities.users[state.session.id],
        errors: state.errors.session,
        serverErrors: state.errors.session
    }
};

const mDTP = (dispatch) => {
    return {

        removeUserAccount: (userId) => dispatch(removeUserAccount(userId)),
        removeSessionErrors: () => dispatch(removeSessionErrors())
    }
};

const DeleteUserAccountContainer = withRouter(connect(mSTP,mDTP)(DeleteUserAccountForm))
export default  DeleteUserAccountContainer;