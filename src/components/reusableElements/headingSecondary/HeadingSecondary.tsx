import React, { ReactElement } from "react";
import Styles from "./HeadingSecondary.module.scss";
const HeadingSecondary: React.FC<{ title: string }> = ({
	title,
}): ReactElement => {
	return <h2 className={`${Styles["heading-secondary"]}`}>{title}</h2>;
};

export default HeadingSecondary;
