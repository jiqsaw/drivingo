import { UIHeader } from '@drivingo/ui/compound';
import {
  IonContent,
  IonPage,
} from '@ionic/react';

const QuickTestTopic: React.FC = () => {
  return (
    <IonPage>
      <UIHeader title='Quick Test Topic' />
      <IonContent fullscreen className='ion-padding'>
        Quick Test Topic
      </IonContent>
    </IonPage>
  );
};

export default QuickTestTopic;
