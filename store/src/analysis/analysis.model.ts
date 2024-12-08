import {
    IHazardPerceptionResult,
    QuestionBank,
    TestType,
} from '@drivingo/models';

export type AnalysisKey = `${QuestionBank}|${TestType}`;

export interface IStoreAnalysis {
    test?: IStoreAnalysisTest;
    hazardPerception?: IStoreHazardPerceptionResult[];
}

export type IStoreAnalysisTest = {
    [key in AnalysisKey]: IStoreAnalysisTestBase;
};

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
