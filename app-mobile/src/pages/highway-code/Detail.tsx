import { IonContent, IonPage } from '@ionic/react';
import FeatHighwayCodeDetail from 'feat-highway-code/src/Detail';
import { useParams } from 'react-router';

const HighwayCodeDetail = () => {
    const params = useParams<{ id: string; type: 'content' | 'signs' }>();
    return (
        <IonPage>
            <IonContent fullscreen>
                <aside className="container">
                    <FeatHighwayCodeDetail {...params} />
                </aside>
            </IonContent>
        </IonPage>
    );
};

export default HighwayCodeDetail;
