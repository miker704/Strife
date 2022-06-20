import React from "react";
import ReactDom from "react-dom";
import Root from "./components/root.jsx"
import configureStore from "./store/store.js"



document.addEventListener("DOMContentLoaded", ()=>{
	const store = configureStore();

	ReactDom.render(
		<Root store={store}/>,
		document.getElementById("root")
	);
})
