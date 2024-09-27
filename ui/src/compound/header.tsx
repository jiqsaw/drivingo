import { IonBackButton, IonButtons, IonHeader, IonTitle, IonToolbar } from "@ionic/react";

export interface UIHeaderProps {
    title: string;
    collapse?: "condense" | "fade" | undefined;
    translucent?: boolean | undefined;
}

export const UIHeader = (props: UIHeaderProps) => {
    const { title } = props;
    return (
        <IonHeader
            collapse={props.collapse}
            translucent={props.translucent}
        >
            <IonToolbar>
                <IonButtons slot="start">
                    <IonBackButton text={""}></IonBackButton>
                </IonButtons>
                <IonTitle>{title}</IonTitle>
            </IonToolbar>
        </IonHeader>
    );
};
