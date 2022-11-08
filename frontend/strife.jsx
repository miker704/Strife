import React from "react";
import ReactDOM from "react-dom";
import Root from "./components/root.jsx"
import configureStore from "./store/store.js"
import throttle from "lodash.throttle";
import { saveMyState } from './utils/state_storage_async_util.js';

document.addEventListener("DOMContentLoaded", () => {
	let store;
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


	// 	saveMyState({
	// 		entities: store.getState().entities,
	// 		session: store.getState().session,
	// 		currentUser: store.getState().currentUser,
	// 	});
	// 	console.log('perform resync to core');
	// 	App.StrifeCore.perform('track_HeartBeat')

	// }, 1000));



	window.getState = store.getState;
	window.dispatch = store.dispatch;
	ReactDOM.render(<Root store={store} />, document.getElementById('root'))
})
