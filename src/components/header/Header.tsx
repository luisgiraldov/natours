import { ReactElement, forwardRef } from "react";
import Styles from "./Header.module.scss";
import logo from "../../img/logo-white.png";
import FilledButton from "../reusableElements/filledButton/FilledButton";

// we use forwardRef to send the ref element to app and connect to the useRef
const Header = forwardRef<HTMLElement>((props, ref): ReactElement => {
	return (
		<header className={`${Styles.header}`} ref={ref}>
			<div className={`${Styles["header__logo-box"]}`}>
				<img
					src={logo}
					alt="logo"
					className={`${Styles["header__logo"]}`}
				/>
			</div>
			<div className={`${Styles["header__text-box"]}`}>
				<h1 className={`${Styles["heading-primary"]}`}>
					<div className={`${Styles["heading-primary--main"]}`}>
						Outdoors
					</div>
					<div className={`${Styles["heading-primary--sub"]}`}>
						is where life happens
					</div>
				</h1>
				<FilledButton
					address="#"
					color="white"
					text="Discover our tours"
					linkBtn={true}
				/>
			</div>
		</header>
	);
});

export default Header;
