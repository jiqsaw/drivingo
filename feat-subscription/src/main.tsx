import { storeSubscriptionActions } from '@drivingo/store';
import { UIButton } from '@drivingo/ui';
import { IonAlert } from '@ionic/react';
import { useDispatch } from 'react-redux';

const FeatSubscription = () => {
    const dispatch = useDispatch();

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
        dispatch(storeSubscriptionActions.unlimitedAccessMonthly());
    }
};

export default FeatSubscription;
