import { dbAnalysis } from '@drivingo/db-client';
import { QuestionBank, TestType } from '@drivingo/models';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { getCorrectCount } from '../theory/active-test/active-test-utils';
import { IStoreTheoryActiveTest } from '../theory/active-test/active-test.model';
import {
    IStoreAnalysis,
    IStoreAnalysisTestResult,
    IStoreAnalysisTopicResult,
} from './analysis.model';

export default createSlice({
    name: 'analysis',
    initialState: {
        // test: {},
        hazardPerception: [],
    } as IStoreAnalysis,
    reducers: {
        addTestResult: (
            state,
            action: PayloadAction<{
                test: IStoreTheoryActiveTest;
                questionBank: QuestionBank;
            }>,
        ) => {
            const { test, questionBank } = action.payload;
            const testResult: IStoreAnalysisTestResult = {
                date: new Date(),
                correct: getCorrectCount(action.payload.test.questions),
                questionCount: action.payload.test.questions.length,
            };

            let storedTopics: IStoreAnalysisTopicResult[];

            if (test.type === TestType.QuickTest) {
                storedTopics = state.test[questionBank].quickTest.topics;
            } else if (test.type === TestType.MockTest) {
                storedTopics = state.test[questionBank].mockTest.topics;
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
                    state.test[questionBank].learnPractice = {
                        topics: storedTopics,
                        results: [
                            testResult,
                            ...state.test[questionBank].learnPractice.results,
                        ],
                    };
                    break;
                case TestType.QuickTest:
                    state.test[questionBank].quickTest = {
                        topics: storedTopics,
                        results: [
                            testResult,
                            ...state.test[questionBank].quickTest.results,
                        ],
                    };
                    break;
                case TestType.MockTest:
                    state.test[questionBank].mockTest = {
                        topics: storedTopics,
                        results: [
                            testResult,
                            ...state.test[questionBank].mockTest.results,
                        ],
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
            const results = { date: new Date(), clipCode, score };
            if (!state.hazardPerception) {
                state.hazardPerception = [results];
            } else {
                state.hazardPerception.push(results);
            }
            dbAnalysis.setTestResults(state);
        },
    },
});
