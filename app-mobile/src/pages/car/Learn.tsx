import React from 'react';
import {
  IonBackButton,
  IonButtons,
  IonButton,
  IonHeader,
  IonContent,
  IonNavLink,
  IonToolbar,
  IonTitle,
  IonRouterLink,
} from '@ionic/react';



function CarLearn() {
  return (
    <>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton></IonBackButton>
          </IonButtons>
          <IonTitle>Car Learn</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent class="ion-padding">
        <h1>Car Learn</h1>
        {/* <IonNavLink routerDirection="forward" component={() => <PageThree />}>
          <IonButton>Go to Page Three</IonButton>
        </IonNavLink> */}
      </IonContent>
    </>
  );
}

export default CarLearn;
