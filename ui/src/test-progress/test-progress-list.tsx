import { FC } from 'react';

import { IonRouterLink } from '@ionic/react';
import styles from './test-progress.module.scss';

interface TestProgressListProps {
    children: React.ReactNode;
    title: string;
    routerLink?: string;
}

export const UITestProgressList: FC<TestProgressListProps> = ({
    children,
    title,
    routerLink,
}) => {
    return (
        <div className={`${styles.main}`}>
            <div className={styles.header}>
                <h3 className={styles.title}>{title}</h3>
                {routerLink && (
                    <IonRouterLink
                        routerDirection={'forward'}
                        routerLink={routerLink}
                        className={styles.see_all}
                    >
                        See All
                    </IonRouterLink>
                )}
            </div>
            <div className={styles.list}>{children}</div>
        </div>
    );
};
