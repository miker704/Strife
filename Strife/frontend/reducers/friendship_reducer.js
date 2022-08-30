import { LOGOUT_CURRENT_USER, RECEIVE_CURRENT_USER, REMOVE_CURRENT_USER, RECEIVE_USER, RECEIVE_USERS } from "../actions/session_actions.js";
import { selectFriendStatus, selectFriendStatusOnline, 
    selectOnlineFriends, 
    selectAllFriends, selectBlockedUsers, selectFriendRequests} from "../utils/selectors_api_util.js";
import {
    RECEIVE_FRIENDSHIP,
    REMOVE_FRIENDSHIP,
    RECEIVE_ALL_BLOCKED_USERS,
    RECEIVE_ALL_FRIENDS,
    RECEIVE_ALL_FRIEND_REQUESTS,
    RECEIVE_ALL_ONLINE_FRIENDS,

} from '../actions/friendship_actions.js';






const receiveFriends = (state, friendships, online, status) => {
    if (!friendships) { return state; }
    let nextState = Object.assign({}, state);

    for (let [id, friendship] of Object.entries(friendships)) {

        nextState[id] = friendship;

    }
    return nextState;
}








//this reducer is an attempt to use async actions to fetch changes to online friends live 
// custom Thunk Function

const friendshipReducer = (state = {}, action) => {

    Object.freeze(state);
    let nextState = Object.assign({}, state);


    switch (action.type) {

        case RECEIVE_ALL_ONLINE_FRIENDS:
            let friends = receiveFriends(state,action.friendships);
            onlineFriends = selectOnlineFriends(state)
            return action.friendships;

        case RECEIVE_ALL_BLOCKED_USERS:
            return action.friendships;

        case RECEIVE_ALL_FRIENDS:
            return action.friendships;

        case RECEIVE_ALL_FRIEND_REQUESTS:
            return action.friendships;

        // case 'RECEIVE_ONLINE_FRIENDS':
        //     return Object.assign({}, state, action.payload);

        default:
            return state;
    }

}


export default friendshipReducer;



//THUNK ASYC FUNCTION

export async function grabLiveUsers (dispatch, getState) {

    const response = await fetch('api/friendships').then((res) => res.json());


    let Friends_Online = response;
    for (let i in Friends_Online) {

        if (Friends_Online[i].online === true && Friends_Online[i].friend_request_status === 3) {
            continue;
        }
        else {
            delete Friends_Online[i];
        }
    }

    dispatch({ type: 'RECEIVE_ONLINE_FRIENDS', payload: Friends_Online })
}