import React, { Component } from "react";
import Classes from "./Form.module.css";
import { Link } from "react-router-dom";

let NotAMember = props => {
	return (
		<div className={Classes.new}>
			Not a member yet? <Link to="/signup">Sign Up</Link>
		</div>
	);
};
let AlreadyAMember = props => {
	return (
		<div className={Classes.new}>
			Already a member? <Link to="/login">Login</Link>
		</div>
	);
};
let LoginSocialBtns = props => {
	return (
		<div className={Classes.socialBtns}>
			<div
				onClick={props.onFacebookLogin}
				className={`${Classes.btn} ${Classes.facebook}`}
			>
				<div className={Classes.icon}>
					<img src="./assets/images/facebook.png" alt="Facebook" />
				</div>
				<div>Facebook</div>
			</div>
			<div
				onClick={props.onGoogleLogin}
				className={`${Classes.btn} ${Classes.google}`}
			>
				<div className={Classes.icon}>
					<img src="./assets/images/google.png" alt="Facebook" />
				</div>
				<div>Google</div>
			</div>
		</div>
	);
};
let SignupSocialBtns = props => {
	return (
		<div className={Classes.socialBtns}>
			<div
				onClick={props.onFacebookSignup}
				className={`${Classes.btn} ${Classes.facebook}`}
			>
				<div className={Classes.icon}>
					<img src="./assets/images/facebook.png" alt="Facebook" />
				</div>
				<div>Facebook</div>
			</div>
			<div
				onClick={props.onGoogleSignup}
				className={`${Classes.btn} ${Classes.google}`}
			>
				<div className={Classes.icon}>
					<img src="./assets/images/google.png" alt="Facebook" />
				</div>
				<div>Google</div>
			</div>
		</div>
	);
};

const Form = props => {
	return (
		<div className={Classes.main}>
			<div className={Classes.wrapper}>
				<div className={Classes.title}>
					{props.type === "login" ? "Login" : "Sign Up"}
				</div>
				<div className={Classes.form}>
					<form>
						<input type="text" placeholder="Email or Phone" />
						<input type="password" placeholder="Password" />
						<small>
							<a href="#">Forgot password?</a>
						</small>
					</form>
					<div className={Classes.btnContainer}>
						{props.type === "login" ? (
							<button
								onClick={props.onLogin}
								className={`btn ${Classes.loginBtn}`}
							>
								Login
							</button>
						) : (
							<button
								onClick={props.onSignup}
								className={`btn ${Classes.loginBtn}`}
							>
								Sign Up
							</button>
						)}
					</div>
					{props.type === "login" ? <NotAMember /> : <AlreadyAMember />}
				</div>
			</div>
			<div className={Classes.bottom}>
				<div className={Classes.socialTitle}>
					{props.type === "login" ? "Login with" : "Sign up with"}
				</div>
				{props.type === "login" ? (
					<>
						<LoginSocialBtns
							onFacebookLogin={props.onFacebookLogin}
							onGoogleLogin={props.onGoogleLogin}
						/>
					</>
				) : (
					<>
						<SignupSocialBtns
							onFacebookSignup={props.onFacebookSignup}
							onGoogleSignup={props.onGoogleSignup}
						/>
					</>
				)}
			</div>
		</div>
	);
};

export default Form;
