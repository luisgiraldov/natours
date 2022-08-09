import { ReactElement } from "react";
import Story from "../reusableElements/story/Story";
import HeadingSecondary from "../reusableElements/headingSecondary/HeadingSecondary";
import GhostButton from "../reusableElements/ghostButton/GhostButton";
import Styles from "./Stories.module.scss";
import { storiesData } from "../../data/data";
import user1Pic from "../../img/nat-8.jpg";
import user2Pic from "../../img/nat-9.jpg";
import videoMP4 from "../../img/video.mp4";
import videoWebm from "../../img/video.webm";
import nature from "../../img/nat-1-large.jpg";

const Stories = (): ReactElement => {
	return (
		<section className={Styles["section-stories"]}>
			<div className={Styles["section-stories__bg-video"]}>
				<video
					className={Styles["section-stories__bg-video--content"]}
					autoPlay
					muted
					loop
				>
					<source src={videoMP4} type="video/mp4" />
					<source src={videoWebm} type="video/webm" />
					{/* if video is not supported show the image instead */}
					<img src={nature} alt="Nature" />
				</video>
			</div>
			<div
				className={`${Styles["section-stories__title--container"]} u-center-text`}
			>
				<HeadingSecondary title="We make people genuinely happy" />
			</div>
			<Story data={storiesData[0]} picture={user1Pic} />
			<Story data={storiesData[1]} picture={user2Pic} />
			<div
				className={`${Styles["section-stories__button-container"]} u-center-text`}
			>
				<GhostButton
					address="#"
					text="Read all stories &rarr;"
					linkBtn={true}
				/>
			</div>
		</section>
	);
};

export default Stories;
