import React, { Component } from "react";
import Classes from "./SignUp.module.css";
import Form from "../../shared/components/Form/Form";

const SignUp = props => {
	const onSignup = () => {
		alert("signup cliked!");
	};

	const onFacebookSignup = () => {
		alert("facebook signup cliked!");
	};

	const onGoogleSignup = () => {
		alert("google signup cliked!");
	};
	return (
		<div className={Classes.main}>
			<Form
				{...props}
				type="signup"
				onSignup={onSignup}
				onFacebookSignup={onFacebookSignup}
				onGoogleSignup={onGoogleSignup}
			/>
		</div>
	);
};

export default SignUp;
