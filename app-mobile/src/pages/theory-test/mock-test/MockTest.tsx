import { TestType } from '@drivingo/models';
import { storeAnalysisSelectors, storeUiSelectors } from '@drivingo/store';
import { PageIntro, UIButton } from '@drivingo/ui';
import { IonContent, IonPage, IonRouterLink } from '@ionic/react';
import Header from 'app-mobile/src/components/header/header';
import MockTestStarter from 'app-mobile/src/components/mock-test/starter';
import MockTestTakenTest from 'app-mobile/src/components/mock-test/taken-test';

import { useSelector } from 'react-redux';
import {
    AnalysisKey,
    IStoreAnalysisTestResult,
} from 'store/src/analysis/analysis.model';

const MockTest: React.FC = () => {
    const questionBank = useSelector(storeUiSelectors.questionBank);
    const key = `${questionBank}|${TestType.MockTest}` as AnalysisKey;
    const analysis = useSelector(storeAnalysisSelectors.analysis);
    const analysisLearnPractice =
        (analysis.test && analysis.test[key]) || false;

    return (
        <IonPage>
            <IonContent fullscreen>
                <aside className="container theory-test">
                    <Header />
                    <PageIntro
                        title="Mock Test"
                        descripton={
                            !analysisLearnPractice
                                ? 'Test yourself with the mock test which is the same as the real.'
                                : ''
                        }
                        icon="/assets/images/countdown.png"
                    />

                    {analysisLearnPractice ? (
                        <MockTestTakenTest />
                    ) : (
                        <MockTestStarter />
                    )}

                    <div className="fixed-bottom-button">
                        <IonRouterLink
                            className={`w-full`}
                            routerDirection="forward"
                            routerLink={`/theory-test/test/${TestType.MockTest}`}
                        >
                            <UIButton
                                id="present-alert"
                                fullWidth
                                fullRounded
                                text="Start"
                                nextIcon={true}
                            />
                        </IonRouterLink>
                    </div>
                </aside>
            </IonContent>
        </IonPage>
    );
};

export default MockTest;
