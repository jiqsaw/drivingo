import { FeatTestReview } from '@drivingo/test';
import { IonContent, IonPage } from '@ionic/react';

const TestReview: React.FC = () => {
    return (
        <IonPage>
            <IonContent fullscreen>
                <aside className="container">
                    <FeatTestReview />
                </aside>
            </IonContent>
        </IonPage>
    );
};

export default TestReview;
