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
import TheoryTest from './pages/theory-test/TheoryTest';
import Learn from './pages/theory-test/learn/Learn';
import QuickTest from './pages/theory-test/quick-test/QuickTest';
import MockTest from './pages/theory-test/mock-test/MockTest';
import StudyTopic from './pages/theory-test/learn/study-topics/StudyTopic';
import PractiseTopic from './pages/theory-test/learn/practise-topics/PractiseTopic';
import QuickTestTopic from './pages/theory-test/quick-test/topics/Topics';
import HazardPerception from './pages/theory-test/HazardPerception';
import HighwayCode from './pages/highway-code/HighwayCode';
import Subscription from './pages/Subscription';
import HighwayCodeDetail from './pages/highway-code/Detail';

import { useSelector } from 'react-redux';
import { AppState, store } from './state/store';
import { useEffect } from 'react';
import { fetchInitialTheme } from './state/ui/ui.slice';

setupIonicReact();

const App: React.FC = () => {
  const theme = useSelector((state: AppState) => state.ui.theme);

  useEffect(() => {
    if (!theme) {
      store.dispatch(fetchInitialTheme());
    }
  }, [theme]);

  return (<IonApp className={theme || ""}>
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Redirect exact path="/" to="/theory-test/car/home" />

          {/* Home - default car */}
          <Route path="/theory-test/:category/home" render={() => <TheoryTest />} exact={true} />

          {/* Theory Test Segment 1 */}
          <Route path="/theory-test/:category/learn" render={() => <Learn />} exact={true} />
          <Route path="/theory-test/:category/quick-test" render={() => <QuickTest />} exact={true} />
          <Route path="/theory-test/:category/mock-test" render={() => <MockTest />} exact={true} />
          <Route path="/theory-test/:category/hazard-perception" render={() => <HazardPerception />} exact={true} />


          {/* Theory Test Segment 2 */}
          <Route path="/theory-test/:category/learn/study/:topic" render={() => <StudyTopic />} exact={true} />
          <Route path="/theory-test/:category/learn/practise/:topic" render={() => <PractiseTopic />} exact={true} />
          <Route path="/theory-test/:category/quick-test/:topic" render={() => <QuickTestTopic />} exact={true} />
          <Route path="/theory-test/:category/mock-test/:test-id" render={() => <Home />} exact={true} />

          {/* Extras */}
          <Route path="/highway-code" render={() => <HighwayCode />} />
          <Route path="/highway-code/:id" render={() => <HighwayCodeDetail />} />

          <Route path="/traffic-signs" render={() => <TrafficSigns />} exact={true} />

          {/* Settings */}
          <Route path="/settings" render={() => <Settings />} exact={true} />

          {/* Subsciripton */}
          <Route path="/subsciripton" render={() => <Subscription />} exact={true} />

        </IonRouterOutlet>

        <IonTabBar slot="bottom">
          <IonTabButton tab="home" href="/theory-test/car/home">
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
