import { IAIContent } from '@drivingo/models';

export default {
    path: 'theory-test/quic-test',
    greeting: 'Quick test greeting',
    suggestions: [
        {
            text: 'quick suggestion text 1',
            responseCode: 'unique-code',
        },
        {
            text: 'quick suggestion text 2',
            responseCode: 'unique-code2',
        },
    ],
} as IAIContent;
