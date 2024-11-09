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
                {isTestResultSuccess ? <CheckIcon /> : <CloseIcon />}
                {isTestResultSuccess ? 'SUCCESS' : 'FAIL'}
            </div>
            <div className="test-result__score">
                <h4 className="test-result__score-title">YOUR SCORE</h4>
                <span className="test-result__score-count">
                    {correctCount}/{questionsLength}
                </span>
                <span>
                    pass mark is {passingRequiredCorrect}/{questionsLength}
                </span>
            </div>
            <div className="test-result__actions">
                <IonRouterLink
                    className="link"
                    routerDirection="root"
                    routerLink={`/theory-test/test/${testType}`}
                >
                    <RetryIcon />
                    Take another test
                </IonRouterLink>
                <IonRouterLink
                    routerDirection="root"
                    routerLink="/theory-test/test-review"
                    className="full-width"
                >
                    <UIButton text="Review test" fullWidth nextIcon={true} />
                </IonRouterLink>
            </div>
        </aside>
    );
};

export default FeatTestResult;
