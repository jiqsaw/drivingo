import {
    IQuestion,
    ITopic,
    OptionChar,
    TestType,
    TestView,
} from '@drivingo/models';

export interface IStoreTheoryActiveTest {
    view: TestView;
    isPaused: boolean;
    questions: IStoreTheoryActiveTestQuestion[];
    indexLocator: number;
    showFlaggedOnly: boolean;
    type?: TestType;
    includingTopics?: ITopic[];
    showFullTranslate?: boolean;
}

export interface IStoreTheoryActiveTestQuestion extends IQuestion {
    isFlagged?: boolean;
    selectedOptionChar?: OptionChar;
}

export interface IStoreTheoryActiveTestResults {
    date: Date;
    type: TestType;
    questions: IStoreTheoryActiveTestQuestion[];
}
