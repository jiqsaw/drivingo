import { TestType } from '@drivingo/models';
import { FeatTest } from '@drivingo/test';
import { UITimer } from '@drivingo/ui';
import { IonContent, IonPage } from '@ionic/react';
import { useState } from 'react';
import { useParams } from 'react-router';
import TestHeader from '../../../components/headers/test-header/testheader';
import './styles.scss';

const Test = () => {
    const testType = useParams<{ type: string }>().type as unknown as TestType;

    const [showCountdown, setShowCountdown] = useState<boolean>(
        testType === TestType.MockTest,
    );

    return (
        <IonPage>
            <IonContent fullscreen>
                {showCountdown ? (
                    <aside className="test-countdown">
                        <UITimer
                            type="number"
                            initialCountdownValue={3}
                            onFinish={() => setShowCountdown(false)}
                        />
                    </aside>
                ) : (
                    <aside className="container">
                        <TestHeader type={testType} />
                        <FeatTest type={testType} />
                    </aside>
                )}
            </IonContent>
        </IonPage>
    );
};

export default Test;
