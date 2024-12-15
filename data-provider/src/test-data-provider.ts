import { DATA_QUESTION_BANK } from '@drivingo/data';
import { CONSTANTS } from '@drivingo/global';
import { ITopic, QuestionBank } from '@drivingo/models';
import { cloneDeep, sampleSize } from 'lodash';

class TestDataProviderSingleton {
    private static instance: TestDataProviderSingleton;
    private _questionBank: QuestionBank = QuestionBank.Car;

    public imgBasePath: string = 'data-images/test/';

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
        console.log('getQuestionBankData:', this._questionBank);
        this._questionBank;
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

    public getExplanation(questionCode: string) {
        return this.getQuestionBankData()?.explanations.find(
            (item) => item.questionCode === questionCode,
        )?.content;
    }
}

// Exporting the singleton instance
export const TestDataProvider = TestDataProviderSingleton.getInstance();
