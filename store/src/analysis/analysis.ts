import analysisSelectors from './analysis.selectors';
import analysisSlice from './analysis.slice';

export const storeAnalysisReducer = analysisSlice.reducer;
export const storeAnalysisActions = analysisSlice.actions;
export const storeAnalysisSelectors = analysisSelectors;
