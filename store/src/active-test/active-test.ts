import { AppState } from "..";
import activeTestSlice from "./active-test.slice";

export const storeTheoryActiveTestReducers = activeTestSlice.reducer;
export const storeTheoryActiveTestActions = activeTestSlice.actions;
export const storeTheoryActiveTestSelectors = {
    selectActiveTest: (state: AppState) => state.theory.activeTest
};
