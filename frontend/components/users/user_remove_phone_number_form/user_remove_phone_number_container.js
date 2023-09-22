import { connect } from "react-redux";
import { withRouter } from "react-router";
import { updateUserInfo, removeSessionErrors, removePhoneNumber } from "../../../actions/session_actions";
import RemoveUserPhoneNumberForm from "./user_remove_phone_number";

const mSTP = (state) => {
    return {

        // currentUser: state.entities.users[state.session.id],
        currentUser: state.currentUser,
        errors: state.errors.session
    }
};


const mDTP = (dispatch) => {
    return {
        removePhoneNumber: (user) => dispatch(removePhoneNumber(user)),
        updateUserInfo : (user) => {dispatch(updateUserInfo(user))},
        removeSessionErrors: () => dispatch(removeSessionErrors()),
    }
};
const RemoveUserPhoneNumberContainer = withRouter(connect(mSTP, mDTP)(RemoveUserPhoneNumberForm))
export default RemoveUserPhoneNumberContainer;