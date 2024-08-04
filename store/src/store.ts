import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { storeTheoryActiveHazardReducers } from "./active-hazard/active-hazard";
import { storeTheoryActiveTestReducers } from "./active-test/active-test";
import { storeUiReducers } from "./ui/ui";
import { storeUserReducer } from "./user/user";

const persistConfig = {
    version: 0,
    storage: storage,
    key: 'drivingo-store-root',
    blacklist: ['activeTest', 'activeHazard'],
    debug: false,
    serialize: true
};

const rootReducer = combineReducers({
    user: storeUserReducer,
    ui: storeUiReducers,
    theory: combineReducers({
        activeTest: storeTheoryActiveTestReducers,
        activeHazard: storeTheoryActiveHazardReducers,
    })
});

export type AppState = ReturnType<typeof rootReducer>;

export const drivingoStore = configureStore({
    reducer: persistReducer(persistConfig, rootReducer),
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
});

export const persistor = persistStore(drivingoStore);
