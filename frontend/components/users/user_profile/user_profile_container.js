import { connect } from "react-redux";
import UserProfile from "./user_profile";
import {removeUserAccount, logoutUser, updateUserInfo, removeSessionErrors, disableUserAccount} from '../../../actions/session_actions'
import { openModal, closeModal } from "../../../actions/modal_actions";
import { withRouter } from "react-router";
import { handleKeyUp } from "../../../utils/modal_api_util";

const mSTP = (state) => {
  return{
    currentUser: state.entities.users[state.session.id],
    errors: state.errors.session
  }
}

const mDTP = (dispatch) => {
  return{
    updateUserInfo : (user) => {dispatch(updateUserInfo(user))},
    deleteUserAccount : (userId) => {dispatch(removeUserAccount(userId))},
    logoutUser : () => {dispatch(logoutUser())},
    openModal: (modal) => dispatch(openModal(modal)),
    closeModal: () => dispatch(closeModal()),
    removeSessionErrors: () => dispatch(removeSessionErrors()),
    handleESC : (e) => handleKeyUp(e),
    disableUserAccount: (user)=> dispatch(disableUserAccount(user))

  }
}

const UserProfileContainer = withRouter(connect(mSTP,mDTP)(UserProfile))
export default UserProfileContainer;
