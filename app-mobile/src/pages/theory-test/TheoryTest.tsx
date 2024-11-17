import { UIButton, UILink } from 'ui/src';

import { IonContent, IonPage, IonRouterLink } from '@ionic/react';

import { signOut } from '@drivingo/db-client';
import { useDispatch } from 'react-redux';
import '../../styles/pages/home.scss';

const TheoryTest: React.FC = () => {
    const dispatch = useDispatch();

    return (
        <IonPage>
            {/* <UIHeader title='Theory Test' /> */}
            <IonContent fullscreen>
                <div className="page-container homepage">
                    <div className="main-content">
                        <IonRouterLink
                            routerDirection="root"
                            routerLink="/traffic-signs"
                        >
                            <p>Traffic Signs</p>
                        </IonRouterLink>
                        <UIButton text="example button" />
                        <br />
                        <br />
                        <br />
                        <br />
                        <UILink text="link example" />

                        <IonRouterLink routerDirection="forward">
                            <p>Learn</p>
                        </IonRouterLink>

                        <IonRouterLink
                            routerDirection="forward"
                            routerLink="/theory-test/quick-test"
                        >
                            <p>Quick Test</p>
                        </IonRouterLink>

                        <IonRouterLink
                            routerDirection="forward"
                            routerLink="/theory-test/mock-test"
                        >
                            <p>Mock Test</p>
                        </IonRouterLink>

                        <IonRouterLink
                            routerDirection="forward"
                            routerLink="/theory-test/hazard-perception"
                        >
                            <p>Hazard Perception</p>
                        </IonRouterLink>

                        <IonRouterLink
                            routerDirection="forward"
                            routerLink="/highway-code"
                        >
                            <p>Highway Code</p>
                        </IonRouterLink>

                        <IonRouterLink
                            routerDirection="forward"
                            routerLink="/traffic-signs"
                        >
                            <p>Traffic Signs</p>
                        </IonRouterLink>

                        <IonRouterLink
                            routerDirection="forward"
                            routerLink="/subscription"
                        >
                            <p>Subscription</p>
                        </IonRouterLink>
                        <UIButton onClick={() => signOut()} text="Logout" />
                    </div>
                </div>
            </IonContent>
        </IonPage>
    );
};

export default TheoryTest;
