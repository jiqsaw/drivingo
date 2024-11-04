export interface IQuestionBase {
    code: string;
    question: string;
    options: IQuestionOption[];
}
export interface IQuestion extends IQuestionBase {
    topicCode: string;
    questionImg?: string;
    questionVideo?: string;
    answer: OptionChar;
    isNIExempts: boolean;
}

export interface IQuestionOption {
    char: OptionChar;
    text: string;
    img?: string;
}

export interface IQuestionExplanation {
    questionCode: string;
    content: string;
}

export interface IQuestionImage {
    code: string;
    option?: OptionChar;
    src: any;
}

export type OptionChar = 'a' | 'b' | 'c' | 'd' | undefined;
