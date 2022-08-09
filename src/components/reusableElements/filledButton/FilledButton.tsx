import { FC, ReactElement } from "react";
import Button from "../button/Button";
import Styles from "./FilledButton.module.scss";

const FilledButton: FC<{ address: string; color: string; text: string, linkBtn: boolean }> = ({
	address,
	color,
	text,
	linkBtn
}): ReactElement => {
	return (
		<Button
			address={address}
			cssClasses={`${Styles.btn} ${Styles[`btn--${color}`]} ${
				Styles["btn--animated"]
			}`}
			text={text}
			linkBtn={linkBtn}
		/>
	);
};

export default FilledButton;
