import axios from "axios";
import {
	REGISTER_SUCCESS,
	REGISTER_FAIL,
	LOGIN_SUCCESS,
	LOGIN_FAIL,
	USER_LOADED,
	AUTH_ERROR,
	LOGOUT
} from "./types";
import setAuthToken from "../utils/setAuthToken";

// Sign Up Users

export const register = ({ email, password }) => async dispatch => {
	const config = {
		headers: {
			"Content-Type": "application/json"
		}
	};
	const body = JSON.stringify({ email, password });

	try {
		const res = await axios.post(
			"http://localhost:5000/api/v1/auth/register",
			body,
			config
		);

		let _token = res.data.token;
		dispatch({ type: REGISTER_SUCCESS, payload: res.data });
	} catch (err) {
		dispatch({ type: REGISTER_FAIL });
	}
};

// Sign in Users

export const signIn = ({ email, password }) => async dispatch => {
	const config = {
		headers: {
			"Content-Type": "application/json"
		}
	};
	const body = JSON.stringify({ email, password });

	try {
		const res = await axios.post(
			"http://localhost:5000/api/v1/auth/login",
			body,
			config
		);
		dispatch({ type: LOGIN_SUCCESS, payload: res.data });
	} catch (err) {
		dispatch({ type: LOGIN_FAIL });
	}
};

// Load SignedIn User Details
export const loadUser = () => async dispatch => {
	if (localStorage.token) {
		setAuthToken(localStorage.token);
	}

	try {
		const res = await axios.get("http://localhost:5000/api/v1/auth/me");

		dispatch({
			type: USER_LOADED,
			payload: res.data.data
		});
	} catch (err) {
		dispatch({
			type: AUTH_ERROR
		});
	}
};

//Logout

export const logout = () => async dispatch => {
	dispatch({ type: LOGOUT });
};
