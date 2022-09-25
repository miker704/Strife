import {
    LOGOUT_CURRENT_USER, RECEIVE_CURRENT_USER,
    REMOVE_CURRENT_USER, RECEIVE_USER,
    RECEIVE_USERS, RECEIVE_FRIENDS,
    RESYNC_CURRENT_USER
} from "../actions/session_actions.js";
import { RECEIVE_DM_MEMBER, REMOVE_DM_MEMBER } from "../actions/dm_member_actions.js";
import { RECEIVE_DM_SERVER, RECEIVE_DM_SERVERS } from '../actions/dm_server_actions.js';
import { RECEIVE_SERVER, RECEIVE_SERVERS } from '../actions/server_actions.js';
import { RECEIVE_SERVER_MEMBERSHIP, REMOVE_SERVER_MEMBERSHIP } from '../actions/server_membership_actions.js';
import { RECEIVE_FRIENDSHIP, REMOVE_FRIENDSHIP, RECEIVE_BLOCKED_USER } from '../actions/friendship_actions.js';


const extractCurrentUser = (state, users) => {
    // debugger
    if (!users) { return state; }
    let nextState = Object.assign({}, state);

    for (let [id, user] of Object.entries(users)) {
        if (state.id === user.id) {

            nextState = user;
            // console.table(user);
            break;
        }

    }
    return nextState;
}


const unExtractCurrentUserFromDmServer = (state, dmServer, users) => {
    if (!users) { return state; }
    let nextState = Object.assign({}, state);

    for (let [id, user] of Object.entries(users)) {
        if (state.id === user.id) {

            // nextState[id] = user;
            console.log("current user found ? : ", user);
            console.log("FOUND YOU !!!!!!!!!")
            console.table(user);
            nextState.dmServersJoined.splice(nextState.dmServersJoined.indexOf(dmServer.id))
            break;
        }
        // else{
        //     console.log("no match");
        //     console.table(user);

        // }
        console.log("=============USER===============");
        console.log("id : ", id);
        console.log("user: ", user);
        console.log("=================================");
        console.log("=============STATE===============");
        console.log("state ; ", state);
        console.log("state id: ", state.id);
        console.log("=================================");

    }
    return nextState;
}


// const extractDmServers


const syncDmServers = (state, dmservers) => {
    // debugger
    if (!dmservers) { return state; }
    let nextState = Object.assign({}, state);

    for (let [id, dmserver] of Object.entries(dmservers)) {
        if (!state.dmServersJoined.includes(dmserver.id)) {
            console.log("new dmserver found : ", dmserver);
            console.table(dmserver);
            nextState.dmServersJoined.push(dmserver.id);
        }

    }
    return nextState;
}

const syncServers = (state, servers) => {
    // debugger
    if (!servers) { return state; }
    let nextState = Object.assign({}, state);

    for (let [id, server] of Object.entries(servers)) {
        if (!state.serversJoined.includes(server.id)) {
            // console.log("new server found : ", server);
            // console.table(server);
            nextState.serversJoined.push(server.id);
        }

    }
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

        case RECEIVE_USERS:

            return extractCurrentUser(state, action.users);

        // case RECEIVE_SERVER:
        //     return extractCurrentUser(state, action.server.users);

        // // case RECEIVE_SERVERS:
        // //     return syncServers(state, action.servers);
        // case RECEIVE_DM_SERVER:
        //     return extractCurrentUser(state, action.dmserver.users);
        // case RECEIVE_DM_SERVERS:
        //     return syncDmServers(state, action.dmservers);

        // case RECEIVE_SERVER_MEMBERSHIP:
        //     newState[action.servermembership.id] = action.servermembership;
        //     return newState;
        // case REMOVE_SERVER_MEMBERSHIP:
        //     newState[action.membershiphash.id] = action.membershiphash;
        //     return newState;


        // case RECEIVE_DM_MEMBER:

        //     newState[action.dm_member.id] = action.dm_member;
        //     return newState;

        // case REMOVE_DM_MEMBER:
        //     newState[action.dm_member_hash.id] = action.dm_member_hash
        //     return newState;


        case REMOVE_CURRENT_USER:
            return {};
        case LOGOUT_CURRENT_USER:
            return {};
        default:
            return state;
    }

}


export default currentUserReducer;