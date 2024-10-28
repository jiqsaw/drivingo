import { TestType } from '@drivingo/models';
import { FeatTest } from '@drivingo/test';
import { IonContent, IonPage } from '@ionic/react';
import { useParams } from 'react-router';
import TestHeader from '../../../components/headers/test-header/testheader';

const Test = () => {
    const params = useParams<{ type: TestType }>();

    return (
        <IonPage>
            <IonContent fullscreen>
                <aside className="container">
                    <TestHeader />
                    <FeatTest type={params.type} />
                </aside>
            </IonContent>
        </IonPage>
    );
};

export default Test;
