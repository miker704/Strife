import { connect } from "react-redux";
import { withRouter } from "react-router";
import { fetchDmServer, fetchDmServers, removeDmServer } from "../../../actions/dm_server_actions.js";
import { createDmMessage, receiveDmMessage } from "../../../actions/dm_messages_actions.js";
import { selectDmMembers } from "../../../utils/selectors_api_util.js";
import { reSyncCurrentUser } from "../../../actions/session_actions.js";
import DmMessages from "./dm_messages.jsx";


const mSTP = (state, ownProps) => {

    return {
        dmMessage: {
            body: "",
            sender_id: state.session.id,
            dm_server_id: parseInt(ownProps.match.params.dmServerId)
        },
        DmMessages: Object.values(state.entities.dmMessages),
        currentUserId: state.session.id,
        currentUser: state.currentUser,
        dmMessagesIds: Object.keys(state.entities.dmMessages),
        dmServerId: ownProps.match.params.dmServerId,
        dmServer: state.entities.dmServers[ownProps.match.params.dmServerId],
        errors: state.errors.dmMessage,
        dmServerMembers: selectDmMembers(state,ownProps.match.params.dmServerId),
        dmServerErrors : state.errors.dmServer,
        dmServers : Object.values(state.entities.dmServers),
        users: Object.values(state.entities.users),
        isMember: state.currentUser.dmServersJoined.includes(parseInt(ownProps.match.params.dmServerId)),
        strifeBot: state.systemUtils._STRIFE_BOT,
        dmMembers: Object.values(state.entities.dmServers[ownProps.match.params.dmServerId].members),

    }
}


const mDTP = (dispatch, ownProps) => {
    return {
        fetchDmServers: (userId) => dispatch(fetchDmServers(userId)),
        fetchDmServer: () => {dispatch(fetchDmServer(ownProps.match.params.dmServerId))},
        createDmMessage: (dmmessage) => dispatch(createDmMessage(dmmessage)),
        receiveDmMessage: (dm_message) => dispatch(receiveDmMessage(dm_message)),
        reSyncCurrentUser: (currentUser) => dispatch(reSyncCurrentUser(currentUser)),
        removeDmServer: (dmServerId) => dispatch(removeDmServer(dmServerId))
        
    }
}


const DmMessagesContainer = withRouter(connect(mSTP, mDTP)(DmMessages));
export default DmMessagesContainer;
