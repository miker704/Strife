import { RECEIVE_FRIENDSHIP_ERRORS,REMOVE_FRIENDSHIP_ERRORS } from "../actions/friendship_actions";

const friendshipErrorsReducer = (state = [], action) => {
        Object.freeze(state);

        switch(action){
            case RECEIVE_FRIENDSHIP_ERRORS:
                return action.errors
            case REMOVE_FRIENDSHIP_ERRORS:
                return [];
            default:
                return state;
        }
}

export default friendshipErrorsReducer;