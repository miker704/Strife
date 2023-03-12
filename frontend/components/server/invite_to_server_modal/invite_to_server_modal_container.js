import { connect } from "react-redux";
import { withRouter } from "react-router";
import { fetchChannel, removeChannelErrors } from "../../../actions/channel_actions.js";
import { fetchServer, fetchServers, removeServerErrors } from "../../../actions/server_actions.js";
import { createServerMembership } from "../../../actions/server_membership_actions.js";
import { closeModal } from "../../../actions/modal_actions.js";
import { handleKeyUp } from "../../../utils/modal_api_util";
import {requestFriendships, removeFriendshipErrors, requestAllFriendships } from "../../../actions/friendship_actions.js";
import { selectAllFriends } from "../../../utils/selectors_api_util.js";
import InviteToServerModal from "./invite_to_server_modal.jsx";



const extractServerProps = (state, ownProps) => {
    let locationString = ownProps.location.pathname;
    let newLoc = locationString.split('/$/channels/').join('').split('/');
    return newLoc;
}



const mSTP = (state, ownProps) => {

    const getIds = extractServerProps(state, ownProps);

    return {
        

        // currentUser: state.entities.users[state.session.id],
        currentUser: state.currentUser,
        server: state.entities.servers[parseInt(getIds[0])],
        channel: state.entities.channels[parseInt(getIds[1])],
        channels: Object.values(state.entities.channels),
        currentChannelId: getIds[1],
        serverId: getIds[0],
        errors: state.errors.server,
        channelErrors: state.errors.channel,
        friendShipErrors: state.errors.friendship,
        servers: state.entities.servers,
        friends: selectAllFriends(state, 3),

    }
}


const mDTP = (dispatch, ownProps) => {

    return {

        //server api functions
        fetchServer: (serverId) => dispatch(fetchServer(serverId)),
        fetchUserServers: (user) => dispatch(fetchServers(user)),
        fetchServers: () => dispatch(fetchServers()),
        removeServerErrors: () => dispatch(removeServerErrors()),

        removeFriendshipErrors: () => dispatch(removeFriendshipErrors()),
        requestAllFriendships: () => dispatch(requestAllFriendships()),
        requestFriendships: () => dispatch(requestFriendships()),

        //channel api functions

        fetchChannel: (channelId) => { dispatch(fetchChannel(channelId)) },
        removeChannelErrors: () => dispatch(removeChannelErrors()),

        //server membership api functions

        createServerMembership: (servermembership) => dispatch(createServerMembership(servermembership)),
        // modal api functions
        closeModal: () => dispatch(closeModal()),
        handleESC: (e) => handleKeyUp(e),

    }
}


const InviteToServerModalContainer = withRouter(connect(mSTP, mDTP)(InviteToServerModal));
export default InviteToServerModalContainer;
