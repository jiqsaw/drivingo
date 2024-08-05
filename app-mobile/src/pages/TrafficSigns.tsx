import { FeatTrafficSigns } from '@drivingo/feat-traffic-signs';
import { UIHeader } from '@drivingo/ui/compound';
import { IonContent, IonPage } from '@ionic/react';

const TrafficSigns: React.FC = () => {
    return (
        <IonPage>
            <UIHeader title='Traffic Signs' />
            <IonContent fullscreen className='ion-padding'>
                <FeatTrafficSigns />
            </IonContent>
        </IonPage>
    );
};

export default TrafficSigns;
