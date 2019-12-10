import React from "react";
import Classes from "./CommunityCard.module.css";
import { Link } from "react-router-dom";
const CommunityCard = props => {
	return (
		<div className={Classes.card}>
			<h1>Community Name</h1>
			<h2>Location</h2>
			<div>
				<p>No of Members</p>
				<a>Join</a>
			</div>
		</div>
	);
};

export default CommunityCard;
