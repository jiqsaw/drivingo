import { CONSTANTS } from '@drivingo/global';
import { createSelector } from '@reduxjs/toolkit';
import { AppState } from '../../store';
import {
    getCorrectCount,
    getCurrentQuestion,
    getNextFlaggedQuestionIndex,
    getPrevFlaggedQuestionIndex,
    getQuestions,
} from './active-test-utils';

const activeTest = (state: AppState) => state.theory.activeTest;

const currentQuestion = createSelector(activeTest, (test) =>
    getCurrentQuestion(test),
);

const isLastQuestion = createSelector(activeTest, (test) => {
    if (!test.showFlaggedOnly) {
        return getQuestions(test).length <= test.indexLocator + 1;
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

const score = createSelector(activeTest, (test) => {
    const correctCount = getCorrectCount(test.questions);
    const incorrectCount = test.questions.length - correctCount;
    return correctCount + '/' + incorrectCount;
});

const activeTestType = createSelector(activeTest, (test) => {
    return test.type;
});

const questionsLength = createSelector(activeTest, (test) => {
    return test.questions.length;
});

const passingRequiredCorrect = createSelector(activeTest, (test) => {
    const passingRatio =
        CONSTANTS.mockTestInfo.questionsLength /
        CONSTANTS.mockTestInfo.passingRequiredCorrect;
    return Math.ceil(test.questions.length / passingRatio);
});

const isTestResultSuccess = createSelector(
    activeTest,
    passingRequiredCorrect,
    (test, passingRequiredCorrect) => {
        const correctCount = getCorrectCount(test.questions);
        return correctCount >= passingRequiredCorrect;
    },
);

/* --- ??? -- */

export default {
    activeTest,
    currentQuestion,
    isLastQuestion,
    isFirstQuestion,
    score,
    activeTestType,
    questionsLength,
    passingRequiredCorrect,
    isTestResultSuccess,
};
