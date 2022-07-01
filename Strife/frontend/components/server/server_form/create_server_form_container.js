import { connect } from "react-redux"
import ServerForm from "./server_form"
import {createServer, removeServerErrors} from "../../../actions/server_actions.js";
import { withRouter } from "react-router";


const mSTP = state => {
    return {
        currentUser: state.entities.users[state.session.id],
        server: {server_owner_id: state.session.id, server_name: "", public: true },
        errors: state.errors.server
    }
}

const mDTP = dispatch => {
    return {
        action: (server) => dispatch(createServer(server)),
        removeServerErrors: () => dispatch(removeServerErrors())
    }
}


const CreateServerFormContainer = withRouter(connect(mSTP, mDTP)(ServerForm));
export default CreateServerFormContainer;