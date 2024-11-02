import { TestDataProvider } from '@drivingo/data-provider';
import { ITopic, OptionChar, TestType, TestView } from '@drivingo/models';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import {
    getCurrentQuestion,
    getNextFlaggedQuestionIndex,
    getPrevFlaggedQuestionIndex,
    getQuestions,
} from './active-test-utils';
import { IStoreTheoryActiveTest } from './active-test.model';

const initialState: IStoreTheoryActiveTest = {
    view: TestView.notActive,
    isPaused: false,
    indexLocator: 0,
    showFlaggedOnly: false,
    questions: [],
};
export default createSlice({
    name: 'theory/activeTest',
    initialState: initialState,
    reducers: {
        addTopics: (state, action: PayloadAction<ITopic[]>) => {
            state.filteredTopics = action.payload;
        },
        start: (
            state,
            action: PayloadAction<{
                numberOfQuestions?: number;
                type: TestType;
            }>,
        ) => {
            state.type = action.payload.type;
            state.questions = TestDataProvider.getQuestions(
                action.payload.numberOfQuestions,
                state.type !== TestType.MockTest
                    ? state.filteredTopics
                    : undefined,
            );
            state.view = TestView.active;
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
            if (!state.showFlaggedOnly) {
                state.indexLocator = state.indexLocator + 1;
            } else {
                let nextFlaggedQuestionIndex = getNextFlaggedQuestionIndex(
                    getQuestions(state),
                    state.indexLocator,
                );
                if (nextFlaggedQuestionIndex >= 0) {
                    state.indexLocator = nextFlaggedQuestionIndex;
                } else {
                    console.error(
                        'There are no flagged questions but Review flagged questions on next requested.',
                    );
                }
            }
        },
        prev(state) {
            if (!state.showFlaggedOnly) {
                state.indexLocator = state.indexLocator - 1;
            } else {
                let prevFlaggedQuestionIndex = getPrevFlaggedQuestionIndex(
                    getQuestions(state),
                    state.indexLocator,
                );
                if (prevFlaggedQuestionIndex >= 0) {
                    state.indexLocator = prevFlaggedQuestionIndex;
                } else {
                    console.error(
                        'There are no flagged questions but Review flagged questions on prev requested.',
                    );
                }
            }
        },
        showFlaggedQuestions(state) {
            state.showFlaggedOnly = true;
            state.indexLocator = 0;
        },
        finish(state) {
            state.view = TestView.notActive;
            state.questions.map((item) => (item.isFlagged = false));
        },
        updateView(state, action: PayloadAction<{ view: TestView }>) {
            state.view = action.payload.view;
        },
        exit(_state) {
            return { ...initialState };
        },
    },
});
