import { connect } from "react-redux";
import { withRouter } from "react-router";
import { removeSessionErrors } from "../../../actions/session_actions";
import UserOwnsServers from "./user_owns_servers.jsx";


const mSTP = (state) => {
    return {

        currentUser: state.currentUser,
        errors: state.errors.session
    }
};


const mDTP = (dispatch) => {
    return {
        removeSessionErrors: () => dispatch(removeSessionErrors()),
    }
};
const UserOwnsServersWarningContainer = withRouter(connect(mSTP, mDTP)(UserOwnsServers))
export default UserOwnsServersWarningContainer;