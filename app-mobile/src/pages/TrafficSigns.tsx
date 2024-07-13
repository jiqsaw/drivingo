import { UIHeader } from '@drivingo/ui/compound';
import {
    IonContent,
    IonPage,
    IonRouterLink
} from '@ionic/react';

const TrafficSigns: React.FC = () => {
    return (
        <IonPage>
            <UIHeader title='Traffic Signs' />
            <IonContent fullscreen>
                <IonRouterLink routerDirection='back' routerLink='/home'>
                    <p>Back</p>
                </IonRouterLink>
            </IonContent>
        </IonPage>
    );
};

export default TrafficSigns;
