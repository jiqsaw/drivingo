import { IonIcon, IonLabel, IonRouterOutlet, IonTabBar, IonTabButton, IonTabs } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { library, playCircle, radio } from 'ionicons/icons';
import { Redirect, Route } from "react-router";
import HighwayCodeDetailPage from "./pages/highway-code/Detail";
import HighwayCode from "./pages/highway-code/HighwayCode";
import Home from "./pages/Home";
import Settings from "./pages/Settings";
import Subscription from "./pages/Subscription";
import HazardPerception from "./pages/theory-test/HazardPerception";
import Learn from "./pages/theory-test/learn/Learn";
import PractiseTopic from "./pages/theory-test/learn/practise-topics/PractiseTopic";
import StudyTopic from "./pages/theory-test/learn/study-topics/StudyTopic";
import MockTest from "./pages/theory-test/mock-test/MockTest";
import QuickTest from "./pages/theory-test/quick-test/QuickTest";
import QuickTestTopic from "./pages/theory-test/quick-test/topics/Topics";
import TheoryTest from "./pages/theory-test/TheoryTest";
import TrafficSigns from "./pages/TrafficSigns";

const Router: React.FC = () => {

    return (
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
                    <Route path="/highway-code" render={() => <HighwayCode />} exact={true} />
                    <Route path="/highway-code/:id" render={() => <HighwayCodeDetailPage />} exact={true} />

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
    );
};

export default Router;
