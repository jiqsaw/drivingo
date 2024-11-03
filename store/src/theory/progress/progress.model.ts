export interface IStoreProgress {
    quickTest: IStoreProgressQuickTest;
    mockTest: IStoreProgressMockTest;
    // hazardPerception: IStoreProgressHazardPerception[];
}

export interface IStoreProgressTestBase {
    topics: IStoreProgressTopicResult[];
    results: IStoreProgressTestResult[];
}

export interface IStoreProgressQuickTest extends IStoreProgressTestBase {}

export interface IStoreProgressMockTest extends IStoreProgressTestBase {}

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
