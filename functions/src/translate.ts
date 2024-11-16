import * as admin from 'firebase-admin';
import {
    IOpenAITranslateResponse,
    IQuestionBase,
} from '../../models/src/index';

import { onInit } from 'firebase-functions/core';
import { defineSecret } from 'firebase-functions/params';
import OpenAI from 'openai';
import {
    generateTranslationPrompt,
    openAiTestTranslateResponse,
} from './open-ai-test-translate.model';

const openAiApiKey = defineSecret('OPEN_AI_API_KEY');
const openAiOrg = defineSecret('OPEN_AI_ORG');
const openAiProject = defineSecret('OPEN_AI_PROJECT');

var serviceAccount = require('../firebase-private-key.json');

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
});

let openai: OpenAI;

onInit(() => {
    openai = new OpenAI({
        apiKey: openAiApiKey.value(),
        organization: openAiOrg.value(),
        project: openAiProject.value(),
    });
});

export async function translate(languageCode: string, question: IQuestionBase) {
    const docPath = `/ai/test-translate/${languageCode}/`;
    const docRef = admin
        .firestore()
        .collection(`/ai/test-translate/${languageCode}/`)
        .doc(question.code);

    try {
        const docSnapshot = await docRef.get();
        if (docSnapshot.exists) {
            console.info('Return the existing data from DB');
            return { success: true, data: docSnapshot.data() };
        }

        console.info('Make a call to the OpenAI API');
        const response = await openai.chat.completions.create({
            model: 'gpt-4o-mini',
            messages: [
                {
                    role: 'user',
                    content: generateTranslationPrompt(languageCode, question),
                },
            ],
            max_tokens: 2048,
            response_format: openAiTestTranslateResponse,
        });

        if (!response || !response.choices || response.choices.length === 0) {
            throw new Error('Empty response from OpenAI API.');
        }

        const translatedText = response.choices[0].message?.content || '';

        if (!translatedText) {
            throw new Error('Empty response from OpenAI API.');
        }

        console.log('Translated text: ', translatedText);
        const translatedData: IOpenAITranslateResponse =
            JSON.parse(translatedText);

        // Validate the translated data
        if (
            !translatedData.question ||
            !Array.isArray(translatedData.options)
        ) {
            throw new Error('Invalid response format from OpenAI API.');
        }

        await admin
            .firestore()
            .doc(docPath + question.code)
            .set(translatedData);

        return { success: true, data: translatedData };
    } catch (error) {
        console.error('Error processing translation:', error);
        if (error instanceof Error) {
            return { success: false, error: error.message };
        } else {
            return { success: false, error: 'An unknown error occurred.' };
        }
    }
}
