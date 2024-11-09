import { TopicDataProvider } from '@drivingo/data-provider';
import { TestType } from '@drivingo/models';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { getCorrectCount } from '../theory/active-test/active-test-utils';
import { IStoreTheoryActiveTest } from '../theory/active-test/active-test.model';
import {
    IStoreAnalysis,
    IStoreAnalysisTestBase,
    IStoreAnalysisTestResult,
    IStoreAnalysisTopicResult,
} from './analysis.model';

const initialState: IStoreAnalysisTestBase = {
    topics: TopicDataProvider.getData().map((topic) => {
        const item: IStoreAnalysisTopicResult = {
            code: topic.code,
            corrects: [],
            incorrects: [],
        };
        return item;
    }),
    results: [],
};

export default createSlice({
    name: 'analysis',
    initialState: {
        learnPractice: {
            ...initialState,
        },
        quickTest: {
            ...initialState,
        },
        mockTest: {
            ...initialState,
        },
    } as IStoreAnalysis,
    reducers: {
        addTestResult: (
            state,
            action: PayloadAction<{ test: IStoreTheoryActiveTest }>,
        ) => {
            const test = action.payload.test;
            const testResult: IStoreAnalysisTestResult = {
                date: new Date(),
                correct: getCorrectCount(action.payload.test.questions),
                questionCount: action.payload.test.questions.length,
            };

            let storedTopics: IStoreAnalysisTopicResult[];
            if (test.type === TestType.QuickTest) {
                storedTopics = state.quickTest.topics;
            } else if (test.type === TestType.MockTest) {
                storedTopics = state.mockTest.topics;
            } else {
                storedTopics = [];
            }
            test.questions.forEach((question) => {
                const topic = storedTopics.find(
                    (item) => item.code === question.topicCode,
                );
                if (topic) {
                    if (question.selectedOptionChar === question.answer) {
                        if (!topic.corrects.includes(question.code)) {
                            topic.corrects.push(question.code);
                        }
                        if (topic.incorrects.includes(question.code)) {
                            topic.incorrects = topic.incorrects.filter(
                                (questionCode) =>
                                    questionCode !== question.code,
                            );
                        }
                    } else {
                        if (!topic.incorrects.includes(question.code)) {
                            topic.incorrects.push(question.code);
                        }
                        if (topic.corrects.includes(question.code)) {
                            topic.corrects = topic.corrects.filter(
                                (questionCode) =>
                                    questionCode !== question.code,
                            );
                        }
                    }
                    topic.lastAnsweredQuestionCode = question.code;
                }
            });

            const analysisTestBase: IStoreAnalysisTestBase = {
                topics: storedTopics,
                results: [testResult, ...state.quickTest.results],
            };

            switch (test.type) {
                case TestType.LearnPractice:
                    state.learnPractice = { ...analysisTestBase };
                    break;
                case TestType.QuickTest:
                    state.quickTest = { ...analysisTestBase };
                    break;
                case TestType.MockTest:
                    state.mockTest = {
                        ...analysisTestBase,
                    };
                    break;
            }
        },
    },
});
