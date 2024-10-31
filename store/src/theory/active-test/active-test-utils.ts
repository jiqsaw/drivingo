import { TestType } from '@drivingo/models';
import { cloneDeep } from 'lodash';
import { IStoreProgressTopicResult } from '../progress/progress.model';
import {
    IStoreTheoryActiveTest,
    IStoreTheoryActiveTestQuestion,
} from './active-test.model';

export function getQuestions(test: IStoreTheoryActiveTest) {
    // if (test.showFlaggedOnly) {
    //     return test.questions?.filter((e) => e.isFlagged === true);
    // }
    return test.questions;
}

export function getCurrentQuestion(test: IStoreTheoryActiveTest) {
    return test.questions[test.indexLocator];
}

export function getCorrectCount(questions: IStoreTheoryActiveTestQuestion[]) {
    return questions.filter(
        (e) =>
            e.answer.toLowerCase() ===
            e.selectedOptionChar?.toString().toLowerCase(),
    ).length;
}

export function getTopicResults(
    topicResult: IStoreProgressTopicResult[],
    test: IStoreTheoryActiveTest,
) {
    const topicsNew: IStoreProgressTopicResult[] = cloneDeep(topicResult);

    for (let index = 0; index < test.questions.length; index++) {
        const question = test.questions[index];
        const item = topicsNew.find((e) => e.code === question.topicCode);
        const isCorrect =
            question.selectedOptionChar?.toString().toLowerCase() ===
            question.answer.toLowerCase();
        if (item) {
            if (isCorrect) {
                item.correct = item.correct ? item.correct + 1 : 1;
            } else {
                item.incorrect = item.incorrect ? item.incorrect + 1 : 1;
            }
            if (test.type === TestType.QuickTest) {
                item.lastAnsweredQuestionCode = question.code;
            }
        } else {
            topicsNew.push({
                code: question.topicCode,
                correct: isCorrect ? 1 : 0,
                incorrect: isCorrect ? 0 : 1,
                lastAnsweredQuestionCode:
                    test.type === TestType.QuickTest
                        ? question.code
                        : undefined,
            });
        }
    }
    return topicsNew;
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
