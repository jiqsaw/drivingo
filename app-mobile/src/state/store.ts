import { combineReducers } from "redux";
import { uiSlice } from "./ui/ui.slice";
import { configureStore } from "@reduxjs/toolkit";
import { activeTestSlice } from "./active-test/active-test.slice";
import { historySlice } from "./history/history.slice";
import { persistStore, persistReducer } from 'redux-persist';
import { userDetailSlice } from "./user-detail/user-detail.slice";
import { activeHazardPerceptionSlice } from "./active-hazard-perception/active-hazard-perception";
import { thunk } from 'redux-thunk';
import storage from 'redux-persist/lib/storage';


export const rootReducer = combineReducers({
  userDetails: userDetailSlice.reducer,
  activeTest: activeTestSlice.reducer,
  activeHazardPerception: activeHazardPerceptionSlice.reducer,
  ui: uiSlice.reducer,
  history: historySlice.reducer,
});

export type AppState = ReturnType<typeof rootReducer>;

const persistConfig = {
  key: 'root',
  version: 0,
  storage: storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer
})

export const persistor = persistStore(store)
