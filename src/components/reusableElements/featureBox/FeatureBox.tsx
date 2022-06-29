import { FC, ReactElement } from "react";
import "../../../icons/icon-font.css";
import Styles from "./FeatureBox.module.scss";
import HeadingTertiary from "../../reusableElements/headingTertiary/HeadingTertiary";

const FeatureBox: FC<{
	title: string;
	paragraph: string;
	iconClass: string;
}> = ({ title, paragraph, iconClass }): ReactElement => {
	return (
		<div className={`${Styles["feature-box"]}`}>
			<i className={`${Styles["feature-box__icon"]} ${iconClass}`}></i>
			<HeadingTertiary
				title={title}
				paragraph={paragraph}
			/>
		</div>
	);
};

export default FeatureBox;
