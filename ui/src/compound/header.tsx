import { IonHeader, IonTitle, IonToolbar } from "@ionic/react";

export interface UIHeaderProps {
    title: string;
}

export const UIHeader = (props: UIHeaderProps) => {
    const { title } = props;
    return (
        <IonHeader>
            <IonToolbar>
                <IonTitle>{title}</IonTitle>
            </IonToolbar>
        </IonHeader>
    );
};
