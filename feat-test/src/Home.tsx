import { TestDataProvider } from '@drivingo/data-provider';
import { CONSTANTS } from '@drivingo/global';
import { TestType } from '@drivingo/models';
import {
    storeTheoryActiveTestActions,
    storeTheoryActiveTestSelectors,
    storeUiSelectors,
} from '@drivingo/store';
import { UIButton } from '@drivingo/ui';
import { IonAlert, useIonRouter } from '@ionic/react';
import { FC, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { storeTheoryProgressActions } from 'store/src/theory/progress/progress';
import './assets/styles.scss';

const FeatTest: FC<{ type: TestType }> = ({ type }) => {
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
            dispatch(
                storeTheoryActiveTestActions.start({
                    numberOfQuestions: getNumberOfQuestions(type),
                    type,
                }),
            );
            hasRunOnce.current = true;
        }
    }, []);

    if (!testCurrentQuestion) {
        // TODO: error! navigate and show error?
        return;
    }

    return (
        <aside className="test">
            <div>
                <p>
                    Soru no:&nbsp;
                    {test.indexLocator + 1}/{test.questions.length}
                </p>
                <p>
                    {testCurrentQuestion.question}
                    {testCurrentQuestion.questionImg !== '' && (
                        <img
                            src={TestDataProvider.getQuestionImage(
                                testCurrentQuestion.code,
                            )}
                            alt={testCurrentQuestion.code}
                        />
                    )}
                </p>
            </div>
            <div>
                {testCurrentQuestion.options.map((option, i) => {
                    return (
                        <div
                            className={`test__option ${testCurrentQuestion.selectedOptionChar === option.char ? 'test__option--selected' : ''}`}
                            key={'option-' + i}
                            onClick={() =>
                                dispatch(
                                    storeTheoryActiveTestActions.selectOption(
                                        option.char,
                                    ),
                                )
                            }
                        >
                            {option.char}){option.text}
                            {option.img && (
                                <img
                                    src={TestDataProvider.getOptionImage(
                                        testCurrentQuestion.code,
                                        option.char,
                                    )}
                                    alt={testCurrentQuestion.code}
                                />
                            )}
                        </div>
                    );
                })}
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
                return CONSTANTS.mockTestInfo.questionAmount;
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
