import { UIHeader } from '@drivingo/ui/compound';
import {
  IonContent,
  IonPage,
} from '@ionic/react';

const StudyTopic: React.FC = () => {
  return (
    <IonPage>
      <UIHeader title='Study Topic' />
      <IonContent fullscreen className='ion-padding'>
        Study Topic
      </IonContent>
    </IonPage>
  );
};

export default StudyTopic;
