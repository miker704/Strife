
import * as SessionAPIUtil from "../utils/session_api_util.js"


export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";
export const REMOVE_CURRENT_USER = "REMOVE_CURRENT_USER";
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";
export const REMOVE_SESSION_ERRORS = "REMOVE_SESSION_ERRORS";


export const receiveCurrentUser = currentUser => {
    return {
        type: RECEIVE_CURRENT_USER,
        currentUser
    }
}

export const logoutCurrentUser = () => {
    return {
        type: LOGOUT_CURRENT_USER,
    }
}


export const removeCurrentUser = (userId) => {
    return {
        type: REMOVE_CURRENT_USER,
        userId
    }
}

export const receiveSessionErrors = (errors) => {
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
    SessionAPIUtil.signUp(user).then(user => (dispatch(receiveCurrentUser(user))), err => (dispatch(receiveSessionErrors(err.responseJSON))));

export const signInUser = user => (dispatch) =>
    SessionAPIUtil.signIn(user).then((user) => dispatch(receiveCurrentUser(user)), (err) => dispatch(receiveSessionErrors(err.responseJSON)));

export const logoutUser = () => (dispatch) => {
    return SessionAPIUtil.signOut().then(() => dispatch(logoutCurrentUser()));
}


// for updating and removing a user 
export const updateUserInfo = user => (dispatch) =>
    SessionAPIUtil.updateUser(user).then((user) => (dispatch(receiveCurrentUser(user))), (err) => dispatch(receiveSessionErrors(err.responseJSON)));

//delete / ban a user from Strife or a channel/server

export const removeUserAccount = userId => (dispatch) =>
    SessionAPIUtil.removeUser(userId).then(() => { dispatch(logoutCurrentUser()), dispatch(removeCurrentUser(userId)) }, (err) => dispatch(receiveSessionErrors(err.responseJSON)));

//search up a user 
// export const searchUpUser = userId => (dispatch) =>
// SessionAPIUtil.searchUsers()

export const removePhoneNumber = user => (dispatch) =>
    SessionAPIUtil.removePhoneNumber(user).then((user) => (dispatch(receiveCurrentUser(user))), (err) => dispatch(receiveSessionErrors(err.responseJSON)));


export const changePassword = user => (dispatch) =>
    SessionAPIUtil.changePassword(user).then((user) => (dispatch(receiveCurrentUser(user))), (err) => (dispatch(receiveSessionErrors(err.responseJSON))));


// export const changeUserPFP = user => (dispatch)=>
