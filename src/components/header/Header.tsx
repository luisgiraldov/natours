import logo from "../../img/logo-white.png";
import { Link } from "react-router-dom";
import { ReactElement } from "react";
import Styles from "./Header.module.scss";

const Header = (): ReactElement => {
  return (
    <header className={`${Styles.header}`}>
      <div className={`${Styles["header__logo-box"]}`}>
        <img src={logo} alt="logo" className={`${Styles["header__logo"]}`} />
      </div>
      <div className={`${Styles["header__text-box"]}`}>
        <h1 className={`${Styles["heading-primary"]}`}>
          <div className={`${Styles["heading-primary--main"]}`}>outdoors</div>
          <div className={`${Styles["heading-primary--sub"]}`}>
            is where life happens
          </div>
        </h1>
        <Link
          to="#"
          className={`${Styles.btn} ${Styles["btn--white"]} ${Styles["btn--animated"]}`}
        >
          discover our tours
        </Link>
      </div>
    </header>
  );
};

export default Header;
