import React from "react";
import ReactDOM from "react-dom";
import Root from "./components/root.jsx"
import configureStore from "./store/store.js"
// import throttle from "lodash.throttle";
// import { saveMyState } from './utils/state_storage_async_util.js';
import { createRoot } from 'react-dom/client';

document.addEventListener("DOMContentLoaded", () => {
	let store;
	if (window.currentUser) {
		// debuggers
		const preloadedState = {
			entities: {
				users: { [window.currentUser.id]: window.currentUser },
			},
			session: {
				// currentUser: window.currentUser,
				id: window.currentUser.id,
			},
			currentUser: window.currentUser,
		
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
	
	//Do not use libaries need to updated first react 18 interferes with react-tool-tip and skips loadscreens
	// const rootContainer = document.getElementById('root');
	// const ROOT = createRoot(rootContainer);
	// ROOT.render(<Root store={store} />);
	
	
	ReactDOM.render(<Root store={store} />, document.getElementById('root'));
})
