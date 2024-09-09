import { IQuestion, OptionChar } from "./question";

export interface ITest {
    type: TestType;
    viewType: TestViewType;
    questions: ITestQuestion[];
    currentQuestionNo?: number;
    isFinished: boolean;
    isPaused: boolean;
    showFullTranslate?: boolean;
    showAnswer?: boolean;
}

export enum TestType {
    Practice,
    MockTest
}

export interface ITestQuestion extends IQuestion {
    questionNo?: number;
    flagged?: boolean;
    selectedOptionChar?: OptionChar;
}

export enum TestViewType {
    default,
    flags,
    review,
    reviewIncorrects,
    none
}

export interface ITestParam {
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

export enum TestCategory {
    topic,
    random,
    incorrects,
    unanswered,
    incorrectAndUnanswered,
    videos
}

export interface ITestResults {
    date: Date;
    type: TestType;
    questions: ITestQuestion[];
}
