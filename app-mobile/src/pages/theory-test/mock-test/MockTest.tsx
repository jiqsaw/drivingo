import { TestType } from '@drivingo/models';
import { IonContent, IonPage, IonRouterLink } from '@ionic/react';
import Header from 'app-mobile/src/components/header/header';

const MockTest: React.FC = () => {
    return (
        <IonPage>
            <IonContent fullscreen>
                <aside className="container theory-test">
                    <Header />
                    <h1>Mock Test</h1>
                    <br />
                    <br />
                    {/* Bu button sadece en az bir topic secili oldugunda gorunur olacak */}
                    <IonRouterLink
                        routerDirection="forward"
                        routerLink={`/theory-test/test/${TestType.MockTest}`}
                    >
                        Start
                    </IonRouterLink>
                </aside>
            </IonContent>
        </IonPage>
    );
};

export default MockTest;
