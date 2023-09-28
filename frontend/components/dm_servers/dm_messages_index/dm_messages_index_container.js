import { connect } from "react-redux";
import { withRouter } from "react-router";
import { fetchDmServer, fetchDmServers} from "../../../actions/dm_server_actions.js";
import { createDmMessage, receiveDmMessage } from "../../../actions/dm_messages_actions.js";
import { selectDmMembers } from "../../../utils/selectors_api_util.js";
import { reSyncCurrentUser } from "../../../actions/session_actions.js";
import DmMessageIndex from "./dm_messages_index.jsx";

const mSTP = (state, ownProps) => {

    return {

        DmMessages: Object.values(state.entities.dmMessages),
        currentUser: state.currentUser,
        dmMessagesIds: Object.keys(state.entities.dmMessages),
        dmServerId: ownProps.match.params.dmServerId,
        dmServer: state.entities.dmServers[ownProps.match.params.dmServerId],
        errors: state.errors.dmMessage,
        dmServerMembers: selectDmMembers(state, ownProps.match.params.dmServerId),
        dmServerErrors: state.errors.dmServer,
        dmServers: Object.values(state.entities.dmServers),
        users: Object.values(state.entities.users),
        strifeBot: state.systemUtils._STRIFE_BOT,
        dmMembers: Object.values(state.entities.dmServers[ownProps.match.params.dmServerId].members),

    }
}


const mDTP = (dispatch, ownProps) => {
    return {
        fetchDmServers: (userId) => dispatch(fetchDmServers(userId)),
        fetchDmServer: (dmServerId) => dispatch(fetchDmServer(dmServerId)),
        createDmMessage: (dmmessage) => dispatch(createDmMessage(dmmessage)),
        receiveDmMessage: (dm_message) => dispatch(receiveDmMessage(dm_message)),
        reSyncCurrentUser: (currentUser) => dispatch(reSyncCurrentUser(currentUser)),
    }
}

const DmMessageIndexContainer = withRouter(connect(mSTP, mDTP)(DmMessageIndex));
export default DmMessageIndexContainer;
