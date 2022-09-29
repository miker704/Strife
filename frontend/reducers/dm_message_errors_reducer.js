import { RECEIVE_DM_MESSAGE_ERRORS, REMOVE_DM_MESSAGE_ERRORS } from "../actions/dm_messages_actions.js";



const dm_MessageErrorsReducer = (state=[], action) => {

    Object.freeze(state);

    switch (action.type){
        case RECEIVE_DM_MESSAGE_ERRORS:
            return action.errors;
        case REMOVE_DM_MESSAGE_ERRORS:
            return [];
        default:
            return state;
    }



}

export default dm_MessageErrorsReducer;