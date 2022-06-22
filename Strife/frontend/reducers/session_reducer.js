import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER } from "../actions/session_actions";

// create a default state 
const _nullSession = {
    currentUser: null
    // id: null
};

const sessionReducer = (state = _nullSession ,action) => {
    Object.freeze(state);
    
    switch(action.type){
        case RECEIVE_CURRENT_USER:
        return Object.assign({},{currentUser: action.user});
        // return Object.assign({},{id: action.user.id});
        // return {id: action.user.id};
        case  LOGOUT_CURRENT_USER:
            return _nullSession;
            default:
                return state;

    }

}


export default sessionReducer;