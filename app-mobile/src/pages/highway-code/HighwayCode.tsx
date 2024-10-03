import { FeatHighwayCode } from '@drivingo/feat-highway-code';
import { IonContent, IonPage } from '@ionic/react';
import BottomNavigation from 'app-mobile/src/components/bottom-navigation';

const HighwayCode = () => {
    return (
        <IonPage>
            <IonContent fullscreen>
                <FeatHighwayCode />
            </IonContent>
            <BottomNavigation />
        </IonPage>
    );
};

export default HighwayCode;
