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
import ExploreContainer from '../components/ExploreContainer';
import './Home.css';

const Home: React.FC = () => {
  return (
    <IonPage>
      <UIHeader title='Home' />
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Blank {DATA_TOPICS[0].name}</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer />
        <IonRouterLink routerDirection='forward' routerLink='/traffic-signs'>
          <p>Traffic Signs</p>
        </IonRouterLink>
        <UIButton text='example button' /><br /><br /><br />
        <UILink text='link example' />
      </IonContent>
    </IonPage>
  );
};

export default Home;
