import { DATA_TOPICS } from '@drivingo/data';
import { UIButton, UILink } from '@drivingo/ui/components';
import { UIHeader } from '@drivingo/ui/compound';
import {
  IonContent,
  IonHeader,
  IonPage,
  IonRouterLink,
  IonTitle,
  IonToolbar,
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
