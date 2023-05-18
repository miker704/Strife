import { connect } from "react-redux";
import { withRouter } from "react-router";
import TestPage from "./test_page";
import TestPage1 from "./test_page1";

import { openModal, closeModal } from "../../actions/modal_actions";
import { fetchServer, fetchServers } from "../../actions/server_actions";
import { fetchChannel } from "../../actions/channel_actions";
import { fetchDmServers } from "../../actions/dm_server_actions";
import { fetchDmMemberShipStatus } from "../../actions/dm_member_actions";



const mSTP = (state, ownProps) => {


    return {
        currentUser: state.entities.users[state.session.id],
        serversArray: Object.values(state.entities.servers),
        servers: state.entities.servers,
        serverId: ownProps.match.params.serverId,
        errors: state.errors.session,
        server: state.entities.servers[1],
        channels: Object.values(state.entities.channels),
        dmServers: state.entities.dmServers,
        dmServersArray: Object.values(state.entities.dmServers),
        isMember: state.entities.users[state.session.id].dmServersJoined,
        selectedLoadingMsg: "$TR!F3 Intrusion Prevention System - Warning You are Not Authorized to access this Server!",

    }
}

const mDTP = (dispatch) => {
    return {
        openModal: (modal) => dispatch(openModal(modal)),
        fetchServers: () => dispatch(fetchServers()),
        fetchServer: (serverId) => dispatch(fetchServer(serverId)),
        fetchChannel: (channelId) => dispatch(fetchChannel(channelId)),
        fetchDmServers: () => dispatch(fetchDmServers()),
        closeModal: () => dispatch(closeModal()),
        fetchDmMemberShipStatus: (dm_member) => dispatch(fetchDmMemberShipStatus(dm_member))

    }
}


// const TestPageContainer = withRouter(connect(mSTP, mDTP)(TestPage));
const TestPageContainer = withRouter(connect(mSTP, mDTP)(TestPage1));
export default TestPageContainer;