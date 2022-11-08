import { RECEIVE_CORE } from "../../actions/session_actions";
import { LOGOUT_CURRENT_USER } from "../../actions/session_actions";
// create a default state 

const coreReducer = (state = {}, action) => {
    Object.freeze(state);
    let nextState;

    switch (action.type) {
        case RECEIVE_CORE:
            let CORE = action.core;
            nextState = Object.assign({}, state, CORE);
            return nextState;
        case LOGOUT_CURRENT_USER:
            return {};
        default:
            return state;

    }

}
export default coreReducer;