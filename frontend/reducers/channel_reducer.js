
import { RECEIVE_SERVER, REMOVE_SERVER } from "../actions/server_actions";
import { RECEIVE_CHANNEL, REMOVE_CHANNEL, WEB_SOCKET_RECEIVE_CHANNEL } from "../actions/channel_actions";

//if you leave a server you leave its channels / if a server has no channels
import { RECEIVE_SERVER_MEMBERSHIP, REMOVE_SERVER_MEMBERSHIP } from "../actions/server_membership_actions";
//leave a channel without leaving its server
//add in channelmembership actions
import { RECEIVE_CHANNEL_MEMBERSHIP, REMOVE_CHANNEL_MEMBERSHIP } from "../actions/channel_membership_actions";
import { LOGOUT_CURRENT_USER } from "../actions/session_actions";
const channelReducer = (state = {}, action) => {
    Object.freeze(state);
    let nextState = Object.assign({}, state);
    switch (action.type) {

        case RECEIVE_CHANNEL:
            nextState[action.channelPayload.channel.id] = action.channelPayload.channel;
            return nextState;

        case WEB_SOCKET_RECEIVE_CHANNEL:
            nextState[action.channelPayload.channel.id] = action.channelPayload.channel;
            return nextState;

        case RECEIVE_CHANNEL_MEMBERSHIP:
            nextState[action.channelmembership.channel.id] = action.channelmembership.channel;
            return nextState;

        case RECEIVE_SERVER:

            nextState = action.server.channels ? action.server.channels : {}
            return nextState;

        case RECEIVE_SERVER_MEMBERSHIP:

            nextState = action.servermembership.channels ? action.servermembership.channels : {};
            return nextState;

        case REMOVE_SERVER:
            return {};

        case REMOVE_CHANNEL:
            delete nextState[action.channelPayload];
            return nextState;

        case REMOVE_CHANNEL_MEMBERSHIP:

            delete nextState[action.channelmembershiphash.channel.id];
            return nextState;
        case LOGOUT_CURRENT_USER:
            return {};
        default:
            return state;
    }





}


export default channelReducer;
