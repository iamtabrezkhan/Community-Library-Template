import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
	return (
		<div>
			<h1>Community Library</h1>
			<a href="//localhost:5000/api/v1/passportAuth/auth/facebook">
				Facebook Login
			</a>
		</div>
	);
}

export default App;
