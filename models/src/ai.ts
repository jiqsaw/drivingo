export interface IAIContent {
    path: string;
    greeting: string;
    suggestions?: IAIContentSuggestion[];
}

export interface IAIContentSuggestion {
    text: string;
    responseCode: string;
}

export interface IAIResponse {
    code: string;
    content: string;
}
