import { combineReducers } from "redux";
import { fetchInitialTheme, uiSlice } from "./ui/ui.slice";
import { configureStore } from "@reduxjs/toolkit";
export const rootReducer = combineReducers({
  ui: uiSlice.reducer,
});

export type AppState = ReturnType<typeof rootReducer>;
export const store = configureStore({
  reducer: rootReducer,
});

store.dispatch(fetchInitialTheme());
