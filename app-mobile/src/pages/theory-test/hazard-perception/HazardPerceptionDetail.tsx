import { FeatHazardPerceptionDetail } from '@drivingo/feat-hazard-perception';
import { IonContent, IonPage } from '@ionic/react';
import BottomNavigation from 'app-mobile/src/components/bottom-navigation/bottom-navigation';
import Header from 'app-mobile/src/components/header/header';

const HazardPerceptionDetail: React.FC = () => {
    return (
        <IonPage>
            <IonContent fullscreen>
                <aside className="container">
                    <Header
                        isRoot={false}
                        backPath="/theory-test/hazard-perception"
                    />
                    <FeatHazardPerceptionDetail />
                </aside>
                <BottomNavigation />
            </IonContent>
        </IonPage>
    );
};

export default HazardPerceptionDetail;
