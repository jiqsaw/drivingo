import { FeatHazardPerceptionResult } from '@drivingo/feat-hazard-perception';
import { IonContent, IonPage } from '@ionic/react';
import BottomNavigation from 'app-mobile/src/components/bottom-navigation/bottom-navigation';
import { Subheader } from '../../../components/headers/subheader/subheader';

const HazardPerceptionResult: React.FC = () => {
    return (
        <IonPage>
            <IonContent fullscreen>
                <aside className="container">
                    <Subheader />
                    <FeatHazardPerceptionResult />
                </aside>
                <BottomNavigation />
            </IonContent>
        </IonPage>
    );
};

export default HazardPerceptionResult;
