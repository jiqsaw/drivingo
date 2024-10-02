import {
    IonBackButton,
    IonButtons,
    IonContent,
    IonHeader,
    IonItem,
    IonList,
    IonPage,
    IonTitle,
    IonToggle,
    IonToolbar,
} from '@ionic/react';
import { useDispatch, useSelector } from 'react-redux';
import { storeUiActions, storeUiSelectors } from 'store/src/ui/ui';

const Settings = () => {
    const theme = useSelector(storeUiSelectors.selectUiTheme);
    const dispatch = useDispatch();
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonBackButton />
                    </IonButtons>
                    <IonTitle>Settings</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
                <IonList inset={true}>
                    <IonItem>
                        <IonToggle
                            checked={theme === 'dark'}
                            onIonChange={() =>
                                dispatch(storeUiActions.switchTheme())
                            }
                            justify="space-between"
                        >
                            Dark Mode
                        </IonToggle>
                    </IonItem>
                </IonList>
            </IonContent>
        </IonPage>
    );
};

export default Settings;
