import { IQuestion, ITopic, OptionChar, TestType } from '@drivingo/models';

export interface IStoreTheoryActiveTest {
    viewType: StoreTheoryActiveTestView;
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

export enum StoreTheoryActiveTestView {
    notActive,
    active,
    review,
}

/* --- ??? --- */

// export interface IStoreTheoryActiveTestParam {
//     type: TestType;
//     filter?: {
//         category: TestCategory;
//         numberOfQuestion: number;
//         topicCode: string;
//         userProgressPracticeCorrects?: string[];
//         userProgressPracticeIncorrects?: string[];
//         locationCode?: string;
//     };
// }

export interface IStoreTheoryActiveTestResults {
    date: Date;
    type: TestType;
    questions: IStoreTheoryActiveTestQuestion[];
}
