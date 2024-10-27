import { storeUiActions, storeUiSelectors } from '@drivingo/store';
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

const Settings = () => {
    const theme = useSelector(storeUiSelectors.theme);
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
