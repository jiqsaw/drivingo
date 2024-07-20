import { DATA_TOPICS } from '@drivingo/data';
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

const TheoryTest: React.FC = () => {
  return (

    <IonPage>
      <UIHeader title='Theory Test' />
      <IonContent fullscreen className='ion-padding'>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">TheoryTest</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonRouterLink routerDirection='root' routerLink='/traffic-signs'>
          <p>Traffic Signs</p>
        </IonRouterLink>
        <UIButton text='example button' /><br /><br />
        <span> example data: {DATA_TOPICS[0].name} </span>
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

      </IonContent>
    </IonPage>
  );
};

export default TheoryTest;
