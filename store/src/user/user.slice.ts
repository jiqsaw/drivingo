import { createSlice } from '@reduxjs/toolkit';
import { IStoreUser } from './user.model';

export default createSlice({
    name: 'user',
    initialState: {
        // isLoggedIn: false,
        isLoggedIn: true, // logged in for test purposes ???
    } as IStoreUser,
    reducers: {},
});
