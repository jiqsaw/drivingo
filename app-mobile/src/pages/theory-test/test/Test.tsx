import { FeatTest } from '@drivingo/test';
import { IonContent, IonPage } from '@ionic/react';
import TestHeader from '../../../components/headers/test-header/testheader';

const Test = () => {
    return (
        <IonPage>
            <IonContent fullscreen>
                <aside className="container">
                    <TestHeader />
                    <FeatTest />
                </aside>
            </IonContent>
        </IonPage>
    );
};

export default Test;
