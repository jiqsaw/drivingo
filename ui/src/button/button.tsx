import { IonButton } from '@ionic/react';

export interface UIButtonProps {
    text: string;
    onClick?: () => void;
}

export const UIButton = (props: UIButtonProps) => {
    const { text, onClick } = props;
    return (
        <IonButton onClick={() => onClick && onClick()} color={'medium'}>
            {text}
        </IonButton>
    );
};
