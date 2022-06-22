import { combineReducers } from "redux";
import userReducer from "./user_reducer.js";

const EntitiesReducer = combineReducers({
    user: userReducer,

});

export default EntitiesReducer;