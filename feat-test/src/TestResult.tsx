import { storeTheoryActiveTestSelectors } from '@drivingo/store';
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
            Test Result <br />
            {correctCount} / {questionsLength} <br />
            {isTestResultSuccess ? 'Success' : 'Fail'} <br />
            passing mark is:
            {passingRequiredCorrect}
            {' / '}
            {questionsLength}
            <br />
            <br />
            <br />
            <IonRouterLink
                routerDirection="root"
                routerLink="/theory-test/test-review"
            >
                Review test
            </IonRouterLink>
            <br />
            <br />
            <IonRouterLink
                routerDirection="root"
                routerLink={`/theory-test/test/${testType}`}
            >
                Take another test
            </IonRouterLink>
        </aside>
    );
};

export default FeatTestResult;
