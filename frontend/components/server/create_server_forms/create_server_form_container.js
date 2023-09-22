import { connect } from "react-redux";
import { withRouter } from "react-router";
import { openModal, closeModal } from "../../../actions/modal_actions";
import { createServer, removeServerErrors, joinServer, fetchServer } from "../../../actions/server_actions";
import CreateServerForm from "./create_server_form.jsx";
import { createChannel, removeChannelErrors } from "../../../actions/channel_actions";
import { handleKeyUp } from "../../../utils/modal_api_util"; 
import { reSyncCurrentUser } from "../../../actions/session_actions";

const mSTP = (state) => {
    return {
        currentUser: state.entities.users[state.session.id],
        currentUserId: state.session.id,
        server: {
            server_owner_id: state.session.id,
            public: true,
            server_name: "",
        },
        errors: state.errors.server,
        channelErrors: state.errors.channel
    }
}
const mDTP = (dispatch) => {
    return {
        createServer: (server) => dispatch(createServer(server)),
        fetchJoinedServer: (serverId) => dispatch(fetchServer(serverId)),
        removeServerErrors: () => dispatch(removeServerErrors()),
        openModal: (modal) => dispatch(openModal(modal)),
        closeModal: () => dispatch(closeModal()),
        joinServer: (inviteCode) => dispatch(joinServer(inviteCode)),
        createChannelSetup: (channel) => dispatch(createChannel(channel)),
        removeChannelErrors: () => dispatch(removeChannelErrors()),
        handleESC : (e) => handleKeyUp(e),
        reSyncCurrentUser: (currentUser) => dispatch(reSyncCurrentUser(currentUser))
    }
}


const CreateServerFormContainer = withRouter(connect(mSTP, mDTP)(CreateServerForm));
export default CreateServerFormContainer;