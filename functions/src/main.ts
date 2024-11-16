import * as functions from 'firebase-functions';
import { setGlobalOptions } from 'firebase-functions';
import { IQuestion } from '../../models/src/index';
import { translate } from './translate';

setGlobalOptions({
    region: 'europe-west2',
});

export const translateQuestion = functions.https.onCall(async (request) => {
    const { languageCode, question } = request.data;
    return await translate(languageCode, question as IQuestion);
});
