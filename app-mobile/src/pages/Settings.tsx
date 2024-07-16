
import { IonBackButton, IonButtons, IonContent, IonHeader, IonItem, IonList, IonPage, IonTitle, IonToggle, IonToolbar } from "@ionic/react";
import { useTheme } from "../context/theme-provider";


const Settings = () => {

  const { theme, toggleTheme } = useTheme();



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
            <IonToggle checked={theme === "dark"} onIonChange={toggleTheme} justify="space-between">
              Dark Mode
            </IonToggle>
          </IonItem>
        </IonList>
      </IonContent>
    </IonPage>
  )
}

export default Settings;
