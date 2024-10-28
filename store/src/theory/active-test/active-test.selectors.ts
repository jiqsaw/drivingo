import { createSelector } from '@reduxjs/toolkit';
import { AppState } from '../../store';
import { getCurrentQuestion, getQuestions } from './active-test-utils';

const activeTest = (state: AppState) => state.theory.activeTest;

const currentQuestion = createSelector(activeTest, (test) =>
    getCurrentQuestion(test),
);

const isLastQuestion = createSelector(activeTest, (test) => {
    return getQuestions(test).length <= test.indexLocator + 1;
});

/* --- ??? -- */

// const activeTestFinished = (state: AppState) =>
//     state.theory.activeTest.isFinished === true
//         ? state.theory.activeTest
//         : undefined;

// const selectHaveFlags = createSelector(selectQuestions, (questions) => {
//     return questions.filter((e) => e.isFlagged).length > 0;
// });
// const selectHasPrevQuestion = createSelector(
//     selectQuestions,
//     currentQuestion,
//     (questions, currentQuestion) => {
//         const currentQuestionIndex = questions.findIndex(
//             (e) => e === currentQuestion,
//         );
//         return currentQuestionIndex > 0;
//     },
// );

export default {
    activeTest,
    currentQuestion,
    isLastQuestion,

    /* --- ??? ---*/
    // activeTestFinished,
    // selectQuestions,
    // currentQuestion,
    // isLastQuestion,
    // selectHaveFlags,
    // selectHasPrevQuestion,
};
