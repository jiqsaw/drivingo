export interface IUserProgress {
  practice: IUserProgressPractice;
  mockTest: IUserProgressMockTest;
  hazardPerception: IUserProgressHazardPerception[];
}
export interface IUserProgressPractice {
  topics: IUserTopicResult[];
  results: IUserTestResult[];
  corrects: string[];
  incorrects: string[];
}
export interface IUserProgressMockTest {
  average: number;
  lastCorrectCount: number;
  lastQuestionAmount: number;
  topics: IUserTopicResult[];
  results: IUserTestResult[];
}
export interface IUserTopicResult {
  code: string;
  correct?: number;
  incorrect?: number;
  locationCode?: string;
}
export interface IUserTestResult {
  date: any;
  correct: number;
  total: number;
}
export interface IUserProgressHazardPerception {
  date: any;
  clipCode: string;
  score: number;
}
