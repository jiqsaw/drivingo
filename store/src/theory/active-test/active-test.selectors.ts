import { TopicDataProvider } from '@drivingo/data-provider';
import { CONSTANTS } from '@drivingo/global';
import { createSelector } from '@reduxjs/toolkit';
import { AppState } from '../../store';
import {
    getActiveTestQuestions,
    getCorrectCount,
    getCurrentQuestion,
    getNextFlaggedQuestionIndex,
    getPrevFlaggedQuestionIndex,
} from './active-test-utils';

const activeTest = (state: AppState) => state.theory.activeTest;

const currentQuestion = createSelector(activeTest, (test) =>
    getCurrentQuestion(test),
);

const filteredTopics = createSelector(activeTest, (test) => {
    return test.filteredTopics;
});

const correctCount = createSelector(activeTest, (test) =>
    getCorrectCount(test.questions),
);

const isLastQuestion = createSelector(activeTest, (test) => {
    if (!test.showFlaggedOnly) {
        return getActiveTestQuestions(test).length <= test.indexLocator + 1;
    }
    const nextFlaggedQuestionIndex = getNextFlaggedQuestionIndex(
        test.questions,
    );
    const flaggedQuestionCount = test.questions.filter(
        (item) => item.isFlagged === true,
    ).length;
    return (
        flaggedQuestionCount === 0 ||
        (flaggedQuestionCount === 1 &&
            test.indexLocator === nextFlaggedQuestionIndex)
    );
});

const isFirstQuestion = createSelector(activeTest, (test) => {
    if (!test.showFlaggedOnly) {
        return test.indexLocator === 0;
    }
    const prevFlaggedQuestionIndex = getPrevFlaggedQuestionIndex(
        test.questions,
        test.indexLocator,
    );
    return prevFlaggedQuestionIndex === -1;
});

const activeTestType = createSelector(activeTest, (test) => {
    return test.type;
});

const questionsLength = createSelector(activeTest, (test) => {
    return test.questions.length;
});

const currentQuestionTranslate = createSelector(activeTest, (test) => {
    if (!test.translatedData) {
        return;
    }
    const question = getCurrentQuestion(test);
    const result = test.translatedData.find(
        (item) => item.code === question.code,
    );
    return result;
});

const passingRequiredCorrect = createSelector(activeTest, (test) => {
    const passingRatio =
        CONSTANTS.mockTestInfo.questionsLength /
        CONSTANTS.mockTestInfo.passingRequiredCorrect;
    return Math.ceil(test.questions.length / passingRatio);
});

const isTestResultSuccess = createSelector(
    activeTest,
    correctCount,
    passingRequiredCorrect,
    (test, correctCount, passingRequiredCorrect) => {
        return correctCount >= passingRequiredCorrect;
    },
);

const isPaused = createSelector(activeTest, (test) => {
    return test.isPaused;
});

const showTranslate = createSelector(activeTest, (test) => {
    return test.showTranslate;
});

const topicResults = createSelector(activeTest, (test) => {
    const topicMap: { [key: string]: { correct: number; total: number } } = {};

    test.questions.forEach((question) => {
        const { topicCode, selectedOptionChar, answer } = question;

        if (!topicMap[topicCode]) {
            topicMap[topicCode] = { correct: 0, total: 0 };
        }

        topicMap[topicCode].total += 1;
        if (selectedOptionChar === answer) {
            topicMap[topicCode].correct += 1;
        }
    });

    return TopicDataProvider.getData().map((topic) => {
        const { code: topicCode, name: topicName } = topic;
        const correct = topicMap[topicCode]?.correct || 0;
        const total = topicMap[topicCode]?.total || 0;
        return {
            topicCode,
            topicName,
            correct,
            total,
        };
    });
});

export default {
    activeTest,
    currentQuestion,
    filteredTopics,
    correctCount,
    isLastQuestion,
    isFirstQuestion,
    activeTestType,
    questionsLength,
    passingRequiredCorrect,
    isTestResultSuccess,
    isPaused,
    topicResults,
    currentQuestionTranslate,
    showTranslate,
};
