import { AppState } from '../../store';
import activeHazardSlice from './active-hazard.slice';

export const storeTheoryActiveHazardReducers = activeHazardSlice.reducer;
export const storeTheoryActiveHazardActions = activeHazardSlice.actions;
export const storeTheoryActiveHazardSelectors = {
    activeHazard: (state: AppState) => state.theory.activeHazard,
};
