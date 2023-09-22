import ServerAvatarModal from "./server_avatar_modal.jsx";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { removeChannelErrors } from "../../../actions/channel_actions.js";
import { fetchServer, fetchServers, removeServerErrors, updateServer } from "../../../actions/server_actions.js";

const extractServerProps = (state, ownProps) => {
    let locationString = ownProps.location.pathname;
    let newLoc = locationString.split('/$/channels/').join('').split('/');
    return newLoc;
}



const mSTP = (state, ownProps) => {

    const getIds = extractServerProps(state, ownProps);

    return {
        currentUser: state.currentUser,
        server: state.entities.servers[parseInt(getIds[0])],
        serverId: getIds[0],
        errors: state.errors.server,
        channelErrors: state.errors.channel,
        servers: state.entities.servers

    }
}


const mDTP = (dispatch, ownProps) => {



    return {

        //server api functions
        fetchServer: (serverId) => dispatch(fetchServer(serverId)),
        fetchUserServers: (user) => dispatch(fetchServers(user)),
        fetchServers: () => dispatch(fetchServers()),
        updateServer: (serverId, formData) => dispatch(updateServer(serverId, formData)),
        removeServerErrors: () => dispatch(removeServerErrors()),
        //channel api functions
        removeChannelErrors: () => dispatch(removeChannelErrors()),

    }
}


const ServerAvatarModalContainer = withRouter(connect(mSTP, mDTP)(ServerAvatarModal));
export default ServerAvatarModalContainer;
