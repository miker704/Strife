import { connect } from "react-redux";
import { withRouter } from "react-router";
import { openModal, closeModal } from "../../../../actions/modal_actions";
import { createServer, removeServerErrors, joinServer } from "../../../../actions/server_actions";
import CreateServerForm from "./create_server_form.jsx";
import { createChannel, removeChannelErrors } from "../../../../actions/channel_actions";


const mSTP = (state) => {
    return {
        currentUser: state.entities.users[state.session.id],
        server: {
            server_owner_id: state.session.id,
            public: true,
            server_name: "",
        },
        errors: state.errors.server,
        errorsChannel: state.errors.channel
    }
}
const mDTP = (dispatch) => {
    return {
        action: (server) => dispatch(createServer(server)),
        // createServer: (server) => dispatch(createServer(server)),
        removeServerErrors: () => dispatch(removeServerErrors()),
        openModal: (modal) => dispatch(openModal(modal)),
        closeModal: () => dispatch(closeModal()),
        joinServer: (inviteCode) => dispatch(joinServer(inviteCode)),
        createChannelSetup: (channel) => dispatch(createChannel(channel)),
        removeChannelErrors: () => dispatch(removeChannelErrors())

    }
}


const CreateServerFormContainer = withRouter(connect(mSTP, mDTP)(CreateServerForm));
export default CreateServerFormContainer;