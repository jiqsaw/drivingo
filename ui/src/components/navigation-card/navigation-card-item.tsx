import { IonRouterLink } from '@ionic/react';
import React, { FC } from 'react';
import { RedirectOkIcon } from '../icons';
import styles from './navigation-card.module.scss';

interface UINavigationItemProps {
    title: string;
    desctioption?: string;
    color?: 'primary' | 'secondary' | 'light_blue' | 'light_tealish';
    icon: React.ReactNode;
    routerDirection: 'root' | 'forward';
    routerLink: string;
}

export const UINavigationItem: FC<UINavigationItemProps> = ({
    color,
    title,
    desctioption,
    icon,
    routerLink,
    routerDirection,
}) => {
    return (
        <IonRouterLink
            routerDirection={routerDirection}
            routerLink={routerLink}
            className={styles.nav_item}
        >
            <div className={`${styles.card} ${color}`}>
                <h3 className={styles.card_title}>{title}</h3>
                <p className={styles.card_desctioption}>{desctioption}</p>

                <div className={styles.card_icon}>{icon}</div>
                <span className={styles.redirect_icon + ' redirect_icon'}>
                    <RedirectOkIcon />
                </span>
            </div>
        </IonRouterLink>
    );
};
