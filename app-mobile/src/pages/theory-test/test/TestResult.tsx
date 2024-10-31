import { FeatTestResult } from '@drivingo/test';
import { IonContent, IonPage } from '@ionic/react';

const TestResult: React.FC = () => {
    return (
        <IonPage>
            <IonContent fullscreen>
                <aside className="container">
                    <FeatTestResult />
                </aside>
            </IonContent>
        </IonPage>
    );
};

export default TestResult;
