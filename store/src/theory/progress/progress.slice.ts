import { TopicDataProvider } from '@drivingo/data-provider';
import { TestType } from '@drivingo/models';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { getCorrectCount } from '../active-test/active-test-utils';
import { IStoreTheoryActiveTest } from '../active-test/active-test.model';
import {
    IStoreProgress,
    IStoreProgressTestBase,
    IStoreProgressTestResult,
    IStoreProgressTopicResult,
} from './progress.model';

const initialState: IStoreProgressTestBase = {
    topics: TopicDataProvider.getData().map((topic) => {
        const item: IStoreProgressTopicResult = {
            code: topic.code,
            correct: 0,
            incorrect: 0,
        };
        return item;
    }),
    results: [],
};

export default createSlice({
    name: 'theory/progress',
    initialState: {
        quickTest: {
            ...initialState,
        },
        mockTest: {
            ...initialState,
        },
    } as IStoreProgress,
    reducers: {
        addTestResult: (
            state,
            action: PayloadAction<{ test: IStoreTheoryActiveTest }>,
        ) => {
            const test = action.payload.test;
            const testResult: IStoreProgressTestResult = {
                date: new Date(),
                correct: getCorrectCount(action.payload.test.questions),
                questionCount: action.payload.test.questions.length,
            };

            let storedTopics: IStoreProgressTopicResult[];
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
                        topic.correct += 1;
                    } else {
                        topic.incorrect += 1;
                    }
                    topic.lastAnsweredQuestionCode = question.code;
                }
            });

            const progressTestBase: IStoreProgressTestBase = {
                topics: storedTopics,
                results: [testResult, ...state.quickTest.results],
            };

            switch (test.type) {
                case TestType.QuickTest:
                    state.quickTest = { ...progressTestBase };
                    break;
                case TestType.MockTest:
                    state.mockTest = {
                        ...progressTestBase,
                    };
                    break;
            }
        },
    },
});
