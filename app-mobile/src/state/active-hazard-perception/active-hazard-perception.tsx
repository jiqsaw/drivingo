import { IStoreActiveHazardPerception } from "@drivingo/models";
import { createSlice } from "@reduxjs/toolkit";
import { AppState } from "../store";


export const activeHazardPerceptionSlice = createSlice({
  name: 'active-hazard-perception',
  initialState: {
    name: ""
  } as IStoreActiveHazardPerception,
  reducers: {

  },
});

export const activeHazardPerceptionActions = activeHazardPerceptionSlice.actions;
export const selectactiveHazardPerception = (state: AppState) => state.activeHazardPerception;
