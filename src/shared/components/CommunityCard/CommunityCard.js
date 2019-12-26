import React from "react";
import Classes from "./CommunityCard.module.css";
import { Link } from "react-router-dom";

const CommunityCard = ({community}) => {

	const joinClicked = () => {
		alert("Join button clicked");
	};

	return (
		<div className={Classes.main}>
			<div className={Classes.img} style={
				{
					backgroundImage: community.imgSrc ? `url(${community.imgSrc})` : 'linear-gradient(45deg, var(--color-light-purple), var(--color-blue))'
				}
			}>
				{
					!community.imgSrc ? <div className={Classes.dummyImg}>{community.name[0].toUpperCase()}{community.name[1].toUpperCase()}</div> : null
				}
			</div>
			<div className={Classes.body}>
				<div className={Classes.name}>
					{community.name}
				</div>
				<div className={Classes.locationInfo}>
					<div className={Classes.icon}>
						<i class="fa fa-map-marker" aria-hidden="true"></i>
					</div>
					<div className={Classes.location}>
						{community.location}
					</div>
				</div>
				<div className={Classes.members}>
					<div>{community.members} members</div>
					<button className={Classes.joinBtn}>Join</button>
				</div>
			</div>
		</div>
	);
};

export default CommunityCard;
