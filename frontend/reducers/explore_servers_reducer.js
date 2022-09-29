import { EXPLORE_SERVERS, REMOVE_UNEXPLORED_SERVERS } from "../actions/server_actions.js"


//filter out private servers from being displayed in the explored servers list 
// privates servers can only be joined via an invite link from the create server modal join via
//invite slide

const receiveUnexploredServers = (state, servers) => {
    if (!servers) { return state; }
    let nextState = Object.assign({}, state);

    for (let [id, server] of Object.entries(servers)) {

        if (server.public === true) {
            nextState[id] = server
        }

    }
    return nextState;
}





const exploreServersReducer = (state = {}, action) => {
    Object.freeze(state);
    let nextState = Object.assign({}, state);
    switch (action.type) {
        case EXPLORE_SERVERS:
            // return action.servers;
            return receiveUnexploredServers(state, action.servers);
        // remove the state when leaving the page as it is not needed anymore only when in the page it is needed
        case REMOVE_UNEXPLORED_SERVERS:
            return action.servers
        default:
            return state;
    }

}
export default exploreServersReducer;