import { UIHeader } from '@drivingo/ui/compound';
import {
  IonContent,
  IonPage
} from '@ionic/react';

const HazardPerception: React.FC = () => {
  return (

    <IonPage>
      <UIHeader title='Hazard Perception' />
      <IonContent fullscreen className='ion-padding'>
        Hazard Perception
      </IonContent>
    </IonPage>
  );
};

export default HazardPerception;
