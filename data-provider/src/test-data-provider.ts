import {
    DATA_TEST_EXPLANATIONS,
    DATA_TEST_IMAGES,
    DATA_TEST_QUESTIONS,
} from '@drivingo/data';
import { CONSTANTS } from '@drivingo/global';
import { ITopic, OptionChar } from '@drivingo/models';
import { cloneDeep, sampleSize } from 'lodash';

export const TestDataProvider = {
    imgBasePath: 'data-images/test/',
    getNewLearnPracticeTest: (filteredTopics?: ITopic[]) => {
        let questions = cloneDeep(DATA_TEST_QUESTIONS);
        if (filteredTopics) {
            questions = questions.filter((item) =>
                filteredTopics
                    ?.map((topic) => topic.code)
                    .includes(item.topicCode),
            );
        }
        return questions;
    },
    getNewQuickTest: (numberOfQuestions: number, filteredTopics?: ITopic[]) => {
        let questions = cloneDeep(DATA_TEST_QUESTIONS);
        if (filteredTopics) {
            questions = questions.filter((item) =>
                filteredTopics
                    ?.map((topic) => topic.code)
                    .includes(item.topicCode),
            );
        }
        return sampleSize(questions, numberOfQuestions);
    },
    getNewMockTest: () => {
        let questions = cloneDeep(DATA_TEST_QUESTIONS);
        return sampleSize(questions, CONSTANTS.mockTestInfo.questionsLength);
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
    getExplanation(questionCode: string) {
        return DATA_TEST_EXPLANATIONS.find(
            (item) => item.questionCode === questionCode,
        )?.content;
    },
};
