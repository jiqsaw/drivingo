import {
    IStoreTheoryActiveTest,
    IStoreTheoryActiveTestQuestion,
} from './active-test.model';

export function getActiveTestQuestions(test: IStoreTheoryActiveTest) {
    return test.questions;
}

export function getCurrentQuestion(test: IStoreTheoryActiveTest) {
    return test.questions[test.indexLocator];
}

export function getCorrectCount(questions: IStoreTheoryActiveTestQuestion[]) {
    return questions.filter((e) => e.answer === e.selectedOptionChar).length;
}

export function getNextFlaggedQuestionIndex(
    questions: IStoreTheoryActiveTestQuestion[],
    startIndex = -1,
) {
    return questions.findIndex(
        (item, index) => startIndex !== index && item.isFlagged === true,
        startIndex,
    );
}

export function getPrevFlaggedQuestionIndex(
    questions: IStoreTheoryActiveTestQuestion[],
    indexLocator: number,
) {
    for (let i = indexLocator - 1; i >= 0; i--) {
        if (questions[i].isFlagged === true) {
            return i;
        }
    }
    return -1;
}
