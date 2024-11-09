import { FC } from 'react';
import './test-progress.scss';
import { CheckIcon } from '../icons';

interface TestProgressCardProps {
    title: string;
    progress: number;
    isChecked?: boolean;
    icon: React.ReactNode;
    onClick?: () => void;
}

export const UITestProgressCard: FC<TestProgressCardProps> = ({
    title,
    progress,
    isChecked,
    icon,
    onClick,
}) => {
    return (
        <div className="test-progress-card" onClick={onClick}>
            <div className="card-icon">{icon}</div>
            {isChecked && <div className="checkmark"><CheckIcon /></div>}
            <h3 className="card-title">{title}</h3>
            <div className="progress-count">{progress}%</div>
            <div className="card-progress">
                <span
                    className="progress-bar"
                    style={{ width: `${progress}%` }}
                ></span>
            </div>
        </div>
    );
};
