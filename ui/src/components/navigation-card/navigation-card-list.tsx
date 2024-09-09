import { FC } from "react";

import styles from './navigation-card.module.scss';

interface UINavigationListProps {
    children: React.ReactNode;
}

export const UINavigationList: FC<UINavigationListProps> = ({ children }) => {

    return (<div className={`${styles.nav_list}`}>
        {children}
    </div>);
}
