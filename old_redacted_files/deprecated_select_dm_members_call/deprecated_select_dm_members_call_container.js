// import { connect } from 'react-redux';
// import { withRouter } from 'react-router';
// import { createDmServer, removeDmServerErrors } from '../../../actions/dm_server_actions';
// import { createDmMember } from '../../../actions/dm_member_actions';
// import { selectFriendsViaStatusType } from '../../../utils/selectors_api_util';
// import { requestFriendships, removeFriendshipErrors, requestAllFriendships } from '../../../actions/friendship_actions';
// // import InviteToDMCallModal from './select_dm_members_call.jsx';
// import InviteToDMCallModal from './s2.jsx';
// import { openModal, openModalWithProps, closeModal } from '../../../actions/modal_actions';

// const mSTP = (state, ownProps) => {
//     let dmMembers = [];
//     if (state.entities.dmServers[ownProps.match.params.dmServerId]) {
//         dmMembers = state.entities.dmServers[ownProps.match.params.dmServerId].members;
//     }
//     return {
//         currentUser: state.currentUser,
//         currentUserId: state.session.id,
//         dmServers: Object.values(state.entities.dmServers),
//         dmServer: state.entities.dmServers[ownProps.match.params.dmServerId],
//         friends: selectFriendsViaStatusType(state, 3),
//         dmServerErrors: state.errors.dmServer,
//         dmMembers: Object.values(dmMembers),
//         errors: state.errors.friendship,

//     }
// }

// const mDTP = (dispatch) => {
//     return {
//         requestAllFriendships: () => dispatch(requestAllFriendships()),
//         requestFriendships: () => dispatch(requestFriendships()),
//         createDmServer: (dmserver) => dispatch(createDmServer(dmserver)),
//         createDmMember: (dm_member) => dispatch(createDmMember(dm_member)),
//         removeDmServerErrors: () => dispatch(removeDmServerErrors()),
//         removeFriendshipErrors: () => dispatch(removeFriendshipErrors()),
//         openModal: (modal) => dispatch(openModal(modal)),
//         openModalWithProps: (modal_with_props) => dispatch(openModalWithProps(modal_with_props)),
//         closeModal: () => dispatch(closeModal()),

//     }
// }


// const InviteToDMCallModalContainer = withRouter(connect(mSTP, mDTP)(InviteToDMCallModal));
// export default InviteToDMCallModalContainer;