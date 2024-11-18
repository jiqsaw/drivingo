import { TestType } from '@drivingo/models';
import {
    storeTheoryActiveTestActions,
    storeTheoryActiveTestSelectors,
    storeUiActions,
    storeUiSelectors,
} from '@drivingo/store';
import { UIThemeSwitcher, UITranslateButton } from '@drivingo/ui';
import { AlertButton, IonAlert, useIonRouter } from '@ionic/react';
import { FC, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './test-header.scss';

interface IUITranslateButtonProps {
    type?: TestType;
    loadingTranslate: boolean;
    onTranslate?: () => void;
}

const TestHeader: FC<IUITranslateButtonProps> = ({
    type,
    loadingTranslate,
    onTranslate,
}) => {
    const alertButtons = [
        {
            text: 'Cancel',
            role: 'confirm',
            handler: () => {},
        },
        {
            text: 'Exit',
            role: 'destructive',
            handler: () => onDidExit(),
        },
    ];

    const alertPauseButton = {
        text: 'Pause',
        role: 'confirm',
        handler: () => onPause(),
    };

    const getAlertButtons = (): AlertButton[] => {
        return [
            ...(type === TestType.MockTest ? [alertPauseButton] : []),
            ...alertButtons,
        ];
    };

    const dispatch = useDispatch();
    const theme = useSelector(storeUiSelectors.theme);
    const isPaused = useSelector(storeTheoryActiveTestSelectors.isPaused);
    const showTranslate = useSelector(
        storeTheoryActiveTestSelectors.showTranslate,
    );
    const currentQuestionTranslate = useSelector(
        storeTheoryActiveTestSelectors.currentQuestionTranslate,
    );
    const [showConfirmAlert, setShowConfirmAlert] = useState<boolean>(false);

    const router = useIonRouter();

    return (
        <div className="test-header">
            {!isPaused ? (
                <button
                    onClick={() => onExitHandler()}
                    className="test-header__back"
                >
                    <img src="assets/images/icon-arrow-back.svg" />
                    <span>Exit</span>
                </button>
            ) : (
                <div></div>
            )}

            <div className="test-header__right-container">
                {isPaused ? (
                    <button onClick={() => onResume()}>Resume</button>
                ) : (
                    <>
                        <UIThemeSwitcher
                            theme={theme}
                            onPress={() =>
                                dispatch(storeUiActions.switchTheme())
                            }
                        />
                        <UITranslateButton
                            selected={showTranslate}
                            loadingTranslate={loadingTranslate}
                            onPress={() => onTranslateHandler()}
                        />
                    </>
                )}
            </div>

            <IonAlert
                header="Are you sure you wish to exit?"
                isOpen={showConfirmAlert}
                buttons={getAlertButtons()}
                onDidDismiss={() => setShowConfirmAlert(false)}
            ></IonAlert>
        </div>
    );

    function onExitHandler() {
        if (type === TestType.LearnPractice) {
            dispatch(storeTheoryActiveTestActions.exit());
            router.push(`/theory-test/learn`, 'back');
        } else {
            setShowConfirmAlert(true);
        }
    }

    function onPause() {
        dispatch(storeTheoryActiveTestActions.pause());
    }

    function onResume() {
        dispatch(storeTheoryActiveTestActions.unpause());
    }

    function onDidExit() {
        dispatch(storeTheoryActiveTestActions.exit());
        router.push(`/theory-test/${type}`, 'back');
    }

    function onTranslateHandler() {
        if (showTranslate) {
            dispatch(storeTheoryActiveTestActions.hideTranslate());
        } else {
            if (currentQuestionTranslate) {
                dispatch(storeTheoryActiveTestActions.showTranslate());
            } else {
                onTranslate && onTranslate();
            }
        }
    }
};

export default TestHeader;
