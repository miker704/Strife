import { connect } from "react-redux";
import { withRouter } from "react-router";
import { fetchChannel, removeChannelErrors } from "../../../actions/channel_actions.js";
import { fetchServer, fetchServers, removeServerErrors } from "../../../actions/server_actions.js";
import { createServerMembership} from "../../../actions/server_membership_actions.js";
import { openModal, closeModal } from "../../../actions/modal_actions.js";
import { handleKeyUp } from "../../../utils/modal_api_util";
import ExploreServers from "./server_search";

const extractServerProps = (state, ownProps) => {
    let locationString = ownProps.location.pathname;
    let newLoc = locationString.split('/channels/').join('').split('/');
    return newLoc;
}



const mSTP = (state, ownProps) => {

    const getIds = extractServerProps(state, ownProps);

    return {
        

        currentUser: state.entities.users[state.session.id],
        server: state.entities.servers[parseInt(getIds[0])],
        channel: state.entities.channels[parseInt(getIds[1])],
        channels: Object.values(state.entities.channels),
        currentChannelId: getIds[1],
        serverId: getIds[0],
        errors: state.errors.server,
        channelErrors: state.errors.channel,
        sessionErrors: state.errors.session,
        servers: state.entities.servers

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
        removeChannelErrors: () => dispatch(removeChannelErrors()),
        //server membership api functions
        createServerMembership: (servermembership) => dispatch(createServerMembership(servermembership)),
        // modal api functions
        openModal: modal => dispatch(openModal(modal)),
        closeModal: () => dispatch(closeModal()),
        handleESC: (e) => handleKeyUp(e),

    }
}


const ExploreServersContainer = withRouter(connect(mSTP, mDTP)(ExploreServers));
export default ExploreServersContainer;
















