import { ReactElement, forwardRef, useState } from "react";
import { createPortal } from "react-dom";
import Styles from "./Tours.module.scss";
import HeadingSecondary from "../reusableElements/headingSecondary/HeadingSecondary";
import Card from "../reusableElements/card/Card";
import { toursData } from "../../data/data";
import FilledButton from "../reusableElements/filledButton/FilledButton";
import Popup from "../../components/reusableElements/popup/Popup";
 
const Tours = forwardRef<HTMLElement>((props, ref): ReactElement => {
	const [showModal, setShowModal] = useState(false);

	const handleClick = (): void => {
		setShowModal(!showModal);
	}

	return (
		<>
			{ createPortal(<Popup showModal={showModal} handleClick={handleClick} />, document.getElementById("overlay-root")!) }
			<section className={`${Styles["section-tours"]}`} ref={ref}>
				<div
					className={`${Styles["section-tours__title--container"]} u-center-text`}
				>
					<HeadingSecondary title="Most popular tours" />
				</div>
				<div
					className={`${Styles["section-tours__content--container"]}`}
				>
					<Card
						color="primary"
						cardNumber="1"
						title={toursData[0].title}
						details={toursData[0].details}
						price="297"
						onClick={handleClick}
					/>
					<Card
						color="tertiary"
						cardNumber="2"
						title={toursData[1].title}
						details={toursData[1].details}
						price="497"
						onClick={handleClick}
					/>
					<Card
						color="secondary"
						cardNumber="3"
						title={toursData[2].title}
						details={toursData[2].details}
						price="897"
						onClick={handleClick}
					/>
				</div>
				<div className={Styles["section-tours--button"]}>
					<FilledButton
						address="#"
						color="blue"
						text="Discover our tours"
						linkBtn={true}
					/>
				</div>
			</section>
		</>
	);
});

export default Tours;
