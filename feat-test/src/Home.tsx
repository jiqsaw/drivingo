import { CONSTANTS } from '@drivingo/global';
import { OptionChar, TestType } from '@drivingo/models';
import {
    storeTheoryActiveTestActions,
    storeTheoryActiveTestSelectors,
    storeUiSelectors,
} from '@drivingo/store';
import { UIButton, UITimer } from '@drivingo/ui';
import { IonAlert, useIonRouter } from '@ionic/react';
import { FC, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { storeTheoryProgressActions } from 'store/src/theory/progress/progress';
import './assets/styles.scss';
import FeatTestContent from './components/test-content';

const FeatTest: FC<{ type?: TestType }> = ({ type }) => {
    const dispatch = useDispatch();
    const hasRunOnce = useRef(false);
    const router = useIonRouter();

    const uiQuickTestNumberOfQuestions = useSelector(
        storeUiSelectors.quickTestNumberOfQuestions,
    );
    const test = useSelector(storeTheoryActiveTestSelectors.activeTest);
    const testCurrentQuestion = useSelector(
        storeTheoryActiveTestSelectors.currentQuestion,
    );
    const isLastQuestion = useSelector(
        storeTheoryActiveTestSelectors.isLastQuestion,
    );
    const isFirstQuestion = useSelector(
        storeTheoryActiveTestSelectors.isFirstQuestion,
    );

    useEffect(() => {
        if (!hasRunOnce.current) {
            if (type) {
                dispatch(
                    storeTheoryActiveTestActions.start({
                        numberOfQuestions: getNumberOfQuestions(type),
                        type,
                    }),
                );
            }
            hasRunOnce.current = true;
        }
    }, []);

    if (!testCurrentQuestion) {
        // TODO: error! navigate and show error?
        return;
    }

    return (
        <aside className="test">
            {/* Eksi margin top ya da position absolute ile yukari konumlanrilmali */}
            {type === TestType.MockTest && (
                <div className="test__timer">
                    <UITimer
                        type="clock"
                        warningFromNumber={5}
                        initialCountdownValue={
                            // CONSTANTS.mockTestInfo.duration * 60
                            60
                        }
                        onFinish={() => finish()}
                    />
                </div>
            )}

            <FeatTestContent
                questionNo={test.indexLocator + 1}
                questionsLength={test.questions.length}
                questionItem={testCurrentQuestion}
                selectedOptionChar={testCurrentQuestion.selectedOptionChar}
                testView={test.view}
                onSelectOption={(selectedOption: OptionChar) => {
                    dispatch(
                        storeTheoryActiveTestActions.selectOption(
                            selectedOption,
                        ),
                    );
                }}
            />
            <div>
                {showProceedButton() &&
                    (!isLastQuestion ? (
                        <UIButton onClick={() => next()} text="Next" />
                    ) : (
                        <UIButton
                            id="present-alert"
                            onClick={() =>
                                getFlaggedQuestionsAmount() < 1 && finish()
                            }
                            text="Finish"
                        />
                    ))}
            </div>
            <hr />
            <div>
                {!isFirstQuestion && <div onClick={prev}>Prev</div>}
                {showFlagButton() && (
                    <div
                        className={`test__flag ${testCurrentQuestion.isFlagged ? 'test__flag--selected' : ''}`}
                        onClick={() =>
                            dispatch(storeTheoryActiveTestActions.flag())
                        }
                    >
                        Flag
                    </div>
                )}
            </div>

            {getFlaggedQuestionsAmount() > 0 && (
                <IonAlert
                    header={getAlertHeaderMessage()}
                    trigger={
                        showProceedButton() && isLastQuestion
                            ? 'present-alert'
                            : ''
                    }
                    buttons={[
                        {
                            text: 'Review flagged questions',
                            role: 'confirm',
                            handler: () => {
                                showFlaggedQuestions();
                            },
                        },
                        {
                            text: 'Finish test',
                            role: 'cancel',
                            handler: () => {
                                finish();
                            },
                        },
                    ]}
                ></IonAlert>
            )}
        </aside>
    );

    function getNumberOfQuestions(type: TestType) {
        switch (type) {
            case TestType.QuickTest:
                return uiQuickTestNumberOfQuestions;
            case TestType.MockTest:
                return CONSTANTS.mockTestInfo.questionsLength;
        }
    }

    function showProceedButton() {
        return !!testCurrentQuestion.selectedOptionChar;
    }

    function showFlagButton() {
        return test.type !== TestType.LearnPractice;
    }

    function next() {
        dispatch(storeTheoryActiveTestActions.next());
    }

    function prev() {
        dispatch(storeTheoryActiveTestActions.prev());
    }

    function getFlaggedQuestionsAmount() {
        return test.questions.filter((question) => question.isFlagged === true)
            .length;
    }

    function getAlertHeaderMessage() {
        return (
            'You have ' + getFlaggedQuestionsAmount() + ' flagged questions!'
        );
    }

    function showFlaggedQuestions() {
        dispatch(storeTheoryActiveTestActions.showFlaggedQuestions());
        dispatch(storeTheoryActiveTestActions.next());
    }

    function finish() {
        dispatch(storeTheoryActiveTestActions.finish());
        dispatch(storeTheoryProgressActions.addTestResult({ test: test }));
        router.push('/theory-test/test-result', 'forward');
    }
};

export default FeatTest;
