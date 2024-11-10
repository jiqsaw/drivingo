import { AppState } from '../store';
import subscriptionSlice from './subscription.slice';

export const storeSubscriptionReducer = subscriptionSlice.reducer;
export const storeSubscriptionActions = subscriptionSlice.actions;
export const storeSubscriptionSelectors = {
    subscription: (state: AppState) => state.subscription,
};
