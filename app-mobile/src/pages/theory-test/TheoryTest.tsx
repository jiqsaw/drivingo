import { UIButton, UILink } from '@drivingo/ui/components';
import { UIHeader } from '@drivingo/ui/compound';
import {
    IonContent,
    IonHeader,
    IonPage,
    IonRouterLink,
    IonTitle,
    IonToolbar,
} from '@ionic/react';

import '../../styles/pages/home.scss';

const TheoryTest: React.FC = () => {
    return (

        <IonPage>
            {/* <UIHeader title='Theory Test' /> */}
            <IonContent fullscreen >
                <div className='homepage'>
                    <div className='header'>
                        Car
                    </div>
                    <div className='main-content'>
                        {/* <IonHeader collapse="condense">
                        <IonToolbar>
                            <IonTitle size="large">TheoryTest asdas</IonTitle>
                        </IonToolbar>
                    </IonHeader> */}
                        <IonRouterLink routerDirection='root' routerLink='/traffic-signs'>
                            {/* <p>Traffic Signs</p> */}
                        </IonRouterLink>
                        <UIButton text='example button' /><br /><br />
                        <br /><br />
                        <UILink text='link example' />

                        <IonRouterLink routerDirection='forward' routerLink='/theory-test/car/learn'>
                            <p>Learn</p>
                        </IonRouterLink>

                        <IonRouterLink routerDirection='forward' routerLink='/theory-test/car/quick-test'>
                            <p>Quick Test</p>
                        </IonRouterLink>

                        <IonRouterLink routerDirection='forward' routerLink='/theory-test/car/mock-test'>
                            <p>Mock Test</p>
                        </IonRouterLink>

                        <IonRouterLink routerDirection='forward' routerLink='/theory-test/car/hazard-perception'>
                            <p>Hazard Perception</p>
                        </IonRouterLink>

                        <IonRouterLink routerDirection='forward' routerLink='/highway-code'>
                            <p>Highway Code</p>
                        </IonRouterLink>

                        <IonRouterLink routerDirection='forward' routerLink='/traffic-signs'>
                            <p>Traffic Signs</p>
                        </IonRouterLink>

                        <IonRouterLink routerDirection='forward' routerLink='/settings'>
                            <p>Settings</p>
                        </IonRouterLink>

                        <IonRouterLink routerDirection='forward' routerLink='/subsciripton'>
                            <p>Subsciripton</p>
                        </IonRouterLink>
                        <br />
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique harum ullam id quia quas fugit, consequuntur veritatis dolorum nihil deserunt cum, deleniti magnam nobis aperiam quae porro adipisci maiores fugiat.

                        </p>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique harum ullam id quia quas fugit, consequuntur veritatis dolorum nihil deserunt cum, deleniti magnam nobis aperiam quae porro adipisci maiores fugiat.
                        </p>

                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique harum ullam id quia quas fugit, consequuntur veritatis dolorum nihil deserunt cum, deleniti magnam nobis aperiam quae porro adipisci maiores fugiat.
                        </p>
                    </div>


                </div>
            </IonContent>
        </IonPage>
    );
};

export default TheoryTest;
