import { combineReducers } from "redux";
import { fetchInitialTheme, uiSlice } from "./ui/ui.slice";
import { configureStore } from "@reduxjs/toolkit";
import { activeTestSlice } from "./active-test/active-test.slice";
import { historySlice } from "./history/history.slice";
import { userDetailSlice } from "./user-detail/user-detail.slice";
import { activeHazardPerceptionSlice } from "./active-hazard-perception/active-hazard-perception";

export const rootReducer = combineReducers({
  userDetails: userDetailSlice.reducer,
  activeTest: activeTestSlice.reducer,
  activeHazardPerception: activeHazardPerceptionSlice.reducer,
  ui: uiSlice.reducer,
  history: historySlice.reducer,
});

export type AppState = ReturnType<typeof rootReducer>;
export const store = configureStore({
  reducer: rootReducer,
});
