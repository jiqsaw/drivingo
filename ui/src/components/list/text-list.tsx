

import { FC } from 'react';
import styles from './list.module.scss';
import { IonRouterLink } from '@ionic/react';
import { ArrowNextIcon } from '../icons';


export interface TextListProps {
    title: string;
    subtitle?: string;
    link: string;
}

export const UITextList: FC<TextListProps> = ({ title, link, subtitle }) => {

    return (
        <IonRouterLink routerLink={link} className={styles.text_list_item}>
            <span className="link-item-wrap">
                <span className='link-item'>
                    <span className="title">{title}</span>
                    {
                        subtitle && <span className="subtitle">{subtitle}</span>
                    }
                </span>
                <ArrowNextIcon />
            </span>

        </IonRouterLink>

    );
}
