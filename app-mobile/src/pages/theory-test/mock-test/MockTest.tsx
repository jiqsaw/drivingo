import { TestType } from '@drivingo/models';
import { IonContent, IonPage, IonRouterLink } from '@ionic/react';
import { Subheader } from '../../../components/headers/subheader/subheader';

const MockTest: React.FC = () => {
    return (
        <IonPage>
            <IonContent fullscreen>
                <aside className="container bg-style-theory-test">
                    <Subheader />
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
