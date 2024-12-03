import { IonButton, IonSpinner } from '@ionic/react';
import { ArrowNextIcon } from '../icons';

import './button.scss';

export interface UIButtonProps {
    id?: string;
    text?: string;
    type?: 'primary' | 'secondary';
    fullWidth?: boolean;
    fullRounded?: boolean;
    nextIcon?: boolean;
    disabled?: boolean;
    loading?: boolean;
    onClick?: () => void;
}

export const UIButton = (props: UIButtonProps) => {
    const {
        id,
        text,
        onClick,
        nextIcon,
        type,
        fullWidth,
        fullRounded,
        disabled,
        loading,
    } = props;
    return (
        <IonButton
            id={id}
            onClick={() => onClick && onClick()}
            className={`button ${type} ${fullWidth ? 'full-width' : ''} ${fullRounded ? 'full-rounded' : ''} ${!text && nextIcon ? 'icon-only' : ''}`}
            disabled={disabled}
        >
            {loading && disabled && (
                <IonSpinner name="crescent" className="loading"></IonSpinner>
            )}
            {text}
            {nextIcon && <ArrowNextIcon />}
        </IonButton>
    );
};
