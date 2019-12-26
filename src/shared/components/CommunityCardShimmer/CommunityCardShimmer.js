import React, { Component } from "react";
import Classes from "./CommunityCardShimmer.module.css";

const CommunityCardShimmer = () => {
	return (
		<div className={Classes.main}>
            <div className={`${Classes.mask} ${Classes.middleMask}`}></div>
            <div className={`${Classes.mask} ${Classes.bottomMask}`}></div>
            <div className={`${Classes.mask} ${Classes.bottomMask2}`}></div>
            <div className={`${Classes.mask} ${Classes.middleMask2}`}></div>
            <div className={`${Classes.mask} ${Classes.middleRight}`}></div>
            <div className={`${Classes.mask} ${Classes.middleRight2}`}></div>
            <div className={`${Classes.mask} ${Classes.middleRight3}`}></div>
            <div className={`${Classes.mask} ${Classes.left}`}></div>
            <div className={`${Classes.mask} ${Classes.right}`}></div>
		</div>
	);
};

export default CommunityCardShimmer;
