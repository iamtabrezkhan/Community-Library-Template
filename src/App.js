import React, { useEffect } from "react";
import "./App.css";
import Login from "./pages/Login/Login";
import SignUp from "./pages/SignUp/SignUp";
import Navbar from "./shared/components/Navbar/Navbar";
import Landing from "./pages/Landing/Landing";
import Dashboard from "./pages/Dashboard/Dashboard";
import PrivateRoute from "./shared/components/routing/PrivateRoute";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

//Redux
import { Provider } from "react-redux";
import store from "./store";
import { loadUser } from "./actions/auth.js";
import setAuthToken from "./utils/setAuthToken";
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

if (localStorage.token) {
	setAuthToken(localStorage.token);
}

function App() {
	useEffect(() => {
		store.dispatch(loadUser());
	}, []);
	return (
		<Provider store={store}>
			<Router>
				<div className="main">
					<Navbar />
					<div className="content">
						<Route path="/" exact={true} component={Landing} />
						<Route path="/login" component={Login} />
						<Route path="/signup" component={SignUp} />
						<PrivateRoute path="/dashboard" component={Dashboard} />
					</div>
				</div>
			</Router>
		</Provider>
	);
}

export default App;
