import { TestDataProvider } from '@drivingo/data-provider';
import {
    IQuestion,
    IQuestionOption,
    OptionChar,
    TestView,
} from '@drivingo/models';
import { FC } from 'react';

interface Props {
    questionNo: number;
    questionsLength: number;
    questionItem: IQuestion;
    selectedOptionChar: OptionChar;
    testView: TestView;
    onSelectOption?: (selectedOption: OptionChar) => void;
}

// ????? show correct and incorrect option (even the selected option is correct) on selectOption
const FeatTestContent: FC<Props> = (props) => {
    const {
        questionNo,
        questionsLength,
        questionItem,
        selectedOptionChar,
        testView,
        onSelectOption,
    } = props;
    return (
        <>
            <div>
                <p>
                    Question no:&nbsp;
                    {questionNo}/{questionsLength}
                </p>
                <p>
                    {questionItem.question}
                    {questionItem.questionImg !== '' && (
                        <img
                            src={TestDataProvider.getQuestionImage(
                                questionItem.code,
                            )}
                            alt={questionItem.code}
                        />
                    )}
                </p>
            </div>
            <div>
                {questionItem.options.map((option, i) => {
                    return (
                        <div
                            className={`test__option ${selectedOptionChar === option.char ? 'test__option--selected' : ''}`}
                            key={'option-' + i}
                            onClick={() =>
                                testView === TestView.Active &&
                                onSelectOption &&
                                onSelectOption(option.char)
                            }
                        >
                            {getOptionIndicator(option, questionItem.answer)}

                            {option.text}
                            {option.img && (
                                <img
                                    src={TestDataProvider.getOptionImage(
                                        questionItem.code,
                                        option.char,
                                    )}
                                    alt={questionItem.code}
                                />
                            )}
                        </div>
                    );
                })}
            </div>
        </>
    );

    // ?? Use this method or extract the logic into another method to apply the same logic for the option item background
    function getOptionIndicator(option: IQuestionOption, answer: OptionChar) {
        const isSelectedOption = selectedOptionChar === option.char;
        const isOptionCorrect =
            option.char?.toLowerCase() === answer?.toLowerCase();

        if (testView === TestView.Review) {
            if (isSelectedOption) {
                return isOptionCorrect ? '✓ ' : 'X ';
            }
            if (isOptionCorrect) {
                return '✓ ';
            }
        }

        return option.char;
    }
};

export default FeatTestContent;
