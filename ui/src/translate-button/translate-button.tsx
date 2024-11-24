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
                    <img src="assets/images/icon-translate.svg" />
                </button>
            ) : (
                <div className="three-dot-loader">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            )}
        </>
    );
};
