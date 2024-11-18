import { FC } from 'react';
import './translate-button.scss';

interface IUITranslateButtonProps {
    selected?: boolean;
    loadingTranslate: boolean;
    onPress: () => void;
}

export const UITranslateButton: FC<IUITranslateButtonProps> = ({
    selected,
    loadingTranslate,
    onPress,
}) => {
    return (
        <>
            {!loadingTranslate ? (
                <button
                    onClick={() => onPress()}
                    className={`${!selected ? 'translate-button' : 'translate-button translate-button__selected'}`}
                >
                    <img src="assets/icon-translate.svg" />
                </button>
            ) : (
                <div className="translate-button">
                    <div className="loading-dot"></div>
                </div>
            )}
        </>
    );
};
