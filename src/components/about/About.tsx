import { ReactElement, forwardRef } from "react";
import Styles from "./About.module.scss";
import { aboutData } from "../../data/data";
import nature1Small from "../../img/nat-1.jpg";
import nature1Large from "../../img/nat-1-large.jpg";
import nature2Small from "../../img/nat-2.jpg";
import nature2Large from "../../img/nat-2-large.jpg";
import nature3Small from "../../img/nat-3.jpg";
import nature3Large from "../../img/nat-3-large.jpg";
import HeadingSecondary from "../reusableElements/headingSecondary/HeadingSecondary";
import HeadingTertiary from "../reusableElements/headingTertiary/HeadingTertiary";
import GhostButton from "../reusableElements/ghostButton/GhostButton";

const About = forwardRef<HTMLElement>((props, ref): ReactElement => {
	return (
		<section className={`${Styles["section-about"]}`} ref={ref}>
			<div
				className={`${Styles["section-about__title--container"]} u-center-text`}
			>
				<HeadingSecondary title="Exciting tours for adventurous people" />
			</div>
			<div className={`${Styles["section-about__content--container"]}`}>
				<div className={`${Styles["about-content"]}`}>
					<HeadingTertiary
						title={aboutData[0].title}
						paragraph={aboutData[0].paragraph}
					/>
					<HeadingTertiary
						title={aboutData[1].title}
						paragraph={aboutData[1].paragraph}
					/>
					{/* &rarr is arrow special character for more go to https://css-tricks.com/snippets/html/glyphs/*/}
					<GhostButton
						address="#"
						text="Learn more &rarr;"
						linkBtn={true}
					/>
				</div>
				<div className={`${Styles["about-image-composition"]}`}>
					<div className={`${Styles.composition}`}>
						{/* Responsive images using width descriptor */}
						<img
							srcSet={`${nature1Small} 300w, ${nature1Large} 1000w`}
							sizes="(max-width: 300px) 30vw, (max-width: 900px) 20vw, 300px"
							alt="Mountain and river"
							className={`${Styles["composition__photo"]} ${Styles["composition__photo--p1"]}`}
							src={nature1Large}
						/>
						<img
							srcSet={`${nature2Small} 300w, ${nature2Large} 1000w`}
							sizes="(max-width: 300px) 30vw, (max-width: 900px) 20vw, 300px"
							alt="Mountain and river"
							className={`${Styles["composition__photo"]} ${Styles["composition__photo--p2"]}`}
							src={nature2Large}
						/>
						<img
							srcSet={`${nature3Small} 300w, ${nature3Large} 1000w`}
							sizes="(max-width: 300px) 30vw, (max-width: 900px) 20vw, 300px"
							alt="Mountain and river"
							className={`${Styles["composition__photo"]} ${Styles["composition__photo--p3"]}`}
							src={nature3Large}
						/>
						{/* <img
							src={nature1Large}
							alt="Mountain and river"
							className={`${Styles["composition__photo"]} ${Styles["composition__photo--p1"]}`}
						/>
						<img
							src={nature2Large}
							alt="Mountain and road"
							className={`${Styles["composition__photo"]} ${Styles["composition__photo--p2"]}`}
						/>
						<img
							src={nature3Large}
							alt="Mountain and sunrise"
							className={`${Styles["composition__photo"]} ${Styles["composition__photo--p3"]}`}
						/> */}
					</div>
				</div>
			</div>
		</section>
	);
});

export default About;
