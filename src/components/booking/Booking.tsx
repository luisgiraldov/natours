import { ReactElement } from "react";
import Styles from "./Booking.module.scss";
import HeadingSecondary from "../reusableElements/headingSecondary/HeadingSecondary";
import FilledButton from "../reusableElements/filledButton/FilledButton";

const Booking = ():ReactElement => {
    return(
        <section className={Styles["section-booking"]}>
            <div className={Styles["section-booking__shape--container"]}>
                <div className={Styles["section-booking__form"]}>
                <HeadingSecondary title="Start booking now" />
                    <form action="#" className={Styles.form}>
                        <div className={Styles["form__group"]}>
                            <input type="text" className={Styles["form__input"]} placeholder="Full name" id="name" required />
                            <label htmlFor="name" className={Styles["form__label"]}>Full name</label>
                        </div>

                        <div className={Styles["form__group"]}>
                            <input type="email" className={Styles["form__input"]} placeholder="Email" id="email" required />
                            <label htmlFor="email" className={Styles["form__label"]}>Email</label>
                        </div>

                        <div className={`${Styles["form__group"]} ${Styles["form__group--radio-buttons"]}`}>
                            <div className={Styles["form__radio-group"]}>
                                <input type="radio" className={Styles["form__radio-input"]} id="small" name="tour-size" />
                                <label htmlFor="small" className={Styles["form__radio-label"]}>Small tour group</label>
                            </div>

                            <div className={Styles["form__radio-group"]}>
                                <input type="radio" className={Styles["form__radio-input"]} id="large" name="tour-size" />
                                <label htmlFor="large" className={Styles["form__radio-label"]}>Large tour group</label>
                            </div>
                        </div>
                        <div className={Styles["form__group"]}>
                            <div className={Styles["form__submit-button--container"]}>
                                <FilledButton address="" color="blue" text="Next steps &rarr;" linkBtn={false} />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Booking;