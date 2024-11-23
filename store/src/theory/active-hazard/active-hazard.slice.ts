import { HazardPerceptionDataProvider } from '@drivingo/data-provider';
import { CONSTANTS } from '@drivingo/global';
import { HazardView } from '@drivingo/models';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import {
    IStoreTheoryActiveHazard,
    IStoreTheoryActiveHazardUserFlag,
} from './active-hazard.model';

export default createSlice({
    name: 'active-hazard-perception',
    initialState: {} as IStoreTheoryActiveHazard,
    reducers: {
        start: (state, action: PayloadAction<{ clipCode: string }>) => {
            state.clipCode = action.payload.clipCode;
            state.score = null;
            state.scoreFlag = null;
            state.videoData = HazardPerceptionDataProvider.getContentDetail(
                action.payload.clipCode,
            );
            state.videoSource = HazardPerceptionDataProvider.getClipUrl(
                action.payload.clipCode,
            );
            state.viewMode = HazardView.Test;
            state.userFlags = [];
        },

        addFlag(
            state,
            action: PayloadAction<IStoreTheoryActiveHazardUserFlag>,
        ) {
            state.userFlags = [...state.userFlags, action.payload];
        },

        finish(state) {
            state.score = 0;
            if (state.userFlags.length < CONSTANTS.hazardClipMaxFlag) {
                if (state.videoData) {
                    const seconds = state.userFlags.map((item) => item.second);
                    for (const second of seconds) {
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
            state.userFlags = [];
            // ??? Db ye yaz
        },

        review(state) {
            state.viewMode = HazardView.Review;
            if (state.videoData?.hasReviewVideo) {
                // state.videoSource = FileSystem.documentDirectory + CONSTANTS.storageHazard.folder + 'clip' + state.clipCode + '-review.mp4';
            }
        },
    },
});
