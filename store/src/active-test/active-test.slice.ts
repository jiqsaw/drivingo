import { DATA_TEST_QUESTIONS } from "@drivingo/data";
import { CONSTANTS } from "@drivingo/global";
import { OptionChar, TestCategory, TestType } from "@drivingo/models";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { cloneDeep, sample, sampleSize } from 'lodash';
import { IStoreTheoryActiveTest, IStoreTheoryActiveTestParam, IStoreTheoryActiveTestQuestion, StoreTheoryActiveTestView } from "./active-test.model";

export default createSlice({
    name: 'active-test',
    initialState: {} as IStoreTheoryActiveTest,
    reducers: {

        generate(state, action: PayloadAction<IStoreTheoryActiveTestParam>) {
            state.type = action.payload.type;
            state.viewType = StoreTheoryActiveTestView.default;
            state.showAnswer = false;
            state.isFinished = false;
            state.isPaused = false;
            state.currentQuestionNo = 1;

            const dataQuestions = cloneDeep(DATA_TEST_QUESTIONS.filter(e => e.topicCode !== 'videos'));
            let questions: IStoreTheoryActiveTestQuestion[] = [];

            if (action.payload.type === TestType.MockTest) {

                questions = sampleSize(dataQuestions, CONSTANTS.mockTestInfo.questionAmount - CONSTANTS.mockTestInfo.videoQuestionAmount);

                const videoQuestions = cloneDeep(DATA_TEST_QUESTIONS.filter(e => e.topicCode === 'videos'));
                const sampleItem = sample(videoQuestions);
                const selectVideoQuestions = videoQuestions.filter(e => e.questionVideo === sampleItem?.questionVideo);

                questions = [...questions, ...selectVideoQuestions];
            }

            if (action.payload.type === TestType.LearnPractice) {
                const params = action.payload.filter;
                switch (params?.category) {
                    case TestCategory.topic:
                        questions = dataQuestions.filter(e => e.topicCode === params.topicCode);

                        if (params.locationCode && params.category === TestCategory.topic) {
                            const locationIndex = questions.findIndex(e => e.code === params.locationCode);

                            if (locationIndex && (locationIndex < questions.length - 2)) {
                                state.currentQuestionNo = locationIndex + 1;
                            }
                        }

                        // questions = sampleSize(questions, questions.length);
                        break;
                }

                if (questions.length === 0) {
                    console.warn('no question found, instead, generated randomly!');
                    questions = sampleSize(dataQuestions, params?.numberOfQuestion);
                }
            }

            questions.map((e, i) => { e.questionNo = i + 1; });
            state.questions = questions;

        },

        nextQuestion(state, action: PayloadAction<number>) {
            if (state.currentQuestionNo && (action.payload !== null)) {
                if (state.type !== TestType.MockTest) {
                    state.showAnswer = false;
                }
                state.currentQuestionNo = action.payload;
            }
        },

        toggleFlag(state, action: PayloadAction<boolean>) {
            const item = state.questions.find(e => e.questionNo === state.currentQuestionNo);
            if (item) {
                item.flagged = action.payload;
            }
        },

        selectOption(state, action: PayloadAction<OptionChar>) {
            const item = state.questions.find(e => e.questionNo === state.currentQuestionNo);
            if (item) {
                if (state.type !== TestType.MockTest && state.showAnswer) {
                    state.showAnswer = false;
                }
                item.selectedOptionChar = action.payload;
            }
        },

        updateViewType(state, action: PayloadAction<{ testViewType: StoreTheoryActiveTestView, currentQuestionNo?: number; }>) {
            state.viewType = action.payload.testViewType;
            if (action.payload.currentQuestionNo) {
                state.currentQuestionNo = action.payload.currentQuestionNo;
            } else {
                if (state.viewType === StoreTheoryActiveTestView.flags) {
                    state.currentQuestionNo = state.questions.filter(e => e.flagged === true)[0].questionNo;
                }
            }
        },

        pause(state) { state.isPaused = true; },
        unpause(state) { state.isPaused = false; },

        showFullTranslate(state, action: PayloadAction<boolean>) {
            state.showFullTranslate = action.payload;
        },

        showAnswer(state, action: PayloadAction<boolean>) {
            state.showAnswer = action.payload;
        },

        finish(state) {
            state.questions.map(e => e.flagged = false);
            state.viewType = StoreTheoryActiveTestView.none;
            state.isFinished = true;
            if (state.type === TestType.LearnPractice) {
                state.questions = state.questions.filter(e => e.selectedOptionChar !== undefined);
            }
        }

    }
});


