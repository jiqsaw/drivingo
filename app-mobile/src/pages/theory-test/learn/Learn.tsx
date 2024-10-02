import { UIHeader } from '@drivingo/ui/compound';
import { IonContent, IonPage, IonRouterLink } from '@ionic/react';

const Learn: React.FC = () => {
    return (
        <IonPage>
            <UIHeader title="Learn" />
            <IonContent fullscreen className="ion-padding">
                <IonRouterLink
                    routerDirection="forward"
                    routerLink="/theory-test/car/learn/study/1"
                >
                    <p>Study Topics Detail</p>
                </IonRouterLink>
                <IonRouterLink
                    routerDirection="forward"
                    routerLink="/theory-test/car/learn/practise/1"
                >
                    <p>Practise Topics Detail</p>
                </IonRouterLink>
            </IonContent>
        </IonPage>
    );
};

export default Learn;
