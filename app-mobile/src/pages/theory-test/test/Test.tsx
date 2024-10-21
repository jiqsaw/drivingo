import { FeatTest } from '@drivingo/test';
import { IonContent, IonPage } from '@ionic/react';
import { useParams } from 'react-router';

const Test = () => {
    const { type } = useParams<{ type: string }>();

    if (!type) {
        return; // Add no test type chosen or redirect home.
    }
    return (
        <IonPage>
            <IonContent fullscreen>
                <aside className="container">
                    Test Page
                    {/* <Header /> */}
                    <FeatTest type={type} />
                </aside>
            </IonContent>
        </IonPage>
    );
};

export default Test;
