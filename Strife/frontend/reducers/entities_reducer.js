import { combineReducers } from "redux";
import serverReducer from "./server_reducer.js";
import userReducer from "./user_reducer.js";
import channelReducer from "./channel_reducer.js";

const EntitiesReducer = combineReducers({
    users: userReducer,
    servers: serverReducer,
    channels: channelReducer

});

export default EntitiesReducer;