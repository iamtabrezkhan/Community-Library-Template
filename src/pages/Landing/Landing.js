import React, { Component } from "react";
import Classes from "./Landing.module.css";
import { Link } from "react-router-dom";
import Banner from "../../shared/components/Banner/Banner";
import CommunitiesList from "../../shared/components/CommunitiesList/CommunitiesList";
const Landing = () => {
	return (
		<div>
			<Banner />
			<CommunitiesList />
		</div>
	);
};
export default Landing;
