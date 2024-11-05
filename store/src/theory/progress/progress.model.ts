export interface IStoreProgress {
    learnPractice: IStoreProgressLearnPracticeTest;
    quickTest: IStoreProgressQuickTest;
    mockTest: IStoreProgressMockTest;
    // hazardPerception: IStoreProgressHazardPerception[];
}

export interface IStoreProgressTestBase {
    topics: IStoreProgressTopicResult[];
    results: IStoreProgressTestResult[];
}

export interface IStoreProgressLearnPracticeTest
    extends IStoreProgressTestBase {}

export interface IStoreProgressQuickTest extends IStoreProgressTestBase {}

export interface IStoreProgressMockTest extends IStoreProgressTestBase {}

export interface IStoreProgressHazardPerception {
    date: Date;
    clipCode: string;
    score: number;
}

export interface IStoreProgressTopicResult {
    code: string;
    corrects: string[];
    incorrects: string[];
    lastAnsweredQuestionCode?: string;
}

export interface IStoreProgressTestResult {
    date: Date;
    correct: number;
    questionCount: number;
}
