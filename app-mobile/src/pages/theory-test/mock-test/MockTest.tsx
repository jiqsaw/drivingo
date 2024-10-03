import { UIHeader } from '@drivingo/ui/compound';
import { IonContent, IonPage } from '@ionic/react';

const MockTest: React.FC = () => {
    return (
        <IonPage>
            <UIHeader />
            <h1>Mock test</h1>
            <IonContent fullscreen className="ion-padding">
                Mock Test
            </IonContent>
        </IonPage>
    );
};

export default MockTest;
