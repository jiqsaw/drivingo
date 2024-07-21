
import { createSlice } from "@reduxjs/toolkit";
import { IStoreUserDetails } from "@drivingo/models";
import { AppState } from "../store";


export const userDetailSlice = createSlice({
  name: 'user-detail',
  initialState: {
    name: ""
  } as IStoreUserDetails,
  reducers: {

  },
});


export const userDetailActions = userDetailSlice.actions;
export const selectUserDetail = (state: AppState) => state.userDetails;
