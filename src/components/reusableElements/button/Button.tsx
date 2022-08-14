import { FC, ReactElement } from "react";
import { Link } from "react-router-dom";
import Styles from "./Button.module.scss";

export interface ButtonCallbackType {
	(): void
}

const Button: FC<{
	address: string;
	cssClasses: string;
	text: string;
	linkBtn: boolean;
	onClick?: ButtonCallbackType
}> = ({ address, cssClasses, text, linkBtn, onClick = undefined }): ReactElement => {
	if (linkBtn) {
		return (
			<Link
				to={address}
				className={`${Styles["btn--basic"]} ${cssClasses}`}
			>
				{text}
			</Link>
		);
	}

	if(onClick !== undefined) {
		return (
			<button className={`${Styles["btn--basic"]} ${cssClasses}`} onClick={onClick}>
				{text}
			</button>
		);
	}

	return (
		<button className={`${Styles["btn--basic"]} ${cssClasses}`}>
			{text}
		</button>
	);
};

export default Button;
