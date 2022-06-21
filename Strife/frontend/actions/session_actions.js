import * as SessionAPIUtil from "../utils/session_api_util.js"


 export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
 export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";
 export const REMOVE_CURRENT_USER  = "REMOVE_CURRENT_USER";
 export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";
 export const REMOVE_SESSION_ERRORS = "REMOVE_SESSION_ERRORS";


 export const receiveCurrentUser = user => {
    return{
        type: RECEIVE_CURRENT_USER,
        user
    }
 }

 export const logoutCurrentUser  = () => {
    return{
        type: LOGOUT_CURRENT_USER,
    }
 }


export const removeCurrentUser = (userId) => {
    return {
            type: REMOVE_CURRENT_USER,
            userId
    }
}

export const receiveSessionErrors =  (errors) => {
    return {
        type: RECEIVE_SESSION_ERRORS,
        errors
    }
}


export const removeSessionErrors = () => {
    return {
        type: REMOVE_SESSION_ERRORS
    }
}



 //ajax dispatch

 export const signUpUser = user => (dispatch) =>
 SessionAPIUtil.signUp(user).then( (user) => dispatch(receiveCurrentUser(user)));
 export const signInUser = user => (dispatch) =>
 SessionAPIUtil.signIn(user).then( (user) => dispatch(receiveCurrentUser(user)));

 export const logoutUser = ()=> (dispatch) =>
 SessionAPIUtil.signOut().then( () => dispatch(logoutCurrentUser()));






 