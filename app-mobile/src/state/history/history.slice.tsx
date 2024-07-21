
import { createSlice } from "@reduxjs/toolkit";
import { AppState } from "../store";
import { IStoreHistory } from "@drivingo/models";


export const historySlice = createSlice({
  name: 'history',
  initialState: {
    name: ""
  } as IStoreHistory,
  reducers: {

  },
});


export const historyActions = historySlice.actions;
export const selectHistory = (state: AppState) => state.history;
