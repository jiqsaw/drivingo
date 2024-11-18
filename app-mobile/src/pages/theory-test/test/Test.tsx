import { translateQuestion } from '@drivingo/db-client';
import { TestType } from '@drivingo/models';
import {
    storeTheoryActiveTestActions,
    storeTheoryActiveTestSelectors,
} from '@drivingo/store';
import { FeatTest } from '@drivingo/test';
import { UITimer } from '@drivingo/ui';
import { IonContent, IonPage } from '@ionic/react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import uiSelectors from 'store/src/ui/ui.selectors';
import TestHeader from '../../../components/test-header/test-header';
import './styles.scss';

const Test = () => {
    const testType = useParams<{ type: string }>().type as unknown as TestType;
    const [showCountdown, setShowCountdown] = useState<boolean>(
        testType === TestType.MockTest,
    );
    const [loadingTranslate, setLoadingTranslate] = useState<boolean>(false);
    const dispatch = useDispatch();

    const userLanguage = useSelector(uiSelectors.language);
    const currentQuestion = useSelector(
        storeTheoryActiveTestSelectors.currentQuestion,
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
                        <TestHeader
                            type={testType}
                            loadingTranslate={loadingTranslate}
                            onTranslate={() => onTranslateHandler()}
                        />
                        <FeatTest type={testType} />
                    </aside>
                )}
            </IonContent>
        </IonPage>
    );

    async function onTranslateHandler() {
        try {
            if (userLanguage) {
                setLoadingTranslate(true);
                const response = await translateQuestion(
                    userLanguage,
                    currentQuestion,
                );
                dispatch(
                    storeTheoryActiveTestActions.addTranslate({
                        code: currentQuestion.code,
                        ...response.data.data,
                    }),
                );
                setLoadingTranslate(false);
            } else {
                // ??? Show language selection panel
            }
        } catch (error) {
            console.error('Error calling translateQuestion function:', error);
        }
    }
};

export default Test;
