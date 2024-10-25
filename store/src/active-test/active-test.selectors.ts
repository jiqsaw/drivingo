import { createSelector } from '@reduxjs/toolkit';
import { AppState } from '../store';
import {
    IStoreTheoryActiveTest,
    StoreTheoryActiveTestView,
} from './active-test.model';

const selectActiveTest = (state: AppState) => state.theory.activeTest;

const selectQuestions = createSelector(selectActiveTest, (test) => {
    return getActiveTestQuestions(test);
});

const selectCurrentQuestion = createSelector(selectActiveTest, (test) =>
    getCurrentQuestion(test),
);

const selectIsLastQuestion = createSelector(
    selectActiveTest,
    selectQuestions,
    (activeTest, questions) => {
        return questions.length <= activeTest.questionLocatorIndex + 1;
    },
);

export function getActiveTestQuestions(test: IStoreTheoryActiveTest) {
    switch (test.viewType) {
        case StoreTheoryActiveTestView.flags:
            return test.questions.filter((e) => e.isFlagged === true);
        case StoreTheoryActiveTestView.review:
            return test.questions;
        case StoreTheoryActiveTestView.reviewIncorrects:
            return test.questions.filter(
                (e) =>
                    e.selectedOptionChar?.toLowerCase() !==
                    e.answer.toLowerCase(),
            );
        default:
            return test.questions;
    }
}

export function getCurrentQuestion(test: IStoreTheoryActiveTest) {
    return test.questions[test.questionLocatorIndex];
}

/* --- ??? -- */

// const selectActiveTestFinished = (state: AppState) =>
//     state.theory.activeTest.isFinished === true
//         ? state.theory.activeTest
//         : undefined;
// const selectQuestions = createSelector(selectActiveTest, (test) => {
//     switch (test.viewType) {
//         case StoreTheoryActiveTestView.flags:
//             return test.questions?.filter((e) => e.isFlagged === true);
//         case StoreTheoryActiveTestView.review:
//             return test.questions;
//         case StoreTheoryActiveTestView.reviewIncorrects:
//             return test.questions?.filter(
//                 (e) =>
//                     e.selectedOptionChar?.toLowerCase() !==
//                     e.answer.toLowerCase(),
//             );
//         default:
//             return test.questions;
//     }
// });

// const selectHaveFlags = createSelector(selectQuestions, (questions) => {
//     return questions.filter((e) => e.isFlagged).length > 0;
// });
// const selectHasPrevQuestion = createSelector(
//     selectQuestions,
//     selectCurrentQuestion,
//     (questions, currentQuestion) => {
//         const currentQuestionIndex = questions.findIndex(
//             (e) => e === currentQuestion,
//         );
//         return currentQuestionIndex > 0;
//     },
// );

export default {
    selectActiveTest,
    selectCurrentQuestion,
    selectQuestions,
    selectIsLastQuestion,

    /* --- ??? ---*/
    // selectActiveTestFinished,
    // selectQuestions,
    // selectCurrentQuestion,
    // selectIsLastQuestion,
    // selectHaveFlags,
    // selectHasPrevQuestion,
};
