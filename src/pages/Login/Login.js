import React, { Component } from "react";
import Classes from "./Login.module.css";
import Form from "../../shared/components/Form/Form";
import axios from "axios";
const Login = props => {
	const onLogin = () => {
		alert("login cliked!");
	};

	const onFacebookLogin = () => {
		console.log("TEST CLICK");
		window.open(
			"http://localhost:5000/api/v1/passportAuth/auth/facebook",
			"_self"
		);
	};

	const onGoogleLogin = () => {
		console.log("google login cliked!");
		window.open(
			"http://localhost:5000/api/v1/passportAuth/auth/google",
			"_self"
		);
	};

	return (
		<div className={Classes.main}>
			<Form
				{...props}
				type="login"
				onLogin={onLogin}
				onFacebookLogin={onFacebookLogin}
				onGoogleLogin={onGoogleLogin}
			/>
		</div>
	);
};

export default Login;
