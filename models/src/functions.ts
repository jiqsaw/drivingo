import { IQuestionBase } from './question';

export interface IFunctionTranslateRequest {
    languageCode: string;
    question: IQuestionBase;
}

export interface IFunctionTranslateResponse {
    success: boolean;
    data: IOpenAITranslateResponse;
}

export interface IOpenAITranslateResponse extends Omit<IQuestionBase, 'code'> {}
