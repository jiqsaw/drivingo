import { IonContent, IonPage } from '@ionic/react';

const TestResult: React.FC = () => {
    return (
        <IonPage>
            <IonContent fullscreen>
                <aside className="container">
                    {/* Header ? */}
                    <h1>Test Result</h1>
                </aside>
            </IonContent>
        </IonPage>
    );
};

export default TestResult;
