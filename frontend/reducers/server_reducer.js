import { RECEIVE_SERVER, RECEIVE_SERVERS, REMOVE_SERVER, WEB_SOCKET_RECEIVE_SERVER, WEB_SOCKET_RECEIVE_SERVERS, WEB_SOCKET_REMOVE_SERVER } from "../actions/server_actions.js"
import { RECEIVE_SERVER_MEMBERSHIP, REMOVE_SERVER_MEMBERSHIP, RECEIVE_SERVER_MEMBERSHIP_INJEXTION } from "../actions/server_membership_actions.js"
import { LOGOUT_CURRENT_USER } from "../actions/session_actions"
import { RECEIVE_CHANNEL, RECEIVE_CHANNELS_VIA_INJEXTION } from "../actions/channel_actions.js"


const serverReducer = (state = {}, action) => {
    Object.freeze(state);
    let nextState = Object.assign({}, state);
    switch (action.type) {
        case RECEIVE_SERVER:
            nextState[action.server.id] = action.server;
            return nextState;
        case RECEIVE_SERVERS:
            return action.servers;
        case REMOVE_SERVER:
            delete nextState[action.serverId];
            return nextState

        // webSocket Action to avoid disrupting state if user is currently in a server when they receive 
        // a new server
        case WEB_SOCKET_RECEIVE_SERVER:
            nextState[action.server.id] = action.server;
            return nextState;
        case WEB_SOCKET_RECEIVE_SERVERS:
            return action.servers;
        case WEB_SOCKET_REMOVE_SERVER:
            delete nextState[action.serverId];
            return nextState;
        case RECEIVE_SERVER_MEMBERSHIP:
            nextState[action.servermembership.id] = action.servermembership;
            return nextState;
        case RECEIVE_SERVER_MEMBERSHIP_INJEXTION:
            nextState[action.servermembership.id].users = action.servermembership.users;
            return nextState;
        case RECEIVE_CHANNELS_VIA_INJEXTION:
            nextState[action.channelInjextion.id].channels = action.channelInjextion.channels;
            return nextState;
        case REMOVE_SERVER_MEMBERSHIP:
            nextState[action.membershiphash.id] = action.membershiphash;
            return nextState;
        case LOGOUT_CURRENT_USER:
            return {};
        default:
            return state;
    }

}
export default serverReducer;