import { IQuestionBase } from '@drivingo/models';
import { ResponseFormatJSONSchema } from 'openai/resources';

export const openAiTestTranslateResponse: ResponseFormatJSONSchema = {
    type: 'json_schema',
    json_schema: {
        name: 'IQuestion',
        strict: true,
        schema: {
            type: 'object',
            properties: {
                question: {
                    type: 'string',
                    description: 'The question being asked.',
                },
                options: {
                    type: 'array',
                    description: 'The available options for the question.',
                    items: {
                        type: 'object',
                        properties: {
                            char: {
                                type: 'string',
                                description:
                                    'A character representation of the option.',
                            },
                            text: {
                                type: 'string',
                                description:
                                    'The text description of the option.',
                            },
                        },
                        required: ['char', 'text'],
                        additionalProperties: false,
                    },
                },
            },
            required: ['question', 'options'],
            additionalProperties: false,
        },
    },
};

export function generateTranslationPrompt(
    languageCode: string,
    questionData: IQuestionBase,
): string {
    return `Translate the following JSON into ${languageCode}.
  {
      "question": "${questionData.question}",
      "options": ${JSON.stringify(questionData.options)}
  }`;
}
