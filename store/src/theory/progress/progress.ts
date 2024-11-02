import { AppState } from '../../store';
import progressSlice from './progress.slice';

export const storeTheoryProgressReducer = progressSlice.reducer;
export const storeTheoryProgressActions = progressSlice.actions;
export const storeTheoryProgressSelectors = {
    progress: (state: AppState) => state.theory.progress,
};
