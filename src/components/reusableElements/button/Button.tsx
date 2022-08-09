import { FC, ReactElement } from "react";
import { Link } from "react-router-dom";
import Styles from "./Button.module.scss";

const Button: FC<{ address: string; cssClasses: string; text: string, linkBtn: boolean}> = ({
	address,
	cssClasses,
	text,
	linkBtn
}): ReactElement => {
	if (linkBtn) {
		return (
			<Link to={address} className={`${Styles["btn--basic"]} ${cssClasses}`}>
				{text}
			</Link>
		);
	}
	
	return (
		<button className={`${Styles["btn--basic"]} ${cssClasses}`}>
			{text}
		</button>
	);
};

export default Button;
