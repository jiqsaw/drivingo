import { FeatSubscription } from '@drivingo/subscription';
import { IonContent, IonPage } from '@ionic/react';
const Subscription = () => {
    return (
        <IonPage>
            <IonContent fullscreen>
                <aside className="container">
                    <FeatSubscription />
                </aside>
            </IonContent>
        </IonPage>
    );
};

export default Subscription;
