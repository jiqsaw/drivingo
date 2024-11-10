import { ISubscription } from '@drivingo/models';
import { createSlice } from '@reduxjs/toolkit';

export default createSlice({
    name: 'subscription',
    initialState: ISubscription.None,
    reducers: {},
});
