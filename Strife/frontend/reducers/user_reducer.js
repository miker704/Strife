import { LOGOUT_CURRENT_USER, RECEIVE_CURRENT_USER, REMOVE_CURRENT_USER } from "../actions/session_actions.js";
import { RECEIVE_DM_MEMBER } from "../actions/dm_member_actions.js";
import { RECEIVE_DM_SERVERS } from '../actions/dm_server_actions.js';
import { RECEIVE_SERVER } from '../actions/server_actions.js';
import { RECEIVE_SERVER_MEMBERSHIP } from '../actions/server_membership_actions.js';



const userReducer = (state = {}, action) => {

    Object.freeze(state);

    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            // return {currentUser : action.user};
            // return Object.assign({}, state, {[action.currentUser.id]: action.currentUser});
            return Object.assign({}, state, { [action.currentUser.id]: action.currentUser });



        case RECEIVE_SERVER:
            return action.servers.users;
            //return action.server.users
        case RECEIVE_SERVER_MEMBERSHIP:
            return action.servermembership.users;
        case RECEIVE_DM_MEMBER:
            return Object.assign({}, state, { [action.dm_member.user.id]: action.dm_member.user });
        case RECEIVE_DM_SERVERS:
            return action.dmServers.users;


        case REMOVE_CURRENT_USER:
            return {};
        case LOGOUT_CURRENT_USER:
            return {};
        default:
            return state;
    }

}


export default userReducer;