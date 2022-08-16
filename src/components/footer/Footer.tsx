import { ReactElement } from "react";
import Styles from "./Footer.module.scss";
import logo1xSmall from "../../img/logo-green-small-1x.png";
import logo2xSmall from "../../img/logo-green-small-2x.png";
import logo1x from "../../img/logo-green-1x.png";
import logo2x from "../../img/logo-green-2x.png";
import { Link } from "react-router-dom";

const Footer = (): ReactElement => {
	return (
		<footer className={Styles.footer}>
			<div className={Styles["footer__logo-box"]}>
				{/* Responsive image (Art direction and density switching) */}
				<picture className={Styles["footer__logo"]}>
					<source srcSet={`${logo1xSmall} 1x, ${logo2xSmall} 2x`} media="(max-width: 768px)"></source>
				</picture>
				<img
					srcSet={`${logo1x} 1x, ${logo2x} 2x`}
					alt="Natours' logo"
					src={logo2x}
				/>
			</div>
			<div className={Styles["footer__content"]}>
				<div className={Styles["footer__navigation"]}>
					{/* shortcut */}
					{/* ul.footer__list>(li.footer__list-item>Link.footer__link)*5 */}
					<ul className={Styles["footer__list"]}>
						<li className={Styles["footer__list-item"]}>
							<Link to="#" className={Styles["footer__link"]}>
								Company
							</Link>
						</li>
						<li className={Styles["footer__list-item"]}>
							<Link to="#" className={Styles["footer__link"]}>
								Contact Us
							</Link>
						</li>
						<li className={Styles["footer__list-item"]}>
							<Link to="#" className={Styles["footer__link"]}>
								Careers
							</Link>
						</li>
						<li className={Styles["footer__list-item"]}>
							<Link to="#" className={Styles["footer__link"]}>
								Privacy Policy
							</Link>
						</li>
						<li className={Styles["footer__list-item"]}>
							<Link to="#" className={Styles["footer__link"]}>
								Terms
							</Link>
						</li>
					</ul>
				</div>
				<div className={Styles["footer__copyright"]}>
					<p className={Styles["copyright-text"]}>
						Built by{" "}
						<a
							href="https://luisgiraldo.netlify.app/"
							target="_blank"
							rel="noopener noreferrer"
							className={Styles["footer__link"]}
						>
							Luis Giraldo
						</a>{" "}
						using React on the Front-end, and Node/Express on the
						Back-end. Website designed by{" "}
						<a
							href="https://codingheroes.io/"
							target="_blank"
							rel="noopener noreferrer"
							className={Styles["footer__link"]}
						>
							Jonas schmedtmann
						</a>
					</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
