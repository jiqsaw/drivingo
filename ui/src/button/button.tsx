import { IonButton } from '@ionic/react';
import { ArrowNextIcon } from '../icons';

import './button.scss';

export interface UIButtonProps {
    id?: string;
    text: string;
    className?: string;
    nextIcon?: boolean;
    onClick?: () => void;
}

export const UIButton = (props: UIButtonProps) => {
    const { id, text, onClick, nextIcon, className } = props;
    return (
        <IonButton
            id={id}
            onClick={() => onClick && onClick()}
            className={`btn ${className}`}
        >
            {text}
            {nextIcon && <ArrowNextIcon />}
        </IonButton>
    );
};
