import { FC } from 'react';
import './theme-switcher.scss';

interface IUIThemeSwitcherProps {
    theme: 'light' | 'dark';
    onPress: () => void;
}

export const UIThemeSwitcher: FC<IUIThemeSwitcherProps> = ({
    theme,
    onPress,
}) => {
    return (
        <button onClick={onPress} className="theme-switcher">
            {theme === 'light' && (
                <img src="assets/images/icon-theme-dark.svg" />
            )}
            {theme === 'dark' && (
                <img src="assets/images/icon-theme-light.svg" />
            )}
        </button>
    );
};
