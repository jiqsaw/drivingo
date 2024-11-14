import { storeTheoryActiveTestSelectors } from '@drivingo/store';
import { CheckIcon, CloseIcon, RetryIcon, UIButton } from '@drivingo/ui';
import { IonRouterLink } from '@ionic/react';
import { FC } from 'react';
import { useSelector } from 'react-redux';
import './assets/styles.scss';

const FeatTestResult: FC = () => {
    const testType = useSelector(storeTheoryActiveTestSelectors.activeTestType);
    const questionsLength = useSelector(
        storeTheoryActiveTestSelectors.questionsLength,
    );
    const correctCount = useSelector(
        storeTheoryActiveTestSelectors.correctCount,
    );
    const passingRequiredCorrect = useSelector(
        storeTheoryActiveTestSelectors.passingRequiredCorrect,
    );
    const isTestResultSuccess = useSelector(
        storeTheoryActiveTestSelectors.isTestResultSuccess,
    );

    return (
        <aside className="test-result">
            <div
                className={`test-result__status ${isTestResultSuccess ? 'success' : 'fail'}`}
            >
                <span>{isTestResultSuccess ? 'PASS' : 'FAIL'}</span>
                <span>
                    {passingRequiredCorrect}/{questionsLength}
                </span>
            </div>
            <div className="test-result__description">
                Practice for the hazard perception part of your theory test.
            </div>
            <div className="test-result__actions">
                <IonRouterLink
                    routerDirection="root"
                    routerLink="/theory-test/test-review"
                    className="full-width"
                >
                    <UIButton text="Review test" fullWidth nextIcon={true} />
                </IonRouterLink>

                <IonRouterLink
                    className="link"
                    routerDirection="root"
                    routerLink={`/theory-test/test/${testType}`}
                >
                    <RetryIcon />
                    Retry
                </IonRouterLink>
            </div>
        </aside>
    );
};

export default FeatTestResult;
