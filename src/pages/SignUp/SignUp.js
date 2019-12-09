import React, { Component } from "react";
import Classes from "./SignUp.module.css";
import Form from "../../shared/components/Form/Form";

const SignUp = props => {
	const onSignup = () => {
		alert("signup cliked");
	};

	const onFacebookSignup = () => {
		console.log("TEST CLICK");
		window.open(
			"http://localhost:5000/api/v1/passportAuth/auth/facebook",
			"_self"
		);
	};

	const onGoogleSignup = () => {
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
				type="signup"
				onSignup={onSignup}
				onFacebookSignup={onFacebookSignup}
				onGoogleSignup={onGoogleSignup}
			/>
		</div>
	);
};

export default SignUp;
