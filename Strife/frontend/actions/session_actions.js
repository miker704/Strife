import * as SessionAPIUtil from "../utils/session_api_util.js"


 export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
 export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";


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

 //ajax dispatch

 export const signUpUser = user => (dispatch) =>
 SessionAPIUtil.signUp(user).then( (user) => dispatch(receiveCurrentUser(user)));
 export const signInUser = user => (dispatch) =>
 SessionAPIUtil.signIn(user).then( (user) => dispatch(receiveCurrentUser(user)));

 export const logoutUser = ()=> (dispatch) =>
 SessionAPIUtil.signOut().then( () => dispatch(logoutCurrentUser()));
