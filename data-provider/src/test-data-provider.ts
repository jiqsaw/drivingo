import { DATA_TEST_QUESTIONS } from '@drivingo/data';
import { ITopic } from '@drivingo/models';
import { cloneDeep, sampleSize } from 'lodash';

export const TestDataProvider = {
    getQuestions: (includingTopics?: ITopic[], numberOfQuestions?: number) => {
        let questions = cloneDeep(DATA_TEST_QUESTIONS);
        if (includingTopics) {
            questions = questions.filter((item) =>
                includingTopics
                    ?.map((topic) => topic.code)
                    .includes(item.topicCode),
            );
        }
        if (numberOfQuestions) {
            questions = sampleSize(questions, numberOfQuestions);
        }
        return questions;
    },
};
