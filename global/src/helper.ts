import { CONSTANTS } from '.';

export class Helper {
    static getPassingMarkMockTest() {
        return (
            CONSTANTS.mockTestInfo.passingRequiredCorrect +
            '/' +
            CONSTANTS.mockTestInfo.questionsLength
        );
    }
}
