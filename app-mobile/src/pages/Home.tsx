import { DATA_TOPICS } from '@drivingo/data';
import { UIButton, UILink } from '@drivingo/ui/components';
import {
  IonContent,
  IonHeader,
  IonPage,
  IonRouterLink,
  IonTitle,
  IonToolbar,
} from '@ionic/react';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Home</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen className='ion-padding'>
        <IonRouterLink routerDirection='root' routerLink='/traffic-signs'>
          <p>Traffic Signs</p>
        </IonRouterLink>

        <IonRouterLink routerDirection='forward' routerLink='/settings'>
          <p>Settings</p>
        </IonRouterLink>

        <UIButton text='example button' /><br /><br />
        <span> example data: {DATA_TOPICS[0].name} </span>
        <br /><br />
        <UILink text='link example' />


      </IonContent>
    </IonPage>
  );
};

export default Home;
