import { connect } from "react-redux";
import { withRouter } from "react-router";
import { updateUserInfo, removeSessionErrors } from "../../../actions/session_actions";
import RemoveUserPhoneNumberForm from "./user_remove_phone_number";

const mSTP = (state) => {
    return {

        currentUser: state.entities.users[state.session.id],
        errors: state.errors.session
    }
};


const mDTP = (dispatch) => {
    return {
        updateUserInfo : (user) => {dispatch(updateUserInfo(user))},
        removeSessionErrors: () => dispatch(removeSessionErrors()),
    }
};
const RemoveUserPhoneNumberContainer = withRouter(connect(mSTP, mDTP)(RemoveUserPhoneNumberForm))
export default RemoveUserPhoneNumberContainer;