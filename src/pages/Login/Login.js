import React, { Component } from "react";
import Classes from "./Login.module.css";
import Form from "../../shared/components/Form/Form";
import { connect } from "react-redux";
import { signIn } from "../../actions/auth";
import PropTypes from "prop-types";
import { Redirect } from "react-router-dom";
const Login = ({ props, signIn, isAuthenticated }) => {
	const onLogin = (e, formData) => {
		e.preventDefault();
		signIn(formData);
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
	//Redirect if logged in

	if (isAuthenticated) {
		return <Redirect to="/dashboard" />;
	}
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
Login.propTypes = {
	signIn: PropTypes.func.isRequired,
	isAuthenticated: PropTypes.bool
};

const mapStateToProps = state => ({
	isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { signIn })(Login);
