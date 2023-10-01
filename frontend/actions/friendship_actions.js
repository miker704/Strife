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
export const RECEIVE_BLOCKED_USER = "BLOCKED_USER";
export const REMOVE_BLOCKED_USER = "UNBLOCKED_USER";
export const RECEIVE_ALL_FRIENDS_SORTED = "RECEIVE_ALL_FRIENDS_SORTED";

export const receiveAllOnlineFriends = (friendships) => {
    return {
        type: RECEIVE_ALL_ONLINE_FRIENDS,
        friendships
    }
}

export const receiveFriendRequests = (friendships) => {
    return {
        type: RECEIVE_ALL_FRIEND_REQUESTS,
        friendships
    }
}

export const receiveAllBlockedUsers = (friendships) => {
    return {
        type: RECEIVE_ALL_BLOCKED_USERS,
        friendships
    }
}

export const receiveAllFriends = (friendships) => {
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

export const receiveBlockedUser = (friendship) => {
    return {
        type: RECEIVE_BLOCKED_USER,
        friendship
    }
}

export const removeBlockedUser = (friendship) => {
    return {
        type: REMOVE_BLOCKED_USER,
        friendship
    }
}


export const receiveAllFriendsSorted = (friendships) => {
    return {
        type: RECEIVE_ALL_FRIENDS_SORTED,
        friendships
    }
}

export const requestFriendships = () => (dispatch) =>
    FRIENDSHIP_API_UTIL.requestFriendships().then((users) => dispatch(receiveUsers(users)), err => dispatch(receiveFriendshipErrors(err.responseJSON)));

// export const requestFriendships = () => (dispatch) =>
//     FRIENDSHIP_API_UTIL.requestFriendships().then((friendships) =>   dispatch(receiveAllFriends(friendships)), err => dispatch(receiveFriendshipErrors(err.responseJSON)));

export const createFriendship = (account_ids) => (dispatch) =>
    FRIENDSHIP_API_UTIL.createFriendship(account_ids).then((friendship) => {
        dispatch(removeFriendshipErrors());
        return dispatch(receiveFriendship(friendship));
    }, (err) => (dispatch(receiveFriendshipErrors(err.responseJSON))));


export const updateFriendship = (account_ids) => (dispatch) =>
    FRIENDSHIP_API_UTIL.updateFriendship(account_ids).then((friendship) => dispatch(receiveFriendship(friendship)), err => dispatch(receiveFriendshipErrors(err.responseJSON)));

export const deleteFriendship = (account_ids) => (dispatch) =>
    FRIENDSHIP_API_UTIL.deleteFriendship(account_ids).then((friendship) => dispatch(removeFriendship(friendship)), err => dispatch(receiveFriendshipErrors(err.responseJSON)));

export const requestAllOnlineFriends = () => (dispatch) =>
    FRIENDSHIP_API_UTIL.requestAllOnlineFriends().then((onlineFriends) =>
        dispatch(receiveAllOnlineFriends(onlineFriends)), err => dispatch(receiveFriendshipErrors(err.responseJSON)));

export const requestFriendRequests = () => (dispatch) =>
    FRIENDSHIP_API_UTIL.requestFriendRequests().then((friendships) =>
        dispatch(receiveFriendRequests(friendships)), err => dispatch(receiveFriendshipErrors(err.responseJSON)));


export const requestBlockedUsers = () => (dispatch) =>
    FRIENDSHIP_API_UTIL.requestBlockedUsers().then((friendships) =>
        dispatch(receiveAllBlockedUsers(friendships)), err => dispatch(receiveFriendshipErrors(err.responseJSON)));


export const requestAllFriendships = () => (dispatch) =>
    FRIENDSHIP_API_UTIL.requestAllFriendships().then((friendships) =>
        dispatch(receiveAllFriends(friendships)), err => dispatch(receiveFriendshipErrors(err.responseJSON)));




export const blockUser = (account_ids) => (dispatch) =>
    FRIENDSHIP_API_UTIL.blockUser(account_ids).then((friendship) => {
        dispatch(removeFriendshipErrors());
        return dispatch(receiveBlockedUser(friendship));
    }, (err) => (dispatch(receiveFriendshipErrors(err.responseJSON))));


export const unBlockUser = (account_ids) => (dispatch) =>
    FRIENDSHIP_API_UTIL.unBlockUser(account_ids).then((friendship) => {
        dispatch(removeFriendshipErrors());
        return dispatch(removeBlockedUser(friendship));
    }, (err) => (dispatch(receiveFriendshipErrors(err.responseJSON))));


export const fetchAllFriendsSorted = (userId) => (dispatch) =>
    FRIENDSHIP_API_UTIL.fetchAllFriendsSorted(userId).then((friendships) =>
        dispatch(receiveAllFriendsSorted(friendships)), err => dispatch(receiveFriendshipErrors(err.responseJSON)));
