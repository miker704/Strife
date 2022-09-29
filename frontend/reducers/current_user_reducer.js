import {
    LOGOUT_CURRENT_USER, RECEIVE_CURRENT_USER,
    REMOVE_CURRENT_USER, RECEIVE_USER,
    RECEIVE_USERS,
    RESYNC_CURRENT_USER
    } from "../actions/session_actions.js";

import { RECEIVE_DM_SERVER } from "../actions/dm_server_actions.js";
import { RECEIVE_SERVER } from '../actions/server_actions.js';


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
    if (!members) { return state }
    let nextState = Object.assign({}, state);
    for (let [id, member] of Object.entries(members)) {
        if (state.id === member.id) {
            nextState = member;
            break;
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


        case RECEIVE_DM_SERVER:
            return extractCurrentUserDmMemberShip(state, action.dmserver.members);



        case RECEIVE_SERVER:
            return extractCurrentUser(state, action.server.users);

       
     

        case REMOVE_CURRENT_USER:
            return {};
        case LOGOUT_CURRENT_USER:
            return {};
        default:
            return state;
    }

}


export default currentUserReducer;