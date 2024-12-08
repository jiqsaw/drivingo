import { QuestionBank } from './question-bank';

export interface ITopicQuestionBank {
    type: QuestionBank;
    topics: ITopic[];
}

export interface ITopic {
    code: string;
    count: number;
    name: string;
    order?: number;
}
