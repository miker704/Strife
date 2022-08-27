import { connect } from "react-redux";
import { withRouter } from "react-router";
import { fetchDmServer } from "../../../actions/dm_server_actions.js";
import { createDmMessage } from "../../../actions/dm_messages_actions.js";
import DmMessages from "./dm_messages.jsx";

const mSTP = (state, ownProps) => {
    return {
        dmMessage: {
            body: "",
            sender_id: state.session.id,
            dm_server_id: ownProps.match.params.dmServerId
        },
        dmMessages: Object.values(state.entities.dmMessages),
        currentUserId: state.session.id,
        dmMessagesIds: Object.keys(state.entities.dmMessages),
        otherUsers: state.entities.users[ownProps.match.params.otherUserId],
        dmMembers: state.entities.users,
        dmServerId: ownProps.match.params.dmServerId,
        errors: state.errors.dmMessage

    }
}


const mDTP = (dispatch, ownProps) => {
    return {

    }
}


const DmMessagesContainer = withRouter(connect(mSTP, mDTP)(DmMessages));
export default DmMessagesContainer;
