import { createSlice } from "@reduxjs/toolkit";
import { IStoreTheoryActiveTest } from "./active-test.model";

export default createSlice({
    name: 'active-test',
    initialState: {
        name: ""
    } as IStoreTheoryActiveTest,
    reducers: {

    },
});


