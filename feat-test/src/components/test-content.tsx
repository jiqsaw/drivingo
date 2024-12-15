import { TestDataProvider } from '@drivingo/data-provider';
import {
    IQuestion,
    IQuestionBase,
    IQuestionOption,
    OptionChar,
    TestView,
} from '@drivingo/models';
import { CheckIcon, CloseIcon } from '@drivingo/ui';
import { FC } from 'react';

interface Props {
    questionNo: number;
    questionsLength: number;
    questionItem: IQuestion;
    selectedOptionChar: OptionChar;
    testView: TestView;
    reviewMode?: boolean;
    onSelectOption?: (selectedOption: OptionChar) => void;
    translatedData?: IQuestionBase;
    showTranslate?: boolean;
}

const FeatTestContent: FC<Props> = (props) => {
    const {
        questionNo,
        questionsLength,
        questionItem,
        selectedOptionChar,
        testView,
        reviewMode,
        onSelectOption,
        translatedData,
        showTranslate,
    } = props;
    return (
        <div className="test__question-wrap">
            <div className="test__no">
                {questionNo}/{questionsLength}
            </div>
            <div className="test__question">
                {translatedData && showTranslate
                    ? translatedData.question
                    : questionItem.question}
                {questionItem.questionImg && (
                    <img
                        className="test__question-img"
                        src={
                            TestDataProvider.imgBasePath +
                            questionItem.questionImg
                        }
                        alt={questionItem.code}
                    />
                )}
            </div>
            <div
                className={`test__options ${reviewMode ? 'test__option--review' : ''}`}
            >
                {questionItem.options.map((option, i) => {
                    return (
                        <div
                            className={`test__option ${selectedOptionChar === option.char ? 'test__option--selected' : ''} ${getOptionBackground(
                                option,
                                questionItem.answer,
                            )}`}
                            key={'option-' + i}
                            onClick={() =>
                                testView === TestView.Active &&
                                onSelectOption &&
                                onSelectOption(option.char)
                            }
                        >
                            <span className="test__option-prefix">
                                {getOptionIndicator(
                                    option,
                                    questionItem.answer,
                                )}
                            </span>
                            <span className="test__option-text">
                                {translatedData && showTranslate
                                    ? translatedData.options.find(
                                          (o) => o.char === option.char,
                                      )?.text
                                    : option.text}
                                {option.img && (
                                    <img
                                        src={
                                            TestDataProvider.imgBasePath +
                                            option.img
                                        }
                                        alt={questionItem.code}
                                    />
                                )}
                            </span>
                        </div>
                    );
                })}
            </div>
        </div>
    );

    function getOptionIndicator(option: IQuestionOption, answer: OptionChar) {
        const isSelectedOption = selectedOptionChar === option.char;
        const isOptionCorrect =
            option.char?.toLowerCase() === answer?.toLowerCase();

        if (testView === TestView.Review) {
            if (isSelectedOption) {
                return isOptionCorrect ? <CheckIcon /> : <CloseIcon />;
            }
            if (isOptionCorrect) {
                return <CheckIcon />;
            }
        }

        return option.char;
    }

    function getOptionBackground(option: IQuestionOption, answer: OptionChar) {
        const isSelectedOption = selectedOptionChar === option.char;
        const isOptionCorrect =
            option.char?.toLowerCase() === answer?.toLowerCase();

        if (testView === TestView.Review) {
            if (isSelectedOption) {
                return isOptionCorrect ? 'correct' : 'wrong';
            }
            if (isOptionCorrect) {
                return 'correct';
            }
        }

        return '';
    }
};

export default FeatTestContent;
