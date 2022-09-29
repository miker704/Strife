import { createStore, applyMiddleware} from "redux";
import thunk from 'redux-thunk';
import rootReducer from "../reducers/root_reducer";
// import logger from "redux-logger";
import {composeWithDevTools} from "@redux-devtools/extension";

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


const middleWares = [thunk];

if (process.env.NODE_ENV !== "production") {
    // must use 'require' (import only allowed at top of file)
    const { logger } = require("redux-logger");
    middleWares.push(logger);
  }


const configureStore = (preLoadedState = {}) => {
    // return createStore(rootReducer, preLoadedState, composeEnhancers(applyMiddleware(thunk, logger)));
    // return createStore(rootReducer, preLoadedState, composeWithDevTools(applyMiddleware(thunk, logger)));
    return createStore(rootReducer, preLoadedState, composeWithDevTools(applyMiddleware(...middleWares)));


}

export default configureStore;