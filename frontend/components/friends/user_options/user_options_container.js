// import { connect } from 'react-redux';
// import { withRouter } from 'react-router';
// import { selectFriendStatusOnline} from '../../../utils/selectors_api_util';
// import { requestFriendships, removeFriendshipErrors, deleteFriendship, updateFriendship , blockUser, createFriendship} from '../../../actions/friendship_actions';
// import { createDmServer, removeDmServerErrors, fetchDmServer } from '../../../actions/dm_server_actions';
// import { createDmMember, deleteDmMember} from '../../../actions/dm_member_actions';
// import { fetchUser } from '../../../actions/session_actions';
// import UserOptionsModal from './user_options_modal';

// /* This model and container is deprecated and now longer 
// used replaced by the superior ServerUserOptionsModalContainer] */


// const mSTP = (state,ownProps) => {
//     return {
//         currentUser: state.entities.users[state.session.id],
//         friends: selectFriendStatusOnline(state, 3),
//         errors: state.errors.friendship,
//         dmServerErrors: state.errors.dmServer,
//         dmServerId: ownProps.match.params.dmServerId,
//         dmServers: Object.values(state.entities.dmServers)
//     }
// };


// const mDTP = (dispatch,ownProps) => {
//     return {
//         fetchUser: (memberId) => dispatch(fetchUser(memberId)),
//         requestFriendships: () => dispatch(requestFriendships()),
//         removeFriendshipErrors: () => dispatch(removeFriendshipErrors()),
//         removeDmServerErrors: () => dispatch(removeDmServerErrors()),
//         deleteFriendship: (ids) => dispatch(deleteFriendship(ids)),
//         blockUser: (ids) => dispatch(blockUser(ids)),
//         updateFriendship: (ids) => dispatch(updateFriendship(ids)),
//         createFriendship: (ids) => dispatch(createFriendship(ids)),
//         kickUserfromGroupChat: (dm_memberId, dm_member) => dispatch(deleteDmMember(dm_memberId, dm_member)),
//         createDmServer: (dmserver) => dispatch(createDmServer(dmserver)),
//         fetchDmServer: () => dispatch(fetchDmServer(ownProps.match.params.dmServerId)),

//     }
// };

// const UserOptionsModalContainer = withRouter(connect(mSTP, mDTP)(UserOptionsModal));
// export default UserOptionsModalContainer;


