import {
    IQuestion,
    ITopic,
    OptionChar,
    TestCategory,
    TestType,
} from '@drivingo/models';

export interface IStoreTheoryActiveTest {
    viewType: StoreTheoryActiveTestView;
    isFinished: boolean;
    isPaused: boolean;
    questions: IStoreTheoryActiveTestQuestion[];
    questionLocatorIndex: number;

    type?: TestType;
    includingTopics?: ITopic[];
    numberOfQuestions?: number;

    showFullTranslate?: boolean;
}

export interface IStoreTheoryActiveTestInitialParams {
    type: TestType;
    numberOfQuestions: number;
}

/* --- ??? --- */

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
    isFlagged?: boolean;
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
