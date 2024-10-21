import { FeatHighwayCode } from '@drivingo/feat-highway-code';
import { IonContent, IonPage } from '@ionic/react';
import BottomNavigation from 'app-mobile/src/components/bottom-navigation/bottom-navigation';
import Header from 'app-mobile/src/components/headers/header/header';

const HighwayCode = () => {
    return (
        <IonPage>
            <IonContent fullscreen>
                <aside className="container">
                    <Header />
                    <FeatHighwayCode />
                </aside>
            </IonContent>
            <BottomNavigation />
        </IonPage>
    );
};

export default HighwayCode;
