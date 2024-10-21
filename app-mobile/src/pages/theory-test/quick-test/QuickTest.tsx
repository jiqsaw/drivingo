import { TestType } from '@drivingo/models';
import { IonContent, IonPage, IonRouterLink } from '@ionic/react';
import BottomNavigation from 'app-mobile/src/components/bottom-navigation/bottom-navigation';

const QuickTest = () => {
    return (
        <IonPage>
            <IonContent fullscreen>
                <aside className="container">
                    <IonRouterLink
                        routerDirection="forward"
                        routerLink={`/theory-test/test/${TestType.QuickTest}`}
                    >
                        Go to test
                    </IonRouterLink>
                </aside>
            </IonContent>
            <BottomNavigation />
        </IonPage>
    );
};

export default QuickTest;
