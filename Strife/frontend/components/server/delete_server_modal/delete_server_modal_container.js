import {connect } from "react-redux";
import { withRouter } from "react-router";
import DeleteServerModal from "./delete_server_modal";

const mSTP = (state,ownProps) => {
    return {
        currentUser: state.entities.users[state.session.id],
        servers: Object.values(state.entities.servers),
        serverId: ownProps.match.params.serverId,
        errors: state.errors.session,
        // server: state.entities.servers[2]

    }
}

const mDTP = (dispatch) => {
    return {
        // openModal: (modal) => dispatch(openModal(modal)),
        // fetchServers: () => dispatch(fetchServers()),
        // fetchServer: (serverId) => dispatch(fetchServer(serverId))
    }
}


const DeleteServerModalContainer = withRouter(connect(mSTP,mDTP)(DeleteServerModal));
export default DeleteServerModalContainer;