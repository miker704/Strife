import { RECEIVE_USER_SEARCH } from "../actions/session_actions";

const userSearchReducer = (state = [], action) => {

    Object.freeze(state);

    switch (action.type) {
        case RECEIVE_USER_SEARCH:
            return action.users;
        default:
            return state;
    }

}


export default userSearchReducer;