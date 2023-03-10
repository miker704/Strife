import { connect } from "react-redux";
import { withRouter } from "react-router";
import { fetchChannel, createChannel, removeChannelErrors } from "../../../actions/channel_actions.js";
import { fetchServer, fetchServers, removeServerErrors } from "../../../actions/server_actions.js";
import { openModal, closeModal } from "../../../actions/modal_actions.js";
import { handleKeyUp } from "../../../utils/modal_api_util";
import CreateChannelModal from "./create_channel_modal.jsx";

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
        errors: state.errors.channel,
        serverErrors: state.errors.server,
        sessionErrors: state.errors.session,
        servers: state.entities.servers,
        channelType : state.ui.modalProps.channelType


    }
}


const mDTP = (dispatch, ownProps) => {

    return {

        //server api functions
        fetchServer: (serverId) => dispatch(fetchServer(serverId)),
        fetchUserServers: (user) => dispatch(fetchServers(user)),
        fetchServers: () => dispatch(fetchServers()),
        removeServerErrors: () => dispatch(removeServerErrors()),
        //channel api functions
        fetchChannel: (channelId) => { dispatch(fetchChannel(channelId)) },
        createChannel: (channel) => dispatch(createChannel(channel)),
        removeChannelErrors: () => dispatch(removeChannelErrors()),
        // modal api functions
        openModal: modal => dispatch(openModal(modal)),
        closeModal: () => dispatch(closeModal()),
        handleESC: (e) => handleKeyUp(e),

    }
}


const CreateChannelModalContainer = withRouter(connect(mSTP, mDTP)(CreateChannelModal));
export default CreateChannelModalContainer;
