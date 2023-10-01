import { RECEIVE_MESSAGE, REMOVE_MESSAGE } from "../actions/message_actions";
import { RECEIVE_CHANNEL, REMOVE_CHANNEL } from "../actions/channel_actions";
import { RECEIVE_SERVER, REMOVE_SERVER } from "../actions/server_actions";
import { RECEIVE_SERVER_MEMBERSHIP, REMOVE_SERVER_MEMBERSHIP } from "../actions/server_membership_actions";
import { RECEIVE_CHANNEL_MEMBERSHIP, REMOVE_CHANNEL_MEMBERSHIP } from "../actions/channel_membership_actions";
import { LOGOUT_CURRENT_USER } from "../actions/session_actions";

const messageReducer = (state = {}, action) => {

    Object.freeze(state);
    let nextState = Object.assign({}, state);
    switch (action.type) {


        case RECEIVE_MESSAGE:
            nextState[action.message.id] = action.message;
            return nextState

        case REMOVE_MESSAGE:
            delete nextState[action.messageId]
            return nextState;

        //this is where this stuff gets a bit complicated
        // leave a channel ->  messages are gone for user also creating a new channel messgaes
        //should not persist from other channels
        case RECEIVE_CHANNEL:
            //reset the current state of messages if switching channels within differ servers/same servers etc
            nextState = action.channelPayload.messages ? action.channelPayload.messages : {};
            return nextState;


        // case REMOVE_CHANNEL:

            // console.log("current message state is ", state);
            // console.log("current message next state is ", nextState);
            // console.log("current payload ", action.channelPayload);
            // return {};

        case RECEIVE_CHANNEL_MEMBERSHIP:

            nextState = action.channelmembership.messages ? action.channelmembership.messages : {};
            return nextState;

        case REMOVE_CHANNEL_MEMBERSHIP:
            return {};

        //the same applies for servers leave a server those messages in there 
        // will be lost to the user  also if a user creates a new server
        // messages from other servers wont leak into / persist into the new/ other servers 
        // case RECEIVE_SERVER:
        //     nextState = action.server.messages ? action.server.messages : {};
        //     return nextState;

        case REMOVE_SERVER:
            return {};

        case LOGOUT_CURRENT_USER:
            return {};

        default:
            return state;
    }



}

export default messageReducer;