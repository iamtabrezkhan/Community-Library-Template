import React, { Component } from "react";
import Classes from "./CommunitiesList.module.css";
import { Link } from "react-router-dom";
import CommunityCard from "../CommunityCard/CommunityCard";
const CommunitiesList = () => {
	// let data = [{ name: "Community1", location: "Hyderabad", members: 10 }, { name: "Community1", location: "Hyderabad", members: 10 }, { name: "Community1", location: "Hyderabad", members: 10 }];
	// let CommunityCardArray = data.map((elem) => {
	// 	return <Community details={elem}/>
	// })
	// const createCommunityCard
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
