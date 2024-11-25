import { QuestionBank, Theme } from '@drivingo/models';

export interface IStoreUI {
    theme: Theme;
    questionBank: QuestionBank;
    quickTestNumberOfQuestions: number;
    hideMockTestIntroduction: boolean;
    network: IStoreNetwork;
    language?: string;
}

export interface IStoreNetwork {
    connected: boolean;
    connectionType: string;
}
