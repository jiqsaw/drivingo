import { createSlice } from '@reduxjs/toolkit';
import { IStoreProgress } from './progress.model';

export default createSlice({
    name: 'theory/progress',
    initialState: {} as IStoreProgress,
    reducers: {},
});
