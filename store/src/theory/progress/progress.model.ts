export interface IStoreProgress {
    quickTest?: IStoreProgressPractice;
    // mockTest: IStoreProgressMockTest;
    // hazardPerception: IStoreProgressHazardPerception[];
}

export interface IStoreProgressPractice {
    topics: IStoreTopicResult[];
    results: IStoreTestResult[];
}

export interface IStoreProgressMockTest {
    average: number;
    lastCorrectCount: number;
    lastQuestionAmount: number;
    topics: IStoreTopicResult[];
    results: IStoreTestResult[];
}

export interface IStoreProgressHazardPerception {
    date: string;
    clipCode: string;
    score: number;
}

export interface IStoreTopicResult {
    code: string;
    correct?: number;
    incorrect?: number;
    locationCode?: string;
}

export interface IStoreTestResult {
    date: string;
    correct: number;
    total: number;
}
