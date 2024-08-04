import { IonApp, setupIonicReact } from '@ionic/react';



import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { storeUiSelectors } from 'store/src/ui/ui';
import Router from './Router';

setupIonicReact();

const App: React.FC = () => {

    const theme = useSelector(storeUiSelectors.selectUiTheme);

    useEffect(() => {
        document.documentElement.classList.toggle('ion-palette-dark', theme === 'dark');
    }, [theme]);

    return (
        <IonApp>
            <Router />
        </IonApp>
    );
};

export default App;
