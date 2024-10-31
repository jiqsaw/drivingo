export interface IStoreProgress {
    quickTest: IStoreProgressQuickTest;
    // mockTest: IStoreProgressMockTest;
    // hazardPerception: IStoreProgressHazardPerception[];
}

export interface IStoreProgressQuickTest {
    topics: IStoreProgressTopicResult[];
    results: IStoreProgressTestResult[];
}

export interface IStoreProgressMockTest {
    average: number;
    lastCorrectCount: number;
    lastQuestionAmount: number;
    topics: IStoreProgressTopicResult[];
    results: IStoreProgressTestResult[];
}

export interface IStoreProgressHazardPerception {
    date: Date;
    clipCode: string;
    score: number;
}

export interface IStoreProgressTopicResult {
    code: string;
    correct: number;
    incorrect: number;
    lastAnsweredQuestionCode?: string;
}

export interface IStoreProgressTestResult {
    date: Date;
    correct: number;
    questionCount: number;
}
