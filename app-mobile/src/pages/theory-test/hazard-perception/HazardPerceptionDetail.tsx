import { FeatHazardPerceptionDetail } from '@drivingo/feat-hazard-perception';
import { IonContent, IonPage } from '@ionic/react';
import BottomNavigation from 'app-mobile/src/components/bottom-navigation/bottom-navigation';
import Header from 'app-mobile/src/components/header/header';
import { useParams } from 'react-router';

const HazardPerceptionDetail: React.FC = () => {
    const params = useParams<{ id: string; type: 'content' | 'signs' }>();
    return (
        <IonPage>
            <IonContent fullscreen>
                <aside className="container">
                    <Header
                        isRoot={false}
                        backPath="/theory-test/hazard-perception"
                    />
                    <FeatHazardPerceptionDetail {...params} />
                </aside>
                <BottomNavigation />
            </IonContent>
        </IonPage>
    );
};

export default HazardPerceptionDetail;
