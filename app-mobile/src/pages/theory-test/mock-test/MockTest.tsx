import { TestType } from '@drivingo/models';
import { PageIntro, UIButton } from '@drivingo/ui';
import { IonContent, IonPage, IonRouterLink } from '@ionic/react';
import Header from 'app-mobile/src/components/header/header';
import MockTestStarter from 'app-mobile/src/components/mock-test/starter';
 

const MockTest: React.FC = () => {
    return (
        <IonPage>
            <IonContent fullscreen>
                <aside className="container theory-test">
                    <Header />
                    <PageIntro
                        title="Mock Test"
                        descripton="Test yourself with the mock test which is the same as the real."
                        icon="/assets/images/countdown.png"
                    />

                    <MockTestStarter />

                    <div className="fixed-bottom-button">
                        <IonRouterLink
                            className={`w-full`}
                            routerDirection="forward"
                            routerLink={`/theory-test/test/${TestType.MockTest}`}
                        >
                            <UIButton
                                id="present-alert"
                                fullWidth
                                fullRounded
                                text="Start"
                                nextIcon={true}
                            />
                        </IonRouterLink>
                    </div>
                </aside>
            </IonContent>
        </IonPage>
    );
};

export default MockTest;
