import { connect } from "react-redux";
import UserProfile from "./user_profile";
import {removeUserAccount, logoutUser, updateUserInfo, removeSessionErrors} from '../../../actions/session_actions'
import { openModal, closeModal } from "../../../actions/modal_actions";
import { withRouter } from "react-router";

const mSTP = (state) => {
  return{
    user: state.session.currentUser,
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
    removeSessionErrors: () => dispatch(removeSessionErrors())

  }
}

const UserProfileContainer = withRouter(connect(mSTP,mDTP)(UserProfile))
export default UserProfileContainer;
