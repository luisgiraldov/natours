import { FC, ReactElement } from "react";
import { Link } from "react-router-dom";
import Styles from "./Button.module.scss";

const Button: FC<{ address: string; cssClasses: string; text: string }> = ({
	address,
	cssClasses,
	text,
}): ReactElement => {
	return (
		<Link to={address} className={`${Styles["btn--basic"]} ${cssClasses}`}>
			{text}
		</Link>
	);
};

export default Button;
