import { connect } from "react-redux";
import { withRouter } from "react-router";
import UserNavBar from "./user_nav_bar.jsx";
import { openModal, closeModal } from "../../../actions/modal_actions.js";

const mSTP = (state) => {
  return{
    currentUser: state.currentUser
  }
}

const mDTP = (dispatch) => {

  return {
    openModal: (modal) => dispatch(openModal(modal)),
    closeModal: () => dispatch(closeModal())
  }

}

const  UserNavContainer =  connect(mSTP, mDTP)(withRouter(UserNavBar));
export default UserNavContainer;