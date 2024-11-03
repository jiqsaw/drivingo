import { FC } from 'react';

import './test-result-card.scss';

interface TestResultCardProps {
    title: string;
    count: string;
    icon: React.ReactNode;
}

export const UITestResultCard: FC<TestResultCardProps> = ({
    title,
    count,
    icon,
}) => {
    return (
        <div className="test-result-card">
            <div className="test-result-card__icon">{icon}</div>
            <h3 className="test-result-card__title">{title}</h3>
            <div className="test-result-card__count">{count}</div>
        </div>
    );
};
