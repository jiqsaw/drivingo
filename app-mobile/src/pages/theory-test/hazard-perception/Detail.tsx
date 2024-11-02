import { FeatHazardPerceptionDetail } from '@drivingo/feat-hazard-perception';
import { IonContent, IonPage } from '@ionic/react';
import BottomNavigation from 'app-mobile/src/components/bottom-navigation/bottom-navigation';
import { useParams } from 'react-router';
import { Subheader } from '../../../components/headers/subheader/subheader';

const HazardPerceptionDetail: React.FC = () => {
    const params = useParams<{ id: string; type: 'content' | 'signs' }>();
    return (
        <IonPage>
            <IonContent fullscreen>
                <aside className="container">
                    <Subheader />
                    <FeatHazardPerceptionDetail {...params} />
                </aside>
                <BottomNavigation />
            </IonContent>
        </IonPage>
    );
};

export default HazardPerceptionDetail;
