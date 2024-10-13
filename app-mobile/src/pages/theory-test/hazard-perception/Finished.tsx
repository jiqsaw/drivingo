import { FeatHazardPerceptionFinished } from '@drivingo/feat-hazard-perception';
import { IonContent, IonPage } from '@ionic/react';
import BottomNavigation from 'app-mobile/src/components/bottom-navigation/bottom-navigation';
import { Subheader } from 'app-mobile/src/components/subheader/subheader';
import { useParams } from 'react-router';

const HazardPerceptionFinished: React.FC = () => {
    const params = useParams<{ id: string }>();
    return (
        <IonPage>
            <IonContent fullscreen>
                <aside className="container">
                    <Subheader />
                    <FeatHazardPerceptionFinished {...params} />
                </aside>
                <BottomNavigation />
            </IonContent>
        </IonPage>
    );
};

export default HazardPerceptionFinished;
