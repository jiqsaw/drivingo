import { OptionChar, TestView } from '@drivingo/models';
import {
    storeTheoryActiveTestActions,
    storeTheoryActiveTestSelectors,
} from '@drivingo/store';
import {
    AlertsIcon,
    UICardList,
    UIInlineModal,
    UITabs,
    UITestAnswerCard,
    UITestResultCard,
} from '@drivingo/ui';
import { FC, useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import FeatTestContent from './components/test-content';
import './assets/styles.scss';

const FeatTestReview: FC = () => {
    const hasRunOnce = useRef(false);
    const dispatch = useDispatch();
    const test = useSelector(storeTheoryActiveTestSelectors.activeTest);
    const [selectedTab, setSelectedTab] = useState(0);
    const [modalOpen, setModalOpen] = useState(false);

    const [selectedQuestionIndex, setSelectedQuestionIndex] = useState<
        number | undefined
    >();
    const topicResults = useSelector(
        storeTheoryActiveTestSelectors.topicResults,
    );

    const handleInstructorClose = () => {
        setModalOpen(false);
    };

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
            <h1>Review answers</h1>
            <p>
                Select multiple topics and build your own custom test. Analyse
                your progress.
            </p>
            <UITabs
                items={['Questions', 'Topics']}
                onChange={(index) => setSelectedTab(index)}
            />

            {selectedTab === 0 && (
                <>
                    <UICardList className="column">
                        {test.questions.map((item, i) => {
                            return (
                                <UITestAnswerCard
                                    key={i}
                                    number={i + 1}
                                    question={item.question}
                                    status={
                                        item.answer.toLowerCase() ===
                                        item.selectedOptionChar?.toLowerCase()
                                    }
                                    onClick={() => {
                                        setSelectedQuestionIndex(i);
                                        setModalOpen(true);
                                    }}
                                />
                            );
                        })}
                    </UICardList>

                    {/* Modal */}

                    <UIInlineModal
                        isOpen={modalOpen}
                        onClose={handleInstructorClose}
                        breakpoint={0.96}
                    >
                        {selectedQuestionIndex && (
                            <FeatTestContent
                                questionNo={selectedQuestionIndex + 1}
                                questionsLength={test.questions.length}
                                questionItem={
                                    test.questions[selectedQuestionIndex]
                                }
                                selectedOptionChar={
                                    test.questions[selectedQuestionIndex]
                                        .selectedOptionChar
                                }
                                testView={TestView.Review}
                                onSelectOption={(
                                    selectedOption: OptionChar,
                                ) => {
                                    dispatch(
                                        storeTheoryActiveTestActions.selectOption(
                                            selectedOption,
                                        ),
                                    );
                                }}
                            />
                        )}
                    </UIInlineModal>
                </>
            )}
            {selectedTab === 1 && (
                <div>
                    <UICardList className="column">
                        {topicResults.map((item) => {
                            console.log(item);
                            return (
                                <UITestResultCard
                                    count={`${item.correct}/${item.total}`}
                                    icon={<AlertsIcon />}
                                    title={item.topicName}
                                />
                            );
                        })}
                    </UICardList>
                </div>
            )}
        </aside>
    );
};

export default FeatTestReview;
