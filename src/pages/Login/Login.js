import React, { Component } from "react";
import Classes from "./Login.module.css";
import Form from "../../shared/components/Form/Form";
const Login = props => {
	const onLogin = () => {
		alert("login cliked!");
	};

	const onFacebookLogin = () => {
		alert("facebook login cliked!");
	};

	const onGoogleLogin = () => {
		alert("google login cliked!");
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
