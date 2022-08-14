import { FC, ReactElement } from "react";
import Button from "../button/Button";
import Styles from "./FilledButton.module.scss";
import { ButtonCallbackType } from "../button/Button";

const FilledButton: FC<{ address: string; color: string; text: string, linkBtn: boolean, onClick?: ButtonCallbackType }> = ({
	address,
	color,
	text,
	linkBtn,
	onClick = undefined  
}): ReactElement => {
	return (
		<Button
			address={address}
			cssClasses={`${Styles.btn} ${Styles[`btn--${color}`]} ${
				Styles["btn--animated"]
			}`}
			text={text}
			linkBtn={linkBtn}
			onClick={onClick}
		/>
	);
};

export default FilledButton;
