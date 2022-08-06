import { FC, ReactElement } from "react";
import Styles from "./Story.module.scss";
import HeadingTertiary from "../headingTertiary/HeadingTertiary";

interface StoryData {
    id: number,
    author: string,
    title: string,
    text: string
}

const Story: FC<{data: StoryData, picture: string}> = ({ data, picture }): ReactElement => {
    return (
        <div className={Styles["story"]}>
            <figure className={Styles["story__shape"]}>
                <img src={picture} alt="Pictures on a tour" className={Styles["story__img"]} />
                <figcaption className={Styles["story__caption"]}>{data.author}</figcaption>
            </figure>
            <div className={Styles["story__text"]}>
                <HeadingTertiary title={data.title} paragraph={data.text} />
            </div>
        </div>
    );
}

export default Story;