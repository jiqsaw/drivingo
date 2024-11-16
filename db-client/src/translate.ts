import {
    IFunctionTranslateRequest,
    IFunctionTranslateResponse,
    IQuestionBase,
} from '@drivingo/models';
import { httpsCallable } from 'firebase/functions';
import { functions } from '.';

const functionTranslateQuestion = 'translateQuestion';

export async function translateQuestion(
    languageCode: string,
    question: IQuestionBase,
) {
    const callableFunction = httpsCallable<
        IFunctionTranslateRequest,
        IFunctionTranslateResponse
    >(functions, functionTranslateQuestion);

    return callableFunction({ languageCode, question });
}
