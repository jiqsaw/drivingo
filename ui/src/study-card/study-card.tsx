import { FC } from 'react';

import './study-card.scss';
import { AlertsIcon, ArrowNextIcon } from '../icons';

interface StudyCardProps {
    title: string;
    description: string;
    progress?: number;
    pages?: number;
    onClick?: () => void;
}

const optionsInitial: StudyCardProps = {
    title: 'Study Card',
    description: 'Description',
    progress: 0,
    pages: 0,
    onClick: () => {},
};

export const UIStudyCard: FC<StudyCardProps> = ({
    title,
    description,
    progress,
    pages,
    onClick,
} = optionsInitial) => {
    return (
        <div className="study-card" onClick={onClick}>
            <div className="study-card__header">
                <h2 className="study-card__title">
                    <AlertsIcon />
                    <span>{title}</span>
                </h2>
                <div className="study-card__next-icon">
                    <ArrowNextIcon />
                </div>
            </div>
            <div className="study-card__content">{description}</div>
            <div className="study-card__footer">
                <div className="study-card__progress-item">
                    <strong className="study-card__progress-item--big-text">
                        {progress}%{' '}
                    </strong>
                    <span className="study-card__progress-item--opacity-50">
                        read
                    </span>
                </div>{' '}
                <div className="study-card__progress-item study-card__progress-item--opacity-50">
                    {pages} pages
                </div>
            </div>
        </div>
    );
};
