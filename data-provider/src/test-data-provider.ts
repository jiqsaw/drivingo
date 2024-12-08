import { DATA_QUESTION_BANK } from '@drivingo/data';
import { CONSTANTS } from '@drivingo/global';
import { ITopic, OptionChar, QuestionBank } from '@drivingo/models';
import { cloneDeep, sampleSize } from 'lodash';

class TestDataProviderSingleton {
    private static instance: TestDataProviderSingleton;

    private imgBasePath: string = 'data-images/test/';
    private _questionBank: QuestionBank = QuestionBank.Car;

    public get questionBank(): QuestionBank {
        return this._questionBank;
    }

    public set questionBank(value: QuestionBank) {
        this._questionBank = value;
    }

    private constructor() {
        // Private constructor to prevent direct instantiation
    }

    public static getInstance(): TestDataProviderSingleton {
        if (!TestDataProviderSingleton.instance) {
            TestDataProviderSingleton.instance =
                new TestDataProviderSingleton();
        }
        return TestDataProviderSingleton.instance;
    }

    public getQuestionBankData() {
        return DATA_QUESTION_BANK.find(
            (item) => item.type === this._questionBank,
        )?.data;
    }

    public getQuestions() {
        const data = this.getQuestionBankData();
        if (data) {
            return cloneDeep(data.questions);
        }
        return [];
    }

    public getNewLearnPracticeTest(filteredTopics?: ITopic[]) {
        let data = this.getQuestions();
        if (filteredTopics) {
            data = data.filter((item) =>
                filteredTopics
                    ?.map((topic) => topic.code)
                    .includes(item.topicCode),
            );
        }
        return data;
    }

    public getNewQuickTest(
        numberOfQuestions: number,
        filteredTopics?: ITopic[],
    ) {
        console.log('getNewQuickTest:');
        let data = this.getQuestions();
        if (filteredTopics) {
            data = data.filter((item) =>
                filteredTopics
                    ?.map((topic) => topic.code)
                    .includes(item.topicCode),
            );
        }
        return sampleSize(data, numberOfQuestions);
    }

    public getNewMockTest() {
        let data = this.getQuestions();
        return sampleSize(data, CONSTANTS.mockTestInfo.questionsLength);
    }

    public getQuestionImage(code: string) {
        const imgItem = this.getQuestionBankData()?.images.find(
            (item) => item.code === code && !item.option,
        );
        if (imgItem) {
            return this.imgBasePath + imgItem.src;
        }
        return '';
    }

    public getOptionImage(code: string, option: OptionChar) {
        const imgItem = this.getQuestionBankData()?.images.find(
            (item) => item.code === code && item.option === option,
        );
        if (imgItem) {
            return this.imgBasePath + imgItem.src;
        }
        return '';
    }

    public getExplanation(questionCode: string) {
        return this.getQuestionBankData()?.explanations.find(
            (item) => item.questionCode === questionCode,
        )?.content;
    }
}

// Exporting the singleton instance
export const TestDataProvider = TestDataProviderSingleton.getInstance();

// export const TestDataProvider = {
//     imgBasePath: 'data-images/test/',
//     questionBank: () => {
//         const activeQuestionBank = uiSelectors.questionBank(
//             drivingoStore.getState(),
//         );
//         return activeQuestionBank;
//     },
//     getQuestionBankData: () => {
//         return DATA_QUESTION_BANK.find(
//             (item) => item.type === TestDataProvider.questionBank(),
//         )?.data;
//     },
//     getQuestions: () => {
//         const data = TestDataProvider.getQuestionBankData();
//         if (data) {
//             return cloneDeep(data.questions);
//         }
//         console.error('Questions can not be found! - ');
//         return [];
//     },
//     getNewLearnPracticeTest: (filteredTopics?: ITopic[]) => {
//         let data = TestDataProvider.getQuestions();
//         if (filteredTopics) {
//             data = data.filter((item) =>
//                 filteredTopics
//                     ?.map((topic) => topic.code)
//                     .includes(item.topicCode),
//             );
//         }
//         return data;
//     },
//     getNewQuickTest: (numberOfQuestions: number, filteredTopics?: ITopic[]) => {
//         let data = TestDataProvider.getQuestions();
//         if (filteredTopics) {
//             data = data.filter((item) =>
//                 filteredTopics
//                     ?.map((topic) => topic.code)
//                     .includes(item.topicCode),
//             );
//         }
//         return sampleSize(data, numberOfQuestions);
//     },
//     getNewMockTest: () => {
//         let data = TestDataProvider.getQuestions();
//         return sampleSize(data, CONSTANTS.mockTestInfo.questionsLength);
//     },
//     getQuestionImage(code: string) {
//         const imgItem = TestDataProvider.getQuestionBankData()?.images.find(
//             (item) => item.code === code && !item.option,
//         );
//         if (imgItem) {
//             return this.imgBasePath + imgItem.src;
//         }
//         return '';
//     },
//     getOptionImage(code: string, option: OptionChar) {
//         const imgItem = TestDataProvider.getQuestionBankData()?.images.find(
//             (item) => item.code === code && item.option === option,
//         );
//         if (imgItem) {
//             return this.imgBasePath + imgItem.src;
//         }
//         return '';
//     },
//     getExplanation(questionCode: string) {
//         return TestDataProvider.getQuestionBankData()?.explanations.find(
//             (item) => item.questionCode === questionCode,
//         )?.content;
//     },
// };
