import { FeatTestResult } from '@drivingo/test';
import { IonContent, IonPage } from '@ionic/react';
import TestResultHeader from 'app-mobile/src/components/headers/test-result-header/test-result-header';

const TestResult: React.FC = () => {
    return (
        <IonPage>
            <IonContent fullscreen>
                <aside className="container">
                    <TestResultHeader />
                    <FeatTestResult />
                </aside>
            </IonContent>
        </IonPage>
    );
};

export default TestResult;
