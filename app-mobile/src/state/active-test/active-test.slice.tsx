import { IStoreActiveTest } from "@drivingo/models";
import { createSlice } from "@reduxjs/toolkit";
import { AppState } from "../store";


export const activeTestSlice = createSlice({
  name: 'active-test',
  initialState: {
    name: ""
  } as IStoreActiveTest,
  reducers: {

  },
});


export const activeTestActions = activeTestSlice.actions;
export const selectActiveTest = (state: AppState) => state.activeTest;
