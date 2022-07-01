//reducer for handling errors across the entire app

import { combineReducers } from "redux";
import serverErrorsReducer from "./server_error_reducer";
import sessionErrorsReducer from "./session_errors_reducer";
import channelErrorsReducer from "./channel_errors_reducer";
import messageErrorsReducer from "./message_errors_reducer";
import dm_MessageErrorsReducer from "./dm_message_errors_reducer";
import dmServerErrorsReducer from "./dm_server_errors_reducer";

const errorsReducer = combineReducers({
    session: sessionErrorsReducer,
    server: serverErrorsReducer,
    channel: channelErrorsReducer,
    message: messageErrorsReducer,
    dmMessage: dm_MessageErrorsReducer,
    dmServer: dmServerErrorsReducer
})


export default errorsReducer;