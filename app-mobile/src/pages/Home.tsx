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

const Home: React.FC = () => {
  return (

    <IonPage>
      <UIHeader title='Home' />
      <IonContent fullscreen className='ion-padding'>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Home</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonRouterLink routerDirection='root' routerLink='/traffic-signs'>
          <p>Traffic Signs</p>
        </IonRouterLink>
        <UIButton text='example button' /><br /><br />
        <br /><br />
        <UILink text='link example' />
        <IonRouterLink routerDirection='forward' routerLink='/settings'>
          <p>Settings</p>
        </IonRouterLink>
      </IonContent>
    </IonPage>
  );
};

export default Home;
