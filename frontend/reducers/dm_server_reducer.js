import { RECEIVE_DM_SERVER, RECEIVE_DM_SERVERS, REMOVE_DM_SERVER, WEB_SOCKET_RECEIVE_DM_SERVER, WEB_SOCKET_REMOVE_DM_SERVER } from "../actions/dm_server_actions";
import { RECEIVE_DM_MEMBER, REMOVE_DM_MEMBER } from "../actions/dm_member_actions";
import { LOGOUT_CURRENT_USER } from "../actions/session_actions";



const dmServerReducer = (state = {}, action) => {
    Object.freeze(state);
    let nextState = Object.assign({}, state);
    switch (action.type) {

        case WEB_SOCKET_RECEIVE_DM_SERVER:
            nextState[action.dmserver.id] = action.dmserver
            return nextState;
        case RECEIVE_DM_SERVER:
            nextState[action.dmserver.id] = action.dmserver
            return nextState;
        case RECEIVE_DM_SERVERS:
            return action.dmservers;

        case REMOVE_DM_SERVER:
            delete nextState[action.dmserverId]
            return nextState

        case WEB_SOCKET_REMOVE_DM_SERVER:
            delete nextState[action.dmserverId]
            return nextState;

        case RECEIVE_DM_MEMBER:
            nextState[action.dm_member.id] = action.dm_member;
            nextState[action.dm_member.dm_server_id]
            return nextState;

        case REMOVE_DM_MEMBER:
            // delete nextState[action.dm_member_hash.dmserver.id];
            nextState[action.dm_member_hash.id] = action.dm_member_hash

            return nextState;
        case LOGOUT_CURRENT_USER:
            return {};
        default:
            return state;
    }

}
export default dmServerReducer;