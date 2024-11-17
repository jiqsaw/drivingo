import { TestDataProvider } from '@drivingo/data-provider';

import { OptionChar, TestLearnPracticeGroup, TestType } from '@drivingo/models';
import {
    storeAnalysisActions,
    storeAnalysisSelectors,
    storeTheoryActiveTestActions,
    storeTheoryActiveTestSelectors,
    storeUiSelectors,
} from '@drivingo/store';
import { ArrowBackIcon, FlagIcon, UIButton, UITimer } from '@drivingo/ui';
import { IonAlert, IonModal, useIonRouter } from '@ionic/react';
import { FC, useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import FeatTestContent from './components/test-content';
import './assets/styles.scss';

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

    const analysis = useSelector(storeAnalysisSelectors.analysis);

    const modalExplanation = useRef<HTMLIonModalElement>(null);
    const [showExplanation, setShowExplanation] = useState<boolean>(false);

    let paramLearnPracticeGroup = TestLearnPracticeGroup.All;

    if (type === TestType.LearnPractice) {
        const location = useLocation();
        const queryParams = new URLSearchParams(location.search);
        paramLearnPracticeGroup = queryParams.get(
            'learnPracticeGroup',
        ) as unknown as TestLearnPracticeGroup;
    }

    useEffect(() => {
        if (!hasRunOnce.current) {
            if (type) {
                switch (type) {
                    case TestType.LearnPractice:
                        dispatch(
                            storeTheoryActiveTestActions.startLearnPracticeTest(
                                {
                                    testLearnPracticeGroup:
                                        paramLearnPracticeGroup,
                                    analysis: analysis.learnPractice,
                                },
                            ),
                        );
                        break;
                    case TestType.QuickTest:
                        dispatch(
                            storeTheoryActiveTestActions.startQuickTest({
                                numberOfQuestions: uiQuickTestNumberOfQuestions,
                            }),
                        );
                        break;
                    case TestType.MockTest:
                        dispatch(storeTheoryActiveTestActions.startMockTest());
                        break;
                }
            }
            hasRunOnce.current = true;
        }
    }, []);

    if (!testCurrentQuestion) {
        // TODO: error! navigate and show error?
        return;
    }

    return (
        <aside className={`test ${test.isPaused ? 'paused' : ''}`}>
            {/* Eksi margin top ya da position absolute ile yukari konumlanrilmali */}
            {type === TestType.MockTest && (
                <div className="test__timer">
                    <UITimer
                        type="clock"
                        warningFromNumber={5}
                        isPaused={test.isPaused}
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
                onSelectOption={(selectedOption: OptionChar) =>
                    selectOption(selectedOption)
                }
            />

            <div className="fixed-bottom-button">
                <div className="button-fix-height">
                    {showProceedButton() &&
                        (!isLastQuestion ? (
                            <UIButton
                                onClick={() => next()}
                                text="Next"
                                nextIcon={true}
                                fullWidth
                                fullRounded
                            />
                        ) : (
                            <UIButton
                                id="present-alert"
                                fullWidth
                                fullRounded
                                onClick={() =>
                                    getFlaggedQuestionsAmount() < 1 && finish()
                                }
                                text="Finish"
                            />
                        ))}
                </div>
                <div className="test__buttom-nav">
                    {!isFirstQuestion && (
                        <button className="test__btn-previous" onClick={prev}>
                            {'<'}previous
                        </button>
                    )}
                    {showFlagButton() && (
                        <div
                            className={`test__flag ${testCurrentQuestion.isFlagged ? 'test__flag--selected' : ''}`}
                            onClick={() =>
                                dispatch(storeTheoryActiveTestActions.flag())
                            }
                        >
                            <FlagIcon /> flag
                        </div>
                    )}

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
                </div>
            </div>
            <IonModal
                ref={modalExplanation}
                isOpen={showExplanation}
                initialBreakpoint={0.25}
                breakpoints={[0, 0.25, 0.5, 0.75]}
                backdropDismiss={false}
                backdropBreakpoint={0.5}
                onDidDismiss={() => setShowExplanation(false)}
            >
                {TestDataProvider.getExplanation(testCurrentQuestion.code)}
            </IonModal>
        </aside>
    );

    function showProceedButton() {
        return !!testCurrentQuestion.selectedOptionChar;
    }

    function showFlagButton() {
        return test.type !== TestType.LearnPractice;
    }

    function selectOption(selectedOption: OptionChar) {
        dispatch(storeTheoryActiveTestActions.selectOption(selectedOption));
        if (test.type === TestType.LearnPractice) {
            setShowExplanation(true);
        }
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
        dispatch(storeAnalysisActions.addTestResult({ test: test }));
        router.push('/theory-test/test-result', 'forward');
    }
};

export default FeatTest;
