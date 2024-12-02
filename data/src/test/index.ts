import { IQuestionBank, QuestionBank } from '@drivingo/models';
import {
    DATA_TEST_CAR_EXPLANATIONS,
    DATA_TEST_CAR_IMAGES,
    DATA_TEST_CAR_QUESTIONS,
} from './car';

export const DATA_QUESTION_BANK: IQuestionBank[] = [
    {
        type: QuestionBank.Car,
        data: {
            questions: DATA_TEST_CAR_QUESTIONS,
            images: DATA_TEST_CAR_IMAGES,
            explanations: DATA_TEST_CAR_EXPLANATIONS,
        },
    },
    {
        type: QuestionBank.Motorcycle,
        data: {
            questions: DATA_TEST_CAR_QUESTIONS,
            images: DATA_TEST_CAR_IMAGES,
            explanations: DATA_TEST_CAR_EXPLANATIONS,
        },
    },
];
