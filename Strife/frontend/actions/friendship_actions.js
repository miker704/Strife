import * as FRIENDSHIP_API_UTIL from "../utils/friendship_api_util.js";




export const RECEIVE_FRIENDSHIP = 'UPDATE_FRIENDSHIP';
export const REMOVE_FRIENDSHIP = 'REMOVE_FRIENDSHIP';

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

export const requestFriendships = () => (dispatch) => 
FRIENDSHIP_API_UTIL.requestFriendships().then((users) => dispatch(receiveUsers(users)))


export const createFriendship = (account_ids) => (dispatch) => 
FRIENDSHIP_API_UTIL.createFriendship(account_ids).then( (friendship) => dispatch(receiveFriendship(friendship)))


// export const updateFriendship = (account_ids) => (dispatch) => 
//     FRIENDSHIP_API_UTIL.updateFriendship(account_ids).then((friendship) => dispatch(receiveFriendship(friendship)))

// export const deleteFriendship = (account_ids) => (dispatch) => 
    // FRIENDSHIP_API_UTIL.deleteFriendship(account_ids).then((friendship) => dispatch(removeFriendship(friendship)))