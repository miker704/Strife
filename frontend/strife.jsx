import React from "react";
import ReactDOM from "react-dom";
import Root from "./components/root.jsx"
import configureStore from "./store/store.js"
import throttle from "lodash.throttle";
import {saveMyState} from './utils/state_storage_async_util.js';

document.addEventListener("DOMContentLoaded", () => {
	let store;
	// let preloadedState = undefined;
	if (window.currentUser) {
		const preloadedState = {
			entities: {
				users: { [window.currentUser.id]: window.currentUser },
			},
			session: {
				// currentUser: window.currentUser,
				id: window.currentUser.id,
			},
			currentUser: window.currentUser
		};
		store = configureStore(preloadedState);
		delete window.currentUser;
	}
	else {
		store = configureStore();
	}

	//atttempt to perform an async state save cmmt out as it is not used/ no current need for it yet
	// store.subscribe(throttle(()=>{
	// 	console.log("Save my state is syncing up");
	// 	saveMyState({
	// 		entities: store.getState().entities,
	// 		session: store.getState().session,
	// 		currentUser: store.getState().currentUser
	// 	});
	// }, 1000));





	window.getState = store.getState;
	window.dispatch = store.dispatch;
	ReactDOM.render(<Root store={store} />, document.getElementById('root'))
})
