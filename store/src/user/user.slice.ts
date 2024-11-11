import { IUser } from '@drivingo/models';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { IStoreUser } from './user.model';

const initialState: IStoreUser = {
    isLoggedIn: false,
    uid: null,
    displayName: null,
    email: null,
    photoURL: null,
};
export default createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state, action: PayloadAction<IUser>) => {
            state.isLoggedIn = true;

            const { uid, displayName, email, photoURL } = action.payload;
            state.uid = uid;
            if (displayName) {
                state.displayName = displayName;
            }
            if (email) {
                state.email = email;
            }
            if (photoURL) {
                state.photoURL = photoURL;
            }
        },
        clearUser: (_state) => {
            return initialState;
        },
    },
});
