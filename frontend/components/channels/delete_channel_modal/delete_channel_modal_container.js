import { connect } from "react-redux";
import { withRouter } from "react-router";
import { fetchChannel, deleteChannel, removeChannelErrors } from "../../../actions/channel_actions.js";
import { fetchServer, fetchServers, removeServerErrors} from "../../../actions/server_actions.js";
import { deleteChannelMembership } from "../../../actions/channel_membership_actions.js";
import { closeModal } from "../../../actions/modal_actions.js";
import { handleKeyUp } from "../../../utils/modal_api_util";
import DeleteChannelModal from "./delete_channel_modal.jsx";



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
        servers: state.entities.servers

    }
}


const mDTP = (dispatch, ownProps) => {



    return {

        //server api functions
        fetchServer: (serverId) => dispatch(fetchServer(serverId)),
        fetchUserServers: (user) => dispatch(fetchServers(user)),
        removeServerErrors: () => dispatch(removeServerErrors()),

        //channel api functions

        fetchChannel: (channelId) => { dispatch(fetchChannel(channelId)) },
        deleteChannel: (channelId) => dispatch(deleteChannel(channelId)),
        removeChannelErrors: () => dispatch(removeChannelErrors()),

        //channel membership api functions 
        deleteChannelMembership: (channelmembershipId, channelmembership) =>
            dispatch(deleteChannelMembership(channelmembershipId, channelmembership)),

        // modal api functions
        closeModal: () => dispatch(closeModal()),
        handleESC: (e) => handleKeyUp(e),

    }
}


const DeleteChannelModalContainer = withRouter(connect(mSTP, mDTP)(DeleteChannelModal));
export default DeleteChannelModalContainer;
