
import { IonBackButton, IonButtons, IonContent, IonHeader, IonItem, IonList, IonPage, IonTitle, IonToggle, IonToolbar } from "@ionic/react";
import { changeTheme } from "../state/ui/ui.slice";
import { AppState } from "../state/store";
import { useDispatch, useSelector } from "react-redux";

const Settings = () => {
  const theme = useSelector((state: AppState) => state.ui.theme);
  const dispatch = useDispatch();
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton></IonBackButton>
          </IonButtons>
          <IonTitle>Settings</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonList inset={true}>
          <IonItem>
            <IonToggle
              checked={theme === "dark"}
              onIonChange={async () => {
                const themeDefault = theme === "dark" ? "light" : "dark";
                dispatch(changeTheme(themeDefault) as any);
              }}
              justify="space-between">
              Dark Mode
            </IonToggle>
          </IonItem>
        </IonList>
      </IonContent>
    </IonPage>
  )
}

export default Settings;
