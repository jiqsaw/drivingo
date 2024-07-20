
import { IonContent, IonPage, IonRouterLink } from "@ionic/react";
import { UIHeader } from "@drivingo/ui/compound";
const HighwayCode = () => {
  return (
    <IonPage>
      <UIHeader title='HighwayCode' />
      <IonContent fullscreen className='ion-padding'>
        <IonRouterLink routerDirection='forward' routerLink='/highway-code/1'>
          <p>HighwayCode Detail</p>
        </IonRouterLink>
      </IonContent>
    </IonPage>
  )
}

export default HighwayCode;
