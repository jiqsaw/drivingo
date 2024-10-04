import { IonButton } from '@ionic/react';

export interface UIButtonProps {
    text: string;
}

export const UIButton = (props: UIButtonProps) => {
    const { text } = props;
    return <IonButton color={'medium'}>{text}</IonButton>;
};
