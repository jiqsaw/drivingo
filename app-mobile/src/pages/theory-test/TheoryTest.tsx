import {
  AlertsIcon,
  AppleIcon,
  OclockIcon,
  StarIcon,
  UIButton,
  UILink,
  UINavigationItem,
  UINavigationList,
  UITestProgressCard,
  UITestProgressList,
} from 'ui/src';

import { IonContent, IonPage, IonRouterLink } from '@ionic/react';

import '../../styles/pages/home.scss';

const TheoryTest: React.FC = () => {
  return (
    <IonPage>
      {/* <UIHeader title='Theory Test' /> */}
      <IonContent fullscreen>
        <div className="page-container homepage">
          <div className="header">
            <h1>Car</h1>
            <img
              className="top-img"
              src="/assets/images/top-car.png"
              alt="car"
            />
          </div>
          <div className="main-content">
            {/* <IonHeader collapse="condense">
                        <IonToolbar>
                            <IonTitle size="large">TheoryTest asdas</IonTitle>
                        </IonToolbar>
                    </IonHeader> */}

            <UINavigationList>
              <UINavigationItem
                routerDirection="forward"
                routerLink="/theory-test/quick-test"
                title="Learn"
                icon={<AppleIcon />}
                color="primary"
                desctioption="Lorem ipsum dolor sit amet"
              />
              <UINavigationItem
                routerDirection="forward"
                routerLink="/theory-test/quick-test"
                title="Quick Test"
                icon={<OclockIcon />}
                color="secondary"
                desctioption="Lorem ipsum dolor sit amet"
              />
              <UINavigationItem
                routerDirection="forward"
                routerLink="/theory-test/mock-test"
                title="Mock Test"
                icon={<AppleIcon />}
                color="light_blue"
                desctioption="Lorem ipsum dolor sit amet"
              />
              <UINavigationItem
                routerDirection="forward"
                routerLink="/theory-test/hazard-perception"
                title="Hazard Precep..."
                icon={<StarIcon />}
                color="light_tealish"
                desctioption="Lorem ipsum dolor sit amet"
              />
            </UINavigationList>

            <UITestProgressList title="Study">
              <UITestProgressCard
                title="Alertness"
                progress={20}
                icon={<AlertsIcon />}
              />
              <UITestProgressCard
                title="Learn"
                progress={40}
                icon={<AlertsIcon />}
              />
              <UITestProgressCard
                title="Alertness"
                progress={20}
                icon={<AlertsIcon />}
              />
            </UITestProgressList>

            <UITestProgressList title="Pratice">
              <UITestProgressCard
                title="Alertness"
                progress={20}
                icon={<AlertsIcon />}
              />
              <UITestProgressCard
                title="Learn"
                progress={40}
                icon={<AlertsIcon />}
              />
              <UITestProgressCard
                title="Alertness"
                progress={20}
                icon={<AlertsIcon />}
              />
            </UITestProgressList>

            <UITestProgressList title="Hazard Perception">
              <UITestProgressCard
                title="Alertness"
                progress={20}
                icon={<AlertsIcon />}
              />
              <UITestProgressCard
                title="Learn"
                progress={40}
                icon={<AlertsIcon />}
              />
              <UITestProgressCard
                title="Alertness"
                progress={20}
                icon={<AlertsIcon />}
              />
            </UITestProgressList>

            <IonRouterLink routerDirection="root" routerLink="/traffic-signs">
              <p>Traffic Signs</p>
            </IonRouterLink>
            <UIButton text="example button" />
            <br />
            <br />
            <br />
            <br />
            <UILink text="link example" />

            <IonRouterLink routerDirection="forward">
              <p>Learn</p>
            </IonRouterLink>

            <IonRouterLink
              routerDirection="forward"
              routerLink="/theory-test/quick-test"
            >
              <p>Quick Test</p>
            </IonRouterLink>

            <IonRouterLink
              routerDirection="forward"
              routerLink="/theory-test/mock-test"
            >
              <p>Mock Test</p>
            </IonRouterLink>

            <IonRouterLink
              routerDirection="forward"
              routerLink="/theory-test/hazard-perception"
            >
              <p>Hazard Perception</p>
            </IonRouterLink>

            <IonRouterLink routerDirection="forward" routerLink="/highway-code">
              <p>Highway Code</p>
            </IonRouterLink>

            <IonRouterLink
              routerDirection="forward"
              routerLink="/traffic-signs"
            >
              <p>Traffic Signs</p>
            </IonRouterLink>

            <IonRouterLink routerDirection="forward" routerLink="/settings">
              <p>Settings</p>
            </IonRouterLink>

            <IonRouterLink routerDirection="forward" routerLink="/subsciripton">
              <p>Subsciripton</p>
            </IonRouterLink>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default TheoryTest;
