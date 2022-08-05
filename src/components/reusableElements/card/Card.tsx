import { FC, ReactElement } from "react";
import FilledButton from "../filledButton/FilledButton";
import Styles from "./Card.module.scss";

interface Details {
	days: string;
	people: string;
	tourGuides: string;
	hotel: string;
	difficulty: string;
}

const Card: FC<{
	color: string;
	cardNumber: string;
	title: string;
	details: Details;
	price: string;
}> = ({ color, cardNumber, title, details, price }): ReactElement => {
	return (
		<div className={`${Styles.card}`}>
			<div
				className={`${Styles["card__side"]} ${Styles["card__side--front"]}`}
			>
				<div
					className={`${Styles["card__picture"]} ${
						Styles[`card__picture--${cardNumber}`]
					}`}
				></div>
				<h4 className={`${Styles["card__heading"]}`}>
					<span
						className={`${Styles["card__heading-span"]} ${
							Styles[`card__heading-span--${cardNumber}`]
						}`}
					>
						{title}
					</span>
				</h4>
				<div className={`${Styles["card__details"]}`}>
					<ul>
						<li>{details.days}</li>
						<li>{details.people}</li>
						<li>{details.tourGuides}</li>
						<li>{details.hotel}</li>
						<li>{details.difficulty}</li>
					</ul>
				</div>
			</div>
			<div
				className={`${Styles["card__side"]} ${
					Styles["card__side--back"]
				} ${Styles[`card__side--back-${color}`]}`}
			>
				<div className={`${Styles["card__cta"]}`}>
					<div className={`${Styles["card__price-box"]}`}>
						<p className={Styles["card__price-only"]}>Only</p>
						<p className={Styles["card__price-value"]}>${price}</p>
						<FilledButton
							address="#"
							color="white"
							text="Book now!"
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Card;
