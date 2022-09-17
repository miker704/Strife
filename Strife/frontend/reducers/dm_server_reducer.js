import { RECEIVE_DM_SERVER, RECEIVE_DM_SERVERS, REMOVE_DM_SERVER } from "../actions/dm_server_actions";
import { RECEIVE_DM_MEMBER, REMOVE_DM_MEMBER } from "../actions/dm_member_actions";




const dmServerReducer = (state = {}, action) => {
    Object.freeze(state);
    let nextState = Object.assign({}, state);
    switch (action.type) {
        case RECEIVE_DM_SERVER:
            nextState[action.dmserver.id] = action.dmserver
            return nextState;
        case RECEIVE_DM_SERVERS:
            // return action.dmservers.dm_servers;
            return action.dmservers;

        case REMOVE_DM_SERVER:
            delete nextState[action.dmserverId]
            return nextState

        case  RECEIVE_DM_MEMBER:

        nextState[action.dm_member.id]= action.dm_member;
        return nextState;

        case REMOVE_DM_MEMBER:

            // delete nextState[action.dm_member_hash.dmserver.id];
            nextState[action.dm_member_hash.id]= action.dm_member_hash
           
            return nextState;

        default:
            return state;
    }
   
}
export default dmServerReducer;