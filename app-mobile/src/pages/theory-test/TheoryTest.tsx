import { AIBanner, AlertsIcon, AppleIcon, OclockIcon, StarIcon, UIButton, UILink, UINavigationItem, UINavigationList, UITestProgressCard, UITestProgressList } from '@drivingo/ui/components';
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
                        <h1>Car</h1>
                        <img className='top-img' src="/assets/images/top-car.png" alt="car" />
                    </div>
                    <div className='main-content'>
                        {/* <IonHeader collapse="condense">
                        <IonToolbar>
                            <IonTitle size="large">TheoryTest asdas</IonTitle>
                        </IonToolbar>
                    </IonHeader> */}

                        <AIBanner text='I’II be around across the app to make things easier...' />

                        <UINavigationList>
                            <UINavigationItem routerDirection='forward' routerLink='/theory-test/car/learn' title='Learn' icon={<AppleIcon />} color='primary' desctioption='Lorem ipsum dolor sit amet' />
                            <UINavigationItem routerDirection='forward' routerLink='/theory-test/car/quick-test' title='Quick Test' icon={<OclockIcon />} color='secondary' desctioption='Lorem ipsum dolor sit amet' />
                            <UINavigationItem routerDirection='forward' routerLink='/theory-test/car/mock-test' title='Mock Test' icon={<AppleIcon />} color="light_blue" desctioption='Lorem ipsum dolor sit amet' />
                            <UINavigationItem routerDirection='forward' routerLink='/theory-test/car/hazard-perception' title='Hazard Precep...' icon={<StarIcon />} color='light_tealish' desctioption='Lorem ipsum dolor sit amet' />
                        </UINavigationList>

                        <UITestProgressList title='Study' routerLink='/theory-test/car/learn'>
                            <UITestProgressCard title='Alertness' progress={20} routerLink='/theory-test/car/learn' routerDirection='forward' icon={<AlertsIcon />} />
                            <UITestProgressCard title='Learn' progress={40} routerLink='/theory-test/car/learn' routerDirection='forward' icon={<AlertsIcon />} />
                            <UITestProgressCard title='Alertness' progress={20} routerLink='/theory-test/car/learn' routerDirection='forward' icon={<AlertsIcon />} />
                        </UITestProgressList>



                        <IonRouterLink routerDirection='root' routerLink='/traffic-signs'>
                            <p>Traffic Signs</p>
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
