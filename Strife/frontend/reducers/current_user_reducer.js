import { LOGOUT_CURRENT_USER, RECEIVE_CURRENT_USER, REMOVE_CURRENT_USER, RECEIVE_USER, RECEIVE_USERS, RECEIVE_FRIENDS } from "../actions/session_actions.js";
import { RECEIVE_DM_MEMBER } from "../actions/dm_member_actions.js";
import { RECEIVE_DM_SERVER } from '../actions/dm_server_actions.js';
import { RECEIVE_SERVER } from '../actions/server_actions.js';
import { RECEIVE_SERVER_MEMBERSHIP, REMOVE_SERVER_MEMBERSHIP } from '../actions/server_membership_actions.js';
import { RECEIVE_FRIENDSHIP, REMOVE_FRIENDSHIP, RECEIVE_BLOCKED_USER } from '../actions/friendship_actions.js';


const extractCurrentUser = (state, users) => {
    // debugger
    if (!users) { return state; }
    let nextState = Object.assign({}, state);

    for (let [id, user] of Object.entries(users)) {
        if (state.id === user.id) {

            // nextState[id] = user;
            console.log("current user found ? : ", user);
            console.log("FOUND YOU !!!!!!!!!")
            console.table(user);
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





const currentUserReducer = (state = {}, action) => {

    Object.freeze(state);
    let newState;
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            return action.currentUser;

        case RECEIVE_USER:

            if (state.id === action.user.id) {
                return Object.assign({}, state, { [action.user.id]: action.user })
            }


        // case RECEIVE_USERS:

        //     return extractCurrentUser(state, action.users);

        case RECEIVE_SERVER:
            return extractCurrentUser(state, action.server.users);
        // action.server.users

        // case RECEIVE_SERVER_MEMBERSHIP:
        //     return action.servermembership.users;
        // case RECEIVE_DM_MEMBER:
        //     return Object.assign({}, state, { [action.dm_member.user.id]: action.dm_member.user });

        case RECEIVE_DM_SERVER:
            return extractCurrentUser(state, action.dmserver.users);

        case REMOVE_CURRENT_USER:
            return {};
        case LOGOUT_CURRENT_USER:
            return {};
        default:
            return state;
    }

}


export default currentUserReducer;