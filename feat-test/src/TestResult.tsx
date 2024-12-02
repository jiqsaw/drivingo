import { storeTheoryActiveTestSelectors } from '@drivingo/store';
import {
    CheckIcon,
    CloseIcon,
    RetryIcon,
    ShareIcon,
    UIButton,
} from '@drivingo/ui';
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
                <span>{isTestResultSuccess ? 'PASS' : 'FAIL'}</span>
            </div>

            <div className="test-result__number-status">
                <h4 className="title">YOUR SCORE</h4>
                <span className="pass-result">
                    {correctCount}/{questionsLength}
                </span>
                <span className="min-pass">
                    pass mark is {passingRequiredCorrect}/{questionsLength}
                </span>
            </div>

            <div className="test-result__actions">
                <button
                    type="button"
                    className="share"
                    onClick={shareTestResult}
                >
                    <ShareIcon />
                    Share
                </button>
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
                    <UIButton
                        text="Review your test"
                        fullWidth
                        nextIcon={true}
                    />
                </IonRouterLink>
            </div>
        </aside>
    );

    function shareTestResult() {
        // this function will be implemented later.
        // https://ionicframework.com/docs/native/share
    }
};

export default FeatTestResult;
