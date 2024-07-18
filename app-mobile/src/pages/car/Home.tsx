import React, { useState } from 'react';
import { IonButton, IonHeader, IonContent, IonNavLink, IonToolbar, IonTitle, IonPopover, IonIcon, IonRouterLink, IonItem, IonLabel, IonList } from '@ionic/react';
import CarLearn from './Learn';

function CarLanding() {


  const settings = '/assets/icon/svgs/settings.svg';

  const [subMenuOpened, setSubMenuOpened] = useState(false);


  return (
    <>
      {/* <IonHeader>
        <IonToolbar>
          <IonTitle>Home</IonTitle>
        </IonToolbar>
      </IonHeader> */}
      <IonContent class="ion-padding">

        <h1>Page One</h1>
        <div>
          <IonButton onClick={() => {
            // toogle
            setSubMenuOpened(!subMenuOpened);
          }}>
            <IonIcon slot="icon-only" src={settings}></IonIcon>
          </IonButton>
          {
            subMenuOpened && (<div>
              <IonRouterLink routerDirection='root' routerLink='/settings' >
                settings
              </IonRouterLink>
            </div>)
          }
        </div>


        <IonButton id="settings">
          <IonIcon slot="icon-only" src={settings}></IonIcon>
        </IonButton>
        <IonPopover trigger="settings" side="right" alignment="end">
          <IonContent class="ion-padding" scrollY={false}>
            <IonList>
              <IonItem routerLink="/traffic-signs">
                <IonLabel>User 1</IonLabel>
              </IonItem>
              <IonItem routerLink="/dashboard/users/2">
                <IonLabel>User 2</IonLabel>
              </IonItem>
            </IonList>
          </IonContent>
        </IonPopover>
        <IonNavLink routerDirection="forward" component={() => <CarLearn />}>
          <IonButton>Go to Page Two</IonButton>
        </IonNavLink>

        <IonRouterLink routerDirection='root' routerLink='/settings' >
          settings
        </IonRouterLink>
        <IonRouterLink routerDirection='root' routerLink='/settings' >
          settings2
        </IonRouterLink>
      </IonContent>
    </>
  );
}

export default CarLanding;
