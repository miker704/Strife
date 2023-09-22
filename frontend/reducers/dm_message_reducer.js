import { RECEIVE_DM_SERVER, REMOVE_DM_SERVER } from "../actions/dm_server_actions";
import { REMOVE_DM_MEMBER } from "../actions/dm_member_actions";
import { RECEIVE_DM_MESSAGE, REMOVE_DM_MESSAGE } from "../actions/dm_messages_actions";
import { LOGOUT_CURRENT_USER } from "../actions/session_actions";


const dmMessageReducer = (state = {}, action) => {
    Object.freeze(state);
    let nextState = Object.assign({}, state);
    switch (action.type) {

        case RECEIVE_DM_MESSAGE:
            nextState[action.dm_message.id] = action.dm_message;
            return nextState;
        case REMOVE_DM_MESSAGE:
            delete nextState[action.dm_messageId]
            return nextState;

        case RECEIVE_DM_SERVER:

            nextState = action.dmserver.dm_messages ? action.dmserver.dm_messages : {};
            return nextState;

        case REMOVE_DM_SERVER:
            return {};

        case LOGOUT_CURRENT_USER:
            return {};
        default:
            return state;
    }
}

export default dmMessageReducer;