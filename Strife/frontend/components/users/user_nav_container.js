import { connect } from "react-redux";
import UserNav from "./user_nav";

const mSTP  = state => {
    return {
       
    }
}



const mDTP = dispatch =>{
    return {
       

    }
}

const UserNavContainer = connect(mSTP,mDTP)(UserNav);
export default UserNavContainer;