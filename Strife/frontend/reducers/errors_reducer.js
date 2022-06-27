//reducer for handling errors across the entire app

import { combineReducers } from "redux";
import serverErrorsReducer from "./server_error_reducer";
import sessionErrorsReducer from "./session_errors_reducer";


const errorsReducer = combineReducers({
    session: sessionErrorsReducer,
    server: serverErrorsReducer
})


export default errorsReducer;