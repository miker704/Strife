import {connect } from "react-redux";
import { withRouter } from "react-router";
import TestPage from "./test_page";
import { openModal, closeModal } from "../../actions/modal_actions";
import { fetchServer, fetchServers } from "../../actions/server_actions";
import { fetchChannel } from "../../actions/channel_actions";

const mSTP = (state,ownProps) => {
    return {
        currentUser: state.entities.users[state.session.id],
        servers: Object.values(state.entities.servers),
        serverId: ownProps.match.params.serverId,
        errors: state.errors.session,
        server: state.entities.servers[28],
        channels: Object.values(state.entities.channels)
    }
}

const mDTP = (dispatch) => {
    return {
        openModal: (modal) => dispatch(openModal(modal)),
        fetchServers: () => dispatch(fetchServers()),
        fetchServer: (serverId) => dispatch(fetchServer(serverId)),
        fetchChannel: (channelId) => dispatch(fetchChannel(channelId)),
        closeModal: () => dispatch(closeModal())
    }
}


const TestPageContainer = withRouter(connect(mSTP,mDTP)(TestPage));
export default TestPageContainer;