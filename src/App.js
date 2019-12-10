import React from "react";
import "./App.css";
import Login from "./pages/Login/Login";
import SignUp from "./pages/SignUp/SignUp";
import Navbar from "./shared/components/Navbar/Navbar";
import Landing from "./pages/Landing/Landing";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

let onLogin = () => {
	alert("login clicked");
};
let onSignup = () => {
	alert("sign up clicked");
};

let onFacebookLogin = () => {
	alert("facebook login clicked");
};
let onFacebookSignup = () => {
	alert("facebook sign up clicked");
};

let onGoogleLogin = () => {
	alert("google login clicked");
};
let onGoogleSignup = () => {
	alert("google sign up clicked");
};

function App() {
	return (
		<>
			<Router>
				<div className="main">
					<Navbar />
					<div className="content">
						<Route path="/" exact={true} component={Landing} />
						<Route path="/login" component={Login} />
						<Route path="/signup" component={SignUp} />
					</div>
				</div>
			</Router>
		</>
	);
}

export default App;
