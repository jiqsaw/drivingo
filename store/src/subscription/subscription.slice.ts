import { ISubscription } from '@drivingo/models';
import { createSlice } from '@reduxjs/toolkit';

export default createSlice({
    name: 'subscription',
    // initialState: ISubscription.None,
    initialState: ISubscription.UnlimitedAccessMonthly, // Subscribed for test purposes ???
    reducers: {
        unlimitedAccessMonthly: (state) => {
            return ISubscription.UnlimitedAccessMonthly;
        },
    },
});
