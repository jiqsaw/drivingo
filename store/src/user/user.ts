import { AppState } from '../store';
import userSlice from './user.slice';

export const storeUserReducer = userSlice.reducer;
export const storeUserActions = userSlice.actions;
export const storeUserSelectors = {
    user: (state: AppState) => state.user,
    isLoggedIn: (state: AppState) => state.user.isLoggedIn,
};
