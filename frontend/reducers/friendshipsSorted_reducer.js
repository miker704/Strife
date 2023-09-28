import { LOGOUT_CURRENT_USER, RECEIVE_CURRENT_USER, REMOVE_CURRENT_USER, RECEIVE_USER, RECEIVE_USERS } from "../actions/session_actions.js";
import {
    selectFriendStatus, selectFriendStatusOnline,

    selectAllFriends, selectBlockedUsers, selectFriendRequests
} from "../utils/selectors_api_util.js";
import {
    RECEIVE_FRIENDSHIP,
    REMOVE_FRIENDSHIP,
    RECEIVE_ALL_BLOCKED_USERS,
    RECEIVE_ALL_FRIENDS,
    RECEIVE_ALL_FRIEND_REQUESTS,
    RECEIVE_ALL_ONLINE_FRIENDS,
    RECEIVE_ALL_FRIENDS_SORTED,

} from '../actions/friendship_actions.js';


// this file is redacted as filtering friends on status via a selectors without writing back end code
// specifically just slows down  the app as requesting users and filtering is easier will each
// friend type pulls the same amount of users as request all users but the action causes the db to pull
// all users just like request all users despite if the friendaction would give less so its 
// best to uses request all users then filter as its more dryer and does not permantley modify state 
// (i.e changing from online taB to friendrequests tab basically casuses state.friends 6to only have online friends
// its best to call on action and filter after ) 



const receiveFriends = (state, friendships) => {
    if (!friendships) { return state; }
    let nextState = Object.assign({}, state);

    for (let [id, friendship] of Object.entries(friendships)) {

        nextState[id] = friendship;

    }
    return nextState;
}




const selectOnlineFriends = (state, friendships) => {
    if (!friendships) { return state; }
    let nextState = Object.assign({}, state);

    for (let [id, friendship] of Object.entries(friendships)) {

        if (friendship.online === true && friendship.friend_request_status === 3) {

            nextState[id] = friendship;
        }


    }
    return nextState;
}



//this reducer is an attempt to use async actions to fetch changes to online friends live 
// custom Thunk Function

const friendshipsSortedReducer = (state = {}, action) => {

    Object.freeze(state);
    let nextState = Object.assign({}, state);
    let user;

    switch (action.type) {

        // case RECEIVE_ALL_ONLINE_FRIENDS:
        // return selectOnlineFriends(state, action.friendships);
        // return action.friendships;

        // case RECEIVE_ALL_BLOCKED_USERS:
        //     return action.friendships;

        case RECEIVE_ALL_FRIENDS_SORTED:
            return action.friendships;

        case RECEIVE_ALL_ONLINE_FRIENDS:
            nextState = Object.assign({}, state);
            nextState.online_friends = action.friendships;
            return nextState;
        // case RECEIVE_ALL_FRIEND_REQUESTS:
        //     return action.friendships;

        // case 'RECEIVE_ONLINE_FRIENDS':
        //     return Object.assign({}, state, action.payload);


        // case RECEIVE_FRIENDSHIP:
        //     nextState = Object.assign({}, state);
        //     user = nextState[action.friendship.friend_id];
        //     user.friend_request_status = action.friendship.friend_request_status;
        //     return nextState;



        // case REMOVE_FRIENDSHIP:
        //     nextState = Object.assign({}, state);
        //     user = nextState[action.friendship.friend_id];
        //     user.friend_request_status = 0;
        //     return nextState;
        case LOGOUT_CURRENT_USER:
            return {};

        default:
            return state;
    }

}


export default friendshipsSortedReducer;

