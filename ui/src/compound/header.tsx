import { IonBackButton, IonButtons, IonHeader, IonTitle, IonToolbar } from "@ionic/react";

export interface UIHeaderProps {
    title: string;
}

export const UIHeader = (props: UIHeaderProps) => {
    const { title } = props;
    return (
        <IonHeader>
            <IonToolbar>
                <IonButtons slot="start">
                    <IonBackButton></IonBackButton>
                </IonButtons>
                <IonTitle>{title}</IonTitle>
            </IonToolbar>
        </IonHeader>
    );
};
