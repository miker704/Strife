import { connect } from "react-redux";
import { withRouter } from "react-router";
import { fetchDmServer, fetchDmServers, removeDmServer } from "../../../actions/dm_server_actions.js";
import { createDmMessage, receiveDmMessage, removeDmMessage } from "../../../actions/dm_messages_actions.js";
import { receiveDmMember, removeDmMember } from "../../../actions/dm_member_actions.js";
import { selectDmMembers } from "../../../utils/selectors_api_util.js";
import { reSyncCurrentUser, fetchUser } from "../../../actions/session_actions.js";
import DmChatRoom from "./dm_chat_room.jsx";

const mSTP = (state, ownProps) => {

    const currentDmServer = ownProps.match.params.dmServerId;
    const sortedDmMessages = Object.values(state.entities.dmMessages)
        .filter(dm => dm.dm_server_id === parseInt(currentDmServer));

    return {
        dmMessage: {
            body: "",
            sender_id: state.session.id,
            dm_server_id: parseInt(ownProps.match.params.dmServerId)
        },
        DmMessages: Object.values(state.entities.dmMessages),
        sortedDmMessages: sortedDmMessages,
        currentUserId: state.session.id,
        currentUser: state.currentUser,
        dmMessagesIds: Object.keys(state.entities.dmMessages),
        dmServerId: ownProps.match.params.dmServerId,
        dmServer: state.entities.dmServers[ownProps.match.params.dmServerId],
        errors: state.errors.dmMessage,
        dmServerMembers: selectDmMembers(state, ownProps.match.params.dmServerId),
        dmServerErrors: state.errors.dmServer,
        dmServers: Object.values(state.entities.dmServers),
        users: Object.values(state.entities.users),
        isMember: state.currentUser.dmServersJoined.includes(parseInt(ownProps.match.params.dmServerId)),
        strifeBot: state.systemUtils._STRIFE_BOT,
        dmMembers: Object.values(state.entities.dmServers[ownProps.match.params.dmServerId].members),
        userBlocked: ownProps.userBlocked || false
    }
}


const mDTP = (dispatch, ownProps) => {
    return {
        fetchDmServers: (userId) => dispatch(fetchDmServers(userId)),
        // fetchDmServer: () => { dispatch(fetchDmServer(ownProps.match.params.dmServerId)) },
        fetchDmServer: (dmServerId) => dispatch(fetchDmServer(dmServerId)),
        createDmMessage: (dmmessage) => dispatch(createDmMessage(dmmessage)),
        receiveDmMessage: (dm_message) => dispatch(receiveDmMessage(dm_message)),
        removeDmMessage: (dm_messageId) => dispatch(removeDmMessage(dm_messageId)),
        reSyncCurrentUser: (currentUser) => dispatch(reSyncCurrentUser(currentUser)),
        removeDmServer: (dmServerId) => dispatch(removeDmServer(dmServerId)),
        fetchUser: (memberId) => dispatch(fetchUser(memberId)),

    }
}


const DmChatRoomContainer = withRouter(connect(mSTP, mDTP)(DmChatRoom));
export default DmChatRoomContainer;
