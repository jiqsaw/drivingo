import { FC } from 'react';
import './translate-button.scss';

export const UITranslateButton: FC = () => {
    return (
        <button
            onClick={() => onTranslatePressHandler()}
            className="translate-button"
        >
            <img src="assets/icon-translate.svg" />
        </button>
    );

    function onTranslatePressHandler() {
        console.log('onAiHandler');
    }
};
