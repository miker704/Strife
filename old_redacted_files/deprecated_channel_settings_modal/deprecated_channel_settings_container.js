// import { connect } from "react-redux";
// import { withRouter } from "react-router";
// import { fetchChannel, createChannel, updateChannel, deleteChannel, removeChannelErrors } from "../../../actions/channel_actions.js";
// import { fetchServer, fetchServers, removeServerErrors } from "../../../actions/server_actions.js";
// import { createChannelMembership, deleteChannelMembership } from "../../../actions/channel_membership_actions.js";
// import { openModal, closeModal } from "../../../actions/modal_actions.js";
// import { handleKeyUp } from "../../../utils/modal_api_util";
// import { logoutUser, removeSessionErrors } from "../../../actions/session_actions";
// import ChannelSettingsModal from "./channel_settings_modal.jsx";
// // import ChannelSettingsModal from "./csm3.jsx";
// // import TextChannelSettingsModal from "./text_channel_settings_modal.jsx";

// const extractServerProps = (state, ownProps) => {
//     let locationString = ownProps.location.pathname;
//     let newLoc = locationString.split('/$/channels/').join('').split('/');
//     return newLoc;
// }

// const getCurrentChannel = (state, ownProps) => {
//     let serverChannels = Object.values(state.entities.channels);
//     // const findThis = ownProps.mod_Channel_ID['ChannelId'];
//     const findThis = ownProps.mod_Channel_ID;
//     let currentChannelTarget = serverChannels.find((channel) => channel.id === findThis);
//     return currentChannelTarget;

// }


// const mSTP = (state, ownProps) => {

//     // const getIds = extractServerProps(state, ownProps);
//     // console.log('channel id oprops')
//     // console.log(ownProps.match.params.channelId);
//     // console.log('server id oprops')
//     // console.log(ownProps.match.params.serverId);
//     // console.log('oprops')

//     // console.log(ownProps);

//     // const currentChannelTarget = getCurrentChannel(state,ownProps);
//     return {
//         // server: state.entities.servers[parseInt(getIds[0])],
//         // channel: state.entities.channels[parseInt(getIds[1])],
//         // channel: currentChannelTarget,
//         // channel: state.entities.channels[parseInt(ownProps.mod_Channel_ID)],
//         // currentChannel: state.entities.channels[parseInt(ownProps.mod_Channel_ID)],
//         // currentChannelId: getIds[1],
//         // serverId: getIds[0],
//         //
//         // server: state.entities.servers[ownProps.params.serverId],
//         // channel: state.entities.channels[ownProps.mod_Channel_ID],
//         // currentUser: state.currentUser,
//         // channels: Object.values(state.entities.channels),
//         // errors: state.errors.channel,
//         // serverErrors: state.errors.server,
//         // sessionErrors: state.errors.session,
//         // servers: state.entities.servers

//         server: state.entities.servers[ownProps.serverParams.serverId],
//         channel: state.entities.channels[state.ui.modalProps.ChannelId],
//         currentUser: state.currentUser,
//         channels: Object.values(state.entities.channels),
//         errors: state.errors.channel,
//         serverErrors: state.errors.server,
//         sessionErrors: state.errors.session,
//         servers: state.entities.servers,
//         mod_Channel_ID: state.ui.modalProps.ChannelId || -1,

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

//         removeServerErrors: () => dispatch(removeServerErrors()),


//         //channel api functions

//         // fetchChannel: (channelId) => { dispatch(fetchChannel(channelId)) },
//         fetchChannel: (channelId) => dispatch(fetchChannel(channelId)),
//         createChannel: (channel) => dispatch(createChannel(channel)),
//         updateChannel: (channel) => dispatch(updateChannel(channel)),
//         deleteChannel: (channelId) => dispatch(deleteChannel(channelId)),
//         removeChannelErrors: () => dispatch(removeChannelErrors()),


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


// const ChannelSettingsModalContainer = withRouter(connect(mSTP, mDTP)(ChannelSettingsModal));
// // const ChannelSettingsModalContainer = withRouter(connect(mSTP, mDTP)(TextChannelSettingsModal));
// export default ChannelSettingsModalContainer;
