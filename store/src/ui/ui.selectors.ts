import { createSelector } from '@reduxjs/toolkit';
import { AppState } from '../store';

const ui = (state: AppState) => state.ui;
const theme = createSelector([ui], (ui) => {
    if (ui.theme === null) {
        return window.matchMedia('(prefers-color-scheme: dark)').matches
            ? 'dark'
            : 'light';
    }
    return ui.theme;
});
const closeMockTestIntroduction = createSelector(
    [ui],
    (ui) => ui.hideMockTestIntroduction,
);

const networkStatus = createSelector([ui], (ui) => ui.network);

const quickTestNumberOfQuestions = createSelector(
    [ui],
    (ui) => ui.quickTestNumberOfQuestions,
);

const language = createSelector([ui], (ui) => ui.language);

const questionBank = createSelector([ui], (ui) => ui.questionBank);

export default {
    ui,
    theme,
    closeMockTestIntroduction,
    networkStatus,
    quickTestNumberOfQuestions,
    language,
    questionBank,
};
