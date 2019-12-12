import React from "react";
import Classes from "./CommunityCard.module.css";
import { Link } from "react-router-dom";
const CommunityCard = props => {
	const joinClicked = () => {
		alert("Join button clicked");
	};
	return (
		<div className={Classes.card}>
			<h1>Community Name Community egre erg</h1>
			<h2>
				<i className="fa fa-map-marker" aria-hidden="true"></i>
				<span> </span>Location Location Location
			</h2>
			<div className={Classes.members}>
				<p> 8 Members</p>
				<button onClick={joinClicked}>Join</button>
			</div>
		</div>
	);
};

export default CommunityCard;
