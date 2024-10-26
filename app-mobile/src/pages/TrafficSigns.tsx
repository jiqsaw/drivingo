import { FeatTrafficSigns } from '@drivingo/feat-traffic-signs';
import { IonContent, IonPage } from '@ionic/react';
import BottomNavigation from '../components/bottom-navigation/bottom-navigation';
import Header from '../components/headers/header/header';

const TrafficSigns: React.FC = () => {
    return (
        <IonPage>
            <IonContent fullscreen>
                <aside className="container">
                    <Header />
                    <FeatTrafficSigns />
                </aside>
                <BottomNavigation />
            </IonContent>
        </IonPage>
    );
};

export default TrafficSigns;
