import { FeatHazardPerceptionResult } from '@drivingo/feat-hazard-perception';
import { IonContent, IonPage } from '@ionic/react';
import BottomNavigation from 'app-mobile/src/components/bottom-navigation/bottom-navigation';
import { Subheader } from 'app-mobile/src/components/subheader/subheader';
import { useParams } from 'react-router';

const HazardPerceptionResult: React.FC = () => {
    const params = useParams<{ id: string }>();
    return (
        <IonPage>
            <IonContent fullscreen>
                <aside className="container">
                    <Subheader />
                    <FeatHazardPerceptionResult {...params} />
                </aside>
                <BottomNavigation />
            </IonContent>
        </IonPage>
    );
};

export default HazardPerceptionResult;
