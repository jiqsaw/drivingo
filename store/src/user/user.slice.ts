import { createSlice } from '@reduxjs/toolkit';
import { IStoreUser } from './user.model';

export default createSlice({
    name: 'user',
    initialState: {
        name: '',
    } as IStoreUser,
    reducers: {},
});
