import { RECEIVE_DM_SERVER_ERRORS,REMOVE_DM_SERVER_ERRORS } from "../actions/dm_server_actions";



const dmServerErrorsReducer = (state=[], action) => {

    Object.freeze(state);

    switch (action.type){
        case RECEIVE_DM_SERVER_ERRORS:
            return action.errors;
        case REMOVE_DM_SERVER_ERRORS:
            return [];
        default:
            return state;
    }



}

export default dmServerErrorsReducer;