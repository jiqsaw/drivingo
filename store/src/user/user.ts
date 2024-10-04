import { AppState } from '../store';
import userSlice from './user.slice';

export const storeUserReducer = userSlice.reducer;
export const storeUserActions = userSlice.actions;
export const storeUserSelectors = {
    selectUser: (state: AppState) => state.user,
};
