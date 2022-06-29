import { FC, ReactElement } from "react";
import Button from "../button/Button";
import Styles from "./GhostButton.module.scss";

const GhostButton: FC<{ address: string; text: string }> = ({
	address,
	text,
}): ReactElement => {
	return <Button address={address} cssClasses={`${Styles.btn}`} text={text} />;
};

export default GhostButton;
