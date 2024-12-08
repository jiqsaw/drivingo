import { dbAnalysis } from '@drivingo/db-client';
import { QuestionBank } from '@drivingo/models';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { getCorrectCount } from '../theory/active-test/active-test-utils';
import { IStoreTheoryActiveTest } from '../theory/active-test/active-test.model';
import {
    AnalysisKey,
    IStoreAnalysis,
    IStoreAnalysisTest,
    IStoreAnalysisTestBase,
    IStoreAnalysisTestResult,
    IStoreAnalysisTopicResult,
} from './analysis.model';

export default createSlice({
    name: 'analysis',
    initialState: {} as IStoreAnalysis,
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

            const key = `${questionBank}|${test.type}` as AnalysisKey;

            if (state.test === undefined) {
                const initial: IStoreAnalysisTestBase = {
                    topics: [],
                    results: [],
                };
                state.test = {
                    [key]: initial,
                } as IStoreAnalysisTest;
            }
            let storedTopics: IStoreAnalysisTopicResult[] =
                state.test[key].topics;

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

            state.test[key] = {
                topics: storedTopics,
                results: [testResult, ...state.test[key].results],
            };

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
