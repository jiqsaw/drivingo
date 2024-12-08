import { ITopicQuestionBank, QuestionBank } from '@drivingo/models';
import { DATA_TOPICS_ADI } from './adi';
import { DATA_TOPICS_CAR } from './car';
import { DATA_TOPICS_LGVPCV } from './lgv-pcv';
import { DATA_TOPICS_MOTORCYCLE } from './motorcycle';

export const DATA_TOPICS: ITopicQuestionBank[] = [
    {
        type: QuestionBank.Car,
        topics: DATA_TOPICS_CAR,
    },
    {
        type: QuestionBank.Motorcycle,
        topics: DATA_TOPICS_MOTORCYCLE,
    },
    {
        type: QuestionBank.LGV_PCV,
        topics: DATA_TOPICS_LGVPCV,
    },
    {
        type: QuestionBank.ADI,
        topics: DATA_TOPICS_ADI,
    },
];
