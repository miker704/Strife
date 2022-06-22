//reducer for handling errors across the entire app

import { combineReducers } from "redux";
import sessionErrorsReducer from "./session_errors_reducer";


const errorsReducer = combineReducers({
    sessionError: sessionErrorsReducer
})


export default errorsReducer;