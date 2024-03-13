import './main.style.scss';

import { CssBaseline } from '@mui/material';
import { createSyncStoragePersister } from '@tanstack/query-sync-storage-persister';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { persistQueryClient } from '@tanstack/react-query-persist-client';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import App from '@/components/App';
import DataProvider from '@/provider/DataProvider';
import AppThemeProvider from '@/theme/AppThemeProvider';

import { STORE_KEY } from './utils/constants';

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false,
      staleTime: 0,
    },
  },
});
const localStoragePersister = createSyncStoragePersister({
  storage: window.sessionStorage,
  key: `${STORE_KEY}-cache`,
});
persistQueryClient({
  queryClient,
  persister: localStoragePersister,
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
          <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
      </AppThemeProvider>
    </DataProvider>
  </React.StrictMode>,
);
