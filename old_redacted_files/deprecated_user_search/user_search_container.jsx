// import {connect} from "react-redux";
// import {fetchUsers} from "../../frontend/utils/session_api_util";
// import {createDmMembership} from "../../frontend/actions/dm_member_actions"
// import {createDmServer} from "../../frontend/actions/dm_server_actions"
// import UserSearch from "./user_search";
// import {withRouter} from "react-router";


// const mapStateToProps = (state) => {
//   return{
//     // currentUser: state.entities.users[state.session.id],
//     currentUser: state.currentUser,

//     users: Object.values(state.entities.servers)
//   }
// }

// const mapDispatchToProps = (dispatch) => {
//   return{
//     fetchUsers : () => fetchUsers(),
//     createDmMembership: (membership) => dispatch(createDmMembership(membership)),
//     createDmServer: (membership) => dispatch(createDmServer(membership))
//   }
// }


// export default withRouter(connect(mapStateToProps, mapDispatchToProps)(UserSearch));