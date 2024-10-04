import { AppState } from '..';
import uiSlice from './ui.slice';

export const storeUiReducers = uiSlice.reducer;
export const storeUiActions = uiSlice.actions;
export const storeUiSelectors = {
    selectUiTheme: (state: AppState) => {
        // return 'light';
        return 'dark';
        if (state.ui.theme === null) {
            return window.matchMedia('(prefers-color-scheme: dark)').matches
                ? 'dark'
                : 'light';
        }
        return state.ui.theme;
    },
    closeMockTestIntroduction: (state: AppState) => {
        return state.ui.hideMockTestIntroduction;
    },
    selectNetwork: (state: AppState) => {
        return state.ui.network;
    },
};
