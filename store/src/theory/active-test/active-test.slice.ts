import { TestDataProvider } from '@drivingo/data-provider';
import {
    ITopic,
    OptionChar,
    TestLearnPracticeGroup,
    TestType,
    TestView,
} from '@drivingo/models';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import {
    getActiveTestQuestions,
    getCurrentQuestion,
    getNextFlaggedQuestionIndex,
    getPrevFlaggedQuestionIndex,
} from './active-test-utils';
import { IStoreTheoryActiveTest } from './active-test.model';

const initialState: IStoreTheoryActiveTest = {
    view: TestView.NotActive,
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
        selectTopic: (state, action: PayloadAction<{ topic: ITopic }>) => {
            const topic = action.payload.topic;
            if (!state.filteredTopics) {
                state.filteredTopics = [topic];
            } else {
                const isExist = state.filteredTopics.some(
                    (item) => item.code === topic.code,
                );
                if (isExist) {
                    state.filteredTopics = state.filteredTopics.filter(
                        (item) => item.code !== topic.code,
                    );
                } else {
                    state.filteredTopics = [...state.filteredTopics, topic];
                }
            }
        },
        startLearnPracticeTest: (
            state,
            action: PayloadAction<{
                testLearnPracticeGroup: TestLearnPracticeGroup;
            }>,
        ) => {
            state.type = TestType.LearnPractice;
            // Unanswered etc filtre ???
            state.questions = TestDataProvider.getNewLearnPracticeTest(
                action.payload.testLearnPracticeGroup,
                state.filteredTopics,
            );
            state.view = TestView.Active;
        },
        startQuickTest: (
            state,
            action: PayloadAction<{
                numberOfQuestions: number;
            }>,
        ) => {
            state.type = TestType.QuickTest;
            state.questions = TestDataProvider.getNewQuickTest(
                action.payload.numberOfQuestions,
                state.filteredTopics,
            );
            state.view = TestView.Active;
        },
        startMockTest: (state) => {
            state.type = TestType.MockTest;
            state.questions = TestDataProvider.getNewMockTest();
            state.view = TestView.Active;
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
                    getActiveTestQuestions(state),
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
                    getActiveTestQuestions(state),
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
        pause(state) {
            state.isPaused = true;
        },
        unpause(state) {
            state.isPaused = false;
        },
        finish(state) {
            state.view = TestView.NotActive;
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
