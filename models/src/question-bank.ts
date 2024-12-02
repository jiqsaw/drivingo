import { IQuestion, IQuestionExplanation, IQuestionImage } from './question';

export enum QuestionBank {
    Car,
    Motorcycle,
    LGV_PCV,
    ADI,
}

export interface IQuestionBank {
    type: QuestionBank;
    data: IQuestionBankData;
}

export interface IQuestionBankData {
    questions: IQuestion[];
    images: IQuestionImage[];
    explanations: IQuestionExplanation[];
}
