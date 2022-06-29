import { FC, ReactElement } from "react";
import Button from "../button/Button";
import Styles from './FilledButton.module.scss';

const FilledButton: FC<{ address: string, color: string, text: string }> = ({ address, color, text }): ReactElement => {
    return (
        <Button address={address} cssClasses={`${Styles.btn} ${Styles[`btn--${color}`]} ${Styles["btn--animated"]}`} text={text} />
    );
}

export default FilledButton;