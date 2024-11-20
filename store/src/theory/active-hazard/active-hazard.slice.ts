import { createSlice } from '@reduxjs/toolkit';
import { IStoreTheoryActiveHazard } from './active-hazard.model';

export default createSlice({
    name: 'active-hazard-perception',
    initialState: [] as IStoreTheoryActiveHazard[],
    reducers: {},
});
