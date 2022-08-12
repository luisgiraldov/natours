import { FC, ReactElement } from "react";
import Styles from "./Navigation.module.scss";

export interface NavComponents {
    headerRef: React.RefObject<HTMLElement>,
    aboutRef: React.RefObject<HTMLElement>,
    featuresRef: React.RefObject<HTMLElement>,
    toursRef: React.RefObject<HTMLElement>,
    storiesRef: React.RefObject<HTMLElement>,
    bookingRef: React.RefObject<HTMLElement>
}

const Navigation: FC<{ pageRefs: NavComponents }> = ({ pageRefs }): ReactElement => {

    const scrollToSection = (elementRef: React.RefObject<HTMLElement>) => {

        if(elementRef && elementRef.current)
        window.scrollTo({
            top: elementRef.current.offsetTop,
            behavior: "smooth"
        })
    };

    return (
        <div className={Styles["navigation-container"]}>
            <input type="checkbox" className={Styles["navigation__checkbox"]} id="navigation-toggle" />
            <label htmlFor="navigation-toggle" className={Styles["navigation__button"]}><span className={Styles["navigation__button-icon"]}>&nbsp;</span></label>
            <div className={Styles["navigation__background"]}>&nbsp;</div>
            <nav className={Styles.navigation}>
                <ul className={Styles["navigation__list"]}>
                    <li className={Styles["navigation__list-item"]} onClick={() => scrollToSection(pageRefs.aboutRef)}><label htmlFor="navigation-toggle">About</label></li>
                    <li className={Styles["navigation__list-item"]} onClick={() => scrollToSection(pageRefs.featuresRef)}><label htmlFor="navigation-toggle">Benefits</label></li>
                    <li className={Styles["navigation__list-item"]} onClick={() => scrollToSection(pageRefs.toursRef)}><label htmlFor="navigation-toggle">Popular Tours</label></li>
                    <li className={Styles["navigation__list-item"]} onClick={() => scrollToSection(pageRefs.storiesRef)}><label htmlFor="navigation-toggle">Stories</label></li>
                    <li className={Styles["navigation__list-item"]} onClick={() => scrollToSection(pageRefs.bookingRef)}><label htmlFor="navigation-toggle">Book Now</label></li>
                    <li className={Styles["navigation__list-item"]} onClick={() => scrollToSection(pageRefs.headerRef)}><label htmlFor="navigation-toggle">Back to top</label></li>
                </ul>
            </nav>
        </div>
    );
};

export default Navigation;