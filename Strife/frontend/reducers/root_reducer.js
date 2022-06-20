
import { combineReducers } from "redux";
import sessionReducer from "./session_reducer";
const rootReducer = () => {
session: sessionReducer
}

export default rootReducer;
