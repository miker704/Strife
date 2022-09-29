import { connect } from "react-redux";
import { withRouter } from "react-router";
import { fetchDmServer, fetchDmServers, removeDmServer } from "../../../actions/dm_server_actions.js";
import { createDmMessage } from "../../../actions/dm_messages_actions.js";
import { selectDmMembers } from "../../../utils/selectors_api_util.js";
import DmServer from "./dm_server.jsx";
import { reSyncCurrentUser } from "../../../actions/session_actions.js";

const mSTP = (state, ownProps) => {


    return {
        dmMessage: {
            body: "",
            sender_id: state.session.id,
            dm_server_id: ownProps.match.params.dmServerId
        },
        dmMessages: Object.values(state.entities.dmMessages),
        currentUserId: state.session.id,
        currentUser: state.entities.users[state.session.id],
        dmMessagesIds: Object.keys(state.entities.dmMessages),
        // dmMembers: state.entities.dmServers[ownProps.match.params.dmServerId],
        dmServerId: ownProps.match.params.dmServerId,
        dmServer: state.entities.dmServers[ownProps.match.params.dmServerId],
        errors: state.errors.dmMessage,
        dmServerMembers: selectDmMembers(state, ownProps.match.params.dmServerId),
        dmServerErrors: state.errors.dmServer,
        dmServers: Object.values(state.entities.dmServers),

    }
}


const mDTP = (dispatch, ownProps) => {
    return {
        fetchDmServers: (userId) => dispatch(fetchDmServers(userId)),
        fetchDmServer: () => dispatch(fetchDmServer(ownProps.match.params.dmServerId)),
        createDmMessage: (dmmessage) => dispatch(createDmMessage(dmmessage)),
        reSyncCurrentUser: (currentUserId) => dispatch(reSyncCurrentUser(currentUserId)),
        removeDmServer: (dmServerId) => dispatch(removeDmServer(dmServerId))

    }
}


const DmServerContainer = withRouter(connect(mSTP, mDTP)(DmServer));
export default DmServerContainer;
