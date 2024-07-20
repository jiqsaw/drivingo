import { IUserProgressHazardPerception, IUserProgressMockTest, IUserProgressPractice } from "./user";

export interface IStoreHistory {
  practice: IUserProgressPractice;
  mockTest: IUserProgressMockTest;
  hazardPerception: IUserProgressHazardPerception[];
}
