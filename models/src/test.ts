export enum TestType {
    LearnPractice = 'learn-practice',
    QuickTest = 'quick-test',
    MockTest = 'mock-test',
}

export enum TestView {
    NotActive,
    Active,
    Review,
}

export enum TestLearnPracticeGroup {
    All,
    Unanswered,
    Incorrect,
    IncorrectAndUnanswered,
}
