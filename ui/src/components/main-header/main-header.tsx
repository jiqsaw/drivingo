import { FC } from "react";

import styles from './main-header.module.scss';
import { AIIcon } from "../icons";
import { IonButtons } from "@ionic/react";

interface UIMainHeaderProps {
    user: any; // This is not clear yet
    title: string;
}

export const UIMainHeader: FC<UIMainHeaderProps> = ({ title, user }) => {


    return (
        <div className={styles.main}>
            <div className={styles.top}>
                <div className={styles.profile}>
                    <img src="/assets/images/profile-image.jpg" alt="profile" />
                </div>
                <IonButtons className={styles.ai_button}>
                    <AIIcon />
                </IonButtons>
            </div>
            <h1 className={styles.title}>{title}</h1>
        </div>
    );
}
