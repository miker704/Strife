
import { combineReducers } from "redux";
import sessionReducer from "./session_reducer";
import EntitiesReducer from "./entities_reducer";


const rootReducer = combineReducers({
    // entities: EntitiesReducer,
    session: sessionReducer
})

export default rootReducer;
