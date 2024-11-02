import { Theme } from '@drivingo/models';

export interface IStoreUI {
    theme: Theme;
    quickTestNumberOfQuestions: number;
    hideMockTestIntroduction: boolean;
    network: IStoreNetwork;
}

export interface IStoreNetwork {
    connected: boolean;
    connectionType: string;
}
