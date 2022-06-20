import { createStore, applyMiddleware } from "redux";
import thunk from 'redux-thunk';

const configureStore = (preLoadedState = {}) =>{
 return createStore();
}

export default configureStore;