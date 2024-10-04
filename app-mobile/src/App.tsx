import { Network } from '@capacitor/network';
import { IonApp, setupIonicReact } from '@ionic/react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { storeUiActions, storeUiSelectors } from 'store/src/ui/ui';
import { UINetworkWarning } from 'ui/src';
import AppRouter from './AppRouter';

setupIonicReact();

const App: React.FC = () => {
    const theme = useSelector(storeUiSelectors.selectUiTheme);
    const network = useSelector(storeUiSelectors.selectNetwork);
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
    }, [dispatch]);

    return (
        <IonApp>
            {!network?.connected && <UINetworkWarning />}
            <AppRouter />
        </IonApp>
    );
};

export default App;
