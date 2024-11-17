import { FeatHazardPerceptionResult } from '@drivingo/feat-hazard-perception';
import { IonContent, IonPage } from '@ionic/react';
import BottomNavigation from 'app-mobile/src/components/bottom-navigation/bottom-navigation';
import Header from 'app-mobile/src/components/header/header';

const HazardPerceptionResult: React.FC = () => {
    return (
        <IonPage>
            <IonContent fullscreen>
                <aside className="container">
                    <Header
                        isRoot={false}
                        backText="Exit"
                        backPath="/theory-test/hazard-perception"
                    />
                    <FeatHazardPerceptionResult />
                </aside>
                <BottomNavigation />
            </IonContent>
        </IonPage>
    );
};

export default HazardPerceptionResult;
