import {
    storeTheoryActiveTestActions,
    storeTheoryActiveTestSelectors,
    storeUiSelectors,
} from '@drivingo/store';
import { UIButton } from '@drivingo/ui';
import { FC, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './assets/styles.scss';
import { CONSTANTS } from '@drivingo/global';
import { TestType } from '@drivingo/models';
import { useIonRouter } from '@ionic/react';

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
                <p>{testCurrentQuestion.question}</p>
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
                            {option.text}
                        </div>
                    );
                })}
                {showProceedButton() &&
                    (!isLastQuestion ? (
                        <UIButton onClick={() => next()} text="Next" />
                    ) : (
                        <UIButton onClick={() => finish()} text="Finish" />
                    ))}
            </div>
            <hr />
            <div>
                {test.indexLocator > 0 && <div onClick={prev}>Prev</div>}
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

    function finish() {
        // show flagged question check
        // are you sure you want to finish check
        dispatch(storeTheoryActiveTestActions.finish());
        router.push('/theory-test/test-result', 'forward');
    }
};

export default FeatTest;
