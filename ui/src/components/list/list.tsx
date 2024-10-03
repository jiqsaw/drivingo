import { IonRouterLink } from '@ionic/react';
import { FC } from 'react';
import { UIDividerPoints } from '../../compound/divider-points/divider-points';
import './list.scss';

export interface IUIListProps {
    data: IUIList[];
}
export interface IUIList {
    id: string;
    title: string;
    note?: string;
    link: string;
}

export const UIList: FC<IUIListProps> = ({ data }) => {
    return data.map((item: IUIList, index) => (
        <IonRouterLink
            id={'highway-code-item-' + index + 1}
            routerLink={item.link}
            className="list-item"
        >
            <div className="list-item__content">
                <div className="list-item__title">
                    <span>{item.title}</span>
                    {item.note && (
                        <span className="list-item__title--note">
                            {item.note}
                        </span>
                    )}
                </div>
                <img src="assets/arrow-icon.svg" />
            </div>
            <UIDividerPoints />
        </IonRouterLink>
    ));
};
