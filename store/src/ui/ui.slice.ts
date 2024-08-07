import { createSlice } from "@reduxjs/toolkit";
import { IStoreUI } from "./ui.model";


const uiInitialState: IStoreUI = {
    theme: null,
    quickTestNumberOfQuestions: 10,
    hideMockTestIntroduction: false,
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
        }
    },
});
