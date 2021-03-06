import React from "react";
import ReactDOM from "react-dom";
import Root from "./components/root.jsx"
import configureStore from "./store/store.js"



document.addEventListener("DOMContentLoaded", ()=>{
	let store;
	let preloadedState = undefined;
	if (window.currentUser) {
	  preloadedState = {
		entities:{
			users: {[window.currentUser.id]: window.currentUser}
		},
		session: {
		//   currentUser: window.currentUser
		id: window.currentUser.id
		}
	  };
	  store = configureStore(preloadedState);
	  delete window.currentUser;
	}
	else{
		store = configureStore();
	}
	window.getState = store.getState;
	window.dispatch = store.dispatch;
	// store = configureStore(preloadedState);
	ReactDOM.render(<Root store={store}/>,document.getElementById('root'))
})
