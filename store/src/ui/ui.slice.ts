import { CONSTANTS } from '@drivingo/global';
import { QuestionBank } from '@drivingo/models';
import { createSlice } from '@reduxjs/toolkit';
import { IStoreUI } from './ui.model';

const uiInitialState: IStoreUI = {
    theme: null,
    questionBank: QuestionBank.Car,
    quickTestNumberOfQuestions: CONSTANTS.quickTestNumberOfQuestionsDefault,
    hideMockTestIntroduction: false,
    network: {
        connected: true,
        connectionType: '',
    },
    // language: 'tr-TR', // ???? temprary mock
};

export default createSlice({
    name: 'ui',
    initialState: uiInitialState,
    reducers: {
        switchTheme: (state) => {
            state.theme = state.theme === 'dark' ? 'light' : 'dark';
        },
        mockTestIntroductionClose: (state) => {
            state.hideMockTestIntroduction = true;
        },
        networkStatusChange: (state = uiInitialState, action) => {
            state.network = {
                connected: action.payload.connected,
                connectionType: action.payload.connectionType,
            };
        },
        updateQuickTestNumberOfQuestions: (state, action) => {
            state.quickTestNumberOfQuestions = action.payload;
        },
        setLanguage: (state, action) => {
            state.language = action.payload;
        },
    },
});
