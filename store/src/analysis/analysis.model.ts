import { IHazardPerceptionResult, QuestionBank } from '@drivingo/models';

export interface IStoreAnalysis {
    test: IStoreAnalysisTest;
    hazardPerception?: IStoreHazardPerceptionResult[];
}

export interface IStoreAnalysisTest {
    [QuestionBank.Car]: IStoreAnalysisTestCategory;
    [QuestionBank.Motorcycle]: IStoreAnalysisTestCategory;
    [QuestionBank.LGV_PCV]: IStoreAnalysisTestCategory;
    [QuestionBank.ADI]: IStoreAnalysisTestCategory;
}

export interface IStoreAnalysisTestCategory {
    learnPractice: IStoreAnalysisTestBase;
    quickTest: IStoreAnalysisTestBase;
    mockTest: IStoreAnalysisTestBase;
}

export interface IStoreAnalysisTestBase {
    topics: IStoreAnalysisTopicResult[];
    results: IStoreAnalysisTestResult[];
}

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

export interface IStoreHazardPerceptionResult extends IHazardPerceptionResult {}
