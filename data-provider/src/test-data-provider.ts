import { DATA_QUESTION_BANK } from '@drivingo/data';
import { CONSTANTS } from '@drivingo/global';
import { ITopic, OptionChar, QuestionBank } from '@drivingo/models';
import { cloneDeep, sampleSize } from 'lodash';

export const currentQuestionBank = QuestionBank.Car;

export const TestDataProvider = {
    imgBasePath: 'data-images/test/',
    getQuestionBankData: (questionBank: QuestionBank.Car) => {
        return DATA_QUESTION_BANK.find((item) => item.type === questionBank)
            ?.data;
    },
    getQuestions: (questionBank: QuestionBank.Car) => {
        const data = TestDataProvider.getQuestionBankData(questionBank);
        if (data) {
            return cloneDeep(data.questions);
        }
        console.error('Questions can not be found! - ' + questionBank);
        return [];
    },
    getNewLearnPracticeTest: (filteredTopics?: ITopic[]) => {
        let questions = TestDataProvider.getQuestions(currentQuestionBank);
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
        let questions = TestDataProvider.getQuestions(currentQuestionBank);
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
        let questions = TestDataProvider.getQuestions(currentQuestionBank);
        return sampleSize(questions, CONSTANTS.mockTestInfo.questionsLength);
    },
    getQuestionImage(code: string) {
        const imgItem = TestDataProvider.getQuestionBankData(
            currentQuestionBank,
        )?.images.find((item) => item.code === code && !item.option);
        if (imgItem) {
            return this.imgBasePath + imgItem.src;
        }
        return '';
    },
    getOptionImage(code: string, option: OptionChar) {
        const imgItem = TestDataProvider.getQuestionBankData(
            currentQuestionBank,
        )?.images.find((item) => item.code === code && item.option === option);
        if (imgItem) {
            return this.imgBasePath + imgItem.src;
        }
        return '';
    },
    getExplanation(questionCode: string) {
        return TestDataProvider.getQuestionBankData(
            currentQuestionBank,
        )?.explanations.find((item) => item.questionCode === questionCode)
            ?.content;
    },
};
