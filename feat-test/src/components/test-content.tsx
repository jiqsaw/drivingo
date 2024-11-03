import { TestDataProvider } from '@drivingo/data-provider';
import { IQuestion, OptionChar, TestView } from '@drivingo/models';
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
        onSelectOption,
    } = props;
    return (
        <>
            <div>
                <p>
                    Soru no:&nbsp;
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
                                TestView.Active &&
                                onSelectOption &&
                                onSelectOption(option.char)
                            }
                        >
                            {option.char}){option.text}
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
};

export default FeatTestContent;
