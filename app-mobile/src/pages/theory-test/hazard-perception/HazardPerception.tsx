import { FeatHazardPerception } from '@drivingo/feat-hazard-perception';
import { UIHeader } from '@drivingo/ui/compound';
import { IonContent, IonPage } from '@ionic/react';

const HazardPerception: React.FC = () => {
    return (
        <IonPage>
            <UIHeader title="Hazard Perception" />
            <IonContent fullscreen className="ion-padding">
                <FeatHazardPerception />
            </IonContent>
        </IonPage>
    );
};

export default HazardPerception;
