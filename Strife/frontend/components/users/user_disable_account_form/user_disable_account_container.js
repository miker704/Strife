import { connect } from "react-redux";
import { withRouter } from "react-router";
import DisableUserAccountForm from "./user_disable_account_form.jsx";
import { removeSessionErrors, disableUserAccout, logoutUser } from "../../../actions/session_actions";
import { closeModal } from "../../../actions/modal_actions.js";

const mSTP = (state) => {
    return {
        currentUser: state.entities.users[state.session.id],
        errors: state.errors.session,

    }
};



const mDTP = (dispatch) => {
    return {
        disableUserAccout: (user) => dispatch(disableUserAccout(user)),
        logoutUser: () => dispatch(logoutUser()),
        removeSessionErrors: () => dispatch(removeSessionErrors()),
        closeModal:() => dispatch(closeModal())
    }
};

const DisableUserAccountContainer = withRouter(connect(mSTP, mDTP)(DisableUserAccountForm))
export default DisableUserAccountContainer;