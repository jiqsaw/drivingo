import {
    storeTheoryActiveTestActions,
    storeTheoryActiveTestSelectors,
} from '@drivingo/store';
import { UIButton } from '@drivingo/ui';
import { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './assets/styles.scss';

const FeatTest = () => {
    const dispatch = useDispatch();
    const hasRunOnce = useRef(false);

    const test = useSelector(storeTheoryActiveTestSelectors.selectActiveTest);
    const testCurrentQuestion = useSelector(
        storeTheoryActiveTestSelectors.selectCurrentQuestion,
    );
    const isLastQuestion = useSelector(
        storeTheoryActiveTestSelectors.selectIsLastQuestion,
    );

    useEffect(() => {
        if (!hasRunOnce.current) {
            dispatch(storeTheoryActiveTestActions.start());
            hasRunOnce.current = true;
        }
    }, []);

    if (!testCurrentQuestion) {
        // TODO: error! navigate homr and show error?
        return;
    }

    return (
        <aside className="test">
            <div>
                <p>
                    Soru no:&nbsp;
                    {test.questionLocatorIndex + 1}/{test.questions.length}
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
                {!!testCurrentQuestion.selectedOptionChar && (
                    <UIButton
                        onClick={() => (!isLastQuestion ? next() : finish())}
                        text={isLastQuestion ? 'Finish' : 'Next'}
                    />
                )}
            </div>
            <hr />
            <div>
                {test.questionLocatorIndex > 0 && (
                    <div onClick={prev}>Prev</div>
                )}
                <div
                    className={`test__flag ${testCurrentQuestion.isFlagged ? 'test__flag--selected' : ''}`}
                    onClick={() =>
                        dispatch(storeTheoryActiveTestActions.flag())
                    }
                >
                    Flag
                </div>
            </div>
        </aside>
    );

    function next() {
        dispatch(storeTheoryActiveTestActions.next());
    }

    function prev() {
        dispatch(storeTheoryActiveTestActions.prev());
    }

    function finish() {
        dispatch(storeTheoryActiveTestActions.finish());
    }
};

export default FeatTest;
