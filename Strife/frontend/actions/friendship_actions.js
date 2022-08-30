import * as FRIENDSHIP_API_UTIL from "../utils/friendship_api_util.js";
import { receiveUsers } from "./session_actions.js";

export const RECEIVE_FRIENDSHIP = 'UPDATE_FRIENDSHIP';
export const REMOVE_FRIENDSHIP = 'REMOVE_FRIENDSHIP';
export const RECEIVE_FRIENDSHIP_ERRORS = "RECEIVE_FRIENDSHIP_ERRORS";
export const REMOVE_FRIENDSHIP_ERRORS = "REMOVE_FRIENDSHIP_ERRORS";
export const RECEIVE_ALL_FRIENDS = "RECEIVE_ALL_FRIENDS";
export const RECEIVE_ALL_FRIEND_REQUESTS = "RECEIVE_ALL_FRIEND_REQUESTS";
export const RECEIVE_ALL_BLOCKED_USERS = "RECEIVE_ALL_BLOCKED_USERS";
export const RECEIVE_ALL_ONLINE_FRIENDS = "RECEIVE_ALL_ONLINE_FRIENDS";


export const receiveAllOnlineFriends = (friendship) => {
    return {
        type: RECEIVE_ALL_ONLINE_FRIENDS,
        friendship
    }
}

export const receiveFriendRequests = (friendship) => {
    return {
        type: RECEIVE_ALL_FRIEND_REQUESTS,
        friendship
    }
}

export const receiveAllBlockedUsers = (friendship) => {
    return {
        type: RECEIVE_ALL_BLOCKED_USERS,
        friendship
    }
}

export const receiveAllFriends = () => {
    return {
        type: RECEIVE_ALL_FRIENDS,
        friendships
    }
}


export const receiveFriendship = (friendship) => {
    return {
        type: RECEIVE_FRIENDSHIP,
        friendship
    }
};

export const removeFriendship = (friendship) => {
    return {
        type: REMOVE_FRIENDSHIP,
        friendship
    }
};
export const receiveFriendshipErrors = (errors) => {
    return {
        type: RECEIVE_FRIENDSHIP_ERRORS,
        errors
    }
}


export const removeFriendshipErrors = () => {
    return {
        type: REMOVE_FRIENDSHIP_ERRORS
    }
}



export const requestFriendships = () => (dispatch) =>
    FRIENDSHIP_API_UTIL.requestFriendships().then((users) => dispatch(receiveUsers(users)), err => dispatch(receiveFriendshipErrors(err.responseJSON)));


export const createFriendship = (account_ids) => (dispatch) =>
    FRIENDSHIP_API_UTIL.createFriendship(account_ids).then((friendship) => (dispatch(receiveFriendship(friendship))), (err) => (dispatch(receiveFriendshipErrors(err.responseJSON))));


export const updateFriendship = (account_ids) => (dispatch) =>
    FRIENDSHIP_API_UTIL.updateFriendship(account_ids).then((friendship) => dispatch(receiveFriendship(friendship)), err => dispatch(receiveFriendshipErrors(err.responseJSON)));

export const deleteFriendship = (account_ids) => (dispatch) =>
    FRIENDSHIP_API_UTIL.deleteFriendship(account_ids).then((friendship) => dispatch(removeFriendship(friendship)), err => dispatch(receiveFriendshipErrors(err.responseJSON)));

export const requestAllOnlineFriends = () => (dispatch) =>
    FRIENDSHIP_API_UTIL.requestAllOnlineFriends().then((onlineFriends) =>
        dispatch(receiveAllOnlineFriends(onlineFriends)), err => dispatch(receiveFriendshipErrors(err.responseJSON)));

export const requestFriendRequests = () => (dispatch) =>
    FRIENDSHIP_API_UTIL.requestFriendRequests().then((friendship) => 
    dispatch(receiveFriendRequests(friendship)), err => dispatch)
export const requestBlockedUsers = () => $.ajax({ url: `/api/friendships/`, method: 'GET' });
export const requestAllFriendships = () => $.ajax({ url: `/api/friendships/`, method: 'GET' });