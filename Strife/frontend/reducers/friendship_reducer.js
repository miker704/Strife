import { LOGOUT_CURRENT_USER, RECEIVE_CURRENT_USER, REMOVE_CURRENT_USER, RECEIVE_USER, RECEIVE_USERS } from "../actions/session_actions.js";

import {
    RECEIVE_FRIENDSHIP,
    REMOVE_FRIENDSHIP,
    RECEIVE_ALL_BLOCKED_USERS,
    RECEIVE_ALL_FRIENDS,
    RECEIVE_ALL_FRIEND_REQUESTS,
    RECEIVE_ALL_ONLINE_FRIENDS,

} from '../actions/friendship_actions.js';


//this reducer is an attempt to use async actions to fetch changes to online friends live 
// custom Thunk Function

const friendshipReducer = (state = {}, action) => {

    Object.freeze(state);
    let newState;

    switch (action.type) {




        case 'RECEIVE_ONLINE_FRIENDS':
            return Object.assign({}, state, action.payload);

        default:
            return state;
    }

}


export default friendshipReducer;


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