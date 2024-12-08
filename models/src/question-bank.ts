import { IQuestion, IQuestionExplanation, IQuestionImage } from './question';

export enum QuestionBank {
    Car = 'car',
    Motorcycle = 'motorcycle',
    LGV_PCV = 'lgv-pcv',
    ADI = 'adi',
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
