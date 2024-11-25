import { FC } from 'react';
import './ai-button.scss';

export const UIAIButton: FC = () => {
    return (
        <button onClick={() => onAiPressHandler()} className="ai-button">
            <img src="assets/images/icon-ai.svg" />
        </button>
    );

    function onAiPressHandler() {
        console.log('onAiHandler');
    }
};
