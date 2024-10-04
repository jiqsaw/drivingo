import { IonContent, IonPage } from '@ionic/react';

const QuickTestTopic: React.FC = () => {
    return (
        <IonPage>
            {/* <UIHeader /> */}
            <h1>Quick test</h1>
            <IonContent fullscreen className="ion-padding">
                Quick Test Topic
            </IonContent>
        </IonPage>
    );
};

export default QuickTestTopic;
