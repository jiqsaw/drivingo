import { IHazardPerceptionResult } from '@drivingo/models';

export interface IStoreAnalysis {
    learnPractice: IStoreAnalysisLearnPracticeTest;
    quickTest: IStoreAnalysisQuickTest;
    mockTest: IStoreAnalysisMockTest;
    hazardPerception: IHazardPerceptionResult[];
}

export interface IStoreAnalysisTestBase {
    topics: IStoreAnalysisTopicResult[];
    results: IStoreAnalysisTestResult[];
}

export interface IStoreAnalysisLearnPracticeTest
    extends IStoreAnalysisTestBase {}

export interface IStoreAnalysisQuickTest extends IStoreAnalysisTestBase {}

export interface IStoreAnalysisMockTest extends IStoreAnalysisTestBase {}

export interface IStoreAnalysisTopicResult {
    code: string;
    corrects: string[];
    incorrects: string[];
    lastAnsweredQuestionCode?: string;
}

export interface IStoreAnalysisTestResult {
    date: Date;
    correct: number;
    questionCount: number;
}
