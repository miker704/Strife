// import { connect } from "react-redux";
// import {searchUsers, removeSessionErrors} from '../../../actions/session_actions'
// import { closeModal } from "../../../actions/modal_actions";
// import { withRouter } from "react-router";
// import UserSearchModal from "./user_search_modal";

// const mSTP = (state,ownProps) => {
//   return{
//     // currentUser: state.entities.users[state.session.id],
//     currentUser: state.currentUser,
//     searchedUsers: state.entities.userSearch,
//     errors: state.errors.session,
//     //current server
//     server: state.entities.servers[ownProps.match.params.serverId],
    
//   }
// }

// const mDTP = (dispatch) => {
//   return{
//     searchUsers: (username) => dispatch(searchUsers(username)),
//     closeModal: () => dispatch(closeModal()),
//     removeSessionErrors: () => dispatch(removeSessionErrors()),

//   }
// }

// const UserSearchContainer = withRouter(connect(mSTP,mDTP)(UserSearchModal))
// export default UserSearchContainer;
