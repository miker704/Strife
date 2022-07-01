import { connect } from "react-redux";
import EditServerForm from "./edit_server_form.jsx";
import {updateServer, deleteServer,removeServerErrors} from "../../../actions/server_actions.js";
import { deleteServerMembership } from "../../../actions/server_membership_actions.js";
import { withRouter } from "react-router";


const mSTP = (state, ownProps) => {
    return {
        currentUser: state.entities.users[state.session.id],
        server: state.entities.servers[ownProps.match.params.serverId],
        servers: state.entities.server,
        errors: state.errors.server
    }
}

const mDTP = (dispatch, ownProps) => {
    return {
            
        action: (server) => dispatch(updateServer(server)),
        deleteServer: () => dispatch(deleteServer([ownProps.match.params.serverId])),
        //if we delete server delete that membership but mainly the bots membership
        deleteServerMembership: (servermembership) => dispatch(deleteServerMembership(1,servermembership)),
        removeServerErrors : () => dispatch(removeServerErrors())

    }
}


const EditServerFormContainer = withRouter(connect(mSTP, mDTP)(EditServerForm));
export default EditServerFormContainer;