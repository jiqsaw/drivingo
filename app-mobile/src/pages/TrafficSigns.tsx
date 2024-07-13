import { UIHeader } from '@drivingo/ui/compound';
import {
    IonContent,
    IonPage
} from '@ionic/react';

const TrafficSigns: React.FC = () => {
    return (
        <IonPage>
            <UIHeader title='Traffic Signs' />
            <IonContent fullscreen>
                Traffic signs content
            </IonContent>
        </IonPage>
    );
};

export default TrafficSigns;
