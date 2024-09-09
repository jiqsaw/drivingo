import { FC } from "react";
import styles from './test-progress.module.scss';
import { IonRouterLink } from "@ionic/react";

interface TestProgressCardProps {
    title: string;
    progress: number;
    routerLink: string;
    routerDirection: 'root' | 'forward';
    icon: React.ReactNode;
}

export const UITestProgressCard: FC<TestProgressCardProps> = ({ title, routerLink, progress, routerDirection, icon }) => {
    return (
        <div className={styles.card}>
            <IonRouterLink
                routerDirection={routerDirection}
                routerLink={routerLink}
            >
                <div className={styles.progress_count}>
                    {progress}%
                </div>
                <h3 className={styles.card_title}>
                    {title}
                </h3>
                <div className={styles.card_icon}>
                    {icon}
                </div>
                <div className={styles.card_progress}>
                    <span className="progress-bar" style={{ width: `${progress}%` }}></span>
                </div>
            </IonRouterLink >
        </div >

    );
};
