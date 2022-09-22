import { EXPLORE_SERVERS } from "../actions/server_actions.js"

const exploreServersReducer = (state = {}, action) => {
    Object.freeze(state);
    let nextState = Object.assign({}, state);
    switch (action.type) {
        case EXPLORE_SERVERS:
            return action.servers;
        default:
            return state;
    }

}
export default exploreServersReducer;