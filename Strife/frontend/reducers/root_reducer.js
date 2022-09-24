import { combineReducers } from "redux";
import sessionReducer from "./session_reducer";
import EntitiesReducer from "./entities_reducer";
import errorsReducer from "./errors_reducer";
import uiReducer from "./ui_reducer.js";
import currentUserReducer from "./current_user_reducer";

const rootReducer = combineReducers({
    entities: EntitiesReducer,
    session: sessionReducer,
    currentUser: currentUserReducer,
    errors: errorsReducer,
    ui: uiReducer
})

export default rootReducer;
