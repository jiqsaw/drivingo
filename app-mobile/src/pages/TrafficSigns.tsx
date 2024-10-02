import { FeatTrafficSigns } from '@drivingo/feat-traffic-signs';
import { IonContent, IonPage } from '@ionic/react';

const TrafficSigns: React.FC = () => {
    return (
        <IonPage>
            <IonContent fullscreen>
                <div className="page-container subpage flex-column">
                    <h1 className="main-title">Traffic Signs</h1>
                    <FeatTrafficSigns />
                </div>
            </IonContent>
        </IonPage>
    );
};

export default TrafficSigns;
