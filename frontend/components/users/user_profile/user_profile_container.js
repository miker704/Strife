import { connect } from "react-redux";
import UserProfile from "./user_profile";
import { removeUserAccount, logoutUser, updateUserInfo, removeSessionErrors, disableUserAccount, reSyncCurrentUser } from '../../../actions/session_actions'
import { openModal, closeModal } from "../../../actions/modal_actions";
import { withRouter } from "react-router";
import { handleKeyUp } from "../../../utils/modal_api_util";

const mSTP = (state) => {
  return {
    currentUser: state.currentUser,
    errors: state.errors.session
  }
}

const mDTP = (dispatch) => {
  return {
    updateUserInfo: (user) => { dispatch(updateUserInfo(user)) },
    deleteUserAccount: (userId) => { dispatch(removeUserAccount(userId)) },
    logoutUser: () => { dispatch(logoutUser()) },
    openModal: (modal) => dispatch(openModal(modal)),
    closeModal: () => dispatch(closeModal()),
    removeSessionErrors: () => dispatch(removeSessionErrors()),
    handleESC: (e) => handleKeyUp(e),
    disableUserAccount: (user) => dispatch(disableUserAccount(user)),
    reSyncCurrentUser: (userId) => dispatch(reSyncCurrentUser(userId))
  }
}

const UserProfileContainer = withRouter(connect(mSTP, mDTP)(UserProfile))
export default UserProfileContainer;
