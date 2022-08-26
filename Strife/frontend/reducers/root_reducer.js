import { combineReducers } from "redux";
import sessionReducer from "./session_reducer";
import EntitiesReducer from "./entities_reducer";
import errorsReducer from "./errors_reducer";
import uiReducer from "./ui_reducer.js";

const rootReducer = combineReducers({
    entities: EntitiesReducer,
    session: sessionReducer,
    errors: errorsReducer,
    ui: uiReducer
})

export default rootReducer;
