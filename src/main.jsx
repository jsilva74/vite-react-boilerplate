import './main.style.scss';

import { CssBaseline } from '@mui/material';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import App from '@/components/App';
import { DataProvider } from '@/data-context/DataContextProvider';
import AppThemeProvider from '@/theme/AppThemeProvider';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: { retry: false, refetchOnWindowFocus: false, enabled: false },
  },
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <DataProvider>
      <AppThemeProvider>
        <QueryClientProvider client={queryClient}>
          <BrowserRouter>
            <CssBaseline />
            <App />
          </BrowserRouter>
        </QueryClientProvider>
      </AppThemeProvider>
    </DataProvider>
  </React.StrictMode>,
);
