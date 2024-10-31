import { DATA_TEST_IMAGES, DATA_TEST_QUESTIONS } from '@drivingo/data';
import { ITopic, OptionChar } from '@drivingo/models';
import { cloneDeep, sampleSize } from 'lodash';

export const TestDataProvider = {
    imgBasePath: 'data-images/test/',
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
    getQuestionImage(code: string) {
        const imgItem = DATA_TEST_IMAGES.find(
            (item) => item.code === code && !item.option,
        );
        if (imgItem) {
            return this.imgBasePath + imgItem.src;
        }
        return '';
    },
    getOptionImage(code: string, option: OptionChar) {
        const imgItem = DATA_TEST_IMAGES.find(
            (item) => item.code === code && item.option === option,
        );
        if (imgItem) {
            return this.imgBasePath + imgItem.src;
        }
        return '';
    },
};
