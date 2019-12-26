import React, { Component } from "react";
import Classes from "./Landing.module.css";
import { Link } from "react-router-dom";
import Banner from "../../shared/components/Banner/Banner";
import CommunitiesList from "../../shared/components/CommunitiesList/CommunitiesList";
import CommunityCard from '../../shared/components/CommunityCard/CommunityCard';

const communities = [
	{
		name: 'Rishikesh Yoga Retreats',
		id: 1,
		location: 'India',
		members: 10,
		imgSrc: ''
	},
	{
		name: 'Dehradun Wordpress Meetup',
		id: 1,
		location: 'India',
		members: 7,
		imgSrc: ''
	},
	{
		name: 'CannaMeet',
		id: 1,
		location: 'India',
		members: 242,
		imgSrc: ''
	},
	{
		name: 'JS Lovers Community',
		id: 1,
		location: 'India',
		members: 134,
		imgSrc: ''
	}
]

const Landing = () => {
	return (
		<div className={Classes.main}>
			<Banner />
			{/* <CommunitiesList /> */}
			<div className={Classes.communitiesNearYou}>
				<div className={Classes.title}>Communities near you</div>
				<div className={Classes.subTitle}>Join community which suits you</div>
				<div className={Classes.cardsContainer}>
					{
						communities.map(community => <div className={Classes.cardContainer}>
														<CommunityCard community={community} />
													</div>)
					}
				</div>
			</div>
		</div>
	);
};
export default Landing;
