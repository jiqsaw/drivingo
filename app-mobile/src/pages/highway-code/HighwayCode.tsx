
import FeatHighwayCode from "@drivingo/feat-highway-code";
import { UIHeader } from "@drivingo/ui/compound";
import { IonContent, IonPage } from "@ionic/react";

const HighwayCode = () => {

  return (
    <IonPage>
      <UIHeader title='HighwayCode' />
      <IonContent fullscreen className='ion-padding'>
        <FeatHighwayCode />
      </IonContent>
    </IonPage>
  );
};

export default HighwayCode;
