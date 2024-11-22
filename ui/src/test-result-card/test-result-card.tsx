import { FC } from 'react';

import './test-result-card.scss';

interface TestResultCardProps {
    title: string;
    correct: number;
    total: number;
    icon: React.ReactNode;
}

export const UITestResultCard: FC<TestResultCardProps> = ({
    title,
    correct,
    total,
    icon,
}) => {
    return (
        <div
            className={`test-result-card ${correct || total ? 'higlight' : ''} `}
        >
            <div className="test-result-card__icon">{icon}</div>
            <h3 className="test-result-card__title">{title}</h3>
            <div className="test-result-card__count">
                {correct} / {total}
            </div>
        </div>
    );
};