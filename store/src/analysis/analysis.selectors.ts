import { createSelector } from '@reduxjs/toolkit';
import { AppState } from '../store';

const analysis = (state: AppState) => state.analysis;

const hazardPerceptionResults = createSelector(
    analysis,
    (analysis) => analysis.hazardPerception,
);

export default {
    analysis,
    hazardPerceptionResults,
};
