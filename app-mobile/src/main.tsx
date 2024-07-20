import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

import { BrowserRouter } from 'react-router-dom';
import ThemeProvider from './context/theme-provider';

const container = document.getElementById('root');
// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const root = createRoot(container!);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
