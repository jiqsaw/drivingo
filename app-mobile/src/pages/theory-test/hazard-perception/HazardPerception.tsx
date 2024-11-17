import { FeatHazardPerception } from '@drivingo/feat-hazard-perception';
import { IonContent, IonPage } from '@ionic/react';
import Header from 'app-mobile/src/components/header/header';

const HazardPerception: React.FC = () => {
    return (
        <IonPage>
            <IonContent fullscreen>
                <aside className="container">
                    <Header />
                    <FeatHazardPerception />
                </aside>
            </IonContent>
        </IonPage>
    );
};

export default HazardPerception;
