import React from "react";
import ReactDOM from "react-dom";
import Root from "./components/root.jsx"
import configureStore from "./store/store.js"



document.addEventListener("DOMContentLoaded", ()=>{

	let preloadedState = undefined;
	if (window.currentUser) {
	  preloadedState = {
		session: {
		  currentUser: window.currentUser
		// id: window.currentUser.id
		}
	  };
	}

	const store = configureStore(preloadedState);
	ReactDOM.render(<Root store={store}/>,document.getElementById('root'))
})
