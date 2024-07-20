import { UIHeader } from '@drivingo/ui/compound';
import {
  IonContent,
  IonPage,
} from '@ionic/react';

const PractiseTopic: React.FC = () => {
  return (
    <IonPage>
      <UIHeader title='Practise Topic' />
      <IonContent fullscreen className='ion-padding'>
        Practise Topic
      </IonContent>
    </IonPage>
  );
};

export default PractiseTopic;
