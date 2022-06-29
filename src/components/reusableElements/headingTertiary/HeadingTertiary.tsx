import { FC, ReactElement } from "react";
import Styles from "./HeadingTertiary.module.scss";

const HeadingTertiary: FC<{
	title: string;
	paragraph: string;
}> = ({ title, paragraph }): ReactElement => {
	return (
		<>
			<h3 className={`${Styles["heading-tertiary"]}`}>{title}</h3>
			<p className={`${Styles["paragraph"]}`}>{paragraph}</p>
		</>
	);
};

export default HeadingTertiary;
