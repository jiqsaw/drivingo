import { DATA_TOPICS } from '@drivingo/data';
import { UIButton, UILink } from '@drivingo/ui/components';
import {
  IonContent,
  IonHeader,
  IonNav,
  IonPage,
  IonRouterLink,
  IonTitle,
  IonToolbar,
} from '@ionic/react';


import CarLanding from './car/Home';

const Home: React.FC = () => {
  return (
    <IonPage>
      {/* <IonHeader>
        <IonToolbar>
          <IonTitle>Home</IonTitle>
        </IonToolbar>
      </IonHeader> */}
      <IonContent fullscreen className='ion-padding'>
        {/* <IonRouterLink routerDirection='root' routerLink='/traffic-signs'>
          <p>Traffic Signs</p>
        </IonRouterLink>
        <UIButton text='example button' /><br /><br />
        <span> example data: {DATA_TOPICS[0].name} </span>
        <br /><br />
        <UILink text='link example' /> */}

        <IonNav root={() => <CarLanding />}></IonNav>


      </IonContent>
    </IonPage>
  );
};

export default Home;
