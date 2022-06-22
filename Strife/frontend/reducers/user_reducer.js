import { LOGOUT_CURRENT_USER,RECEIVE_CURRENT_USER, REMOVE_CURRENT_USER } from "../actions/session_actions";

const userReducer = (state={},action) => {

    Object.freeze(state);

    switch(action.type){
        case RECEIVE_CURRENT_USER:
        return {currentUser : action.user};
        case REMOVE_CURRENT_USER:
            return {};
        case LOGOUT_CURRENT_USER:
            return {} ;
        default:
            return state;
    }

}


export default userReducer;