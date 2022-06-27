import { connect } from "react-redux";
import UserNav from "./user_nav";

const mSTP  = state => {
    return {
       currentUser: state.entities.users[state.session.id]
    }
}


const UserNavContainer = connect(mSTP,null)(UserNav);
export default UserNavContainer;