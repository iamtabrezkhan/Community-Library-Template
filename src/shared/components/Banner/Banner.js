import React, { Component } from "react";
import Classes from "./Banner.module.css";
import { Link } from "react-router-dom";

const Banner = () => {
	return (
		<div className={`${Classes.dark_overlay}`}>
			<div className={`${Classes.banner}`}>
				<div className={`${Classes.banner_content}`}>
					<h1>Welcome to Community Library</h1>
					<h3>Lend books it's risk free</h3>
					<h3>Borrow books it's cost free</h3>
				</div>
			</div>
		</div>
	);
};

export default Banner;
