import { IonButton } from '@ionic/react';
import { ArrowNextIcon } from '../icons';

import './button.scss';

export interface UIButtonProps {
    id?: string;
    text: string;
    type?: 'primary' | 'secondary';
    fullWidth?: boolean;
    fullRounded?: boolean;
    nextIcon?: boolean;
    onClick?: () => void;
}

export const UIButton = (props: UIButtonProps) => {
    const { id, text, onClick, nextIcon, type, fullWidth, fullRounded } = props;
    return (
        <IonButton
            id={id}
            onClick={() => onClick && onClick()}
            className={`button ${type} ${fullWidth ? 'full-width' : ''} ${fullRounded ? 'full-rounded' : ''}`}
        >
            {text}
            {nextIcon && <ArrowNextIcon />}
        </IonButton>
    );
};
