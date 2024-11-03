import { FeatHazardPerception } from '@drivingo/feat-hazard-perception';
import { IonContent, IonPage } from '@ionic/react';
import { Subheader } from 'app-mobile/src/components/headers/subheader/subheader';

const HazardPerception: React.FC = () => {
    return (
        <IonPage>
            <IonContent fullscreen>
                <aside className="container">
                    <Subheader />
                    <FeatHazardPerception />
                </aside>
            </IonContent>
        </IonPage>
    );
};

export default HazardPerception;
