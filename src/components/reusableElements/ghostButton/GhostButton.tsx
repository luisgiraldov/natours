import { FC, ReactElement } from "react";
import Button from "../button/Button";
import Styles from "./GhostButton.module.scss";

const GhostButton: FC<{ address: string; text: string, linkBtn: boolean }> = ({
	address,
	text,
	linkBtn
}): ReactElement => {
	return <Button address={address} cssClasses={`${Styles.btn}`} text={text} linkBtn={linkBtn} />;
};

export default GhostButton;
