
import { IonContent, IonPage } from "@ionic/react";
import { UIHeader } from "@drivingo/ui/compound";
import FeatHighwayCode from "@drivingo/feat-highway-code";



const HighwayCode = () => {

  return (
    <IonPage>
      <UIHeader title='HighwayCode' />
      <IonContent fullscreen className='ion-padding'>
        <FeatHighwayCode />
      </IonContent>
    </IonPage>
  )
}

export default HighwayCode;
