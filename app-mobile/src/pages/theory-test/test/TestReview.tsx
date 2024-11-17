import { FeatTestReview } from '@drivingo/test';
import { IonContent, IonPage } from '@ionic/react';
import Header from 'app-mobile/src/components/header/header';

const TestReview: React.FC = () => {
    return (
        <IonPage>
            <IonContent fullscreen>
                <aside className="container">
                    <Header
                        isRoot={false}
                        backText="Exit"
                        backPath={`/theory-test/home`}
                    />
                    <FeatTestReview />
                </aside>
            </IonContent>
        </IonPage>
    );
};

export default TestReview;
