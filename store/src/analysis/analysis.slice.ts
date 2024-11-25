import { TopicDataProvider } from '@drivingo/data-provider';
import { dbAnalysis } from '@drivingo/db-client';
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

const testInitialState: IStoreAnalysisTestBase = {
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
            ...testInitialState,
        },
        quickTest: {
            ...testInitialState,
        },
        mockTest: {
            ...testInitialState,
        },
        hazardPerception: [],
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

            switch (test.type) {
                case TestType.LearnPractice:
                    state.learnPractice = {
                        topics: storedTopics,
                        results: [testResult, ...state.learnPractice.results],
                    };
                    break;
                case TestType.QuickTest:
                    state.quickTest = {
                        topics: storedTopics,
                        results: [testResult, ...state.quickTest.results],
                    };
                    break;
                case TestType.MockTest:
                    state.mockTest = {
                        topics: storedTopics,
                        results: [testResult, ...state.mockTest.results],
                    };
                    break;
            }

            dbAnalysis.setTestResults(state);
        },

        addHazardTestResult(
            state,
            action: PayloadAction<{ clipCode: string; score: number }>,
        ) {
            const { clipCode, score } = action.payload;
            state.hazardPerception.push({ date: new Date(), clipCode, score });

            dbAnalysis.setTestResults(state);
        },
    },
});
