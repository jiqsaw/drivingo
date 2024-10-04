import { FeatHazardPerception } from '@drivingo/feat-hazard-perception';
import { IonContent, IonPage } from '@ionic/react';

const HazardPerception: React.FC = () => {
    return (
        <IonPage>
            {/* <UIHeader /> */}
            <h1>Hazard Perception</h1>
            <IonContent fullscreen className="ion-padding">
                <FeatHazardPerception />
            </IonContent>
        </IonPage>
    );
};

export default HazardPerception;
