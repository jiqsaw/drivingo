import { IonBackButton, IonButtons } from "@ionic/react";
import styles from "./sub-header.module.scss";
import { AIIcon } from "../icons";
import { FC } from "react";

interface SubHeaderProps {
    title: string;
}

export const UISubHeader: FC<SubHeaderProps> = ({ title }) => {
    return (
        <div className={styles.main}>
            <div className={styles.top}>
                <IonButtons className={styles.back_button}>
                    <IonBackButton text={""}></IonBackButton>
                </IonButtons>
                <IonButtons className={styles.ai_button}>
                    <span>summarise with ai</span> <AIIcon />
                </IonButtons>
            </div>
            <h1 className={styles.title}>{title}</h1>
            <hr className={styles.tree_points} />
        </div>
    );
};
