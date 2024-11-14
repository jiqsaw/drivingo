import { IonRouterLink } from '@ionic/react';
import { FC } from 'react';
import './main-title.scss';

type MainTitleProps = {
    title?: string;
    descripton: string;
    link?: string;
    icon?: string;
    routerDirection?: 'root' | 'forward';
};

export const MainTitle: FC<MainTitleProps> = ({
    title,
    descripton,
    link,
    icon,
    routerDirection = 'forward',
}) => {
    return (
        <div className="main-title">
            <div className="main-title__body">
                {title && <h1 className="main-title__title">{title}</h1>}
                <p className="main-title__description">
                    {descripton}{' '}
                    {link && (
                        <IonRouterLink
                            className="main-title__link"
                            routerDirection={routerDirection}
                            routerLink={link}
                        >
                            Learn more.
                        </IonRouterLink>
                    )}
                </p>
            </div>
            {icon && <img className="main-title__icon" src={icon} />}
        </div>
    );
};
