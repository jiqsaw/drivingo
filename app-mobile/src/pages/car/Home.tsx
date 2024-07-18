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
              <IonRouterLink routerDirection='root' routerLink='/traffic-signs' >
                Traffic Signs
              </IonRouterLink>
            </div>)
          }
        </div>
        <IonNavLink routerDirection="forward" component={() => <CarLearn />}>
          <IonButton>Go to Page Two</IonButton>
        </IonNavLink>
      </IonContent>
    </>
  );
}

export default CarLanding;
