import { createSelector } from '@reduxjs/toolkit';
import { AppState } from '../../store';
import {
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

/* --- ??? -- */

// const activeTestFinished = (state: AppState) =>
//     state.theory.activeTest.isFinished === true
//         ? state.theory.activeTest
//         : undefined;

export default {
    activeTest,
    currentQuestion,
    isLastQuestion,
    isFirstQuestion,

    /* --- ??? ---*/
    // activeTestFinished,
    // selectQuestions,
    // currentQuestion,
    // isLastQuestion,
    // selectHaveFlags,
    // selectHasPrevQuestion,
};
