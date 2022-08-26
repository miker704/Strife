import { RECEIVE_FRIENDSHIP_ERRORS,REMOVE_FRIENDSHIP_ERRORS } from "../actions/friendship_actions";

const friendshipErrorsReducer = (state = [], actions) => {
        Object.freeze(state);
}

export default friendshipErrorsReducer;