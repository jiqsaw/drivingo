import { TestDataProvider } from '@drivingo/data-provider';
import { ITopic, OptionChar, TestType } from '@drivingo/models';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { getCurrentQuestion } from './active-test-utils';
import {
    IStoreTheoryActiveTest,
    IStoreTheoryActiveTestQuestion,
    StoreTheoryActiveTestView,
} from './active-test.model';

const initialState: IStoreTheoryActiveTest = {
    viewType: StoreTheoryActiveTestView.notActive,
    isPaused: false,
    indexLocator: 0,
    showFlaggedOnly: false,
    questions: [],
};
export default createSlice({
    name: 'theory/activeTest',
    initialState: initialState,
    reducers: {
        initialise: (_state, action: PayloadAction<{ type: TestType }>) => {
            return {
                ...initialState,
                type: action.payload.type,
            };
        },
        addTopics: (state, action: PayloadAction<ITopic[]>) => {
            state.includingTopics = action.payload;
        },
        start: (
            state,
            action: PayloadAction<{ numberOfQuestions?: number }>,
        ) => {
            const questions: IStoreTheoryActiveTestQuestion[] =
                TestDataProvider.getQuestions(
                    state.includingTopics,
                    action.payload.numberOfQuestions,
                );
            state.questions = questions;
            state.viewType = StoreTheoryActiveTestView.active;
        },
        selectOption: (state, action: PayloadAction<OptionChar>) => {
            const item = getCurrentQuestion(state);
            if (item) {
                item.selectedOptionChar =
                    item.selectedOptionChar === action.payload
                        ? undefined
                        : action.payload;
            }
        },
        flag(state) {
            const item = getCurrentQuestion(state);
            if (item) {
                item.isFlagged = !item.isFlagged;
            }
        },
        next(state) {
            state.indexLocator = state.indexLocator + 1;
        },
        prev(state) {
            state.indexLocator = state.indexLocator - 1;
        },
        finish(state) {
            //????
            state.questions.map((e) => (e.isFlagged = false));
            state.viewType = StoreTheoryActiveTestView.notActive;

            if (state.type === TestType.LearnPractice) {
                // Take the unanswered question out of the progress
                state.questions = state.questions.filter(
                    (e) => e.selectedOptionChar !== undefined,
                );
            }
        },
        exit(_state) {
            return { ...initialState };
        },
    },
});
