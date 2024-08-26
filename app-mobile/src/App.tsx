import { IonApp, setupIonicReact } from '@ionic/react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { storeUiSelectors } from 'store/src/ui/ui';

import AppRouter from './AppRouter';



setupIonicReact();

const App: React.FC = () => {

    const theme = useSelector(storeUiSelectors.selectUiTheme);

    useEffect(() => {
        document.documentElement.classList.toggle('ion-palette-dark', theme === 'dark');
    }, [theme]);

    return (
        <IonApp>
            <AppRouter />
        </IonApp>
    );
};

export default App;
