import { FC } from 'react';
import './text-route-link.scss';
import { IonRouterLink } from '@ionic/react';
import { RedirectOkIcon } from '../icons';

type TextRouteLinkProps = {
    descripton: string;
    link: string;
    routerDirection: 'root' | 'forward';
};

export const TextRouteLink: FC<TextRouteLinkProps> = ({
    descripton,
    link,
    routerDirection,
}) => {
    return (
        <div className="text-route-link">
            <p className="text-route-link__description">{descripton}</p>
            <IonRouterLink
                className="text-route-link__link"
                routerDirection={routerDirection}
                routerLink={link}
            >
                <RedirectOkIcon />
            </IonRouterLink>
        </div>
    );
};
