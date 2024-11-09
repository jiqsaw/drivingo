import { AppState } from '../store';
import analysisSlice from './analysis.slice';

export const storeAnalysisReducer = analysisSlice.reducer;
export const storeAnalysisActions = analysisSlice.actions;
export const storeAnalysisSelectors = {
    analysis: (state: AppState) => state.analysis,
};
