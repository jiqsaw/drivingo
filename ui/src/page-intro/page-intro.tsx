import { IonRouterLink } from '@ionic/react';
import { FC } from 'react';
import './page-intro.scss';

type PageIntroProps = {
    title?: string;
    descripton: string;
    link?: string;
    icon?: string;
    routerDirection?: 'root' | 'forward';
};

export const PageIntro: FC<PageIntroProps> = ({
    title,
    descripton,
    link,
    icon,
    routerDirection = 'forward',
}) => {
    return (
        <div className="page-intro">
            <div className="page-intro__body">
                {title && <h1 className="page-intro__title">{title}</h1>}
                <p className="page-intro__description">
                    {descripton}{' '}
                    {link && (
                        <IonRouterLink
                            className="page-intro__link"
                            routerDirection={routerDirection}
                            routerLink={link}
                        >
                            Learn more.
                        </IonRouterLink>
                    )}
                </p>
            </div>
            {icon && <img className="page-intro__icon" src={icon} />}
        </div>
    );
};
