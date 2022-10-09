import { RECEIVE_USER_SEARCH } from "../actions/session_actions";
import { LOGOUT_CURRENT_USER } from "../actions/session_actions";
const userSearchReducer = (state = [], action) => {

    Object.freeze(state);

    switch (action.type) {
        case RECEIVE_USER_SEARCH:
            return action.users;
        case LOGOUT_CURRENT_USER:
            return {};
        default:
            return state;
    }

}


export default userSearchReducer;