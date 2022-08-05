import { ReactElement } from "react";
import Styles from "./Tours.module.scss";
import HeadingSecondary from "../reusableElements/headingSecondary/HeadingSecondary";
import Card from "../reusableElements/card/Card";
import { toursData } from "../../data/data";
import FilledButton from "../reusableElements/filledButton/FilledButton";

const Tours = (): ReactElement => {
	return (
		<section className={`${Styles["section-tours"]}`}>
			<div
				className={`${Styles["section-tours__title--container"]} u-center-text`}
			>
				<HeadingSecondary title="Most popular tours" />
			</div>
			<div className={`${Styles["section-tours__content--container"]}`}>
				<Card
					color="primary"
					cardNumber="1"
					title={toursData[0].title}
					details={toursData[0].details}
					price="297"
				/>
				<Card
					color="tertiary"
					cardNumber="2"
					title={toursData[1].title}
					details={toursData[1].details}
					price="497"
				/>
				<Card
					color="secondary"
					cardNumber="3"
					title={toursData[2].title}
					details={toursData[2].details}
					price="897"
				/>
			</div>
			<div className={Styles["section-tours--button"]}>
				<FilledButton
					address="#"
					color="blue"
					text="Discover our tours"
				/>
			</div>
		</section>
	);
};

export default Tours;
