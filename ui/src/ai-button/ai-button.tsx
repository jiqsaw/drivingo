import { FC } from 'react';
import './ai-button.scss';

interface Props {
    viewMode?: 'drivingo' | 'ai' | 'iconOnly';
}

export const UIAIButton: FC<Props> = ({ viewMode = 'iconOnly' }) => {
    return (
        <div className="ai-button">
            {viewMode === 'drivingo' && <span>drivingo AI</span>}
            {viewMode === 'ai' && <span>AI</span>}
            {viewMode === 'iconOnly' && <span></span>}
        </div>
    );
};
