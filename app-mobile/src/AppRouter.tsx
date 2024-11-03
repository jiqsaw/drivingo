import { IonRouterOutlet } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { Redirect, Route } from 'react-router';
import Settings from './pages/Settings';
import Subscription from './pages/Subscription';
import TrafficSigns from './pages/TrafficSigns';
import HighwayCodeDetailPage from './pages/highway-code/Detail';
import HighwayCode from './pages/highway-code/HighwayCode';
import TheoryTest from './pages/theory-test/TheoryTest';
import HazardPerceptionDetail from './pages/theory-test/hazard-perception/Detail';
import HazardPerception from './pages/theory-test/hazard-perception/HazardPerception';
import HazardPerceptionResult from './pages/theory-test/hazard-perception/Result';
import Learn from './pages/theory-test/learn/Learn';
import MockTest from './pages/theory-test/mock-test/MockTest';
import QuickTest from './pages/theory-test/quick-test/QuickTest';
import Test from './pages/theory-test/test/Test';
import TestResult from './pages/theory-test/test/TestResult';
import TestReview from './pages/theory-test/test/TestReview';

const Router: React.FC = () => {
    return (
        <IonReactRouter>
            <IonRouterOutlet>
                <Redirect exact path="/" to="/theory-test/home" />

                {/* Home - default Theory Test */}
                <Route
                    path="/theory-test/home"
                    render={() => <TheoryTest />}
                    exact={true}
                />

                {/* Theory Test Segment 1 */}
                <Route
                    path="/theory-test/learn"
                    render={() => <Learn />}
                    exact={true}
                />
                <Route
                    path="/theory-test/quick-test"
                    render={() => <QuickTest />}
                    exact={true}
                />
                <Route
                    path="/theory-test/mock-test"
                    render={() => <MockTest />}
                    exact={true}
                />
                <Route
                    path="/theory-test/hazard-perception"
                    render={() => <HazardPerception />}
                    exact={true}
                />
                <Route
                    path="/theory-test/hazard-perception/:id"
                    render={() => <HazardPerceptionDetail />}
                    exact={true}
                />
                <Route
                    path="/theory-test/test/:type"
                    component={Test}
                    exact={true}
                />
                <Route
                    path="/theory-test/test-result"
                    component={TestResult}
                    exact={true}
                />
                <Route
                    path="/theory-test/test-review"
                    component={TestReview}
                    exact={true}
                />

                <Route
                    path="/theory-test/hazard-perception/result"
                    render={() => <HazardPerceptionResult />}
                    exact={true}
                />

                {/* Extras */}
                <Route
                    path="/highway-code"
                    render={() => <HighwayCode />}
                    exact={true}
                />
                <Route
                    path="/highway-code/:type/:id"
                    render={() => <HighwayCodeDetailPage />}
                    exact={true}
                />

                <Route
                    path="/traffic-signs"
                    render={() => <TrafficSigns />}
                    exact={true}
                />

                {/* Settings */}
                <Route
                    path="/settings"
                    render={() => <Settings />}
                    exact={true}
                />

                {/* Subsciripton */}
                <Route
                    path="/subsciripton"
                    render={() => <Subscription />}
                    exact={true}
                />
            </IonRouterOutlet>
        </IonReactRouter>
    );
};

export default Router;
