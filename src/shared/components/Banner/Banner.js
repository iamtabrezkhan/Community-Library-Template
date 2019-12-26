import React, { Component } from "react";
import Classes from "./Banner.module.css";
import { Link } from "react-router-dom";

const Banner = () => {
	return (
		<div className={Classes.main}>
			<h1>Welcome to Community Library</h1>
			<h3>Lend books it's risk free</h3>
			<h3>Borrow books it's cost free</h3>
			<button>Get Started</button>
		</div>
	);
};

export default Banner;
