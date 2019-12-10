import React, { Component } from "react";
import Classes from "./CommunitiesList.module.css";
import { Link } from "react-router-dom";
import CommunityCard from "../CommunityCard/CommunityCard";
const CommunitiesList = () => {
	return (
		<div className={Classes.container}>
			<h1>Communities Near You</h1>
			<h3>Join community which suits you</h3>
			<div className={Classes.list}>
				<CommunityCard />
				<CommunityCard />
				<CommunityCard />
				<CommunityCard />
				<CommunityCard />
				<CommunityCard />
			</div>
		</div>
	);
};

export default CommunitiesList;
