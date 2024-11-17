import { FeatTestResult } from '@drivingo/test';
import { IonContent, IonPage } from '@ionic/react';
import Header from 'app-mobile/src/components/header/header';

const TestResult: React.FC = () => {
    return (
        <IonPage>
            <IonContent fullscreen>
                <aside className="container pb-60">
                    <Header
                        isRoot={false}
                        backText="Exit"
                        backPath={`/theory-test/home`}
                    />
                    <FeatTestResult />
                </aside>
            </IonContent>
        </IonPage>
    );
};

export default TestResult;
