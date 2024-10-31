import { IonButton } from '@ionic/react';

export interface UIButtonProps {
    id?: string;
    text: string;
    onClick?: () => void;
}

export const UIButton = (props: UIButtonProps) => {
    const { id, text, onClick } = props;
    return (
        <IonButton
            id={id}
            onClick={() => onClick && onClick()}
            color={'medium'}
        >
            {text}
        </IonButton>
    );
};
