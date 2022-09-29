import { combineReducers } from "redux";
import sessionReducer from "./session_reducer";
import EntitiesReducer from "./entities_reducer";
import errorsReducer from "./errors_reducer";
import uiReducer from "./ui_reducer.js";
import currentUserReducer from "./current_user_reducer";
import systemUtilReducer from "./system_util_reducer";
import exploreServersReducer from "./explore_servers_reducer";

const rootReducer = combineReducers({
    entities: EntitiesReducer,
    session: sessionReducer,
    currentUser: currentUserReducer,
    systemUtils: systemUtilReducer,
    unExploredServers: exploreServersReducer,
    errors: errorsReducer,
    ui: uiReducer
})

export default rootReducer;
