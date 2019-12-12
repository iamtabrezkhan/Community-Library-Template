import React, { Component } from "react";
import Classes from "./SignUp.module.css";
import Form from "../../shared/components/Form/Form";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { register } from "../../actions/auth";
import PropTypes from "prop-types";

const SignUp = ({ props, register, isAuthenticated }) => {
	const onSignup = (e, formData) => {
		e.preventDefault();
		register(formData);
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
	if (isAuthenticated) {
		return <Redirect to="/dashboard" />;
	}
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
SignUp.propTypes = {
	register: PropTypes.func.isRequired,
	isAuthenticated: PropTypes.bool
};

const mapStateToProps = state => ({
	isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { register })(SignUp);
