import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { activeHazardPerceptionSlice } from "./active-hazard-perception/active-hazard-perception";
import { activeTestSlice } from "./active-test/active-test.slice";
import { historySlice } from "./history/history.slice";
import { uiSlice } from "./ui/ui.slice";
import { userDetailSlice } from "./user-detail/user-detail.slice";


export const rootReducer = combineReducers({
  userDetails: userDetailSlice.reducer,
  activeTest: activeTestSlice.reducer,
  activeHazardPerception: activeHazardPerceptionSlice.reducer,
  ui: uiSlice.reducer,
  history: historySlice.reducer,
});

export type AppState = ReturnType<typeof rootReducer>;

const persistConfig = {
  version: 0,
  storage: storage,
  key: 'drivingo-store-root',
  blacklist: ['activeTest', 'activeHazardPerception'],
  debug: false,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer
});

export const persistor = persistStore(store);
