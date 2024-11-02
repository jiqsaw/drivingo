import { TopicDataProvider } from '@drivingo/data-provider';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { getCorrectCount } from '../active-test/active-test-utils';
import { IStoreTheoryActiveTest } from '../active-test/active-test.model';
import {
    IStoreProgress,
    IStoreProgressTestResult,
    IStoreProgressTopicResult,
} from './progress.model';

export default createSlice({
    name: 'theory/progress',
    initialState: {
        quickTest: {
            topics: TopicDataProvider.getData().map((topic) => {
                const item: IStoreProgressTopicResult = {
                    code: topic.code,
                    correct: 0,
                    incorrect: 0,
                };
                return item;
            }),
            results: [],
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

            const quickTestTopics = state.quickTest.topics;
            test.questions.forEach((question) => {
                const topic = quickTestTopics.find(
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

            state.quickTest = {
                topics: quickTestTopics,
                results: [testResult, ...state.quickTest.results],
            };
        },
    },
});
