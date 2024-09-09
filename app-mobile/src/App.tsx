import { IonApp, setupIonicReact } from '@ionic/react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { storeUiActions, storeUiSelectors } from 'store/src/ui/ui';
import { UINetworkWarning } from '@drivingo/ui/components';
import AppRouter from './AppRouter';
import { logCurrentNetworkStatus } from './helper/app';
import { Network } from '@capacitor/network';



setupIonicReact();


const App: React.FC = () => {

    const theme = useSelector(storeUiSelectors.selectUiTheme);
    const network = useSelector(storeUiSelectors.selectNetwork);
    const dispatch = useDispatch();

    useEffect(() => {
        document.documentElement.classList.toggle('ion-palette-dark', theme === 'dark');
    }, [theme]);

    useEffect(() => {
        Network.addListener('networkStatusChange', status => {
            dispatch(storeUiActions.networkStatusChange(status));
        });

        logCurrentNetworkStatus().then((response) => {
            dispatch(storeUiActions.networkStatusChange(response));
        });
    }, []);

    return (
        <IonApp>
            {
                !network?.connected && <UINetworkWarning />
            }
            <AppRouter />
        </IonApp>
    );
};

export default App;
