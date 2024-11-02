import { FeatTestReview } from '@drivingo/test';
import { IonContent, IonPage } from '@ionic/react';
import TestReviewHeader from 'app-mobile/src/components/headers/test-review-header/test-review-header';

const TestReview: React.FC = () => {
    return (
        <IonPage>
            <IonContent fullscreen>
                <aside className="container">
                    <TestReviewHeader />
                    <FeatTestReview />
                </aside>
            </IonContent>
        </IonPage>
    );
};

export default TestReview;
