import { FC, useRef, useState } from 'react';
import { CheckIcon, CloseIcon, RedirectOkIcon } from '../icons';
import { UIInlineModal } from '../modal/inline-modal';

import './test-answer-card.scss';

interface TestAnswerCardProps {
    number: number;
    status: boolean;
    question: string;
    onClick?: () => void;
}

export const UITestAnswerCard: FC<TestAnswerCardProps> = ({
    question,
    status,
    number,
    onClick,
}) => {
    return (
        <>
            <div className={`test-answer-card ${status ? 'correct' : 'wrong'}`}>
                <div className="test-answer-card__status">
                    {status ? <CheckIcon /> : <CloseIcon />}
                </div>
                <div className="test-answer-card__question">
                    <span className="number">
                        {number.toString().padStart(2, '0')}
                    </span>
                    <p className="question">{question}</p>
                </div>
                <button
                    type="button"
                    className="test-answer-card__link"
                    onClick={onClick}
                >
                    <RedirectOkIcon />
                </button>
            </div>
        </>
    );
};