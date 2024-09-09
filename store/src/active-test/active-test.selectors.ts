import { createSelector } from "@reduxjs/toolkit";
import { AppState } from "../store";
import { StoreTheoryActiveTestView } from "./active-test.model";

const selectTest = (state: AppState) => state.theory.activeTest;
const selectTestFinished = (state: AppState) => (state.theory.activeTest.isFinished === true) ? state.theory.activeTest : undefined;
const selectQuestions = createSelector(
    selectTest,
    test => {
        switch (test.viewType) {
            case StoreTheoryActiveTestView.flags:
                return test.questions.filter(e => e.flagged === true);
            case StoreTheoryActiveTestView.review:
                return test.questions;
            case StoreTheoryActiveTestView.reviewIncorrects:
                return test.questions.filter((e) => e.selectedOptionChar?.toLowerCase() !== e.answer.toLowerCase());
            default:
                return test.questions;
        }
    }
);
const selectCurrentQuestion = createSelector(
    selectTest,
    selectQuestions,
    (test, questions) => {
        return questions.find(e => e.questionNo === test.currentQuestionNo);
    }
);
const selectIsLastQuestion = createSelector(
    selectQuestions,
    selectCurrentQuestion,
    (questions, currentQuestion) => {
        return questions.length ? currentQuestion?.questionNo === questions[questions.length - 1].questionNo : false;
    }
);
const selectHaveFlags = createSelector(
    selectQuestions,
    questions => {
        return questions.filter(e => e.flagged).length > 0;
    }
);
const selectHasPrevQuestion = createSelector(
    selectQuestions,
    selectCurrentQuestion,
    (questions, currentQuestion) => {
        const currentQuestionIndex = questions.findIndex(e => e === currentQuestion);
        return currentQuestionIndex > 0;
    }
);
const selectNextQuestionNo = createSelector(
    selectQuestions,
    selectCurrentQuestion,
    (questions, currentQuestion) => {
        const currentQuestionIndex = questions.findIndex(e => e.questionNo === currentQuestion?.questionNo);
        if (questions.length > (currentQuestionIndex + 1)) {
            return questions[currentQuestionIndex + 1].questionNo;
        }
        return null;
    }
);
const selectPrevQuestionNo = createSelector(
    selectQuestions,
    selectCurrentQuestion,
    (questions, currentQuestion) => {
        const currentQuestionIndex = questions.findIndex(e => e.questionNo === currentQuestion?.questionNo);
        if (currentQuestionIndex > 0) {
            return questions[currentQuestionIndex - 1].questionNo;
        }
        return null;
    }
);

export default {
    selectTest,
    selectTestFinished,
    selectQuestions,
    selectCurrentQuestion,
    selectIsLastQuestion,
    selectHaveFlags,
    selectHasPrevQuestion,
    selectNextQuestionNo,
    selectPrevQuestionNo
};
