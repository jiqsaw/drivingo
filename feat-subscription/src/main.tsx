import { UIButton } from '@drivingo/ui';
import { IonAlert, useIonRouter } from '@ionic/react';

const FeatSubscription = () => {
    const router = useIonRouter();

    return (
        <aside>
            <h1>Subscription</h1>
            <p>content...</p>
            <UIButton id="btn-upgrade" text="Upgrade" />

            <IonAlert
                header="Purchased successful"
                trigger="btn-upgrade"
                buttons={[
                    {
                        text: 'Continue',
                        role: 'confirm',
                        handler: () => {
                            handleUpgrade();
                        },
                    },
                ]}
            ></IonAlert>
        </aside>
    );

    function handleUpgrade() {
        console.log('handleUpgrade');
        router.push('/login', 'forward');
    }
};

export default FeatSubscription;
