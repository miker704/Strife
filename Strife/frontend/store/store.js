import { createStore, applyMiddleware, compose } from "redux";
import thunk from 'redux-thunk';
import rootReducer from "../reducers/root_reducer";
import logger from "redux-logger";
import {composeWithDevTools} from "@redux-devtools/extension";

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


const configureStore = (preLoadedState = {}) => {
    // return createStore(rootReducer, preLoadedState, composeEnhancers(applyMiddleware(thunk, logger)));
    return createStore(rootReducer, preLoadedState, composeWithDevTools(applyMiddleware(thunk, logger)));

}

export default configureStore;