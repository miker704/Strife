import { RECEIVE_SERVER_ERRORS, REMOVE_SERVER_ERRORS } from "../actions/server_actions";


const serverErrorsReducer = (state=[], action) => {

    Object.freeze(state);

    switch (action.type){
        case RECEIVE_SERVER_ERRORS:
            return action.errors;
        case REMOVE_SERVER_ERRORS:
            return [];
        default:
            return state;
    }



}

export default serverErrorsReducer;