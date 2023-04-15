import { LOGOUT_CURRENT_USER, RECEIVE_CURRENT_USER, REMOVE_CURRENT_USER, RECEIVE_USER, RECEIVE_USERS, RECEIVE_FRIENDS } from "../actions/session_actions.js";
import { RECEIVE_DM_MEMBER } from "../actions/dm_member_actions.js";
import { RECEIVE_DM_SERVER } from '../actions/dm_server_actions.js';
import { RECEIVE_SERVER } from '../actions/server_actions.js';
import { RECEIVE_SERVER_MEMBERSHIP, REMOVE_SERVER_MEMBERSHIP } from '../actions/server_membership_actions.js';
import { RECEIVE_FRIENDSHIP, REMOVE_FRIENDSHIP, RECEIVE_BLOCKED_USER, REMOVE_BLOCKED_USER } from '../actions/friendship_actions.js';

const receiveUsers = (state, users) => {
    if (!users) { return state; }
    let nextState = Object.assign({}, state);

    for (let [id, user] of Object.entries(users)) {

        nextState[id] = user;

    }
    return nextState;
}



const userReducer = (state = {}, action) => {

    Object.freeze(state);
    let user;
    let newState;

    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            // return {currentUser : action.user};
            // return Object.assign({}, state, {[action.currentUser.id]: action.currentUser});
            return Object.assign({}, state, { [action.currentUser.id]: action.currentUser });

        case RECEIVE_USER:
            return Object.assign({}, state, { [action.user.id]: action.user });

        case RECEIVE_USERS:

            return receiveUsers(state, action.users);

        case RECEIVE_FRIENDSHIP:
            newState = Object.assign({}, state);
            user = newState[action.friendship.friend_id];
            user.friend_request_status = action.friendship.friend_request_status;
            return newState;

        case RECEIVE_BLOCKED_USER:
            newState = Object.assign({}, state);
            user = newState[action.friendship.friend_id];
            user.friend_request_status = -1;
            // user.friend_request_status = 0;
            return newState;


        case RECEIVE_SERVER:
            // return action.servers.users;
            return action.server.users
        // case RECEIVE_SERVER_MEMBERSHIP:
        //     return action.servermembership.users;
        // case RECEIVE_DM_MEMBER:
        //     return Object.assign({}, state, { [action.dm_member.user.id]: action.dm_member.user });
        case RECEIVE_DM_SERVER:
            return action.dmserver.users;

        case REMOVE_FRIENDSHIP:
            newState = Object.assign({}, state);
            user = newState[action.friendship.friend_id];
            user.friend_request_status = 0;
            return newState;

        case REMOVE_BLOCKED_USER:
            newState = Object.assign({}, state);
            user = newState[action.friendship.friend_id];
            user.friend_request_status = action.friendship.friend_request_status == -2 ? -2 : 0;
            return newState;
        // case REMOVE_SERVER_MEMBERSHIP:
        //     newState = Object.assign({}, state);
        //     newState[action.membershiphash.id] = action.membershiphash.id;
        //     return newState;

        case REMOVE_CURRENT_USER:
            return {};
        case LOGOUT_CURRENT_USER:
            return {};
        default:
            return state;
    }

}


export default userReducer;