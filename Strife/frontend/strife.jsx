import React from "react";
import ReactDom from "react-dom";
import Root from "./components/root.jsx"
import configureStore from "./store/store.js"



document.addEventListener("DOMContentLoaded", ()=>{

	let preloadedState = undefined;
	if (window.currentUser) {
	  preloadedState = {
		session: {
		  currentUser: window.currentUser
		}
	  };
	}

	const store = configureStore(preloadedState);
	ReactDom.render(
		<Root store={store}/>,
		document.getElementById("root")
	);
})
