import {
    LOGOUT_CURRENT_USER, RECEIVE_CURRENT_USER,
    REMOVE_CURRENT_USER, RECEIVE_USER,
    RECEIVE_USERS,
    RESYNC_CURRENT_USER
} from "../actions/session_actions.js";

import { RECEIVE_DM_SERVER, REMOVE_DM_SERVER, WEB_SOCKET_RECEIVE_DM_SERVER } from "../actions/dm_server_actions.js";
import { RECEIVE_SERVER, REMOVE_SERVER, WEB_SOCKET_RECEIVE_SERVER } from '../actions/server_actions.js';
// import { RECEIVE_FRIENDSHIP } from "../actions/friendship_actions.js";

const extractCurrentUser = (state, users) => {
    if (!users) { return state; }
    let nextState = Object.assign({}, state);
    for (let [id, user] of Object.entries(users)) {
        if (state.id === user.id) {
            nextState = user;
            break;
        }
    }
    return nextState;
}

const extractCurrentUserDmMemberShip = (state, members) => {
    if (!members) { return state; }
    let nextState = Object.assign({}, state);
    for (let [id, member] of Object.entries(members)) {
        if (state.id === member.id) {
            nextState = member;
            break;
        }
    }
    return nextState;
}


const removeDeletedServer = (state, serverId) => {
    if (!serverId) {
        return state;
    }
    let nextState = Object.assign({}, state);
    // we are not from  removing the joined servers we are letting 
    // the next resync handle it as it will slow down the process
    // let newJoinedServersArray = state.serversJoined.filter((srvId) => srvId !== serverId);
    // nextState.serversJoined = newJoinedServersArray;
    // let newOwnedServersArray = state.ownedServers.filter((srvId) => srvId !== serverId);
    // nextState.ownedServers = newOwnedServersArray;

    nextState.ownedServers = state.ownedServers.filter((srvId) => srvId !== serverId);
    nextState.serversJoined = state.serversJoined.filter((srvId) => srvId !== serverId);

    return nextState;
}

const removeDeletedDmServer = (state, dmServerId) => {
    if (!dmServerId) {
        return state;
    }
    let nextState = Object.assign({}, state);
    nextState.dmServersJoined = state.dmServersJoined.filter((dmsId) => dmsId !== dmServerId);
    return nextState;
}



const currentUserReducer = (state = {}, action) => {

    Object.freeze(state);
    let newState;
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            return action.currentUser;

        // case RECEIVE_USER:

        //     if (state.id === action.user.id) {
        //         return Object.assign({}, state, { [action.user.id]: action.user })
        //     }

        case RESYNC_CURRENT_USER:
            return action.currentUser;


        // case RECEIVE_FRIENDSHIP:
        //     return state;
        case RECEIVE_USERS:

            return extractCurrentUser(state, action.users);


        case RECEIVE_DM_SERVER:
            return extractCurrentUserDmMemberShip(state, action.dmserver.members);

        case WEB_SOCKET_RECEIVE_DM_SERVER:
            return extractCurrentUserDmMemberShip(state, action.dmserver.members);

        // case REMOVE_DM_SERVER:
        //     return removeDeletedDmServer(state, action.dmserverId);

        case RECEIVE_SERVER:
            return extractCurrentUser(state, action.server.users);

        case WEB_SOCKET_RECEIVE_SERVER:
            return extractCurrentUser(state, action.server.users);

        case REMOVE_SERVER:
            return removeDeletedServer(state, action.serverId);

        case REMOVE_CURRENT_USER:
            return {};
        case LOGOUT_CURRENT_USER:
            return {};
        default:
            return state;
    }

}


export default currentUserReducer;