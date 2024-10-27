import { IStoreTheoryActiveTest } from './active-test.model';

export function getQuestions(test: IStoreTheoryActiveTest) {
    if (test.showFlaggedOnly) {
        return test.questions?.filter((e) => e.isFlagged === true);
    }
    return test.questions;
}

export function getCurrentQuestion(test: IStoreTheoryActiveTest) {
    return test.questions[test.indexLocator];
}
