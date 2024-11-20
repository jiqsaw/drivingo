import { FC } from 'react';
import './test-progress.scss';
import { CheckIcon } from '../icons';

interface TestProgressCardProps {
    title: string;
    progress?: number;
    isChecked?: boolean;
    icon: React.ReactNode;
    direction?: 'square' | 'horizontal';
    onClick?: () => void;
}

const optionsInitial: TestProgressCardProps = {
    title: 'Test Progress Card',
    progress: 0,
    isChecked: false,
    icon: <CheckIcon />,
    direction: 'square',
    onClick: () => {},
};

export const UITestProgressCard: FC<TestProgressCardProps> = ({
    title,
    progress,
    isChecked,
    icon,
    direction,
    onClick,
} = optionsInitial) => {
    return (
        <div
            className={`test-progress-card ${isChecked ? 'selected' : ''} ${direction || ''}`}
            onClick={onClick}
        >
            {isChecked && (
                <div className="checkmark">
                    <CheckIcon />
                </div>
            )}
            <div className="card-icon">{icon}</div>
            <h3 className="card-title">{title}</h3>
            <div className="progress-count">{progress}%</div>
            {progress && (
                <div className="card-progress">
                    <span
                        className="progress-bar"
                        style={{ width: `${progress}%` }}
                    ></span>
                </div>
            )}
        </div>
    );
};
