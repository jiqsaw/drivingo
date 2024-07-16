import { IonApp, IonIcon, IonLabel, IonRouterOutlet, IonTabBar, IonTabButton, IonTabs, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { Redirect, Route } from 'react-router-dom';
import Home from './pages/Home';
import TrafficSigns from './pages/TrafficSigns';
import Settings from './pages/Settings';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/display.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/padding.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';

/* Theme variables */
import './theme/variables.css';

import { library, playCircle, radio } from 'ionicons/icons';
import { useTheme } from './context/theme-provider';

setupIonicReact();

const App: React.FC = () => {

  const { theme } = useTheme();

  return (<IonApp className={theme}>
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Redirect exact path="/" to="/home" />
          <Route path="/home" render={() => <Home />} exact={true} />
          <Route path="/traffic-signs" render={() => <TrafficSigns />} exact={true} />
          <Route path="/settings" render={() => <Settings />} exact={true} />
        </IonRouterOutlet>

        <IonTabBar slot="bottom">
          <IonTabButton tab="home" href="/home">
            <IonIcon icon={playCircle} />
            <IonLabel>Theory Test</IonLabel>
          </IonTabButton>

          <IonTabButton tab="radio" href="/highway-code">
            <IonIcon icon={radio} />
            <IonLabel>Highway code</IonLabel>
          </IonTabButton>

          <IonTabButton tab="library" href="/traffic-signs">
            <IonIcon icon={library} />
            <IonLabel>Traffic signs</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>)
};

export default App;
