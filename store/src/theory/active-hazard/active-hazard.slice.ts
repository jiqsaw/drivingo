import { HazardPerceptionDataProvider } from '@drivingo/data-provider';
import { CONSTANTS } from '@drivingo/global';
import { HazardView } from '@drivingo/models';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { IStoreTheoryActiveHazard } from './active-hazard.model';

export default createSlice({
    name: 'active-hazard-perception',
    initialState: {} as IStoreTheoryActiveHazard,
    reducers: {
        init: (state, action: PayloadAction<{ clipCode: string }>) => {
            state.clipCode = action.payload.clipCode;
            state.score = null;
            state.scoreFlag = null;
            state.videoData = HazardPerceptionDataProvider.getContentDetail(
                action.payload.clipCode,
            );
            state.videoSource = HazardPerceptionDataProvider.getClipUrl(
                action.payload.clipCode,
            );
            state.viewMode = HazardView.Init;
            state.userFlags = [];
        },

        start: (state) => {
            state.viewMode = HazardView.Test;
        },

        addFlag(state, action: PayloadAction<{ second: number }>) {
            state.userFlags = [...state.userFlags, action.payload.second];
        },

        finish(state) {
            state.score = 0;
            if (state.userFlags.length < CONSTANTS.hazardClipMaxFlag) {
                if (state.videoData) {
                    for (const second of state.userFlags) {
                        for (const scoreWindow of state.videoData.scoreWindow) {
                            if (
                                second >= scoreWindow.start &&
                                second <= scoreWindow.end
                            ) {
                                state.score = scoreWindow.score;
                                state.scoreFlag = second;
                                break;
                            }
                        }
                        if (state.score > 0) {
                            break;
                        }
                    }
                }
            }
        },

        review(state) {
            state.viewMode = HazardView.Review;
            if (state.videoData?.hasReviewVideo) {
                state.videoSource = HazardPerceptionDataProvider.getClipUrl(
                    state.clipCode,
                    true,
                );
            }
        },
    },
});
