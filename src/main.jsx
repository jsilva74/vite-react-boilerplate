import React from 'react';
import ReactDOM from 'react-dom/client';
import { DataProvider } from './data-context/DataContextProvider';
import AppThemeProvider from './theme/AppThemeProvider';
import App from './components/App';
import './main.style.scss';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <DataProvider>
      <AppThemeProvider>
        <App />
      </AppThemeProvider>
    </DataProvider>
  </React.StrictMode>,
);
