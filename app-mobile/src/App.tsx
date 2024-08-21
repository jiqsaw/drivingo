import { IonApp, setupIonicReact } from '@ionic/react';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { storeUiSelectors } from 'store/src/ui/ui';
import { Network } from '@capacitor/network';
import { UINetworkWarning } from '@drivingo/ui/components';


import AppRouter from './AppRouter';

setupIonicReact();

export const logCurrentNetworkStatus = async () => {
    const status = await Network.getStatus();
    return status;
};

const App: React.FC = () => {

    const theme = useSelector(storeUiSelectors.selectUiTheme);
    const [networkControl, setNetworkControl] = useState(
        {
            connected: true,
            connectionType: ''
        }
    );

    useEffect(() => {
        document.documentElement.classList.toggle('ion-palette-dark', theme === 'dark');
    }, [theme]);

    useEffect(() => {
        Network.addListener('networkStatusChange', status => {
            setNetworkControl(status);
        });

        logCurrentNetworkStatus().then((response) => {
            setNetworkControl(response);
        });

        return () => {
            Network.removeAllListeners();
        };
    }, [])
    return (
        <IonApp>
            {
                !networkControl.connected && <UINetworkWarning />
            }
            <AppRouter />
        </IonApp>
    );
};

export default App;
