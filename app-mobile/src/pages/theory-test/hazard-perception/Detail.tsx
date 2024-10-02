import { FeatHazardPerceptionDetail } from '@drivingo/feat-hazard-perception';
import { UIHeader } from '@drivingo/ui/compound';
import { IonContent, IonPage } from '@ionic/react';
import { useParams } from 'react-router';

const HazardPerceptionDetail: React.FC = () => {
    const params = useParams<{ id: string; type: 'content' | 'signs' }>();
    return (
        <IonPage>
            <UIHeader title="Hazard Perception" />
            <IonContent fullscreen className="ion-padding">
                <FeatHazardPerceptionDetail {...params} />
            </IonContent>
        </IonPage>
    );
};

export default HazardPerceptionDetail;
