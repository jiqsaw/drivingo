export interface IStoreUI {
  theme: 'dark' | 'light' | null,
  quickTestNumberOfQuestions: number,
  hideMockTestIntroduction: boolean
}
export interface IStoreUserDetails {
  name: string;
}
export interface IStoreActiveTest {
  name: string;
}
export interface IStoreActiveHazardPerception {
  name: string;
}
export interface IStoreHistory {
  name: string;
}
