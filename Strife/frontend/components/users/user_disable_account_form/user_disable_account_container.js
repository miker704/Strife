import { connect } from "react-redux";
import { withRouter } from "react-router";
import DisableUserAccountForm from "./user_disable_account_form.jsx";
import { removeSessionErrors, removeUserAccount } from "../../../actions/session_actions";

const mSTP = (state) => {
    return {
        currentUser: state.entities.users[state.session.id],
        errors: state.errors.session
    }
};



const mDTP = (dispatch) => {
    return {
        removeUserAccount: (userId) => dispatch(removeUserAccount(userId)),
        removeSessionErrors: () => dispatch(removeSessionErrors()),
    }
};

const DisableUserAccountContainer = withRouter(connect(mSTP, mDTP)(DisableUserAccountForm))
export default DisableUserAccountContainer;