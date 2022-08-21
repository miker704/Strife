import { combineReducers } from "redux";
import serverReducer from "./server_reducer.js";
import userReducer from "./user_reducer.js";
import channelReducer from "./channel_reducer.js";
import messageReducer from "./message_reducer.js";
import dmServerReducer from "./dm_server_reducer.js";
import dmMessageReducer from "./dm_message_reducer.js";
import userSearchReducer from "./user_search_reducer.js";

const EntitiesReducer = combineReducers({
    users: userReducer,
    servers: serverReducer,
    channels: channelReducer,
    messages: messageReducer,
    dmServers: dmServerReducer,
    dmMessages: dmMessageReducer,
    userSearch: userSearchReducer

});

export default EntitiesReducer;