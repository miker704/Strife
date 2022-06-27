import { combineReducers } from "redux";
import serverReducer from "./server_reducer.js";
import userReducer from "./user_reducer.js";

const EntitiesReducer = combineReducers({
    users: userReducer,
    servers: serverReducer

});

export default EntitiesReducer;