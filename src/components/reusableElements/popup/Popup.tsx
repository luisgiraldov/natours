import { ReactElement, FC } from "react";
import Styles from "./Popup.module.scss";
import tourPhoto from "../../../img/nat-8.jpg";
import tourPhoto2 from "../../../img/nat-9.jpg";
import HeadingSecondary from "../headingSecondary/HeadingSecondary";
import FilledButton from "../filledButton/FilledButton";

const Popup: FC<{showModal: boolean, handleClick: () => void}> = ({ showModal, handleClick }): ReactElement => {
	return (
		<div className={showModal ? `${Styles.popup} ${Styles["show-modal"]}` : `${Styles.popup}`}>
			<div className={Styles["popup__content"]}>
				<div className={Styles["popup__content--left"]}>
					<img
						src={tourPhoto}
						alt="person in a tour"
						className={Styles["popup__img"]}
					/>
					<img
						src={tourPhoto2}
						alt="person in a tour"
						className={Styles["popup__img"]}
					/>
				</div>
				<div className={Styles["popup__content--right"]}>
					<HeadingSecondary title="Start Booking Now" />
					<h3>Important &ndash; Please read these terms before booking</h3>
					<p className={Styles["popup__text"]}>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit,
						sed do eiusmod tempor incididunt ut labore et dolore
						magna aliqua. Sed sed risus pretium quam. Aliquam sem et
						tortor consequat id. Volutpat odio facilisis mauris sit
						amet massa vitae. Mi bibendum neque egestas congue.
						Placerat orci nulla pellentesque dignissim enim sit.
						Vitae semper quis lectus nulla at volutpat diam ut
						venenatis. Malesuada pellentesque elit eget gravida cum
						sociis natoque penatibus et. Proin fermentum leo vel
						orci porta non pulvinar neque laoreet. Gravida neque
						convallis a cras semper. Molestie at elementum eu
						facilisis sed odio morbi quis. Faucibus vitae aliquet
						nec ullamcorper sit amet risus nullam eget. Nam libero
						justo laoreet sit. Amet massa vitae tortor condimentum
						lacinia quis vel eros donec. Sit amet facilisis magna
						etiam. Imperdiet sed euismod nisi porta.
					</p>
					<FilledButton
						address="#"
						color="blue"
						text="Book now"
						linkBtn={true}
					/>
				</div>
                <button className={Styles["popup__close"]} onClick={handleClick}>X</button>
			</div>
		</div>
	);
};

export default Popup;
