import { connect } from "react-redux";
import { withRouter } from "react-router";
import { fetchDmServer, fetchDmServers } from "../../../actions/dm_server_actions.js";
import { selectDmMembers } from "../../../utils/selectors_api_util.js";
import { reSyncCurrentUser } from "../../../actions/session_actions.js";
import DmChatFirstMessage from "./dm_first_message.jsx";

const mSTP = (state, ownProps) => {

    return {
        currentUserId: state.session.id,
        currentUser: state.currentUser,
        dmServer: state.entities.dmServers[ownProps.match.params.dmServerId],
        errors: state.errors.dmMessage,
        dmServerMembers: selectDmMembers(state, ownProps.match.params.dmServerId),
        dmServerErrors: state.errors.dmServer,
        dmServers: Object.values(state.entities.dmServers),
        users: Object.values(state.entities.users),
    }
}

const mDTP = (dispatch, ownProps) => {
    return {
        fetchDmServers: (userId) => dispatch(fetchDmServers(userId)),
        fetchDmServer: (dmServerId) => dispatch(fetchDmServer(dmServerId)),
        reSyncCurrentUser: (currentUser) => dispatch(reSyncCurrentUser(currentUser)),
    }
}

const DmChatFirstMessageContainer = withRouter(connect(mSTP, mDTP)(DmChatFirstMessage));
export default DmChatFirstMessageContainer;
