import { Network } from '@capacitor/network';
import { storeUiActions, storeUiSelectors } from '@drivingo/store';
import { IonApp, setupIonicReact } from '@ionic/react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { UINetworkWarning } from 'ui/src';
import AppRouter from './AppRouter';

setupIonicReact();

const App: React.FC = () => {
    const theme = useSelector(storeUiSelectors.theme);
    const network = useSelector(storeUiSelectors.networkStatus);
    const dispatch = useDispatch();

    useEffect(() => {
        document.documentElement.classList.toggle(
            'ion-palette-dark',
            theme === 'dark',
        );
        Network.addListener('networkStatusChange', (status) => {
            dispatch(storeUiActions.networkStatusChange(status));
        });

        Network.getStatus().then((response) =>
            dispatch(storeUiActions.networkStatusChange(response)),
        );
    }, [theme]);

    return (
        <IonApp>
            {!network?.connected && <UINetworkWarning />}
            <AppRouter />
        </IonApp>
    );
};

export default App;
