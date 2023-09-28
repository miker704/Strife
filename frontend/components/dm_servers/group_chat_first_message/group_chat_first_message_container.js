import { connect } from "react-redux";
import { withRouter } from "react-router";
import { fetchDmServer, fetchDmServers, removeDmServerErrors } from "../../../actions/dm_server_actions.js";
import { selectDmMembers } from "../../../utils/selectors_api_util.js";
import { reSyncCurrentUser } from "../../../actions/session_actions.js";
import GroupChatFirstMessage from "./group_chat_first_message.jsx";

const mSTP = (state, ownProps) => {

    return {
        currentUserId: state.session.id,
        currentUser: state.currentUser,
        dmServerId: ownProps.match.params.dmServerId,
        dmServer: state.entities.dmServers[ownProps.match.params.dmServerId],
        dmServerMembers: selectDmMembers(state, ownProps.match.params.dmServerId),
        dmServerErrors: state.errors.dmServer,
        dmServers: Object.values(state.entities.dmServers),
        users: Object.values(state.entities.users),
    }
}


const mDTP = (dispatch, ownProps) => {
    return {
        fetchDmServers: (userId) => dispatch(fetchDmServers(userId)),
        fetchDmServer: () => dispatch(fetchDmServer(ownProps.match.params.dmServerId)),
        reSyncCurrentUser: (currentUserId) => dispatch(reSyncCurrentUser(currentUserId)),
        removeDmServerErrors: () => dispatch(removeDmServerErrors()),
    }
}

const GroupChatFirstMessageContainer = withRouter(connect(mSTP, mDTP)(GroupChatFirstMessage));
export default GroupChatFirstMessageContainer;
