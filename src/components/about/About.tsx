import { ReactElement } from "react";
import { Link } from "react-router-dom";
import Styles from "./About.module.scss";
import { aboutData } from "../../data/data";
import HeadingSecondary from "../reusableElements/headingSecondary/HeadingSecondary";
import HeadingTertiary from "../reusableElements/headingTertiary/HeadingTertiary";
import nature1 from '../../img/nat-1-large.jpg';
import nature2 from '../../img/nat-2-large.jpg';
import nature3 from '../../img/nat-3-large.jpg';


const About = (): ReactElement => {
	return (
		<section className={`${Styles["section-about"]}`}>
			<div className={`${Styles["section-about__title--container"]}`}>
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
					<Link to="#" className={Styles["btn-text"]}>
						Learn more &rarr;
					</Link>
				</div>
				<div className={`${Styles["about-image-composition"]}`}>
					<div className={`${Styles.composition}`}>
						<img
							src={nature1}
							alt="Mountain and river"
							className={`${Styles["composition__photo"]} ${Styles["composition__photo--p1"]}`}
						/>
						<img
							src={nature2}
							alt="Mountain and road"
							className={`${Styles["composition__photo"]} ${Styles["composition__photo--p2"]}`}
						/>
						<img
							src={nature3}
							alt="Mountain and sunrise"
							className={`${Styles["composition__photo"]} ${Styles["composition__photo--p3"]}`}
						/>
					</div>
				</div>
			</div>
		</section>
	);
};

export default About;
