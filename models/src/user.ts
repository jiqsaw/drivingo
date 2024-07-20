
export interface IUser extends IUserProfile {
  email: string | null;
  displayName: string | null;
}
export interface IUserProfile {
  languageCode: string | null;
  permissions: { pushNotificationId: string | null };
  testDate: string | null;
  preferences: IUserPreferences;
  progress: IUserProgress;
}

export interface IUserPreferences {
  quickTestNumberOfQuestions: number;
  hideMockTestGuide: boolean;
}

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
