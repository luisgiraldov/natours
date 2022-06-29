import { ReactElement } from "react";
import Styles from "./Features.module.scss";
import FeatureBox from "../reusableElements/featureBox/FeatureBox";
import { featuresData } from "../../data/data";

const Features = (): ReactElement => {
	return (
		<section className={`${Styles["section-features"]}`}>
			<div
				className={`${Styles["section-features__features-container"]}`}
			>
				<FeatureBox
					title={featuresData[0].title}
					paragraph={featuresData[0].paragraph}
					iconClass="icon-basic-world"
				/>
				<FeatureBox
					title={featuresData[1].title}
					paragraph={featuresData[1].paragraph}
					iconClass="icon-basic-compass"
				/>
				<FeatureBox
					title={featuresData[2].title}
					paragraph={featuresData[2].paragraph}
					iconClass="icon-basic-map"
				/>
				<FeatureBox
					title={featuresData[3].title}
					paragraph={featuresData[3].paragraph}
					iconClass="icon-basic-heart"
				/>
			</div>
		</section>
	);
};

export default Features;
