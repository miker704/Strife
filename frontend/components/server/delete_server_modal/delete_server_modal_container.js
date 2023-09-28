import { connect } from "react-redux";
import { withRouter } from "react-router";
import { fetchChannel, removeChannelErrors } from "../../../actions/channel_actions.js";
import { fetchServer, fetchServers, removeServerErrors, deleteServer, verifyName} from "../../../actions/server_actions.js";
import { deleteServerMembership } from "../../../actions/server_membership_actions.js";
import { closeModal } from "../../../actions/modal_actions.js";
import { handleKeyUp } from "../../../utils/modal_api_util";
import { reSyncCurrentUser } from "../../../actions/session_actions.js";
import DeleteServerModal from "./delete_server_modal.jsx";

const mSTP = (state, ownProps) => {


    return {

        currentUser: state.currentUser,
        server: ownProps.server,
        serverId: ownProps.serverParams.serverId,
        errors: state.errors.server,
        channelErrors: state.errors.channel,
        servers: state.entities.servers,
        serverParams: ownProps.serverParams,

    }
}


const mDTP = (dispatch, ownProps) => {

    return {

        //resync current user after delete of server
        reSyncCurrentUser: (userId) => dispatch(reSyncCurrentUser(userId)),
        //server api functions
        fetchServer: (serverId) => dispatch(fetchServer(serverId)),
        fetchUserServers: (user) => dispatch(fetchServers(user)),
        deleteServer: (serverId) => dispatch(deleteServer(serverId)),
        removeServerErrors: () => dispatch(removeServerErrors()),
        verifyName: (server) => dispatch(verifyName(server)),

        //channel api functions

        fetchChannel: (channelId) => { dispatch(fetchChannel(channelId)) },
        removeChannelErrors: () => dispatch(removeChannelErrors()),

        //server membership api functions

        deleteServerMembership: (servermembershipId, servermembership) =>
            dispatch(deleteServerMembership(servermembershipId, servermembership)),

        // modal api functions
        closeModal: () => dispatch(closeModal()),
        handleESC: (e) => handleKeyUp(e),

    }
}


const DeleteServerModalContainer = withRouter(connect(mSTP, mDTP)(DeleteServerModal));
export default DeleteServerModalContainer;
