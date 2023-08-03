// import ServerSettingsModal from "./server_settings_modal";
// import { connect } from "react-redux";
// import { withRouter } from "react-router";
// import { fetchChannel, createChannel, updateChannel, deleteChannel, removeChannelErrors } from "../../../actions/channel_actions.js";
// import { fetchServer, fetchServers, removeServerErrors, deleteServer, updateServer } from "../../../actions/server_actions.js";
// import { createChannelMembership, deleteChannelMembership } from "../../../actions/channel_membership_actions.js";
// import { createServerMembership, deleteServerMembership } from "../../../actions/server_membership_actions.js";
// import { openModal, closeModal } from "../../../actions/modal_actions.js";
// import { handleKeyUp } from "../../../utils/modal_api_util";
// import { logoutUser, removeSessionErrors } from "../../../actions/session_actions";

// const extractServerProps = (state, ownProps) => {
//     let locationString = ownProps.location.pathname;
//     let newLoc = locationString.split('/$/channels/').join('').split('/');
//     return newLoc;
// }



// const mSTP = (state, ownProps) => {

//     const getIds = extractServerProps(state, ownProps);

//     return {


//         // currentUser: state.entities.users[state.session.id],
//         // currentUser: state.currentUser,
//         // server: state.entities.servers[parseInt(getIds[0])],
//         // channel: state.entities.channels[parseInt(getIds[1])],
//         // channels: Object.values(state.entities.channels),
//         // currentChannelId: getIds[1],
//         // serverId: getIds[0],
//         // errors: state.errors.server,
//         // channelErrors: state.errors.channel,
//         // sessionErrors: state.errors.session,
//         // servers: state.entities.servers

//         currentUser: state.currentUser,
//         server: state.entities.servers[ownProps.serverParams.serverId],
//         // channel: state.entities.channels[ownProps.serverParams.channelId],
//         channels: Object.values(state.entities.channels) || [],
//         // currentChannelId: getIds[1],
//         serverId: parseInt(ownProps.serverParams.serverId),
//         errors: state.errors.server,
//         channelErrors: state.errors.channel,
//         sessionErrors: state.errors.session,
//         servers: state.entities.servers
//     }
// }


// const mDTP = (dispatch, ownProps) => {



//     return {

//         //logout user
//         logoutUser: () => { dispatch(logoutUser()) },
//         removeSessionErrors: () => dispatch(removeSessionErrors()),
//         //server api functions
//         fetchServer: (serverId) => dispatch(fetchServer(serverId)),
//         fetchUserServers: (user) => dispatch(fetchServers(user)),
//         fetchServers: () => dispatch(fetchServers()),
//         updateServer: (serverId, formData) => dispatch(updateServer(serverId, formData)),
//         deleteServer: (serverId) => dispatch(deleteServer(serverId)),
//         removeServerErrors: () => dispatch(removeServerErrors()),


//         //channel api functions

//         fetchChannel: (channelId) => { dispatch(fetchChannel(channelId)) },
//         createChannel: (channel) => dispatch(createChannel(channel)),
//         updateChannel: (channel) => dispatch(updateChannel(channel)),
//         deleteChannel: (channelId) => dispatch(deleteChannel(channelId)),
//         removeChannelErrors: () => dispatch(removeChannelErrors()),

//         //server membership api functions

//         createServerMembership: (servermembership) => dispatch(createServerMembership(servermembership)),
//         deleteServerMembership: (servermembershipId, servermembership) =>
//             dispatch(deleteServerMembership(servermembershipId, servermembership)),

//         //channel membership api functions 
//         createChannelMembership: (channelmembership) => dispatch(createChannelMembership(channelmembership)),
//         deleteChannelMembership: (channelmembershipId, channelmembership) =>
//             dispatch(deleteChannelMembership(channelmembershipId, channelmembership)),

//         // modal api functions
//         openModal: modal => dispatch(openModal(modal)),
//         closeModal: () => dispatch(closeModal()),
//         handleESC: (e) => handleKeyUp(e),

//     }
// }


// const ServerSettingsModalContainer = withRouter(connect(mSTP, mDTP)(ServerSettingsModal));
// export default ServerSettingsModalContainer;
