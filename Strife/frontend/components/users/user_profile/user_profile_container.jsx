import { connect } from "react-redux";
import UserProfile from "./user_profile";
import {removeUserAccount, logoutUser, updateUserInfo } from '../../../actions/session_actions'
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
    logoutUser : () => {dispatch(logoutUser())}

  }
}

const UserProfileContainer = withRouter(connect(mSTP,mDTP)(UserProfile))
export default UserProfileContainer;
