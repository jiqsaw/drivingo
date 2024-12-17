import { IonButton, IonIcon, IonSpinner } from '@ionic/react';
import { ArrowNextIcon } from '../icons';

import './button.scss';

export interface UIButtonProps {
    id?: string;
    text?: string;
    color?: 'dark' | 'primary' | 'secondary';
    fullWidth?: boolean;
    fullRounded?: boolean;
    nextIcon?: boolean;
    icon?: string;
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
        fullWidth,
        fullRounded,
        disabled,
        loading,
        icon,
    } = props;
    return (
        <IonButton
            id={id}
            onClick={() => onClick && onClick()}
            className={`button   ${fullWidth ? 'full-width' : ''} ${fullRounded ? 'full-rounded' : ''} ${!text && nextIcon ? 'icon-only' : ''}`}
            disabled={disabled}
            color={props?.color || 'default'}
        >
            {loading && disabled && (
                <IonSpinner name="crescent" className="loading"></IonSpinner>
            )}
            {icon && <IonIcon slot="start" icon={icon}></IonIcon>}
            {text}
            {nextIcon && <ArrowNextIcon />}
        </IonButton>
    );
};
