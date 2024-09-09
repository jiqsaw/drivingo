

import { FC } from "react";

import styles from "./ai-banner.module.scss";
import { AIStarsIcon } from "../icons";

interface AIBannerProps {
    text: string;
}

export const AIBanner: FC<AIBannerProps> = ({ text }) => {
    return (
        <div className={styles.main}>
            <div className={styles.text}>{text}</div>
            <button className={styles.button}>
                <AIStarsIcon />
            </button>
        </div>
    );
};
