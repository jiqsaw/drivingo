import { TestDataProvider } from '@drivingo/data-provider';
import { ITopic, OptionChar } from '@drivingo/models';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import {
    IStoreTheoryActiveTest,
    IStoreTheoryActiveTestInitialParams,
    IStoreTheoryActiveTestQuestion,
    StoreTheoryActiveTestView,
} from './active-test.model';
import {
    getActiveTestQuestions,
    getCurrentQuestion,
} from './active-test.selectors';

const initialState: IStoreTheoryActiveTest = {
    viewType: StoreTheoryActiveTestView.default,
    isFinished: false,
    isPaused: false,
    questionLocatorIndex: 0,
    questions: [],
};
export default createSlice({
    name: 'theory/activeTest',
    initialState: initialState,
    reducers: {
        initialise: (
            _state,
            action: PayloadAction<IStoreTheoryActiveTestInitialParams>,
        ) => {
            return {
                ...initialState,
                type: action.payload.type,
                numberOfQuestions: action.payload.numberOfQuestions,
                viewType: StoreTheoryActiveTestView.default,
            };
        },
        updateNumberOfQuestions: (state, action: PayloadAction<number>) => {
            state.numberOfQuestions = action.payload;
        },
        addTopics: (state, action: PayloadAction<ITopic[]>) => {
            state.includingTopics = action.payload;
        },
        start: (state) => {
            const questions: IStoreTheoryActiveTestQuestion[] =
                TestDataProvider.getQuestions(
                    state.includingTopics,
                    state.numberOfQuestions,
                );
            state.questions = questions;
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
            state.questionLocatorIndex = state.questionLocatorIndex + 1;
        },
        prev(state) {
            state.questionLocatorIndex = state.questionLocatorIndex - 1;
        },
        finish(state) {
            //????
            state.questions.map((e) => (e.isFlagged = false));
            (state.viewType = StoreTheoryActiveTestView.default),
                (state.isFinished = true);
        },
    },
});
