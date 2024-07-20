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

const MockTest: React.FC = () => {
  return (
    <IonPage>
      <UIHeader title='Mock Test' />
      <IonContent fullscreen className='ion-padding'>
        Mock Test
      </IonContent>
    </IonPage>
  );
};

export default MockTest;
