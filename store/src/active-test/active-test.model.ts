import {
    IQuestion,
    OptionChar,
    TestCategory,
    TestType,
} from '@drivingo/models';

export interface IStoreTheoryActiveTest {
    type: TestType;
    viewType: StoreTheoryActiveTestView;
    questions: IStoreTheoryActiveTestQuestion[];
    currentQuestionNo?: number;
    isFinished: boolean;
    isPaused: boolean;
    showFullTranslate?: boolean;
    showAnswer?: boolean;
}

export interface IStoreTheoryActiveTestParam {
    type: TestType;
    filter?: {
        category: TestCategory;
        numberOfQuestion: number;
        topicCode: string;
        userProgressPracticeCorrects?: string[];
        userProgressPracticeIncorrects?: string[];
        locationCode?: string;
    };
}

export interface IStoreTheoryActiveTestQuestion extends IQuestion {
    questionNo?: number;
    flagged?: boolean;
    selectedOptionChar?: OptionChar;
}

export enum StoreTheoryActiveTestView {
    default,
    flags,
    review,
    reviewIncorrects,
    none,
}

export interface IStoreTheoryActiveTestResults {
    date: Date;
    type: TestType;
    questions: IStoreTheoryActiveTestQuestion[];
}
