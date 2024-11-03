import { FC } from 'react';

import { IonRouterLink } from '@ionic/react';
import './test-progress.scss';

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
        <div className="test-progress-list">
            <div className="list-header">
                <h3 className="list-title">{title}</h3>
                {routerLink && (
                    <IonRouterLink
                        routerDirection={'forward'}
                        routerLink={routerLink}
                        className="see-all"
                    >
                        See All
                    </IonRouterLink>
                )}
            </div>
            <div className="list">{children}</div>
        </div>
    );
};
