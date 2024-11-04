import { OptionChar, TestView } from '@drivingo/models';
import {
    storeTheoryActiveTestActions,
    storeTheoryActiveTestSelectors,
} from '@drivingo/store';
import { UITabs } from '@drivingo/ui';
import { FC, useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './assets/styles.scss';
import FeatTestContent from './components/test-content';

const FeatTestReview: FC = () => {
    const hasRunOnce = useRef(false);
    const dispatch = useDispatch();
    const test = useSelector(storeTheoryActiveTestSelectors.activeTest);
    const [selectedTab, setSelectedTab] = useState(0);
    const [selectedQuestionIndex, setSelectedQuestionIndex] = useState<
        number | undefined
    >();
    const topicResults = useSelector(
        storeTheoryActiveTestSelectors.topicResults,
    );

    useEffect(() => {
        if (!hasRunOnce.current) {
            dispatch(
                storeTheoryActiveTestActions.updateView({
                    view: TestView.Review,
                }),
            );
            hasRunOnce.current = true;
        }
    }, []);

    return (
        <aside className="test-review">
            <h1>Test Review</h1>
            <p>desc</p>
            <UITabs
                items={['Questions', 'Topics']}
                onChange={(index) => setSelectedTab(index)}
            />

            {selectedTab === 0 && (
                <div>
                    <span>Questions</span>
                    {test.questions.map((item, i) => {
                        return (
                            <div>
                                {i + 1} -
                                {item.answer === item.selectedOptionChar
                                    ? 'Check'
                                    : 'Fail'}{' '}
                                {item.question}
                            </div>
                        );
                    })}

                    {/* Modal */}

                    {selectedQuestionIndex && (
                        <FeatTestContent
                            questionNo={selectedQuestionIndex + 1}
                            questionsLength={test.questions.length}
                            questionItem={test.questions[selectedQuestionIndex]}
                            selectedOptionChar={
                                test.questions[selectedQuestionIndex]
                                    .selectedOptionChar
                            }
                            testView={TestView.Review}
                            onSelectOption={(selectedOption: OptionChar) => {
                                dispatch(
                                    storeTheoryActiveTestActions.selectOption(
                                        selectedOption,
                                    ),
                                );
                            }}
                        />
                    )}
                </div>
            )}
            {selectedTab === 1 && (
                <div>
                    {topicResults.map((item) => (
                        <div>
                            {item.topicName}: {item.correct}/{item.total}
                        </div>
                    ))}
                </div>
            )}
        </aside>
    );
};

export default FeatTestReview;
