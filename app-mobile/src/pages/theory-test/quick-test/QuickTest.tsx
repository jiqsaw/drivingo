import { UIHeader } from '@drivingo/ui/compound';
import { IonContent, IonPage, IonRouterLink } from '@ionic/react';

const QuickTest: React.FC = () => {
    return (
        <IonPage>
            <UIHeader />
            <h1>Quick test</h1>
            <IonContent fullscreen className="ion-padding">
                <IonRouterLink
                    routerDirection="forward"
                    routerLink="/theory-test/car/quick-test/1"
                >
                    <p>Quick Topics Detail</p>
                </IonRouterLink>
            </IonContent>
        </IonPage>
    );
};

export default QuickTest;
