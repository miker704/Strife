import { Connect } from "react-redux";
import { withRouter } from "react-router";
import { fetchDmServer } from "../../actions/dm_server_actions.js";
import { createDmMessage } from "../../actions/dm_messages_actions.js";


const mSTP = (state, ownProps) => {
    return {

    }
}


const mDTP = (dispatch, ownProps) => {
    return {

    }
}


const DmMessagesContainer = withRouter(connect(mSTP, mDTP)(DmMessages));
export default DmMessagesContainer;
