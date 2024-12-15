import { IQuestionBank, QuestionBank } from '@drivingo/models';
import { DATA_TEST_ADI_EXPLANATIONS, DATA_TEST_ADI_QUESTIONS } from './adi';
import { DATA_TEST_CAR_EXPLANATIONS, DATA_TEST_CAR_QUESTIONS } from './car';
import {
    DATA_TEST_LGVPCV_EXPLANATIONS,
    DATA_TEST_LGVPCV_QUESTIONS,
} from './lgv-pcv';
import {
    DATA_TEST_MOTORCYCLE_EXPLANATIONS,
    DATA_TEST_MOTORCYCLE_QUESTIONS,
} from './motorcycle';

export const DATA_QUESTION_BANK: IQuestionBank[] = [
    {
        type: QuestionBank.Car,
        data: {
            questions: DATA_TEST_CAR_QUESTIONS,
            explanations: DATA_TEST_CAR_EXPLANATIONS,
        },
    },
    {
        type: QuestionBank.Motorcycle,
        data: {
            questions: DATA_TEST_MOTORCYCLE_QUESTIONS,
            explanations: DATA_TEST_MOTORCYCLE_EXPLANATIONS,
        },
    },
    {
        type: QuestionBank.LGV_PCV,
        data: {
            questions: DATA_TEST_LGVPCV_QUESTIONS,
            explanations: DATA_TEST_LGVPCV_EXPLANATIONS,
        },
    },
    {
        type: QuestionBank.ADI,
        data: {
            questions: DATA_TEST_ADI_QUESTIONS,
            explanations: DATA_TEST_ADI_EXPLANATIONS,
        },
    },
];
