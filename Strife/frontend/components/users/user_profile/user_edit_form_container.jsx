import { connect } from "react-redux";
import UserEditForm from "./user_edit_form";
import {updateUserInfo, removeSessionErrors } from "../../../actions/session_actions";

const mSTP = (state) => {
  return{
    errors: state.errors.session,
    user: state.session.currentUser
  }
}

const mDTP = (dispatch) => {
  return{
    action: (user) => dispatch(updateUserInfo(user)),
    removeSessionErrors: () => dispatch(removeSessionErrors())
    
  }
}


const EditUserFormContainer =  connect(mSTP, mDTP)(UserEditForm)
export default EditUserFormContainer;