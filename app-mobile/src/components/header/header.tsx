import {
    storeUiActions,
    storeUiSelectors,
    storeUserSelectors,
} from '@drivingo/store';
import { useIonRouter } from '@ionic/react';
import { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { UIAIButton, UIProfileButton, UIThemeSwitcher } from 'ui/src';
import './header.scss';

export interface IHeaderProps {
    isRoot?: boolean;
    backPath?: string;
    backText?: string;
}

const Header: FC<IHeaderProps> = (props) => {
    const { isRoot = true, backPath, backText } = props;

    const isLoggedIn = useSelector(storeUserSelectors.isLoggedIn);
    const router = useIonRouter();

    const theme = useSelector(storeUiSelectors.theme);
    const dispatch = useDispatch();

    return (
        <div className="header">
            {isRoot &&
                (!isLoggedIn ? (
                    <img src="assets/images/drivingo-logo.svg" />
                ) : (
                    <UIProfileButton />
                ))}
            {!isRoot && (
                <button
                    onClick={() => onBackHandler()}
                    className="header__back"
                >
                    <img src="assets/images/icon-arrow-back.svg" />
                    <span>{backText ?? ''}</span>
                </button>
            )}
            <div className="header__right-container">
                <UIThemeSwitcher
                    theme={theme}
                    onPress={() => dispatch(storeUiActions.switchTheme())}
                />
                <UIAIButton />
            </div>
        </div>
    );

    function onBackHandler() {
        if (backPath) {
            router.push(backPath, 'back');
        } else {
            router.goBack();
        }
    }
};

export default Header;
