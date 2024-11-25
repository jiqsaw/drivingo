import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App';

import { AuthProvider } from '@drivingo/auth';
import { drivingoStore, persistor } from '@drivingo/store';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';

const container = document.getElementById('root');
if (container) {
    const root = createRoot(container);
    root.render(
        <React.StrictMode>
            <BrowserRouter>
                <Provider store={drivingoStore}>
                    <PersistGate loading={null} persistor={persistor}>
                        <AuthProvider>
                            <App />
                        </AuthProvider>
                    </PersistGate>
                </Provider>
            </BrowserRouter>
        </React.StrictMode>,
    );
}
