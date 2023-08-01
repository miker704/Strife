// import { connect } from "react-redux";
// import { withRouter } from "react-router";
// import { fetchChannel, removeChannelErrors } from "../../../actions/channel_actions.js";
// import { fetchServer, fetchServers, removeServerErrors } from "../../../actions/server_actions.js";
// import { createServerMembership, createServerMembershipViaInjectionOfDmMembers } from "../../../actions/server_membership_actions.js";
// import { closeModal } from "../../../actions/modal_actions.js";
// import { handleKeyUp } from "../../../utils/modal_api_util";
// import { requestFriendships, removeFriendshipErrors, requestAllFriendships } from "../../../actions/friendship_actions.js";
// import { fetchDmServers, removeDmServerErrors } from "../../../actions/dm_server_actions.js";
// import { selectAllFriends } from "../../../utils/selectors_api_util.js";
// // import InviteToServerModal from "./invite_to_server_modal.jsx";
// // import InviteToServerModal from "./i2sm.jsx";
// // import InviteToServerModal from "./i3sm.jsx";
// // import InviteToServerModal from "./i2sm4.jsx";
// // import InviteToServerModal from "./i2sm5.jsx";
// // import InviteToServerModal from "./i2sm6.jsx";
// import InviteToServerModal from "./i2sm8.jsx";



// const extractServerProps = (state, ownProps) => {
//     let locationString = ownProps.location.pathname;
//     let newLoc = locationString.split('/$/channels/').join('').split('/');
//     return newLoc;
// }

// const getChannelName = (state, ownProps) => {
//     let channelName = "";
//     let locationString = ownProps.location.pathname;
//     let newLoc = locationString.split('/$/channels/').join('').split('/');

//     if (state.entities.servers[parseInt(newLoc[0])]) {
//         channelName = state.entities.channels[state.entities.servers[parseInt(newLoc[0])].general_channel_id].channel_name;
//     }
//     return channelName;
// }

// const getCurrentChannel = (state, ownProps) => {
//     let serverChannels = Object.values(state.entities.channels);
//     // const findThis = ownProps.mod_Channel_ID['ChannelId'];
//     const findThis = ownProps.mod_Channel_ID;
//     let currentChannelTarget = serverChannels.find((channel) => channel.id === findThis);
//     return currentChannelTarget;

// }

// const mSTP = (state, ownProps) => {
//     console.log("channel id is : ");
//     console.log(ownProps.mod_Channel_ID)
//     console.log("params: ");
//     console.log(ownProps.params)
//     // const getIds = extractServerProps(state, ownProps);
//     // let getGeneralChannelName = getChannelName(state, ownProps);
//     // const currentChannelTarget = getCurrentChannel(state, ownProps);
//     return {

//         currentUser: state.currentUser,
//         // server: state.entities.servers[parseInt(getIds[0])],
//         // channel: state.entities.channels[parseInt(getIds[1])],

//         // server: state.entities.servers[ownProps.params.serverId],
//         // channel: state.entities.channels[ownProps.mod_Channel_ID],

//         // // currentChannel: currentChannelTarget,

//         // currentChannel: state.entities.channels[parseInt(ownProps.mod_Channel_ID)],



//         // serverM: state.entities.servers[state.ui.modalProps.params.serverId],
//         // channelM: state.entities.channels[state.ui.modalProps.ChannelId],
//         // currentChannelM: state.entities.channels[parseInt(state.ui.modalProps.ChannelId)],
//         // currentChannelIdM: state.ui.modalProps.ChannelId,
//         // serverIdM: state.ui.modalProps.params.serverId,

//         server: state.entities.servers[ownProps.serverParams.serverId],
//         channel: state.entities.channels[state.ui.modalProps.ChannelId],
//         currentChannel: state.entities.channels[parseInt(state.ui.modalProps.ChannelId)],
//         currentChannelId: state.ui.modalProps.ChannelId,
//         serverId: ownProps.serverParams.serverId,
//         mod_Channel_ID: state.ui.modalProps.ChannelId || -1,
//         i2smType : state.ui.modalProps.ChannelId === -1 ? "CDDM" : "NORMAL",  


//         // generalChannelName: getGeneralChannelName,
//         channels: Object.values(state.entities.channels),
//         // currentChannelId: getIds[1],

//         // currentChannelId: ownProps.mod_Channel_ID,

//         // serverId: getIds[0],
//         // serverId: ownProps.params.serverId,

//         errors: state.errors.server,
//         channelErrors: state.errors.channel,
//         friendShipErrors: state.errors.friendship,
//         servers: state.entities.servers,
//         friends: selectAllFriends(state, 3),
//         dmServers: state.entities.dmServers,




//     }
// }


// const mDTP = (dispatch, ownProps) => {

//     return {

//         //server api functions
//         fetchServer: (serverId) => dispatch(fetchServer(serverId)),
//         fetchUserServers: (user) => dispatch(fetchServers(user)),
//         fetchServers: () => dispatch(fetchServers()),
//         removeServerErrors: () => dispatch(removeServerErrors()),

//         //dmserver fetches
//         fetchDmServers: (userId) => dispatch(fetchDmServers(userId)),
//         removeDmServerErrors: () => dispatch(removeDmServerErrors()),

//         //friend ship stuff
//         removeFriendshipErrors: () => dispatch(removeFriendshipErrors()),
//         requestAllFriendships: () => dispatch(requestAllFriendships()),
//         requestFriendships: () => dispatch(requestFriendships()),




//         //channel api functions

//         fetchChannel: (channelId) => { dispatch(fetchChannel(channelId)) },
//         removeChannelErrors: () => dispatch(removeChannelErrors()),

//         //server membership api functions

//         createServerMembership: (servermembership) => dispatch(createServerMembership(servermembership)),
//         createServerMembershipViaInjectionOfDmMembers: (servermembership) => dispatch(createServerMembershipViaInjectionOfDmMembers(servermembership)),
//         // modal api functions
//         closeModal: () => dispatch(closeModal()),
//         handleESC: (e) => handleKeyUp(e),

//     }
// }


// const InviteToServerModalContainer = withRouter(connect(mSTP, mDTP)(InviteToServerModal));
// export default InviteToServerModalContainer;
