import { connect } from "react-redux";
import UserNavBar from "./user_nav_bar.jsx";

const mSTP = (state) => {
  return{
    currentUser: state.entities.users[state.session.id]
  }
}

const  UserNavContainer =  connect(mSTP, null)(UserNavBar)
export default UserNavContainer;